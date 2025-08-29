import React from "react";
import PropTypes from "prop-types";
import "./QuestBoard.css";

export default function QuestBoard({ daily = [], weekly = [] }) {
  const Item = ({ q }) => (
    <label className={`quest ${q.done ? "done" : ""}`}>
      <input type="checkbox" checked={q.done} readOnly />
      <span className="text">{q.text}</span>
      <span className="reward">{q.reward}</span>
    </label>
  );

  return (
    <div className="card quest-card">
      <h3>Quest Board</h3>
      <div className="columns">
        <div>
          <h4>Daily</h4>
          {daily.length
            ? daily.map((q, i) => <Item key={i} q={q} />)
            : <p className="empty">No daily quests.</p>}
        </div>
        <div>
          <h4>Weekly</h4>
          {weekly.length
            ? weekly.map((q, i) => <Item key={i} q={q} />)
            : <p className="empty">No weekly quests.</p>}
        </div>
      </div>
    </div>
  );
}

QuestBoard.propTypes = {
  daily: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      reward: PropTypes.string,
      done: PropTypes.bool
    })
  ),
  weekly: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      reward: PropTypes.string,
      done: PropTypes.bool
    })
  )
};

QuestBoard.defaultProps = {
  daily: [],
  weekly: []
};
