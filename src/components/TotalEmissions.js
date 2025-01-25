import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { ArrowDownRight } from "lucide-react"
import "../styles/TotalEmissions.css"

const TotalEmissions = () => {
  const [emissionsData, setEmissionsData] = useState({
    total: 3403293,
    change: -4,
    scopes: [
      { title: "Scope 1 - Direct Emissions", value: 359942 },
      { title: "Scope 2 - Indirect Emissions", value: 499923 },
      { title: "Scope 3 - Other Indirect Emissions", value: 2359942 }
    ]
  })

  const formatNumber = (num) => {
    return num.toLocaleString() + 't CO2e'
  }

  return (
    <Card className="total-emissions">
      <CardHeader>
        <CardTitle>
          <div className="head">Total Emissions</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="emissions-content">
          <div className="total-emissions-summary">
            <h2 className="emissions-value">{formatNumber(emissionsData.total)}</h2>
            <div className="emissions-change decrease">
              <ArrowDownRight size={16} />
              <span>{Math.abs(emissionsData.change)}% Lower than previous year</span>
            </div>
          </div>
          <div className="emissions-breakdown">
            {emissionsData.scopes.map((scope, index) => (
              <EmissionScope 
                key={index} 
                title={scope.title} 
                value={formatNumber(scope.value)} 
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const EmissionScope = ({ title, value }) => (
  <div className="emission-scope">
    <p className="scope-title">{title}</p>
    <p className="scope-value">{value}</p>
  </div>
)

export default TotalEmissions