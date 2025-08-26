import React, { useState, useEffect } from "react";
import "../styles/player_profiles/FanerProfile.css";
import profilePic from "../assets/player_pics/irah.jpg";
import {
  ArrowLeft,
  Trophy,
  Star,
  Calendar,
  Target,
  Award,
  GamepadIcon,
} from "lucide-react";

const FanerProfile = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); //top ang una makita
  }, []);

  const games = [
    {
      name: "Growtopia",
      icon: "🌱",
      playtime: "2,450 hrs",
      ign: "Yorchi",
      achievements: [
        "World Builder Master",
        "Trade Baron",
        "Social Butterfly",
        "Rare Item Collector",
      ],
    },
    {
      name: "Mobile Legends: Bang Bang",
      icon: "⚔️",
      playtime: "1,820 hrs",
      ign: "rahwr",
      achievements: [
        "Mythic Glory Rank",
        "Triple Kill Specialist",
        "Team Player MVP",
        "Tournament Winner",
      ],
    },
    {
      name: "NPC or Die",
      icon: "🎭",
      playtime: "650 hrs",
      ign: "Dunkin",
      achievements: [
        "Master Deceiver",
        "Survival Expert",
        "Quick Thinker",
        "Social Engineer",
      ],
    },
    {
      name: "Office Cat",
      icon: "🐱",
      playtime: "320 hrs",
      ign: "chichi",
      achievements: [
        "CEO Cat",
        "Productivity Pro",
        "Office Decorator",
        "Cat Collector",
      ],
    },
    {
      name: "8 Ball Pool",
      icon: "🎱",
      playtime: "890 hrs",
      ign: "Ren",
      achievements: [
        "Pool Master",
        "Streak Champion",
        "Precision Shot",
        "Tournament Victor",
      ],
    },
    {
      name: "Arsenal",
      icon: "🔫",
      playtime: "1,200 hrs",
      ign: "Dunkin",
      achievements: [
        "Headshot King",
        "Killstreak Master",
        "Weapon Expert",
        "Arena Champion",
      ],
    },
  ];

  const generalMilestones = [
    { title: "Total Games Mastered", value: "6+", icon: "🎮" },
    { title: "Total Playtime", value: "7,330+ hrs", icon: "⏱️" },
    { title: "Years Gaming", value: "6-7 years", icon: "📅" },
    { title: "Achievements Unlocked", value: "24+", icon: "🏆" },
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  const handleGameClick = (game) => {
    setSelectedGame(selectedGame?.name === game.name ? null : game);
  };

  return (
    <div className="faner-profile">
      <div className="profile-container">
        <button className="back-button" onClick={handleBackClick}>
          <ArrowLeft size={20} />
          <span>Back to Profiles</span>
        </button>

        <div className="profile-header-card">
          <div className="profile-avatar">
            <img
              src={profilePic}
              alt="Irah Mae B. Faner"
              className="avatar-image"
            />
            <div className="status-indicator"></div>
          </div>

          <div className="profile-info">
            <h1 className="profile-name">Irah Mae B. Faner</h1>
            <p className="discord-name">@YorchiGT</p>
            <div className="gaming-since">
              <Calendar size={16} />
              <span>Gaming since 2018-2019</span>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-value">6+</span>
              <span className="stat-label">Games</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">7.3K+</span>
              <span className="stat-label">Hours</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">24+</span>
              <span className="stat-label">Achievements</span>
            </div>
          </div>
        </div>

        {/* General Milestones */}
        <div className="milestones-section">
          <h2 className="section-title">
            <Trophy size={24} />
            General Milestones
          </h2>
          <div className="milestones-grid">
            {generalMilestones.map((milestone, index) => (
              <div key={index} className="milestone-card">
                <div className="milestone-icon">{milestone.icon}</div>
                <div className="milestone-info">
                  <h3 className="milestone-value">{milestone.value}</h3>
                  <p className="milestone-title">{milestone.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Games Section */}
        <div className="games-section">
          <h2 className="section-title">
            <GamepadIcon size={24} />
            My Games
          </h2>
          <div className="games-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card-container">
                <div
                  className={`game-card ${
                    selectedGame?.name === game.name ? "selected" : ""
                  }`}
                  onClick={() => handleGameClick(game)}
                >
                  <div className="game-icon">{game.icon}</div>
                  <div className="game-info">
                    <h3 className="game-name">{game.name}</h3>
                    <p className="game-ign">@{game.ign}</p>
                    <p className="game-playtime">{game.playtime}</p>
                  </div>
                  <div className="game-arrow">
                    {selectedGame?.name === game.name ? "▼" : "▶"}
                  </div>
                </div>

                {selectedGame?.name === game.name && (
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
            ))}
          </div>
        </div>

        {/* more Stats Section */}
        <div className="additional-stats">
          <h2 className="section-title">
            <Target size={24} />
            Gaming Journey
          </h2>
          <div className="journey-cards">
            <div className="journey-card">
              <div className="journey-icon">🚀</div>
              <h3>Started Journey</h3>
              <p>2018-2019</p>
              <span>The beginning of an epic adventure</span>
            </div>
            <div className="journey-card">
              <div className="journey-icon">💎</div>
              <h3>Current Status</h3>
              <p>Expert Gamer</p>
              <span>Mastered multiple game genres</span>
            </div>
            <div className="journey-card">
              <div className="journey-icon">🎯</div>
              <h3>Next Goal</h3>
              <p>10K Hours</p>
              <span>Reaching the next milestone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanerProfile;
