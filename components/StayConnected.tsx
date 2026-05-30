"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

export default function StayConnected() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .sc-section {
          position: relative;
          overflow: hidden;
          min-height: 480px;
          display: flex;
          align-items: center;
        }
        .sc-bg-fallback {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #0a1628 0%, #1a1a2e 50%, #0a0a12 100%);
        }
        .sc-bg {
          position: absolute; inset: 0;
          background-image: url('/images/stay-connected.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.2;
        }
        .sc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            90deg,
            rgba(8,8,15,0.95) 0%,
            rgba(8,8,15,0.85) 50%,
            rgba(8,8,15,0.6) 100%
          );
        }
        .sc-glow {
          position: absolute;
          top: 50%; left: 30%;
          transform: translate(-50%,-50%);
          width: 500px; height: 400px;
          background: radial-gradient(circle, rgba(255,215,0,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .sc-top-line {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
        }
        .sc-bottom-line {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent);
        }
        .sc-inner {
          position: relative; z-index: 10;
          max-width: 1200px; margin: 0 auto;
          padding: 80px 24px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* LEFT */
        .sc-left {}
        .sc-tag {
          color: #FFD700; font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 16px; display: block;
        }
        .sc-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900; color: #fff;
          line-height: 1.15; margin-bottom: 16px;
        }
        .sc-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sc-divider {
          width: 60px; height: 3px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 2px; margin-bottom: 20px;
        }
        .sc-desc {
          color: #9ca3af; font-size: 15px;
          line-height: 1.8; margin-bottom: 32px;
        }
        .sc-features {
          display: flex; flex-direction: column;
          gap: 12px; margin-bottom: 36px;
        }
        .sc-feature {
          display: flex; align-items: center; gap: 12px;
          font-size: 14px; color: #d1d5db;
        }
        .sc-feature-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          flex-shrink: 0;
        }
        .sc-btns {
          display: flex; gap: 14px; flex-wrap: wrap;
        }
        .sc-btn-primary {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-weight: 800; font-size: 15px;
          padding: 15px 36px; border-radius: 50px;
          border: none; cursor: pointer;
          transition: all 0.2s; white-space: nowrap;
        }
        .sc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(255,215,0,0.3);
        }
        .sc-btn-secondary {
          border: 1.5px solid rgba(255,215,0,0.35);
          color: #FFD700; font-weight: 700; font-size: 15px;
          padding: 15px 36px; border-radius: 50px;
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 8px;
          transition: all 0.2s; background: transparent;
          white-space: nowrap; cursor: pointer;
        }
        .sc-btn-secondary:hover { background: rgba(255,215,0,0.08); }

        /* RIGHT */
        .sc-right {
          display: flex; flex-direction: column;
          gap: 16px;
        }
        .sc-stat-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; padding: 20px 24px;
          display: flex; align-items: center; gap: 16px;
          transition: all 0.3s;
        }
        .sc-stat-card:hover {
          border-color: rgba(255,215,0,0.25);
          background: rgba(255,215,0,0.04);
          transform: translateX(4px);
        }
        .sc-stat-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(255,215,0,0.1);
          border: 1.5px solid rgba(255,215,0,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; flex-shrink: 0;
          transition: all 0.3s;
        }
        .sc-stat-card:hover .sc-stat-icon {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-color: transparent;
          box-shadow: 0 8px 24px rgba(255,215,0,0.25);
        }
        .sc-stat-num {
          font-size: 1.8rem; font-weight: 900;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1;
        }
        .sc-stat-label {
          font-size: 13px; color: #6b7280;
          font-weight: 500; margin-top: 2px;
        }

        @media (max-width: 900px) {
          .sc-inner { grid-template-columns: 1fr; gap: 48px; padding: 60px 20px; }
          .sc-btns { flex-direction: column; }
          .sc-btn-primary, .sc-btn-secondary { width: 100%; justify-content: center; text-align: center; }
          .sc-overlay { background: rgba(8,8,15,0.9); }
        }
      `}</style>

      <section className="sc-section">
        <div className="sc-bg-fallback" />
        <div className="sc-bg" />
        <div className="sc-overlay" />
        <div className="sc-glow" />
        <div className="sc-top-line" />
        <div className="sc-bottom-line" />

        <div className="sc-inner">
          {/* LEFT */}
          <div className="sc-left">
            <span className="sc-tag">✦ Stay Connected</span>
            <h2 className="sc-title">
              Stay Connected with the<br/>
              <span>Right Indian IPTV</span> Service
            </h2>
            <div className="sc-divider" />
            <p className="sc-desc">
              Get a price you'll love and the reliability you deserve. Krishna IPTV delivers 8,000+ live Indian channels directly to your home in USA & Canada — with zero buffering and crystal clear 4K quality.
            </p>

            <div className="sc-features">
              {[
                "230+ Hindi channels in HD & 4K quality",
                "All Bollywood movies & Hindi web series",
                "Hindi news, sports & entertainment 24/7",
                "Works on Smart TV, Fire Stick, Mobile & PC",
                "Instant activation — start watching in minutes",
              ].map((f, i) => (
                <div key={i} className="sc-feature">
                  <div className="sc-feature-dot" />
                  {f}
                </div>
              ))}
            </div>

            <div className="sc-btns">
              <button className="sc-btn-primary" onClick={() => setShowForm(true)}>
                🎁 Get Free Trial
              </button>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="sc-btn-secondary">
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* RIGHT — Stats */}
          <div className="sc-right">
            {[
              { icon: "📺", num: "230+", label: "Hindi Live Channels" },
              { icon: "🎬", num: "50,000+", label: "Hindi Movies & Shows" },
              { icon: "⚡", num: "99.9%", label: "Uptime Guaranteed" },
              { icon: "💰", num: "$33", label: "Starting Price — 3 Months" },
              { icon: "🛟", num: "24/7", label: "Customer Support" },
            ].map((s, i) => (
              <div key={i} className="sc-stat-card">
                <div className="sc-stat-icon">{s.icon}</div>
                <div>
                  <div className="sc-stat-num">{s.num}</div>
                  <div className="sc-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
