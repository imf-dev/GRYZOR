import React from "react";
import PropTypes from "prop-types";
import "./AchievementsCard.css";

export default function AchievementsCard({ items }) {
  return (
    <div className="achievements-card">
      <h3>Achievements</h3>
      {items.length === 0 ? (
        <p className="empty">No achievements yet. Start a quest!</p>
      ) : (
        <ul className="ach-list">
          {items.map((item, index) => (
            <li key={index}>
              <span className="icon">{item.icon}</span>
              <span className="title">{item.title}</span>
              {item.detail && <span className="detail">{item.detail}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

AchievementsCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      detail: PropTypes.string,
      icon: PropTypes.string
    })
  )
};

AchievementsCard.defaultProps = {
  items: []
};
