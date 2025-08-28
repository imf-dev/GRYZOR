import React from "react";
import GameAnalyticsCard from "../components/GameAnalyticsCard";

function GameAnalytics() {
  const analyticsData = [
    {
      game: "Elden Ring",
      playtime: 120, // number instead of "120h"
      winRate: 75, // just % number
      achievements: 50, // % done
    },
    {
      game: "Cyberpunk 2077",
      playtime: 85,
      winRate: 0, // if not available, keep 0
      achievements: 67,
    },
    {
      game: "Civ VI",
      playtime: 200,
      winRate: 60,
      achievements: 40,
    },
  ];

  return (
    <div className="wenc_analytics-section">
      <h2 className="wenc_analytics-title">Game Analytics</h2>
      <GameAnalyticsCard data={analyticsData} />
    </div>
  );
}

export default GameAnalytics;
