"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EventsSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      id="events" 
      style={{ 
        position: "relative",
        padding: "12rem 0", 
        background: "#080808",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh"
      }}
    >
      {/* Background Interactive Gradient */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(201, 168, 76, 0.08) 0%, transparent 40%)`,
          transition: "background 0.2s ease-out",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      {/* Grid Pattern */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
          transform: "perspective(1000px) rotateX(60deg) scale(2.5) translateY(-20%)",
          transformOrigin: "top center",
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 2rem" }}>
        <p 
          style={{ 
            fontSize: "0.8rem", 
            letterSpacing: "0.4em", 
            textTransform: "uppercase", 
            color: "#C9A84C", 
            marginBottom: "1.5rem",
            fontWeight: 700,
            textShadow: "0 0 20px rgba(201, 168, 76, 0.5)"
          }}
        >
          AIKYAM 2K26 Events
        </p>
        
        <h2 
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontWeight: 900, 
            fontSize: "clamp(3rem, 8vw, 6rem)", 
            letterSpacing: "-0.03em", 
            lineHeight: 1,
            color: "#ffffff",
            marginBottom: "3rem",
            textShadow: "0 20px 40px rgba(0,0,0,0.5)"
          }}
        >
          WHERE LEGENDS<br />
          <span 
            style={{ 
              color: "transparent",
              WebkitTextStroke: "2px #C9A84C",
              backgroundImage: "linear-gradient(45deg, #C9A84C, #E8C96A, #C9A84C)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              filter: isHovered ? "drop-shadow(0 0 30px rgba(201, 168, 76, 0.4))" : "none",
              transition: "all 0.5s ease"
            }}
          >
            ARE MADE
          </span>
        </h2>

        {/* Creative Navigation Button */}
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Animated rings around the button */}
          <div className="pulse-ring ring-1" style={{ position: "absolute", inset: -20, border: "1px solid rgba(201, 168, 76, 0.3)", borderRadius: "100px", animation: "pulseRing 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
          <div className="pulse-ring ring-2" style={{ position: "absolute", inset: -40, border: "1px solid rgba(201, 168, 76, 0.1)", borderRadius: "100px", animation: "pulseRing 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s" }} />

          <Link
            href="/events"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              background: isHovered ? "linear-gradient(135deg, #C9A84C 0%, #E8C96A 100%)" : "rgba(201, 168, 76, 0.1)",
              border: `1px solid ${isHovered ? "transparent" : "#C9A84C"}`,
              color: isHovered ? "#000" : "#C9A84C",
              padding: "1.2rem 3rem",
              borderRadius: "100px",
              fontSize: "1rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              boxShadow: isHovered ? "0 20px 40px rgba(201, 168, 76, 0.4), inset 0 0 0 2px rgba(255, 255, 255, 0.2)" : "0 0 20px rgba(201, 168, 76, 0)",
              transform: isHovered ? "translateY(-5px) scale(1.05)" : "translateY(0) scale(1)",
              overflow: "hidden",
              zIndex: 2
            }}
          >
            {/* Button Shine Effect */}
            <div 
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "50%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                transform: "skewX(-20deg)",
                animation: isHovered ? "shine 1.5s infinite" : "none",
              }}
            />
            
            <span>Discover Events</span>
            <div 
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2.5rem",
                height: "2.5rem",
                background: isHovered ? "#000" : "#C9A84C",
                color: isHovered ? "#C9A84C" : "#000",
                borderRadius: "50%",
                transition: "all 0.4s ease",
                transform: isHovered ? "rotate(45deg)" : "rotate(0deg)"
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </section>
  );
}

