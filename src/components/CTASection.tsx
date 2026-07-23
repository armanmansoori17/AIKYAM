export default function CTASection() {
  return (
    <section className="cta-section" id="register">
      {/* Big watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "'Outfit',sans-serif",
          fontWeight: 900,
          fontSize: "clamp(6rem, 20vw, 20rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.04)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.02em",
        }}
      >
        JOIN US
      </div>

      <p className="cta-eyebrow">Don't Miss Out</p>

      <h2 className="cta-title">
        Surrender Ego.<br />
        <span style={{ color: "#C9A84C" }}>Find Glory.</span>
      </h2>

      <p className="cta-sub">
        Be part of AIKYAM 2K26 — the grandest fest of Acharya Institute of Graduate Studies.
      </p>

      {/* College accreditation badge */}
      <div
        style={{
          marginTop: "4rem",
          display: "inline-flex",
          flexDirection: "column" as const,
          alignItems: "center",
          gap: "0.4rem",
          padding: "1.2rem 2rem",
          background: "rgba(201,168,76,0.05)",
          border: "1px solid rgba(201,168,76,0.12)",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Organised by
        </span>
        <span
          style={{
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "0.04em",
            color: "#fff",
            textAlign: "center",
          }}
        >
          ACHARYA INSTITUTE OF GRADUATE STUDIES
        </span>
        <span
          style={{
            fontSize: "0.7rem",
            color: "#C9A84C",
            letterSpacing: "0.08em",
          }}
        >
          NAAC Re-Accredited 'A+' · Soladevanahalli, Bengaluru-560107
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          Affiliated to Dr. Manmohan Singh Bengaluru City University
        </span>
      </div>
    </section>
  );
}
