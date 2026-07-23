"use client";

const pillars = [
  {
    num: "01",
    icon: "💻",
    name: "Technology",
    text: "Hackathons, coding contests, AI/ML workshops, and paper presentations. Push the boundaries of what's possible.",
  },
  {
    num: "02",
    icon: "🎭",
    name: "Cultural",
    text: "Dance, drama, music, and art — celebrate the vibrant tapestry of cultures that define our campus community.",
  },
  {
    num: "03",
    icon: "🏆",
    name: "Sports",
    text: "Indoor and outdoor sports events, e-sports tournaments, and athletic competitions for every skill level.",
  },
  {
    num: "04",
    icon: "🎨",
    name: "Creative Arts",
    text: "Photography, design, short films, and literary events — for the artists and storytellers among us.",
  },
  {
    num: "05",
    icon: "🚀",
    name: "Innovation",
    text: "Project expos, startup pitches, and ideation challenges that turn visionary ideas into tangible impact.",
  },
  {
    num: "06",
    icon: "🌐",
    name: "Networking",
    text: "Connect with industry leaders, alumni, and fellow students — building bridges that last beyond the fest.",
  },
];

export default function PillarsSection() {
  return (
    <section className="pillars-section" id="events">
      <div className="pillars-header">
        <div>
          <p className="section-label">What We Celebrate</p>
          <h2 className="pillars-title">
            Six Pillars of<br />
            <em>AIKYAM</em>
          </h2>
        </div>
        <p className="pillars-desc">
          AIKYAM — meaning <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Unity</em> in Sanskrit —
          is a celebration that brings together six dimensions of student excellence under one roof.
          Affiliated to Dr. Manmohan Singh Bengaluru City University.
        </p>
      </div>

      <div className="pillars-grid">
        {pillars.map((p) => (
          <div className="pillar-card" key={p.num}>
            <p className="pillar-number">{p.num}</p>
            <div className="pillar-icon">{p.icon}</div>
            <h3 className="pillar-name">{p.name}</h3>
            <p className="pillar-text">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
