import React from "react";
import "./A_MilestoneCard.css";

const A_MilestoneCard = ({ title, date }) => {
  return (
    <div className="ariola_milestone-card">
      <h3 className="ariola_milestone-title">{title}</h3>
      <p className="ariola_milestone-date">{date}</p>
    </div>
  );
};

export default A_MilestoneCard;
