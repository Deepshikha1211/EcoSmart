import React from "react"
import EmissionsCharts from "../components/EmissionsCharts"
import CarbonFootprintChart from "../components/CarbonFootprintChart"
import PanelMonitoring from "../components/PanelMonitoring"
import WeatherUpdates from "../components/WeatherUpdates"
import TotalEmissions from "../components/TotalEmissions"
import ReductionInitiatives from "../components/ReductionInitiatives"


import "../styles/TotalEmissions.css"


const Dashboard = () => {
  return (
   
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="date-filter">
          <span>January 2025</span>
        </div>
      </div>

      

      <div className="dashboard-grid">
        <div className="dashboard-main dashboard-mainside">
      
          <PanelMonitoring />
          <CarbonFootprintChart />
          <ReductionInitiatives/>
   
        </div>
        <div className="dashboard-sidebar">
          <WeatherUpdates />
          <TotalEmissions />
     
          <EmissionsCharts/>
         
        </div>
       
      </div>
    </div>
  )
}

export default Dashboard

