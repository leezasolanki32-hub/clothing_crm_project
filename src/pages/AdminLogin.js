import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminBg from "../assets/adminbg.jpg.jpeg"; 

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // ✅ Admin credentials
    if (email === "admin@crm.com" && password === "admin123") {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");

      alert("Admin Login Successful 👑");

      navigate("/admin-dashboard");

    } else {
      alert("Invalid Admin Credentials ❌");
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.overlay}>

        <div style={styles.card}>
          <h2 style={styles.title}>Admin Login </h2>

          <form onSubmit={handleAdminLogin}>

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />

            <button type="submit" style={styles.button}>
              Login as Admin
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}

const styles = {

  // ✅ BACKGROUND
  container: {
    height: "100vh",
    backgroundImage: `url(${adminBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },

  // ✅ DARK OVERLAY FOR PROFESSIONAL LOOK
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  // ✅ LOGIN CARD
  card: {
    background: "rgba(255,255,255,0.95)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
    width: "350px",
    textAlign: "center"
  },

  title: {
    marginBottom: "20px",
    color: "#ff4f7b"
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px"
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#ff758c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default AdminLogin;