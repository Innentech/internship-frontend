import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  Rectangle,
  BarChart,
} from "recharts"

const CustomBarChart = ({data = []}: {data: any[]}) => {
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
        <BarChart
          width={500}
          height={300}
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
          <Bar
            dataKey="value"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomBarChart
