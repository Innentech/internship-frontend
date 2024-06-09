import Device from "@/app/interfaces/Device"
import Props from "@/app/interfaces/Props"

export default function MainDashboardCards({devices}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div className="p-6 bg-blue-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Number of Devices</h3>
        <p className="mt-2 text-3xl">{devices.length}</p>
        <p className="mt-4 text-gray-700">
          Total number of devices connected to the system.
        </p>
      </div>
      <div className="p-6 bg-green-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Active Devices</h3>
        <p className="mt-2 text-3xl">
          {
            devices.filter((device: Device) => device.status === "active")
              .length
          }
        </p>
        <p className="mt-4 text-gray-700">
          Devices currently online and functioning.
        </p>
      </div>
      <div className="p-6 bg-red-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">Inactive Devices</h3>
        <p className="mt-2 text-3xl">
          {
            devices.filter((device: Device) => device.status === "inactive")
              .length
          }
        </p>
        <p className="mt-4 text-gray-700">
          Devices that are currently offline or not responding.
        </p>
      </div>
    </div>
  )
}
