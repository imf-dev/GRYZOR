import React from "react";
import PropTypes from "prop-types";
import "./w_GamesCards.css";

const GamesCards = ({ games }) => {
  return (
    <div className="wenc_games-card">
      <div className="wenc_card-header">
        <h3 className="wenc_card-title">Game Collection</h3>
        <div className="wenc_games-count">{games.length}</div>
      </div>

      <div className="wenc_games-grid">
        {games.map((game, index) => (
          <div
            key={index}
            className="wenc_game-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="wenc_game-image-container">
              <img
                src={game.image}
                alt={game.title}
                className="wenc_game-image"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/100x140/333/fff?text=Game";
                }}
              />
              <div className="wenc_image-overlay">
                <div className="wenc_play-icon">▶</div>
              </div>
            </div>

            <div className="wenc_game-info">
              <h4 className="wenc_game-title">{game.title}</h4>
              <div className="wenc_game-details">
                <span className="wenc_game-year">{game.release}</span>
                <div className="wenc_progress-badge">
                  <span className="wenc_progress-text">{game.progress}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

GamesCards.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired,
      progress: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GamesCards;
