import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Users, Heart, Zap, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./c_ProfileStyles.css";

const TeamConnections = ({ teamMembers }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    teamMembers.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 200);
    });
  }, [teamMembers]);

  const handleMemberClick = (member, index) => {
    setSelectedMember(selectedMember === index ? null : index);
  };

  const handleSeeProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  const getGameIcon = (game) => {
    const gameIcons = {
      Valorant: "🎯",
      Growtopia: "🌱",
      "Elden Ring": "⚔️",
      "Honor of Kings": "👑",
      "Genshin Impact": "✨",
    };
    return gameIcons[game] || "🎮";
  };

  const getRandomActivity = () => {
    const activities = ["In Game", "Online", "Streaming", "In Lobby", "Away"];
    return activities[Math.floor(Math.random() * activities.length)];
  };

  return (
    <div className="team-connections-container">
      <div className="team-header">
        <div className="team-icon-container">
          <Users size={28} />
          <div className="team-pulse-ring"></div>
        </div>
        <div className="team-title-section">
          <h3 className="team-title">Squad Goals</h3>
          <p className="team-subtitle">
            My gaming family • {teamMembers.length} legends
          </p>
        </div>
        <div className="team-stats">
          <div className="online-indicator">
            <div className="online-dot"></div>
            <span>{teamMembers.length} online</span>
          </div>
        </div>
      </div>

      <div className="team-members-carousel">
        <div className="carousel-track">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`team-member-card ${
                visibleCards.includes(index) ? "visible" : ""
              } ${selectedMember === index ? "selected" : ""}`}
              style={{ "--card-index": index }}
              onClick={() => handleMemberClick(member, index)}
            >
              <div className="member-card-inner">
                {/* Status indicators */}
                <div className="member-status">
                  <div className="status-dot online"></div>
                  <span className="status-text">{getRandomActivity()}</span>
                </div>

                {/* Profile section */}
                <div className="member-profile">
                  <div className="profile-image-container">
                    <img
                      src={member.profilePicture}
                      alt={member.realName}
                      className="member-avatar"
                    />
                    <div className="avatar-ring"></div>
                    <div className="avatar-glow"></div>
                  </div>

                  <div className="member-info">
                    <h4 className="member-name">{member.realName}</h4>
                    <p className="member-ign">@{member.ign}</p>
                  </div>
                </div>

                {/* Favorite game */}
                <div className="member-game">
                  <div className="game-icon">
                    {getGameIcon(member.favoriteGame)}
                  </div>
                  <div className="game-info">
                    <span className="game-label">Mains</span>
                    <span className="game-name">{member.favoriteGame}</span>
                  </div>
                </div>

                {/* Interaction buttons */}
                <div className="member-actions">
                  <button
                    className="action-btn party-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSeeProfile(member.id);
                    }}
                  >
                    <UserCircle2 size={16} />
                    <span>See Profile</span>
                  </button>
                  <button className="action-btn message-btn">
                    <Heart size={16} />
                    <span>GG</span>
                  </button>
                </div>

                {/* Connection strength */}
                <div className="connection-strength">
                  <div className="strength-bars">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`strength-bar ${i < 4 ? "active" : ""}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                  <span className="connection-label">Squad Bond</span>
                </div>

                {/* Hover effects */}
                <div className="card-particles">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`}></div>
                  ))}
                </div>
              </div>

              {/* Expanded info panel */}
              <div className="member-expanded-info">
                <div className="expanded-content">
                  <div className="expanded-stats">
                    <div className="stat-item">
                      <Zap size={16} />
                      <span>Synergy Level: High</span>
                    </div>
                    <div className="stat-item">
                      <Users size={16} />
                      <span>Games Together: 50+</span>
                    </div>
                  </div>
                  <div className="friendship-meter">
                    <div className="meter-track">
                      <div
                        className="meter-fill"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <span className="meter-label">Squad Chemistry</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="team-footer">
        <div className="team-motto">
          <span className="motto-text">
            "Together we dominate, divided we respawn"
          </span>
        </div>
        <div className="team-established">
          <span>Squad established • 2023</span>
        </div>
      </div>
    </div>
  );
};

TeamConnections.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profilePicture: PropTypes.string.isRequired,
      realName: PropTypes.string.isRequired,
      ign: PropTypes.string.isRequired,
      favoriteGame: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamConnections;
