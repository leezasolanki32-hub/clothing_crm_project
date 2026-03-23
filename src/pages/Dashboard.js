import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) navigate("/login");
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div style={styles.container}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>👗 CRM</h2>

        <div style={styles.menu}>
          {[
            "Dashboard",
            "Customers",
            "Orders",
            "Products",
            "Reports",
          ].map((item, i) => (
            <div key={i} style={styles.menuItem}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* HEADER */}
        <div style={styles.header}>
          <h2>Fashion CRM Dashboard</h2>
          <button onClick={logout} style={styles.logoutBtn}>Logout</button>
        </div>

        {/* GRID */}
        <div style={styles.grid}>

          {/* SALES */}
          <div style={styles.card}>
            <h3>Sales Funnel</h3>
            {["Raw", "New", "Discussion", "Proposal", "Decided"].map((s, i) => (
              <div key={i} style={styles.funnel}>
                {s} <span>₹0</span>
              </div>
            ))}
          </div>

          {/* REVENUE */}
          <div style={styles.card}>
            <h3>Revenue</h3>
            <p>Today: ₹0</p>
            <p>Yesterday: ₹0</p>
            <p>This Month: ₹0</p>
            <p>This Year: ₹0</p>
          </div>

          {/* ACTION */}
          <div style={styles.card}>
            <h3>Action Areas</h3>
            <div style={styles.actionGrid}>
              {["Open Orders", "Under Stock", "Support", "Contracts"].map((a, i) => (
                <div key={i} style={styles.actionBtn}>{a}</div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div style={styles.grid}>

          {/* SHORTCUTS */}
          <div style={styles.card}>
            <h3>Shortcuts</h3>
            <div style={styles.tags}>
              {["Deliveries","Trade Profitability","Credit Notes","Debit Notes","Important Dates"].map((t,i)=>(
                <span key={i} style={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

          {/* VENDORS */}
          <div style={styles.card}>
            <h3>Find Vendors</h3>
            <input placeholder="Search vendors..." style={styles.input} />
            <div style={styles.tags}>
              {["Cotton Craft","Urban Trend","Ethnic World","Silk Traders"].map((t,i)=>(
                <span key={i} style={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

          {/* TASKS */}
          <div style={styles.card}>
            <h3>Tasks</h3>
            <p style={{ color: "#888" }}>No tasks found</p>
            <button style={styles.addBtn}>+ Add Task</button>
          </div>

        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f5f7fb",
    fontFamily: "sans-serif"
  },

  sidebar: {
    width: "220px",
    background: "#1f2235",
    padding: "20px",
    color: "white"
  },

  logo: {
    marginBottom: "30px"
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  menuItem: {
    padding: "12px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.05)",
    cursor: "pointer"
  },

  main: {
    flex: 1,
    padding: "20px"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },

  logoutBtn: {
    background: "#ff5c7a",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    marginBottom: "20px"
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
  },

  funnel: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    margin: "6px 0",
    borderRadius: "6px",
    background: "#e6f4ea",
    color: "#2e7d32"
  },

  actionGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px"
  },

  actionBtn: {
    background: "#ff7a8a",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    textAlign: "center"
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "10px"
  },

  tag: {
    border: "1px solid #ddd",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd"
  },

  addBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px"
  }
};

export default Dashboard;