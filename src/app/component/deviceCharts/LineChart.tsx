import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
} from "recharts"

const CustomLineChart = ({data = []}: {data: any[]}) => {
  return (
    <div style={{width: "100%", height: 600}} className="p-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomLineChart
