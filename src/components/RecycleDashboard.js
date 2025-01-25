import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import RecycleSidebar from "./RecycleSidebar";
import RecycleDashboard from "../pages/RecycleDashboard";
import EcoRewards from "../pages/EcoRewards";
import Recycle from "../pages/Recycle";


const RecDashboard = () => {
  return (
    <div className="eco-dashboard">
      <RecycleSidebar />
      <div className="main-content">
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<RecycleDashboard />} />
            <Route path="recycle" element={<Recycle />} />
            <Route path="eco-rewards" element={<EcoRewards />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default RecDashboard;
