import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"
import {NextAuthOptions} from "next-auth"
import https from "https"

const customHttpAgent = new https.Agent({
  rejectUnauthorized: false,
})

const authOptions: NextAuthOptions = {
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
  session: {
    strategy: "jwt",
    maxAge: 4 * 60 * 60, // 4 hours
  },
  callbacks: {
    async session({session, token, user}) {
      return session
    },
    async redirect({url, baseUrl}) {
      return baseUrl
    },
    async jwt({token, user, account, profile, session}) {
      // console.log("JWT token: ", token)
      // console.log("JWT user : ", user)
      // console.log("JWT account : ", account) // important
      // console.log("JWT profile : ", profile) // important
      // console.log("JWT SESSION", session)
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
