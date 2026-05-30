"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

const points = [
  "10,000+ Live Indian channels in HD & 4K quality",
  "Works on Smart TV, Fire Stick, iPhone, Android & PC",
  "Zero buffering with 99.9% uptime guarantee",
  "Instant activation — start watching in minutes",
  "50+ languages including Hindi, Punjabi, Tamil & more",
  "24/7 customer support via WhatsApp & call",
];

export default function AboutSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .about-section {
          padding: 100px 24px;
          background: #08080f;
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-left {
          position: relative;
        }
        .about-img-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
        }
        .about-img-box {
          width: 100%;
          aspect-ratio: 4/5;
          background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
          border-radius: 24px;
          border: 2px dashed rgba(255,215,0,0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255,215,0,0.25);
          gap: 12px;
          text-align: center;
          padding: 24px;
        }
        /* Real image aane par yeh class lagao */
        .about-img-real {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 24px;
          display: block;
        }
        .about-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 20px;
          padding: 20px 24px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(255,215,0,0.3);
        }
        .about-badge-num {
          font-size: 2rem;
          font-weight: 900;
          color: #000;
          line-height: 1;
        }
        .about-badge-text {
          font-size: 11px;
          font-weight: 700;
          color: rgba(0,0,0,0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }
        .about-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* RIGHT */
        .about-right {}
        .about-tag {
          color: #FFD700;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }
        .about-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .about-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 2px;
          margin-bottom: 24px;
        }
        .about-desc {
          color: #9ca3af;
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .about-points {
          list-style: none;
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .about-point {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          color: #d1d5db;
          font-size: 15px;
          line-height: 1.5;
        }
        .about-check {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255,215,0,0.1);
          border: 1.5px solid rgba(255,215,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          font-size: 12px;
          color: #FFD700;
        }
        .about-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .about-btn-primary {
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
        .about-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,215,0,0.3);
        }
        .about-btn-secondary {
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
          white-space: nowrap;
          background: transparent;
          cursor: pointer;
        }
        .about-btn-secondary:hover {
          background: rgba(255,215,0,0.08);
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-left { order: 2; }
          .about-right { order: 1; }
          .about-badge {
            bottom: 16px;
            right: 16px;
          }
        }
        @media (max-width: 768px) {
          .about-section { padding: 60px 20px; }
          .about-btns { flex-direction: column; }
          .about-btn-primary, .about-btn-secondary {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
          .about-img-box { aspect-ratio: 4/3; }
        }
      `}</style>

      <section className="about-section">
        <div className="about-inner">

          {/* LEFT — Image */}
          <div className="about-left">
            <div className="about-glow" />
            <div className="about-img-wrap" style={{position:"relative",zIndex:1}}>
              {/* 
                Real image add karne ke liye:
                1. public/images/about.jpg rakho
                2. Neeche ka div hatao aur yeh uncomment karo:
                <img src="/images/about.jpg" alt="Family watching Krishna IPTV" className="about-img-real" />
              */}
              <div className="about-img-box">
                <div style={{fontSize:"64px"}}>👨‍��‍👧‍👦</div>
                <div style={{fontSize:"16px",fontWeight:700,color:"rgba(255,215,0,0.4)"}}>Family Photo</div>
                <div style={{fontSize:"12px",opacity:0.6}}>public/images/about.jpg</div>
                <div style={{fontSize:"11px",opacity:0.4,marginTop:"8px"}}>Apni family ya customer photo yahan aayegi</div>
              </div>

              {/* Badge */}
              <div className="about-badge">
                <div className="about-badge-num">50K+</div>
                <div className="about-badge-text">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="about-right">
            <span className="about-tag">✦ About Krishna IPTV</span>
            <h2 className="about-title">
              The Best TV Experience<br/>
              Powered by <span>Krishna IPTV</span>
            </h2>
            <div className="about-divider" />
            <p className="about-desc">
              We've built India's most trusted IPTV service for Indians living in USA & Canada. Our plans are designed to give you the best Indian entertainment at the most affordable price — with zero compromise on quality.
            </p>

            <ul className="about-points">
              {points.map((p, i) => (
                <li key={i} className="about-point">
                  <span className="about-check">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="about-btns">
              <button className="about-btn-primary" onClick={() => setShowForm(true)}>
                🎁 Get Free Trial
              </button>
              <a href="#plans" className="about-btn-secondary">
                View Plans →
              </a>
            </div>
          </div>

        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
