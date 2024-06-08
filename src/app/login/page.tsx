"use client"
import {signIn} from "next-auth/react"

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn("keycloak")}>Sign in with Keycloak</button>
    </div>
  )
}
