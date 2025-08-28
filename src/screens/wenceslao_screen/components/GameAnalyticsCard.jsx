import React from "react";
import PropTypes from "prop-types";
import CircleStat from "./CircleStat";

function GameAnalyticsCard({ data }) {
  return (
    <div className="wenc_analytics-card">
      {data.map((item, index) => (
        <div key={index} className="wenc_analytics-row">
          <h3 className="wenc_analytics-game">{item.game}</h3>

          <div className="wenc_circle-stats">
            <CircleStat
              label="Playtime"
              percentage={Math.min(item.playtime / 2, 100)}
            />
            <CircleStat label="Win Rate" percentage={item.winRate} />
            <CircleStat label="Achievements" percentage={item.achievements} />
          </div>
        </div>
      ))}
    </div>
  );
}

GameAnalyticsCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      game: PropTypes.string.isRequired,
      playtime: PropTypes.number.isRequired,
      winRate: PropTypes.number.isRequired,
      achievements: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GameAnalyticsCard;
