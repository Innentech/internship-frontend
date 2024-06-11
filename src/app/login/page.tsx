"use client"
import {signIn, signOut} from "next-auth/react"
import {SessionProvider, useSession} from "next-auth/react"
import Link from "next/link"

export default function LoginWrapper() {
  return (
    <SessionProvider>
      <LoginPage />
    </SessionProvider>
  )
}

function LoginPage() {
  const {data: session, status} = useSession()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
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
