import React from "react";
import PropTypes from "prop-types";
import "../styles/ProfileCards.css";

const ProfileCards = ({
  profile,
  isActive,
  isLeft,
  isRight,
  onClick,
  isHighlighted,
}) => {
  const getCardClass = () => {
    let baseClass = "profile-card";
    if (isActive) baseClass += " active";
    if (isLeft) baseClass += " left";
    if (isRight) baseClass += " right";
    if (isHighlighted) baseClass += " highlighted";
    return baseClass;
  };

  return (
    <div className={getCardClass()} onClick={onClick}>
      <div className="card-glow"></div>
      <div className="card-content">
        <div className="profile-image-container">
          <img
            src={profile.profilePicture}
            alt={profile.realName}
            className="profile-image"
          />
          <div className="image-overlay"></div>
        </div>

        <div className="profile-info">
          <h3 className="real-name">{profile.realName}</h3>
          <p className="ign">@{profile.ign}</p>
          <div className="favorite-game">
            <span className="game-label">Favorite Game</span>
            <span className="game-value">{profile.favoriteGame}</span>
          </div>
        </div>

        <div className="card-decoration">
          <div className="decoration-line"></div>
        </div>
      </div>
    </div>
  );
};

ProfileCards.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profilePicture: PropTypes.string.isRequired,
    realName: PropTypes.string.isRequired,
    ign: PropTypes.string.isRequired,
    favoriteGame: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool,
  isLeft: PropTypes.bool,
  isRight: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isHighlighted: PropTypes.bool,
};

ProfileCards.defaultProps = {
  isActive: false,
  isLeft: false,
  isRight: false,
  isHighlighted: false,
};

export default ProfileCards;
