"use client";
import { useState } from "react";
import TrialForm from "./TrialForm";

const features = [
  ["Streaming Entertainment", "Play On Any Device"],
  ["Pause or Rewind Live TV", "Enjoy YouTube on TV"],
  ["Exclusive Latest Shows", "Live 10,000+ HD Channels"],
  ["Dedicated 24/7 Support", "100,000+ Movies & VOD"],
];

export default function WhatIsIPTV() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .wi-section {
          padding: 80px 24px;
          background: #08080f;
          position: relative;
          overflow: hidden;
        }
        .wi-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        .wi-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* LEFT */
        .wi-tag {
          color: #FFD700; font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 12px; display: block;
        }
        .wi-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900; color: #fff;
          margin-bottom: 20px; line-height: 1.15;
        }
        .wi-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wi-divider {
          width: 60px; height: 3px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 2px; margin-bottom: 20px;
        }
        .wi-desc {
          color: #9ca3af; font-size: 15px;
          line-height: 1.8; margin-bottom: 28px;
        }
        .wi-features-label {
          color: #FFD700; font-size: 13px;
          font-weight: 700; letter-spacing: 1px;
          margin-bottom: 16px; display: block;
        }
        .wi-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 36px;
        }
        .wi-feature-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px; color: #d1d5db;
          padding: 10px 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          transition: all 0.2s;
        }
        .wi-feature-item:hover {
          border-color: rgba(255,215,0,0.2);
          background: rgba(255,215,0,0.03);
          color: #fff;
        }
        .wi-check {
          width: 20px; height: 20px; border-radius: 50%;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 900; color: #000;
          flex-shrink: 0;
        }
        .wi-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-weight: 800; font-size: 14px;
          padding: 15px 32px; border-radius: 50px;
          border: none; cursor: pointer;
          text-transform: uppercase; letter-spacing: 0.5px;
          transition: all 0.2s;
        }
        .wi-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(255,215,0,0.3);
        }

        /* RIGHT — Devices */
        .wi-right {
          position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .wi-devices-box {
          width: 100%; max-width: 480px;
          aspect-ratio: 4/3;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
          border: 2px dashed rgba(255,215,0,0.12);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 16px;
        }
        /*
          Real image:
          <img src="/images/iptv-devices-setup.png"
            style="width:100%;height:100%;object-fit:cover;" />
        */
        .wi-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 400px; height: 300px;
          background: radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 900px) {
          .wi-inner { grid-template-columns: 1fr; gap: 48px; }
          .wi-right { display: none; }
        }
        @media (max-width: 600px) {
          .wi-section { padding: 60px 20px; }
          .wi-features-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="wi-section">
        <div className="wi-inner">

          {/* LEFT */}
          <div>
            <span className="wi-tag">✦ Krishna IPTV</span>
            <h2 className="wi-title">
              What is <span>IPTV?</span>
            </h2>
            <div className="wi-divider" />
            <p className="wi-desc">
              Internet-based Protocol Television presents programs and videos via the internet as a medium. These programs are made available either live or as per the customer's demands. IPTV is a medium to deliver digital television as a service directly to your device — anywhere, anytime.
            </p>

            <span className="wi-features-label">✦ Our Latest Features</span>
            <div className="wi-features-grid">
              {features.flat().map((f, i) => (
                <div key={i} className="wi-feature-item">
                  <div className="wi-check">✓</div>
                  {f}
                </div>
              ))}
            </div>

            <button className="wi-btn" onClick={() => setShowForm(true)}>
              📞 Register a Call Back
            </button>
          </div>

          {/* RIGHT */}
          <div className="wi-right">
            <div className="wi-glow" />
            <div className="wi-devices-box">
              {/*
                Real image:
                <img src="/images/iptv-devices-setup.png" style={{width:"100%",height:"100%",objectFit:"cover"}} />
              */}
              <div style={{fontSize:"80px",position:"relative",zIndex:1}}>��️</div>
              <div style={{fontSize:"14px",fontWeight:600,color:"rgba(255,215,0,0.3)",position:"relative",zIndex:1}}>
                Devices Setup Image
              </div>
              <div style={{fontSize:"11px",color:"rgba(255,215,0,0.2)",position:"relative",zIndex:1}}>
                public/images/iptv-devices-setup.png
              </div>
            </div>
          </div>

        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
