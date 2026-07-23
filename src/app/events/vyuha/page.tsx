"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { events } from "@/lib/events-data";

export default function VyuhaPage() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("lobby");
  const [isScrolled, setIsScrolled] = useState(false);
  const ev = events.find((e) => e.slug === "vyuha");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle background dimming overlay on scroll
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["lobby", "details", "format", "rules", "bounty"];
      const scrollPosition = window.scrollY + 150; // offset for sticky nav
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (section === "details") {
              setActiveSection("lobby");
            } else {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!ev) return <div style={{ color: "#fff", padding: "100px", textAlign: "center" }}>Event not found</div>;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;600;700&family=Oswald:wght@400;500;600;700&family=Share+Tech+Mono&family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400;1,700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        :root {
          --val-red: #FF4655;
          --val-dark: #0F1722;
          --val-black: #080C12;
          --val-cream: #ECE8E1;
          --val-gray: #1F2326;
          --val-blue: #00F0FF;
          --val-border: rgba(255, 70, 85, 0.35);
        }

        .val-world {
          background-color: var(--val-black);
          color: var(--val-cream);
          font-family: 'Barlow Condensed', sans-serif;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          position: relative;
        }

        /* Glitch Loader Screen */
        .val-loader {
          position: fixed;
          inset: 0;
          background: #080C12;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .val-loader.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .loader-glitch-text {
          font-family: 'Oswald', sans-serif;
          font-size: 5rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 12px;
          text-transform: uppercase;
          position: relative;
          animation: val-glitch 1s infinite alternate;
        }
        .loader-glitch-text::before,
        .loader-glitch-text::after {
          content: 'VALORANT';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #080C12;
        }
        .loader-glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 var(--val-red);
          clip: rect(44px, 450px, 56px, 0);
          animation: val-glitch-anim 5s infinite linear alternate-reverse;
        }
        .loader-glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 var(--val-blue);
          clip: rect(85px, 450px, 140px, 0);
          animation: val-glitch-anim2 5s infinite linear alternate-reverse;
        }

        .loader-status {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          color: var(--val-red);
          letter-spacing: 4px;
          margin-top: 20px;
          text-transform: uppercase;
          animation: blink 0.8s infinite;
        }

        @keyframes val-glitch {
          0% { text-shadow: 1px 1px 0 var(--val-red), -1px -1px 0 var(--val-blue); }
          100% { text-shadow: -1px 1px 0 var(--val-red), 1px -1px 0 var(--val-blue); }
        }
        @keyframes val-glitch-anim {
          0% { clip: rect(15px, 9999px, 66px, 0); }
          100% { clip: rect(34px, 9999px, 55px, 0); }
        }
        @keyframes val-glitch-anim2 {
          0% { clip: rect(70px, 9999px, 105px, 0); }
          100% { clip: rect(12px, 9999px, 85px, 0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Fixed Background Image with overlays */
        .val-bg-wallpaper {
          position: fixed;
          inset: 0;
          background-image: url('/vyuha-wallpaper.jpg');
          background-size: cover;
          background-position: right center;
          z-index: 0;
          pointer-events: none;
          transition: background-position 0.3s ease;
        }
        @media (max-width: 991px) {
          .val-bg-wallpaper {
            background-position: 70% center;
          }
        }
        .lobby-left-side {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .val-bg-overlay {
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(circle at 70% 30%, rgba(15, 23, 34, 0.3) 0%, rgba(8, 12, 18, 0.95) 75%),
            linear-gradient(180deg, rgba(8, 12, 18, 0.5) 0%, rgba(8, 12, 18, 0.9) 100%);
          z-index: 1;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .val-bg-overlay.scrolled {
          opacity: 0.85;
        }

        /* Page Layout Grid */
        .val-layout {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Navbar Styling */
        .val-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4%;
          height: 90px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(8, 12, 18, 0.95);
          backdrop-filter: blur(12px);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }
        .val-nav-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .val-back-btn {
          font-family: 'Share Tech Mono', monospace;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.85rem;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
          text-transform: uppercase;
        }
        .val-back-btn:hover {
          color: var(--val-red);
        }

        /* Center Navigation Links */
        .val-tabs {
          display: flex;
          height: 100%;
          align-items: stretch;
        }
        .val-tab-item {
          font-family: 'Oswald', sans-serif;
          font-size: 1.15rem;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(236, 232, 225, 0.4);
          background: transparent;
          border: none;
          padding: 0 35px;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          transition: color 0.3s;
          height: 90px;
          text-decoration: none;
        }
        .val-tab-item:hover {
          color: var(--val-cream);
        }
        .val-tab-item::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--val-red);
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 0 10px var(--val-red);
        }
        .val-tab-item.active {
          color: #fff;
        }
        .val-tab-item.active::after {
          transform: scaleX(1);
        }

        /* Right CTA (LOCK IN) */
        .val-lockin-btn {
          background: var(--val-red);
          color: #000;
          font-family: 'Oswald', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 32px;
          clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px);
          transition: all 0.3s ease;
          display: inline-block;
          border: 1px solid transparent;
          box-shadow: 0 0 15px rgba(255, 70, 85, 0.4);
        }
        .val-lockin-btn:hover {
          background: #fff;
          color: var(--val-red);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
          transform: scale(1.03);
        }

        /* Main Container */
        .val-container {
          flex: 1;
          padding: 150px 4% 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }

        .val-window {
          width: 100%;
          max-width: 1200px;
          background: rgba(15, 23, 34, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 4px solid var(--val-red);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
          display: grid;
          grid-template-columns: 1fr;
          position: relative;
          overflow: hidden;
          scroll-margin-top: 110px; /* Offset for sticky nav */
        }

        /* UI Corner Accents */
        .val-corners::before,
        .val-corners::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-color: rgba(255, 255, 255, 0.3);
          border-style: solid;
          pointer-events: none;
        }
        .val-corners::before {
          top: 10px;
          right: 10px;
          border-width: 1px 1px 0 0;
        }
        .val-corners::after {
          bottom: 10px;
          right: 10px;
          border-width: 0 1px 1px 0;
        }

        /* Header in HUD */
        .hud-header {
          padding: 30px 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        .hud-header::after {
          content: 'PROTOCOL // VYUHA';
          position: absolute;
          right: 40px;
          bottom: 8px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.25);
          letter-spacing: 2px;
        }
        .hud-title-wrap {
          display: flex;
          flex-direction: column;
        }
        .hud-tag {
          font-family: 'Share Tech Mono', monospace;
          color: var(--val-red);
          font-size: 0.8rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .hud-title {
          font-family: 'Oswald', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
          line-height: 1;
        }
        .hud-subtitle {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: 5px;
        }

        .hud-body {
          padding: 40px;
        }

        /* Lobby Tab Styling */
        .lobby-hero {
          width: 100%;
          max-width: 1200px;
          height: calc(100vh - 90px);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 80px;
          position: relative;
          scroll-margin-top: 90px;
        }
        @media (max-width: 991px) {
          .lobby-hero {
            justify-content: center;
            padding-top: 0;
          }
        }
        .scroll-hint-container {
          position: absolute;
          bottom: 40px;
          left: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: float-hint 2s ease-in-out infinite;
        }
        .scroll-hint-text {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: rgba(15, 23, 34, 0.6);
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .scroll-hint-line {
          width: 40px;
          height: 1px;
          background: var(--val-red);
          box-shadow: 0 0 8px var(--val-red);
        }
        @keyframes float-hint {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
        .hero-header-floating {
          margin-bottom: 35px;
          position: relative;
        }
        @media (min-width: 992px) {
          .hero-header-floating {
            left: -140px;
            top: -40px;
          }
        }
        .hero-tag-floating {
          font-family: 'Share Tech Mono', monospace;
          color: var(--val-red);
          font-size: 0.85rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }
        .hero-title-floating {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(3.5rem, 7vw, 5.5rem);
          font-weight: 700;
          color: #bd0b21;
          letter-spacing: 3px;
          text-transform: uppercase;
          line-height: 1;
          margin: 0;
          text-shadow: 2px 2px 8px rgba(15, 23, 34, 0.25);
        }
        .hero-subtitle-floating {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.2rem;
          color: #1F2326;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 6px;
        }
        .lobby-content-floating {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 991px) {
          .lobby-content-floating {
            grid-template-columns: 1fr;
          }
        }
        .hero-desc-card {
          background: rgba(15, 23, 34, 0.55);
          border-left: 4px solid var(--val-red);
          padding: 35px 40px;
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
        }
        .val-tagline {
          font-family: 'Oswald', sans-serif;
          font-size: 1.65rem;
          font-weight: 500;
          color: var(--val-red);
          letter-spacing: 1px;
          line-height: 1.3;
          margin-bottom: 15px;
          text-transform: uppercase;
        }
        .val-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(236, 232, 225, 0.75);
          margin: 0;
        }
        .lobby-stats-grid-floating {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .stat-card-floating {
          background: rgba(15, 23, 34, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 20px 25px;
          backdrop-filter: blur(10px);
          border-left: 3px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }
        .stat-card-floating:hover {
          border-left-color: var(--val-red);
          background: rgba(255, 70, 85, 0.05);
        }
        .stat-card-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }
        .stat-card-val {
          font-family: 'Oswald', sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Format Tab Styling (Brackets) */
        .format-timeline {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .timeline-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 30px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
          transition: all 0.3s ease;
        }
        .timeline-card:hover {
          border-color: var(--val-red);
          background: rgba(255, 70, 85, 0.02);
        }
        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .timeline-num {
          font-family: 'Share Tech Mono', monospace;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          color: rgba(255, 70, 85, 0.25);
          transition: color 0.3s;
        }
        .timeline-card:hover .timeline-num {
          color: var(--val-red);
        }
        .timeline-badge {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.7rem;
          color: var(--val-blue);
          border: 1px solid var(--val-blue);
          padding: 2px 8px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .timeline-title {
          font-family: 'Oswald', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }
        .timeline-desc {
          font-size: 0.95rem;
          color: rgba(236, 232, 225, 0.6);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .timeline-footer {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: var(--val-cream);
          opacity: 0.5;
          letter-spacing: 1px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 15px;
          margin-top: auto;
        }

        /* Rules & Intel Tab Styling */
        .rules-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }
        .rules-column {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .rules-item {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          transition: all 0.3s ease;
        }
        .rules-item:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .rule-index {
          font-family: 'Share Tech Mono', monospace;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--val-red);
          background: rgba(255, 70, 85, 0.15);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          clip-path: polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px);
        }
        .rule-text {
          font-size: 1rem;
          color: rgba(236, 232, 225, 0.75);
          line-height: 1.6;
        }

        /* Map Pool Section */
        .map-section-title {
          font-family: 'Oswald', sans-serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .map-section-title::after {
          content: '';
          height: 1px;
          flex: 1;
          background: rgba(255, 255, 255, 0.08);
        }
        .maps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        .map-card {
          height: 120px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          background: #111;
          cursor: crosshair;
        }
        .map-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.35;
          transition: all 0.5s ease;
        }
        .map-card:hover .map-card-bg {
          opacity: 0.65;
          transform: scale(1.08);
        }
        .map-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8, 12, 18, 0.9) 0%, transparent 80%);
          z-index: 1;
        }
        .map-info {
          position: relative;
          z-index: 2;
          padding: 15px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .map-coords {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.65rem;
          color: var(--val-blue);
          letter-spacing: 1px;
          margin-bottom: 2px;
        }
        .map-name {
          font-family: 'Oswald', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.1;
        }

        /* Bounty (Prizes) Tab Styling */
        .bounty-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .bounty-item {
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 25px 40px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }
        .bounty-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
        }
        .bounty-gold {
          border-color: rgba(242, 169, 0, 0.2);
          background: linear-gradient(90deg, rgba(242, 169, 0, 0.03) 0%, transparent 100%);
        }
        .bounty-gold::before {
          background: #F2A900;
          box-shadow: 0 0 10px #F2A900;
        }
        .bounty-silver {
          border-color: rgba(200, 200, 200, 0.2);
          background: linear-gradient(90deg, rgba(200, 200, 200, 0.03) 0%, transparent 100%);
        }
        .bounty-silver::before {
          background: #c8c8c8;
          box-shadow: 0 0 10px #c8c8c8;
        }
        .bounty-badge {
          font-size: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.02);
          clip-path: polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .bounty-details {
          flex: 1;
        }
        .bounty-rank {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .bounty-name {
          font-family: 'Oswald', sans-serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .bounty-reward {
          font-family: 'Oswald', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          letter-spacing: 1px;
        }
        .bounty-reward-val {
          color: var(--val-red);
        }
        .bounty-gold .bounty-reward-val {
          color: #F2A900;
        }
        .bounty-silver .bounty-reward-val {
          color: #c8c8c8;
        }

        /* Lock In Bottom Bar Banner */
        .bottom-cta-banner {
          width: 100%;
          max-width: 1200px;
          background: linear-gradient(135deg, rgba(255, 70, 85, 0.15) 0%, rgba(15, 23, 34, 0.95) 100%);
          border: 1px solid rgba(255, 70, 85, 0.35);
          border-left: 4px solid var(--val-red);
          padding: 40px;
          text-align: center;
          position: relative;
          backdrop-filter: blur(16px);
        }

        /* Footer Strip */
        .val-footer {
          background: rgba(8, 12, 18, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 30px 4%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 10;
        }
        .val-footer-left {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .val-footer-logo {
          font-family: 'Oswald', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          line-height: 1;
        }
        .val-footer-logo span {
          color: var(--val-red);
        }
        .val-footer-desc {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.5px;
        }
        .val-footer-credits {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.25);
          letter-spacing: 1px;
          text-align: right;
          max-width: 450px;
          line-height: 1.5;
        }

        /* Responsiveness */
        @media (max-width: 991px) {
          .val-navbar {
            flex-direction: column;
            height: auto;
            padding: 20px 4%;
            gap: 15px;
          }
          .val-tabs {
            width: 100%;
            justify-content: center;
          }
          .val-tab-item {
            height: 50px;
            padding: 0 15px;
            font-size: 0.95rem;
          }
          .lobby-grid, .rules-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .lobby-agent-sidebar {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 30px;
          }
          .format-timeline {
            grid-template-columns: 1fr;
          }
          .val-footer {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .val-footer-credits {
            text-align: center;
          }
        }
      `}</style>

      {/* LOADER */}
      <div className={`val-loader ${!loading ? 'hidden' : ''}`}>
        <div className="loader-glitch-text">VALORANT</div>
        <div className="loader-status">INITIALIZING VYUHA PROTOCOL...</div>
      </div>

      <div className="val-world">
        {/* BACKGROUND WALLPAPER & EFFECTS */}
        <div className="val-bg-wallpaper" />
        <div className={`val-bg-overlay ${isScrolled ? 'scrolled' : ''}`} />

        <div className="val-layout">
          {/* NAVBAR */}
          <nav className="val-navbar">
            <div className="val-nav-left">
              <Link href="/events" className="val-back-btn">
                ◀ ABORT AGENT SELECT
              </Link>
            </div>

            <div className="val-tabs">
              <Link href="/" className="val-tab-item">
                Home
              </Link>
              <Link href="/events" className="val-tab-item active">
                Event
              </Link>
            </div>

            <div className="val-nav-right">
              <Link href={`/events/${ev.slug}/register`} className="val-lockin-btn">
                REGISTER NOW
              </Link>
            </div>
          </nav>

          {/* MAIN CONTAINER */}
          <div className="val-container">
            
            {/* LOBBY / OVERVIEW SECTION */}
            {/* LOBBY / OVERVIEW HERO SECTION */}
            <section id="lobby" className="lobby-hero">
              <div className="hero-header-floating">
                <span className="hero-tag-floating">MAP IN OPERATION</span>
                <h1 className="hero-title-floating">{ev.name}</h1>
                <h2 className="hero-subtitle-floating">{ev.eventName} Tournament</h2>
              </div>
              
              <div className="scroll-hint-container">
                <span className="scroll-hint-text">SCROLL TO EXPLORE</span>
                <div className="scroll-hint-line" />
              </div>
            </section>

            {/* EVENT DETAILS SECTION */}
            <section id="details" className="val-window val-corners" style={{ scrollMarginTop: '110px' }}>
              <div className="hud-header">
                <div className="hud-title-wrap">
                  <span className="hud-tag">MISSION BRIEFING</span>
                  <h1 className="hud-title">EVENT OVERVIEW</h1>
                  <h2 className="hud-subtitle">Tactical profiles and tournament telemetry</h2>
                </div>
              </div>
              <div className="hud-body">
                <div className="lobby-content-floating" style={{ gridTemplateColumns: '1fr' }}>
                  <div className="hero-desc-card" style={{ background: 'transparent', border: 'none', padding: 0, backdropFilter: 'none', clipPath: 'none', marginBottom: '35px' }}>
                    <div className="val-tagline">&ldquo;{ev.tagline}&rdquo;</div>
                    <p className="val-desc" style={{ fontSize: '1.1rem', color: 'rgba(236, 232, 225, 0.8)', lineHeight: '1.8' }}>{ev.description}</p>
                  </div>

                  <div className="lobby-stats-grid-floating" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                    <div className="stat-card-floating" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                      <div className="stat-card-label">TEAM PROFILE</div>
                      <div className="stat-card-val">{ev.teamSize}</div>
                    </div>
                    <div className="stat-card-floating" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                      <div className="stat-card-label">EVENT TIMELINE</div>
                      <div className="stat-card-val">{ev.duration}</div>
                    </div>
                    <div className="stat-card-floating" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                      <div className="stat-card-label">VENUE LOCATION</div>
                      <div className="stat-card-val">{ev.venue || "GRID ARENA"}</div>
                    </div>
                    <div className="stat-card-floating" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                      <div className="stat-card-label">ADMISSION</div>
                      <div className="stat-card-val">FREE ENTRY</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FORMAT / ROUNDS SECTION */}
            <section id="format" className="val-window val-corners">
              <div className="hud-header">
                <div className="hud-title-wrap">
                  <span className="hud-tag">STAGE PROGRESSION</span>
                  <h1 className="hud-title">TOURNAMENT FORMAT</h1>
                  <h2 className="hud-subtitle">Double Elimination Bracket</h2>
                </div>
              </div>
              <div className="hud-body">
                <div className="format-timeline">
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <span className="timeline-num">01</span>
                      <span className="timeline-badge" style={{ color: '#FFB800', borderColor: '#FFB800' }}>QUALIFIERS</span>
                    </div>
                    <div>
                      <h3 className="timeline-title">Agent Selection & Bans</h3>
                      <p className="timeline-desc">
                        Teams coordinate their bans and pick maps in a standard tournament ruleset. 2 agent bans per team.
                      </p>
                    </div>
                    <div className="timeline-footer">STAGE 1 // INITIAL DEPLOYMENT</div>
                  </div>

                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <span className="timeline-num">02</span>
                      <span className="timeline-badge">BRACKET STAGES</span>
                    </div>
                    <div>
                      <h3 className="timeline-title">Double Elimination</h3>
                      <p className="timeline-desc">
                        Lose a match, drop to the lower bracket. Win matches in lower bracket to fight your way back to the Grand Finals.
                      </p>
                    </div>
                    <div className="timeline-footer">STAGE 2 // INTENSE TACTICAL PLAY</div>
                  </div>

                  <div className="timeline-card" style={{ borderRightWidth: '1px', borderRightColor: 'rgba(255, 70, 85, 0.4)' }}>
                    <div className="timeline-card-header">
                      <span className="timeline-num">03</span>
                      <span className="timeline-badge" style={{ color: 'var(--val-red)', borderColor: 'var(--val-red)' }}>GRAND FINALE</span>
                    </div>
                    <div>
                      <h3 className="timeline-title">Championship Showdown</h3>
                      <p className="timeline-desc">
                        The ultimate battle where the top team from the upper bracket faces the survivor of the lower bracket for the Vyuha Cup.
                      </p>
                    </div>
                    <div className="timeline-footer">STAGE 3 // TITANS COLLIDE</div>
                  </div>
                </div>
              </div>
            </section>

            {/* RULES & INTEL SECTION */}
            <section id="rules" className="val-window val-corners">
              <div className="hud-header">
                <div className="hud-title-wrap">
                  <span className="hud-tag">TACTICAL INTEL</span>
                  <h1 className="hud-title">RULES OF ENGAGEMENT</h1>
                  <h2 className="hud-subtitle">Read carefully before launching operational sequence</h2>
                </div>
              </div>
              <div className="hud-body">
                <div className="rules-grid">
                  <div className="rules-column">
                    {ev.rules?.map((rule, idx) => (
                      <div key={idx} className="rules-item">
                        <span className="rule-index">{String(idx + 1).padStart(2, '0')}</span>
                        <div className="rule-text">{rule}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="map-section-title">Competitive Map Pool</h3>
                    <div className="maps-grid">
                      <div className="map-card">
                        <div className="map-card-bg" style={{ backgroundColor: '#2b3a4a' }} />
                        <div className="map-card-overlay" />
                        <div className="map-info">
                          <span className="map-coords">SEC_01 // HAVEN</span>
                          <span className="map-name">HAVEN</span>
                        </div>
                      </div>

                      <div className="map-card">
                        <div className="map-card-bg" style={{ backgroundColor: '#4a2b2b' }} />
                        <div className="map-card-overlay" />
                        <div className="map-info">
                          <span className="map-coords">SEC_02 // BIND</span>
                          <span className="map-name">BIND</span>
                        </div>
                      </div>

                      <div className="map-card">
                        <div className="map-card-bg" style={{ backgroundColor: '#2b4a2b' }} />
                        <div className="map-card-overlay" />
                        <div className="map-info">
                          <span className="map-coords">SEC_03 // SPLIT</span>
                          <span className="map-name">SPLIT</span>
                        </div>
                      </div>

                      <div className="map-card">
                        <div className="map-card-bg" style={{ backgroundColor: '#4a4a2b' }} />
                        <div className="map-card-overlay" />
                        <div className="map-info">
                          <span className="map-coords">SEC_04 // LOTUS</span>
                          <span className="map-name">LOTUS</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: '25px', padding: '20px', background: 'rgba(0, 240, 255, 0.03)', border: '1px solid rgba(0, 240, 255, 0.15)' }}>
                      <h4 style={{ fontFamily: 'Oswald, sans-serif', color: 'var(--val-blue)', margin: '0 0 5px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        MAP SELECTION PROTOCOL
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(236, 232, 225, 0.65)', lineHeight: '1.5' }}>
                        Teams will ban maps sequentially until 1 remains. The team with the lower seed bans first. Maps are hosted on local custom lobbies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BOUNTY SECTION */}
            <section id="bounty" className="val-window val-corners">
              <div className="hud-header">
                <div className="hud-title-wrap">
                  <span className="hud-tag">MISSION REWARDS</span>
                  <h1 className="hud-title">PRIZE POOL BOUNTY</h1>
                  <h2 className="hud-subtitle">Bounties awarded for ultimate tactical dominance</h2>
                </div>
              </div>
              <div className="hud-body">
                <div className="bounty-list">
                  <div className="bounty-item bounty-gold">
                    <div className="bounty-badge">🏆</div>
                    <div className="bounty-details">
                      <span className="bounty-rank">1ST PLACE CHAMPIONS</span>
                      <h3 className="bounty-name">VYUHA ULTIMATE VICTORY</h3>
                    </div>
                    <div className="bounty-reward">
                      <span className="bounty-reward-val">{ev.prizes?.[0]?.split(':')?.[1]?.trim() || "₹3,000"}</span>
                    </div>
                  </div>

                  <div className="bounty-item bounty-silver">
                    <div className="bounty-badge">🥈</div>
                    <div className="bounty-details">
                      <span className="bounty-rank">2ND PLACE RUNNER UP</span>
                      <h3 className="bounty-name">VYUHA VALIANT RUNNER</h3>
                    </div>
                    <div className="bounty-reward">
                      <span className="bounty-reward-val">{ev.prizes?.[1]?.split(':')?.[1]?.trim() || "₹2,000"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* LOCK IN BOTTOM CTA */}
            <section className="bottom-cta-banner val-corners">
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2.5rem', fontWeight: 700, margin: '0 0 10px 0', letterSpacing: '2px', textTransform: 'uppercase' }}>
                READY TO LOCK IN?
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(236, 232, 225, 0.65)', maxWidth: '600px', margin: '0 auto 30px' }}>
                Deploy your squad, prepare map strategies, and register to claim the Vyuha championship.
              </p>
              <Link href={`/events/${ev.slug}/register`} className="val-lockin-btn" style={{ fontSize: '1.3rem', padding: '12px 48px' }}>
                REGISTER NOW
              </Link>
            </section>

          </div>

          {/* FOOTER */}
          <footer className="val-footer">
            <div className="val-footer-left">
              <div className="val-footer-logo">AIK<span>YAM</span> 2K26</div>
              <div className="val-footer-desc">Where Ancient Intelligence Awakens the Digital Future.</div>
            </div>
            <div className="val-footer-credits">
              This is a promotional page for the VYUHA Valorant Tournament at AIKYAM 2K26.<br />
              All game logos, wallpapers, and maps are properties of Riot Games, Inc.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
