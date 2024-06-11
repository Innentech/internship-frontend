"use client"
import Link from "next/link"
import LogoutBtn from "./dashboard_components/LogoutBtn"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChartLine} from "@fortawesome/free-solid-svg-icons"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"

const Navbar: React.FC = () => {
  const goBack = () => {
    if (window.location.pathname !== "/") {
      window.history.back()
    }
  }

  return (
    <nav className="flex z-10 gap-2 align-middle items-center relative bg-white bg-opacity-80 backdrop-blur-s md: mx-4 md:mx-20 my-10  border-none mb-0 px-6 py-4 border-r-8 rounded-3xl shadow-xl">
      <button onClick={goBack}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="rounded-full border border-blue-400 p-4 w-6 h-6 flex justify-center items-center bg-white transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white cursor-pointer shadow-lg"
        />
      </button>

      <Link href={"/"}>
        <FontAwesomeIcon
          icon={faChartLine}
          className="rounded-full border border-blue-400 p-4 w-6 h-6 flex justify-center items-center bg-white transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white cursor-pointer shadow-lg"
        />
      </Link>
      <LogoutBtn />
    </nav>
  )
}

export default Navbar
