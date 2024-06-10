"use client"
import Dashboard from "./component/Dashboard"
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
  const {data: session, status: isAuthenticated} = useSession()

  // fix session only lasts for 0 seconds ?
  // no id in data
  useEffect(() => {
    // if (!session) redirect("/login")
    console.log(session, isAuthenticated)
  }, [])
  // if (!session) return null

  return (
    <main className="bg-slate-100 w-screen min-h-screen flex justify-center align-super">
      {true ? <Dashboard /> : <></>}
    </main>
  )
}
