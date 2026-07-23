"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 800,
            fontSize: "1.3rem",
            color: "#C9A84C",
            letterSpacing: "0.1em",
            marginBottom: "0.4rem",
          }}
        >
          AIKYAM<span style={{ color: "#fff" }}>2K26</span>
        </div>
        <p className="footer-copy">
          © 2026 Acharya Institute of Graduate Studies · All rights reserved.<br />
          Soladevanahalli, Bengaluru-560107
        </p>
      </div>

      <div className="footer-socials">
        {[
          { icon: "in", href: "#", label: "LinkedIn" },
          { icon: "fb", href: "#", label: "Facebook" },
          { icon: "tw", href: "#", label: "Twitter" },
          { icon: "yt", href: "#", label: "YouTube" },
          { icon: "ig", href: "#", label: "Instagram" },
        ].map(({ icon, href, label }) => (
          <Link
            key={icon}
            href={href}
            className="footer-social-link"
            aria-label={label}
            title={label}
          >
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}
