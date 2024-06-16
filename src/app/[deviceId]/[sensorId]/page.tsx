"use client"
import {useSearchParams} from "next/navigation"
import {SessionProvider} from "next-auth/react"
import {useEffect, useState} from "react"
import {useProtectedRoute} from "@/app/utils/sessionHook"
import CustomLineChart from "@/app/component/deviceCharts/LineChart"
import CustomBarChart from "@/app/component/deviceCharts/BarChart"
import CustomTableChart from "@/app/component/deviceCharts/TableChart"

const SensorScreen: React.FC = ({params}: any) => {
  const searchParams = useSearchParams()
  const sensorId: string = params.sensorId
  const sensorName: string | null = searchParams.get("name")

  useProtectedRoute()

  const [sensorData, setSensorData] = useState([])
  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch("/sensors/TLM0203-sensors-data.json")
        const data = await response.json()
        data.forEach((item: any) => {
          item.date = new Date(item.date).toLocaleString()
        })
        setSensorData(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchSensorData()
  }, [])

  return (
    <div className="min-h-auto relative bg-white bg-opacity-80 backdrop-blur-sm p-6 md:p-10 w-auto mx-4 md:mx-20 my-10 flex flex-col border-r-8 rounded-3xl shadow-xl gap-4">
      <h2 className="text-2xl font-semibold mb-6">
        Current sensor: {sensorName ? sensorName : sensorId}
      </h2>
      <CustomLineChart data={sensorData} />
      <CustomBarChart data={sensorData} />
      <CustomTableChart data={sensorData} />
    </div>
  )
}

const WrappedSensorScreen: React.FC = (props: any) => (
  <SessionProvider>
    <SensorScreen {...props} />
  </SessionProvider>
)

export default WrappedSensorScreen
