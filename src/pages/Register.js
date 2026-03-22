import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/register-bg.jpeg.jpeg";

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      surname,
      phone,
      address,
      company,
      email,
      pin,
      password,
      package: selectedPackage
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registered Successfully ✅");
    navigate("/login");
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${bg})` }}>
      <div style={styles.card}>
        <h2>Register</h2>

        <form onSubmit={handleRegister} autoComplete="off">

          <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={styles.input} />
          <input placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} style={styles.input} />
          <input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={styles.input} />
          <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} style={styles.input} />
          <input placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} style={styles.input} />
          <input type="email" placeholder="Email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
          <input placeholder="Pin Code" value={pin} onChange={(e) => setPin(e.target.value)} style={styles.input} />
          <input type="password" placeholder="Password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />

          <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)} style={styles.input}>
            <option value="">Select CRM Package</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
          </select>

          <button type="submit" style={styles.button}>Register</button>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: "30px",
    borderRadius: "10px",
    width: "350px"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#ff758c",
    color: "#fff",
    border: "none"
  }
};

export default Register;