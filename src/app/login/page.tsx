"use client"
import {signIn, signOut} from "next-auth/react"
import {SessionProvider} from "next-auth/react"
import Link from "next/link"
import {useProtectedRoute} from "../utils/sessionHook"

const LoginWrapper: React.FC = () => (
  <SessionProvider>
    <LoginPage />
  </SessionProvider>
)

const LoginPage: React.FC = () => {
  const {session} = useProtectedRoute()

  return (
    <div className="min-h-screen py-4 px-4 sm:px-6 lg:px-2 w-screen justify-center flex">
      <div className="max-w-md space-y-8 relative bg-white bg-opacity-80 backdrop-blur-sm p-6 md:p-10 w-screen mx-4 md:mx-20 my-10 flex flex-col shadow-xl gap-4 border-none h-fit">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            {!session ? (
              <button
                onClick={() => signIn("keycloak")}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in with Keycloak
              </button>
            ) : (
              <>
                <p className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  You are already logged in.
                </p>
                <Link
                  className="w-full flex justify-center py-2 px-4 border-2 border-green-500 rounded-md shadow-sm text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-green-400 hover:border-transparent focus:ring-indigo-500 my-5"
                  href="/"
                >
                  Navigate to dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="w-full flex justify-center py-2 px-4 border-2 border-red-500 rounded-md shadow-sm text-sm font-medium text-black  hover:bg-red-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >
                  Sign out?
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginWrapper
