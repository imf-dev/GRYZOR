import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

import "./A_GameList.css";

const A_GameList = () => {
  const [gameIndex, setGameIndex] = useState(0);

  const games = [
    { title: "Valorant", image: "https://cdn.wallpapersafari.com/93/73/dC2tBw.jpg", gradient: "from-red-500 to-pink-600" },
    { title: "League of Legends", image: "https://wallpaper-house.com/data/out/10/wallpaper2you_402930.jpg", gradient: "from-blue-500 to-purple-600" },
    { title: "Mobile Legends Bang Bang", image: "https://img2.tapimg.net/post/images/FsAXDeNxXZkk4Hunv0OeNd4W6RiE.jpeg?imageMogr2/thumbnail/720x9999%3E/quality/80/format/jpg/interlace/1/ignore-error/1&t=1", gradient: "from-orange-500 to-red-600" },
    { title: "Genshin Impact", image: "https://i.pinimg.com/originals/dc/71/ac/dc71acc551eef7efd573eb45ecee3860.jpg", gradient: "from-cyan-400 to-blue-600" },
  ];

  const nextGame = () => setGameIndex((prev) => (prev + 1) % games.length);
  const prevGame = () => setGameIndex((prev) => (prev - 1 + games.length) % games.length);

  return (
    <div className="ariola_game-list">
      <div className="ariola_game-list-header">
        <h3 className="ariola_game-list-title">Your Top Selection</h3>
        <div className="ariola_game-list-buttons">
          <button onClick={prevGame} className="ariola_game-arrow">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextGame} className="ariola_game-arrow">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="ariola_game-list-grid">
        {games.map((game, index) => {
          const position = (index - gameIndex + games.length) % games.length;
          const isCenter = position === 0;
          const isLeft = position === games.length - 1;
          const isRight = position === 1;

          if (!isCenter && !isLeft && !isRight) return null;

          return (
            <div
              key={index}
              className={`ariola_game-card ${isCenter ? "ariola_game-center" : "ariola_game-side"}`}
              style={{ backgroundImage: `url(${game.image})` }}
            >
              <div className={`ariola_game-overlay bg-gradient-to-t ${game.gradient}`}></div>
              <h4 className="ariola_game-title">{game.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

A_GameList.propTypes = {};

export default A_GameList;
