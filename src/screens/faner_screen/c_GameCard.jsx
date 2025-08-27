import React from "react";
import PropTypes from "prop-types";
import { Award, Star } from "lucide-react";
import "./c_ProfileStyles.css";

const GameCard = ({ game, isSelected, onGameClick }) => {
  return (
    <div className="game-card-container">
      <div
        className={`game-card ${isSelected ? "selected" : ""}`}
        onClick={() => onGameClick(game)}
      >
        <div className="game-icon">
          <img src={game.imageUrl} alt={game.name} className="game-image" />
        </div>

        <div className="game-info">
          <h3 className="game-name">{game.name}</h3>
          <p className="game-ign">@{game.ign}</p>
          <p className="game-playtime">{game.playtime}</p>
        </div>
        <div className="game-arrow">{isSelected ? "▼" : "▶"}</div>
      </div>

      {isSelected && (
        <div className="game-details">
          <h4 className="achievements-title">
            <Award size={18} />
            Achievements
          </h4>
          <div className="achievements-list">
            {game.achievements.map((achievement, achIndex) => (
              <div key={achIndex} className="achievement-item">
                <Star size={16} className="achievement-star" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    playtime: PropTypes.string.isRequired,
    ign: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onGameClick: PropTypes.func.isRequired,
};

export default GameCard;
