import React from "react";
import PropTypes from "prop-types";
import "./GameCard.css";

export default function GameCard({
  name,
  ign,
  hours,
  rank,
  stats,
  image,
  achievements
}) {
  return (
    <div className="game-card">
      <img src={image} alt={name} className="game-image" />
      <h3>{name}</h3>
      <p>{ign}</p>
      <p>{rank}</p>
      <ul>
        {stats && Object.entries(stats).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
      <div className="achievements-list">
        {achievements && achievements.map((a, i) => (
          <span key={i}>{a.icon} {a.title}</span>
        ))}
      </div>
    </div>
  );
}

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  ign: PropTypes.string,
  hours: PropTypes.number,
  rank: PropTypes.string,
  stats: PropTypes.object,
  image: PropTypes.string.isRequired,
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  )
};

GameCard.defaultProps = {
  ign: "",
  hours: 0,
  rank: "",
  stats: {},
  achievements: []
};
