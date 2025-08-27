import React from "react";
import PropTypes from "prop-types";
import "./c_ProfileStyles.css";

const JourneyCard = ({ icon, title, value, description }) => {
  return (
    <div className="journey-card">
      <div className="journey-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
      <span>{description}</span>
    </div>
  );
};

JourneyCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default JourneyCard;
