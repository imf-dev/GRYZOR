import React, { useState, useEffect } from "react";
import "../faner_screen/FanerProfile.css";
import profilePic from "../../assets/player_pics/irah.jpg";
import {
  ArrowLeft,
  Trophy,
  GamepadIcon,
  Target,
  BarChart3,
  Share2,
  Users,
} from "lucide-react";

import ProfileHeader from "./c_ProfileHeader";
import MilestoneCard from "./c_MilestoneCard";
import GameCard from "./c_GameCard";
import JourneyCard from "./c_JourneyCard";
import FunStatsChart from "./c_FunStatsChart";
import SocialLinks from "./c_SocialLinks";
import TeamConnections from "./c_TeamConnections";

import jen from "../../assets/player_pics/jennifer.jpg";
import isa from "../../assets/player_pics/isabel.jpeg";
import ced from "../../assets/player_pics/cedrick.jpg";
import nic from "../../assets/player_pics/nicolo.jpg";

const FanerProfile = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); //top ang una makita
  }, []);

  const games = [
    {
      name: "Growtopia",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2g1KHQUzL_qBAKgEGFAlLr1ETPwzZ4JxYew&s",
      playtime: "2,450 hrs",
      ign: "Yorchi",
      achievements: [
        "Medical Marvel",
        "Big Showoff",
        "Angel of Mercy",
        "5th Anniversary",
        "Super Supporter",
      ],
    },
    {
      name: "Mobile Legends: Bang Bang",
      imageUrl:
        "https://cdn.wallpapersafari.com/59/8/MjlBeW.png",
      playtime: "1,820 hrs",
      ign: "rahwr",
      achievements: [
        "Mythic Rank",
        "Rising Star",
        "Battlefield Veteran",
        "Heart of Generosity",
      ],
    },
    {
      name: "NPC or Die",
      imageUrl:
        "https://tse1.mm.bing.net/th/id/OIP.LMKHyLFtbQzxpk7I_4aKFQHaEK?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      playtime: "650 hrs",
      ign: "Dunkin",
      achievements: ["ACE", "CLOSE CALL", "LAST ONE", "LONG SHOT"],
    },
    {
      name: "Office Cat",
      imageUrl:
        "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-1022789-59.jpg",
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
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/0c/8_Ball_Pool_cover.jpg",
      playtime: "890 hrs",
      ign: "Ren",
      achievements: [
        "Tournament Finalist",
        "London Calling",
        "Bronze Challenger",
        "Golden Ace",
      ],
    },
    {
      name: "Arsenal",
      imageUrl:
        "https://cdnb.artstation.com/p/assets/images/images/029/696/741/large/dily-gfx-arsneal-icnon-watermark.jpg?1598369595",
      playtime: "1,200 hrs",
      ign: "Dunkin",
      achievements: [
        "Evil no more",
        "Golden Touch",
        "One HP Wonder",
        "The Boogieman",
      ],
    },
    {
      name: "Metal Fight Beyblade",
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.T-SMC9UJqakJzolFfX529AHaFu?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      playtime: "1,550 hrs",
      ign: "Ren",
      achievements: [
        "Bey Collector",
        "First Spin",
        "Endless Battles",
        "Champion Blader",
        "Combo Master",
      ],
    },
  ];

  const generalMilestones = [
    { title: "Total Games Mastered", value: "6+", icon: "🎮" },
    { title: "Total Playtime", value: "7,330+ hrs", icon: "⏱️" },
    { title: "Years Gaming", value: "6-7 years", icon: "📅" },
    { title: "Achievements Unlocked", value: "24+", icon: "🏆" },
  ];

  const profileStats = [
    { value: "6+", label: "Games" },
    { value: "7.3K+", label: "Hours" },
    { value: "24+", label: "Achievements" },
  ];

  const journeyData = [
    {
      icon: "🚀",
      title: "Started Journey",
      value: "2018-2019",
      description: "The beginning of an epic adventure",
    },
    {
      icon: "💎",
      title: "Current Status",
      value: "Expert Gamer",
      description: "Mastered multiple game genres",
    },
    {
      icon: "🎯",
      title: "Next Goal",
      value: "10K Hours",
      description: "Reaching the next milestone",
    },
  ];

  const funStats = {
    totalHours: "7,330 hrs",
    avgHours: "1,222 hrs", // or whatever makes sense
    daysPlayed: "305 days",
    weeksPlayed: "43 weeks",
    topGame: "Growtopia",
    topGamePlaytime: "2,450 hrs",
  };

  const socialAccounts = [
    {
      platform: "Facebook",
      username: "Irah Mae Faner",
      link: "https://www.facebook.com/irahmaeb.faner",
    },
    {
      platform: "Instagram",
      username: "_rahmaen",
      link: "https://www.instagram.com/_rahmaen/#",
    },
    {
      platform: "Discord",
      username: "yorchigt",
      link: "https://discordapp.com/users/yorchigt",
    },
    {
      platform: "Twitch",
      username: "yorchiGT",
      link: "https://www.twitch.tv/yorchigt",
    },
    {
      platform: "Roblox",
      username: "Dunkin",
      link: "https://www.roblox.com/users/1799559960/profile",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      profilePicture: jen,
      realName: "Jennifer Leigh Chio",
      ign: "swzvzn",
      favoriteGame: "Valorant",
    },
    {
      id: 3,
      profilePicture: isa,
      realName: "Isabelle Wenceslao",
      ign: "Izabel",
      favoriteGame: "Elden Ring",
    },
    {
      id: 4,
      profilePicture: ced,
      realName: "Aveja Cedrick Ipong",
      ign: "bas_dash",
      favoriteGame: "Honor of Kings",
    },
    {
      id: 5,
      profilePicture: nic,
      realName: "Nicolo Ariola",
      ign: "Xylo",
      favoriteGame: "Genshin Impact",
    },
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

        <ProfileHeader
          profilePic={profilePic}
          name="Irah Mae B. Faner"
          discordName="YorchiGT"
          gamingSince="2018-2019"
          stats={profileStats}
        />

        {/* General Milestones */}
        <div className="milestones-section">
          <h2 className="section-title">
            <Trophy size={24} />
            General Milestones
          </h2>
          <div className="milestones-grid">
            {generalMilestones.map((milestone, index) => (
              <MilestoneCard
                key={index}
                icon={milestone.icon}
                value={milestone.value}
                title={milestone.title}
              />
            ))}
          </div>
        </div>

        {/* Fun Stats Chart Section */}
        <div className="milestones-section">
          <h2 className="section-title">
            <BarChart3 size={24} />
            Gaming Analytics
          </h2>
          <FunStatsChart games={games} funStats={funStats} />
        </div>

        {/* Games Section */}
        <div className="games-section">
          <h2 className="section-title">
            <GamepadIcon size={24} />
            My Games
          </h2>
          <div className="games-grid">
            {games.map((game, index) => (
              <GameCard
                key={index}
                game={game}
                isSelected={selectedGame?.name === game.name}
                onGameClick={handleGameClick}
              />
            ))}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="milestones-section">
          <h2 className="section-title">
            <Share2 size={24} />
            Social Media
          </h2>
          <SocialLinks socialAccounts={socialAccounts} />
        </div>

        {/* Team Connections Section */}
        <div className="milestones-section">
          <h2 className="section-title">
            <Users size={24} />
            Friends / Team Connections
          </h2>
          <TeamConnections teamMembers={teamMembers} />
        </div>

        {/* Gaming Journey Section */}
        <div className="additional-stats">
          <h2 className="section-title">
            <Target size={24} />
            Gaming Journey
          </h2>
          <div className="journey-cards">
            {journeyData.map((journey, index) => (
              <JourneyCard
                key={index}
                icon={journey.icon}
                title={journey.title}
                value={journey.value}
                description={journey.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanerProfile;
