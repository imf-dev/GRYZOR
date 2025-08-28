import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Import Chio's assets
import valo from "../../assets/valorant.jpeg";
import gi from "../../assets/genshin.jpg";
import osuImg from "../../assets/osu.jpg";
import avImg from "../../assets/av.jpg";
import pfImg from "../../assets/pf.png";
import jen from "../../assets/jun.jpg";
import l4d2Img from "../../assets/l4d2.jpg";
import ae from "../../assets/bg.jpg";
import flag from "../../assets/ph.png";

function ChioProfile() {
  const [selectedGame, setSelectedGame] = useState(null);
  
  const profile = {
    gamerTag: "swzvzn",
    discord: "swzvzn",
    title: "Gaming Enthusiast",
    status: "Online",
    hoursAllTime: 3190,
    streakDays: 45,
    avatar: jen,
    discordLink: "https://discord.com/channels/@me",
    twitchLink: "https://www.twitch.tv/swzvzn123"
  };

  const globalStats = {
    gamesTracked: 12,
    totalAchievements: 156,
    avgLevel: 85,
    weeklyHours: 42
  };

  const milestone = {
    label: "Next Milestone",
    description: "Reach 4,000 total hours",
    progress: 80
  };

  const games = [
    {
      name: "Valorant",
      ign: "ign: swzvzn",
      hours: 1250,
      rank: "Radiant",
      stats: { "Winrate %": 68, "Headshot %": 42 },
      image: valo,
      achievements: [
        { title: "Radiant Rank", icon: "👑" },
        { title: "Ace Master", icon: "🎯" },
        { title: "Clutch King", icon: "⚡" }
      ]
    },
    {
      name: "Genshin Impact",
      ign: "ign: swzvzn",
      hours: 890,
      rank: "AR 60",
      stats: { "Characters": 45, "Spiral Abyss": "36★" },
      image: gi,
      achievements: [
        { title: "AR 60", icon: "⭐" },
        { title: "Spiral Abyss", icon: "🌌" },
        { title: "Character Collector", icon: "📦" }
      ]
    },
    {
      name: "osu!",
      ign: "ign: swzvzn",
      hours: 650,
      rank: "Rank #1000",
      stats: { "PP": 8500, "FC Count": 150 },
      image: osuImg,
      achievements: [
        { title: "Rank #1000", icon: "🏆" },
        { title: "FC Master", icon: "🎵" },
        { title: "Speed Demon", icon: "⚡" }
      ]
    },
    {
      name: "Anime Vanguards",
      ign: "ign: swzvzn",
      hours: 420,
      rank: "Lvl 95",
      stats: { "Characters": 25, "Wins": 1200 },
      image: avImg,
      achievements: [
        { title: "World 50 Clear", icon: "🌌" },
        { title: "Vanguard Unit Obtained", icon: "💎" },
        { title: "Raid Boss Defeated", icon: "⚔️" }
      ]
    },
    {
      name: "Phantom Forces",
      ign: "ign: derp",
      hours: 263,
      rank: "Lvl 86",
      stats: { Kills: 8421, "Winrate %": 55 },
      image: pfImg,
      achievements: [
        { title: "10,000 Kills", icon: "🔫" },
        { title: "Headshot Specialist", icon: "🎯" },
        { title: "Sniper Elite", icon: "🎖️" }
      ]
    },
    {
      name: "Left 4 Dead 2",
      ign: "ign: nej",
      hours: 256,
      rank: "Survivor",
      stats: { Campaigns: 12, "Special Infected Kills": 340 },
      image: l4d2Img,
      achievements: [
        { title: "Campaign Veteran", icon: "🧟" },
        { title: "Tank Slayer", icon: "💪" },
        { title: "Witch Hunter", icon: "🔦" }
      ]
    }
  ];

  const achievements = [
    { title: "1000+ Total Hours", detail: "Milestone grinder", icon: "⏱️" },
    { title: "First Diamond Rank", detail: "Shooter veteran", icon: "💎" },
    { title: "Collector", detail: "40+ Genshin characters", icon: "📦" }
  ];

  const recentActivity = [
    { title: "Logged in", detail: "Today at 9:30 AM", icon: "🔑" },
    { title: "Victory!", detail: "Valorant match (13-10)", icon: "🏆" },
    { title: "Daily Quest", detail: "Completed Genshin commissions", icon: "📜" }
  ];

  const chartData = games.map((g) => ({
    name: g.name,
    hours: g.hours
  }));

  // Inline styles to completely isolate Chio's design
  const styles = {
    dashboard: {
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
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      width: '100%',
      height: '200px',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(26, 29, 41, 0.95)), url(${ae})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    profileContent: {
      position: 'relative',
      padding: '50px 20px 20px',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 2,
      gap: '20px'
    },
    leftSection: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    profileStats: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    },
    statValue: {
      fontSize: '22px',
      fontWeight: 700,
      fontFamily: 'monospace',
      color: '#14e125d2',
      lineHeight: 1
    },
    statLabel: {
      fontSize: '10px',
      color: '#838aa7',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    centerSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px'
    },
    avatarWrapper: {
      position: 'relative',
      width: '80px',
      height: '80px'
    },
    avatar: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #14e125d2'
    },
    statusIndicator: {
      position: 'absolute',
      bottom: '2px',
      right: '2px',
      width: '20px',
      height: '20px',
      background: '#1a1a1a',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    statusDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: '#14e125d2'
    },
    centerInfo: {
      textAlign: 'center'
    },
    gamerTag: {
      fontSize: '24px',
      fontWeight: 700,
      color: '#fff',
      margin: '0 0 4px 0'
    },
    statusBadge: {
      background: 'rgba(20, 225, 37, 0.2)',
      color: '#14e125d2',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 600',
      textTransform: 'uppercase'
    },
    discord: {
      color: '#838aa7',
      fontSize: '14px',
      margin: '4px 0 0 0'
    },
    rightSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '12px'
    },
    location: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    flag: {
      width: '20px',
      height: '15px',
      borderRadius: '2px'
    },
    locationText: {
      color: '#838aa7',
      fontSize: '14px'
    },
    separator: {
      width: '1px',
      height: '40px',
      background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4), transparent)'
    },
    socialButtons: {
      display: 'flex',
      gap: '8px'
    },
    socialBtn: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: '#fff'
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
    gameCard: {
      background: '#12151a',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(48, 15, 167, 0.443)',
      transition: 'transform 0.3s ease'
    },
    gameCardImage: {
      width: '100%',
      height: '120px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '12px'
    },
    gameCardTitle: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#fff',
      marginBottom: '4px'
    },
    gameCardSubtitle: {
      fontSize: '14px',
      color: '#838aa7',
      marginBottom: '8px'
    },
    gameCardStats: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      marginBottom: '12px'
    },
    gameCardStat: {
      fontSize: '12px',
      color: '#ccc'
    },
    gameCardAchievements: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px'
    },
    achievementTag: {
      background: 'rgba(125, 221, 122, 0.2)',
      color: '#7ddd7a',
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '10px'
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
    }
  };

  return (
    <div style={styles.dashboard}>
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
        {/* Profile Card */}
        <div style={styles.profileCard}>
          <div style={styles.profileContent}>
            <div style={styles.leftSection}>
              <div style={styles.profileStats}>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{profile.hoursAllTime.toLocaleString()}</span>
                  <span style={styles.statLabel}>Hours Played</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{profile.streakDays}</span>
                  <span style={styles.statLabel}>Day Streak</span>
                </div>
              </div>
            </div>

            <div style={styles.centerSection}>
              <div style={styles.avatarWrapper}>
                <img src={profile.avatar} alt={profile.gamerTag} style={styles.avatar} />
                <div style={styles.statusIndicator}>
                  <div style={styles.statusDot} />
                </div>
              </div>
              
              <div style={styles.centerInfo}>
                <h2 style={styles.gamerTag}>{profile.gamerTag}</h2>
                <span style={styles.statusBadge}>{profile.status}</span>
                <p style={styles.discord}>@{profile.discord}</p>
              </div>
            </div>

            <div style={styles.rightSection}>
              <div style={styles.location}>
                <img src={flag} alt="Philippines Flag" style={styles.flag} />
                <span style={styles.locationText}>Philippines</span>
              </div>

              <div style={styles.separator}></div>
              
              <div style={styles.socialButtons}>
                <button 
                  style={styles.socialBtn}
                  onClick={() => window.open(profile.discordLink, '_blank')}
                  title="Discord Profile"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </button>
                <button 
                  style={styles.socialBtn}
                  onClick={() => window.open(profile.twitchLink, '_blank')}
                  title="Twitch Channel"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div style={styles.globalStats}>
          <h3>Global Stats</h3>
          <ul>
            <li>Games Tracked: {globalStats.gamesTracked}</li>
            <li>Total Achievements: {globalStats.totalAchievements}</li>
            <li>Average Level: {globalStats.avgLevel}</li>
            <li>Weekly Hours: {globalStats.weeklyHours}</li>
          </ul>
        </div>
        
        <div style={styles.milestoneCard}>
          <h3>{milestone.label}</h3>
          <p>{milestone.description}</p>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: `${milestone.progress}%`}}></div>
          </div>
          <span>{milestone.progress}% Complete</span>
        </div>
        
        <div style={styles.gameCardContainer} className="chio-game-card-container">
          {games.map((game, index) => (
            <div key={index} style={styles.gameCard}>
              <img src={game.image} alt={game.name} style={styles.gameCardImage} />
              <h4 style={styles.gameCardTitle}>{game.name}</h4>
              <p style={styles.gameCardSubtitle}>{game.ign}</p>
              <div style={styles.gameCardStats}>
                <div style={styles.gameCardStat}>{game.rank}</div>
                <div style={styles.gameCardStat}>{game.hours} hours</div>
                {Object.entries(game.stats).map(([key, value]) => (
                  <div key={key} style={styles.gameCardStat}>{key}: {value}</div>
                ))}
              </div>
              <div style={styles.gameCardAchievements}>
                {game.achievements.slice(0, 2).map((achievement, i) => (
                  <span key={i} style={styles.achievementTag}>
                    {achievement.icon} {achievement.title}
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
          <h3>Most Played Games (Hours)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" tick={{ fill: "#ccc" }} />
              <YAxis tick={{ fill: "#ccc" }} />
              <Tooltip />
              <Bar dataKey="hours" fill="#82ca9d" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ChioProfile;