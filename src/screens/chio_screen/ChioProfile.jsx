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

// Global Stats Card Component
function GlobalStatsCard({ gamesTracked, totalAchievements, avgLevel, weeklyHours }) {
  return (
    <div style={{
      gridColumn: '1 / span 1',
      background: '#1c1f2b',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(35, 65, 153, 0.443)'
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#fff' }}>Global Stats</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ margin: '8px 0', color: '#fff' }}>Games Tracked: {gamesTracked}</li>
        <li style={{ margin: '8px 0', color: '#fff' }}>Total Achievements: {totalAchievements}</li>
        <li style={{ margin: '8px 0', color: '#fff' }}>Average Level: {avgLevel}</li>
        <li style={{ margin: '8px 0', color: '#fff' }}>Weekly Hours: {weeklyHours}</li>
      </ul>
    </div>
  );
}

// Milestone Card Component
function MilestoneCard({ label, description, progress }) {
  return (
    <div style={{
      gridColumn: '2 / span 1',
      background: '#1c1f2b',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(45, 18, 197, 0.443)'
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#fff' }}>{label}</h3>
      <p style={{ color: '#fff', marginBottom: '12px' }}>{description}</p>
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(255,255,255,0.2)',
        borderRadius: '4px',
        marginBottom: '8px'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#7ddd7a',
          borderRadius: '4px'
        }}></div>
      </div>
      <span style={{ color: '#fff', fontSize: '14px' }}>{progress}% Complete</span>
    </div>
  );
}

// Game Card Component (matching Chio's original design)
function GameCard({ name, ign, hours, rank, stats, image, achievements }) {
  return (
    <div style={{
      width: '340px',
      minHeight: '520px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'linear-gradient(180deg, #1233ebb8, #8c0ba99f)',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 6px 18px rgba(5, 197, 231, 0.365)',
      color: '#ffffff',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.4s ease'
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '50px',
          marginBottom: '12px'
        }} 
      />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h3 style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', fontWeight: 600, margin: 0 }}>{name}</h3>
      </div>
      
      <p style={{ fontSize: 'clamp(0.8rem, 1vw, 1rem)', opacity: 0.85, margin: '4px 0' }}>{ign}</p>
      <p style={{ fontSize: 'clamp(0.8rem, 1vw, 1rem)', opacity: 0.85, margin: '4px 0' }}>{rank}</p>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0' }}>
        {stats && Object.entries(stats).map(([key, value]) => (
          <li key={key} style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)',
            margin: '4px 0'
          }}>
            <span style={{ opacity: 0.85 }}>{key}</span>
            <span style={{ fontWeight: 600 }}>{value}</span>
          </li>
        ))}
      </ul>
      
      <div style={{
        background: 'rgba(255, 255, 255, 0.08)',
        padding: '10px',
        borderRadius: '12px',
        marginTop: 'auto'
      }}>
        <h5 style={{ margin: '0 0 8px', fontSize: 'clamp(0.9rem, 1vw, 1rem)', fontWeight: 600 }}>Achievements</h5>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {achievements && achievements.map((a, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '6px 8px',
              borderRadius: '8px',
              fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)',
              wordBreak: 'break-word'
            }}>
              <span style={{ flexShrink: 0 }}>{a.icon}</span>
              <span>{a.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Container Card Component
function ContainerCard({ title, items, className }) {
  return (
    <div style={{
      flex: 1,
      minWidth: '250px',
      background: '#12151a',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(2, 230, 131, 0.443)'
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#fff' }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.length === 0 ? (
          <p style={{ color: '#fff' }}>No data yet.</p>
        ) : (
          items.map((item, i) => (
            <div key={i} style={{
              background: '#1c1f2b',
              padding: '12px',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              color: '#fff'
            }}>
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              <h4 style={{ margin: '4px 0', fontSize: '16px' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>{item.detail}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function ChioProfile() {
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
      paddingTop: '100px', // Add top margin for header
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
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      width: '100%',
      height: '320px',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(26, 29, 41, 0.95)), url(${ae})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      cursor: 'pointer'
    },
    profileContent: {
      position: 'relative',
      padding: '20px',
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
      gap: '20px',
      flex: 1,
      justifyContent: 'center',
      padding: '20px 0'
    },
    avatarWrapper: {
      position: 'relative',
      width: '100px',
      height: '100px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    },
    avatar: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #14e125d2',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      filter: 'brightness(1)'
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
      background: '#14e125d2',
      animation: 'pulse 2s infinite',
      boxShadow: '0 0 10px rgba(20, 225, 37, 0.5)'
    },
    centerInfo: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    },
    gamerTag: {
      fontSize: '28px',
      fontWeight: 700,
      color: '#fff',
      margin: '0 0 8px 0',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    },
    statusBadge: {
      background: 'rgba(20, 225, 37, 0.2)',
      color: '#14e125d2',
      padding: '6px 12px',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: 600,
      textTransform: 'uppercase',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      border: '1px solid transparent'
    },
    discord: {
      color: '#838aa7',
      fontSize: '16px',
      margin: '8px 0 0 0',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    },
    rightSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      flex: 1
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
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    },
    gameCardContainer: {
      gridColumn: '1 / span 2',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      justifyContent: 'center'
    },
    sideContainer: {
      gridColumn: '1 / span 2',
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap'
    },
    chartCard: {
      gridColumn: '1 / span 2',
      background: '#12151a',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(2, 230, 131, 0.443)'
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
          
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px rgba(20, 225, 37, 0.3); }
            50% { box-shadow: 0 0 20px rgba(20, 225, 37, 0.6); }
          }
          
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          /* Profile Card Hover Effects */
          .chio-profile-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(20, 225, 37, 0.3);
          }
          
          /* Avatar Hover Effects */
          .chio-avatar-wrapper:hover {
            transform: scale(1.1);
          }
          
          .chio-avatar-wrapper:hover .chio-avatar {
            filter: brightness(1.2) contrast(1.1);
            border-color: #14e125;
            box-shadow: 0 0 20px rgba(20, 225, 37, 0.6);
          }
          
          /* Gamer Tag Hover Effects */
          .chio-gamer-tag:hover {
            color: #14e125d2;
            text-shadow: 0 0 10px rgba(20, 225, 37, 0.8);
            transform: scale(1.05);
          }
          
          /* Status Badge Hover Effects */
          .chio-status-badge:hover {
            background: rgba(20, 225, 37, 0.3);
            border-color: #14e125d2;
            transform: scale(1.05);
            animation: glow 1s infinite;
          }
          
          /* Discord Hover Effects */
          .chio-discord:hover {
            color: #14e125d2;
            text-shadow: 0 0 8px rgba(20, 225, 37, 0.6);
            transform: scale(1.02);
          }
          
          /* Social Buttons Hover Effects */
          .chio-social-btn:hover {
            background: rgba(20, 225, 37, 0.2);
            border-color: #14e125d2;
            transform: translateY(-2px) scale(1.1);
            box-shadow: 0 5px 15px rgba(20, 225, 37, 0.4);
          }
          
          .chio-social-btn:hover svg {
            transform: scale(1.2);
            filter: drop-shadow(0 0 5px rgba(20, 225, 37, 0.8));
          }
          
          /* Game Cards Hover Effects */
          .chio-game-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 12px 30px rgba(5, 197, 231, 0.5);
            background: linear-gradient(180deg, #1233ebb8, #8c0ba99f, #14e125b8);
          }
          
          /* Stats Cards Hover Effects */
          .chio-stats-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(35, 65, 153, 0.6);
            background: #1c1f2b;
          }
          
          /* Milestone Card Hover Effects */
          .chio-milestone-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(45, 18, 197, 0.6);
            background: #1c1f2b;
          }
          
          /* Container Cards Hover Effects */
          .chio-container-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(2, 230, 131, 0.6);
            background: #12151a;
          }
          
          /* Chart Card Hover Effects */
          .chio-chart-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(2, 230, 131, 0.6);
            background: #12151a;
          }
          
          /* Animation Classes */
          .chio-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .chio-slide-in {
            animation: slideIn 0.6s ease-out;
          }
          
          .chio-fade-in {
            animation: fadeIn 0.8s ease-out;
          }
          
          /* Smooth transitions for all interactive elements */
          .chio-interactive {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
        <div style={styles.profileCard} className="chio-profile-card chio-slide-in">
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
              <div style={styles.avatarWrapper} className="chio-avatar-wrapper chio-float">
                <img src={profile.avatar} alt={profile.gamerTag} style={styles.avatar} className="chio-avatar" />
                <div style={styles.statusIndicator}>
                  <div style={styles.statusDot} />
                </div>
              </div>
              
              <div style={styles.centerInfo}>
                <h2 style={styles.gamerTag} className="chio-gamer-tag chio-interactive">{profile.gamerTag}</h2>
                <span style={styles.statusBadge} className="chio-status-badge chio-interactive">{profile.status}</span>
                <p style={styles.discord} className="chio-discord chio-interactive">@{profile.discord}</p>
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
                  className="chio-social-btn chio-interactive"
                  onClick={() => window.open(profile.discordLink, '_blank')}
                  title="Discord Profile"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </button>
                <button 
                  style={styles.socialBtn}
                  className="chio-social-btn chio-interactive"
                  onClick={() => window.open(profile.twitchLink, '_blank')}
                  title="Twitch Channel"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="chio-stats-card chio-fade-in">
          <GlobalStatsCard {...globalStats} />
        </div>
        <div className="chio-milestone-card chio-fade-in">
          <MilestoneCard {...milestone} />
        </div>

        {/* Game Cards Grid */}
        <div style={styles.gameCardContainer} className="chio-game-card-container">
          {games.map((game, i) => (
            <div key={i} className="chio-game-card chio-slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <GameCard {...game} />
            </div>
          ))}
        </div>
        
        {/* Achievements + Recent Activity */}
        <div style={styles.sideContainer} className="chio-side-container">
          <div className="chio-container-card chio-fade-in">
            <ContainerCard
              title="Achievements"
              items={achievements}
              className="achievements-card"
            />
          </div>
          <div className="chio-container-card chio-fade-in">
            <ContainerCard
              title="Recent Activity"
              items={recentActivity}
              className="recent-activity-card"
            />
          </div>
        </div>
        
        {/* Chart */}
        <div style={styles.chartCard} className="chio-chart-card chio-fade-in">
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#fff' }}>Most Played Games (Hours)</h3>
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