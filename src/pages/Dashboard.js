import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // 🔐 Protect dashboard (only logged-in users)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  // 🏠 Go to home
  const goHome = () => {
    navigate("/");
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully ✅");
    navigate("/login");
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <header style={styles.header}>
        <h2>👗 Fashion CRM Dashboard</h2>

        <div>
          <button style={styles.btn} onClick={goHome}>
            Home
          </button>

          <button style={styles.logoutBtn} onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div style={styles.container}>
        <h1>Welcome to Your CRM 🎉</h1>
        <p>Manage your fashion business easily</p>

        <div style={styles.cards}>
          <div style={styles.card}>👤 Customers</div>
          <div style={styles.card}>📦 Orders</div>
          <div style={styles.card}>🛍️ Products</div>
          <div style={styles.card}>📊 Reports</div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2026 Fashion CRM | All Rights Reserved</p>
      </footer>

    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#ff758c",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
  },

  btn: {
    marginRight: "10px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    background: "#fff",
    color: "#ff758c",
    fontWeight: "bold"
  },

  logoutBtn: {
    padding: "8px 15px",
    background: "#333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  container: {
    flex: 1,
    textAlign: "center",
    padding: "40px"
  },

  cards: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },

  card: {
    width: "160px",
    height: "110px",
    background: "#ff758c",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "16px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    cursor: "pointer",
    transition: "0.3s"
  },

  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#eee"
  }
};

export default Dashboard;