"use client";
import { useState, useEffect } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

const slides = [
  {
    heading: "India's #1 Premium",
    highlight: "IPTV Service in USA",
    sub: "Watch 10,000+ Live Indian Channels in crystal clear 4K quality. Hindi, Punjabi, Tamil, Telugu & more — on any device, anywhere.",
    badge: "🔴 Live Now",
  },
  {
    heading: "Zero Buffering,",
    highlight: "100% Smooth Streaming",
    sub: "Our premium servers guarantee 99.9% uptime. No freezing, no buffering — just pure entertainment for your whole family.",
    badge: "⚡ Ultra Fast",
  },
  {
    heading: "10,000+ Channels",
    highlight: "One Affordable Plan",
    sub: "Hindi, Punjabi, Urdu, Tamil, Telugu, Malayalam, English Sports & more. Start with a FREE trial today!",
    badge: "🎁 Free Trial",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        .hero-wrap {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #08080f;
        }
        /* BG Effects */
        .hero-glow1 {
          position: absolute;
          top: 30%;
          left: 10%;
          width: 600px;
          height: 500px;
          background: radial-gradient(circle, rgba(255,215,0,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-glow2 {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 500px;
          height: 400px;
          background: radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image:
            linear-gradient(#FFD700 1px, transparent 1px),
            linear-gradient(90deg, #FFD700 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* Right image placeholder */
        .hero-right-box {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 45%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-img-placeholder {
          width: 80%;
          height: 70%;
          border: 2px dashed rgba(255,215,0,0.12);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: rgba(255,215,0,0.2);
          text-align: center;
          padding: 24px;
          background: rgba(255,215,0,0.01);
        }

        /* Main content */
        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px; padding-top: 180px;
          display: flex;
          align-items: center;
          min-height: 100vh;
        }
        .hero-left {
          max-width: 580px;
          width: 100%;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,215,0,0.08);
          border: 1px solid rgba(255,215,0,0.25);
          border-radius: 50px;
          padding: 10px 20px;
          margin-bottom: 28px;
        }
        .hero-pulse {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          box-shadow: 0 0 10px #4ade80;
          flex-shrink: 0;
          animation: heroPulse 2s infinite;
        }
        @keyframes heroPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(0.8); }
        }
        .hero-badge-text {
          color: #FFD700;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        /* Heading */
        .hero-h1 {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.08;
          color: #fff;
          margin-bottom: 20px;
        }
        .hero-highlight {
          display: block;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Sub */
        .hero-sub {
          color: #9ca3af;
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 480px;
        }

        /* Slider dots */
        .hero-dots {
          display: flex;
          gap: 8px;
          margin-bottom: 36px;
        }
        .hero-dot {
          height: 4px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          transition: all 0.4s;
          background: rgba(255,255,255,0.15);
        }
        .hero-dot.active {
          background: #FFD700;
          box-shadow: 0 0 8px rgba(255,215,0,0.4);
        }

        /* Buttons */
        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .hero-btn-primary {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000;
          font-weight: 800;
          font-size: 15px;
          padding: 16px 36px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(255,215,0,0.35);
        }
        .hero-btn-secondary {
          border: 1.5px solid rgba(255,215,0,0.35);
          color: #FFD700;
          font-weight: 700;
          font-size: 15px;
          padding: 16px 36px;
          border-radius: 50px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
          background: transparent;
          white-space: nowrap;
        }
        .hero-btn-secondary:hover {
          background: rgba(255,215,0,0.08);
          border-color: #FFD700;
        }

        /* Stats */
        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 32px;
        }
        .hero-stat {
          padding-right: 28px;
          margin-right: 28px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .hero-stat:last-child {
          border-right: none;
          padding-right: 0;
          margin-right: 0;
        }
        .hero-stat-num {
          font-size: 1.8rem;
          font-weight: 900;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 4px;
        }
        .hero-stat-label {
          font-size: 11px;
          color: #6b7280;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Slider nav */
        .hero-slider-dots {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 20;
        }
        .hero-slider-dot {
          height: 4px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          transition: all 0.4s;
          background: rgba(255,255,255,0.15);
        }
        .hero-slider-dot.active {
          background: #FFD700;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .hero-right-box { display: none; }
          .hero-content { min-height: auto; padding: 32px 20px 80px; }
          .hero-left { max-width: 100%; }
          .hero-wrap { min-height: auto; padding-top: 20px; }
        }
        @media (max-width: 600px) {
          .hero-h1 { font-size: 2.2rem; }
          .hero-btns { flex-direction: column; }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
          .hero-stats { gap: 16px; }
          .hero-stat {
            border-right: none;
            padding-right: 0;
            margin-right: 0;
            min-width: 45%;
          }
        }
      `}</style>

      <section className="hero-wrap">
        {/* BG */}
        <div className="hero-glow1" />
        <div className="hero-glow2" />
        <div className="hero-grid-bg" />

        {/* Right image box */}
        <div className="hero-right-box">
          <div className="hero-img-placeholder">
            <div style={{fontSize:"56px"}}>👤</div>
            <div style={{fontSize:"14px",fontWeight:600}}>Aapki Photo Yahan</div>
            <div style={{fontSize:"11px",opacity:0.5}}>public/images/hero-person.png</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-left">

            {/* Badge */}
            <div className="hero-badge">
              <div className="hero-pulse" />
              <span className="hero-badge-text">
                {slides[current].badge} · Zero Buffering · 4K Quality
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero-h1">
              {slides[current].heading}
              <span className="hero-highlight">{slides[current].highlight}</span>
            </h1>

            {/* Sub */}
            <p className="hero-sub">{slides[current].sub}</p>

            {/* Dots */}
            <div className="hero-dots">
              {slides.map((_, i) => (
                <button key={i}
                  className={`hero-dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                  style={{width: i === current ? "32px" : "12px"}}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="hero-btns">
              <button className="hero-btn-primary" onClick={() => setShowForm(true)}>
                🎁 Get Free Trial
              </button>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank"
                className="hero-btn-secondary">
                💬 WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {[
                ["10,000+","Live Channels"],
                ["100K+","Movies & VOD"],
                ["50+","Languages"],
                ["24/7","Support"],
              ].map(([n,l]) => (
                <div key={l} className="hero-stat">
                  <div className="hero-stat-num">{n}</div>
                  <div className="hero-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom slider dots */}
        <div className="hero-slider-dots">
          {slides.map((_, i) => (
            <button key={i}
              className={`hero-slider-dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              style={{width: i === current ? "28px" : "8px"}}
            />
          ))}
        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
