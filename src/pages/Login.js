import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/loginbg.jpg.jpeg";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please Register First ❌");
      return;
    }

    if (
      (username === user.email || username === user.phone) &&
      password === user.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "user");

      alert("User Login Successful ✅");
      navigate("/dashboard");
    } else {
      alert("Invalid Login ❌");
    }
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${bg})` }}>
      <div style={styles.card}>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or Phone"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            User Login
          </button>

          <p style={styles.or}>OR</p>

          <button
            type="button"
            style={styles.adminBtn}
            onClick={() => navigate("/admin-login")}
          >
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#ff758c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  adminBtn: {
    width: "100%",
    padding: "10px",
    background: "#ff758c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  or: {
    textAlign: "center",
    margin: "10px 0"
  }
};

export default Login;