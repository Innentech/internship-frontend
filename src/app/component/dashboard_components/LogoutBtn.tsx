"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons"
import {signOut} from "next-auth/react"

export const LogoutBtn: React.FC = () => {
  return (
    <button
      onClick={() => {
        signOut()
        localStorage.clear()
      }}
    >
      <FontAwesomeIcon
        icon={faSignOutAlt}
        className="rounded-full border border-red-400 p-4 w-6 h-6 flex justify-center items-center bg-white transition duration-300 ease-in-out hover:bg-red-400 hover:text-white cursor-pointer shadow-lg"
      />
    </button>
  )
}

export default LogoutBtn
