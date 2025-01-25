import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Recycle, Award, BookOpen, Mail, User } from "lucide-react";
import "../styles/Sidebar.css";

function Sidebar() {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, text: "Dashboard", path: "/recycle-dashboard" }, // Corrected path
    { icon: <Recycle size={20} />, text: "Recycle", path: "/recycle-dashboard/recycle" }, // Corrected relative path
    { icon: <Award size={20} />, text: "Rewards", path: "/recycle-dashboard/eco-rewards" }, // Corrected relative path
   
  ];

  return (
    <div className="sidebar">
      <div className="logo-section">
        <h1>EcoSmart</h1>
        <p>Recycle & Renew</p>
      </div>

      <nav className="nav-menu">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="nav-item">
            {item.icon}
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>

      <div className="profile-section">
        <User size={24} />
      </div>
    </div>
  );
}

export default Sidebar;
