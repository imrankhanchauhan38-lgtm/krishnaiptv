"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

export default function PlansBanner() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .pb-section {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .pb-bg {
          position: absolute; inset: 0;
          background-image: url('/images/plans-banner.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .pb-bg-fallback {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 60%, #0f0f1a 100%);
        }
        .pb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            90deg,
            rgba(8,8,15,0.92) 0%,
            rgba(8,8,15,0.75) 55%,
            rgba(8,8,15,0.3) 100%
          );
        }
        .pb-top-line {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
        }
        .pb-bottom-line {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent);
        }
        .pb-content {
          position: relative; z-index: 10;
          max-width: 1200px; margin: 0 auto;
          padding: 80px 24px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        .pb-left { max-width: 560px; }
        .pb-tag {
          color: #FFD700; font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 16px; display: block;
        }
        .pb-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900; color: #fff;
          line-height: 1.15; margin-bottom: 16px;
        }
        .pb-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pb-desc {
          color: #9ca3af; font-size: 1rem;
          line-height: 1.75; margin-bottom: 24px;
          max-width: 460px;
        }
        .pb-price-wrap {
          display: flex; align-items: baseline;
          gap: 4px; margin-bottom: 28px;
        }
        .pb-price {
          font-size: 3.5rem; font-weight: 900;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1;
        }
        .pb-price-sub {
          font-size: 16px; color: #6b7280; font-weight: 500;
        }
        .pb-bullets {
          list-style: none; margin-bottom: 36px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .pb-bullet {
          display: flex; align-items: center; gap: 12px;
          font-size: 15px; color: #d1d5db;
        }
        .pb-bullet-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          flex-shrink: 0;
        }
        .pb-btns {
          display: flex; gap: 14px; flex-wrap: wrap;
        }
        .pb-btn-primary {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-weight: 800; font-size: 15px;
          padding: 16px 36px; border-radius: 50px;
          border: none; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .pb-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(255,215,0,0.3);
        }
        .pb-btn-secondary {
          border: 1.5px solid rgba(255,215,0,0.35);
          color: #FFD700; font-weight: 700; font-size: 15px;
          padding: 16px 36px; border-radius: 50px;
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 8px;
          transition: all 0.2s; background: transparent;
          white-space: nowrap;
        }
        .pb-btn-secondary:hover { background: rgba(255,215,0,0.08); }

        /* Right play button */
        .pb-right { flex-shrink: 0; }
        .pb-play-wrap {
          display: flex; flex-direction: column;
          align-items: center; gap: 14px; cursor: pointer;
        }
        .pb-play-btn {
          width: 88px; height: 88px; border-radius: 50%;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.25);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s; position: relative;
        }
        .pb-play-btn::before {
          content: '';
          position: absolute; inset: -10px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          animation: playPulse 2s infinite;
        }
        .pb-play-btn::after {
          content: '';
          position: absolute; inset: -20px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.06);
          animation: playPulse 2s infinite 0.5s;
        }
        @keyframes playPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .pb-play-btn:hover {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-color: transparent;
        }
        .pb-play-icon {
          width: 0; height: 0;
          border-top: 14px solid transparent;
          border-bottom: 14px solid transparent;
          border-left: 22px solid #fff;
          margin-left: 5px;
          transition: border-left-color 0.3s;
        }
        .pb-play-btn:hover .pb-play-icon { border-left-color: #000; }
        .pb-play-label {
          color: rgba(255,255,255,0.6);
          font-size: 12px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .pb-content {
            flex-direction: column;
            padding: 60px 20px;
          }
          .pb-left { max-width: 100%; }
          .pb-btns { flex-direction: column; }
          .pb-btn-primary, .pb-btn-secondary {
            width: 100%; justify-content: center; text-align: center;
          }
          .pb-overlay {
            background: rgba(8,8,15,0.88);
          }
        }
      `}</style>

      <section className="pb-section">
        <div className="pb-bg-fallback" />
        <div className="pb-bg" />
        <div className="pb-overlay" />
        <div className="pb-top-line" />
        <div className="pb-bottom-line" />

        <div className="pb-content">
          {/* LEFT */}
          <div className="pb-left">
            <span className="pb-tag">✦ Special Offer</span>
            <h2 className="pb-title">
              Extend Your <span>Indian Entertainment</span><br/>
              To Every Corner of Your Home
            </h2>
            <p className="pb-desc">
              Krishna IPTV delivers premium Indian channels to every device in your home — Smart TV, mobile, tablet & more. No dead zones, no buffering, no contracts.
            </p>

            {/* Price */}
            <div className="pb-price-wrap">
              <span className="pb-price">$60</span>
              <span className="pb-price-sub">/6 months</span>
            </div>

            {/* Bullets */}
            <ul className="pb-bullets">
              {[
                "Perfect for whole family — up to 2 devices",
                "100,000+ movies & shows on demand",
                "Zero buffering on all devices simultaneously",
                "Instant activation — start watching in minutes",
              ].map((b, i) => (
                <li key={i} className="pb-bullet">
                  <div className="pb-bullet-dot" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="pb-btns">
              <button className="pb-btn-primary" onClick={() => setShowForm(true)}>
                🎁 Customize Order
              </button>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank"
                className="pb-btn-secondary">
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* RIGHT — Play */}
          <div className="pb-right">
            <div className="pb-play-wrap" onClick={() => setShowForm(true)}>
              <div className="pb-play-btn">
                <div className="pb-play-icon" />
              </div>
              <span className="pb-play-label">Watch Demo</span>
            </div>
          </div>
        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
