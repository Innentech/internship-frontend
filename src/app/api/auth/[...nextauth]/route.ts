import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"
import {NextAuthOptions} from "next-auth"
import https from "https"

const customHttpAgent = new https.Agent({
  rejectUnauthorized: false,
})

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID as string,
      clientSecret: process.env.KEYCLOAK_SECRET as string,
      issuer: process.env.KEYCLOAK_ISSUER as string,
      httpOptions: {
        agent: customHttpAgent,
      },
    }),
  ],
  callbacks: {
    async session({session, token, user}) {
      console.log(session, token, user)
      return session
    },
    async redirect({url, baseUrl}) {
      console.log("Redirect callback", url, baseUrl)
      return baseUrl
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
