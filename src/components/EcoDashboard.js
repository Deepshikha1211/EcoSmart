import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";
import BuySell from "../pages/BuySell";
import EcoRewards from "../pages/EcoRewards";

import "../styles/EcoDashboard.css";

const EcoDashboard = () => {
  return (
    <div className="eco-dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="buy-sell" element={<BuySell />} /> {/* Relative paths */}
            <Route path="eco-rewards" element={<EcoRewards />} /> {/* Relative paths */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default EcoDashboard;
