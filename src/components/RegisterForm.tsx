"use client";

import { useState } from "react";
import Link from "next/link";
import { AikyamEvent } from "@/lib/events-data";

export default function RegisterForm({ event }: { event: AikyamEvent }) {
  let minP = 1;
  let maxP = 1;
  const label = event.teamLabel.toUpperCase();
  if (label === "DUO") { minP = 2; maxP = 2; }
  else if (label === "TRIO") { minP = 3; maxP = 3; }
  else if (label === "QUAD" || label === "SQUAD") { minP = 4; maxP = 4; }
  else if (label === "QUINT") { minP = 5; maxP = 5; }
  else if (label.includes("2–4")) { minP = 2; maxP = 4; }

  const isTeam = maxP > 1;

  const [step, setStep] = useState(1);
  const [participantsCount, setParticipantsCount] = useState(minP);
  const [teamName, setTeamName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [participants, setParticipants] = useState(
    Array.from({ length: maxP }).map(() => ({ name: "", email: "", phone: "", rollNo: "" }))
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateParticipant = (index: number, field: string, value: string) => {
    const newP = [...participants];
    newP[index] = { ...newP[index], [field]: value };
    setParticipants(newP);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && isTeam && !teamName) return;
    if (step === 1 && !collegeName) return;
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255, 255, 255, 0.03)",
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    padding: "1rem 1.2rem",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const focusStyle = `
    .form-input:focus {
      border-color: ${event.color}80 !important;
      box-shadow: 0 0 15px ${event.color}20;
      background: rgba(255, 255, 255, 0.05) !important;
    }
  `;

  if (isSubmitted) {
    return (
      <main style={{ minHeight: "100vh", background: "#080808", color: "#fff", display: "flex", alignItems: "center", justifyItems: "center", fontFamily: "'Outfit',sans-serif", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "4rem", background: "rgba(255,255,255,0.02)", borderRadius: "24px", border: `1px solid ${event.color}40`, boxShadow: `0 0 40px ${event.color}10`, maxWidth: 500, width: "90%" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✨</div>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: event.color, marginBottom: "1rem" }}>Registration Successful!</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem" }}>
            Thank you for registering for <strong>{event.name}</strong>. We will contact you shortly with further details.
          </p>
          <Link href={`/events/${event.slug}`} style={{ display: "inline-block", background: event.color, color: "#000", padding: "0.8rem 2rem", borderRadius: "50px", fontWeight: 700, textDecoration: "none", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.1em" }}>
            Back to Event
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#fff", fontFamily: "'Outfit',sans-serif", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <style dangerouslySetInnerHTML={{ __html: focusStyle }} />
      
      {/* Background Effects */}
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 600, height: 600, background: `radial-gradient(circle, ${event.color}15 0%, transparent 70%)`, filter: "blur(100px)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 600, height: 600, background: `radial-gradient(circle, ${event.color}10 0%, transparent 70%)`, filter: "blur(100px)", zIndex: 0, pointerEvents: "none" }} />

      {/* Navbar */}
      <nav style={{ padding: "1.5rem 3rem", position: "relative", zIndex: 10 }}>
        <Link href={`/events/${event.slug}`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.2rem" }}>←</span> Back to {event.name}
        </Link>
      </nav>

      {/* Form Container */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", position: "relative", zIndex: 10 }}>
        <div style={{ width: "100%", maxWidth: 650, background: "rgba(20, 20, 20, 0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "3rem", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ background: `${event.color}15`, color: event.color, padding: "0.3rem 1rem", borderRadius: "50px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              {event.eventName}
            </span>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginTop: "1rem", letterSpacing: "-0.02em" }}>
              Register for <span style={{ color: event.color }}>{event.name}</span>
            </h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
              <div style={{ height: 4, width: 40, borderRadius: 2, background: step === 1 ? event.color : "rgba(255,255,255,0.1)", transition: "all 0.3s" }} />
              <div style={{ height: 4, width: 40, borderRadius: 2, background: step === 2 ? event.color : "rgba(255,255,255,0.1)", transition: "all 0.3s" }} />
            </div>
          </div>

          <form onSubmit={step === 1 ? handleNext : handleSubmit}>
            
            {/* STEP 1: Basic Info */}
            {step === 1 && (
              <div style={{ animation: "fadeIn 0.5s ease" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "1.5rem", color: "rgba(255,255,255,0.9)" }}>General Information</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {isTeam && (
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>TEAM NAME *</label>
                      <input 
                        required 
                        className="form-input" 
                        style={inputStyle} 
                        placeholder="e.g. Code Ninjas" 
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                      />
                    </div>
                  )}
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>COLLEGE NAME *</label>
                    <input 
                      required 
                      className="form-input" 
                      style={inputStyle} 
                      placeholder="e.g. Acharya Institute" 
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                    />
                  </div>
                  
                  {minP !== maxP && (
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>NUMBER OF PARTICIPANTS *</label>
                      <select 
                        className="form-input"
                        style={{ ...inputStyle, appearance: "none" }}
                        value={participantsCount}
                        onChange={(e) => setParticipantsCount(parseInt(e.target.value))}
                      >
                        {Array.from({ length: maxP - minP + 1 }).map((_, i) => (
                          <option key={i} value={minP + i} style={{ background: "#111" }}>
                            {minP + i} Members
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                <button type="submit" style={{ marginTop: "2.5rem", width: "100%", background: event.color, color: "#000", padding: "1.2rem", borderRadius: "12px", border: "none", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", boxShadow: `0 10px 30px ${event.color}40`, transition: "all 0.3s ease" }}>
                  Next Step →
                </button>
              </div>
            )}

            {/* STEP 2: Participant Details */}
            {step === 2 && (
              <div style={{ animation: "fadeIn 0.5s ease" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "1.5rem", color: "rgba(255,255,255,0.9)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  Participant Details
                  <button type="button" onClick={() => setStep(1)} style={{ background: "none", border: "none", color: event.color, fontSize: "0.85rem", cursor: "pointer" }}>
                    Edit Info
                  </button>
                </h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", maxHeight: "50vh", overflowY: "auto", paddingRight: "1rem" }}>
                  {Array.from({ length: participantsCount }).map((_, i) => (
                    <div key={i} style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px" }}>
                      <h4 style={{ fontSize: "0.9rem", color: event.color, marginBottom: "1rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        {i === 0 ? (isTeam ? "Team Leader" : "Participant") : `Member ${i + 1}`}
                      </h4>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <div style={{ gridColumn: "1 / -1" }}>
                          <input 
                            required 
                            className="form-input" 
                            style={inputStyle} 
                            placeholder="Full Name *" 
                            value={participants[i].name}
                            onChange={(e) => updateParticipant(i, "name", e.target.value)}
                          />
                        </div>
                        <div>
                          <input 
                            required 
                            type="email"
                            className="form-input" 
                            style={inputStyle} 
                            placeholder="Email Address *" 
                            value={participants[i].email}
                            onChange={(e) => updateParticipant(i, "email", e.target.value)}
                          />
                        </div>
                        <div>
                          <input 
                            required 
                            type="tel"
                            className="form-input" 
                            style={inputStyle} 
                            placeholder="Phone Number *" 
                            value={participants[i].phone}
                            onChange={(e) => updateParticipant(i, "phone", e.target.value)}
                          />
                        </div>
                        <div style={{ gridColumn: "1 / -1" }}>
                          <input 
                            required 
                            className="form-input" 
                            style={inputStyle} 
                            placeholder="USN / Roll No *" 
                            value={participants[i].rollNo}
                            onChange={(e) => updateParticipant(i, "rollNo", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button type="submit" style={{ marginTop: "2.5rem", width: "100%", background: "#fff", color: "#000", padding: "1.2rem", borderRadius: "12px", border: "none", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", boxShadow: `0 10px 30px rgba(255,255,255,0.2)`, transition: "all 0.3s ease" }}>
                  Complete Registration ✨
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </main>
  );
}
