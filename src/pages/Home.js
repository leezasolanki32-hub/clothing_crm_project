import { useNavigate } from "react-router-dom";
import bg from "../assets/homebg.jpg.jpeg";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${bg})` }}>
      <div style={styles.overlay}>
        <h1>Welcome to Clothing CRM 👗</h1>
        <p>Manage your fashion business professionally.</p>

        <div>
          <button onClick={() => navigate("/register")} style={styles.btn}>
            Register
          </button>

          <button onClick={() => navigate("/login")} style={styles.btn}>
            Login
          </button>
        </div>
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
    alignItems: "center",
  },

  overlay: {
    textAlign: "center",
    background: "rgba(0,0,0,0.5)",
    padding: "40px",
    borderRadius: "10px",
    color: "white",
  },

  btn: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#ff758c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;