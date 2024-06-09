import React, {useState, useEffect, ChangeEvent} from "react"
import DataTable, {TableStyles} from "react-data-table-component"
import Device from "@/app/interfaces/Device"
import Props from "@/app/interfaces/Props"
import {navigate} from "@/app/utils/actions"

const BACKGROUND_COLOR: string = "#7599bf"
const COLUMNS = [
  {
    name: "ID",
    selector: (row: Device) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: Device) => row.name,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row: Device) => row.type,
  },
  {
    name: "Status",
    selector: (row: Device) => row.status,
    sortable: true,
  },
  {
    name: "Number of sensors",
    selector: (row: Device) => row.sensors,
    sortable: true,
  },
]

const customStyles: TableStyles = {
  headRow: {
    style: {
      backgroundColor: BACKGROUND_COLOR,
      border: "none",
      borderRadius: "0px",
    },
  },
  headCells: {
    style: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: "16px",
    },
  },
  rows: {
    style: {
      minHeight: "50px",
      textTransform: "capitalize",
      borderLeft: "1px solid black ",
      borderRight: "1px solid black ",
      fontSize: "14px",
      border: "none",
      borderRadius: "0px",
    },
    highlightOnHoverStyle: {
      backgroundColor: BACKGROUND_COLOR,
      color: "#ffffff",
      cursor: "pointer",
    },
  },
  pagination: {
    style: {
      backgroundColor: BACKGROUND_COLOR,
      color: "#FFF",
    },
  },
}

const DevicesTable: React.FC<Props> = ({devices}) => {
  const [data, setData] = useState<Device[]>(devices)

  useEffect(() => {
    setData(devices)
  }, [devices])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredData = devices.filter(device =>
      device.name.toLowerCase().includes(searchTerm)
    )
    setData(filteredData)
  }
  const handleRowClicked = (row: Device) => {
    // redirect user to specific device with that id, a slug.
    navigate(`/${row.id}?name=${row.name}`)
  }
  return (
    <>
      <div className="mb-4">
        <h3 className="text-xl my-2">Search for a device by name</h3>
        <input
          type="search"
          placeholder="Search..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleSearch}
        />
      </div>
      <DataTable
        columns={COLUMNS}
        data={data}
        customStyles={customStyles}
        pagination
        onRowClicked={handleRowClicked}
        highlightOnHover={true}
      />
    </>
  )
}

export default DevicesTable
