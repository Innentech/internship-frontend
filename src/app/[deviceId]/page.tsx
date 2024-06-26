"use client"
import {useSearchParams} from "next/navigation"
import {SessionProvider} from "next-auth/react"
import {useEffect, useState} from "react"
import Link from "next/link"
import Sensor from "../interfaces/Sensor"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import {useProtectedRoute} from "../utils/sessionHook"

const DeviceScreen: React.FC = ({params}: any) => {
  const [loading, setLoading] = useState(true)

  const searchParams = useSearchParams()
  const deviceId: string = params.deviceId
  const deviceName: string | null = searchParams.get("name")

  useProtectedRoute()

  const [sensors, setSensors] = useState<Sensor[]>([])
  useEffect(() => {
    const fetchSensors = async () => {
      try {
        const response = await fetch("/sensors.json")
        const data = await response.json()
        const filteredSensors = data.filter(
          (sensor: Sensor) => sensor.deviceId == deviceId
        ) // temporary because im gonna get the filtered data from backend anyways
        setSensors(filteredSensors)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }
    fetchSensors()
  }, [])

  return (
    <div className="min-h-auto relative bg-white bg-opacity-80 backdrop-blur-sm p-6 md:p-10 w-auto mx-4 md:mx-20 my-10 flex flex-col border-r-8 rounded-3xl shadow-xl gap-4">
      <h2 className="text-2xl font-semibold mb-6">
        Current device: {deviceName ? deviceName : deviceId}
      </h2>
      {loading ? (
        <Skeleton count={10} height={"85px"} />
      ) : sensors.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {sensors.map(sensor => (
            <Link
              key={sensor.sensorId}
              href={`/${deviceId}/${sensor.sensorId}?name=${sensor.name}`}
              className="block border border-blue-500 rounded-lg overflow-hidden hover:bg-blue-100"
            >
              <div className="p-4">
                <p className="text-lg font-semibold text-blue-500 mb-2">
                  {sensor.name}
                </p>
                <p className="text-base text-gray-600">
                  Sensor ID: {sensor.sensorId}
                </p>
                <p className="text-base text-gray-600">
                  Created at: {sensor.createdAt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h1>No sensors available</h1>
      )}
    </div>
  )
}

const WrappedDeviceScreen: React.FC = (props: any) => (
  <SessionProvider>
    <DeviceScreen {...props} />
  </SessionProvider>
)

export default WrappedDeviceScreen
