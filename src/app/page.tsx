import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>NEXTJS FRONTEND FARIS</h1>
      <Link href="/login">Go to Login Page</Link>
    </main>
  )
}
