"use client"
import {useSearchParams, useRouter} from "next/navigation"
import {useSession, SessionProvider} from "next-auth/react"
import {useEffect, useState} from "react"
import {redirect} from "next/navigation"
import LineChart from "../component/deviceCharts/LineChart"
import BarChart from "../component/deviceCharts/BarChart"
import CustomTableChart from "../component/deviceCharts/TableChart"

const datacharts = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const DeviceScreen = ({params}: any) => {
  const {data: session} = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const deviceId: string = params.deviceId
  const deviceName: string | null = searchParams.get("name")

  useEffect(() => {
    // if (!session) redirect("/login")
  }, [session, router])
  // if (!session) return null

  const [sensorData, setSensorData] = useState()
  useEffect(() => {
    // fetch sensor data by device id
  }, [sensorData])
  return (
    <div className="min-h-auto relative bg-white bg-opacity-80 backdrop-blur-sm p-6 md:p-10 w-auto mx-4 md:mx-20 my-10 flex flex-col border-r-8 rounded-3xl shadow-xl gap-4">
      <h2 className="text-2xl font-semibold mb-6">
        Current device: {deviceName ? deviceName : deviceId}
      </h2>
      <LineChart data={datacharts} />
      <BarChart data={datacharts} />
      <CustomTableChart data={datacharts} />
    </div>
  )
}

const WrappedDeviceScreen = (props: any) => (
  <SessionProvider>
    <DeviceScreen {...props} />
  </SessionProvider>
)

export default WrappedDeviceScreen
