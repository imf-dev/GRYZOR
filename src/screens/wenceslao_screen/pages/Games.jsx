import React from "react";

function Games() {
  const games = [
    {
      title: "Marvel's Spider-man",
      release: "2018",
      progress: "Finished",
      image: "https://i.redd.it/4uch4034sff41.jpg",
    },
    {
      title: "Detroit Become Human",
      release: "2018",
      progress: "Finished",
      image: "https://i.ebayimg.com/images/g/YocAAOSwOmZihmWz/s-l1200.jpg",
    },
    {
      title: "Hitman",
      release: "2019",
      progress: "Finished",
      image:
        "https://i.ebayimg.com/00/s/MTYwMFgxMDM1/z/lk0AAOSwfiFkgfsX/%24_57.JPG?set_id=880000500F",
    },
    {
      title: "Tony Hawk's Pro Skater",
      release: "2001",
      progress: "Level 19",
      image: "https://xonomax.com/cdn/shop/files/598823.jpg?v=1726817400",
    },
    {
      title: "Grand Theft Auto V",
      release: "2013",
      progress: "Finished",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGUXJd68xnHcRVvOfmk5UeythMdch05YTGIfz3GQ6tJ7CSFR9S",
    },
    {
      title: "The Sims 4",
      release: "2014",
      progress: "Rich",
      image:
        "https://i.etsystatic.com/40271594/r/il/dac178/6143826289/il_570xN.6143826289_fibl.jpg",
    },
  ];

  return (
    <section className="games-section">
      <h2 className="section-title">Other Games</h2>
      <div className="games-grid">
        {games.map((game, index) => (
          <div key={index} className="game-card milestone-card">
            <img src={game.image} alt={game.title} className="card-image" />

            {/* Bottom overlay */}
            <div className="card-bottom">
              <div className="card-name">{game.title}</div>
            </div>

            {/* Hover overlay */}
            <div className="card-stats">
              <p>Release: {game.release}</p>
              <p>Progress: {game.progress}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Games;
