import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../components/Card.css";

import isa from "../assets/ISA.jpeg";
import jen from "../assets/jun.jpg";
import ira from "../assets/irah.jpg";
import ced from "../assets/profile.jpg";
import nic from "../assets/Nicolo.jpg";

const profilesData = [
  {
    id: 1,
    profilePicture: jen,
    realName: "Jennifer Leigh Chio",
    ign: "swzvzn",
    favoriteGame: "Valorant",
    route: "/others/jennifer",
  },
  {
    id: 2,
    profilePicture: ira,
    realName: "Irah Mae Faner",
    ign: "yorchigt",
    favoriteGame: "Growtopia",
    route: "/others/irah",
  },
  {
    id: 3,
    profilePicture: isa,
    realName: "Isabelle Wenceslao",
    ign: "Izabel",
    favoriteGame: "Elden Ring",
    route: "/others/isa",
  },
  {
    id: 4,
    profilePicture: ced,
    realName: "Aveja Cedrick Ipong",
    ign: "bas_dash",
    favoriteGame: "Honor of Kings",
    route: "/others/cedrick",
  },
  {
    id: 5,
    profilePicture: nic,
    realName: "Nicolo Ariola",
    ign: "Xylo",
    favoriteGame: "Genshin Impact",
    route: "/others/nicolo",
  },
];

const Others = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [highlightedCard, setHighlightedCard] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = (index) => {
    setCurrentIndex(index);
    navigate(profilesData[index].route);
  };

  const getCardPosition = (index) => {
    if (index === currentIndex) return "wenc_active";
    if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === profilesData.length - 1)
    )
      return "wenc_left";
    if (
      index === currentIndex + 1 ||
      (currentIndex === profilesData.length - 1 && index === 0)
    )
      return "wenc_right";
    return "wenc_hidden";
  };

  return (
    <div className="wenc_others-section">
      <h2 className="wenc_profile-title">
        Meet the <span className="wenc_title-highlight">Legends</span>
      </h2>
      <p className="wenc_profile-description">
        "Together we dominate, divided we respawn"
      </p>

      <div className="wenc_carousel-container">
        <div className="wenc_cards-container">
          {profilesData.map((profile, index) => (
            <div
              key={profile.id}
              className={`wenc_profile-card ${getCardPosition(index)} ${
                highlightedCard === index ? "wenc_highlighted" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <img
                src={profile.profilePicture}
                alt={profile.realName}
                className="wenc_profile-image"
              />
              <div className="wenc_card-content">
                <h3>{profile.realName}</h3>
                <p>IGN: {profile.ign}</p>
                <p>Favorite: {profile.favoriteGame}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wenc_navigation-dots">
        {profilesData.map((_, index) => (
          <button
            key={index}
            className={`wenc_dot ${
              index === currentIndex ? "wenc_active" : ""
            }`}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

Others.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profilePicture: PropTypes.string,
      realName: PropTypes.string,
      ign: PropTypes.string,
      favoriteGame: PropTypes.string,
      route: PropTypes.string,
    })
  ),
};

export default Others;
