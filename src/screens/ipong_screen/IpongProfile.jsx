import React, { useEffect } from "react";
import ProfileCard from "./i_ProfileCard";
import MilestoneCard from "./i_MilestoneCard";
import GameCard from "./i_GameCard";
import SocialCard from "./i_SocialCard";
import StatsCard from "./i_StatsCard";
import "./IpongProfile.css";
import ced from "../../assets/player_pics/cedrick.jpg";

const IpongProfile = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Profile Data
  const profileData = {
    realName: "Aveja Cedrick Ipong",
    ign: "bas_dash",
    description: "Competitive Gamer | MOBA & FPS Fan",
    isOnline: true,
    avatar: ced,
  };

  // Milestones Data
  const milestonesData = [
    {
      icon: "🏆",
      title: "Champion Status",
      description: "Reached top 500 in multiple games",
      date: "2024",
    },
    {
      icon: "🎯",
      title: "Precision Master",
      description: "Achieved 95% accuracy in FPS games",
      date: "2024",
    },
    {
      icon: "⚡",
      title: "Speed Demon",
      description: "Record-breaking APM in MOBA games",
      date: "2023",
    },
    {
      icon: "🔥",
      title: "Streak Legend",
      description: "50+ game winning streak",
      date: "2023",
    },
  ];

  // Games Data
  const gamesData = [
    {
      name: "Valorant",
      ign: "bas_dash",
      achievement: "Radiant Rank",
      image:
        "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-7d279548324d3a3cbef40e1dc7e84994",
    },
    {
      name: "Mobile Legends: Bang Bang",
      ign: "bas_dash",
      achievement: "Mythical Glory",
      image:
        "https://www.exitlag.com/blog/wp-content/uploads/2025/01/MLBB_-everything-you-need-to-know-about-heroes-and-gameplay.webp",
    },
    {
      name: "Honor of Kings",
      ign: "bas_dash",
      achievement: "King Rank",
      image:
        "https://www.levelinfinite.com/wp-content/uploads/2024/03/honor-of-kings-global-launch-pc.jpg",
    },
    {
      name: "Call of Duty",
      ign: "bas_dash",
      achievement: "Master Prestige",
      image:
        "https://image.api.playstation.com/vulcan/img/cfn/113073miFl8n5KuJvbUODdSI8QAHJwVxQEnl2RAiJczrztnMIS-g3T2CyOvhthnE5hHJ7sRZ55W76sk30gfZWILvL0UAkzbT.png",
    },
    {
      name: "Call of Duty: Mobile",
      ign: "bas_dash",
      achievement: "Legendary",
      image: "https://codm.garena.com/static/images/Main-page/P1/main-kv.jpg",
    },
  ];

  // Social Media Data
  const socialData = [
    {
      platform: "Discord",
      url: "#",
      icon: "💬",
    },
    {
      platform: "YouTube",
      url: "#",
      icon: "📺",
    },
    {
      platform: "Twitch",
      url: "#",
      icon: "🎮",
    },
    {
      platform: "Instagram",
      url: "#",
      icon: "📸",
    },
    {
      platform: "Twitter",
      url: "#",
      icon: "🐦",
    },
  ];

  // Stats Data
  const statsData = [
    {
      icon: "🎯",
      value: "2,547",
      label: "Total Wins",
      progress: 85,
    },
    {
      icon: "⏱️",
      value: "1,200+",
      label: "Hours Played",
      progress: 75,
    },
    {
      icon: "🏅",
      value: "156",
      label: "Achievements",
      progress: 95,
    },
    {
      icon: "👥",
      value: "89%",
      label: "Team Play Rate",
      progress: 89,
    },
    {
      icon: "📊",
      value: "3.2",
      label: "K/D Ratio",
      progress: 80,
    },
    {
      icon: "🚀",
      value: "92%",
      label: "Win Rate",
      progress: 92,
    },
  ];

  return (
    <div className="ipong-profile">
      <div className="profile-container">
        {/* Top Row - Profile */}
        <div className="profile-row">
          <ProfileCard {...profileData} />
        </div>

        {/* Second Row - Two Cards */}
        <div className="two-column-row">
          <MilestoneCard milestones={milestonesData} />
          <SocialCard socials={socialData} />
        </div>

        {/* Full Width Sections */}
        <div className="full-width-row">
          <GameCard games={gamesData} />
        </div>

        <div className="full-width-row">
          <StatsCard stats={statsData} />
        </div>
      </div>
    </div>
  );
};

export default IpongProfile;
