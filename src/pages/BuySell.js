import React from "react"
import Sidebar from "../components/Sidebar"
import EnergyMetrics from "../components/EnergyMetrics"
import EarningsWidget from "../components/EarningsWidget"
import ConsumptionChart from "../components/ConsumptionChart"
import ActionButtons from "../components/ActionButtons"
import "../styles/BuySell.css"

function BuySell() {
  return (
    <div className="dashboard-container">
   
      <main className="dashboard-content">
        <div className="top-section">
          <EnergyMetrics />
          <ActionButtons />
        </div>
        <div className="bottom-section">
          <EarningsWidget />
          <ConsumptionChart />
        </div>
      </main>
    </div>
  )
}

export default BuySell

