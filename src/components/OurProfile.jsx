import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/OurProfile.css";

const OurProfile = () => {
  const [selectedProfile, setSelectedProfile] = useState(0);

  const profiles = [
    {
      id: 1,
      name: "Phoenix",
      role: "Duelist",
      country: "UK",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      abilities: [
        { name: "Blaze", icon: "🔥" },
        { name: "Curveball", icon: "⚡" },
        { name: "Hot Hands", icon: "🌟" },
        { name: "Run it Back", icon: "🔄" },
      ],
    },
    {
      id: 2,
      name: "Jett",
      role: "Duelist",
      country: "South Korea",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c95a12ab?w=400&h=500&fit=crop&crop=face",
      abilities: [
        { name: "Cloudburst", icon: "☁️" },
        { name: "Updraft", icon: "⬆️" },
        { name: "Tailwind", icon: "💨" },
        { name: "Blade Storm", icon: "⚔️" },
      ],
    },
    {
      id: 3,
      name: "Sage",
      role: "Sentinel",
      country: "China",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      abilities: [
        { name: "Barrier Orb", icon: "🛡️" },
        { name: "Slow Orb", icon: "🌀" },
        { name: "Healing Orb", icon: "💚" },
        { name: "Resurrection", icon: "✨" },
      ],
    },
    {
      id: 4,
      name: "Sova",
      role: "Initiator",
      country: "Russia",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      abilities: [
        { name: "Owl Drone", icon: "🦅" },
        { name: "Shock Bolt", icon: "⚡" },
        { name: "Recon Bolt", icon: "🎯" },
        { name: "Hunter's Fury", icon: "🏹" },
      ],
    },
    {
      id: 5,
      name: "Viper",
      role: "Controller",
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
      abilities: [
        { name: "Snake Bite", icon: "🐍" },
        { name: "Poison Cloud", icon: "☠️" },
        { name: "Toxic Screen", icon: "💚" },
        { name: "Viper's Pit", icon: "🌫️" },
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, //number of slides to show
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="our-profile-container">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`profile-card ${
                selectedProfile === index ? "selected" : ""
              }`}
              onClick={() => setSelectedProfile(index)}
            >
              <div className="profile-image-container">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="profile-image"
                />
                <div className="profile-overlay">
                  <div className="profile-role">{profile.role}</div>
                </div>
              </div>
              <div className="profile-name">{profile.name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurProfile;
