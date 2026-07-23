import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getCategoryLabel } from "@/lib/events-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const ev = events.find((e) => e.slug === slug);
  if (!ev) return { title: "Event Not Found" };
  return {
    title: `${ev.name} — ${ev.eventName} | AIKYAM 2K26`,
    description: ev.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const ev = events.find((e) => e.slug === slug);
  if (!ev) notFound();

  const isGaming = ev.category === "gaming";
  const bgWord = ev.name.split(" ")[0];

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#fff", fontFamily: "'Outfit',sans-serif" }}>

      {/* ── Navbar ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "1.2rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(8,8,8,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <Link href="/events" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          ← All Events
        </Link>
        <Link href="/" style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.15em", color: "#C9A84C", textDecoration: "none" }}>
          AIK<span style={{ color: "#fff" }}>YAM</span>
        </Link>
        <span style={{ background: `${ev.color}15`, border: `1px solid ${ev.color}40`, color: ev.color, padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
          {ev.teamLabel}
        </span>
      </nav>

      {/* ── Hero ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "10rem 3rem 5rem", position: "relative", overflow: "hidden", background: isGaming ? `linear-gradient(160deg, ${ev.color}08 0%, #080808 60%)` : "#080808" }}>
        {/* Watermark */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontWeight: 900, fontSize: "clamp(6rem,25vw,25rem)", color: "transparent", WebkitTextStroke: `1px ${ev.color}08`, whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none", letterSpacing: "-0.02em", lineHeight: 1, zIndex: 0 }}>
          AIKYAM
        </div>
        {/* Glow */}
        <div style={{ position: "absolute", top: "25%", right: "8%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${ev.color}10 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />
        {isGaming && <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.005) 2px, rgba(255,255,255,0.005) 4px)", pointerEvents: "none", zIndex: 0 }} />}

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Category + RANARANGA badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ background: `${ev.color}12`, border: `1px solid ${ev.color}30`, color: ev.color, padding: "0.28rem 0.9rem", borderRadius: 4, fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
              {getCategoryLabel(ev.category)}
            </span>
            {isGaming && (
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "rgba(255,100,0,0.1)", border: "1px solid rgba(255,100,0,0.25)", color: "#FF6B35", padding: "0.28rem 0.9rem", borderRadius: 4, fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF4500", display: "inline-block", boxShadow: "0 0 6px #FF4500" }} />
                RANARANGA
              </span>
            )}
          </div>

          <div style={{ fontSize: "2.8rem", marginBottom: "1rem", display: "flex", alignItems: "center" }}>
            {ev.icon.startsWith("/icons/") ? <img loading="lazy" src={ev.icon} alt={ev.name} style={{ width: "1.2em", height: "1.2em", objectFit: "contain" }} /> : ev.icon}
          </div>

          <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.5rem" }}>
            {ev.eventName}
          </p>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(3rem,8vw,7rem)", letterSpacing: "-0.02em", lineHeight: 0.95, color: ev.color, marginBottom: "1.5rem" }}>
            {ev.name}
          </h1>
          <p style={{ fontWeight: 300, fontSize: "clamp(1rem,2vw,1.35rem)", color: "rgba(255,255,255,0.5)", fontStyle: "italic", maxWidth: 600, lineHeight: 1.55, marginBottom: "3rem" }}>
            &ldquo;{ev.tagline}&rdquo;
          </p>

          {/* Meta chips */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {ev.teamSize && (
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "0.8rem 1.4rem" }}>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.2rem" }}>Team Size</p>
                <p style={{ fontWeight: 700, fontSize: "0.95rem" }}>{ev.teamSize}</p>
              </div>
            )}
            {ev.duration && (
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "0.8rem 1.4rem" }}>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.2rem" }}>Duration</p>
                <p style={{ fontWeight: 700, fontSize: "0.95rem" }}>{ev.duration}</p>
              </div>
            )}
            {ev.rounds && (
              <div style={{ background: `${ev.color}10`, border: `1px solid ${ev.color}25`, borderRadius: 8, padding: "0.8rem 1.4rem" }}>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: `${ev.color}80`, marginBottom: "0.2rem" }}>Rounds</p>
                <p style={{ fontWeight: 700, fontSize: "0.95rem", color: ev.color }}>{ev.rounds.length}</p>
              </div>
            )}
            {ev.venue && (
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "0.8rem 1.4rem" }}>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.2rem" }}>Venue</p>
                <p style={{ fontWeight: 700, fontSize: "0.95rem" }}>{ev.venue}</p>
              </div>
            )}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "2rem", left: "3rem", display: "flex", alignItems: "center", gap: "0.6rem", zIndex: 2 }}>
          <div style={{ width: 30, height: 1, background: `${ev.color}50` }} />
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>Scroll to explore</span>
        </div>
      </section>

      {/* ── Description ── */}
      <section style={{ padding: "7rem 3rem 0" }}>
        <div style={{ maxWidth: 780 }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ev.color, marginBottom: "1.2rem" }}>About the Event</p>
          <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.85 }}>{ev.description}</p>
        </div>
      </section>

      {/* ── Rounds ── */}
      {ev.rounds && ev.rounds.length > 0 && (
        <section style={{ padding: "6rem 3rem 0" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ev.color, marginBottom: "3rem" }}>
            Event Format — {ev.rounds.length} {ev.rounds.length === 1 ? "Round" : "Rounds"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {ev.rounds.map((round, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid rgba(255,255,255,0.06)`,
                  borderLeft: `3px solid ${ev.color}`,
                  borderRadius: "0 12px 12px 0",
                  padding: "2.2rem 2.5rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Round number watermark */}
                <div style={{ position: "absolute", top: "50%", right: "2rem", transform: "translateY(-50%)", fontWeight: 900, fontSize: "5rem", color: "transparent", WebkitTextStroke: `1px ${ev.color}08`, userSelect: "none", pointerEvents: "none", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 260 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
                      <span style={{ background: `${ev.color}15`, color: ev.color, padding: "0.18rem 0.7rem", borderRadius: 50, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        Round {i + 1}
                      </span>
                      {round.duration && (
                        <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>
                          ⏱ {round.duration}
                        </span>
                      )}
                      {round.qualification && (
                        <span style={{ fontSize: "0.65rem", color: "#C9A84C", letterSpacing: "0.08em" }}>
                          → {round.qualification}
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.2rem", color: "#fff", marginBottom: "0.8rem", letterSpacing: "0.02em" }}>
                      {round.name}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.52)", lineHeight: 1.75 }}>
                      {round.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Rules + Judging side by side ── */}
      <section style={{ padding: "6rem 3rem 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
        {/* Rules */}
        {ev.rules && (
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ev.color, marginBottom: "1.5rem" }}>Rules</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {ev.rules.map((r, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.65, padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ color: ev.color, fontWeight: 800, flexShrink: 0, fontSize: "0.7rem", marginTop: "0.25rem" }}>{String(i + 1).padStart(2, "0")}</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Judging Criteria */}
        {ev.judgingCriteria && (
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>Judging Criteria</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {ev.judgingCriteria.map((j, i) => {
                const marksMatch = j.match(/—\s*([\d]+)\s*Marks?/i);
                const marks = marksMatch ? parseInt(marksMatch[1]) : null;
                const label = j.replace(/—\s*[\d]+\s*Marks?/i, "").trim();
                return (
                  <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8, padding: "0.9rem 1.2rem", position: "relative", overflow: "hidden" }}>
                    {/* Marks bar */}
                    {marks && (
                      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${marks}%`, background: `${ev.color}08`, borderRadius: "8px 0 0 8px" }} />
                    )}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
                      <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)" }}>{label || j}</span>
                      {marks && <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "#C9A84C" }}>{marks}pts</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* ── Prizes ── */}
      {ev.prizes && (
        <section style={{ padding: "6rem 3rem 0" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>Prize Pool</p>
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            {ev.prizes.map((prize, i) => (
              <div key={i} style={{ flex: "1 1 200px", background: i === 0 ? "rgba(201,168,76,0.07)" : "rgba(255,255,255,0.02)", border: `1px solid ${i === 0 ? "rgba(201,168,76,0.25)" : "rgba(255,255,255,0.06)"}`, borderRadius: 12, padding: "1.5rem 2rem", display: "flex", alignItems: "center", gap: "1.2rem" }}>
                <span style={{ fontSize: "2rem" }}>{["🥇", "🥈", "🥉"][i] ?? "🏅"}</span>
                <span style={{ fontWeight: 700, fontSize: "1rem", color: i === 0 ? "#C9A84C" : "#fff" }}>{prize.replace(/^[🥇🥈🥉]\s*/, "")}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section style={{ margin: "6rem 3rem", borderRadius: 16, padding: "4rem 3rem", background: `linear-gradient(135deg, ${ev.color}10 0%, rgba(8,8,8,0.98) 100%)`, border: `1px solid ${ev.color}20`, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${ev.color}07 0%, transparent 70%)`, pointerEvents: "none" }} />
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ev.color, marginBottom: "1rem", position: "relative", zIndex: 1 }}>
          Ready to compete?
        </p>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.02em", marginBottom: "0.8rem", position: "relative", zIndex: 1 }}>
          Register for <span style={{ color: ev.color }}>{ev.name}</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.35)", marginBottom: "2.5rem", fontSize: "0.9rem", position: "relative", zIndex: 1 }}>
          Acharya Institute of Graduate Studies · AIKYAM 2K26 · Soladevanahalli, Bengaluru
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <Link href={`/events/${ev.slug}/register`} style={{ background: ev.color, color: "#000", padding: "0.9rem 2.5rem", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
            Register Now →
          </Link>
          <Link href="/events" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)", padding: "0.9rem 2.5rem", borderRadius: "50px", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
            ← Browse Events
          </Link>
        </div>
      </section>

      {/* Footer strip */}
      <div style={{ padding: "2rem 3rem", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.04em" }}>
          © 2026 Acharya Institute of Graduate Studies · NAAC A+ · Soladevanahalli, Bengaluru-560107
        </p>
        <Link href="/events" style={{ fontSize: "0.72rem", color: "rgba(201,168,76,0.45)", textDecoration: "none" }}>
          View All Events →
        </Link>
      </div>
    </main>
  );
}
