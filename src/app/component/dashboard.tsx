import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faLaptop,
  faTabletAlt,
  faMobileAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"

export default function Dashboard() {
  const devices = [
    {
      id: 1,
      name: "Device 1",
      type: "laptop",
      status: "active",
      sensors: 4,
      lastReading: "2024-06-09T12:00:00Z",
    },
    {
      id: 2,
      name: "Device 2",
      type: "tablet",
      status: "inactive",
      sensors: 2,
      lastReading: "2024-06-06T08:45:00Z",
    },
    {
      id: 3,
      name: "Device 3",
      type: "mobile",
      status: "active",
      sensors: 5,
      lastReading: "2024-06-09T11:55:00Z",
    },
    {
      id: 4,
      name: "Device 4",
      type: "laptop",
      status: "inactive",
      sensors: 3,
      lastReading: "2024-06-07T14:20:00Z",
    },
    {
      id: 5,
      name: "Device 5",
      type: "tablet",
      status: "active",
      sensors: 6,
      lastReading: "2024-06-09T09:30:00Z",
    },
  ]

  const getDeviceIcon = (type: String) => {
    switch (type) {
      case "laptop":
        return faLaptop
      case "tablet":
        return faTabletAlt
      case "mobile":
        return faMobileAlt
      default:
        return faMobileAlt
    }
  }

  return (
    <div className="relative bg-white bg-opacity-80 backdrop-blur-sm p-6 md:p-10 w-screen mx-4 md:mx-20 my-10 flex flex-col border-r-8 rounded-3xl shadow-xl gap-4">
      <h1 className="text-4xl font-semibold mb-6">Dashboard Overview</h1>
      <button
        onClick={() => alert("Logged out")}
        className="fixed bottom-4 right-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
        Log Out
      </button>
      {/* Statistics Cards */}
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
            {devices.filter(device => device.status === "active").length}
          </p>
          <p className="mt-4 text-gray-700">
            Devices currently online and functioning.
          </p>
        </div>
        <div className="p-6 bg-red-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Inactive Devices</h3>
          <p className="mt-2 text-3xl">
            {devices.filter(device => device.status === "inactive").length}
          </p>
          <p className="mt-4 text-gray-700">
            Devices that are currently offline or not responding.
          </p>
        </div>
      </div>
      {/* Search Bar */}
      <div className="mb-4">
        <h3 className="text-xl my-2">Search for a device by name</h3>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Devices Container Card */}
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Devices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {devices.map(device => (
            <div
              key={device.id}
              className="p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-200 transition"
              onClick={() => alert(`Navigating to device ${device.id}`)}
            >
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={getDeviceIcon(device.type)}
                  className="text-2xl mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">{device.name}</h4>
                  <p
                    className={`mt-2 text-sm ${
                      device.status === "active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {device.status.charAt(0).toUpperCase() +
                      device.status.slice(1)}
                  </p>
                  <p className="text-xs text-gray-500">
                    Sensors: {device.sensors}
                  </p>
                  <p className="text-xs text-gray-500">
                    Last Reading:{" "}
                    {new Date(device.lastReading).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
