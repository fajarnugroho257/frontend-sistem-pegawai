import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
    const auth = useContext(AuthContext);
    return (
    <div>
      <h2>Dashboard fajar</h2>
      <button onClick={auth?.logout}>Keluar</button>
    </div>
    );
}

export default Dashboard;