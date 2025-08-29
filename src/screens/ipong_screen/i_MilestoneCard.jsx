import React from "react";
import PropTypes from "prop-types";
import "./i_MilestoneCard.css";

const MilestoneCard = ({ milestones }) => {
  return (
    <div className="ipong_milestone-card">
      <h3 className="ipong_milestone-title">My Milestones as a Gamer</h3>
      <div className="ipong_milestone-grid">
        {milestones.map((milestone, index) => (
          <div key={index} className="ipong_milestone-item">
            <div className="ipong_milestone-icon">
              <span>{milestone.icon}</span>
            </div>
            <div className="ipong_milestone-info">
              <h4>{milestone.title}</h4>
              <p>{milestone.description}</p>
              <span className="ipong_milestone-date">{milestone.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

MilestoneCard.propTypes = {
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MilestoneCard;
