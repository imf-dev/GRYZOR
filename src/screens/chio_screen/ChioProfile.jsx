import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Import Chio's assets
import valo from "../../assets/valorant.jpeg";
import gi from "../../assets/genshin.jpg";
import osuImg from "../../assets/osu.jpg";
import pfImg from "../../assets/pf.png";

function ChioProfile() {
  const [selectedGame, setSelectedGame] = useState(null);
  
  const games = [
    {
      name: "Valorant",
      imageUrl: valo,
      playtime: "1,250 hrs",
      ign: "swzvzn",
      achievements: ["Radiant", "Ace", "Clutch Master", "Team Player"]
    },
    {
      name: "Genshin Impact",
      imageUrl: gi,
      playtime: "890 hrs",
      ign: "swzvzn",
      achievements: ["AR 60", "Spiral Abyss", "Explorer", "Collector"]
    },
    {
      name: "osu!",
      imageUrl: osuImg,
      playtime: "650 hrs",
      ign: "swzvzn",
      achievements: ["Rank #1000", "FC Master", "Speed Demon"]
    }
  ];
  
  const achievements = [
    { title: "First Blood", detail: "First kill in Valorant", icon: "⚔️" },
    { title: "Explorer", detail: "100% map completion", icon: "🗺️" },
    { title: "Speed Demon", detail: "Beat 100 songs", icon: "🎵" }
  ];
  
  const recentActivity = [
    { title: "Valorant Match", detail: "Won 13-7", icon: "🎮" },
    { title: "Genshin Daily", detail: "Completed commissions", icon: "⭐" },
    { title: "osu! Session", detail: "New personal best", icon: "🎯" }
  ];
  
  const chartData = [
    { name: 'Valorant', hours: 1250 },
    { name: 'Genshin', hours: 890 },
    { name: 'osu!', hours: 650 },
    { name: 'Others', hours: 400 }
  ];

  // Inline styles to completely isolate Chio's design
  const styles = {
    chioContainer: {
      width: '100%',
      minHeight: '100vh',
      background: 'radial-gradient(circle at top left, rgba(0, 255, 255, 0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(255, 0, 255, 0.15), transparent 40%), linear-gradient(135deg, #00000097, #07034885, #2a1b0f)',
      backgroundSize: '200% 200%',
      animation: 'neonShift 12s ease infinite',
      color: '#fff',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
      overflowY: 'auto',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial'
    },
    mainLayout: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',
      gap: '20px'
    },
    profileCard: {
      gridColumn: '1 / span 2',
      background: 'linear-gradient(180deg, #0ac3e3, #7383ef)',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(73, 8, 225, 0.443)'
    },
    globalStats: {
      gridColumn: '1 / span 1',
      background: '#1c1f2b',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(35, 65, 153, 0.443)'
    },
    milestoneCard: {
      gridColumn: '2 / span 1',
      background: '#1c1f2b',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(45, 18, 197, 0.443)'
    },
    gameCardContainer: {
      gridColumn: '1 / span 2',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px'
    },
    containerCard: {
      background: '#12151a',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(48, 15, 167, 0.443)'
    },
    sideContainer: {
      gridColumn: '1 / span 2',
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap'
    },
    achievementsCard: {
      flex: 1,
      minWidth: '250px',
      background: '#12151a',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(2, 230, 131, 0.443)'
    },
    chartCard: {
      gridColumn: '1 / span 2',
      background: '#12151a',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(2, 230, 131, 0.443)'
    },
    innerCard: {
      background: '#1c1f2b',
      padding: '12px',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      color: '#fff',
      marginBottom: '10px'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '4px',
      marginTop: '10px'
    },
    progressFill: {
      width: '80%',
      height: '100%',
      background: '#7ddd7a',
      borderRadius: '4px'
    },
    achievementTag: {
      background: 'rgba(125, 221, 122, 0.2)',
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      marginRight: '5px'
    }
  };

  return (
    <div style={styles.chioContainer}>
      <style>
        {`
          @keyframes neonShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @media (max-width: 1200px) {
            .chio-game-card-container {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          
          @media (max-width: 768px) {
            .chio-main-layout {
              grid-template-columns: 1fr !important;
            }
            
            .chio-game-card-container {
              grid-template-columns: 1fr !important;
            }
            
            .chio-side-container {
              flex-direction: column !important;
            }
          }
        `}
      </style>
      
      <div style={styles.mainLayout} className="chio-main-layout">
        <div style={styles.profileCard}>
          <h2>Jennifer Leigh Chio</h2>
          <p>@swzvzn</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <div>
              <strong>3,190</strong> hours played
            </div>
            <div>
              <strong>45</strong> day streak
            </div>
          </div>
        </div>
        
        <div style={styles.globalStats}>
          <h3>Global Stats</h3>
          <ul>
            <li>Games Tracked: 12</li>
            <li>Total Achievements: 156</li>
            <li>Average Level: 85</li>
            <li>Weekly Hours: 42</li>
          </ul>
        </div>
        
        <div style={styles.milestoneCard}>
          <h3>Next Milestone</h3>
          <p>Reach 4,000 total hours</p>
          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>
          <span>80% Complete</span>
        </div>
        
        <div style={styles.gameCardContainer} className="chio-game-card-container">
          {games.map((game, index) => (
            <div key={index} style={styles.containerCard}>
              <h4>{game.name}</h4>
              <p>{game.playtime} • {game.ign}</p>
              <div style={{ marginTop: '10px' }}>
                {game.achievements.slice(0, 2).map((achievement, i) => (
                  <span key={i} style={styles.achievementTag}>
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div style={styles.sideContainer} className="chio-side-container">
          <div style={styles.achievementsCard}>
            <h3>Achievements</h3>
            {achievements.map((item, i) => (
              <div key={i} style={styles.innerCard}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
          
          <div style={styles.achievementsCard}>
            <h3>Recent Activity</h3>
            {recentActivity.map((item, i) => (
              <div key={i} style={styles.innerCard}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div style={styles.chartCard}>
          <h3>Gaming Hours</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#7ddd7a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ChioProfile;