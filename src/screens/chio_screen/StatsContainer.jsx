import React from "react";
import PropTypes from "prop-types";
import "./StatsContainer.css";

export default function StatsContainer({
  gamesTracked = 12,
  totalAchievements = 347,
  avgLevel = 45,
  weeklyHours = 28,
  milestoneLabel = "Master Rank Goal",
  milestoneDescription = "Reach Master rank in Street Fighter 6 ranked matches",
  milestoneProgress = 73,
}) {
  return (
    <div className="unified-stats-card">
      <div className="stats-content">
        {/* Global Stats Section */}
        <div className="stats-section">
          <h3 className="section-header">Global Stats</h3>
          {gamesTracked !== undefined ? (
            <ul className="stats-list">
              <li>🎮 Games Tracked: <span>{gamesTracked}</span></li>
              <li>🏆 Total Achievements: <span>{totalAchievements}</span></li>
              <li>⭐ Avg Level: <span>{avgLevel}</span></li>
              <li>⏱ Weekly Hours: <span>{weeklyHours}</span></li>
            </ul>
          ) : (
            <p className="empty-text">No stats available yet.</p>
          )}
        </div>

        {/* Divider */}
        <div className="section-divider"></div>

        {/* Milestone Section */}
        <div className="stats-section">
          <h3 className="section-header">
            {milestoneLabel || "Current Milestone"}
          </h3>
          {milestoneProgress !== undefined ? (
            <>
              <p className="desc">{milestoneDescription}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${milestoneProgress}%` }}
                ></div>
              </div>
              <p className="progress-text">{milestoneProgress}% Complete</p>
            </>
          ) : (
            <p className="empty-text">No goal set.</p>
          )}
        </div>
      </div>
    </div>
  );
}

StatsContainer.propTypes = {
  gamesTracked: PropTypes.number,
  totalAchievements: PropTypes.number,
  avgLevel: PropTypes.number,
  weeklyHours: PropTypes.number,
  milestoneLabel: PropTypes.string,
  milestoneDescription: PropTypes.string,
  milestoneProgress: PropTypes.number
};
