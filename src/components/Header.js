import React from "react"
import { Bell, MessageCircle, User } from "lucide-react"
import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-actions">
        <button className="icon-button">
          <Bell size={20} />
        </button>
        <button className="icon-button">
          <MessageCircle size={20} />
        </button>
        <button className="user-profile">
          <User size={20} />
          <span>User</span>
        </button>
      </div>
    </header>
  )
}

export default Header

