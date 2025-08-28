import React from "react";
import PropTypes from "prop-types";
import "./i_SocialCard.css";

const SocialCard = ({ socials }) => {
  return (
    <div className="ipong_social-card">
      <h3 className="ipong_social-title">Follow Me!</h3>
      <div className="ipong_social-links">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`ipong_social-link ${social.platform.toLowerCase()}`}
          >
            <div className="ipong_social-icon">
              <span>{social.icon}</span>
            </div>
            <span className="ipong_social-name">{social.platform}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

SocialCard.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SocialCard;
