import React from "react";
import PropTypes from "prop-types";
import "./w_AnalyticsCards.css";

const AnalyticsCards = ({ analyticsData }) => {
  return (
    <div className="wenc_analytics-card">
      <div className="wenc_card-header">
        <h3 className="wenc_card-title">Gaming Analytics</h3>
        <div className="wenc_analytics-badge">📊</div>
      </div>

      <div className="wenc_analytics-grid">
        {analyticsData.map((game, index) => (
          <div
            key={index}
            className="wenc_analytics-item"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="wenc_game-header">
              <h4 className="wenc_analytics-game-title">{game.game}</h4>
            </div>

            <div className="wenc_analytics-stats">
              <div className="wenc_stat-row">
                <span className="wenc_stat-label">Playtime</span>
                <div className="wenc_stat-value-container">
                  <span className="wenc_stat-value">{game.playtime}h</span>
                  <div className="wenc_progress-bar">
                    <div
                      className="wenc_progress-fill wenc_playtime-fill"
                      style={{
                        width: `${Math.min((game.playtime / 200) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="wenc_stat-row">
                <span className="wenc_stat-label">Win Rate</span>
                <div className="wenc_stat-value-container">
                  <span className="wenc_stat-value">
                    {game.winRate > 0 ? `${game.winRate}%` : "N/A"}
                  </span>
                  {game.winRate > 0 && (
                    <div className="wenc_progress-bar">
                      <div
                        className="wenc_progress-fill wenc_winrate-fill"
                        style={{ width: `${game.winRate}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="wenc_stat-row">
                <span className="wenc_stat-label">Achievements</span>
                <div className="wenc_stat-value-container">
                  <span className="wenc_stat-value">{game.achievements}%</span>
                  <div className="wenc_progress-bar">
                    <div
                      className="wenc_progress-fill wenc_achievement-fill"
                      style={{ width: `${game.achievements}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wenc_analytics-footer">
              <div className="wenc_performance-indicator">
                {getPerformanceLevel(game)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getPerformanceLevel = (game) => {
  const avgScore =
    ((game.playtime / 200) * 100 + (game.winRate || 0) + game.achievements) / 3;

  if (avgScore >= 70) {
    return (
      <span className="wenc_performance-badge excellent">🏆 Excellent</span>
    );
  } else if (avgScore >= 50) {
    return <span className="wenc_performance-badge good">⭐ Good</span>;
  } else if (avgScore >= 30) {
    return <span className="wenc_performance-badge average">📈 Average</span>;
  } else {
    return <span className="wenc_performance-badge beginner">🎮 Beginner</span>;
  }
};

AnalyticsCards.propTypes = {
  analyticsData: PropTypes.arrayOf(
    PropTypes.shape({
      game: PropTypes.string.isRequired,
      playtime: PropTypes.number.isRequired,
      winRate: PropTypes.number.isRequired,
      achievements: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AnalyticsCards;
