import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons"
import {signOut} from "next-auth/react"

export default function LogoutBtn() {
  return (
    <button
      onClick={() => {
        signOut()
        localStorage.clear()
      }}
      className="ml-auto max-w-32 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
      Log Out
    </button>
  )
}
