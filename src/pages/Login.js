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
      alert("User not found ❌");
      return;
    }

    if (
      (username.trim() === user.email ||
        username.trim() === user.phone) &&
      password.trim() === user.password
    ) {
      // ✅ Save login status
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful ✅");

      // ✅ Redirect to dashboard
      navigate("/dashboard");
    } else {
      alert("Invalid login ❌");
    }
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${bg})` }}>
      <div style={styles.card}>
        <h2>Login</h2>

        <form onSubmit={handleLogin} autoComplete="off">

          <input
            type="text"
            placeholder="Email or Phone"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default Login;