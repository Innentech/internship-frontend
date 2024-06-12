"use client"
import Dashboard from "./component/dashboard_components/Dashboard"
import {SessionProvider} from "next-auth/react"
import {useProtectedRoute} from "./utils/sessionHook"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const App: React.FC = () => (
  <SessionProvider>
    <DashboardPage />
  </SessionProvider>
)

const DashboardPage: React.FC = () => {
  const {session, status} = useProtectedRoute()

  return (
    <main className="bg-slate-100 w-screen min-h-screen flex justify-center align-super">
      {status === "loading" ? <LoadingSkeleton /> : session && <Dashboard />}
    </main>
  )
}

const LoadingSkeleton: React.FC = () => (
  <div className="relative bg-white bg-opacity-80 backdrop-blur-sm p-6 md:p-10 w-screen mx-4 md:mx-20 my-10 flex flex-col shadow-xl gap-4 border-none">
    <Skeleton count={1} height={"50px"} />
    <Skeleton count={1} inline={true} height={"150px"} />
    <Skeleton count={1} height={"30px"} />
    <Skeleton count={1} height={"50px"} />
    <Skeleton count={1} height={"50px"} />
    <Skeleton count={10} height={"35px"} />
  </div>
)

export default App
