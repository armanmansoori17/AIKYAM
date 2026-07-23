"use client";

export default function QuoteSection() {
  return (
    <section className="quote-section" id="vision">
      {/* Big watermark word */}
      <div className="quote-bg-word">AIKYAM</div>

      {/* Section label */}
      <p className="section-label" style={{ position: "relative", zIndex: 2, marginBottom: "2rem" }}>
        Our Vision
      </p>

      {/* Quote */}
      <h2 className="quote-text">
        THE LANGUAGE<br />
        OF <span style={{ color: "#C9A84C" }}>TALENT</span> IS<br />
        UNIVERSAL
      </h2>

      {/* Divider */}
      <div
        style={{
          width: 1,
          height: 100,
          background: "linear-gradient(to bottom, #C9A84C, transparent)",
          margin: "4rem 0",
          position: "relative",
          zIndex: 2,
        }}
      />

      {/* Quote card — styled like reference */}
      <div
        style={{
          maxWidth: 700,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 8,
          padding: "3rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Image placeholder within quote card */}
        <div
          style={{
            float: "right",
            width: 180,
            height: 180,
            marginLeft: "2rem",
            marginBottom: "1rem",
            borderRadius: 4,
            background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(8,8,8,0.95) 100%)",
            border: "1px solid rgba(201,168,76,0.15)",
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "2rem", opacity: 0.15 }}>🎓</span>
          <p
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.3)",
              textAlign: "center",
            }}
          >
            Photo<br />Coming Soon
          </p>
        </div>

        {/* Quote text */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1.5rem",
          }}
        >
          "ACT WITH PURPOSE,<br />
          LEARN WITHOUT LIMITS,<br />
          ACHIEVE THE EXTRAORDINARY."
        </p>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#C9A84C",
          }}
        >
          — AIKYAM 2K26 Motto
        </p>
        <div style={{ clear: "both" }} />
      </div>
    </section>
  );
}
