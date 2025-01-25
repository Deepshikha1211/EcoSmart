import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import "../styles/CarbonFootprintChart.css"

const data = [
  { month: "Jan", Technology: 120, Industries: 110, Vehicles: 70, Buildings: 80, Miscellaneous: 40 },
  { month: "Feb", Technology: 132, Industries: 123, Vehicles: 71, Buildings: 82, Miscellaneous: 43 },
  { month: "Mar", Technology: 101, Industries: 98, Vehicles: 75, Buildings: 91, Miscellaneous: 38 },
  { month: "Apr", Technology: 134, Industries: 116, Vehicles: 61, Buildings: 79, Miscellaneous: 47 },
  { month: "May", Technology: 90, Industries: 88, Vehicles: 69, Buildings: 95, Miscellaneous: 36 },
  { month: "Jun", Technology: 130, Industries: 122, Vehicles: 77, Buildings: 89, Miscellaneous: 44 },
]

// Environment-friendly green shades
const GREEN_SHADES = [
  "#355E3B", // Hunter Green
  "#4CAF50", // Medium Green
  "#8BC34A", // Light Green
  "#C5E1A5", // Pale Green
  "#A7D129", // Lime Green
]

const CarbonFootprintChart = () => {
  return (
    <Card className="carbon-footprint-chart">
      <CardHeader>
        <CardTitle>
          <div className="head">Monthly Carbon Footprint
            </div>
          </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Technology" stackId="a" fill={GREEN_SHADES[0]} />
            <Bar dataKey="Industries" stackId="a" fill={GREEN_SHADES[1]} />
            <Bar dataKey="Vehicles" stackId="a" fill={GREEN_SHADES[2]} />
            <Bar dataKey="Buildings" stackId="a" fill={GREEN_SHADES[3]} />
            <Bar dataKey="Miscellaneous" stackId="a" fill={GREEN_SHADES[4]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default CarbonFootprintChart
