import React from "react";

function Milestones() {
  const milestones = [
    {
      name: "Immortal",
      stats: "Survived 100 hours without dying in hardcore mode.",
    },
    { name: "Multiverse Explorer", stats: "Played 10+ different genres." },
    {
      name: "NIght Owl",
      stats: "Logged in for 7 consecutive nights past midnight.",
    },
    { name: "Most Played", stats: "Elden Ring" },
  ];

  return (
    <section className="milestones-section">
      <h2 className="section-title">Milestones</h2>
      <div className="milestones-scroll">
        {milestones.map((milestone, idx) => (
          <div className="milestone-card" key={idx}>
            <div className="card-name">{milestone.name}</div>
            <div className="card-stats">
              {milestone.stats.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Milestones;
