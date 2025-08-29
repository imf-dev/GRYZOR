import React from "react";
import "./A_AchievementsSummary.css";

const A_AchievementsSummary = ({ game, unlocked, total }) => {
  const percentage = Math.round((unlocked / total) * 100);

  return (
    <div className="ariola_achievement-card">
      <h4 className="ariola_achievement-game">{game}</h4>
      <div className="ariola_achievement-progress">
        <div
          className="ariola_achievement-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="ariola_achievement-text">
        {unlocked}/{total} ({percentage}%)
      </p>
    </div>
  );
};

export default A_AchievementsSummary;
