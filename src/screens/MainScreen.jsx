import React, { useState } from "react";
import "../styles/MainScreen.css";
import logo from "../assets/GRYZOR_logoonly.svg";
import characters from "../assets/charac-cropped.svg";
import GameCard from "../components/GameCards";
import OurProfile from "../components/OurProfile";

const games = [
  {
    title: "Valorant",
    description:
      "Tactical 5v5 shooter where strategy, precise aiming, and unique agent abilities define every round.",
    imageUrl:
      "https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-scaled.jpg",
  },
  {
    title: "Mobile Legends: Bang Bang (MLBB)",
    description:
      "Fast-paced MOBA where heroes clash in 5v5 battles for victory.",
    imageUrl:
      "https://wallpapers.com/images/featured/mobile-legends-v0u46grjbqc6h9ga.jpg",
  },
  {
    title: "Genshin Impact",
    description:
      "Open-world action RPG with elemental combat, exploration, and epic storylines.",
    imageUrl:
      "https://fastcdn.hoyoverse.com/content-v2/plat/124031/5d2ba4371115d26de4c574b28311aed8_576844151847376526.jpeg",
  },
  {
    title: "Growtopia",
    description:
      "Creative sandbox MMO where players build worlds, trade items, and explore endless possibilities together.",
    imageUrl:
      "https://getwallpapers.com/wallpaper/full/5/a/4/872420-full-size-growtopia-wallpapers-2560x1440-macbook.jpg",
  },
  {
    title: "Honor of Kings",
    description:
      "Fast-paced multiplayer MOBA where heroes battle in strategic 5v5 matches for dominance.",
    imageUrl:
      "https://revolutionarena.com/pt-br/wp-content/uploads/sites/2/2024/03/Honor-of-Kings.jpg",
  },
  {
    title: "Grow a Garden",
    description:
      "Plant seeds, nurture your garden, and watch it flourish in a relaxing simulation.",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/pFRc4vFEfKBUEG89FQjFTE.jpg",
  },
  {
    title: "Call of Duty",
    description:
      "Action-packed first-person shooter featuring intense battles across various warzones, strategic team play, and cinematic campaigns.",
    imageUrl:
      "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt476e411d696dfb08/67e603a1d66ebd1287f688e5/BO6_S3_WZ_X1-Garrison-App-1920x1080.png?imwidth=1920&imdensity=2.625",
  },
  {
    title: "Call of Duty: Mobile",
    description:
      "Fast-paced mobile FPS that brings classic Call of Duty maps, modes, and characters to your phone, featuring multiplayer and battle royale experiences on the go.",
    imageUrl:
      "https://dlgarenanow-a.akamaihd.net/mgames/cod/Official%20Website/News/140120/GarenaWorld.png",
  },
  {
    title: "Anime Vanguards",
    description:
      "Action-packed Roblox game where players collect characters, level up, and battle in anime-inspired arenas.",
    imageUrl:
      "https://tr.rbxcdn.com/180DAY-f4f1b6547583ffeb85cd659de39482c4/768/432/Image/Webp/noFilter",
  },
  {
    title: "osu!",
    description:
      "Rhythm-based music game challenging players to hit notes with precision and speed.",
    imageUrl: "https://i.ytimg.com/vi/kwoR1TKQF4Y/maxresdefault.jpg",
  },
  {
    title: "Dragon City",
    description:
      "Build and breed your own dragons, create a city, and battle in epic dragon tournaments.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzi7nqf8yycX8Ds1yYqLSox53U07k3099kgw&s",
  },
];

const MainScreen = () => {
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, games.length));
  };

  const handleShowLess = () => {
    setVisibleCount(6); // reset to initial 6
  };

  return (
    <div className="main-screen">
      {/* Hero Section */}
      <section id="about" className="hero-section">
        <section className="hero-section">
          <div className="hero-content">
            {/* Center Logo */}
            <div className="hero-logo">
              <img src={logo} alt="GRYZOR" className="logo-image" />
            </div>

            {/* Main Title */}
            <h1 className="hero-title">
              <span className="title-platform">Forged for Legends</span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              GRYZOR is built by gamers, for gamers. We live for the grind, the
              wins, and the worlds we play in. From our profiles to the games we
              dominate, this is where passion meets play — this is GRYZOR.
            </p>
          </div>

          {/* Hero Characters */}
          <div className="hero-characters">
            <div className="characters-fade">
              <img
                src={characters}
                alt="Game Characters"
                className="characters-image"
              />
            </div>
          </div>
        </section>
      </section>

      {/* Profiles Section */}
      <section id="profiles" className="profiles-section">
        <OurProfile />
      </section>

      {/* Games We Play Section */}
      <section id="games" className="upcoming-games">
        <div className="upcoming-content">
          <h2 className="upcoming-title">
            ￬ Games <span className="title-highlight">we play ￬</span>
          </h2>
          <p className="upcoming-description">
            Check out the games that keep us on our toes and entertained
          </p>

          <div
            className="games-grid-wrapper"
            style={{ maxHeight: `${visibleCount * 220}px` }}
          >
            <div className="games-grid">
              {games.slice(0, visibleCount).map((game) => (
                <GameCard
                  key={game.title}
                  title={game.title}
                  description={game.description}
                  imageUrl={game.imageUrl}
                />
              ))}
            </div>
          </div>

          {/* Show More / Show Less Buttons */}
          <div className="show-more-container">
            {visibleCount < games.length && (
              <div className="separator-btn" onClick={handleShowMore}>
                Show More
              </div>
            )}
            {visibleCount > 6 && (
              <div className="separator-btn" onClick={handleShowLess}>
                Show Less
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainScreen;
