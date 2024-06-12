"use client"
import {useSearchParams} from "next/navigation"
import {SessionProvider} from "next-auth/react"
import {useEffect, useState} from "react"
import {useProtectedRoute} from "@/app/utils/sessionHook"
import CustomLineChart from "@/app/component/deviceCharts/LineChart"
import CustomBarChart from "@/app/component/deviceCharts/BarChart"
import CustomTableChart from "@/app/component/deviceCharts/TableChart"

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

const SensorScreen: React.FC = ({params}: any) => {
  const searchParams = useSearchParams()
  const sensorId: string = params.sensorId
  const sensorName: string | null = searchParams.get("name")

  useProtectedRoute()

  const [sensorData, setSensorData] = useState([{sensorName: "GPS", id: 1}])
  useEffect(() => {
    // fetch sensors
  }, [sensorData])

  return (
    <div className="min-h-auto relative bg-white bg-opacity-80 backdrop-blur-sm p-6 md:p-10 w-auto mx-4 md:mx-20 my-10 flex flex-col border-r-8 rounded-3xl shadow-xl gap-4">
      <h2 className="text-2xl font-semibold mb-6">
        Current sensor: {sensorName ? sensorName : sensorId}
      </h2>
      <CustomLineChart data={datacharts} />
      <CustomBarChart data={datacharts} />
      <CustomTableChart data={datacharts} />
    </div>
  )
}

const WrappedSensorScreen: React.FC = (props: any) => (
  <SessionProvider>
    <SensorScreen {...props} />
  </SessionProvider>
)

export default WrappedSensorScreen
