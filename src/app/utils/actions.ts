"use server"
import {redirect} from "next/navigation"

// a little loophole for redirecting users on frontend without using router
export async function navigate(path: string) {
  redirect(path)
}
