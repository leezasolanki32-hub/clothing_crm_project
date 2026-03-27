import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>
        <h2>Admin Dashboard 👑</h2>
        <button onClick={logout} style={styles.logout}>Logout</button>
      </div>

      {/* USER TABLE */}
      <div style={styles.content}>
        <h3>Registered Users</h3>

        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    fontFamily: "Arial"
  },

  header: {
    background: "#ff758c",
    color: "white",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  logout: {
    padding: "8px 15px",
    border: "none",
    background: "white",
    color: "#ff758c",
    borderRadius: "5px",
    cursor: "pointer"
  },

  content: {
    padding: "30px"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "white"
  }
};

export default AdminDashboard;