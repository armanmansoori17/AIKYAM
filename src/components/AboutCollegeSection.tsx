"use client";
import React from "react";

export default function AboutCollegeSection() {
  return (
    <section className="about-college-section" id="college" style={{ padding: "8rem 3rem", position: "relative", overflow: "hidden", background: "#080808" }}>
      {/* Background Decor */}
      <div style={{
        position: "absolute",
        top: "-20%", right: "-10%",
        width: "50vw", height: "50vw",
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 60%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "1rem", fontWeight: 700 }}>
            Discover Our Legacy
          </p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "2rem" }}>
            ABOUT <span style={{ color: "#C9A84C" }}>US</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          
          {/* COLLEGE CONTENT - Full width card */}
          <div style={{ 
            background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.5) 100%)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "24px",
            padding: "3rem",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "200px", background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
            
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "2rem" }}>🏛️</span>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
                Acharya Institute of Graduate Studies
              </h3>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                Acharya Institute of Graduate Studies (AIGS) is a renowned educational institution in Bengaluru, India, offering a wide range of graduate programmes in Business Management, Computer Science, Commerce, Science and Humanities. Located in the heart of Bangalore, the Silicon Valley of India, AIGS is an attractive choice for students seeking quality graduate education.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                With a commitment to academic excellence, industry-oriented curriculum, and state-of-the-art infrastructure, AIGS provides students with a comprehensive learning experience. The institute has a dedicated placement cell, extracurricular activities, research opportunities, and a strong alumni network, along with scholarships and financial aid to deserving students.
              </p>
            </div>
          </div>

          {/* 2-Column Grid for MCA & Club */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
            
            {/* MCA DEPARTMENT CONTENT */}
            <div style={{ 
              background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.5) 100%)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: "3rem",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", background: "radial-gradient(circle at top right, rgba(201,168,76,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
              
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "2rem" }}>💻</span>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
                  MCA Department
                </h3>
              </div>
              
              <p style={{ color: "#C9A84C", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 600 }}>
                The Impact of AI Driven Decision Making and Agile Management Practices for Sustainable Development (ICADMS) 2024
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                The Department of Master of Computer Applications (MCA) at AIGS offers a comprehensive and industry-oriented programme. With a well-structured curriculum, experienced faculty, and strong placement support, we prepare students for successful IT careers.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                The programme emphasizes hands-on projects, entrepreneurship development, and specialized electives to cater to the latest industry demands. AIGS is committed to shaping the future of aspiring IT professionals.
              </p>
            </div>

            {/* CLUB CONTENT */}
            <div style={{ 
              background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.5) 100%)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: "3rem",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "200px", background: "radial-gradient(ellipse at bottom, rgba(201,168,76,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
              
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "2rem" }}>🚀</span>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
                  Infinite Acuity Club
                </h3>
              </div>
              
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                <strong style={{ color: "#C9A84C" }}>Infinite Acuity</strong> aims to create a vibrant and supportive community of MCA students who are passionate about computer applications and are committed to personal and professional growth. 
              </p>
              
              <div style={{ background: "rgba(201,168,76,0.05)", borderLeft: "4px solid #C9A84C", padding: "1.5rem", borderRadius: "0 12px 12px 0", marginTop: "auto" }}>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.6, fontStyle: "italic" }}>
                  "We organize workshops, seminars, guest lectures, coding competitions, and hackathons to expose students to the latest industry trends and technologies."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
