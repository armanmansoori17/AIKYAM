"use client";
import { useState, useEffect } from "react";

export default function TaglineSection() {
  const [timeLeft1, setTimeLeft1] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [timeLeft2, setTimeLeft2] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    // Feel free to change these target dates!
    const target1 = new Date("2026-10-13T09:00:00").getTime();
    const target2 = new Date("2026-10-14T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff1 = target1 - now;
      const diff2 = target2 - now;

      if (diff1 > 0) {
        setTimeLeft1({
          d: Math.floor(diff1 / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff1 / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff1 / 1000 / 60) % 60),
          s: Math.floor((diff1 / 1000) % 60),
        });
      }
      if (diff2 > 0) {
        setTimeLeft2({
          d: Math.floor(diff2 / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff2 / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff2 / 1000 / 60) % 60),
          s: Math.floor((diff2 / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="tagline-section" id="about" style={{ padding: "8rem 5%", position: "relative", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "1300px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
        
        {/* Left Side: Tagline & Info */}
        <div style={{ textAlign: "left" }} className="animate-fade-up">
          <p className="section-label" style={{ marginBottom: "1.5rem", textAlign: "left" }}>About the Event</p>
          <h2 className="tagline-text" style={{ textAlign: "left", margin: "0 0 2rem 0", maxWidth: "100%", fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
            Where <em style={{ color: "#C9A84C", fontStyle: "normal" }}>Innovation</em> Meets<br />
            Tradition &amp; <em style={{ color: "#C9A84C", fontStyle: "normal" }}>Excellence</em>
          </h2>
          
          <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #C9A84C, transparent)", marginBottom: "2rem", borderRadius: "2px" }} />

          <p className="tagline-desc" style={{ textAlign: "left", margin: "0 0 3.5rem 0", maxWidth: "600px", fontSize: "1.1rem" }}>
            AIKYAM 2K26 is the flagship annual fest of{" "}
            <strong style={{ color: "#fff" }}>Acharya Institute of Graduate Studies</strong>
            , NAAC Re-Accredited <strong style={{ color: "#C9A84C" }}>'A+'</strong>, Soladevanahalli,
            Bengaluru. A convergence of technology, talent, and creativity — bringing
            together the brightest minds for an unforgettable experience.
          </p>

          {/* Stats Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "2rem" }}>
            {[
              { num: "13", label: "Events" },
              { num: "350+", label: "Participants" },
              { num: "2", label: "Days of Fest" },
              { num: "∞", label: "Memories" },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "#C9A84C", lineHeight: 1 }}>
                  {num}
                </div>
                <div style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: "0.5rem", fontWeight: 600 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Schedule Snapshot */}
        <div className="animate-fade-up delay-2" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div className="section-label" style={{ textAlign: "left", marginBottom: "0" }}>Schedule Snapshot</div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
            
            {/* Day 1 Card */}
            <div className="schedule-card" style={{
              background: "linear-gradient(145deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "16px",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", fontSize: "10rem", fontWeight: 900, color: "rgba(201,168,76,0.05)", lineHeight: 1 }}>13</div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                <span style={{ background: "#C9A84C", color: "#000", padding: "0.35rem 0.8rem", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>Day 1</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>The Hackathon</span>
              </div>
              <h3 style={{ color: "#C9A84C", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.8rem" }}>10-Hour Build</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "85%" }}>A relentless pursuit of innovation. Bring your wildest ideas to life, push the boundaries of tech, and code through the day.</p>
              
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
                {[
                  { label: "Days", value: timeLeft1.d },
                  { label: "Hrs", value: timeLeft1.h },
                  { label: "Mins", value: timeLeft1.m },
                  { label: "Secs", value: timeLeft1.s },
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(201,168,76,0.15)", padding: "0.6rem 0.8rem", borderRadius: "8px", minWidth: "70px", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <span style={{ color: "#C9A84C", fontWeight: 800, fontSize: "1.3rem" }}>{t.value.toString().padStart(2, '0')}</span>
                    <span style={{ color: "rgba(201,168,76,0.8)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "2px" }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 Card */}
            <div className="schedule-card" style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: "-20px", right: "-10px", fontSize: "10rem", fontWeight: 900, color: "rgba(255,255,255,0.02)", lineHeight: 1 }}>14</div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                <span style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "0.35rem 0.8rem", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>Day 2</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Main Events</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 800, marginBottom: "0.8rem" }}>Tech Showcase</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "85%" }}>The grand showcase. Competitions, insightful talks, and the ultimate celebration of technical talent.</p>
              
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
                {[
                  { label: "Days", value: timeLeft2.d },
                  { label: "Hrs", value: timeLeft2.h },
                  { label: "Mins", value: timeLeft2.m },
                  { label: "Secs", value: timeLeft2.s },
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.05)", padding: "0.6rem 0.8rem", borderRadius: "8px", minWidth: "70px", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem" }}>{t.value.toString().padStart(2, '0')}</span>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "2px" }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .schedule-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .schedule-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }
        @media (min-width: 1100px) {
          .tagline-section > div {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .tagline-section {
            padding: 5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
