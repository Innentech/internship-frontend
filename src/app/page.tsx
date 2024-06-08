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
    // if (!session) redirect("/login")
  }, [])

  return (
    <main className="bg-slate-100 w-screen min-h-screen flex justify-center align-super">
      {true ? <Dashboard /> : <></>}
    </main>
  )
}
