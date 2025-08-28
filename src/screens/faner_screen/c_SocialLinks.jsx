import React, { useState } from "react";
import PropTypes from "prop-types";
import { ExternalLink, Share2 } from "lucide-react";
import "./c_ProfileStyles.css";

const SocialLinks = ({ socialAccounts }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getSocialIcon = (platform) => {
    const icons = {
      Facebook:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png",
      Instagram:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/960px-Instagram_logo_2022.svg.png",
      Discord:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-square-color-icon.png",
      Twitch:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Twitch_Glitch_Logo_Purple.svg/1756px-Twitch_Glitch_Logo_Purple.svg.png",
      Roblox:
        "https://logos-world.net/wp-content/uploads/2020/11/Roblox-Icon-Logo-2019.png",
    };

    return (
      <img
        src={
          icons[platform] ||
          "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        } // fallback icon
        alt={platform}
        style={{ width: "28px", height: "28px", objectFit: "contain" }}
      />
    );
  };

  const getSocialColor = (platform) => {
    const colors = {
      Facebook: "linear-gradient(135deg, #1877F2, #42A5F5)",
      Instagram: "linear-gradient(135deg, #E4405F, #FCCC63, #833AB4)",
      Discord: "linear-gradient(135deg, #5865F2, #7289DA)",
      Twitch: "linear-gradient(135deg, #9146FF, #6441A4)",
      Roblox: "linear-gradient(135deg, #00A2FF, #0066CC)",
    };
    return colors[platform] || "linear-gradient(135deg, #7209b7, #533483)";
  };

  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="social-links-container">
      <div className="social-header">
        <div className="social-title-icon">
          <Share2 size={24} />
        </div>
        <h3 className="social-title">Connect with me</h3>
        <p className="social-subtitle">Find me across the gaming universe</p>
      </div>

      <div className="social-cards-grid">
        {socialAccounts.map((account, index) => (
          <div
            key={index}
            className={`social-card ${hoveredCard === index ? "hovered" : ""}`}
            style={{
              "--social-color": getSocialColor(account.platform),
              "--animation-delay": `${index * 0.1}s`,
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleSocialClick(account.link)}
          >
            <div className="social-card-inner">
              <div className="social-icon-container">
                <div className="social-icon">
                  {getSocialIcon(account.platform)}
                </div>
                <div className="social-ripple"></div>
              </div>

              <div className="social-info">
                <h4 className="social-platform">{account.platform}</h4>
                <p className="social-username">@{account.username}</p>
              </div>

              <div className="social-link-icon">
                <ExternalLink size={16} />
              </div>
            </div>

            <div className="social-hover-overlay">
              <div className="hover-text">Click to visit</div>
            </div>

            <div className="social-particles">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`particle particle-${i + 1}`}></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="social-footer">
        <div className="connection-pulse"></div>
        <span>Stay connected • Always online</span>
      </div>
    </div>
  );
};

SocialLinks.propTypes = {
  socialAccounts: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SocialLinks;
