import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

// Different shades of green for environmental theme
const COLORS = ["#006400", "#228B22", "#32CD32", "#7CFC00", "#ADFF2F"]

const data = [
  { name: "Transport", value: 25 },
  { name: "Industries", value: 22 },
  { name: "Vehicles", value: 20 },
  { name: "Miscellaneous", value: 18 },
  { name: "Buildings", value: 15 },
]

const EmissionsCharts = () => {
  return (
    <Card className="emissions-charts">
      <CardHeader>
        <CardTitle>
          <div
            className="head"
            style={{
              backgroundColor: "#025621", // Green background color
              padding: "15px", // Padding for spacing
              color: "#ffffff", // White text color
           // Bold text
              textAlign: "center", // Center the text
            }}
          >
            Emissions Breakdown
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default EmissionsCharts
