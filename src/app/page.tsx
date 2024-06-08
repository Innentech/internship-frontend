"use client"
import Dashboard from "./component/dashboard"
import {SessionProvider, useSession} from "next-auth/react"
import {redirect} from "next/navigation"
import {useEffect} from "react"

export default function App() {
  return (
    <SessionProvider>
      <Main />
    </SessionProvider>
  )
}

function Main() {
  const {data: session} = useSession()

  useEffect(() => {
    if (!session) redirect("/login")
  }, [])

  return <main>{session ? <Dashboard /> : <></>}</main>
}
