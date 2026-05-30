"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

const faqs = [
  {
    q: "Why choose Krishna IPTV?",
    a: "Krishna IPTV is #1 Indian IPTV provider in USA & Canada. We offer 10,000+ live channels with 99.9% uptime, zero buffering, and 24/7 support. Our servers are optimized for Indian content in North America.",
  },
  {
    q: "Which devices are supported?",
    a: "Krishna IPTV works on Smart TVs, Android TV, Fire Stick, MAG Box, iPhone, iPad, Android phones, Windows PC, Mac, and any device with an IPTV player app.",
  },
  {
    q: "What channels do you offer?",
    a: "We offer 10,000+ live channels including Hindi, Punjabi, Urdu, Tamil, Telugu, Malayalam, Gujarati, Bengali, Kannada, Marathi, English Sports, News, Kids and much more.",
  },
  {
    q: "How do I get started?",
    a: "Simply click 'Free Trial' or WhatsApp us at +1 361 494 0799. We will activate your trial within minutes — no credit card required!",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! We offer a FREE trial so you can test our service before purchasing. Contact us via WhatsApp or fill the trial form and we will set it up instantly.",
  },
];

const features = [
  { icon: "📺", title: "10,000+ Live Channels", desc: "Hindi, Punjabi, Tamil, Telugu, English & 50+ more languages" },
  { icon: "⚡", title: "Zero Buffering", desc: "99.9% uptime with premium high-speed servers in USA" },
  { icon: "🎬", title: "100K+ Movies & Shows", desc: "Latest Bollywood, Hollywood, Web Series on demand" },
  { icon: "📱", title: "All Devices Supported", desc: "Smart TV, Fire Stick, iPhone, Android, PC & more" },
  { icon: "🔒", title: "Secure & Private", desc: "No ads, no tracking, 100% safe viewing experience" },
  { icon: "🛟", title: "24/7 Hindi Support", desc: "Always available on WhatsApp, call or chat" },
];

export default function WhyUs() {
  const [open, setOpen] = useState<number | null>(0);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .whyus-section {
          padding: 100px 24px;
          background: #08080f;
          position: relative;
          overflow: hidden;
        }
        .whyus-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent);
        }
        .whyus-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .whyus-left {}
        .whyus-tag {
          color: #FFD700;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }
        .whyus-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .whyus-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .whyus-sub {
          color: #6b7280;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 48px;
          max-width: 420px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .feature-item {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 20px;
          transition: all 0.3s;
          cursor: default;
        }
        .feature-item:hover {
          border-color: rgba(255,215,0,0.25);
          background: rgba(255,215,0,0.03);
          transform: translateY(-2px);
        }
        .feature-icon {
          font-size: 28px;
          margin-bottom: 10px;
          display: block;
        }
        .feature-title {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }
        .feature-desc {
          font-size: 12px;
          color: #6b7280;
          line-height: 1.5;
        }

        /* FAQ */
        .whyus-right {}
        .faq-tag {
          color: #FFD700;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }
        .faq-title {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 900;
          color: #fff;
          margin-bottom: 36px;
          line-height: 1.2;
        }
        .faq-item {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          margin-bottom: 12px;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .faq-item.active {
          border-color: rgba(255,215,0,0.3);
          background: rgba(255,215,0,0.02);
        }
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          text-align: left;
          gap: 16px;
        }
        .faq-q-text {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          line-height: 1.4;
        }
        .faq-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,215,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFD700;
          font-size: 18px;
          font-weight: 300;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        .faq-item.active .faq-icon {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000;
          border-color: transparent;
          transform: rotate(45deg);
        }
        .faq-answer {
          padding: 0 24px 20px;
          color: #9ca3af;
          font-size: 14px;
          line-height: 1.75;
        }

        /* CTA BANNER */
        .cta-banner {
          position: relative;
          margin-top: 80px;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
          border: 1px solid rgba(255,215,0,0.15);
        }
        .cta-banner-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/cta-bg.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
        }
        .cta-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(8,8,15,0.9) 0%, rgba(8,8,15,0.7) 100%);
        }
        .cta-banner-content {
          position: relative;
          z-index: 10;
          padding: 60px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 32px;
        }
        .cta-banner h2 {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
          max-width: 500px;
        }
        .cta-banner h2 span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-banner-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .cta-btn-primary {
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
        .cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,215,0,0.3);
        }
        .cta-btn-secondary {
          border: 1.5px solid rgba(255,215,0,0.35);
          color: #FFD700;
          font-weight: 700;
          font-size: 15px;
          padding: 16px 36px;
          border-radius: 50px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s;
          display: inline-block;
        }
        .cta-btn-secondary:hover {
          background: rgba(255,215,0,0.08);
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .whyus-inner {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
        @media (max-width: 768px) {
          .whyus-section { padding: 60px 20px; }
          .features-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .cta-banner-content {
            padding: 40px 24px;
            flex-direction: column;
            text-align: center;
          }
          .cta-banner-btns { justify-content: center; }
          .cta-btn-primary, .cta-btn-secondary { width: 100%; text-align: center; }
        }
        @media (max-width: 480px) {
          .features-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="whyus-section">
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>

          <div className="whyus-inner">
            {/* LEFT — Features */}
            <div className="whyus-left">
              <span className="whyus-tag">Why Krishna IPTV</span>
              <h2 className="whyus-title">
                India's Most Trusted<br/>
                <span>IPTV Service</span>
              </h2>
              <p className="whyus-sub">
                Over 50,000 happy customers across USA & Canada trust Krishna IPTV for uninterrupted Indian entertainment.
              </p>
              <div className="features-grid">
                {features.map(f => (
                  <div key={f.title} className="feature-item">
                    <span className="feature-icon">{f.icon}</span>
                    <div className="feature-title">{f.title}</div>
                    <div className="feature-desc">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — FAQ */}
            <div className="whyus-right">
              <span className="faq-tag">FAQ</span>
              <h2 className="faq-title">Frequently Asked<br/>Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className={`faq-item ${open === i ? "active" : ""}`}>
                  <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-icon">{open === i ? "+" : "+"}</span>
                  </button>
                  {open === i && (
                    <div className="faq-answer">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="cta-banner">
            <div className="cta-banner-bg" />
            <div className="cta-banner-overlay" />
            <div className="cta-banner-content">
              <h2>
                Your Local <span>Premium IPTV</span><br/>
                Provider in USA & Canada
              </h2>
              <div className="cta-banner-btns">
                <button className="cta-btn-primary" onClick={() => setShowForm(true)}>
                  🎁 Get Free Trial
                </button>
                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="cta-btn-secondary">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
