import React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import "../styles/ConsumptionChart.css"

function ConsumptionChart() {
  const data = [
    { name: "Home", value: 45, color: "#E5E7EB" },
    { name: "Sold", value: 18, color: "#3B82F6" },
    { name: "Office", value: 22, color: "#10B981" },
    { name: "Extra", value: 15, color: "#F59E0B" },
  ]

  return (
    <div className="consumption-chart">
      <div className="chart-header">
        <h3>Consumption Details</h3>
        <button className="manage-btn">Manage</button>
      </div>

      <div className="chart-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-legend">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: item.color }} />
              <span className="legend-label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConsumptionChart

