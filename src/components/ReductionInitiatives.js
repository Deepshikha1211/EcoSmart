import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { Zap, Truck, Leaf, Recycle } from "lucide-react"
import "../styles/ReductionInitiatives.css"

const initiatives = [
  { title: "Energy Efficiency", description: "Implementing smart lighting and HVAC systems", icon: Zap },
  { title: "Sustainable Transport", description: "Transitioning to electric vehicle fleet", icon: Truck },
  { title: "Green Sourcing", description: "Partnering with eco-friendly suppliers", icon: Leaf },
  { title: "Waste Reduction", description: "Implementing comprehensive recycling programs", icon: Recycle },
]

const ReductionInitiatives = () => {
  return (
    <Card className="reduction-initiatives">
      <CardHeader>
        <CardTitle>
          <div className="head">Reduction Initiatives
            </div>
          </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => (
            <div key={index} className="initiative-item">
              <div className="initiative-icon">
                <initiative.icon size={24} />
              </div>
              <h3 className="initiative-title">{initiative.title}</h3>
              <p className="initiative-description">{initiative.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ReductionInitiatives

