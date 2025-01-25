import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, Award, BookOpen, Mail, User } from "lucide-react";
import "../styles/Sidebar.css";

function Sidebar() {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, text: "Dashboard", path: "/eco-dashboard" }, // No need for "/eco-dashboard"
    { icon: <ShoppingCart size={20} />, text: "Buy/Sell", path: "/eco-dashboard/buy-sell" }, // Corrected path
    { icon: <Award size={20} />, text: "Rewards", path: "/eco-dashboard/eco-rewards" }, // Corrected path
  
  ];

  return (
    <div className="sidebar">
      <div className="logo-section">
        <h1>EcoSmart</h1>
        <p>Power & Points</p>
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
