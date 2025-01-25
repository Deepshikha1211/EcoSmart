import React, { useState, useEffect } from 'react'
import { AlertCircle, Zap } from 'lucide-react'

import "../styles/EarningsWidget.css"

const EarningsWidget = () => {
  const [timeframe, setTimeframe] = useState('daily')
  const [earnings, setEarnings] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0
  })
  const [energyData, setEnergyData] = useState({
    production: 0,
    consumption: 0
  })

  useEffect(() => {
    const fetchEarningsData = async () => {
      try {
        const mockData = {
          daily: 25.12,
          weekly: 175.84,
          monthly: 702.36
        }
        const mockEnergyData = {
          production: 450,
          consumption: 350
        }

        setEarnings(mockData)
        setEnergyData(mockEnergyData)
      } catch (error) {
        console.error('Failed to fetch earnings data', error)
      }
    }

    fetchEarningsData()
    const intervalId = setInterval(fetchEarningsData, 5000)
    return () => clearInterval(intervalId)
  }, [])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  return (
    <div className="earnings-widget">
      <div className="earnings-header">
        <h3>Grid Export Earnings</h3>
        <div className="timeframe-toggle">
          {['daily', 'weekly', 'monthly'].map((period) => (
            <button
              key={period}
              className={timeframe === period ? 'active' : ''}
              onClick={() => setTimeframe(period)}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="earnings-content">
        <div className="earnings-amount">
          <h2>{formatCurrency(earnings[timeframe])}</h2>
          <p>Export to Grid Earnings</p>
        </div>

        <div className="earnings-info">
          <AlertCircle size={20} className="info-icon" />
          <p>
            You're producing {energyData.production} kWh and consuming {energyData.consumption} kWh. 
            Selling {energyData.production - energyData.consumption} kWh of excess energy.
          </p>
        </div>

        <div className="last-updated">
          <Zap size={16} className="zap-icon" />
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  )
}

export default EarningsWidget