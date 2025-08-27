import React from "react";
import PropTypes from "prop-types";
import "./c_ProfileStyles.css";

const MilestoneCard = ({ icon, value, title }) => {
  return (
    <div className="milestone-card">
      <div className="milestone-icon">{icon}</div>
      <div className="milestone-info">
        <h3 className="milestone-value">{value}</h3>
        <p className="milestone-title">{title}</p>
      </div>
    </div>
  );
};

MilestoneCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MilestoneCard;
