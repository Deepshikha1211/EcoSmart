import React, { useState, createContext, useContext, useCallback } from "react"
import { Settings, TrendingUp, X, AlertCircle, CheckCircle } from "lucide-react"
import { toast, Toaster } from "react-hot-toast"
import '../styles/ActionButtons.css'

function EnergyProvider({ children }) {
  const [energyConfig, setEnergyConfig] = useState({
    sellThreshold: 50, 
    maxSellAmount: 200, 
    gridConnectionStatus: "active",
    energyPrice: 0.12, // $ per kWh
  })

  const [energyBalance, setEnergyBalance] = useState({
    currentProduction: 450,
    currentConsumption: 350,
    excessEnergy: 100,
    totalEarnings: 0,
  })

  const [transactionHistory, setTransactionHistory] = useState([])

  const updateEnergyConfig = useCallback((newConfig) => {
    setEnergyConfig(prev => ({ ...prev, ...newConfig }))
  }, [])

  const performEnergySale = useCallback(async () => {
    if (energyBalance.excessEnergy > energyConfig.sellThreshold) {
      const saleAmount = Math.min(energyBalance.excessEnergy, energyConfig.maxSellAmount)
      const revenue = saleAmount * energyConfig.energyPrice

      try {
        const transaction = {
          id: `SALE-${Date.now()}`,
          date: new Date(),
          amount: saleAmount,
          revenue: revenue,
          status: 'completed'
        }

        setEnergyBalance(prev => ({
          ...prev,
          excessEnergy: prev.excessEnergy - saleAmount,
          totalEarnings: prev.totalEarnings + revenue
        }))

        setTransactionHistory(prev => [transaction, ...prev])

        return { 
          success: true, 
          transaction 
        }
      } catch (error) {
        return { 
          success: false, 
          message: "Energy sale transaction failed" 
        }
      }
    }

    return { 
      success: false, 
      message: "Insufficient excess energy for sale" 
    }
  }, [energyBalance, energyConfig])

  return (
    <EnergyContext.Provider
      value={{
        energyConfig,
        energyBalance,
        transactionHistory,
        updateEnergyConfig,
        performEnergySale,
      }}
    >
      {children}
    </EnergyContext.Provider>
  )
}

const EnergyContext = createContext(undefined)

function useEnergyContext() {
  const context = useContext(EnergyContext)
  if (!context) {
    throw new Error('useEnergyContext must be used within an EnergyProvider')
  }
  return context
}

function ConfigModal({ onClose }) {
  const { energyConfig, updateEnergyConfig } = useEnergyContext()
  const [localConfig, setLocalConfig] = useState(energyConfig)

  const handleSave = () => {
    if (localConfig.sellThreshold <= 0 || localConfig.maxSellAmount <= 0) {
      toast.error('Thresholds must be positive values')
      return
    }

    updateEnergyConfig(localConfig)
    toast.success('Energy settings updated successfully')
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Configure Energy Settings</h2>
          <button onClick={onClose} className="close-btn">
            <X size={24} />
          </button>
        </div>

        <div className="modal-content">
          <div className="input-group">
            <label>Minimum Sell Threshold (kWh)</label>
            <input
              type="number"
              value={localConfig.sellThreshold}
              onChange={(e) => setLocalConfig(prev => ({
                ...prev,
                sellThreshold: Number(e.target.value)
              }))}
            />
          </div>

          <div className="input-group">
            <label>Maximum Sell Amount (kWh)</label>
            <input
              type="number"
              value={localConfig.maxSellAmount}
              onChange={(e) => setLocalConfig(prev => ({
                ...prev,
                maxSellAmount: Number(e.target.value)
              }))}
            />
          </div>

          <div className="input-group">
            <label>Energy Price per kWh ($)</label>
            <input
              type="number"
              step="0.01"
              value={localConfig.energyPrice}
              onChange={(e) => setLocalConfig(prev => ({
                ...prev,
                energyPrice: Number(e.target.value)
              }))}
            />
          </div>
        </div>

        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button onClick={handleSave} className="save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  )
}

function SellModal({ onClose }) {
  const { energyBalance, performEnergySale } = useEnergyContext()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSell = async () => {
    setIsProcessing(true)
    const result = await performEnergySale()
    
    if (result.success) {
      toast.success(`Successfully sold ${result.transaction.amount} kWh`)
    } else {
      toast.error(result.message || 'Energy sale failed')
    }
    
    setIsProcessing(false)
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Sell Excess Energy</h2>
          <button onClick={onClose} className="close-btn">
            <X size={24} />
          </button>
        </div>

        <div className="modal-content">
          <div className="energy-info">
            <p>Available Excess Energy: 
              <span className="energy-amount">{energyBalance.excessEnergy} kWh</span>
            </p>
          </div>
        </div>

        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button 
            onClick={handleSell} 
            disabled={energyBalance.excessEnergy === 0 || isProcessing}
            className={`sell-btn ${energyBalance.excessEnergy === 0 || isProcessing ? 'disabled' : ''}`}
          >
            {isProcessing ? 'Processing...' : 'Confirm Sale'}
          </button>
        </div>
      </div>
    </div>
  )
}

function TransactionHistory() {
  const { transactionHistory } = useEnergyContext()

  return (
    <div className="transaction-history">
      <h3>Transaction History</h3>
      {transactionHistory.length === 0 ? (
        <p className="no-transactions">No transactions yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount (kWh)</th>
              <th>Revenue ($)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date.toLocaleDateString()}</td>
                <td>{transaction.amount.toFixed(2)}</td>
                <td>${transaction.revenue.toFixed(2)}</td>
                <td className={`status-${transaction.status}`}>
                  {transaction.status === 'completed' ? 'Completed' : 'Failed'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

function ActionButtons() {
  const [isConfigureModalOpen, setIsConfigureModalOpen] = useState(false)
  const [isSellModalOpen, setIsSellModalOpen] = useState(false)

  return (
    <EnergyProvider>
      <div className="action-buttons-container">
        <div className="action-buttons">
          <button 
            className="configure-btn"
            onClick={() => setIsConfigureModalOpen(true)}
          >
            <Settings size={16} />
            Configure
          </button>
          <button 
            className="sell-btn"
            onClick={() => setIsSellModalOpen(true)}
          >
            <TrendingUp size={16} />
            Sell Energy
          </button>
        </div>

        <TransactionHistory />

        <Toaster 
          position="top-right" 
          toastOptions={{
            success: { duration: 4000, icon: <CheckCircle color="green" /> },
            error: { duration: 4000, icon: <AlertCircle color="red" /> }
          }} 
        />

        {isConfigureModalOpen && (
          <ConfigModal onClose={() => setIsConfigureModalOpen(false)} />
        )}

        {isSellModalOpen && (
          <SellModal onClose={() => setIsSellModalOpen(false)} />
        )}
      </div>
    </EnergyProvider>
  )
}

export default ActionButtons