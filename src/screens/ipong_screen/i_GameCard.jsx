import React from "react";
import PropTypes from "prop-types";
import "./i_GameCard.css";

const GameCard = ({ games }) => {
  return (
    <div className="ipong_games-card">
      <h3 className="ipong_games-title">My Games</h3>
      <div className="ipong_games-grid">
        {games.map((game, index) => (
          <div key={index} className="ipong_game-item">
            <div className="ipong_game-image">
              <img src={game.image} alt={game.name} />
            </div>
            <div className="ipong_game-info">
              <h4>{game.name}</h4>
              <p className="ipong_game-ign">IGN: {game.ign}</p>
              <div className="ipong_achievements">
                <span className="ipong_achievement-badge">
                  {game.achievement}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

GameCard.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ign: PropTypes.string.isRequired,
      achievement: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GameCard;
