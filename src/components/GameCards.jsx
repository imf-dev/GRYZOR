import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import "../styles/GameCards.css";

const GameCard = ({ title, description, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip
      className="game-card-wrapper"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      {/* Front Side */}
      <div
        className="card-front"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onMouseEnter={() => setIsFlipped(true)}
      >
        <div className="card-title">{title}</div>
      </div>

      {/* Back Side */}
      <div className="card-back" onMouseLeave={() => setIsFlipped(false)}>
        <p className="card-description">{description}</p>
      </div>
    </ReactCardFlip>
  );
};

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default GameCard;
