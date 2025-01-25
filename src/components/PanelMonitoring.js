import React, { useState, useEffect } from "react"
import { ChevronDown, Sun, Battery, Zap } from "lucide-react"

const styles = {
  panelSection: {
    backgroundColor: "#ffffff",
    borderRadius: "0.75rem",
    padding: "1.5rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  panelControls: {
    display: "flex",
    gap: "1rem",
  },
  controlBtn: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "0.375rem",
    color: "#166534",
    fontSize: "0.875rem",
    cursor: "pointer",
  },
  panelsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "0.75rem",
    margin: "1.5rem 0",
  },
  panel: {
    aspectRatio: "1",
    backgroundColor: "#15803d",
    borderRadius: "0.5rem",
    position: "relative",
    transition: "all 0.2s",
    cursor: "pointer",
  },
  panelInactive: {
    backgroundColor: "#fb923c",
  },
  statSection: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
    marginTop: "2rem",
    padding: "1.5rem",
    backgroundColor: "#f8fafc",
    borderRadius: "0.5rem",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  statIcon: {
    width: "2rem",
    height: "2rem",
  },
  statLabel: {
    fontSize: "0.875rem",
    color: "#4b5563",
  },
  statValue: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#166534",
  },
}

const PanelMonitoring = () => {
  const [panels, setPanels] = useState([])
  const [totalEnergy, setTotalEnergy] = useState(0)
  const [efficiency, setEfficiency] = useState(0)
  const [viewMode, setViewMode] = useState("active")
  const [panelCount, setPanelCount] = useState(24)
  const [area, setArea] = useState("Roof")

  useEffect(() => {
    // Simulating real-time data updates
    const interval = setInterval(() => {
      updatePanelData()
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const updatePanelData = () => {
    const newPanels = Array(panelCount)
      .fill()
      .map((_, i) => ({
        id: i + 1,
        status: Math.random() > 0.1 ? "active" : "inactive",
        energy: Math.floor(Math.random() * 50) + 20, // Random energy between 20-70 kWh
      }))

    setPanels(newPanels)
    const totalEnergy = newPanels.reduce((sum, panel) => sum + panel.energy, 0)
    setTotalEnergy(totalEnergy)
    setEfficiency((totalEnergy / (panelCount * 70)) * 100) // Assuming max capacity of 70 kWh per panel
  }

  const filteredPanels = panels.filter((panel) => viewMode === "all" || panel.status === viewMode)

  return (
    <div style={styles.panelSection}>
      <div style={styles.panelHeader}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#166534" }}>Panel Monitoring</h2>
        <div style={styles.panelControls}>
          <button style={styles.controlBtn} onClick={() => setViewMode(viewMode === "active" ? "all" : "active")}>
            {viewMode === "active" ? "All Panels" : "Active Only"} <ChevronDown size={16} />
          </button>
          <button style={styles.controlBtn} onClick={() => setPanelCount(panelCount === 24 ? 24 : 24)}>
            {panelCount} Panels <ChevronDown size={16} />
          </button>
          <button style={styles.controlBtn} onClick={() => setArea(area === "Roof" ? "Roof" : "Roof")}>
            {area} Area <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div style={styles.panelsGrid}>
        {filteredPanels.map((panel) => (
          <div
            key={panel.id}
            style={{
              ...styles.panel,
              ...(panel.status === "inactive" && styles.panelInactive),
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "0.75rem",
                fontWeight: "600",
              }}
            >
              {panel.energy} kWh
            </div>
          </div>
        ))}
      </div>

      <div style={styles.statSection}>
        <div style={styles.statItem}>
          <Zap style={{ ...styles.statIcon, color: "#eab308" }} />
          <div>
            <div style={styles.statLabel}>Total Generated Energy</div>
            <div style={styles.statValue}>{totalEnergy.toFixed(2)} kWh</div>
          </div>
        </div>
        <div style={styles.statItem}>
          <Battery style={{ ...styles.statIcon, color: "#22c55e" }} />
          <div>
            <div style={styles.statLabel}>Total Capacity</div>
            <div style={styles.statValue}>{panelCount * 70} kWh</div>
          </div>
        </div>
        <div style={styles.statItem}>
          <Sun style={{ ...styles.statIcon, color: "#f97316" }} />
          <div>
            <div style={styles.statLabel}>Avg Efficiency</div>
            <div style={styles.statValue}>{efficiency.toFixed(1)}%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelMonitoring

