import React from "react";
import { Zap, Target,Trash2, Globe, Calendar, Star } from "lucide-react"

const DashboardStats = () => {
  const stats = [
    { label: "Total Items Recycled", value: "1,040 items", icon: <Zap /> },
    { label: "Monthly Target", value: "1,680 items", icon: <Target /> },
    { label: "Items Pending", value: "8", icon: <Trash2 /> },
    { label: "CO₂ Saved", value: "3.4t", icon: <Globe /> },
    { label: "Next Pickup", value: "2d 5h", icon: <Calendar /> },
    { label: "Points Earned", value: "156", icon: <Star /> },
  ];

  return (
    <div className="dashboard-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-info">
            <h4>{stat.value}</h4>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
