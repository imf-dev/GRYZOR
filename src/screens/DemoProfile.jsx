import React from "react";
import { Link } from "react-router-dom";

const DemoProfile = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center", color: "#fff" }}>
      <h1>Player Profile</h1>
      <p>This is the profile page for demo member</p>
      <Link to="/GRYZOR" style={{ color: "#00ff88" }}>
        ⬅ Back to Squad
      </Link>
    </div>
  );
};

export default DemoProfile;
