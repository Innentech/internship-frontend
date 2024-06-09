import {useState, useEffect} from "react"
import LogoutBtn from "./dashboard_components/LogoutBtn"
import DevicesTable from "./dashboard_components/DevicesTable"
import MainDashboardCards from "./dashboard_components/MainDashboardCards"
import Device from "@/app/interfaces/Device"

const Dashboard: React.FC = () => {
  const [devicesData, setDevicesData] = useState<Device[]>([])

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch("/data.json") // fetch from real api endpoint
        const data: Device[] = await response.json()
        setDevicesData(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchDevices()
  }, [])

  return (
    <div className="relative bg-white bg-opacity-80 backdrop-blur-sm p-6 md:p-10 w-screen mx-4 md:mx-20 my-10 flex flex-col border-r-8 rounded-3xl shadow-xl gap-4">
      <h1 className="text-4xl font-semibold mb-6">Dashboard Overview</h1>
      <MainDashboardCards devices={devicesData} />
      <DevicesTable devices={devicesData} />
      <LogoutBtn />
    </div>
  )
}

export default Dashboard
