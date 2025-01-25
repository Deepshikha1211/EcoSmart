import React from "react"
import DashboardStats from "../components/DashboardStats"
import MonthlyRecycling from "../components/MonthlyRecycling"
import RecentActivityCentres from "../components/RecentActivityCentres"

import "../styles/Dashboard.css"
import "../styles/DashboardStats.css"
import "../styles/MonthlyRecycling.css"
import "../styles/RecentActivityCentres.css"
import "../styles/Sidebar.css"






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
        <div className="dashboard-main">
        <DashboardStats />
        <MonthlyRecycling />
        <RecentActivityCentres />
        


   
        </div>
        <div className="dashboard-sidebar">

         
        </div>
       
      </div>
    </div>
  )
}

export default Dashboard

