import { useNavigate } from "react-router-dom";
import homeImage from "../assets/homebg.jpg.jpeg";

function Home() {

  const navigate = useNavigate();

  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>ClothingCRM </h2>

        <div>
          <button
            style={styles.loginBtn}
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            style={styles.registerBtn}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </nav>

      {/* HERO IMAGE SECTION */}
      <div style={styles.heroContainer}>

        {/* IMAGE */}
        <img src={homeImage} alt="CRM" style={styles.heroImage} />

        {/* TEXT OVER IMAGE */}
        <div style={styles.overlay}>
          <h1 style={styles.title}>
            Smart CRM for Your Fashion Business
          </h1>

          <p style={styles.subtitle}>
            Manage customers, vendors, orders and sales
            with one powerful Clothing CRM system.
          </p>

          <div>
            <button
              style={styles.mainBtn}
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

const styles = {

  page: {
    fontFamily: "Arial",
    background: "#f5f7fa",
    minHeight: "100vh"
  },

  navbar: {
    padding: "15px 40px",
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  logo: {
    margin: 0,
    color: "#ff758c"
  },

  loginBtn: {
    marginRight: "10px",
    padding: "8px 18px",
    border: "1px solid #ff758c",
    background: "white",
    color: "#ff758c",
    borderRadius: "5px",
    cursor: "pointer"
  },

  registerBtn: {
    padding: "8px 18px",
    background: "#ff758c",
    border: "none",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
  },

  heroContainer: {
    position: "relative",
    width: "100%",
    height: "85vh",
    overflow: "hidden"
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    background: "rgba(0,0,0,0.4)",
    padding: "40px",
    borderRadius: "10px"
  },

  title: {
    fontSize: "42px",
    marginBottom: "15px"
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "25px",
    maxWidth: "600px"
  },

  mainBtn: {
    padding: "12px 25px",
    marginRight: "10px",
    background: "#ff758c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  },

  secondaryBtn: {
    padding: "12px 25px",
    background: "white",
    border: "1px solid #ff758c",
    color: "#ff758c",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default Home;