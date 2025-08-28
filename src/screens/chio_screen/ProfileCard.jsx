import React from "react";
import PropTypes from "prop-types";
import "./ProfileCard.css";
import ae from "../../assets/bg.jpg";
import flag from "../../assets/ph.png";

export default function ProfileCard({
  gamerTag,
  discord,
  title,
  status,
  hoursAllTime,
  streakDays,
  avatar,
  discordLink = "https://discord.com/channels/@me",
  twitchLink = "https://www.twitch.tv/swzvzn123"
}) {
  const handleDiscordClick = () => {
    window.open(discordLink, '_blank');
  };

  const handleTwitchClick = () => {
    window.open(twitchLink, '_blank');
  };

  return (
    <div className="profile-card">
      {/* Cover Photo Background */}
      <div className="cover-photo">
        <img src={ae} alt="Cover" className="cover-image" />
        <div className="cover-overlay" />
      </div>
      
      {/* Profile Content */}
      <div className="profile-content">
        {/* Left Section - Stats */}
        <div className="left-section">
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-value">{hoursAllTime.toLocaleString()}</span>
              <span className="stat-label">Hours Played</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{streakDays}</span>
              <span className="stat-label">Day Streak</span>
            </div>
          </div>
        </div>

        {/* Center Section - Avatar & IGN */}
        <div className="center-section">
          <div className="avatar-wrapper">
            <img src={avatar} alt={gamerTag} className="avatar" />
            <div className="status-indicator" data-status={status.toLowerCase()}>
              <div className="status-dot" />
            </div>
          </div>
          
          <div className="center-info">
            <h2 className="gamer-tag">{gamerTag}</h2>
            <span className="status-badge">{status}</span>
            <p className="discord">@{discord}</p>
          </div>
        </div>

       {/* Right Section - Location & Social */}
<div className="right-section">
  <div className="location">
    <img src={flag} alt="Philippines Flag" className="flag" />
    <span className="location-text">Philippines</span>
  </div>

  <div className="separator"></div>
          
          <div className="social-buttons">
            <button 
              className="social-btn discord-btn" 
              onClick={handleDiscordClick}
              title="Discord Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </button>
            <button 
              className="social-btn twitch-btn" 
              onClick={handleTwitchClick}
              title="Twitch Channel"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  gamerTag: PropTypes.string.isRequired,
  discord: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  hoursAllTime: PropTypes.number,
  streakDays: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  discordLink: PropTypes.string,
  twitchLink: PropTypes.string
};

ProfileCard.defaultProps = {
  discord: "",
  title: "",
  status: "Offline",
  hoursAllTime: 0,
  streakDays: 0,
  discordLink: "https://discord.com/users/your-discord-id",
  twitchLink: "https://twitch.tv/your-username"
};