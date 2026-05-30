"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";

const services = [
  {
    icon: "📺",
    title: "Live TV Channels",
    desc: "Watch 10,000+ live Indian channels in HD & 4K quality. Hindi, Punjabi, Tamil, Telugu & 50+ more languages.",
    link: "#channels",
  },
  {
    icon: "📱",
    title: "Mobile Streaming",
    desc: "Stream on any device — iPhone, Android, tablet. Use our app to watch anywhere, anytime on the go.",
    link: "#devices",
  },
  {
    icon: "🎬",
    title: "Movies & VOD",
    desc: "100,000+ on-demand movies, web series & shows. Latest Bollywood, Hollywood & regional content.",
    link: "#plans",
  },
  {
    icon: "🏠",
    title: "Smart TV & Box",
    desc: "Works on Smart TV, Fire Stick, MAG Box & Android Box. Plug in and start watching in minutes.",
    link: "#devices",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(1);

  return (
    <>
      <style>{`
        .services-section {
          padding: 100px 24px;
          background: #0a0a12;
          position: relative;
          overflow: hidden;
        }
        .services-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        .services-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .services-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: end;
          margin-bottom: 60px;
        }
        .services-tag {
          color: #FFD700;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }
        .services-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
        }
        .services-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .services-desc {
          color: #6b7280;
          font-size: 1rem;
          line-height: 1.75;
          max-width: 420px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }
        .service-card {
          border-radius: 20px;
          padding: 32px 24px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.04));
          opacity: 0;
          transition: opacity 0.35s;
        }
        .service-card.active {
          border-color: rgba(255,215,0,0.4);
          background: linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.03));
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(255,215,0,0.12);
        }
        .service-card.active::before { opacity: 1; }
        .service-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 20px;
          transition: all 0.35s;
          position: relative;
          z-index: 1;
        }
        .service-card.active .service-icon-wrap {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-color: transparent;
          box-shadow: 0 8px 30px rgba(255,215,0,0.3);
        }
        .service-card-title {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
        }
        .service-card.active .service-card-title {
          color: #FFD700;
        }
        .service-card-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.65;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
          margin-bottom: 20px;
        }
        .service-card.active .service-card-desc {
          color: #9ca3af;
        }
        .service-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: all 0.3s;
          position: relative;
          z-index: 1;
        }
        .service-card.active .service-card-link {
          color: #FFD700;
        }
        .service-card-link-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.2);
          font-size: 12px;
          transition: all 0.3s;
        }
        .service-card.active .service-card-link-arrow {
          border-color: #FFD700;
          background: rgba(255,215,0,0.1);
        }
        .services-bottom {
          text-align: center;
        }
        .services-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000;
          font-weight: 800;
          font-size: 15px;
          padding: 16px 40px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .services-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,215,0,0.3);
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .services-header {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .services-section { padding: 60px 20px; }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            padding: 24px 20px;
          }
        }
      `}</style>

      <section className="services-section">
        <div className="services-inner">

          {/* Header */}
          <div className="services-header">
            <div>
              <span className="services-tag">✦ What We Offer</span>
              <h2 className="services-title">
                Experience Krishna IPTV<br/>
                <span>Unlimited Possibilities</span>
              </h2>
            </div>
            <p className="services-desc">
              We provide the best Indian IPTV experience with premium features at the most affordable price. Everything you need for non-stop entertainment.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={i}
                className={`service-card ${hovered === i ? "active" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="service-icon-wrap">{s.icon}</div>
                <div className="service-card-title">{s.title}</div>
                <div className="service-card-desc">{s.desc}</div>
                <a href={s.link} className="service-card-link">
                  Learn more
                  <span className="service-card-link-arrow">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="services-bottom">
            <a href="#plans" className="services-more-btn">
              View All Plans & Features →
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
