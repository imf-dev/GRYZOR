import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TrendingUp, Zap, Clock } from "lucide-react";
import "./c_ProfileStyles.css";

const FunStatsChart = ({ games, funStats }) => {
  const [activeTab, setActiveTab] = useState("playtime");

  const tabs = [
    { id: "playtime", label: "Playtime", icon: <Clock size={18} /> },
    { id: "achievements", label: "Achievements", icon: <Zap size={18} /> },
    { id: "insights", label: "Insights", icon: <TrendingUp size={18} /> },
  ];

  const renderPlaytimeTab = () => (
    <div className="stats-content">
      <div className="fun-stats-grid">
        <div className="fun-stat-card pulse-card">
          <div className="stat-icon">🎮</div>
          <div className="stat-value">{funStats.totalHours}</div>
          <div className="stat-label">Total Hours</div>
          <div className="stat-sublabel">{funStats.daysPlayed}</div>
        </div>

        <div className="fun-stat-card bounce-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-value">{funStats.avgHours}</div>
          <div className="stat-label">Average per Game</div>
          <div className="stat-sublabel">Consistent player</div>
        </div>

        <div className="fun-stat-card rotate-card">
          <div className="stat-icon">👑</div>
          <div className="stat-value">{funStats.topGame}</div>
          <div className="stat-label">Most Played</div>
          <div className="stat-sublabel">{funStats.topGamePlaytime}</div>
        </div>
      </div>

      {/* keep your bars the same */}
      <div className="playtime-bars">
        {games.map((game, index) => (
          <div key={index} className="playtime-bar-container">
            <div className="game-name">{game.name}</div>
            <div className="playtime-bar">
              <div
                className="playtime-fill"
                style={{
                  width: `${
                    (parseInt(game.playtime) / parseInt(games[0].playtime)) *
                    100
                  }%`,
                  animationDelay: `${index * 0.15}s`,
                }}
              />
            </div>
            <div className="playtime-hours">{game.playtime}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAchievementsTab = () => (
    <div className="stats-content">
      <div className="achievements-grid">
        {games.map((game, index) => (
          <div key={index} className="achievement-game-card">
            <div className="game-header">
              <img src={game.imageUrl} alt={game.name} />
              <h4>{game.name}</h4>
            </div>
            <div className="achievements-count">
              {game.achievements.length} achievements
            </div>
            <div className="achievements-list">
              {game.achievements.slice(0, 3).map((achievement, idx) => (
                <div key={idx} className="achievement-badge">
                  🏆 {achievement}
                </div>
              ))}
              {game.achievements.length > 3 && (
                <div className="achievement-more">
                  +{game.achievements.length - 3} more
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInsightsTab = () => (
    <div className="stats-content">
      <div className="insights-grid">
        <div className="insight-card">
          <div className="insight-icon">🎯</div>
          <div className="insight-title">Gaming Style</div>
          <div className="insight-value">Dedicated Grinder</div>
          <div className="insight-desc">
            You love investing time in games you enjoy
          </div>
        </div>

        <div className="insight-card">
          <div className="insight-icon">🏆</div>
          <div className="insight-title">Achievement Rate</div>
          <div className="insight-value">4 per game</div>
          <div className="insight-desc">Consistent achievement hunter</div>
        </div>

        <div className="insight-card">
          <div className="insight-icon">📈</div>
          <div className="insight-title">Favorite Genre</div>
          <div className="insight-value">Multiplayer</div>
          <div className="insight-desc">Social gaming is your passion</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fun-stats-container">
      <div className="stats-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`stats-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="stats-content-wrapper">
        {activeTab === "playtime" && renderPlaytimeTab()}
        {activeTab === "achievements" && renderAchievementsTab()}
        {activeTab === "insights" && renderInsightsTab()}
      </div>
    </div>
  );
};

FunStatsChart.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      playtime: PropTypes.string.isRequired,
      achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default FunStatsChart;
