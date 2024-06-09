import React, {useState, useEffect, ChangeEvent} from "react"
import DataTable, {TableStyles} from "react-data-table-component"

const BACKGROUND_COLOR: string = "#7599bf"
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

export default function CustomTableChart({data}: any) {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // const searchTerm = e.target.value.toLowerCase()
    // const filteredData = devices.filter(device =>
    //   device.name.toLowerCase().includes(searchTerm)
    // )
    // setData(filteredData)
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
        columns={[]}
        data={[]}
        customStyles={customStyles}
        highlightOnHover={true}
      />
    </>
  )
}
