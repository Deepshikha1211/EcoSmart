export const styles = {
    
    dashboard: {
      backgroundColor: "#f5f7f5",
      minHeight: "100vh",
      fontFamily: "'Inter', sans-serif",
    },
  
    // Header styles
    header: {
      backgroundColor: "#166534",
      padding: "1rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    },
  
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
  
    logoText: {
      color: "#ffffff",
      fontSize: "1.5rem",
      fontWeight: "600",
      display: "flex",
      flexDirection: "column",
    },
  
    logoSubtitle: {
      fontSize: "0.875rem",
      color: "rgba(255, 255, 255, 0.8)",
    },
  
    navMenu: {
      display: "flex",
      gap: "2rem",
    },
  
    navLink: {
      color: "#ffffff",
      textDecoration: "none",
      padding: "0.5rem",
      fontSize: "0.9375rem",
      fontWeight: "500",
      transition: "opacity 0.2s",
      "&:hover": {
        opacity: "0.8",
      },
      "&.active": {
        borderBottom: "2px solid #ffffff",
      },
    },
  
    // Panel Monitoring styles
    panelSection: {
      backgroundColor: "#ffffff",
      borderRadius: "0.75rem",
      padding: "1.5rem",
      margin: "1.5rem",
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
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
  
    panelInactive: {
      backgroundColor: "#fb923c",
    },
  
    // Emissions Overview styles
    emissionsCard: {
      backgroundColor: "#166534",
      color: "#ffffff",
      borderRadius: "0.75rem",
      padding: "1.5rem",
    },
  
    emissionsValue: {
      fontSize: "2.5rem",
      fontWeight: "700",
      display: "flex",
      alignItems: "baseline",
      gap: "0.5rem",
    },
  
    emissionsUnit: {
      fontSize: "1rem",
      opacity: "0.8",
    },
  
    scopeBreakdown: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.5rem",
      marginTop: "1.5rem",
    },
  
    scopeCard: {
      backgroundColor: "#ffffff",
      borderRadius: "0.5rem",
      padding: "1.25rem",
    },
  
    // Charts styles
    chartContainer: {
      backgroundColor: "#ffffff",
      borderRadius: "0.75rem",
      padding: "1.5rem",
      marginTop: "1.5rem",
    },
  
    barChart: {
      "& .recharts-bar-rectangle": {
        fill: "#166534",
      },
    },
  
    pieChart: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1.5rem",
    },
  
    // Reduction Initiatives styles
    initiativesSection: {
      marginTop: "2rem",
    },
  
    initiativesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1rem",
      marginTop: "1.5rem",
    },
  
    initiativeCard: {
      backgroundColor: "#dcfce7",
      borderRadius: "0.75rem",
      padding: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
  
    initiativeIcon: {
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
      backgroundColor: "#166534",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
    },
  }
  
  export default styles
  
  