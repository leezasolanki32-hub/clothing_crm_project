import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/dashboard.css";

function AdminDashboard() {

  const [users, setUsers] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    // Check Admin Login
    const admin = localStorage.getItem("admin");

    if (!admin) {
      window.location.href = "/login";
    }

    // Dummy Data (Later connect backend)
    setUsers([
      { id: 1, name: "Leeza", email: "leeza@gmail.com" },
      { id: 2, name: "Rahul", email: "rahul@gmail.com" }
    ]);

    setCustomers([
      { id: 1, name: "Priya", city: "Ahmedabad" },
      { id: 2, name: "Karan", city: "Surat" }
    ]);

  }, []);

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">
        <Topbar />

        <h2>Admin Dashboard</h2>

        {/* USERS TABLE */}
        <div className="card">
          <h3>All Users</h3>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CUSTOMERS TABLE */}
        <div className="card">
          <h3>All Customers</h3>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
              </tr>
            </thead>

            <tbody>
              {customers.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.city}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;