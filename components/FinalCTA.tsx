"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

export default function FinalCTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .fcta-section {
          padding: 40px 24px;
          background: #08080f;
        }
        .fcta-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .fcta-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%);
          min-height: 320px;
          display: flex;
          align-items: center;
        }
        /* Geometric shapes */
        .fcta-shape1 {
          position: absolute;
          top: -40px;
          right: 280px;
          width: 200px;
          height: 200px;
          border: 2px solid rgba(255,255,255,0.2);
          border-radius: 4px;
          transform: rotate(20deg);
          pointer-events: none;
        }
        .fcta-shape2 {
          position: absolute;
          bottom: -60px;
          right: 240px;
          width: 160px;
          height: 160px;
          border: 1.5px solid rgba(255,255,255,0.15);
          border-radius: 4px;
          transform: rotate(35deg);
          pointer-events: none;
        }
        .fcta-shape3 {
          position: absolute;
          top: 20px;
          left: 280px;
          width: 80px;
          height: 80px;
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 50%;
          pointer-events: none;
        }
        .fcta-shape4 {
          position: absolute;
          bottom: 20px;
          left: 320px;
          width: 120px;
          height: 120px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
          pointer-events: none;
        }
        /* Left person image */
        .fcta-person {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 280px;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 5;
        }
        .fcta-person-placeholder {
          width: 220px;
          height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          color: rgba(0,0,0,0.3);
          text-align: center;
        }
        /* Right device image */
        .fcta-device {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 260px;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 5;
        }
        .fcta-device-placeholder {
          width: 200px;
          height: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          color: rgba(0,0,0,0.3);
          text-align: center;
        }
        /* Center content */
        .fcta-content {
          position: relative;
          z-index: 10;
          flex: 1;
          text-align: center;
          padding: 60px 320px;
        }
        .fcta-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: #000;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .fcta-sub {
          color: rgba(0,0,0,0.65);
          font-size: 1rem;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .fcta-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .fcta-btn-primary {
          background: #000;
          color: #FFD700;
          font-weight: 800;
          font-size: 15px;
          padding: 16px 36px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .fcta-btn-primary:hover {
          background: #111;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }
        .fcta-btn-secondary {
          background: rgba(255,255,255,0.25);
          color: #000;
          font-weight: 700;
          font-size: 15px;
          padding: 16px 36px;
          border-radius: 50px;
          border: 2px solid rgba(0,0,0,0.15);
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          white-space: nowrap;
          display: inline-block;
        }
        .fcta-btn-secondary:hover {
          background: rgba(255,255,255,0.35);
        }

        /* MOBILE */
        @media (max-width: 1000px) {
          .fcta-content { padding: 48px 200px; }
          .fcta-person { width: 200px; }
          .fcta-device { width: 200px; }
        }
        @media (max-width: 768px) {
          .fcta-card { min-height: auto; }
          .fcta-content {
            padding: 48px 24px;
          }
          .fcta-person, .fcta-device { display: none; }
          .fcta-shape1, .fcta-shape2 { display: none; }
          .fcta-btns { flex-direction: column; align-items: center; }
          .fcta-btn-primary, .fcta-btn-secondary { width: 100%; text-align: center; }
        }
      `}</style>

      <section className="fcta-section">
        <div className="fcta-inner">
          <div className="fcta-card">
            {/* Geometric shapes */}
            <div className="fcta-shape1" />
            <div className="fcta-shape2" />
            <div className="fcta-shape3" />
            <div className="fcta-shape4" />

            {/* Left Person */}
            <div className="fcta-person">
              <div className="fcta-person-placeholder">
                {/*
                  Real image:
                  <img src="/images/cta-person.png" style={{width:"100%",objectFit:"contain"}} alt="Happy customer" />
                */}
                <div style={{fontSize:"80px"}}>👩</div>
                <div style={{fontSize:"11px",fontWeight:600}}>public/images/<br/>cta-person.png</div>
              </div>
            </div>

            {/* Center Content */}
            <div className="fcta-content">
              <h2 className="fcta-title">
                Stay Connected with<br/>
                the Right IPTV Service
              </h2>
              <p className="fcta-sub">
                Get a price you'll love and the reliability you deserve.<br/>
                Start your free trial today — no credit card required!
              </p>
              <div className="fcta-btns">
                <button className="fcta-btn-primary" onClick={() => setShowForm(true)}>
                  🎁 Get Started Free
                </button>
                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank"
                  className="fcta-btn-secondary">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Device */}
            <div className="fcta-device">
              <div className="fcta-device-placeholder">
                {/*
                  Real image:
                  <img src="/images/cta-device.png" style={{width:"100%",objectFit:"contain"}} alt="IPTV device" />
                */}
                <div style={{fontSize:"80px"}}>📡</div>
                <div style={{fontSize:"11px",fontWeight:600}}>public/images/<br/>cta-device.png</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
