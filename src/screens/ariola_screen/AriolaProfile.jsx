import React, { useEffect } from "react";
import "./AriolaProfile.css";
import profilePic from "../../assets/player_pics/nicolo.jpg";
import GameList from "./A_GameList";
import MilestoneCard from "./A_MilestoneCard";
import A_StatCard from "./A_StatCard";
import A_AchievementSummary from "./A_AchievementsSummary";
import A_FriendsCard from "./A_FriendsCard"; // ✅ new component
import { FaDiscord } from "react-icons/fa";

const AriolaProfile = () => {
  // ✅ Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ariola_profile-screen">
      {/* Profile Card Row */}
      <div className="ariola_profile-container">
        {/* Left Section */}
        <div className="ariola_left-card">
          <img src={profilePic} alt="Profile" className="ariola_avatar" />
          <h2 className="ariola_gamername">Xylo</h2>
          <p className="ariola_gamer-rank">Elite Gamer</p>
        </div>

        {/* Middle Section */}
        <div className="ariola_socials">
          <p>📱 <span className="ariola_link">Nicolo Ariola</span></p>
          <p>📸 <span className="ariola_link">whss.nik0</span></p>
          <p>
            <FaDiscord className="ariola_icon" />{" "}
            <span className="ariola_link">iambwc</span>
          </p>

          {/* ✅ Friends card placed here */}
          <A_FriendsCard />
        </div>

        {/* Right Section */}
        <div className="ariola_right-card">
          <h3 className="ariola_stats-title">Gaming Stats</h3>
          <div className="ariola_stats-grid">
            <div>
              <p className="ariola_stat-value blue">6+</p>
              <p className="ariola_stat-label">Games</p>
            </div>
            <div>
              <p className="ariola_stat-value green">10.3K+</p>
              <p className="ariola_stat-label">Hours</p>
            </div>
            <div>
              <p className="ariola_stat-value yellow">28+</p>
              <p className="ariola_stat-label">Achievements</p>
            </div>
            <div>
              <p className="ariola_stat-value pink">8+</p>
              <p className="ariola_stat-label">Years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="ariola_profile-stats-row">
        <A_StatCard title="Win Rate" value="72%" />
        <A_StatCard title="Matches" value="530" />
        <A_StatCard title="Friends" value="145" />
      </div>

      {/* Games Section */}
      <GameList />

      {/* Achievements Summary */}
      <h3 className="ariola_section-title">Achievements Summary</h3>
      <div className="ariola_profile-achievements">
        <A_AchievementSummary game="Valorant" unlocked={45} total={80} />
        <A_AchievementSummary game="League of Legends" unlocked={120} total={300} />
        <A_AchievementSummary game="CS:GO" unlocked={78} total={120} />
      </div>

      {/* Milestones */}
      <h3 className="ariola_section-title">Milestones</h3>
      <div className="ariola_profile-milestones">
        <MilestoneCard title="Diamond Rank" date="Aug 2025" />
        <MilestoneCard title="Top 100 Leaderboard" date="Jul 2025" />
      </div>
    </div>
  );
};

export default AriolaProfile;
