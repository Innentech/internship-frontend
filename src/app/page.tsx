"use client"
import Dashboard from "./component/dashboard_components/Dashboard"
import {SessionProvider, useSession} from "next-auth/react"
import {redirect} from "next/navigation"
import {useEffect} from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function App() {
  return (
    <SessionProvider>
      <DashboardPage />
    </SessionProvider>
  )
}

function DashboardPage() {
  const {data: session, status} = useSession()
  useEffect(() => {
    if (status !== "loading" && !session) {
      redirect("/login")
    }
  }, [status])

  return (
    <main className="bg-slate-100 w-screen min-h-screen flex justify-center align-super">
      {session ? (
        <Dashboard />
      ) : (
        <div className="relative bg-white bg-opacity-80 backdrop-blur-sm p-6 md:p-10 w-screen mx-4 md:mx-20 my-10 flex flex-col shadow-xl gap-4 border-none">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} inline={true} height={"150px"} />
          <Skeleton count={1} height={"30px"} />
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={10} height={"35px"} />
        </div>
      )}
    </main>
  )
}
