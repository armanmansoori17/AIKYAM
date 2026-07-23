"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="floating-nav-wrapper">
        <nav className="floating-nav">
          {[
            { 
              label: "Home", 
              href: "/", 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              )
            },
            { 
              label: "About", 
              href: "/#about", 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              )
            },
            { 
              label: "Contact", 
              href: "/#contact", 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              )
            },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link href={item.href} key={item.label} className={`nav-item ${isActive ? "active" : ""}`}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            );
          })}

          <div className="nav-divider" />

          <Link href="/events" className="nav-register-btn-dock">
            EVENTS
          </Link>
        </nav>
      </div>

      <style>{`
        .floating-nav-wrapper {
          position: fixed;
          top: 100px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          display: flex;
          justify-content: center;
          pointer-events: none;
          width: 100%;
        }
        
        .floating-nav {
          pointer-events: auto;
          background: rgba(15, 15, 15, 0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem 0.8rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease;
        }

        .floating-nav:hover {
          border-color: rgba(201, 168, 76, 0.3);
          transform: translateY(-5px);
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }

        .nav-item.active {
          background: rgba(201, 168, 76, 0.15);
          color: #C9A84C;
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-icon svg {
          width: 16px;
          height: 16px;
          display: block;
        }
        
        .nav-label {
          letter-spacing: 0.05em;
        }

        .nav-divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.15);
          margin: 0 0.5rem;
        }

        .nav-register-btn-dock {
          background: #C9A84C;
          color: #000;
          padding: 0.7rem 1.5rem;
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.85rem;
          font-family: 'Outfit', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(201, 168, 76, 0.3);
        }

        .nav-register-btn-dock:hover {
          background: #E8C96A;
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(201, 168, 76, 0.5);
        }

        @media (max-width: 768px) {
          .floating-nav-wrapper {
            top: 115px;
          }
          .floating-nav {
            padding: 0.4rem 0.5rem;
            gap: 0.2rem;
          }
          .nav-item {
            padding: 0.5rem 0.8rem;
            flex-direction: column;
            gap: 0.2rem;
          }
          .nav-label {
            font-size: 0.55rem;
          }
          .nav-icon {
            font-size: 1.1rem;
          }
          .nav-register-btn-dock {
            padding: 0.6rem 1rem;
            font-size: 0.75rem;
          }
          .nav-divider {
            margin: 0 0.2rem;
          }
        }
      `}</style>
    </>
  );
}
