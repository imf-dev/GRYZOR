import React from "react";
import PropTypes from "prop-types";
import "./i_StatsCard.css";

const StatsCard = ({ stats }) => {
  return (
    <div className="ipong_stats-card">
      <h3 className="ipong_stats-title">Gaming Stats</h3>
      <div className="ipong_stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="ipong_stat-item">
            <div className="ipong_stat-icon">
              <span>{stat.icon}</span>
            </div>
            <div className="ipong_stat-info">
              <div className="ipong_stat-value">{stat.value}</div>
              <div className="ipong_stat-label">{stat.label}</div>
              <div className="ipong_stat-progress">
                <div
                  className="ipong_stat-progress-bar"
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatsCard;
