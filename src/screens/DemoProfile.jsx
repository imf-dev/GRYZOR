import React from "react";
import { useParams, Link } from "react-router-dom";

const DemoProfile = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px", textAlign: "center", color: "#fff" }}>
      <h1>Player Profile</h1>
      <p>This is the profile page for member with ID: {id}</p>
      <Link to="/" style={{ color: "#00ff88" }}>
        ⬅ Back to Squad
      </Link>
    </div>
  );
};

export default DemoProfile;
