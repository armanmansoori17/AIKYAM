"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { events } from "@/lib/events-data";

export default function KurukshetraPage() {
  const [loading, setLoading] = useState(true);
  const ev = events.find((e) => e.slug === "kurukshetra");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!ev) return <div>Event not found</div>;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap');

        :root {
          --bgmi-yellow: #F2A900;
          --bgmi-black: #000000;
          --bgmi-gray: #1a1a1a;
          --bgmi-text: #ffffff;
        }

        .official-site {
          background-color: var(--bgmi-black);
          color: var(--bgmi-text);
          font-family: 'Open Sans', sans-serif;
          min-height: 100vh;
        }

        /* Loading Screen */
        .site-loader {
          position: fixed;
          inset: 0;
          background: #000;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s ease;
        }
        .site-loader.hidden {
          opacity: 0;
          pointer-events: none;
        }
        .loader-logo {
          font-family: 'Teko', sans-serif;
          font-size: 5rem;
          color: #fff;
          font-weight: 700;
          letter-spacing: 2px;
          position: relative;
        }
        .loader-logo::after {
          content: 'INDIA';
          position: absolute;
          bottom: -15px;
          right: 0;
          font-size: 2rem;
          color: var(--bgmi-yellow);
        }

        /* Navbar */
        .bgmi-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          z-index: 1000;
          border-bottom: 2px solid #222;
        }
        .nav-logo {
          font-family: 'Teko', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          color: #fff;
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }
        .nav-logo span {
          font-size: 1rem;
          color: var(--bgmi-yellow);
          letter-spacing: 4px;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: #ccc;
          text-decoration: none;
          font-family: 'Teko', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--bgmi-yellow);
        }

        .download-btn {
          background: var(--bgmi-yellow);
          color: #000;
          font-family: 'Teko', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          padding: 5px 30px;
          text-decoration: none;
          text-transform: uppercase;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          transition: transform 0.2s;
        }
        .download-btn:hover {
          transform: scale(1.05);
        }

        /* Hero Section */
        .hero-banner {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('/bg/bgmi.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%),
                      linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 30%);
        }
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 1000px;
          padding-top: 80px;
        }
        .hero-subtitle {
          font-family: 'Teko', sans-serif;
          font-size: 2.5rem;
          color: var(--bgmi-yellow);
          margin-bottom: -15px;
          letter-spacing: 5px;
        }
        .hero-title {
          font-family: 'Teko', sans-serif;
          font-size: clamp(5rem, 12vw, 10rem);
          line-height: 0.9;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          text-shadow: 0 10px 30px rgba(0,0,0,0.8);
          margin: 0;
        }
        
        /* Yellow Banner */
        .yellow-banner {
          background: var(--bgmi-yellow);
          padding: 15px 0;
          text-align: center;
          overflow: hidden;
          position: relative;
        }
        .yellow-banner-text {
          font-family: 'Teko', sans-serif;
          font-size: 2.2rem;
          color: #000;
          font-weight: 700;
          letter-spacing: 3px;
          margin: 0;
          text-transform: uppercase;
        }

        /* News / Info Section */
        .info-section {
          padding: 80px 5%;
          background: var(--bgmi-black);
        }
        .section-title {
          font-family: 'Teko', sans-serif;
          font-size: 4rem;
          color: #fff;
          margin-bottom: 40px;
          text-transform: uppercase;
          text-align: center;
          position: relative;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: var(--bgmi-yellow);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bgmi-card {
          background: var(--bgmi-gray);
          overflow: hidden;
          transition: transform 0.3s;
          border-bottom: 4px solid transparent;
        }
        .bgmi-card:hover {
          transform: translateY(-10px);
          border-bottom: 4px solid var(--bgmi-yellow);
        }
        .card-image-placeholder {
          height: 200px;
          background: #2a2a2a;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .card-image-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .bgmi-card:hover .card-image-placeholder img {
          opacity: 0.8;
        }
        .card-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: var(--bgmi-yellow);
          color: #000;
          font-family: 'Teko', sans-serif;
          font-size: 1.2rem;
          padding: 2px 15px;
          font-weight: 700;
        }
        .card-content {
          padding: 25px;
        }
        .card-title {
          font-family: 'Teko', sans-serif;
          font-size: 2rem;
          line-height: 1.1;
          margin: 0 0 15px 0;
          color: #fff;
          text-transform: uppercase;
        }
        .card-text {
          font-size: 0.95rem;
          color: #aaa;
          line-height: 1.6;
        }

        /* Rules List in Card */
        .rules-ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .rules-ul li {
          font-size: 0.9rem;
          color: #ccc;
          margin-bottom: 8px;
          padding-left: 15px;
          position: relative;
        }
        .rules-ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          background: var(--bgmi-yellow);
        }
      `}</style>

      {/* LOADER */}
      <div className={`site-loader ${!loading ? 'hidden' : ''}`}>
        <div className="loader-logo">BATTLEGROUNDS</div>
      </div>

      <div className="official-site">
        {/* NAVBAR */}
        <nav className="bgmi-navbar">
          <Link href="/" className="nav-logo">
            BATTLEGROUNDS
            <span>MOBILE INDIA</span>
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
          </div>
          <Link href="#" className="download-btn">REGISTER NOW</Link>
        </nav>

        {/* HERO BANNER */}
        <header className="hero-banner">
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-subtitle">INDIA KA BATTLEGROUNDS</div>
            <h1 className="hero-title">{ev.name}</h1>
            <p style={{ fontSize: '1.2rem', color: '#ddd', marginTop: '20px', maxWidth: '800px', margin: '20px auto 0' }}>
              {ev.description}
            </p>
          </div>
        </header>

        {/* SCROLLING YELLOW BANNER */}
        <div className="yellow-banner">
          <p className="yellow-banner-text">
            ⚠️ SQUAD UP. DROP IN. SURVIVE. - THE ULTIMATE KURUKSHETRA TOURNAMENT ⚠️
          </p>
        </div>

        {/* LATEST INTEL (NEWS GRID STYLE) */}
        <section className="info-section">
          <h2 className="section-title">LATEST INTEL</h2>
          
          <div className="cards-grid">
            
            {/* Format Card */}
            <div className="bgmi-card">
              <div className="card-image-placeholder">
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, #111, #333)' }} />
                <span className="card-tag">FORMAT</span>
                <div style={{ position: 'relative', zIndex: 1, fontFamily: 'Teko', fontSize: '6rem', color: 'rgba(255,255,255,0.05)' }}>SQUAD</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">TOURNAMENT FORMAT</h3>
                <p className="card-text">
                  Squad up with 4 players. Survive the intense battle royale elimination rounds. The ultimate test of teamwork and strategy.
                </p>
                <div style={{ marginTop: '15px', color: '#F2A900', fontFamily: 'Teko', fontSize: '1.5rem', letterSpacing: '1px' }}>
                  TEAM SIZE: {ev.teamSize}
                </div>
              </div>
            </div>

            {/* Prize Pool Card */}
            <div className="bgmi-card">
              <div className="card-image-placeholder">
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, #332200, #111)' }} />
                <span className="card-tag">REWARDS</span>
                <div style={{ position: 'relative', zIndex: 1, fontFamily: 'Teko', fontSize: '6rem', color: 'rgba(242,169,0,0.08)' }}>PRIZE</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">MASSIVE PRIZE POOL</h3>
                <p className="card-text">
                  Dominate the battleground and claim the top spot. Only the best squads walk away with the rewards.
                </p>
                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column' }}>
                  {ev.prizes?.map((prize, idx) => (
                    <span key={idx} style={{ color: idx === 0 ? '#F2A900' : '#ccc', fontFamily: 'Teko', fontSize: '1.5rem', letterSpacing: '1px' }}>
                      {prize}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Rules Card */}
            <div className="bgmi-card">
              <div className="card-image-placeholder">
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, #111, #222)' }} />
                <span className="card-tag">RULES</span>
                <div style={{ position: 'relative', zIndex: 1, fontFamily: 'Teko', fontSize: '6rem', color: 'rgba(255,255,255,0.05)' }}>INFO</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">RULES OF ENGAGEMENT</h3>
                <ul className="rules-ul">
                  {ev.rules?.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: '#0a0a0a', padding: '40px 5%', textAlign: 'center', borderTop: '1px solid #222' }}>
          <div style={{ fontFamily: 'Teko', fontSize: '2.5rem', color: '#555', lineHeight: 1 }}>
            BATTLEGROUNDS
            <span style={{ display: 'block', fontSize: '1rem', letterSpacing: '2px' }}>MOBILE INDIA</span>
          </div>
          <p style={{ color: '#555', fontSize: '0.8rem', marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
            © 2026 KRAFTON, Inc. All rights reserved. <br/>
            This is a promotional page for the AIKYAM Tech Event. Not affiliated with Krafton.
          </p>
        </footer>
      </div>
    </>
  );
}
