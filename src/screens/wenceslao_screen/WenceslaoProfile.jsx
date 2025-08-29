import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ProfileHeader from "./w_ProfileHeader";
import MilestonesCards from "./w_MilestonesCards";
import GamesCards from "./w_GamesCards";
import AnalyticsCards from "./w_AnalyticsCards";
import "./WenceslaoProfile.css";
import isa from "../../assets/player_pics/isabel.jpeg";

const WenceslaoProfile = () => {
  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      name: "Immortal",
      stats: "Survived 100 hours without dying in hardcore mode.",
    },
    { name: "Multiverse Explorer", stats: "Played 10+ different genres." },
    {
      name: "Night Owl",
      stats: "Logged in for 7 consecutive nights past midnight.",
    },
    { name: "Most Played", stats: "Elden Ring" },
  ];

  const games = [
    {
      title: "Marvel's Spider-man",
      release: "2018",
      progress: "Finished",
      image: "https://i.redd.it/4uch4034sff41.jpg",
    },
    {
      title: "Detroit Become Human",
      release: "2018",
      progress: "Finished",
      image: "https://i.ebayimg.com/images/g/YocAAOSwOmZihmWz/s-l1200.jpg",
    },
    {
      title: "Hitman",
      release: "2019",
      progress: "Finished",
      image:
        "https://i.ebayimg.com/00/s/MTYwMFgxMDM1/z/lk0AAOSwfiFkgfsX/%24_57.JPG?set_id=880000500F",
    },
    {
      title: "Tony Hawk's Pro Skater",
      release: "2001",
      progress: "Level 19",
      image: "https://xonomax.com/cdn/shop/files/598823.jpg?v=1726817400",
    },
    {
      title: "Grand Theft Auto V",
      release: "2013",
      progress: "Finished",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGUXJd68xnHcRVvOfmk5UeythMdch05YTGIfz3GQ6tJ7CSFR9S",
    },
    {
      title: "The Sims 4",
      release: "2014",
      progress: "Rich",
      image:
        "https://i.etsystatic.com/40271594/r/il/dac178/6143826289/il_570xN.6143826289_fibl.jpg",
    },
  ];

  const analyticsData = [
    {
      game: "Elden Ring",
      playtime: 120,
      winRate: 75,
      achievements: 50,
    },
    {
      game: "Cyberpunk 2077",
      playtime: 85,
      winRate: 0,
      achievements: 67,
    },
    {
      game: "Civ VI",
      playtime: 200,
      winRate: 60,
      achievements: 40,
    },
  ];

  const profileData = {
    realName: "Cyrene Isabelle Wenceslao",
    ign: "@Izabel",
    pfp: isa,
    links: ["Discord: izabel", "Twitch: iisxchii", "Twitter: ii.izabel.ii"],
    level: 76,
    totalGames: 981,
    totalAchievements: 4975,
    perfectGames: 15,
    avgCompletionRate: 85,
  };

  return (
    <div className="wenc_profile">
      <div className="wenc_profile-container">
        <ProfileHeader
          realName={profileData.realName}
          ign={profileData.ign}
          pfp={profileData.pfp}
          links={profileData.links}
          level={profileData.level}
          totalGames={profileData.totalGames}
          totalAchievements={profileData.totalAchievements}
          perfectGames={profileData.perfectGames}
          avgCompletionRate={profileData.avgCompletionRate}
        />

        <div className="wenc_profile-content">
          <div className="wenc_left-section">
            <MilestonesCards milestones={milestones} />
            <AnalyticsCards analyticsData={analyticsData} />
          </div>

          <div className="wenc_right-section">
            <GamesCards games={games} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WenceslaoProfile;
