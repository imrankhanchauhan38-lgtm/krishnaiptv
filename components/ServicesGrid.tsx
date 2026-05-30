"use client";
import { useState } from "react";
import TrialForm from "./TrialForm";

const services = [
  {
    icon: "📺",
    title: "Live TV Channels",
    desc: "Watch 10,000+ live Indian channels in HD & 4K quality. Hindi, Punjabi, Tamil, Telugu & 50+ more languages available 24/7.",
    link: "/channels",
  },
  {
    icon: "📱",
    title: "Mobile Streaming",
    desc: "Stream on any device — iPhone, Android, tablet. Use our app to watch anywhere, anytime with zero buffering.",
    link: "#devices",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    desc: "Your data and privacy are 100% safe. No ads, no tracking, fully encrypted streaming for your peace of mind.",
    link: "#",
  },
  {
    icon: "🛟",
    title: "24/7 Support",
    desc: "Experts available round the clock via WhatsApp & call. We reply in minutes — in Hindi & English both.",
    link: "#contact",
  },
];

export default function ServicesGrid() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .sg-section {
          padding: 80px 24px;
          background: #08080f;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .sg-inner { max-width: 1200px; margin: 0 auto; }
        .sg-header { text-align: center; margin-bottom: 56px; }
        .sg-tag {
          color: #FFD700; font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 14px; display: block;
        }
        .sg-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900; color: #fff; margin-bottom: 14px;
        }
        .sg-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sg-sub { color: #6b7280; font-size: 15px; max-width: 500px; margin: 0 auto; line-height: 1.7; }
        .sg-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .sg-card {
          text-align: center;
          padding: 16px;
          transition: transform 0.3s;
        }
        .sg-card:hover { transform: translateY(-4px); }
        .sg-icon-wrap {
          width: 80px; height: 80px; border-radius: 50%;
          background: rgba(255,215,0,0.08);
          border: 2px solid rgba(255,215,0,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 32px; margin: 0 auto 20px;
          transition: all 0.3s;
        }
        .sg-card:hover .sg-icon-wrap {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-color: transparent;
          box-shadow: 0 8px 30px rgba(255,215,0,0.3);
        }
        .sg-card-title {
          font-size: 16px; font-weight: 800; color: #fff;
          margin-bottom: 12px;
        }
        .sg-card-desc {
          font-size: 14px; color: #6b7280; line-height: 1.7;
          margin-bottom: 16px;
        }
        .sg-card-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700; color: #FFD700;
          text-decoration: none; transition: gap 0.2s;
        }
        .sg-card-link:hover { gap: 10px; }

        @media (max-width: 900px) { .sg-grid { grid-template-columns: 1fr 1fr; gap: 24px; } }
        @media (max-width: 500px) {
          .sg-section { padding: 60px 20px; }
          .sg-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="sg-section">
        <div className="sg-inner">
          <div className="sg-header">
            <span className="sg-tag">✦ Our Services</span>
            <h2 className="sg-title">Find a Solution That <span>Meets Your Needs</span></h2>
            <p className="sg-sub">Krishna IPTV provides premium Indian entertainment services at the most affordable price — everything you need in one place.</p>
          </div>

          <div className="sg-grid">
            {services.map((s, i) => (
              <div key={i} className="sg-card">
                <div className="sg-icon-wrap">{s.icon}</div>
                <h3 className="sg-card-title">{s.title}</h3>
                <p className="sg-card-desc">{s.desc}</p>
                <a href={s.link} className="sg-card-link">→ Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
