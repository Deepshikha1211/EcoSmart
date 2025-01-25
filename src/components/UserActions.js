import React from "react"
import { Bell, MessageCircle } from "lucide-react"

const UserActions = () => {
  return (
    <div className="user-actions">
      <Bell size={20} className="action-icon" />
      <MessageCircle size={20} className="action-icon" />
      <div className="user-avatar"></div>
    </div>
  )
}

export default UserActions

