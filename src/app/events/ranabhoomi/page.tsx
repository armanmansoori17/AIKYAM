"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { events } from "@/lib/events-data";

// Custom tactical SVG icons
const ClipboardIcon = () => (
  <svg style={{ width: "1.1rem", height: "1.1rem", fill: "currentColor" }} viewBox="0 0 24 24">
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg style={{ width: "1.1rem", height: "1.1rem", fill: "currentColor" }} viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const CrateIcon = () => (
  <svg style={{ width: "1.1rem", height: "1.1rem", fill: "currentColor" }} viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const WarningIcon = () => (
  <svg style={{ width: "1rem", height: "1rem", fill: "#B1001E", marginRight: "10px" }} viewBox="0 0 24 24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg style={{ width: "1rem", height: "1rem", fill: "currentColor" }} viewBox="0 0 24 24">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </svg>
);

const TargetIcon = () => (
  <svg style={{ width: "1.2rem", height: "1.2rem", fill: "currentColor", animation: "spin 8s linear infinite" }} viewBox="0 0 24 24">
    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
  </svg>
);

const TrophyIcon = () => (
  <svg style={{ width: "2.8rem", height: "2.8rem", fill: "#B1001E" }} viewBox="0 0 24 24">
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.44 1.72 4.48 4 4.88v2.12c0 2.1 1.5 3.86 3.5 4.24V21H8v2h8v-2h-2.5v-1.76c2-.38 3.5-2.14 3.5-4.24v-2.12c2.28-.4 4-2.44 4-4.88V7c0-1.1-.9-2-2-2zm-12 5V7h2v3c0 .55-.45 1-1 1s-1-.45-1-1zm10 0c0 .55-.45 1-1 1s-1-.45-1-1V7h2v3z"/>
  </svg>
);

const SilverTrophyIcon = () => (
  <svg style={{ width: "2.8rem", height: "2.8rem", fill: "rgba(11, 11, 12, 0.4)" }} viewBox="0 0 24 24">
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.44 1.72 4.48 4 4.88v2.12c0 2.1 1.5 3.86 3.5 4.24V21H8v2h8v-2h-2.5v-1.76c2-.38 3.5-2.14 3.5-4.24v-2.12c2.28-.4 4-2.44 4-4.88V7c0-1.1-.9-2-2-2zm-12 5V7h2v3c0 .55-.45 1-1 1s-1-.45-1-1zm10 0c0 .55-.45 1-1 1s-1-.45-1-1V7h2v3z"/>
  </svg>
);

const TopoLines = () => (
  <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
    <path d="M-100,150 C300,100 500,350 900,250 C1300,150 1500,550 2100,450" stroke="rgba(255, 106, 0, 0.045)" strokeWidth="2.5" fill="none" />
    <path d="M-100,250 C320,200 520,450 920,350 C1320,250 1520,650 2120,550" stroke="rgba(255, 106, 0, 0.045)" strokeWidth="2.5" fill="none" />
    <path d="M-100,380 C340,300 540,550 940,450 C1340,350 1540,750 2140,650" stroke="rgba(0, 0, 0, 0.025)" strokeWidth="1.5" fill="none" />
    <path d="M-100,500 C360,420 560,680 960,580 C1360,480 1560,880 2160,780" stroke="rgba(0, 0, 0, 0.025)" strokeWidth="1.5" fill="none" />
    <path d="M-100,650 C380,580 580,820 980,720 C1380,620 1580,1000 2180,900" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="1.2" fill="none" />
    <text x="3%" y="96%" fill="rgba(11, 11, 12, 0.15)" fontFamily="Orbitron" fontSize="12" letterSpacing="3">SYS_COORD_LAT_12.9716_LON_77.5946</text>
  </svg>
);

export default function RanabhoomiPage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"mission" | "loot" | "rules">("mission");
  const [currentTime, setCurrentTime] = useState("");
  const ev = events.find((e) => e.slug === "ranabhoomi");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    
    // Live system clock
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!ev) return <div style={{ color: "#fff", background: "#000", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Event not found</div>;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&display=swap');

        :root {
          --ff-crimson: #FF6A00; /* Re-mapped to Free Fire Vibrant Orange */
          --ff-crimson-glow: rgba(255, 106, 0, 0.25);
          --ff-accent-orange: #FFAA00; /* Re-mapped to Free Fire Caution Yellow */
          --ff-pitch-black: #0B0B0C;
          --ff-off-white: #F4F5F7;
          --ff-border-gray: rgba(11, 11, 12, 0.12);
          --ff-text-dark: #0B0B0C;
          --ff-text-muted: rgba(11, 11, 12, 0.6);
        }

        /* Custom Scrollbar */
        .panel-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .panel-scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        .panel-scroll::-webkit-scrollbar-thumb {
          background: var(--ff-crimson);
          border-radius: 2px;
        }

        .poster-wrapper {
          min-height: 100vh;
          width: 100%;
          background-color: var(--ff-off-white);
          color: var(--ff-text-dark);
          font-family: 'Rajdhani', sans-serif;
          position: relative;
          overflow-y: auto;
          overflow-x: hidden;
        }

        /* Tactical Loading Screen */
        .tactical-loader {
          position: fixed;
          inset: 0;
          background: #0B0B0C;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .tactical-loader.hidden {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-100%);
        }
        .loader-progressbar {
          width: 280px;
          height: 3px;
          background: rgba(255, 255, 255, 0.06);
          position: relative;
          overflow: hidden;
          margin-top: 25px;
        }
        .loader-progressfill {
          height: 100%;
          width: 0%;
          background: var(--ff-crimson);
          box-shadow: 0 0 10px var(--ff-crimson);
          animation: fillProgress 1.1s ease-in-out forwards;
        }
        @keyframes fillProgress {
          100% { width: 100%; }
        }

        /* Giant Background red watermark typography layered behind characters */
        .giant-typography {
          position: fixed;
          top: 26%;
          left: 4%;
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: clamp(6rem, 15vw, 15rem);
          color: rgba(255, 106, 0, 0.08); /* Transparent orange watermark */
          line-height: 0.8;
          letter-spacing: -6px;
          user-select: none;
          pointer-events: none;
          z-index: 2;
          text-transform: uppercase;
        }

        /* Top navigation header strip */
        .poster-nav {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 6%;
          background: transparent;
        }
        .nav-logo-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-logo-marker {
          width: 8px;
          height: 24px;
          background: var(--ff-crimson);
        }
        .nav-logo-text {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 1.25rem;
          letter-spacing: 2px;
          color: var(--ff-pitch-black);
        }
        .nav-status {
          display: flex;
          align-items: center;
          gap: 18px;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--ff-text-muted);
        }
        .status-pulse-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(177, 0, 30, 0.07);
          border: 1px solid rgba(177, 0, 30, 0.2);
          padding: 4px 10px;
          border-radius: 2px;
          color: var(--ff-crimson);
        }
        .status-pulse-dot {
          width: 6px;
          height: 6px;
          background: var(--ff-crimson);
          border-radius: 50%;
          animation: dotPulse 1.2s infinite alternate;
        }
        @keyframes dotPulse {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }

        /* Main layout container split */
        .poster-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 6% 80px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .poster-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-bottom: 50px;
          }
        }

        /* 1. LEFT SIDE: TITLE + COMMAND CONTROLS */
        .poster-left {
          display: flex;
          flex-direction: column;
        }
        .tagline-strip {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.82rem;
          font-weight: 900;
          color: var(--ff-crimson);
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .title-main-text {
          font-family: 'Black Ops One', cursive;
          font-size: clamp(3.2rem, 5.5vw, 5.2rem);
          color: var(--ff-pitch-black);
          line-height: 0.95;
          margin: 0 0 35px 0;
          letter-spacing: 1px;
        }

        /* Warning stripe bar inspired by the grid blocks in poster */
        .hazard-bar {
          height: 6px;
          background: repeating-linear-gradient(
            -45deg,
            var(--ff-crimson),
            var(--ff-crimson) 8px,
            #fff 8px,
            #fff 16px
          );
          margin-bottom: 30px;
        }

        /* Tabs Menu */
        .lobby-tabs-menu {
          display: flex;
          gap: 8px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }
        .lobby-tab-item {
          background: var(--ff-pitch-black);
          border: 1px solid var(--ff-pitch-black);
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 2px;
          padding: 14px 24px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 2px;
        }
        .lobby-tab-item:hover {
          background: #1B1B1D;
          border-color: #1B1B1D;
        }
        .lobby-tab-item.active {
          background: var(--ff-crimson);
          border-color: var(--ff-crimson);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--ff-crimson-glow);
        }

        /* Glassmorphic/Light Detail Panel */
        .lobby-detail-panel {
          background: #fff;
          border: 2px solid var(--ff-pitch-black);
          box-shadow: 10px 10px 0 rgba(11, 11, 12, 0.08);
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 380px;
          margin-bottom: 30px;
        }
        .panel-header-title {
          padding: 16px 25px;
          background: var(--ff-pitch-black);
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
        }
        .panel-scroll {
          padding: 30px;
          flex: 1;
        }
        
        .tactical-description {
          font-size: 1.08rem;
          line-height: 1.7;
          color: var(--ff-text-dark);
          margin-bottom: 35px;
          border-left: 3px solid var(--ff-crimson);
          padding-left: 18px;
        }
        .tactical-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
        }
        .tactical-stat-box {
          background: var(--ff-off-white);
          border: 1px solid var(--ff-border-gray);
          padding: 18px 20px;
          position: relative;
        }
        .tactical-stat-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 5px; height: 5px;
          background: var(--ff-crimson);
        }
        .tactical-stat-label {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.7rem;
          color: var(--ff-text-muted);
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .tactical-stat-value {
          font-family: 'Black Ops One', cursive;
          font-size: 1.65rem;
          color: var(--ff-text-dark);
          margin-top: 6px;
          letter-spacing: 1px;
        }

        /* Prizes tab */
        .loot-grid-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 640px) {
          .loot-grid-box {
            grid-template-columns: 1fr;
          }
        }
        .loot-card-item {
          background: var(--ff-off-white);
          border: 1px solid var(--ff-border-gray);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          transition: all 0.25s;
        }
        .loot-card-item.first-place {
          border-left: 3px solid var(--ff-crimson);
        }
        .loot-card-item.second-place {
          border-left: 3px solid rgba(11, 11, 12, 0.4);
        }
        .loot-card-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .loot-title-tag {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--ff-text-muted);
          margin-top: 12px;
          text-transform: uppercase;
        }
        .loot-card-item.first-place .loot-title-tag {
          color: var(--ff-crimson);
        }
        .loot-amount-val {
          font-family: 'Black Ops One', cursive;
          font-size: 2.5rem;
          color: var(--ff-text-dark);
          margin-top: 8px;
          letter-spacing: 1px;
        }

        /* Rules tab */
        .directives-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .directive-item-box {
          display: flex;
          align-items: flex-start;
          background: var(--ff-off-white);
          border: 1px solid var(--ff-border-gray);
          padding: 14px 18px;
        }
        .directive-label-num {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 0.85rem;
          color: #fff;
          background: var(--ff-pitch-black);
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 18px;
          flex-shrink: 0;
        }
        .directive-details-text {
          font-size: 1.02rem;
          line-height: 1.45;
          color: var(--ff-text-dark);
          padding-top: 1px;
        }

        /* Footer Registration Bar */
        .lobby-register-bar {
          border-top: 1px solid var(--ff-border-gray);
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        @media (max-width: 640px) {
          .lobby-register-bar {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }
        }
        .lobby-back-link {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--ff-text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
        }
        .lobby-back-link:hover {
          color: var(--ff-pitch-black);
        }

        .deploy-button {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 1rem;
          letter-spacing: 2px;
          color: #fff;
          background: var(--ff-crimson);
          border: none;
          padding: 14px 30px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 15px var(--ff-crimson-glow);
          border-radius: 2px;
        }
        .deploy-button:hover {
          background: var(--ff-pitch-black);
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        /* 2. RIGHT SIDE: THE ACTION CARD SHOWCASE */
        .poster-right {
          position: relative;
          z-index: 5;
        }
        .showcase-card {
          position: relative;
          height: 650px;
          background: #000;
          border: 4px solid var(--ff-pitch-black);
          box-shadow: 15px 15px 0 var(--ff-border-gray);
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .showcase-card {
            height: 380px;
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
          }
        }
        .showcase-rotated-img {
          position: absolute;
          inset: 0;
          background-image: url('/bg/freefire.jpg');
          background-size: cover;
          background-position: center top;
          /* Replaced greyscale with full-color Free Fire action visual */
          filter: contrast(1.15) saturate(1.1) brightness(0.9);
          pointer-events: none;
        }
        .showcase-red-strip {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 45px;
          background: var(--ff-crimson);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }
        .showcase-strip-text {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.65rem;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 4px;
          transform: rotate(90deg);
          white-space: nowrap;
        }
      `}</style>

      {/* TACTICAL LOADING SCREEN */}
      <div className={`tactical-loader ${!loading ? 'hidden' : ''}`}>
        <div className="loader-progressbar">
          <div className="loader-progressfill" />
        </div>
      </div>

      <div className="poster-wrapper">
        {/* Topographic outline elements & Watermark */}
        <TopoLines />
        <div className="giant-typography">RANABHOOMI</div>

        {/* TOP NAVIGATION BAR */}
        <nav className="poster-nav">
          <div className="nav-logo-box">
            <div className="nav-logo-marker" />
            <span className="nav-logo-text">AIKYAM 2K26</span>
          </div>
          <div className="nav-status">
            <span>CLOCK: {currentTime || "00:00:00"}</span>
            <div className="status-pulse-badge">
              <span className="status-pulse-dot" />
              <span>ACTIVE REPORT</span>
            </div>
          </div>
        </nav>

        {/* MAIN SPLIT GRID */}
        <div className="poster-container">
          
          {/* LEFT SIDE: BRIEFING AND ACTIONS */}
          <section className="poster-left">
            <span className="tagline-strip">{ev.eventName} SECTOR COMMAND</span>
            <h1 className="title-main-text">{ev.name}</h1>

            <div className="hazard-bar" />

            {/* TAB SELECT MENU */}
            <nav className="lobby-tabs-menu">
              <button 
                className={`lobby-tab-item ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
              >
                <ClipboardIcon />
                <span>Mission dossier</span>
              </button>
              <button 
                className={`lobby-tab-item ${activeTab === 'loot' ? 'active' : ''}`}
                onClick={() => setActiveTab('loot')}
              >
                <CrateIcon />
                <span>Supply drop</span>
              </button>
              <button 
                className={`lobby-tab-item ${activeTab === 'rules' ? 'active' : ''}`}
                onClick={() => setActiveTab('rules')}
              >
                <ShieldIcon />
                <span>Directives</span>
              </button>
            </nav>

            {/* DETAIL SCREEN MODULE */}
            <div className="lobby-detail-panel">
              <div className="panel-header-title">
                <WarningIcon />
                <span>
                  {activeTab === 'mission' && 'SYS_STATUS // BRIEFING REPORT'}
                  {activeTab === 'loot' && 'SYS_STATUS // SUPPLY LIST'}
                  {activeTab === 'rules' && 'SYS_STATUS // OPERATIONAL LAWS'}
                </span>
              </div>

              <div className="panel-scroll">
                {activeTab === 'mission' && (
                  <>
                    <div className="tactical-description">
                      {ev.description}
                    </div>
                    <div className="tactical-stats-grid">
                      <div className="tactical-stat-box">
                        <div className="tactical-stat-label">SQUAD LIMIT</div>
                        <div className="tactical-stat-value">{ev.teamSize || "4 Members"}</div>
                      </div>
                      <div className="tactical-stat-box">
                        <div className="tactical-stat-label">TIME CONSTRAINT</div>
                        <div className="tactical-stat-value">{ev.duration || "Half-Day"}</div>
                      </div>
                      <div className="tactical-stat-box">
                        <div className="tactical-stat-label">STAGE MATCHES</div>
                        <div className="tactical-stat-value">3 STAGES</div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'loot' && (
                  <div className="loot-grid-box">
                    <div className="loot-card-item first-place">
                      <TrophyIcon />
                      <div className="loot-title-tag">1st prize bounty</div>
                      <div className="loot-amount-val">
                        {ev.prizes?.[0]?.includes(":") 
                          ? ev.prizes[0].split(":")[1].trim() 
                          : ev.prizes?.[0] || '₹3,000'}
                      </div>
                    </div>
                    
                    <div className="loot-card-item second-place">
                      <SilverTrophyIcon />
                      <div className="loot-title-tag">2nd prize bounty</div>
                      <div className="loot-amount-val">
                        {ev.prizes?.[1]?.includes(":") 
                          ? ev.prizes[1].split(":")[1].trim() 
                          : ev.prizes?.[1] || '₹2,000'}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'rules' && (
                  <div className="directives-list">
                    {ev.rules?.map((rule, idx) => (
                      <div className="directive-item-box" key={idx}>
                        <span className="directive-label-num">{String(idx + 1).padStart(2, '0')}</span>
                        <div className="directive-details-text">{rule}</div>
                      </div>
                    )) || (
                      <div className="directive-item-box">
                        <span className="directive-label-num">01</span>
                        <div className="directive-details-text">Operational guidelines apply. Emulator structures prohibited.</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* ACTION LINKS BAR */}
            <footer className="lobby-register-bar">
              <Link href="/events" className="lobby-back-link">
                <ArrowLeftIcon />
                <span>SECTOR LIST</span>
              </Link>
              
              <Link href={`/events/${ev.slug}/register`} className="deploy-button">
                <TargetIcon />
                <span>DEPLOY TO SECTOR</span>
              </Link>
            </footer>

          </section>

          {/* RIGHT SIDE: THE ACTION CARD SHOWCASE */}
          <section className="poster-right">
            <div className="showcase-card">
              <div className="showcase-rotated-img" />
              <div className="showcase-red-strip">
                <span className="showcase-strip-text">RANARANGA GAMING</span>
              </div>
            </div>
          </section>

        </div>

      </div>
    </>
  );
}
