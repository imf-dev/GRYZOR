import React from "react";
import PropTypes from "prop-types";
import "./w_ProfileHeader.css";

const ProfileHeader = ({
  realName,
  ign,
  pfp,
  links,
  level,
  totalGames,
  totalAchievements,
  perfectGames,
  avgCompletionRate,
}) => {
  return (
    <div className="wenc_profile-header">
      <div className="wenc_profile-main-info">
        <div className="wenc_profile-avatar-section">
          <div className="wenc_avatar-container">
            <img src={pfp} alt="Profile" className="wenc_profile-avatar" />
            <div className="wenc_avatar-glow"></div>
          </div>
          <div className="wenc_profile-names">
            <h1 className="wenc_real-name">{realName}</h1>
            <h2 className="wenc_ign">{ign}</h2>
            <div className="wenc_profile-links">
              {links.map((link, index) => (
                <span key={index} className="wenc_link-item">
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="wenc_level-badge">
          <div className="wenc_level-number">{level}</div>
          <span className="wenc_level-text">Level</span>
        </div>
      </div>

      <div className="wenc_profile-stats">
        <div className="wenc_stat-item">
          <div className="wenc_stat-number">
            {totalAchievements.toLocaleString()}
          </div>
          <div className="wenc_stat-label">Total Achievements</div>
        </div>
        <div className="wenc_stat-item">
          <div className="wenc_stat-number">{perfectGames}</div>
          <div className="wenc_stat-label">Perfect Games</div>
        </div>
        <div className="wenc_stat-item">
          <div className="wenc_stat-number">{avgCompletionRate}%</div>
          <div className="wenc_stat-label">Avg. Completion Rate</div>
        </div>
        <div className="wenc_stat-item">
          <div className="wenc_stat-number">{totalGames}</div>
          <div className="wenc_stat-label">Games Owned</div>
        </div>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  realName: PropTypes.string.isRequired,
  ign: PropTypes.string.isRequired,
  pfp: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  level: PropTypes.number.isRequired,
  totalGames: PropTypes.number.isRequired,
  totalAchievements: PropTypes.number.isRequired,
  perfectGames: PropTypes.number.isRequired,
  avgCompletionRate: PropTypes.number.isRequired,
};

export default ProfileHeader;
