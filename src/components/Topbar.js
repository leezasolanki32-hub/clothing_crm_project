import React from "react";

function Topbar() {

  const logout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/login";
  };

  return (
    <div className="topbar">
      <h3>Welcome Admin</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Topbar;