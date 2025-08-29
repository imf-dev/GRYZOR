import React from "react";
import PropTypes from "prop-types";
import "./w_MilestonesCards.css";

const MilestonesCards = ({ milestones }) => {
  return (
    <div className="wenc_milestones-card">
      <div className="wenc_card-header">
        <h3 className="wenc_card-title">Gaming Milestones</h3>
        <div className="wenc_milestone-count">{milestones.length}</div>
      </div>

      <div className="wenc_milestones-grid">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="wenc_milestone-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="wenc_milestone-icon">
              <div className="wenc_icon-glow"></div>
              {getMilestoneIcon(milestone.name)}
            </div>
            <div className="wenc_milestone-content">
              <h4 className="wenc_milestone-name">{milestone.name}</h4>
              <p className="wenc_milestone-stats">{milestone.stats}</p>
            </div>
            <div className="wenc_milestone-badge">
              <span className="wenc_badge-text">✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getMilestoneIcon = (name) => {
  const icons = {
    Immortal: "⚡",
    "Multiverse Explorer": "🌌",
    "Night Owl": "🦉",
    "Most Played": "👑",
  };
  return icons[name] || "🏆";
};

MilestonesCards.propTypes = {
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      stats: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MilestonesCards;
