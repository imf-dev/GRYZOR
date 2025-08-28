import React from "react";
import "./Card.css";
import profilePic from "../assets/ISA.jpeg";

function HeaderCard() {
  return (
    <div className="wenc_card wenc_header-card">
      <div className="wenc_header-content">
        <div className="wenc_profile-pic-wrapper">
          <img className="wenc_profile-pic" src={profilePic} alt="Profile" />
          <span className="wenc_online-indicator"></span>
        </div>

        <div className="wenc_center-text">
          <h1 className="wenc_main-name">Isabelle Wenceslao</h1>
          <p className="wenc_ign">@Izabel</p>
        </div>

        <div className="wenc_right-links">
          <p>Discord: izabel</p>
          <p>Twitch: iisxchii</p>
          <p>Twitter: ii.izabel.ii</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
