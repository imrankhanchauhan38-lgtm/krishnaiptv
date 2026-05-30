"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

const plans = [
  {
    name: "Starter",
    price: "15",
    period: "mo",
    features: ["10,000+ Live Channels", "HD Quality", "1 Device", "All Languages", "24/7 Support"],
    popular: false,
    speed: 30,
  },
  {
    name: "Silver",
    price: "35",
    period: "mo",
    features: ["10,000+ Live Channels", "FHD Quality", "1 Device", "All Languages", "24/7 Support", "50K+ VOD"],
    popular: false,
    speed: 55,
  },
  {
    name: "Gold",
    price: "60",
    period: "mo",
    features: ["10,000+ Live Channels", "4K Quality", "2 Devices", "All Languages", "Priority Support", "100K+ VOD"],
    popular: true,
    speed: 75,
  },
  {
    name: "Platinum",
    price: "99",
    period: "yr",
    features: ["10,000+ Live Channels", "4K Quality", "3 Devices", "All Languages", "VIP Support", "Full VOD", "EPG Guide"],
    popular: false,
    speed: 95,
  },
];

function Speedometer({ percent, active }: { percent: number; active: boolean }) {
  const r = 40;
  const cx = 50;
  const cy = 50;
  const circumference = Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width="100" height="60" viewBox="0 0 100 60" style={{overflow:"visible"}}>
      <path d={`M 10 50 A ${r} ${r} 0 0 1 90 50`}
        fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinecap="round" />
      <path d={`M 10 50 A ${r} ${r} 0 0 1 90 50`}
        fill="none"
        stroke={active ? "url(#goldGrad)" : "rgba(255,215,0,0.3)"}
        strokeWidth="8" strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{transition:"stroke-dashoffset 0.8s ease"}}
      />
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700"/>
          <stop offset="100%" stopColor="#FFA500"/>
        </linearGradient>
      </defs>
      {/* Needle */}
      <line
        x1={cx} y1={cy}
        x2={cx + 32 * Math.cos(Math.PI - (percent/100) * Math.PI)}
        y2={cy - 32 * Math.sin((percent/100) * Math.PI) + 10}
        stroke={active ? "#FFD700" : "rgba(255,215,0,0.4)"}
        strokeWidth="2.5" strokeLinecap="round"
        style={{transition:"all 0.8s ease"}}
      />
      <circle cx={cx} cy={cy} r="4" fill={active ? "#FFD700" : "rgba(255,215,0,0.4)"} />
    </svg>
  );
}

export default function PricingSection() {
  const [showForm, setShowForm] = useState(false);
  const [hovered, setHovered] = useState<number | null>(2);

  return (
    <>
      <style>{`
        .pricing-section {
          padding: 100px 24px;
          background: #0a0a12;
          position: relative;
          overflow: hidden;
        }
        .pricing-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        .pricing-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .pricing-tag {
          color: #FFD700;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }
        .pricing-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #fff;
          margin-bottom: 16px;
        }
        .pricing-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pricing-sub {
          color: #6b7280;
          font-size: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .pricing-card {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: #0f0f1a;
          transition: all 0.35s;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .pricing-card-top {
          height: 4px;
          background: rgba(255,255,255,0.06);
          transition: background 0.3s;
        }
        .pricing-card.active .pricing-card-top {
          background: linear-gradient(90deg, #FFD700, #FFA500);
        }
        .pricing-card.active {
          border-color: rgba(255,215,0,0.3);
          background: linear-gradient(160deg, rgba(255,215,0,0.06), #0f0f1a);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(255,215,0,0.1);
        }
        .pricing-card-body {
          padding: 28px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .popular-badge {
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000;
          font-size: 10px;
          font-weight: 900;
          padding: 4px 14px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 2px;
          white-space: nowrap;
          z-index: 10;
        }
        .pricing-speedo {
          display: flex;
          justify-content: center;
          margin: 16px 0 8px;
        }
        .pricing-name {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          color: #6b7280;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .pricing-price-wrap {
          text-align: center;
          margin-bottom: 24px;
        }
        .pricing-dollar {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          vertical-align: top;
          line-height: 2;
        }
        .pricing-amount {
          font-size: 3rem;
          font-weight: 900;
          color: #fff;
          line-height: 1;
        }
        .pricing-card.active .pricing-amount {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pricing-period {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }
        .pricing-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin-bottom: 20px;
        }
        .pricing-features {
          list-style: none;
          margin-bottom: 24px;
          flex: 1;
        }
        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #9ca3af;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .pricing-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(255,215,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: #FFD700;
          flex-shrink: 0;
        }
        .pricing-card-btn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          margin-bottom: 12px;
        }
        .pricing-card-btn.gold {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000;
        }
        .pricing-card-btn.outline {
          background: transparent;
          border: 1.5px solid rgba(255,215,0,0.25);
          color: #FFD700;
        }
        .pricing-card-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .pricing-call {
          text-align: center;
          font-size: 12px;
          color: #FFD700;
          text-decoration: none;
          display: block;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .pricing-call:hover { opacity: 1; }

        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .pricing-section { padding: 60px 20px; }
          .pricing-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="pricing-section" id="plans">
        <div className="pricing-inner">
          <div className="pricing-header">
            <span className="pricing-tag">✦ Pricing Plans</span>
            <h2 className="pricing-title">Our Best Value <span>Bundles</span></h2>
            <p className="pricing-sub">Get the best Indian IPTV experience at the most affordable price. No hidden fees.</p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <div key={i}
                className={`pricing-card ${hovered === i ? "active" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(2)}>

                <div className="pricing-card-top" />
                {plan.popular && <div className="popular-badge">⭐ Most Popular</div>}

                <div className="pricing-card-body">
                  {/* Speedometer */}
                  <div className="pricing-speedo">
                    <Speedometer percent={plan.speed} active={hovered === i} />
                  </div>

                  <div className="pricing-name">{plan.name}</div>

                  <div className="pricing-price-wrap">
                    <span className="pricing-dollar">$</span>
                    <span className="pricing-amount">{plan.price}</span>
                    <span className="pricing-period">/{plan.period}</span>
                  </div>

                  <div className="pricing-divider" />

                  <ul className="pricing-features">
                    {plan.features.map(f => (
                      <li key={f} className="pricing-feature">
                        <span className="pricing-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`pricing-card-btn ${plan.popular || hovered === i ? "gold" : "outline"}`}
                    onClick={() => setShowForm(true)}>
                    Get Started
                  </button>
                  <a href={`tel:${brand.phone}`} className="pricing-call">
                    Or call {brand.phone}
                  </a>
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
