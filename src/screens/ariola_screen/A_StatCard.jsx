import React from "react";
import "./A_StatCard.css";

const A_StatCard = ({ title, value }) => {
  return (
    <div className="ariola_stat-card">
      <h4 className="ariola_stat-title">{title}</h4>
      <p className="ariola_stat-value">{value}</p>
    </div>
  );
};

export default A_StatCard;
