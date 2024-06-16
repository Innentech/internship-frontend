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
  const values = data.map(d => d.value)
  const minValue = Math.floor(Math.min(...values))
  const maxValue = Math.floor(Math.max(...values) + 1)

  const numTicks = 5 // Number of ticks  on Y-axis
  const tickInterval = (maxValue - minValue) / (numTicks - 1)
  const ticks = Array.from({length: numTicks}, (_, i) =>
    (minValue + i * tickInterval).toFixed(2)
  ).map(Number)

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
          <XAxis dataKey="date" />
          <YAxis domain={[minValue, maxValue]} ticks={ticks} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            name={data.length > 0 && data[0].measurement}
            stroke="#8884d8"
            activeDot={{r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomLineChart
