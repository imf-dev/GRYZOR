// File: WenceslaoProfile.jsx
import React from "react";
import "./Profile.css"; // keeps all your Profile-related styles
import Home from "./pages/Home";
import Milestones from "./pages/Milestones";
import GameAnalytics from "./pages/GameAnalytics";
import Games from "./pages/Games";
import Others from "./pages/Others";

function WenceslaoProfile() {
  return (
    <div className="wenc_app">
      {" "}
      <Home />
      <Milestones />
      <GameAnalytics />
      <Games />
      <Others />
    </div>
  );
}

export default WenceslaoProfile;
