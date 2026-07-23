"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { events } from "@/lib/events-data";

/* ─────────────────────────────────────────────
   CHECKPOINT DATA
───────────────────────────────────────────── */
interface Checkpoint {
  id: number;
  name: string;
  emoji: string;
  location: string;
  x: number;
  y: number;
  challenge: string;
  clue: string;
  color: string;
}

const CHECKPOINTS: Checkpoint[] = [
  {
    id: 1, name: "Tavern Gate", emoji: "⚓",
    location: "Main Entrance",
    x: 9, y: 68,
    challenge: "Receive your starting scroll. Decode the Tavern Master's shift-cipher carved into the gatepost.",
    clue: "Hint: ROT-3 applied. Every letter is shifted 3 spots forward.",
    color: "#E8C97A"
  },
  {
    id: 2, name: "Binary Ruins", emoji: "🌳",
    location: "The Old Banyan Tree",
    x: 30, y: 30,
    challenge: "Scan the QR code etched onto bark. Convert the binary message to ASCII text before time runs out.",
    clue: "Hint: 01000111 01001111 → each 8-bit block is one character.",
    color: "#A5D6A7"
  },
  {
    id: 3, name: "Cipher Crossroads", emoji: "📚",
    location: "Central Library Steps",
    x: 52, y: 62,
    challenge: "Find the weathered parchment. Use the Caesar Wheel to decrypt the coordinates of the next vault.",
    clue: "Hint: Caesar shift-13. The wheel turns half a revolution.",
    color: "#90CAF9"
  },
  {
    id: 4, name: "Logic Labyrinth", emoji: "💡",
    location: "IT Block Courtyard",
    x: 74, y: 22,
    challenge: "Solve the algorithm carved on the stone tablet. The output reveals the path to the final stage.",
    clue: "Hint: Follow the recursive pattern — think Fibonacci mod 7.",
    color: "#CE93D8"
  },
  {
    id: 5, name: "Treasure Vault", emoji: "🏆",
    location: "Acharya Amphitheatre",
    x: 91, y: 58,
    challenge: "X marks the spot! Assemble your crew, light the beacon, and unlock the heavy golden chest!",
    clue: "Final Clue: The stage hides what the map has led you to find.",
    color: "#FFD700"
  },
];

/* ─────────────────────────────────────────────
   PARTICLE SYSTEM
───────────────────────────────────────────── */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // floating dust particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -(Math.random() * 0.4 + 0.1),
      alpha: Math.random() * 0.5 + 0.1,
      life: Math.random() * 200,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        if (p.life <= 0 || p.y < -10) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.life = Math.random() * 200 + 100;
          p.alpha = Math.random() * 0.5 + 0.1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", inset: 0,
        zIndex: 3, pointerEvents: "none",
        opacity: 0.7,
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ShikariPage() {
  const [loading, setLoading] = useState(true);
  const [loadPct, setLoadPct] = useState(0);
  const [activeTab, setActiveTab] = useState<"briefing" | "bounty" | "code">("briefing");
  const [activeCP, setActiveCP] = useState<Checkpoint>(CHECKPOINTS[0]);
  const [solverQ, setSolverQ] = useState(0);
  const [solverInput, setSolverInput] = useState("");
  const [solverState, setSolverState] = useState<"idle" | "ok" | "fail">("idle");
  const [solverMsg, setSolverMsg] = useState("");
  const [reveal, setReveal] = useState(false);

  const ev = events.find((e) => e.slug === "shikari")!;

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPct((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 18 + 5;
      });
    }, 100);
    const t = setTimeout(() => { setLoading(false); setReveal(true); }, 1500);
    return () => { clearInterval(interval); clearTimeout(t); };
  }, []);

  const handleSolve = (e: React.FormEvent) => {
    e.preventDefault();
    const ans = solverInput.trim().toUpperCase();
    const correct = solverQ === 0 ? "ECHO" : "ACHARYA";
    if (ans === correct) {
      setSolverState("ok");
      setSolverMsg(
        solverQ === 0
          ? "✅ Correct! The gatepost reveals: 'Seek the Banyan's binary heart.'"
          : "✅ Decrypted! The cipher breaks open: The final chest awaits at the Amphitheatre stage."
      );
    } else {
      setSolverState("fail");
      setSolverMsg("❌ Wrong answer. The vault remains sealed. Reconsider the clue...");
    }
  };

  const switchQ = () => {
    setSolverQ((q) => (q === 0 ? 1 : 0));
    setSolverInput("");
    setSolverState("idle");
    setSolverMsg("");
  };

  return (
    <>
      {/* ──────────────────────────────── GLOBAL STYLES ──────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@500;700;900&family=Pirata+One&family=Special+Elite&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

        :root{
          --gold:        #D4AF37;
          --gold-bright: #FFE566;
          --gold-dim:    #8A6E20;
          --bg:          #06050A;
          --surface:     #0D0C11;
          --surface2:    #13121A;
          --border:      rgba(212,175,55,0.18);
          --border2:     rgba(212,175,55,0.08);
          --red:         #B91C1C;
          --txt:         #DDD6C8;
          --txt-dim:     rgba(221,214,200,0.55);
          --shadow-gold: 0 0 30px rgba(212,175,55,0.12);
        }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:rgba(0,0,0,0.3)}
        ::-webkit-scrollbar-thumb{background:var(--gold-dim);border-radius:3px}

        /* ── Page wrapper ── */
        .sh-wrap{
          min-height:100vh;
          background:var(--bg);
          color:var(--txt);
          font-family:'Outfit',sans-serif;
          overflow-x:hidden;
          position:relative;
        }

        /* ── AMBIENT BG layers ── */
        .sh-bg-img{
          position:fixed;inset:0;z-index:1;pointer-events:none;
          background:url('/bg/shikari_rotated.webp') center/cover no-repeat;
          opacity:0.08;
          filter:sepia(0.6) contrast(1.1);
          will-change:transform;
        }
        .sh-bg-vignette{
          position:fixed;inset:0;z-index:2;pointer-events:none;
          background:radial-gradient(ellipse 80% 80% at 50% 50%, rgba(6,5,10,0.2) 0%, rgba(6,5,10,0.92) 100%);
        }
        .sh-bg-grain{
          position:fixed;inset:0;z-index:2;pointer-events:none;
          opacity:0.025;
          background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        /* radial glow centers */
        .sh-glow-center{
          position:fixed;top:40%;left:50%;translate:-50% -50%;
          width:900px;height:900px;border-radius:50%;
          background:radial-gradient(circle, rgba(180,140,20,0.04) 0%, transparent 70%);
          pointer-events:none;z-index:2;
        }

        /* ── LOADER ── */
        .sh-loader{
          position:fixed;inset:0;z-index:9999;
          background:#06050A;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          transition:opacity .7s ease, visibility .7s ease;
        }
        .sh-loader.done{opacity:0;visibility:hidden}
        .loader-compass{
          width:90px;height:90px;position:relative;margin-bottom:28px;
        }
        .loader-compass-ring{
          position:absolute;inset:0;border-radius:50%;
          border:2px solid rgba(212,175,55,0.08);
          border-top:2px solid var(--gold);
          animation:spin 1.4s cubic-bezier(.5,.1,.5,.9) infinite;
        }
        .loader-compass-ring2{
          position:absolute;inset:8px;border-radius:50%;
          border:1.5px solid rgba(212,175,55,0.06);
          border-bottom:1.5px solid var(--gold-dim);
          animation:spin 2.2s linear infinite reverse;
        }
        .loader-n{
          position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
          font-family:'Cinzel',serif;font-weight:900;font-size:1.3rem;
          color:var(--gold);text-shadow:0 0 12px rgba(212,175,55,0.6);
        }
        @keyframes spin{to{transform:rotate(360deg)}}

        .loader-bar-wrap{
          width:260px;height:2px;background:rgba(212,175,55,0.08);border-radius:1px;
          overflow:hidden;
        }
        .loader-bar-fill{
          height:100%;background:linear-gradient(90deg, var(--gold-dim), var(--gold), var(--gold-bright));
          border-radius:1px;
          transition:width .12s ease;
          box-shadow:0 0 8px rgba(212,175,55,0.5);
        }
        .loader-label{
          margin-top:14px;
          font-family:'Special Elite',monospace;font-size:0.82rem;
          color:var(--txt-dim);letter-spacing:3px;
        }
        .loader-title-text{
          font-family:'Pirata One',cursive;font-size:2rem;color:var(--gold);
          margin-bottom:18px;letter-spacing:4px;
          text-shadow:0 0 20px rgba(212,175,55,0.4);
        }

        /* ── NAVBAR ── */
        .sh-nav{
          position:fixed;top:0;left:0;right:0;z-index:100;
          display:flex;align-items:center;justify-content:space-between;
          padding:0 5%;
          height:68px;
          background:rgba(6,5,10,0.75);
          backdrop-filter:blur(18px);
          border-bottom:1px solid var(--border);
        }
        .nav-logo{
          font-family:'Cinzel',serif;font-weight:900;font-size:1.1rem;
          letter-spacing:3px;color:#fff;text-decoration:none;
          display:flex;align-items:center;gap:12px;
        }
        .nav-logo-gem{
          width:32px;height:32px;
          background:linear-gradient(135deg,var(--gold-bright),var(--gold),var(--gold-dim));
          border-radius:4px;
          display:flex;align-items:center;justify-content:center;
          font-size:1rem;box-shadow:0 0 10px rgba(212,175,55,0.35);
        }
        .nav-logo span{color:var(--gold);}
        .nav-chip{
          display:flex;align-items:center;gap:8px;padding:6px 14px;
          border:1px solid rgba(163,29,29,0.4);
          background:rgba(163,29,29,0.08);border-radius:50px;
          font-family:'Special Elite',monospace;font-size:0.72rem;
          color:#f87171;letter-spacing:2px;
        }
        .nav-chip-dot{
          width:6px;height:6px;background:#ef4444;border-radius:50%;
          box-shadow:0 0 8px #ef4444;
          animation:pulse-dot 1.5s ease infinite alternate;
        }
        @keyframes pulse-dot{0%{opacity:.4;scale:0.9}100%{opacity:1;scale:1.1}}
        .nav-back-btn{
          font-family:'Cinzel',serif;font-size:0.78rem;font-weight:700;
          color:var(--txt-dim);text-decoration:none;letter-spacing:1.5px;
          display:flex;align-items:center;gap:7px;
          transition:color .2s;padding:6px 0;
        }
        .nav-back-btn:hover{color:var(--gold);}

        /* ── HERO ── */
        .sh-hero{
          position:relative;min-height:100vh;z-index:10;
          display:flex;align-items:center;
          padding:0 5%;padding-top:68px;
        }
        .hero-grid{
          width:100%;max-width:1440px;margin:0 auto;
          display:grid;grid-template-columns:1fr 1fr;
          gap:60px;align-items:center;
          padding:60px 0;
        }
        @media(max-width:1080px){
          .hero-grid{grid-template-columns:1fr;gap:40px;padding:40px 0;}
        }

        /* left hero text */
        .hero-left{display:flex;flex-direction:column;gap:0;}

        .hero-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-family:'Special Elite',monospace;font-size:0.82rem;
          color:var(--gold);letter-spacing:3px;text-transform:uppercase;
          margin-bottom:16px;
        }
        .hero-eyebrow-line{height:1px;width:50px;background:var(--gold);opacity:0.5;}

        .hero-h1{
          font-family:'Pirata One',cursive;
          font-size:clamp(4rem,8vw,8rem);
          color:var(--gold);
          line-height:.92;letter-spacing:2px;
          text-shadow:
            0 0 40px rgba(212,175,55,0.25),
            0 4px 0 rgba(0,0,0,0.8),
            2px 2px 0 rgba(90,60,0,0.8);
          margin-bottom:10px;
        }

        .hero-h2{
          font-family:'Cinzel',serif;font-weight:700;
          font-size:clamp(1rem,2vw,1.5rem);
          letter-spacing:4px;color:rgba(255,255,255,0.8);
          margin-bottom:24px;
          text-transform:uppercase;
        }
        .hero-divider{
          height:1px;
          background:linear-gradient(to right, transparent, var(--gold-dim), transparent);
          margin:8px 0 28px;
        }

        .hero-tagline{
          font-family:'Special Elite',monospace;font-size:1.05rem;
          color:var(--txt-dim);line-height:1.65;
          border-left:3px solid var(--gold-dim);
          padding-left:18px;margin-bottom:40px;
        }
        .hero-tagline strong{color:var(--gold);}

        .hero-meta-row{
          display:flex;gap:16px;flex-wrap:wrap;margin-bottom:44px;
        }
        .hero-meta-chip{
          padding:10px 20px;
          border:1px solid var(--border);
          background:rgba(255,255,255,0.025);
          border-radius:6px;
          display:flex;flex-direction:column;gap:3px;
          position:relative;overflow:hidden;
        }
        .hero-meta-chip::before{
          content:'';position:absolute;top:0;left:0;width:100%;height:2px;
          background:linear-gradient(to right,var(--gold-dim),var(--gold));
        }
        .meta-lbl{font-family:'Special Elite',monospace;font-size:0.66rem;color:var(--txt-dim);letter-spacing:2px;text-transform:uppercase;}
        .meta-val{font-family:'Cinzel',serif;font-weight:700;font-size:1rem;color:#fff;}

        .hero-cta-row{display:flex;gap:14px;flex-wrap:wrap;align-items:center;}
        .btn-primary{
          display:inline-flex;align-items:center;gap:10px;
          font-family:'Cinzel',serif;font-weight:800;font-size:0.9rem;letter-spacing:2px;
          color:#000;text-decoration:none;
          background:linear-gradient(135deg,var(--gold-bright) 0%,var(--gold) 50%,var(--gold-dim) 100%);
          padding:14px 32px;border-radius:6px;
          box-shadow:0 4px 20px rgba(212,175,55,0.35), 0 1px 0 rgba(255,255,255,0.2) inset;
          transition:all .25s;border:none;cursor:pointer;
          position:relative;overflow:hidden;
        }
        .btn-primary::after{
          content:'';position:absolute;inset:0;
          background:linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 60%);
          pointer-events:none;
        }
        .btn-primary:hover{
          box-shadow:0 6px 28px rgba(212,175,55,0.5), 0 1px 0 rgba(255,255,255,0.2) inset;
          transform:translateY(-2px);
        }
        .btn-secondary{
          display:inline-flex;align-items:center;gap:8px;
          font-family:'Cinzel',serif;font-weight:700;font-size:0.85rem;letter-spacing:1.5px;
          color:var(--gold-dim);text-decoration:none;
          border:1px solid var(--border);
          padding:14px 24px;border-radius:6px;
          transition:all .25s;background:transparent;cursor:pointer;
        }
        .btn-secondary:hover{border-color:var(--gold-dim);color:var(--gold);background:rgba(212,175,55,0.04);}

        /* right hero IMAGE FRAME */
        .hero-right{position:relative;display:flex;align-items:center;justify-content:center;}
        .frame-outer{
          position:relative;width:100%;max-width:580px;
          padding:14px;
          background:linear-gradient(145deg,#7a6022,#2e2510,#5a4418,#1e1808,#7a6022);
          border-radius:10px;
          box-shadow:
            0 30px 60px rgba(0,0,0,0.8),
            0 0 40px rgba(180,140,20,0.08),
            inset 0 2px 4px rgba(255,230,100,0.15);
        }
        .frame-inner{
          border:3px double rgba(180,140,20,0.5);
          border-radius:4px;overflow:hidden;
          position:relative;aspect-ratio:4/3;
        }
        .frame-img{
          width:100%;height:100%;
          object-fit:cover;object-position:center;
          display:block;
          filter:sepia(0.4) contrast(1.2) brightness(0.95) saturate(1.1);
          transition:all .6s ease;
        }
        .frame-outer:hover .frame-img{
          filter:sepia(0.1) contrast(1.1) brightness(1.05) saturate(1.2);
          transform:scale(1.03);
        }
        .frame-overlay-glow{
          position:absolute;inset:0;pointer-events:none;
          background:radial-gradient(ellipse at center, rgba(180,140,20,0.08) 0%, transparent 70%);
        }
        .frame-corner{
          position:absolute;width:22px;height:22px;
          background:var(--gold-dim);
        }
        .frame-corner.tl{top:0;left:0;clip-path:polygon(0 0,100% 0,0 100%);}
        .frame-corner.tr{top:0;right:0;clip-path:polygon(0 0,100% 0,100% 100%);}
        .frame-corner.bl{bottom:0;left:0;clip-path:polygon(0 0,0 100%,100% 100%);}
        .frame-corner.br{bottom:0;right:0;clip-path:polygon(100% 0,0 100%,100% 100%);}
        .frame-nameplate{
          position:absolute;bottom:-1px;left:50%;translate:-50% 0;
          background:linear-gradient(to bottom,#c8a430,#8a6a1a);
          border:1px solid #3e2e08;
          color:#1a0f00;
          padding:5px 22px;
          font-family:'Cinzel',serif;font-weight:900;font-size:0.7rem;
          letter-spacing:3px;border-radius:2px 2px 0 0;
          box-shadow:0 -4px 10px rgba(0,0,0,0.5);
          white-space:nowrap;z-index:5;
        }
        /* floating badges on frame */
        .frame-badge{
          position:absolute;
          background:rgba(6,5,10,0.9);
          border:1px solid var(--border);
          border-radius:6px;padding:8px 14px;
          backdrop-filter:blur(6px);
          font-family:'Special Elite',monospace;font-size:0.78rem;
          display:flex;align-items:center;gap:8px;
          box-shadow:0 8px 20px rgba(0,0,0,0.6);
        }
        .frame-badge-dot{
          width:8px;height:8px;border-radius:50%;
          background:var(--gold);box-shadow:0 0 8px var(--gold);
          animation:pulse-dot 2s ease infinite alternate;
        }

        /* ── SECTION COMMON ── */
        .sh-section{
          position:relative;z-index:10;
          padding:80px 5%;
        }
        .sh-section-inner{max-width:1440px;margin:0 auto;}
        .section-badge{
          display:inline-flex;align-items:center;gap:10px;
          font-family:'Cinzel',serif;font-size:0.72rem;font-weight:700;
          letter-spacing:3px;color:var(--gold);text-transform:uppercase;
          border:1px solid var(--border);padding:6px 14px;border-radius:50px;
          background:rgba(212,175,55,0.03);
          margin-bottom:18px;
        }
        .section-heading{
          font-family:'Cinzel Decorative',serif;font-weight:700;
          font-size:clamp(1.6rem,3vw,2.5rem);
          color:#fff;letter-spacing:1px;margin-bottom:12px;
        }
        .section-sub{
          font-size:1rem;color:var(--txt-dim);line-height:1.7;
          max-width:550px;margin-bottom:50px;
        }

        /* ── TREASURE MAP SECTION ── */
        .map-section{
          background:var(--surface);
          border-top:1px solid var(--border2);
          border-bottom:1px solid var(--border2);
        }
        .map-layout{
          display:grid;grid-template-columns:1fr 380px;
          gap:30px;align-items:start;
        }
        @media(max-width:1000px){.map-layout{grid-template-columns:1fr;}}

        .map-canvas-wrap{
          position:relative;border-radius:8px;overflow:hidden;
          border:1px solid var(--border);
          background:#0a0908;
          box-shadow:0 20px 50px rgba(0,0,0,0.7);
        }
        .map-bg-image{
          position:absolute;inset:0;
          background:url('/bg/shikari_rotated.webp') center/cover;
          opacity:0.18;
          filter:sepia(0.9) contrast(1.2);
        }
        .map-bg-topo{
          position:absolute;inset:0;
          background:repeating-linear-gradient(
            30deg,
            transparent,transparent 28px,
            rgba(212,175,55,0.025) 28px,rgba(212,175,55,0.025) 29px
          );
        }
        .map-svg-layer{
          position:relative;z-index:3;
          width:100%;display:block;
        }
        .map-header{
          display:flex;justify-content:space-between;align-items:center;
          padding:16px 20px;
          border-bottom:1px solid var(--border2);
          font-family:'Cinzel',serif;font-size:0.8rem;font-weight:700;
          letter-spacing:2px;color:var(--gold);
        }

        /* CP detail panel */
        .cp-panel{
          background:var(--surface2);
          border:1px solid var(--border);
          border-radius:8px;
          overflow:hidden;
          box-shadow:0 15px 35px rgba(0,0,0,0.5);
        }
        .cp-panel-header{
          padding:18px 22px 14px;
          border-bottom:1px solid var(--border2);
        }
        .cp-panel-stage{
          font-family:'Special Elite',monospace;font-size:0.7rem;
          color:var(--txt-dim);letter-spacing:3px;text-transform:uppercase;
          margin-bottom:6px;
        }
        .cp-panel-name{
          font-family:'Cinzel',serif;font-weight:900;font-size:1.4rem;
          line-height:1.1;
        }
        .cp-panel-loc{
          display:flex;align-items:center;gap:6px;
          font-size:0.82rem;color:var(--txt-dim);margin-top:6px;
        }
        .cp-panel-body{padding:22px;}
        .cp-panel-section-label{
          font-family:'Special Elite',monospace;font-size:0.7rem;
          color:var(--txt-dim);letter-spacing:2px;text-transform:uppercase;
          margin-bottom:10px;
        }
        .cp-panel-challenge{
          font-size:0.95rem;line-height:1.7;color:var(--txt);
          margin-bottom:22px;
        }
        .cp-panel-hint-box{
          border-radius:6px;padding:14px 16px;
          border-left:3px solid var(--gold-dim);
          background:rgba(212,175,55,0.04);
          font-family:'Special Elite',monospace;font-size:0.84rem;
          color:var(--gold);line-height:1.55;
        }

        /* ── DETAILS 3-COL ── */
        .details-grid{
          display:grid;grid-template-columns:1fr 1fr;
          gap:25px;margin-bottom:25px;
        }
        @media(max-width:700px){.details-grid{grid-template-columns:1fr;}}

        /* Captain's Log Tabs */
        .log-wrap{
          background:var(--surface);border:1px solid var(--border);
          border-radius:10px;overflow:hidden;
          box-shadow:0 20px 50px rgba(0,0,0,0.5);
        }
        .log-tabs{display:flex;border-bottom:1px solid var(--border2);}
        .log-tab{
          flex:1;padding:16px 10px;
          background:transparent;border:none;cursor:pointer;
          font-family:'Cinzel',serif;font-weight:700;font-size:0.78rem;
          letter-spacing:1.5px;color:var(--txt-dim);
          text-transform:uppercase;
          display:flex;align-items:center;justify-content:center;gap:8px;
          transition:all .2s;border-bottom:2px solid transparent;
          margin-bottom:-1px;
        }
        .log-tab:hover{color:var(--gold);background:rgba(212,175,55,0.02);}
        .log-tab.on{color:var(--gold);border-bottom-color:var(--gold);background:rgba(212,175,55,0.03);}
        .log-body{padding:28px 30px;min-height:300px;}

        /* Briefing tab */
        .brief-desc{
          font-size:0.96rem;line-height:1.75;color:var(--txt);
          margin-bottom:28px;
        }
        .brief-stats{
          display:grid;grid-template-columns:1fr 1fr;gap:14px;
        }
        .brief-stat{
          padding:16px;border:1px solid var(--border2);
          border-radius:6px;background:rgba(255,255,255,0.015);
          position:relative;overflow:hidden;
        }
        .brief-stat::before{
          content:'';position:absolute;top:0;left:0;bottom:0;width:3px;
          background:var(--gold-dim);
        }
        .bslbl{font-family:'Special Elite',monospace;font-size:0.68rem;color:var(--txt-dim);letter-spacing:2px;text-transform:uppercase;}
        .bsval{font-family:'Cinzel',serif;font-weight:700;font-size:1.1rem;color:#fff;margin-top:4px;}

        /* Prizes tab */
        .prize-list{display:flex;flex-direction:column;gap:14px;}
        .prize-row{
          display:flex;align-items:center;gap:18px;
          padding:16px 20px;border-radius:6px;
          border:1px solid var(--border2);
          background:rgba(255,255,255,0.015);
          transition:all .2s;
        }
        .prize-row:hover{border-color:var(--border);background:rgba(212,175,55,0.03);transform:translateX(4px);}
        .prize-emoji{font-size:2rem;flex-shrink:0;}
        .prize-text{flex:1;}
        .prize-rank{font-family:'Cinzel',serif;font-weight:700;font-size:0.85rem;color:var(--txt-dim);letter-spacing:1px;}
        .prize-amt{font-family:'Cinzel',serif;font-weight:900;font-size:1.45rem;color:var(--gold);}

        /* Rules tab */
        .rules-list{display:flex;flex-direction:column;gap:12px;}
        .rule-item{
          display:flex;align-items:flex-start;gap:15px;
          padding:14px 18px;border-radius:6px;
          border:1px solid var(--border2);
          background:rgba(255,255,255,0.01);
          transition:all .2s;
        }
        .rule-item:hover{border-color:rgba(185,28,28,0.25);background:rgba(185,28,28,0.03);}
        .rule-num{
          font-family:'Cinzel',serif;font-weight:900;font-size:0.95rem;
          color:var(--red);flex-shrink:0;min-width:28px;
          padding-top:1px;
        }
        .rule-txt{font-size:0.9rem;line-height:1.6;color:var(--txt);}

        /* ── CLUE SOLVER ── */
        .solver-section{
          background:linear-gradient(180deg,var(--bg) 0%, var(--surface) 100%);
        }
        .solver-grid{
          display:grid;grid-template-columns:1fr 1fr;
          gap:30px;align-items:stretch;
        }
        @media(max-width:900px){.solver-grid{grid-template-columns:1fr;}}

        .solver-card{
          background:var(--surface2);border:1px solid var(--border);
          border-radius:10px;padding:30px;
          box-shadow:0 15px 35px rgba(0,0,0,0.5);
          display:flex;flex-direction:column;gap:18px;
        }
        .solver-heading{
          display:flex;align-items:center;justify-content:space-between;
          padding-bottom:18px;border-bottom:1px solid var(--border2);
        }
        .solver-heading-txt{
          font-family:'Cinzel',serif;font-weight:800;font-size:1.05rem;
          color:var(--gold);letter-spacing:1px;
        }
        .solver-switch{
          font-family:'Special Elite',monospace;font-size:0.72rem;
          color:var(--txt-dim);background:transparent;
          border:1px solid var(--border);padding:5px 12px;border-radius:20px;
          cursor:pointer;transition:all .2s;
        }
        .solver-switch:hover{border-color:var(--gold-dim);color:var(--gold);}

        .riddle-box{
          font-family:'Special Elite',monospace;font-size:0.95rem;
          line-height:1.7;color:var(--txt);
          background:rgba(0,0,0,0.4);
          padding:20px;border-radius:6px;
          border-left:3px solid var(--red);
          flex:1;
        }
        .riddle-cipher{
          display:flex;justify-content:center;align-items:center;
          font-family:'Special Elite',monospace;font-size:2rem;letter-spacing:6px;
          color:var(--gold-bright);
          background:rgba(212,175,55,0.04);
          border:1px dashed rgba(212,175,55,0.2);
          border-radius:6px;padding:24px;
          text-shadow:0 0 15px rgba(212,175,55,0.3);
          font-weight:bold;
        }

        .solver-form{display:flex;gap:10px;}
        .solver-input{
          flex:1;
          background:#060509;border:1px solid var(--border);
          border-radius:6px;color:#fff;
          padding:12px 18px;
          font-family:'Special Elite',monospace;font-size:0.95rem;
          outline:none;transition:border-color .2s;
        }
        .solver-input:focus{border-color:var(--gold);}
        .solver-input::placeholder{color:var(--txt-dim);}
        .solver-btn{
          background:linear-gradient(135deg,var(--gold-bright),var(--gold));
          color:#000;border:none;border-radius:6px;
          font-family:'Cinzel',serif;font-weight:800;font-size:0.85rem;
          padding:12px 22px;cursor:pointer;
          transition:all .2s;white-space:nowrap;
        }
        .solver-btn:hover{box-shadow:0 0 16px rgba(212,175,55,0.4);transform:translateY(-1px);}

        .solver-result{
          padding:14px 18px;border-radius:6px;
          font-family:'Special Elite',monospace;font-size:0.88rem;
          line-height:1.5;
          animation:fadeSlide .3s ease;
        }
        @keyframes fadeSlide{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
        .solver-result.ok{background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.3);color:#4ade80;}
        .solver-result.fail{background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.3);color:#f87171;}

        /* hint card */
        .hint-card{
          background:var(--surface2);border:1px solid var(--border);
          border-radius:10px;padding:30px;
          box-shadow:0 15px 35px rgba(0,0,0,0.5);
          display:flex;flex-direction:column;gap:20px;
        }
        .hint-steps{display:flex;flex-direction:column;gap:14px;}
        .hint-step{
          display:flex;gap:15px;align-items:flex-start;
          padding:14px;border-radius:6px;
          background:rgba(255,255,255,0.012);
          border:1px solid var(--border2);
          transition:all .2s;
        }
        .hint-step:hover{border-color:var(--border);background:rgba(212,175,55,0.02);}
        .hint-step-num{
          width:30px;height:30px;border-radius:50%;flex-shrink:0;
          background:rgba(212,175,55,0.08);border:1px solid var(--border);
          display:flex;align-items:center;justify-content:center;
          font-family:'Cinzel',serif;font-weight:900;font-size:0.82rem;color:var(--gold);
        }
        .hint-step-txt{font-size:0.9rem;line-height:1.6;color:var(--txt);padding-top:4px;}

        /* ── FOOTER CTA STRIP ── */
        .sh-cta{
          position:relative;z-index:10;padding:80px 5%;
          border-top:1px solid var(--border2);
        }
        .cta-inner{
          max-width:1440px;margin:0 auto;
          display:flex;align-items:center;justify-content:space-between;
          gap:30px;flex-wrap:wrap;
        }
        .cta-text-block{}
        .cta-title{
          font-family:'Cinzel Decorative',serif;font-weight:700;
          font-size:clamp(1.5rem,3vw,2.2rem);color:#fff;margin-bottom:8px;
        }
        .cta-title span{color:var(--gold);}
        .cta-sub{font-size:0.9rem;color:var(--txt-dim);}
        .cta-actions{display:flex;gap:14px;align-items:center;flex-wrap:wrap;}

        /* ── PAGE FOOTER ── */
        .sh-foot{
          border-top:1px solid var(--border2);padding:24px 5%;z-index:10;position:relative;
          display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;
        }
        .sh-foot p{font-size:0.72rem;color:rgba(200,193,185,0.3);letter-spacing:.5px;}
        .sh-foot a{font-size:0.72rem;color:rgba(212,175,55,0.4);text-decoration:none;}
        .sh-foot a:hover{color:var(--gold);}

        /* ── PAGE REVEAL ── */
        .reveal{animation:revealUp .7s cubic-bezier(0.25,1,0.5,1) both;}
        @keyframes revealUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .reveal-d1{animation-delay:.05s}
        .reveal-d2{animation-delay:.1s}
        .reveal-d3{animation-delay:.15s}
        .reveal-d4{animation-delay:.2s}
        .reveal-d5{animation-delay:.25s}
      `}</style>

      {/* ─── LOADER ─── */}
      <div className={`sh-loader ${!loading ? "done" : ""}`}>
        <div className="loader-title-text">SHIKARI</div>
        <div className="loader-compass">
          <div className="loader-compass-ring" />
          <div className="loader-compass-ring2" />
          <div className="loader-n">☽</div>
        </div>
        <div className="loader-bar-wrap">
          <div className="loader-bar-fill" style={{ width: `${Math.min(loadPct, 100)}%` }} />
        </div>
        <div className="loader-label">DRAWING THE MAP…</div>
      </div>

      <div className="sh-wrap" style={{ opacity: reveal ? 1 : 0, transition: "opacity .5s ease .3s" }}>

        {/* ─── AMBIENT LAYERS ─── */}
        <div className="sh-bg-img" />
        <div className="sh-bg-vignette" />
        <div className="sh-bg-grain" />
        <div className="sh-glow-center" />
        <Particles />

        {/* ─── NAV ─── */}
        <nav className="sh-nav">
          <Link href="/events" className="nav-back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            All Events
          </Link>
          <Link href="/" className="nav-logo">
            <div className="nav-logo-gem">⚓</div>
            AIK<span>YAM</span>&nbsp;2K26
          </Link>
          <div className="nav-chip">
            <span className="nav-chip-dot" />
            LIVE HUNT
          </div>
        </nav>

        {/* ─────────────────────────────────────────────
            HERO
        ───────────────────────────────────────────── */}
        <section className="sh-hero">
          <div className="hero-grid">

            {/* LEFT: Text */}
            <div className="hero-left">
              <div className={`hero-eyebrow ${reveal ? "reveal reveal-d1" : ""}`}>
                <span className="hero-eyebrow-line" />
                {ev?.eventName || "Treasure Hunt — Tech Quest"}
              </div>

              <h1 className={`hero-h1 ${reveal ? "reveal reveal-d2" : ""}`}>
                {ev?.name || "SHIKARI"}
              </h1>

              <h2 className={`hero-h2 ${reveal ? "reveal reveal-d2" : ""}`}>
                Campus Expedition
              </h2>

              <div className={`hero-divider ${reveal ? "reveal reveal-d2" : ""}`} />

              <p className={`hero-tagline ${reveal ? "reveal reveal-d3" : ""}`}>
                &ldquo;{ev?.tagline || "The campus is your map. Are you the hunter?"}&rdquo;<br />
                <strong>Decode clues. Navigate checkpoints. Claim the treasure.</strong>
              </p>

              <div className={`hero-meta-row ${reveal ? "reveal reveal-d3" : ""}`}>
                <div className="hero-meta-chip">
                  <span className="meta-lbl">Crew Size</span>
                  <span className="meta-val">{ev?.teamSize || "4 Hunters"}</span>
                </div>
                <div className="hero-meta-chip">
                  <span className="meta-lbl">Duration</span>
                  <span className="meta-val">{ev?.duration || "~2–3 Hours"}</span>
                </div>
                <div className="hero-meta-chip">
                  <span className="meta-lbl">Prize Pool</span>
                  <span className="meta-val">₹6,000</span>
                </div>
                <div className="hero-meta-chip">
                  <span className="meta-lbl">Checkpoints</span>
                  <span className="meta-val">5 Stages</span>
                </div>
              </div>

              <div className={`hero-cta-row ${reveal ? "reveal reveal-d4" : ""}`}>
                <Link href={`/events/${ev?.slug || "shikari"}/register`} className="btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Sign the Articles
                </Link>
                <Link href="/events" className="btn-secondary">
                  ← Browse Events
                </Link>
              </div>
            </div>

            {/* RIGHT: Frame */}
            <div className={`hero-right ${reveal ? "reveal reveal-d3" : ""}`}>
              <div className="frame-outer">
                <div className="frame-inner">
                  <img
                    src="/bg/shikari_rotated.webp"
                    alt="Shikari Treasure Hunt"
                    className="frame-img"
                  />
                  <div className="frame-overlay-glow" />
                  <div className="frame-corner tl" />
                  <div className="frame-corner tr" />
                  <div className="frame-corner bl" />
                  <div className="frame-corner br" />
                  <div className="frame-nameplate">SHIKARI — CAMPUS EXPEDITION</div>
                </div>
                {/* floating info badges */}
                <div className="frame-badge" style={{ top: "-14px", right: "18px" }}>
                  <span className="frame-badge-dot" />
                  <span style={{ fontFamily: "'Special Elite', monospace", fontSize: "0.75rem", color: "#D4AF37" }}>
                    Hunt Begins: Day 1
                  </span>
                </div>
                <div className="frame-badge" style={{ bottom: "-14px", left: "18px" }}>
                  <span style={{ fontSize: "1rem" }}>🏆</span>
                  <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: "0.8rem", color: "#fff" }}>
                    ₹3,000 Top Prize
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────
            INTERACTIVE TREASURE MAP
        ───────────────────────────────────────────── */}
        <section className="sh-section map-section">
          <div className="sh-section-inner">
            <div className="section-badge">🗺️ Campus Trail Map</div>
            <h2 className="section-heading">Exploration Chart</h2>
            <p className="section-sub">
              Five hidden checkpoints across campus. Click a waypoint on the map to reveal the challenge waiting at that location.
            </p>

            <div className="map-layout">
              {/* Map SVG Canvas */}
              <div className="map-canvas-wrap">
                <div className="map-bg-image" />
                <div className="map-bg-topo" />
                <div className="map-header">
                  <span>🗺️ CAMPUS EXPLORATION TRAIL</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--txt-dim)", letterSpacing: "1px" }}>
                    Click any waypoint
                  </span>
                </div>
                <svg
                  viewBox="0 0 900 420"
                  className="map-svg-layer"
                  style={{ height: "380px" }}
                >
                  {/* decorative grid */}
                  <defs>
                    <pattern id="grid" width="45" height="45" patternUnits="userSpaceOnUse">
                      <path d="M 45 0 L 0 0 0 45" fill="none" stroke="rgba(212,175,55,0.04)" strokeWidth="0.8"/>
                    </pattern>
                  </defs>
                  <rect width="900" height="420" fill="url(#grid)" />

                  {/* Animated trail path */}
                  <path
                    d="M 81 285 C 180 180 240 140 270 126 S 430 180 468 260 C 500 330 570 290 666 93 C 720 0 780 160 819 243"
                    fill="none"
                    stroke="rgba(180,140,20,0.3)"
                    strokeWidth="4"
                    strokeDasharray="10 10"
                  />
                  <path
                    d="M 81 285 C 180 180 240 140 270 126 S 430 180 468 260 C 500 330 570 290 666 93 C 720 0 780 160 819 243"
                    fill="none"
                    stroke="rgba(255,229,102,0.7)"
                    strokeWidth="2.5"
                    strokeDasharray="12 28"
                    strokeDashoffset="0"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      from="0,0" to="-300,0"
                      dur="8s" repeatCount="indefinite"
                    />
                  </path>

                  {/* Checkpoint markers */}
                  {CHECKPOINTS.map((cp) => {
                    const x = (cp.x / 100) * 838 + 45;
                    const y = (cp.y / 100) * 340 + 40;
                    const isActive = activeCP.id === cp.id;
                    return (
                      <g
                        key={cp.id}
                        onClick={() => setActiveCP(cp)}
                        style={{ cursor: "pointer" }}
                      >
                        {/* pulse ring if active */}
                        {isActive && (
                          <>
                            <circle cx={x} cy={y} r={26} fill="none"
                              stroke={cp.color} strokeWidth="1" opacity="0.3">
                              <animate attributeName="r" values="20;32;20" dur="2s" repeatCount="indefinite" />
                              <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                            </circle>
                          </>
                        )}
                        {/* outer ring */}
                        <circle cx={x} cy={y} r={isActive ? 18 : 14}
                          fill={isActive ? cp.color : "rgba(20,18,15,0.9)"}
                          stroke={cp.color}
                          strokeWidth={isActive ? 2.5 : 1.5}
                          style={{ transition: "all .35s", filter: isActive ? `drop-shadow(0 0 8px ${cp.color}99)` : "none" }}
                        />
                        {/* inner dot */}
                        <circle cx={x} cy={y} r={isActive ? 7 : 5}
                          fill={isActive ? "#000" : cp.color}
                          opacity={0.9}
                          style={{ transition: "all .35s" }}
                        />
                        {/* emoji label */}
                        <text x={x} y={y - 28} textAnchor="middle"
                          fill="#fff" fontSize={isActive ? "14" : "11"}
                          fontFamily="'Cinzel', serif" fontWeight="bold"
                          style={{ textShadow: "0 2px 6px rgba(0,0,0,1)", transition: "all .35s" }}>
                          {cp.name}
                        </text>
                        <text x={x} y={y + 6} textAnchor="middle"
                          fill={isActive ? "#000" : cp.color}
                          fontSize={isActive ? "13" : "10"}
                          style={{ userSelect: "none", transition: "all .35s" }}>
                          {cp.id}
                        </text>
                      </g>
                    );
                  })}

                  {/* AIKYAM watermark */}
                  <text x="450" y="370" textAnchor="middle"
                    fill="rgba(212,175,55,0.04)"
                    fontSize="80" fontFamily="'Cinzel', serif" fontWeight="900"
                    letterSpacing="12">
                    AIKYAM
                  </text>
                </svg>
              </div>

              {/* CP Detail Panel */}
              <div className="cp-panel">
                <div className="cp-panel-header">
                  <div className="cp-panel-stage">Stage {String(activeCP.id).padStart(2, "0")} / 05</div>
                  <div className="cp-panel-name" style={{ color: activeCP.color }}>
                    {activeCP.emoji} {activeCP.name}
                  </div>
                  <div className="cp-panel-loc">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.5 }}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                    {activeCP.location}
                  </div>
                </div>
                <div className="cp-panel-body">
                  <div className="cp-panel-section-label">Challenge</div>
                  <p className="cp-panel-challenge">{activeCP.challenge}</p>
                  <div className="cp-panel-section-label">Clue Hint</div>
                  <div className="cp-panel-hint-box">{activeCP.clue}</div>
                </div>
                {/* Stage progress dots */}
                <div style={{ padding: "16px 22px", borderTop: "1px solid var(--border2)", display: "flex", gap: "8px", alignItems: "center" }}>
                  {CHECKPOINTS.map((cp) => (
                    <button
                      key={cp.id}
                      onClick={() => setActiveCP(cp)}
                      style={{
                        width: activeCP.id === cp.id ? "28px" : "10px",
                        height: "10px",
                        borderRadius: "5px",
                        background: activeCP.id === cp.id ? cp.color : "rgba(255,255,255,0.08)",
                        border: "none", cursor: "pointer",
                        transition: "all .3s",
                        boxShadow: activeCP.id === cp.id ? `0 0 8px ${cp.color}88` : "none",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            CAPTAIN'S LOG + ROUNDS
        ───────────────────────────────────────────── */}
        <section className="sh-section">
          <div className="sh-section-inner">
            <div className="details-grid">

              {/* Captain's Log */}
              <div>
                <div className="section-badge" style={{ marginBottom: "20px" }}>📜 Captain&apos;s Log</div>
                <div className="log-wrap">
                  <div className="log-tabs">
                    <button className={`log-tab ${activeTab === "briefing" ? "on" : ""}`} onClick={() => setActiveTab("briefing")}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                      </svg>
                      Dossier
                    </button>
                    <button className={`log-tab ${activeTab === "bounty" ? "on" : ""}`} onClick={() => setActiveTab("bounty")}>
                      🏴‍☠️ Bounty
                    </button>
                    <button className={`log-tab ${activeTab === "code" ? "on" : ""}`} onClick={() => setActiveTab("code")}>
                      ⚖️ The Code
                    </button>
                  </div>
                  <div className="log-body">
                    {activeTab === "briefing" && (
                      <>
                        <p className="brief-desc">{ev?.description}</p>
                        <div className="brief-stats">
                          <div className="brief-stat">
                            <div className="bslbl">Crew Limit</div>
                            <div className="bsval">{ev?.teamSize}</div>
                          </div>
                          <div className="brief-stat">
                            <div className="bslbl">Time Window</div>
                            <div className="bsval">{ev?.duration}</div>
                          </div>
                          <div className="brief-stat">
                            <div className="bslbl">Checkpoints</div>
                            <div className="bsval">5 Stages</div>
                          </div>
                          <div className="brief-stat">
                            <div className="bslbl">Mode</div>
                            <div className="bsval">On Campus</div>
                          </div>
                        </div>
                      </>
                    )}
                    {activeTab === "bounty" && (
                      <div className="prize-list">
                        {ev?.prizes?.map((p, i) => {
                          const amt = p.includes(":") ? p.split(":")[1].trim() : p;
                          const rank = p.includes(":") ? p.split(":")[0].trim() : `#${i + 1}`;
                          return (
                            <div className="prize-row" key={i}>
                              <span className="prize-emoji">{["🥇","🥈","🥉"][i] ?? "🏅"}</span>
                              <div className="prize-text">
                                <div className="prize-rank">{rank}</div>
                                <div className="prize-amt">{amt}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {activeTab === "code" && (
                      <div className="rules-list">
                        {ev?.rules?.map((r, i) => (
                          <div className="rule-item" key={i}>
                            <span className="rule-num">{String(i + 1).padStart(2, "0")}</span>
                            <span className="rule-txt">{r}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Judging Criteria */}
              <div>
                <div className="section-badge" style={{ marginBottom: "20px" }}>🎯 Judging Criteria</div>
                <div className="log-wrap">
                  <div className="log-body" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {(ev?.judgingCriteria || [
                      "Completion of All Checkpoints",
                      "Accuracy of Challenge Solutions",
                      "Time Taken",
                      "Team Coordination",
                      "Rule Compliance",
                    ]).map((j, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", gap: "14px",
                        padding: "14px 18px",
                        borderRadius: "6px",
                        background: "rgba(255,255,255,0.012)",
                        border: "1px solid var(--border2)",
                        transition: "all .2s",
                      }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "rgba(212,175,55,0.025)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "rgba(255,255,255,0.012)"; }}
                      >
                        <span style={{
                          width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
                          background: "rgba(212,175,55,0.06)",
                          border: "1px solid var(--border)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: "'Cinzel', serif", fontWeight: 900, fontSize: "0.8rem",
                          color: "var(--gold)",
                        }}>
                          {i + 1}
                        </span>
                        <span style={{ fontSize: "0.92rem", color: "var(--txt)" }}>{j}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            CLUE SOLVER SANDBOX
        ───────────────────────────────────────────── */}
        <section className="sh-section solver-section">
          <div className="sh-section-inner">
            <div className="section-badge">🔐 Decryption Desk</div>
            <h2 className="section-heading">Challenge Sandbox</h2>
            <p className="section-sub">
              Get a taste of the hunt. Try deciphering a real sample clue before the event begins.
            </p>

            <div className="solver-grid">
              {/* Puzzle Card */}
              <div className="solver-card">
                <div className="solver-heading">
                  <span className="solver-heading-txt">
                    {solverQ === 0 ? "📜 Riddle Challenge" : "🔢 Cipher Challenge"}
                  </span>
                  <button className="solver-switch" onClick={switchQ}>
                    {solverQ === 0 ? "Try Cipher →" : "← Try Riddle"}
                  </button>
                </div>

                {solverQ === 0 ? (
                  <>
                    <p style={{ fontSize: "0.82rem", color: "var(--txt-dim)", fontFamily: "'Special Elite', monospace" }}>
                      Read the riddle below and type your single-word answer:
                    </p>
                    <div className="riddle-box">
                      &ldquo;I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?&rdquo;
                    </div>
                  </>
                ) : (
                  <>
                    <p style={{ fontSize: "0.82rem", color: "var(--txt-dim)", fontFamily: "'Special Elite', monospace" }}>
                      Decrypt the ROT-13 cipher below. Each letter shifts 13 positions in the alphabet.
                    </p>
                    <div className="riddle-cipher">NPUNEVN</div>
                    <p style={{ fontSize: "0.8rem", color: "var(--txt-dim)", fontFamily: "'Special Elite', monospace" }}>
                      A → N, B → O, C → P … N → A, etc.
                    </p>
                  </>
                )}

                <form className="solver-form" onSubmit={handleSolve}>
                  <input
                    type="text"
                    className="solver-input"
                    placeholder={solverQ === 0 ? "Your answer..." : "Decrypted word..."}
                    value={solverInput}
                    onChange={(e) => setSolverInput(e.target.value)}
                  />
                  <button type="submit" className="solver-btn">Solve</button>
                </form>

                {solverState !== "idle" && (
                  <div className={`solver-result ${solverState}`}>{solverMsg}</div>
                )}
              </div>

              {/* How It Works */}
              <div className="hint-card">
                <div className="solver-heading">
                  <span className="solver-heading-txt">🗺️ How The Hunt Works</span>
                </div>
                <div className="hint-steps">
                  {[
                    ["🏁", "Start", "Your team receives the first sealed clue at the starting point."],
                    ["🔐", "Decrypt", "Solve the challenge at each checkpoint — ciphers, riddles, binary code, QR scans."],
                    ["📍", "Navigate", "Each solved clue reveals the coordinates of the next campus checkpoint."],
                    ["⏱️", "Race", "The fastest team to complete all stages and reach the vault wins."],
                    ["🏆", "Claim", "First to unlock the Treasure Vault takes home the top bounty!"],
                  ].map(([emoji, title, desc], i) => (
                    <div className="hint-step" key={i}>
                      <div className="hint-step-num">{i + 1}</div>
                      <div className="hint-step-txt">
                        <strong style={{ color: "var(--gold)", fontFamily: "'Cinzel', serif" }}>{emoji} {title}.</strong>{" "}
                        {desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            CTA FOOTER
        ───────────────────────────────────────────── */}
        <section className="sh-cta">
          <div className="cta-inner">
            <div className="cta-text-block">
              <div className="section-badge" style={{ marginBottom: "14px" }}>⚓ Ready to Hunt?</div>
              <h2 className="cta-title">
                Register for <span>SHIKARI</span>
              </h2>
              <p className="cta-sub">
                Acharya Institute of Graduate Studies · AIKYAM 2K26 · Soladevanahalli, Bengaluru
              </p>
            </div>
            <div className="cta-actions">
              <Link href={`/events/${ev?.slug || "shikari"}/register`} className="btn-primary" style={{ fontSize: "1rem", padding: "16px 40px" }}>
                🏴‍☠️ Sign the Articles
              </Link>
              <Link href="/events" className="btn-secondary">
                ← All Events
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="sh-foot">
          <p>© 2026 Acharya Institute of Graduate Studies · NAAC A+ · Soladevanahalli, Bengaluru-560107</p>
          <Link href="/events">View All Events →</Link>
        </footer>

      </div>
    </>
  );
}
