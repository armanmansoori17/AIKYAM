  "use client";
import { useState } from "react";
import Link from "next/link";
import { events, EventCategory, getCategoryColor, getCategoryLabel } from "@/lib/events-data";

const categories: { id: EventCategory | "all"; label: string }[] = [
  { id: "all", label: "ALL EVENTS" },
  { id: "tech", label: "TECH" },
  { id: "creative", label: "CREATIVE" },
  { id: "adventure", label: "ADVENTURE" },
  { id: "gaming", label: "RANARANGA" },
];

const gamingEvents = events.filter((e) => e.category === "gaming");
const nonGamingEvents = events.filter((e) => e.category !== "gaming");

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<EventCategory | "all">("all");
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const showRanranga = activeFilter === "all" || activeFilter === "gaming";
  const showGrid = activeFilter !== "gaming";

  const filtered =
    activeFilter === "all"
      ? nonGamingEvents
      : activeFilter === "gaming"
      ? []
      : events.filter((e) => e.category === activeFilter);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#fff",
        fontFamily: "'Outfit',sans-serif",
      }}
    >
      {/* ── Top Navbar ── */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "1.2rem 3rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "rgba(8,8,8,0.92)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        <Link
          href="/"
          style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          ← Home
        </Link>
        <Link
          href="/"
          style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.15em", color: "#C9A84C", textDecoration: "none" }}
        >
          AIK<span style={{ color: "#fff" }}>YAM</span>
        </Link>
        <a
          href="#"
          style={{ background: "#C9A84C", color: "#000", padding: "0.55rem 1.4rem", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}
        >
          Register
        </a>
      </div>

      {/* ── Page Hero ── */}
      <div
        style={{
          padding: "12rem 3rem 4rem",
          position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            fontWeight: 900, fontSize: "clamp(5rem,16vw,16rem)",
            color: "transparent", WebkitTextStroke: "1px rgba(201,168,76,0.05)",
            whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none",
            letterSpacing: "-0.02em",
          }}
        >
          EVENTS
        </div>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
          AIKYAM 2K26
        </p>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(3rem,8vw,7rem)", letterSpacing: "-0.03em", lineHeight: 0.95, position: "relative", zIndex: 1 }}>
          ALL<br /><span style={{ color: "#C9A84C" }}>EVENTS</span>
        </h1>
        <p style={{ marginTop: "1.5rem", color: "rgba(255,255,255,0.4)", fontSize: "1rem", maxWidth: 500, lineHeight: 1.7, position: "relative", zIndex: 1 }}>
          {events.length} events · Tech · Creative · Adventure · Gaming — each bearing a Sanskrit war name.
        </p>
      </div>

      {/* ── Filter pills ── */}
      <div className="filters-container" style={{ padding: "0 3rem 4rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {categories.map((cat) => {
          const isGaming = cat.id === "gaming";
          const color = isGaming ? "#FF6B35" : cat.id === "all" ? "#C9A84C" : getCategoryColor(cat.id as EventCategory);
          const active = activeFilter === cat.id;
          const count = cat.id === "all" ? events.length : cat.id === "gaming" ? gamingEvents.length : events.filter((e) => e.category === cat.id).length;
          return (
            <button
              key={cat.id}
              id={`filter-${cat.id}`}
              onClick={() => setActiveFilter(cat.id as EventCategory | "all")}
              style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                padding: "0.65rem 1.4rem",
                borderRadius: "50px",
                border: `1px solid ${active ? color : "rgba(255,255,255,0.08)"}`,
                background: active
                  ? isGaming
                    ? "linear-gradient(90deg, rgba(255,107,53,0.2), rgba(255,70,85,0.15))"
                    : `linear-gradient(90deg, ${color}20, ${color}08)`
                  : "rgba(255,255,255,0.02)",
                color: active ? (isGaming ? "#FF6B35" : color) : "rgba(255,255,255,0.5)",
                fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)", fontFamily: "'Outfit',sans-serif",
                boxShadow: active ? `0 0 20px ${color}20` : "none",
                transform: active ? "translateY(-2px)" : "none"
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }
              }}
            >
              {cat.label}
              <span
                style={{
                  background: active ? (isGaming ? "#FF6B35" : color) : "rgba(255,255,255,0.08)",
                  color: active ? "#000" : "rgba(255,255,255,0.35)",
                  borderRadius: "50px", padding: "0 7px", fontSize: "0.65rem", fontWeight: 700,
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ══════════════════════════════════════════════
           Non-Gaming events zones
         ══════════════════════════════════════════════ */}
      {showGrid && filtered.length > 0 && (
        <div className="non-gaming-container" style={{ padding: "0 3rem 8rem", display: "flex", flexDirection: "column", gap: "5rem" }}>
          {['tech', 'creative', 'adventure'].map(catId => {
            const evs = filtered.filter(e => e.category === catId);
            if (evs.length === 0) return null;
            
            const isTech = catId === 'tech';
            const isCreative = catId === 'creative';
            const isAdventure = catId === 'adventure';
            
            const color = getCategoryColor(catId as EventCategory);
            const title = isTech ? "ASTRAKSHETRA" : isCreative ? "KALAKSHETRA" : "ANVESHANA";
            const bgText = isTech ? "INNOVATE" : isCreative ? "IMAGINE" : "EXPLORE";
            
            return (
              <div key={catId} style={{ position: "relative" }}>
                {/* Zone Header */}
                <div style={{ marginBottom: "3rem", position: "relative", padding: "0 1rem" }}>
                  <div style={{ position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)", fontWeight: 900, fontSize: "clamp(3.5rem,10vw,8rem)", color: "transparent", WebkitTextStroke: `1px ${color}20`, whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none", letterSpacing: "0.08em" }}>
                    {bgText}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", position: "relative", zIndex: 1 }}>
                    <div>
                      <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: color, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 1.1 }}>
                        {title}
                      </h2>
                      <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.3rem" }}>
                        {evs.length} Epic Event{evs.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <div style={{ width: "150px", height: "2px", background: `linear-gradient(90deg, ${color}, transparent)`, marginTop: "1.2rem", marginLeft: "4.8rem", position: "relative", zIndex: 1 }} />
                </div>
                
                {/* Cards Grid */}
                {isTech && evs.find(e => e.slug === 'vishwakarma') && (
                  <Link href={`/events/vishwakarma`} style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "2.5rem" }}>
                    <div
                      className="hackathon-card"
                      style={{
                        background: `linear-gradient(145deg, rgba(8,8,8,0.70) 0%, rgba(0,0,0,0.85) 100%), url('/hackathon-bg.webp') center/cover`,
                        border: `1px solid ${color}40`,
                        borderRadius: "0 40px 0 40px",
                        padding: "3.5rem 4rem",
                        position: "relative", overflow: "hidden",
                        transition: "all 0.4s", cursor: "pointer",
                        backdropFilter: "blur(10px)",
                        boxShadow: `0 20px 50px ${color}10`,
                        display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = `0 30px 60px ${color}20, inset 0 0 30px ${color}10`;
                        const hoverBg = e.currentTarget.querySelector('.hackathon-hover-bg') as HTMLElement;
                        if (hoverBg) hoverBg.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 20px 50px ${color}10`;
                        const hoverBg = e.currentTarget.querySelector('.hackathon-hover-bg') as HTMLElement;
                        if (hoverBg) hoverBg.style.opacity = "0";
                      }}
                    >
                      {/* Hover Fade Layer */}
                      <div
                        className="hackathon-hover-bg"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(145deg, rgba(12,12,12,0.40) 0%, rgba(0,0,0,0.65) 100%), url('/hackathon-bg.webp') center/cover`,
                          opacity: 0,
                          transition: "opacity 0.4s ease-in-out",
                          zIndex: 0,
                          pointerEvents: "none"
                        }}
                      />
                      {/* Tech Decorative elements */}
                      <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, borderBottom: `3px solid ${color}`, borderLeft: `3px solid ${color}`, opacity: 0.6 }} />
                      <div style={{ position: "absolute", bottom: 0, left: 0, width: 80, height: 80, borderTop: `3px solid ${color}`, borderRight: `3px solid ${color}`, opacity: 0.6 }} />
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${color}08 1px, transparent 1px), linear-gradient(90deg, ${color}08 1px, transparent 1px)`, backgroundSize: "30px 30px", pointerEvents: "none", opacity: 0.5 }} />
                      <div style={{ position: "absolute", top: "50%", right: "-10%", width: 600, height: 600, transform: "translateY(-50%)", borderRadius: "50%", background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`, filter: "blur(50px)", pointerEvents: "none", zIndex: 0 }} />

                      {(() => {
                        const hackathon = evs.find(e => e.slug === 'vishwakarma')!;
                        return (
                          <>
                            <div style={{ flex: "1 1 300px", position: "relative", zIndex: 1 }}>
                              <span style={{ background: `${color}15`, border: `1px solid ${color}40`, color: color, padding: "0.5rem 1.2rem", borderRadius: "50px", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 800, boxShadow: `0 0 20px ${color}20`, display: "inline-block", marginBottom: "1.5rem" }}>
                                🔥 FLAGSHIP EVENT
                              </span>
                              <h2 style={{ fontWeight: 900, fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "0.02em", color: color, marginBottom: "0.5rem", lineHeight: 1 }}>
                                {hackathon.name}
                              </h2>
                              <p style={{ fontSize: "1.1rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "2rem" }}>
                                {hackathon.eventName}
                              </p>
                              <div style={{
                                width: "200px",
                                height: "200px",
                                background: `radial-gradient(circle at center, ${color}30 0%, transparent 65%)`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative"
                              }}>
                                <div style={{
                                  position: "absolute",
                                  inset: "20px",
                                  background: `radial-gradient(circle at center, ${color}60 0%, transparent 70%)`,
                                  filter: "blur(25px)",
                                  opacity: 0.7
                                }} />
                                {hackathon.icon.startsWith("/icons/") ? <img loading="lazy" src={hackathon.icon} alt={hackathon.name} style={{ width: "90%", height: "90%", objectFit: "contain", filter: `drop-shadow(0 0 30px ${color}) drop-shadow(0 0 10px rgba(255,255,255,0.5))`, position: "relative", zIndex: 2 }} /> : hackathon.icon}
                              </div>
                            </div>
                            
                            <div style={{ flex: "2 1 400px", position: "relative", zIndex: 1 }}>
                              <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.5, marginBottom: "1.5rem", fontWeight: 500 }}>
                                {hackathon.tagline}
                              </p>
                              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                                {hackathon.description}
                              </p>
                              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
                                {hackathon.teamSize && <span style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", padding: "0.6rem 1.2rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>👥 {hackathon.teamSize}</span>}
                                {hackathon.duration && <span style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", padding: "0.6rem 1.2rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>⏱ {hackathon.duration}</span>}
                                {hackathon.prizes && (
                                  <span style={{ fontSize: "0.95rem", color: "#C9A84C", display: "flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.1)", padding: "0.6rem 1.2rem", borderRadius: "8px", border: "1px solid rgba(201,168,76,0.3)", fontWeight: 700 }}>🏆 {hackathon.prizes[0]}</span>
                                )}
                              </div>
                              <div style={{ fontSize: "1rem", color: color, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "12px", borderBottom: `2px solid ${color}`, paddingBottom: "6px" }}>
                                Enter the Hackathon <span style={{ fontSize: "1.2rem" }}>→</span>
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </Link>
                )}

                {isCreative ? (
                  <div 
                    className="polaroid-container"
                    style={{
                      position: "relative",
                      minHeight: "600px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2.5rem",
                      flexWrap: "wrap",
                      paddingTop: "2rem",
                      paddingBottom: "4rem",
                    }}
                  >
                    {evs.filter(e => e.slug !== 'vishwakarma').map((ev, i) => {
                      const isHovered = hoveredEvent === ev.slug;
                        return (
                          <div
                            key={ev.slug}
                            onMouseEnter={() => setHoveredEvent(ev.slug)}
                            onMouseLeave={() => setHoveredEvent(null)}
                            className={`sliding-canvas-card ${isHovered ? 'active' : ''}`}
                            onClick={(e) => {
                              if (hoveredEvent !== ev.slug) {
                                e.preventDefault();
                                setHoveredEvent(ev.slug);
                              }
                            }}
                            style={{
                              display: "flex",
                              alignItems: "stretch",
                              height: "450px",
                              flex: isHovered ? "5" : "1",
                              width: isHovered ? "850px" : "320px",
                              transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                              cursor: "pointer",
                              position: "relative",
                              zIndex: isHovered ? 10 : 1,
                            }}
                          >
                            {/* EXPANDING IMAGE CARD */}
                            <div className="sliding-main-image" style={{
                              width: "100%",
                              height: "100%",
                              flexShrink: 0,
                              borderRadius: "24px",
                              overflow: "hidden",
                              position: "relative",
                              zIndex: 2,
                              boxShadow: isHovered ? `0 20px 50px ${color}50` : "0 10px 30px rgba(0,0,0,0.5)",
                              transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                              border: `1px solid ${isHovered ? color : 'rgba(255,255,255,0.1)'}`,
                            }}>
                              <div className={`creative-image-container ${ev.slug} ${isHovered ? 'hovered' : ''}`} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                                {/* BASE (B&W or Blurred or Fallback Gradient) */}
                                <div className="creative-base" style={{ 
                                  position: "absolute", inset: 0, 
                                  backgroundImage: ev.image ? `url('${ev.image}')` : `linear-gradient(135deg, ${color}40 0%, #111 100%)`, 
                                  backgroundSize: "cover", backgroundPosition: "center",
                                  display: "flex", alignItems: "center", justifyContent: "center"
                                }}>
                                  {!ev.image && (
                                    <>
                                       <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />
                                       <div style={{ fontSize: "6rem", filter: `drop-shadow(0 10px 15px rgba(0,0,0,0.5))`, zIndex: 1 }}>
                                         {ev.icon.startsWith("/icons/") ? <img loading="lazy" src={ev.icon} alt={ev.name} style={{ width: "1.2em", height: "1.2em", objectFit: "contain" }} /> : ev.icon}
                                       </div>
                                    </>
                                  )}
                                </div>
                                
                                {/* SPECIFIC EFFECTS */}
                                {ev.slug === "drishyakavya" && (
                                   <>
                                     <div className="film-border left" />
                                     <div className="film-border right" />
                                   </>
                                )}
                                {ev.slug === "drishyakala" && (
                                   <div className="viewfinder">
                                     <div className="crosshair"></div>
                                     <div className="corner top-left"></div>
                                     <div className="corner top-right"></div>
                                     <div className="corner bottom-left"></div>
                                     <div className="corner bottom-right"></div>
                                     <div className="shutter-flash"></div>
                                   </div>
                                )}
                              </div>
                              
                              {/* INTERNAL EVENT INFO OVERLAY */}
                              <div className="internal-overlay" style={{
                                position: "absolute", inset: 0,
                                background: isHovered ? "linear-gradient(to right, transparent 30%, rgba(0,0,0,0.8) 60%, rgba(10,10,10,0.95) 100%)" : "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 40%)",
                                transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                zIndex: 10,
                                pointerEvents: "none"
                              }}>
                                 {/* Floating Event Icon */}
                                 <div className="creative-event-icon" style={{
                                   position: "absolute",
                                   bottom: isHovered ? "2rem" : "7rem",
                                   left: "2rem",
                                   display: "flex", alignItems: "center", justifyContent: "center",
                                   zIndex: 20,
                                   opacity: 1,
                                   transform: isHovered ? "scale(1.15) rotate(-5deg)" : "scale(1)",
                                   transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                 }}>
                                   {ev.icon.startsWith("/icons/") ? <img loading="lazy" src={ev.icon} alt={ev.name} style={{ width: "5rem", height: "5rem", objectFit: "contain", filter: `drop-shadow(0 15px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 15px ${color}80)` }} /> : ev.icon}
                                 </div>

                                 {/* Title (Always visible, shifts position) */}
                                 <div className="creative-event-title" style={{
                                   position: "absolute",
                                   bottom: isHovered ? "auto" : "2rem",
                                   left: isHovered ? "3rem" : "2rem",
                                   top: isHovered ? "3rem" : "auto",
                                   transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                 }}>
                                   <h3 style={{ margin: 0, fontSize: isHovered ? "3.5rem" : "2rem", fontWeight: 900, color: "#fff", fontFamily: "'Outfit', sans-serif", letterSpacing: "1px", textShadow: "0 10px 20px rgba(0,0,0,0.8)" }}>
                                     {ev.name}
                                   </h3>
                                   <p style={{ margin: "0.2rem 0 0 0", color: color, fontSize: isHovered ? "1.2rem" : "0.9rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", textShadow: "0 5px 10px rgba(0,0,0,0.8)" }}>
                                     {ev.eventName}
                                   </p>
                                 </div>

                                 {/* Details (Fades in on hover on the right side) */}
                                 <div className="creative-event-details" style={{
                                   width: "400px",
                                   height: "100%",
                                   padding: "3rem",
                                   opacity: isHovered ? 1 : 0,
                                   transform: isHovered ? "translateX(0)" : "translateX(50px)",
                                   transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                   pointerEvents: isHovered ? "auto" : "none",
                                   display: "flex", flexDirection: "column", justifyContent: "center"
                                 }}>
                                    <p className="creative-tagline" style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.6, fontStyle: "italic", marginBottom: "2.5rem", borderLeft: `3px solid ${color}`, paddingLeft: "1rem" }}>
                                      "{ev.tagline}"
                                    </p>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                                      {ev.teamSize && (
                                        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                                          <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1px" }}>Team Size</span>
                                          <span style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>{ev.teamSize}</span>
                                        </div>
                                      )}
                                      {ev.duration && (
                                        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                                          <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1px" }}>Duration</span>
                                          <span style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>{ev.duration}</span>
                                        </div>
                                      )}
                                      {ev.prizes && (
                                        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                                          <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1px" }}>Prize Pool</span>
                                          <span style={{ fontSize: "1.1rem", color: "#E8C96A", fontWeight: 800 }}>{ev.prizes[0]}</span>
                                        </div>
                                      )}
                                    </div>

                                    <Link href={`/events/${ev.slug}`} style={{
                                      padding: "1rem",
                                      background: `${color}20`,
                                      border: `1px solid ${color}`,
                                      color: "#fff",
                                      textAlign: "center",
                                      borderRadius: "12px",
                                      textDecoration: "none",
                                      fontWeight: 700,
                                      textTransform: "uppercase",
                                      letterSpacing: "1px",
                                      transition: "all 0.3s",
                                      marginTop: "auto"
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.color = "#000"; e.currentTarget.style.boxShadow = `0 0 20px ${color}`; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = `${color}20`; e.currentTarget.style.color = "#fff"; e.currentTarget.style.boxShadow = "none"; }}>
                                      Explore Event →
                                    </Link>
                                 </div>
                              </div>
                            </div>
                          </div>
                        );
                    })}
                  </div>
                ) : (
                <div 
                  className={`expanding-slider ${isTech ? "tech-slider" : "adventure-slider"}`}
                  style={{ 
                    display: "flex", 
                    gap: "1rem", 
                    height: "550px",
                    width: "100%",
                  }}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  {evs.filter(e => e.slug !== 'vishwakarma').map((ev, i) => {
                    const isHovered = hoveredEvent === ev.slug || (hoveredEvent === null && i === 0);
                    return (
                      <Link 
                        key={ev.slug} 
                        href={`/events/${ev.slug}`} 
                        className={`expanding-card ${isHovered ? 'active' : ''}`}
                        onClick={(e) => {
                          if (hoveredEvent !== ev.slug) {
                            e.preventDefault();
                            setHoveredEvent(ev.slug);
                          }
                        }}
                        onMouseEnter={() => setHoveredEvent(ev.slug)}
                        style={{ 
                          textDecoration: "none", 
                          color: "inherit",
                          position: "relative",
                          flex: isHovered ? "5" : "1.5",
                          transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                          overflow: "hidden",
                          border: `1px solid ${isHovered ? color + '50' : 'rgba(255,255,255,0.05)'}`,
                          display: "flex",
                          flexDirection: "column",
                          boxShadow: isHovered ? `0 20px 50px ${color}15` : 'none',
                          borderRadius: "24px",
                        }}
                      >
                         {/* Card Background elements */}
                         {ev.image ? (
                           <>
                             <div 
                               style={{
                                 position: "absolute", inset: 0,
                                 backgroundImage: `url('${ev.image}')`,
                                 backgroundSize: "cover", backgroundPosition: "center",
                                 transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                                 filter: (ev.slug === "shikari" && !isHovered) ? "grayscale(0%) brightness(50%)" : (isHovered ? "grayscale(0%)" : "grayscale(100%)"),
                                 zIndex: 0
                               }}
                             />
                             <div style={{ position: "absolute", inset: 0, background: isHovered ? `linear-gradient(to top, rgba(10,10,10,0.95) 0%, ${color}30 50%, rgba(10,10,10,0.6) 100%)` : "rgba(0,0,0,0.75)", zIndex: 0, transition: "background 0.6s" }} />

                             {ev.slug === "shikari" && (
                                <div 
                                  className="shikari-flashlight"
                                  style={{
                                    position: "absolute",
                                    width: "300%",
                                    height: "300%",
                                    top: "-100%",
                                    left: "-100%",
                                    background: isHovered 
                                        ? "radial-gradient(circle at center, transparent 0%, transparent 12%, rgba(0,0,0,0.88) 28%, rgba(0,0,0,0.98) 45%, #000 100%)" 
                                        : "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.98) 12%, #000 100%)",
                                    animation: "flashlight-pan 6s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)",
                                    pointerEvents: "none",
                                    zIndex: 1,
                                    opacity: 1,
                                    transition: "background 0.6s ease",
                                  }}
                                />
                             )}
                           </>
                         ) : (
                           <div style={{ position: "absolute", inset: 0, background: isHovered ? `linear-gradient(145deg, ${color}15 0%, rgba(10,10,10,0.95) 100%)` : `rgba(15,15,15,0.4)`, transition: "background 0.6s", zIndex: 0 }} />
                         )}

                         {isHovered && (
                           <div style={{ position: "absolute", top: -50, right: -50, width: 250, height: 250, background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`, filter: "blur(50px)", zIndex: 0, transition: "opacity 0.6s" }} />
                         )}
                         {isHovered && (
                           <div style={{ position: "absolute", bottom: -50, left: -50, width: 250, height: 250, background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`, filter: "blur(50px)", zIndex: 0, transition: "opacity 0.6s" }} />
                         )}

                         {/* ACTIVE / HOVERED STATE */}
                         <div 
                           style={{
                             padding: "3rem",
                             opacity: isHovered ? 1 : 0,
                             transition: "opacity 0.4s ease",
                             transitionDelay: isHovered ? "0.2s" : "0s",
                             position: "absolute",
                             inset: 0,
                             display: "flex",
                             flexDirection: "column",
                             zIndex: 1,
                             pointerEvents: isHovered ? 'auto' : 'none',
                           }}
                         >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "auto", flexWrap: "wrap", gap: "2rem" }}>
                               <div style={{ flex: "1 1 300px" }}>
                                 <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `${color}15`, border: `1px solid ${color}30`, color: color, padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, marginBottom: "1.5rem" }}>
                                   <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, display: "inline-block", boxShadow: `0 0 8px ${color}` }} />
                                   {ev.eventName}
                                 </span>
                                 <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", letterSpacing: "0.02em", color: "#fff", lineHeight: 1, marginBottom: "1rem", textTransform: "uppercase" }}>
                                   {ev.name}
                                 </h3>
                                 <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: "90%", lineHeight: 1.6, fontWeight: 300 }}>
                                   {ev.tagline}
                                 </p>
                               </div>
                               
                               <div style={{ fontSize: "7.5rem", filter: `drop-shadow(0 0 30px ${color}40)` }}>
                                 {ev.icon.startsWith("/icons/") ? <img loading="lazy" src={ev.icon} alt={ev.name} style={{ width: "1.2em", height: "1.2em", objectFit: "contain" }} /> : ev.icon}
                               </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "2rem", flexWrap: "wrap", gap: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem" }}>
                               <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                                 {ev.teamSize && <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: "8px" }}>👥 {ev.teamSize}</span>}
                                 {ev.duration && <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: "8px" }}>⏱ {ev.duration}</span>}
                                 {ev.prizes && <span style={{ fontSize: "0.85rem", color: "#C9A84C", display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>🏆 {ev.prizes[0]}</span>}
                               </div>
                               
                               <div style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", fontSize: "0.85rem", color: color, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", background: `${color}10`, padding: "0.7rem 1.5rem", borderRadius: "50px", border: `1px solid ${color}20`, transition: "all 0.3s" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = `${color}20`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = `${color}10`; e.currentTarget.style.transform = "translateY(0)"; }}
                               >
                                 Explore Event <span style={{ fontSize: "1.2rem" }}>→</span>
                               </div>
                            </div>
                         </div>

                         {/* INACTIVE STATE */}
                         <div
                           className="inactive-content"
                           style={{
                             position: "absolute",
                             inset: 0,
                             display: "flex",
                             flexDirection: "column",
                             alignItems: "center",
                             justifyContent: "space-between",
                             padding: "2.5rem 0",
                             opacity: isHovered ? 0 : 1,
                             transition: "opacity 0.3s ease",
                             pointerEvents: isHovered ? 'none' : 'auto',
                             zIndex: 2,
                           }}
                         >
                            <div style={{ fontSize: "3.5rem", opacity: 0.8, filter: "grayscale(100%) drop-shadow(0 0 10px rgba(0,0,0,0.5))" }}>
                              {ev.icon.startsWith("/icons/") ? <img loading="lazy" src={ev.icon} alt={ev.name} style={{ width: "1em", height: "1em", objectFit: "contain" }} /> : ev.icon}
                            </div>
                            
                            <h3 
                              className="vertical-text"
                              style={{ 
                                fontFamily: "'Outfit', sans-serif", 
                                fontWeight: 700, 
                                fontSize: "1.2rem", 
                                letterSpacing: "0.2em", 
                                color: "rgba(255,255,255,0.3)", 
                                textTransform: "uppercase",
                                whiteSpace: "nowrap",
                                transform: "rotate(-180deg)",
                                writingMode: "vertical-rl",
                              }}
                            >
                              {ev.name}
                            </h3>
                         </div>
                      </Link>
                    );
                  })}
                </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ══════════════════════════════════════════════
           RANARANGA GAMING ZONE (shown when all / gaming)
         ══════════════════════════════════════════════ */}
      {showRanranga && (
        <div className="gaming-container" style={{ padding: "0 3rem", marginBottom: "6rem" }}>
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(255,107,53,0.2)",
              background: "linear-gradient(160deg, rgba(255,80,0,0.06) 0%, #080808 45%, rgba(255,50,50,0.04) 100%)",
              position: "relative",
            }}
          >
            {/* Scanlines */}
            <div
              style={{
                position: "absolute", inset: 0,
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.007) 2px, rgba(255,255,255,0.007) 4px)",
                pointerEvents: "none", zIndex: 0,
              }}
            />

            {/* ── RANARANGA Header ── */}
            <div
              style={{
                padding: "4rem 3.5rem 2.5rem",
                position: "relative", zIndex: 1,
                borderBottom: "1px solid rgba(255,107,53,0.1)",
                overflow: "hidden",
              }}
            >
              {/* Ghost watermark */}
              <div
                style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  fontWeight: 900, fontSize: "clamp(5rem,15vw,13rem)",
                  color: "transparent", WebkitTextStroke: "1px rgba(255,107,53,0.08)",
                  whiteSpace: "nowrap", letterSpacing: "0.08em",
                  userSelect: "none", pointerEvents: "none",
                }}
              >
                RANARANGA
              </div>

              <div
                style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between", flexWrap: "wrap", gap: "2rem",
                  position: "relative", zIndex: 2,
                }}
              >
                <div>
                  {/* Live pill */}
                  <div
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.6rem",
                      background: "rgba(255,107,53,0.1)",
                      border: "1px solid rgba(255,107,53,0.35)",
                      borderRadius: 6, padding: "0.35rem 1rem", marginBottom: "1.2rem",
                    }}
                  >
                    <span
                      style={{
                        width: 7, height: 7, borderRadius: "50%",
                        background: "#FF4500", display: "inline-block",
                        boxShadow: "0 0 8px #FF4500",
                        animation: "blink 1.4s ease-in-out infinite",
                      }}
                    />
                    <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35" }}>
                      Gaming Zone · AIKYAM 2K26
                    </span>
                  </div>

                  <h2
                    style={{
                      fontWeight: 900,
                      fontSize: "clamp(2.5rem,6vw,5rem)",
                      letterSpacing: "0.06em",
                      lineHeight: 1,
                      background: "linear-gradient(90deg, #FF6B35 0%, #FF4655 50%, #FF9800 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    RANARANGA
                  </h2>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.38)", marginTop: "0.6rem", letterSpacing: "0.04em" }}>
                    The Ultimate Gaming Arena — Where Warriors Rise &amp; Legends Are Forged
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 900, fontSize: "2rem", color: "#FF6B35" }}>3</div>
                    <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Games</div>
                  </div>
                  <div style={{ width: 1, height: 40, background: "rgba(255,107,53,0.2)" }} />
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 900, fontSize: "2rem", color: "#FF4655" }}>₹15K+</div>
                    <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Total Prize</div>
                  </div>
                  <div style={{ width: 1, height: 40, background: "rgba(255,107,53,0.2)" }} />
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 900, fontSize: "2rem", color: "#FF9800" }}>🎮</div>
                    <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>BYOD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 3 Game Cards List ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative", zIndex: 1,
              }}
            >
              <div className="rana-cards-container">
              {gamingEvents.map((g, i) => (
                <Link key={g.slug} href={`/events/${g.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div
                    className="rana-card"
                    style={{
                      padding: "3.5rem 3rem",
                      borderBottom: i < gamingEvents.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      background: `linear-gradient(145deg, ${g.color}10 0%, transparent 100%)`,
                      position: "relative", overflow: "hidden",
                      transition: "all 0.4s ease", cursor: "pointer",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "3rem",
                      flexWrap: "wrap"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(145deg, ${g.color}22 0%, ${g.color}06 100%)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `linear-gradient(145deg, ${g.color}10 0%, transparent 100%)`;
                    }}
                  >
                    {/* Background Image restricted to left half */}
                    {(g.slug === 'kurukshetra' || g.slug === 'vyuha' || g.slug === 'ranabhoomi') && (
                      <div
                        className="rana-bg"
                        style={{
                          position: "absolute", top: 0, left: 0, bottom: 0, width: "45%",
                          background: g.slug === 'kurukshetra' ? `url('/bgmip1_rotated2.webp') center/cover no-repeat` : g.slug === 'vyuha' ? `url('/valorant-bg.webp') center/cover no-repeat` : `url('/freefire-bg.webp') center/cover no-repeat`,
                          zIndex: 0, opacity: 0.65,
                          WebkitMaskImage: "linear-gradient(to right, black 50%, transparent 100%)",
                          maskImage: "linear-gradient(to right, black 50%, transparent 100%)",
                          pointerEvents: "none",
                        }}
                      />
                    )}

                    {/* Corner brackets */}
                    <div style={{ position: "absolute", top: 16, left: 16, width: 28, height: 28, borderTop: `2px solid ${g.color}`, borderLeft: `2px solid ${g.color}`, opacity: 0.6, zIndex: 2 }} />
                    <div style={{ position: "absolute", bottom: 16, right: 16, width: 28, height: 28, borderBottom: `2px solid ${g.color}`, borderRight: `2px solid ${g.color}`, opacity: 0.6, zIndex: 2 }} />

                    {/* Glow blob */}
                    <div
                      style={{
                        position: "absolute", bottom: -50, right: -50,
                        width: 220, height: 220, borderRadius: "50%",
                        background: `radial-gradient(circle, ${g.color}18 0%, transparent 70%)`,
                        filter: "blur(40px)", pointerEvents: "none", zIndex: 0
                      }}
                    />

                    {/* Left Column: Icon and Info */}
                    <div className="rana-left" style={{ flex: "1 1 250px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
                      <div
                        className="rana-badge"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "0.4rem",
                          background: `${g.color}15`, border: `1px solid ${g.color}35`,
                          borderRadius: 4, padding: "0.28rem 0.8rem", marginBottom: "1.5rem",
                          alignSelf: "flex-start",
                        }}
                      >
                        <span style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: g.color, fontWeight: 600 }}>
                          {g.eventName}
                        </span>
                      </div>

                      <div className="rana-icon-container" style={{ fontSize: "6.5rem", marginBottom: "1.2rem", display: "flex", alignItems: "center", filter: `drop-shadow(0 0 15px ${g.color}40)` }}>
                        {g.icon.startsWith("/icons/") ? <img loading="lazy" src={g.icon} alt={g.name} style={{ width: "1em", height: "1em", objectFit: "contain" }} /> : g.icon}
                      </div>
                      
                      <h3
                        className="rana-title"
                        style={{
                          fontWeight: 900, fontSize: "2.8rem",
                          letterSpacing: "0.04em", color: g.color,
                          marginBottom: "0.4rem", lineHeight: 1,
                        }}
                      >
                        {g.name}
                      </h3>
                      <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>
                        {g.eventName}
                      </p>

                      <div className="rana-stats" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                        {g.prizes && (
                          <span style={{ fontSize: "0.8rem", color: "#C9A84C", background: "rgba(201,168,76,0.1)", padding: "0.3rem 0.8rem", borderRadius: 50, border: "1px solid rgba(201,168,76,0.2)" }}>
                            🏆 {g.prizes[0]}
                          </span>
                        )}
                        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.05)", padding: "0.3rem 0.8rem", borderRadius: 50, border: "1px solid rgba(255,255,255,0.1)" }}>👥 {g.teamSize}</span>
                      </div>
                    </div>

                    {/* Right Column: Description */}
                    <div className="rana-right" style={{ flex: "2 1 400px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: "1.2rem", fontWeight: 500 }}>
                        {g.tagline}
                      </p>
                      <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "2rem" }}>
                        {g.description}
                      </p>

                      <div
                        className="rana-cta"
                        style={{
                          marginTop: "auto", display: "inline-flex", alignItems: "center", gap: "0.5rem",
                          fontSize: "0.8rem", color: g.color, fontWeight: 700,
                          letterSpacing: "0.12em", textTransform: "uppercase",
                          alignSelf: "flex-start", borderBottom: `1px solid ${g.color}40`, paddingBottom: "2px",
                        }}
                      >
                        View Full Details →
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
              </div>
            </div>

            {/* ── Bottom bar ── */}
            <div
              style={{
                padding: "1.5rem 3.5rem",
                borderTop: "1px solid rgba(255,107,53,0.08)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: "1rem", position: "relative", zIndex: 1,
              }}
            >
              <p style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.06em" }}>
                🎮 All gaming events held on college premises · BYOD · Fair play enforced
              </p>
              <a
                href="#"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "linear-gradient(90deg,#FF6B35,#FF4655)",
                  color: "#fff", padding: "0.65rem 1.8rem", borderRadius: "50px",
                  fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase", textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(255,107,53,0.3)",
                }}
              >
                Register for RANARANGA →
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.5); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes flashlight-pan {
          0% { transform: translate(30%, 20%); }
          33% { transform: translate(-30%, -10%); }
          66% { transform: translate(10%, -30%); }
          100% { transform: translate(-20%, 30%); }
        }

        
        
        @media (max-width: 900px) {
          .non-gaming-container {
             padding: 0 1rem 4rem !important;
             gap: 3rem !important;
          }
          .gaming-container {
             padding: 0 1rem !important;
          }
          
          .filters-container {
             flex-wrap: nowrap !important;
             overflow-x: auto;
             padding: 0 1rem 2rem !important;
             scrollbar-width: none;
             -ms-overflow-style: none;
          }
          .filters-container::-webkit-scrollbar { display: none; }

          .hackathon-card {
             padding: 2rem 1rem !important;
             gap: 1.5rem !important;
             border-radius: 20px !important;
             flex-direction: column !important;
          }
          .hackathon-card > div { flex: 1 1 100% !important; text-align: center; }
          .hackathon-card > div:first-child h2 { font-size: 2.2rem !important; }
          .hackathon-card > div:first-child p { font-size: 0.8rem !important; }

          /* Tech Slider (Vertical accordion like before) */
          .tech-slider {
            flex-direction: column !important;
            height: 900px !important;
            padding: 0 !important;
            gap: 0.5rem !important;
          }
          .tech-slider .expanding-card {
            width: 100% !important;
            height: auto !important;
            border-radius: 16px !important;
            /* Inline style handles flex: 5 vs 1.5 */
          }
          .tech-slider .inactive-content {
            flex-direction: row !important;
            padding: 0 1.5rem !important;
          }
          .tech-slider .inactive-content .vertical-text {
            writing-mode: horizontal-tb !important;
            transform: none !important;
            box-sizing: border-box !important;
          }

          /* Creative (polaroid) & Adventure (horizontal scroll) */
          .polaroid-container, .adventure-slider {
            flex-direction: row !important;
            height: 560px !important;
            gap: 1rem !important;
            padding: 0 0 1rem 0 !important;
            align-items: stretch !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            scrollbar-width: none;
          }
          .polaroid-container::-webkit-scrollbar, .adventure-slider::-webkit-scrollbar { display: none; }
          .sliding-canvas-card, .adventure-slider .expanding-card {
            width: 85vw !important;
            flex: 0 0 85vw !important;
            height: 100% !important;
            scroll-snap-align: center;
            border-radius: 20px !important;
          }

          /* Creative details adjustments on mobile */
          .sliding-canvas-card .internal-overlay {
            flex-direction: column !important;
            justify-content: flex-end !important;
            align-items: center !important;
            background: linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(0,0,0,0.5) 40%, transparent 100%) !important;
          }
          .sliding-canvas-card.active .internal-overlay {
            background: linear-gradient(to top, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.9) 70%, transparent 100%) !important;
          }
          
          /* Icon - Big when inactive, small watermark when active */
          .sliding-canvas-card .creative-event-icon {
            position: relative !important;
            top: auto !important;
            bottom: auto !important;
            left: auto !important;
            right: auto !important;
            margin: 0 0 1rem 0 !important;
            transform: scale(1.2) !important;
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
            opacity: 1 !important;
          }
          .sliding-canvas-card.active .creative-event-icon {
            transform: scale(0.5) !important;
            opacity: 0.2 !important; /* Creative watermark effect */
            margin-bottom: 0.5rem !important;
            display: flex !important; /* Override the previous none */
          }
          
          /* Title - Bottom when inactive, top of details when active */
          .sliding-canvas-card .creative-event-title {
            position: relative !important;
            top: auto !important;
            bottom: auto !important;
            left: auto !important;
            right: auto !important;
            width: 100% !important;
            padding: 0 1.5rem 2rem !important;
            margin: 0 !important;
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
            box-sizing: border-box !important;
            text-align: center !important;
          }
          .sliding-canvas-card.active .creative-event-title {
            padding: 0 1.5rem 1rem !important;
            border-bottom: 1px solid rgba(255,255,255,0.1) !important;
            margin-bottom: 1.5rem !important;
          }
          .sliding-canvas-card .creative-event-title h3 {
            font-size: 2.2rem !important;
            white-space: normal !important;
            line-height: 1.1 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .sliding-canvas-card .creative-event-title p {
            font-size: 0.85rem !important;
            white-space: normal !important;
            line-height: 1.4 !important;
          }
          
          /* Details - Hidden when inactive, stacked nicely when active */
          .sliding-canvas-card .creative-event-details {
            display: none !important; /* Hide completely so it doesn't push title up */
          }
          .sliding-canvas-card.active .creative-event-details {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            padding: 0 1.5rem 2rem !important;
            height: auto !important;
            transform: none !important;
            box-sizing: border-box !important;
          }
          
          .sliding-canvas-card .creative-tagline {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
            line-height: 1.5 !important;
            text-align: center;
            border-left: none !important;
            padding-left: 0 !important;
          }
          .sliding-canvas-card .creative-event-details > div {
            gap: 0.8rem !important;
            margin-bottom: 1.5rem !important;
            display: flex;
            flex-direction: column;
          }
          .sliding-canvas-card .creative-event-details > div > div {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            text-align: left !important;
            padding: 0.8rem 1.2rem !important;
            background: rgba(255,255,255,0.04) !important;
            border-radius: 12px !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            backdrop-filter: blur(10px) !important;
          }
          .sliding-canvas-card .creative-event-details > div > div span:first-child {
             font-size: 0.8rem !important;
             color: rgba(255,255,255,0.6) !important;
          }
          .sliding-canvas-card .creative-event-details > div > div span:last-child {
             font-size: 1rem !important;
             text-align: right !important;
          }

          /* Adventure details adjustments on mobile */
          .adventure-slider .expanding-card .inactive-content {
            flex-direction: column !important;
            justify-content: center !important;
          }
          .adventure-slider .expanding-card .vertical-text {
            writing-mode: vertical-rl !important;
            transform: rotate(-180deg) !important;
          }
          .adventure-slider .expanding-card.active .inactive-content { opacity: 0 !important; }

          /* Rana Cards (Gaming) */
          .rana-cards-container {
             display: flex;
             flex-direction: row !important;
             align-items: stretch !important;
             overflow-x: auto;
             scroll-snap-type: x mandatory;
             scrollbar-width: none;
             padding-bottom: 1rem;
          }
          .rana-cards-container::-webkit-scrollbar { display: none; }
          /* Gaming (Rana) mobile fixes */
          .rana-card {
             flex: 0 0 85vw !important;
             width: 85vw !important;
             scroll-snap-align: center;
             border-right: 1px solid rgba(255,255,255,0.05);
             border-bottom: none !important;
             border-radius: 16px;
             margin-right: 1rem;
             height: auto !important;
             background: rgba(10,10,10,0.85) !important;
             padding: 2rem 1.5rem !important;
             flex-direction: column !important;
             gap: 1.5rem !important;
          }
          .rana-bg {
            width: 100% !important;
            mask-image: none !important;
            -webkit-mask-image: none !important;
            opacity: 0.3 !important;
            background-size: cover !important;
            background-position: center !important;
          }
          .rana-left {
            flex: 1 1 100% !important;
            text-align: center !important;
            align-items: center !important;
          }
          .rana-right {
            flex: 1 1 100% !important;
            text-align: center !important;
          }
          .rana-title {
            font-size: 2.2rem !important;
          }
          .rana-icon-container {
            font-size: 3.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          .rana-badge, .rana-cta {
            align-self: center !important;
          }
          .rana-stats {
            justify-content: center !important;
          }
        }


        /* Creative Event Styles */
        .creative-base {
          transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
        }
        
        /* Poster Making (chitrasutra) */
        .chitrasutra .creative-base {
          filter: grayscale(100%);
        }
        .chitrasutra.hovered .creative-base {
          filter: grayscale(0%);
        }
        
        /* Videography (drishyakavya) */
        .drishyakavya .creative-base {
          filter: grayscale(100%) sepia(30%);
          left: 20px; right: 20px; width: auto;
        }
        .drishyakavya.hovered .creative-base {
          filter: grayscale(0%) sepia(0%);
        }
        .film-border {
          position: absolute; top: 0; bottom: 0; width: 20px; background: #111; z-index: 4;
          background-image: radial-gradient(white 30%, transparent 35%);
          background-size: 20px 20px;
          background-position: 0 0;
          transition: background-position 0.3s;
        }
        .film-border.left { left: 0; border-right: 2px solid #222; }
        .film-border.right { right: 0; border-left: 2px solid #222; }
        .drishyakavya.hovered .film-border {
          animation: rollFilm 0.4s linear infinite;
        }
        @keyframes rollFilm {
          from { background-position: 0 0; }
          to { background-position: 0 20px; }
        }
        
        /* Photography (drishyakala) */
        @keyframes cameraFocusReal {
          0% { filter: blur(15px) contrast(1) grayscale(100%); transform: scale(1.15); }
          30% { filter: blur(3px) contrast(1.2) grayscale(50%); transform: scale(1.03); }
          50% { filter: blur(7px) contrast(1.1) grayscale(30%); transform: scale(1.06); }
          75% { filter: blur(1px) contrast(1.3) grayscale(10%); transform: scale(1.01); }
          100% { filter: blur(0px) contrast(1) grayscale(0%); transform: scale(1); }
        }
        .drishyakala .creative-base {
          filter: grayscale(100%) blur(12px);
          transform: scale(1.15);
        }
        .drishyakala.hovered .creative-base {
          animation: cameraFocusReal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .viewfinder {
          position: absolute; inset: 0; pointer-events: none; z-index: 5;
          opacity: 0; transition: opacity 0.5s;
        }
        .drishyakala.hovered .viewfinder {
          opacity: 1;
        }
        .corner { position: absolute; width: 30px; height: 30px; border: 2px solid rgba(255,255,255,0.8); }
        .corner.top-left { top: 20px; left: 20px; border-right: none; border-bottom: none; }
        .corner.top-right { top: 20px; right: 20px; border-left: none; border-bottom: none; }
        .corner.bottom-left { bottom: 20px; left: 20px; border-right: none; border-top: none; }
        .corner.bottom-right { bottom: 20px; right: 20px; border-left: none; border-top: none; }
        .crosshair { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; }
        .crosshair::before { content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 1px; background: rgba(255,255,255,0.8); }
        .crosshair::after { content: ''; position: absolute; top: 0; left: 50%; width: 1px; height: 100%; background: rgba(255,255,255,0.8); }
        @keyframes flash {
          0% { background: rgba(255,255,255,0.8); opacity: 1; }
          100% { background: rgba(255,255,255,0.8); opacity: 0; }
        }
        .shutter-flash {
          position: absolute; inset: 0; background: white; opacity: 0; pointer-events: none;
        }
        .drishyakala.hovered .shutter-flash {
          animation: flash 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}
