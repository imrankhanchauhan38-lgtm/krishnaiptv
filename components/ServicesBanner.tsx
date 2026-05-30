"use client";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";
import { useState } from "react";

export default function ServicesBanner() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .sb-section {
          position: relative;
          overflow: hidden;
          padding: 80px 24px;
          background: linear-gradient(135deg, #0a2a2a 0%, #0d3333 40%, #0a2020 100%);
        }
        .sb-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url('/images/services-bg.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.12;
        }
        .sb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(10,42,42,0.92) 0%, rgba(13,51,51,0.85) 50%, rgba(10,32,32,0.75) 100%);
        }
        .sb-inner {
          position: relative; z-index: 10;
          max-width: 1200px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .sb-left {}
        .sb-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900; color: #fff;
          line-height: 1.15; margin-bottom: 20px;
        }
        .sb-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sb-desc {
          color: rgba(255,255,255,0.7);
          font-size: 15px; line-height: 1.75;
          margin-bottom: 20px;
        }
        .sb-channels {
          font-size: 14px; line-height: 1.9;
          margin-bottom: 32px; color: rgba(255,255,255,0.6);
        }
        .sb-channels strong {
          color: #FFD700; font-weight: 700;
        }
        .sb-mini-stats {
          display: flex; gap: 40px;
          margin-bottom: 32px; flex-wrap: wrap;
        }
        .sb-mini-stat {
          display: flex; align-items: center; gap: 14px;
        }
        .sb-mini-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          border: 1.5px solid rgba(255,215,0,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }
        .sb-mini-num {
          font-size: 1.4rem; font-weight: 900;
          color: #FFD700; line-height: 1;
        }
        .sb-mini-label {
          font-size: 12px; color: rgba(255,255,255,0.5);
          font-weight: 600;
        }
        .sb-btns {
          display: flex; gap: 14px; flex-wrap: wrap;
        }
        .sb-btn-primary {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-weight: 800; font-size: 14px;
          padding: 14px 32px; border-radius: 50px;
          border: none; cursor: pointer;
          transition: all 0.2s; white-space: nowrap;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .sb-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(255,215,0,0.3);
        }
        .sb-btn-secondary {
          background: rgba(255,255,255,0.1);
          color: #fff; font-weight: 800; font-size: 14px;
          padding: 14px 32px; border-radius: 50px;
          border: 1.5px solid rgba(255,255,255,0.3);
          cursor: pointer; transition: all 0.2s;
          white-space: nowrap; text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .sb-btn-secondary:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.5);
        }

        /* RIGHT — Devices */
        .sb-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sb-devices-wrap {
          position: relative;
          width: 100%;
          max-width: 460px;
        }
        .sb-devices-placeholder {
          width: 100%; aspect-ratio: 16/11;
          background: rgba(255,255,255,0.05);
          border: 2px dashed rgba(255,215,0,0.15);
          border-radius: 20px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 16px; color: rgba(255,215,0,0.2);
          text-align: center; padding: 24px;
        }
        /*
          Real image add:
          <img src="/images/iptv-devices.png"
            style="width:100%;object-fit:contain;filter:drop-shadow(0 20px 60px rgba(0,0,0,0.5))" />
        */
        .sb-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .sb-inner { grid-template-columns: 1fr; gap: 40px; }
          .sb-right { display: none; }
        }
        @media (max-width: 600px) {
          .sb-section { padding: 60px 20px; }
          .sb-btns { flex-direction: column; }
          .sb-btn-primary, .sb-btn-secondary { width: 100%; text-align: center; }
        }
      `}</style>

      <section className="sb-section">
        <div className="sb-overlay" />
        <div className="sb-inner">

          {/* LEFT */}
          <div className="sb-left">
            <h2 className="sb-title">
              Let's See Our Best <span>Indian IPTV Services</span>
            </h2>
            <p className="sb-desc">
              Discover premium entertainment with our best Indian IPTV services — tailored for viewers across the USA who want the true flavor of India right in their living rooms. We cover USA, Australia, Canada and Europe.
            </p>
            <p className="sb-channels">
              We bring you a wide selection of <strong>Indian IPTV channels</strong>, including live news, sports, movies, and TV serials from across India. Subscribe and enjoy your favourite Indian channels with <strong>10,000+ live channels</strong> and <strong>100,000+ VOD Content</strong> with likes{" "}
              <strong>Bengali</strong>, <strong>Tamil</strong>, <strong>Telugu</strong>, <strong>Malayalam</strong>, <strong>Hindi</strong>, <strong>Punjabi</strong>, <strong>English</strong>, <strong>Gujarati</strong>, <strong>Marathi</strong> IPTV Channels, South Indian & channels in more languages.
            </p>

            {/* Mini Stats */}
            <div className="sb-mini-stats">
              <div className="sb-mini-stat">
                <div className="sb-mini-icon">📺</div>
                <div>
                  <div className="sb-mini-num">$15/mo</div>
                  <div className="sb-mini-label">Starting Price</div>
                </div>
              </div>
              <div className="sb-mini-stat">
                <div className="sb-mini-icon">🎁</div>
                <div>
                  <div className="sb-mini-num">Free</div>
                  <div className="sb-mini-label">Trial Available</div>
                </div>
              </div>
            </div>

            <div className="sb-btns">
              <a href="/plans" className="sb-btn-primary">
                Get It Right Now
              </a>
              <button className="sb-btn-secondary" onClick={() => setShowForm(true)}>
                Book a Trial!
              </button>
            </div>
          </div>

          {/* RIGHT — Devices */}
          <div className="sb-right">
            <div className="sb-devices-wrap">
              <div className="sb-glow" />
              <div className="sb-devices-placeholder">
                {/*
                  Replace with real image:
                  <img src="/images/iptv-devices.png" style={{width:"100%",objectFit:"contain",filter:"drop-shadow(0 20px 60px rgba(0,0,0,0.5))"}} />
                */}
                <div style={{fontSize:"80px"}}>🖥️📱📺</div>
                <div style={{fontSize:"14px",fontWeight:600}}>Devices Image</div>
                <div style={{fontSize:"11px",opacity:0.5}}>public/images/iptv-devices.png</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
