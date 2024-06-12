"use client"
import {useSession} from "next-auth/react"
import {useEffect} from "react"
import {useRouter} from "next/navigation"

export const useProtectedRoute = () => {
  const {data: session, status} = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/login")
    }
  }, [status, session, router])

  return {session, status}
}
