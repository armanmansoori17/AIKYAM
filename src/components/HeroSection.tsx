"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Drag-to-scroll for gallery (reused here for parallax text)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onLeave = () => { isDown = false; };
    const onUp = () => { isDown = false; };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="hero h-[100dvh] w-full overflow-hidden flex flex-col justify-between pt-[140px] pb-6 md:pt-[165px]" id="home">
      {/* Background Logo (Mandala) */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.55,
      }} className="w-[100vw] h-[80vh] md:w-[100%] md:h-[85%] max-w-[1200px]">
        <img
          src="/logo (1).png"
          alt="Background Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Big background text */}
      <div className="hero-bg-text" style={{ zIndex: 0 }}>
        <div className="hero-bg-text-line">AIKYAM</div>
        <div className="hero-bg-text-line" style={{ opacity: 0.5 }}>2K26</div>
      </div>

      {/* Glowing orbs */}
      <div
        style={{
          position: "absolute", top: "20%", left: "15%", width: 300, height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
          zIndex: 1
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "20%", right: "15%", width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
          zIndex: 1
        }}
      />

      {/* Central Name Logo */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 3,
        pointerEvents: "none",
      }} className="w-[115vw] md:w-[115%] max-w-[1200px]">
        <div style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img
            src="/name.webp"
            alt="AIKYAM Event Name"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </div>


      {/* Bottom bar — college info + title */}
      <div className="hero-bottom-bar" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5 }}>
        <div className="animate-fade-up">
          <p className="hero-event-label">AIKYAM 2K26 · Tech Fest</p>
          <h1 className="hero-title">
            THE GRAND<br />
            <span style={{ color: "#C9A84C" }}>CONVERGENCE</span>
          </h1>
          <p className="hero-subtitle">
            Acharya Institute of Graduate Studies · Soladevanahalli, Bengaluru
          </p>
        </div>

        <div className="animate-fade-up delay-2">
          <div className="hero-date-chip">
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Mark Your Calendar</span>
            <strong>13 & 14 AUG 2026</strong>
            <span style={{ fontSize: "0.7rem", color: "rgba(201,168,76,0.6)", letterSpacing: "0.1em" }}>
              Bengaluru-560107
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <div
        className="hidden md:flex"
        style={{
          position: "absolute", bottom: "1.5rem", left: "50%",
          transform: "translateX(-50%)", zIndex: 5,
          flexDirection: "column", alignItems: "center", gap: "0.4rem",
          pointerEvents: "none"
        }}
      >
        <span
          style={{
            fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1, height: 40,
            background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}
