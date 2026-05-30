"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

export default function CtaBanner() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .cta-full {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .cta-full-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/cta-bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .cta-full-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(8,8,15,0.92) 0%,
            rgba(8,8,15,0.75) 50%,
            rgba(8,8,15,0.4) 100%
          );
        }
        /* Jab image nahi hai tab fallback */
        .cta-full-fallback {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%);
        }
        .cta-full-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        .cta-full-left {
          max-width: 580px;
        }
        .cta-full-tag {
          color: #FFD700;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }
        .cta-full-h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .cta-full-h2 span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-full-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 2px;
          margin-bottom: 20px;
        }
        .cta-full-p {
          color: #9ca3af;
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 40px;
          max-width: 480px;
        }
        .cta-full-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }
        .cta-primary-btn {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000;
          font-weight: 800;
          font-size: 15px;
          padding: 16px 36px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .cta-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,215,0,0.35);
        }
        .cta-secondary-link {
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .cta-secondary-link:hover { color: #FFD700; }
        .cta-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.3);
          font-size: 14px;
          transition: all 0.2s;
        }
        .cta-secondary-link:hover .cta-arrow {
          border-color: #FFD700;
          color: #FFD700;
        }

        /* PLAY BUTTON */
        .cta-full-right {
          flex-shrink: 0;
        }
        .play-btn-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .play-btn {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          position: relative;
        }
        .play-btn::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          animation: ripple 2s infinite;
        }
        .play-btn::after {
          content: '';
          position: absolute;
          inset: -16px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          animation: ripple 2s infinite 0.5s;
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .play-btn:hover {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-color: transparent;
          transform: scale(1.1);
        }
        .play-btn:hover .play-icon { border-left-color: #000; }
        .play-icon {
          width: 0;
          height: 0;
          border-top: 14px solid transparent;
          border-bottom: 14px solid transparent;
          border-left: 22px solid #fff;
          margin-left: 4px;
          transition: border-left-color 0.3s;
        }
        .play-label {
          color: rgba(255,255,255,0.7);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .cta-full-content {
            flex-direction: column;
            padding: 60px 20px;
            text-align: center;
          }
          .cta-full-left { max-width: 100%; }
          .cta-full-divider { margin: 0 auto 20px; }
          .cta-full-p { max-width: 100%; }
          .cta-full-btns {
            justify-content: center;
            flex-direction: column;
          }
          .cta-primary-btn {
            width: 100%;
            text-align: center;
          }
          .cta-full-overlay {
            background: rgba(8,8,15,0.85);
          }
        }
      `}</style>

      <section className="cta-full">
        {/* Background */}
        <div className="cta-full-fallback" />
        <div className="cta-full-bg" /> {/* public/images/cta-bg.jpg add karo */}
        <div className="cta-full-overlay" />

        {/* Gold top border line */}
        <div style={{
          position:"absolute", top:0, left:0, right:0,
          height:"3px",
          background:"linear-gradient(90deg, transparent, #FFD700, transparent)"
        }} />

        <div className="cta-full-content">
          {/* LEFT */}
          <div className="cta-full-left">
            <span className="cta-full-tag">✦ Premium Service</span>
            <h2 className="cta-full-h2">
              Your Local <span>High Quality</span><br/>
              Indian IPTV Provider
            </h2>
            <div className="cta-full-divider" />
            <p className="cta-full-p">
              Krishna IPTV is an award-winning Indian IPTV service offering reliable and affordable entertainment for Indians in USA & Canada. Watch 10,000+ channels with crystal clear 4K quality — anytime, anywhere.
            </p>
            <div className="cta-full-btns">
              <button className="cta-primary-btn" onClick={() => setShowForm(true)}>
                🎁 Get Free Trial
              </button>
              <a href="#plans" className="cta-secondary-link">
                View Plans <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT — Play Button */}
          <div className="cta-full-right">
            <div className="play-btn-wrap" onClick={() => setShowForm(true)}>
              <div className="play-btn">
                <div className="play-icon" />
              </div>
              <span className="play-label">Watch Demo</span>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div style={{
          position:"absolute", bottom:0, left:0, right:0,
          height:"1px",
          background:"linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)"
        }} />
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
