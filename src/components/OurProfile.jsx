import React, { useState, useEffect } from "react";
import { SiRepublicofgamers } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import ProfileCards from "./ProfileCards";
import "../styles/OurProfile.css";

import jen from "../assets/player_pics/jennifer.jpg";
import irah from "../assets/player_pics/irah.jpg";
import isa from "../assets/player_pics/isabel.jpeg";
import ced from "../assets/player_pics/cedrick.jpg";
import nic from "../assets/player_pics/nicolo.jpg";

const profilesData = [
  {
    id: 1,
    profilePicture: jen,
    realName: "Jennifer Leigh Chio",
    ign: "swzvzn",
    favoriteGame: "Valorant",
  },
  {
    id: 2,
    profilePicture: irah,
    realName: "Irah Mae Faner",
    ign: "yorchigt",
    favoriteGame: "Growtopia",
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

const OurProfile = () => {
  const [currentIndex, setCurrentIndex] = useState(2); //middle card ang default
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedCard, setHighlightedCard] = useState(null);
  const [profiles, setProfiles] = useState(profilesData);

  const navigate = useNavigate();
  const handleCardClick = (index) => {
    setCurrentIndex(index);

    if (profiles[index].id === 1) {
      navigate("/GRYZOR/profile/chio");
    } else if (profiles[index].id === 2) {
      navigate("/GRYZOR/profile/faner");
    } else if (profiles[index].id === 3) {
      navigate("/GRYZOR/profile/wenceslao");
    } else if (profiles[index].id === 4) {
      navigate("/GRYZOR/profile/ipong");
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : profiles.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < profiles.length - 1 ? prev + 1 : 0));
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setHighlightedCard(null);
      return;
    }

    //Find matching profile
    const matchingIndex = profiles.findIndex(
      (profile) =>
        profile.realName.toLowerCase().includes(term) ||
        profile.ign.toLowerCase().includes(term)
    );

    if (matchingIndex !== -1) {
      setCurrentIndex(matchingIndex);
      setHighlightedCard(matchingIndex);

      setTimeout(() => {
        setHighlightedCard(null);
      }, 2000);
    } else {
      setHighlightedCard(null);
    }
  };

  const getCardPosition = (index) => {
    if (index === currentIndex) return "active";
    if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === profiles.length - 1)
    ) {
      return "left";
    }
    if (
      index === currentIndex + 1 ||
      (currentIndex === profiles.length - 1 && index === 0)
    ) {
      return "right";
    }
    return "hidden";
  };

  return (
    <div className="our-profile-section">
      <div className="profile-header">
        <h2 className="profile-title">
          Meet the <span className="title-highlight">Legends</span>{" "}
          <SiRepublicofgamers size={50} style={{ verticalAlign: "middle" }} />
        </h2>
        <p className="profile-description">
          Get to know the gamers behind GRYZOR - where passion meets skill
        </p>

        {/* Search */}
        <div className="search-container">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search by name or IGN..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <div className="search-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Cardsa*/}
      <div className="carousel-container">
        <button
          className="carousel-arrow left-arrow"
          onClick={handlePrevious}
          aria-label="Previous profile"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="cards-container">
          {profiles.map((profile, index) => (
            <ProfileCards
              key={profile.id}
              profile={profile}
              isActive={getCardPosition(index) === "active"}
              isLeft={getCardPosition(index) === "left"}
              isRight={getCardPosition(index) === "right"}
              isHighlighted={highlightedCard === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        <button
          className="carousel-arrow right-arrow"
          onClick={handleNext}
          aria-label="Next profile"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Tuldoks */}
      <div className="navigation-dots">
        {profiles.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
            aria-label={`Go to profile ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProfile;
