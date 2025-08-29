import React from "react";
import PropTypes from "prop-types";
import "./i_ProfileCard.css";

const ProfileCard = ({ realName, ign, description, isOnline, avatar }) => {
  return (
    <div className="ipong_profile-card">
      {/* Decorative Elements */}
      <div className="deco-circle-1"></div>
      <div className="deco-circle-2"></div>
      <div className="deco-lines"></div>
      <div className="deco-lines-right"></div>

      <div className="ipong_profile-avatar">
        <img src={avatar} alt="Profile Avatar" />
        <div
          className={`ipong_status-indicator ${
            isOnline ? "ipong_online" : "ipong_offline"
          }`}
        ></div>
      </div>
      <div className="ipong_profile-info">
        <h2 className="ipong_real-name">{realName}</h2>
        <h3 className="ipong_ign">@{ign}</h3>
        <p className="ipong_description">{description}</p>
        <div className="ipong_status">
          <span
            className={`ipong_status-text ${
              isOnline ? "ipong_online" : "ipong_offline"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  realName: PropTypes.string.isRequired,
  ign: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ProfileCard;
