import React from "react";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import GameCard from "./GameCard";
import QuestBoard from "./QuestBoard";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import valo from "../../assets/valorant.jpeg";
import gi from "../../assets/genshin.jpg";
import osuImg from "../../assets/osu.jpg";
import avImg from "../../assets/av.jpg";
import pfImg from "../../assets/pf.png";
import jen from "../../assets/jun.jpg";
import l4d2Img from "../../assets/l4d2.jpg";
import ae from "../../assets/bg.jpg";
import flag from "../../assets/ph.png";

import "./Dashboard.css";

// Global Stats Card
function GlobalStatsCard({ gamesTracked, totalAchievements, avgLevel, weeklyHours }) {
  return (
    <div className="global-stats">
      <h3 className="card-title">Global Stats</h3>
      <ul>
        <li>Games Tracked: {gamesTracked}</li>
        <li>Total Achievements: {totalAchievements}</li>
        <li>Average Level: {avgLevel}</li>
        <li>Weekly Hours: {weeklyHours}</li>
      </ul>
    </div>
  );
}

GlobalStatsCard.propTypes = {
  gamesTracked: PropTypes.number.isRequired,
  totalAchievements: PropTypes.number.isRequired,
  avgLevel: PropTypes.number.isRequired,
  weeklyHours: PropTypes.number.isRequired
};

// Milestone Card
function MilestoneCard({ label, description, progress }) {
  return (
    <div className="milestone-card">
      <h3 className="card-title">{label}</h3>
      <p>{description}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <span>{progress}% Complete</span>
    </div>
  );
}

MilestoneCard.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired
};

// Reusable Container Card
function ContainerCard({ title, items, className }) {
  return (
    <div className={`container-card ${className || ""}`}>
      <h3 className="container-title">{title}</h3>
      <div className="inner-cards">
        {items.length === 0 ? (
          <p className="empty">No data yet.</p>
        ) : (
          items.map((item, i) => (
            <div className="inner-card" key={i}>
              <span className="icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

ContainerCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      detail: PropTypes.string,
      icon: PropTypes.string
    })
  ).isRequired,
  className: PropTypes.string
};

// Dashboard component
export default function Dashboard() {
  const profile = {
    gamerTag: "Jennifer Leigh Chio",
    discord: "swzvzn",
    title: "Get Good, Lag is my co-pilot.",
    status: "Online",
    hoursAllTime: 3112,
    streakDays: 12,
    avatar: jen
  };

  const globalStats = {
    gamesTracked: 6,
    totalAchievements: 138,
    avgLevel: 62,
    weeklyHours: 18
  };

  const milestone = {
    label: "🎯 Year Goal",
    description:
      "Reach any Top 5% rank in one shooter OR finish 100% a story zone.",
    progress: 64
  };

  const games = [
    {
      name: "Valorant",
      ign: "ign: uncle bao#145",
      hours: 1799,
      rank: "Peak Rank: Gold 3",
      stats: { Roles: "Duelist/Sentinel", "HS %": 28, "Winrate %": 52 },
      image: valo,
      achievements: [
        { title: "First Ace", icon: "🎯" },
        { title: "Clutch Master", icon: "🔥" },
        { title: "1216 Matches Played", icon: "🏆" }
      ]
    },
    {
      name: "Genshin Impact",
      ign: "UID: 895813863",
      hours: 225,
      rank: "AR 50",
      stats: { "Abyss Stars": 36, "Chars Owned": 38 },
      image: gi,
      achievements: [
        { title: "Wonders of the World (147)", icon: "🌍" },
        { title: "Spiral Abyss 36 Stars", icon: "⭐" },
        { title: "All Regions Unlocked", icon: "🗺️" }
      ]
    },
    {
      name: "Osu!",
      ign: "ign: ryouiki tenkai",
      hours: 89,
      rank: "B+",
      stats: { "Accuracy %": 96.2, "Best PP": 185 },
      image: osuImg,
      achievements: [
        { title: "S Rank on Insane", icon: "🎶" },
        { title: "1000 Beatmaps Cleared", icon: "🥁" },
        { title: "FC on 5-Star Map", icon: "⭐" }
      ]
    },
    {
      name: "Anime Vanguards",
      ign: "ign: derp",
      hours: 480,
      rank: "World 7",
      stats: { Power: 8120, Units: 58 },
      image: avImg,
      achievements: [
        { title: "World 50 Clear", icon: "🌌" },
        { title: "Vanguard Unit Obtained", icon: "💎" },
        { title: "Raid Boss Defeated", icon: "⚔️" }
      ]
    },
    {
      name: "Phantom Forces",
      ign: "ign: derp",
      hours: 263,
      rank: "Lvl 86",
      stats: { Kills: 8421, "Winrate %": 55 },
      image: pfImg,
      achievements: [
        { title: "10,000 Kills", icon: "🔫" },
        { title: "Headshot Specialist", icon: "🎯" },
        { title: "Sniper Elite", icon: "🎖️" }
      ]
    },
    {
      name: "Left 4 Dead 2",
      ign: "ign: nej",
      hours: 256,
      rank: "Survivor",
      stats: { Campaigns: 12, "Special Infected Kills": 340 },
      image: l4d2Img,
      achievements: [
        { title: "Campaign Veteran", icon: "🧟" },
        { title: "Tank Slayer", icon: "💪" },
        { title: "Witch Hunter", icon: "🔦" }
      ]
    }
  ];

  const achievements = [
    { title: "1000+ Total Hours", detail: "Milestone grinder", icon: "⏱️" },
    { title: "First Diamond Rank", detail: "Shooter veteran", icon: "💎" },
    { title: "Collector", detail: "40+ Genshin characters", icon: "📦" }
  ];

  const recentActivity = [
    { title: "Logged in", detail: "Today at 9:30 AM", icon: "🔑" },
    { title: "Victory!", detail: "Valorant match (13-10)", icon: "🏆" },
    { title: "Daily Quest", detail: "Completed Genshin commissions", icon: "📜" }
  ];

  const chartData = games.map((g) => ({
    name: g.name,
    hours: g.hours
  }));

  return (
    <div className="dashboard-16-9">
      <div className="dashboard main-layout">
        {/* Top Row */}
        <ProfileCard {...profile} />
        <GlobalStatsCard {...globalStats} />
        <MilestoneCard {...milestone} />

        {/* 🎮 Game Cards Grid */}
        <div className="game-card-container">
          {games.map((game, i) => (
            <GameCard key={i} {...game} />
          ))}
        </div>

        {/* 🏆 Achievements + Recent Activity */}
        <div className="side-container">
          <ContainerCard
            title="Achievements"
            items={achievements}
            className="achievements-card"
          />
          <ContainerCard
            title="Recent Activity"
            items={recentActivity}
            className="recent-activity-card"
          />
        </div>

        {/* 📊 Chart */}
        <div className="chart-card">
          <h3 className="chart-title">Most Played Games (Hours)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" tick={{ fill: "#ccc" }} />
              <YAxis tick={{ fill: "#ccc" }} />
              <Tooltip />
              <Bar dataKey="hours" fill="#82ca9d" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
