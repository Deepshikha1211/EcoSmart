import React from "react"
import "../styles/EnergyMetrics.css"

function EnergyMetrics() {
  const metrics = [
    { label: "Consumption", value: "1.05", unit: "kw/h" },
    { label: "Solar Energy", value: "2.19", unit: "kw/h" },
    { label: "Extra Energy", value: "1.04", unit: "kw/h" },
    { label: "Import from grid", value: "0.15", unit: "kw/h" },
  ]

  return (
    <div className="energy-metrics">
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card">
          <h3>{metric.label}</h3>
          <div className="metric-value">
            <span className="number">{metric.value}</span>
            <span className="unit">{metric.unit}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EnergyMetrics

