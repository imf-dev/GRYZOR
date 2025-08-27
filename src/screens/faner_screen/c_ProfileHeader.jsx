import React from "react";
import PropTypes from "prop-types";
import { Calendar } from "lucide-react";
import "./c_ProfileStyles.css";

const ProfileHeader = ({
  profilePic,
  name,
  discordName,
  gamingSince,
  stats,
}) => {
  return (
    <div className="profile-header-card">
      <div className="profile-avatar">
        <img src={profilePic} alt={name} className="avatar-image" />
        <div className="status-indicator"></div>
      </div>

      <div className="profile-info">
        <h1 className="profile-name">{name}</h1>
        <p className="discord-name">@{discordName}</p>
        <div className="gaming-since">
          <Calendar size={16} />
          <span>Gaming since {gamingSince}</span>
        </div>
      </div>

      <div className="profile-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  profilePic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  discordName: PropTypes.string.isRequired,
  gamingSince: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProfileHeader;
