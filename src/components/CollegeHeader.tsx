export default function CollegeHeader() {
  return (
    <>
      <div
        className="college-header-wrapper"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: "rgba(8,8,8,0.97)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div 
          className="college-info" 
          style={{ 
            width: "100%", 
            maxWidth: "100%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            gap: "1.5rem"
          }}
        >
          {/* Left Logo */}
          <img src="/acharya.webp" alt="Acharya Logo" className="header-logo left-logo" />

          {/* Centered Name and Info */}
          <div className="college-text-block" style={{ textAlign: "center", flex: 1 }}>
            <h1
              className="college-name"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C9A84C",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Acharya Institute of Graduate Studies
            </h1>
            
            <p
              className="college-sub"
              style={{
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.32)",
                margin: "0.25rem 0 0",
                lineHeight: 1.3,
              }}
            >
              NAAC Re-Accredited &lsquo;A+&rsquo; &nbsp;<span className="hide-mobile">·</span><br className="show-mobile" />&nbsp; Affiliated to Dr. Manmohan Singh Bengaluru City University
            </p>
            <p
              className="college-sub2"
              style={{
                letterSpacing: "0.06em",
                color: "rgba(201,168,76,0.45)",
                margin: "0.1rem 0 0",
                lineHeight: 1.3,
              }}
            >
              Soladevanahalli, Bengaluru‑560107
            </p>
          </div>

          {/* Right Logo */}
          <img src="/infinity.webp" alt="Infinity Logo" className="header-logo right-logo" />
        </div>
      </div>

      <style>{`
        .college-header-wrapper {
          height: 100px;
        }
        .header-logo {
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(201,168,76,0.25));
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .left-logo {
          height: 92px;
        }
        .right-logo {
          height: 88px;
        }
        .header-logo:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 15px rgba(201,168,76,0.45));
        }
        
        .college-name { 
          font-size: clamp(1.1rem, 2.2vw, 1.85rem); 
          white-space: nowrap;
        }
        .college-sub { font-size: clamp(0.55rem, 0.85vw, 0.68rem); }
        .college-sub2 { font-size: clamp(0.55rem, 0.85vw, 0.68rem); }
        .show-mobile { display: none; }
        
        @media (max-width: 768px) {
          .college-header-wrapper {
            height: 115px;
            padding: 0 1rem !important;
          }
          .college-info {
            gap: 1rem !important;
          }
          .left-logo {
            height: 80px;
          }
          .right-logo {
            height: 70px;
          }
          .college-name {
            font-size: clamp(0.75rem, 3vw, 1.15rem) !important;
            letter-spacing: 0.05em !important;
            white-space: nowrap !important;
          }
          .college-sub, .college-sub2 {
            font-size: 0.55rem !important;
          }
          .hide-mobile { display: none; }
          .show-mobile { display: block; }
        }
        
        @media (max-width: 480px) {
           .college-header-wrapper {
             height: 115px;
             padding: 0 0.4rem !important;
           }
           .college-info {
             gap: 0.4rem !important;
           }
           .left-logo {
             height: 65px;
           }
           .right-logo {
             height: 55px;
           }
           .college-name {
             font-size: clamp(0.55rem, 3.2vw, 0.78rem) !important;
             letter-spacing: 0.03em !important;
             white-space: nowrap !important;
           }
           .college-sub, .college-sub2 {
             font-size: 0.48rem !important;
             white-space: normal;
           }
        }
      `}</style>
    </>
  );
}
