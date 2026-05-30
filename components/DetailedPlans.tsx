"use client";
import { useState, useEffect, useRef } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

const commonFeatures = [
  "Access to 8000+ live Indian and international channels",
  "230+ Hindi TV channels included",
  "Full language coverage: Hindi, Punjabi, Tamil, Telugu, Malayalam, Kannada, Bengali, Gujarati, Marathi, Odia, Urdu, Nepali & more",
  "Pause & rewind feature for live channels",
  "Catch-up TV: Rewind HD channels for up to 7 days",
  "Huge Indian movie selection",
  "Ultra HD 4K streaming for crystal-clear quality",
  "Works on Smart TVs, Android Boxes, Firestick & more",
  "24/7 customer support from our dedicated team",
];

const trialFeatures = [
  "Test our service before buying",
  "Access to all live channels",
  "Full HD quality streaming",
  "Works on all your devices",
  "WhatsApp activation in minutes",
  "No credit card required",
  "24/7 support during trial",
  "Cancel anytime — no commitment",
  "Experience zero buffering",
];

const VISIBLE = 3;
const AUTO_SLIDE_MS = 3000;

export default function DetailedPlans() {
  const [showForm, setShowForm] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [openDetails, setOpenDetails] = useState<number | null>(null);
  const [startIdx, setStartIdx] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const allPlans = brand.plans; // 7 plans including free trial
  const total = allPlans.length;

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setStartIdx(p => (p + 1) % (total - VISIBLE + 1));
    }, AUTO_SLIDE_MS);
  };

  useEffect(() => {
    startAutoSlide();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (idx: number) => {
    setStartIdx(idx);
    startAutoSlide();
  };

  const prev = () => {
    setStartIdx(p => Math.max(0, p - 1));
    startAutoSlide();
  };

  const next = () => {
    setStartIdx(p => Math.min(total - VISIBLE, p + 1));
    startAutoSlide();
  };

  const visiblePlans = allPlans.slice(startIdx, startIdx + VISIBLE);

  return (
    <>
      <style>{`
        .dp-section {
          padding: 80px 24px;
          background: #08080f;
          position: relative; overflow: hidden;
        }
        .dp-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        .dp-max { max-width: 1200px; margin: 0 auto; }

        /* Header */
        .dp-header { text-align: center; margin-bottom: 56px; }
        .dp-tag {
          color: #FFD700; font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 14px; display: block;
        }
        .dp-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900; color: #fff; margin-bottom: 14px; line-height: 1.15;
        }
        .dp-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .dp-sub { color: #6b7280; font-size: 15px; max-width: 640px; margin: 0 auto; line-height: 1.7; }

        /* Slider wrapper */
        .dp-slider-wrap { position: relative; }
        .dp-slider-nav {
          position: absolute; top: 40%;
          transform: translateY(-50%);
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(255,215,0,0.1);
          border: 1.5px solid rgba(255,215,0,0.3);
          color: #FFD700; font-size: 18px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s; z-index: 20;
        }
        .dp-slider-nav:hover { background: rgba(255,215,0,0.2); border-color: #FFD700; }
        .dp-slider-nav:disabled { opacity: 0.3; cursor: not-allowed; }
        .dp-nav-prev { left: -56px; }
        .dp-nav-next { right: -56px; }

        /* Cards grid — always 3 visible */
        .dp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: start;
        }

        /* Card */
        .dp-card {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: #0f0f1a;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden; cursor: pointer;
        }
        .dp-card:hover, .dp-card.active {
          border-color: rgba(255,215,0,0.3);
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(255,215,0,0.08);
        }
        .dp-card.popular {
          border-color: rgba(255,215,0,0.25);
          background: linear-gradient(160deg, rgba(255,215,0,0.06), #0f0f1a);
          transform: translateY(-4px);
        }
        .dp-card.popular:hover { transform: translateY(-12px); }
        .dp-card.trial {
          border-color: rgba(74,222,128,0.25);
          background: linear-gradient(160deg, rgba(74,222,128,0.05), #0f0f1a);
        }
        .dp-card.trial:hover {
          border-color: rgba(74,222,128,0.4);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(74,222,128,0.08);
        }

        .dp-topline { height: 4px; width: 100%; }
        .dp-badge {
          position: absolute; top: -1px; left: 50%;
          transform: translateX(-50%);
          font-size: 9px; font-weight: 900;
          padding: 3px 14px; border-radius: 0 0 8px 8px;
          text-transform: uppercase; letter-spacing: 1.5px;
          color: #000; white-space: nowrap; z-index: 10;
        }
        .dp-card.trial .dp-badge { color: #000; }

        /* Plan head */
        .dp-plan-head {
          padding: 24px 20px 16px; text-align: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .dp-plan-icon { font-size: 32px; margin-bottom: 8px; display: block; }
        .dp-plan-name {
          font-size: 10px; font-weight: 800; letter-spacing: 3px;
          text-transform: uppercase; color: #6b7280; margin-bottom: 4px;
        }
        .dp-card:hover .dp-plan-name { color: #FFD700; }
        .dp-card.trial:hover .dp-plan-name { color: #4ade80; }
        .dp-plan-tag { font-size: 11px; color: #4b5563; }

        /* Price */
        .dp-price-area {
          padding: 20px; text-align: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .dp-price-row {
          display: flex; align-items: flex-start;
          justify-content: center; gap: 2px; margin-bottom: 4px;
        }
        .dp-dollar { font-size: 1.2rem; font-weight: 700; color: #fff; margin-top: 6px; }
        .dp-amount { font-size: 3rem; font-weight: 900; color: #fff; line-height: 1; }
        .dp-card.popular .dp-amount, .dp-card:hover .dp-amount {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .dp-card.trial .dp-amount { color: #4ade80 !important; -webkit-text-fill-color: #4ade80 !important; }
        .dp-dur { font-size: 12px; color: #6b7280; margin-bottom: 8px; }
        .dp-pm {
          display: inline-block;
          border: 1px solid rgba(255,215,0,0.25); color: #FFD700;
          font-size: 10px; font-weight: 800;
          padding: 3px 10px; border-radius: 50px;
          background: rgba(255,215,0,0.05);
        }
        .dp-card.trial .dp-pm {
          border-color: rgba(74,222,128,0.3); color: #4ade80;
          background: rgba(74,222,128,0.05);
        }

        /* CTA */
        .dp-cta { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .dp-btn {
          width: 100%; padding: 12px; border-radius: 10px;
          font-size: 13px; font-weight: 800; cursor: pointer;
          border: none; transition: all 0.2s;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .dp-btn:hover { transform: translateY(-1px); }

        /* Body */
        .dp-body { padding: 16px; }
        .dp-section-label {
          font-size: 12px; font-weight: 800; color: #fff;
          margin-bottom: 10px; letter-spacing: 0.5px;
        }
        .dp-feat {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12px; color: #9ca3af; line-height: 1.5;
          padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .dp-feat:last-child { border-bottom: none; }
        .dp-chk {
          width: 16px; height: 16px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 8px; font-weight: 900; color: #000;
          flex-shrink: 0; margin-top: 2px;
        }
        .dp-one-time {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 11px; color: #FFD700; font-weight: 700; padding: 8px 0;
        }

        /* Toggle */
        .dp-toggle {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 16px;
          border-top: 1px solid rgba(255,255,255,0.05);
          background: none; border-left: none; border-right: none; border-bottom: none;
          width: 100%; cursor: pointer; font-size: 12px; font-weight: 700; transition: all 0.2s;
        }
        .dp-toggle:hover { background: rgba(255,215,0,0.03); }
        .dp-expand { padding: 0 16px 16px; }
        .dp-exp-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: #9ca3af;
          padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        /* Dots */
        .dp-dots {
          display: flex; justify-content: center; gap: 8px; margin-top: 28px;
        }
        .dp-dot {
          height: 4px; border-radius: 2px; border: none;
          cursor: pointer; transition: all 0.3s;
          background: rgba(255,255,255,0.12);
        }
        .dp-dot.active { background: #FFD700; }

        /* Bottom */
        .dp-bottom { text-align: center; margin-top: 40px; }
        .dp-bottom-btn {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-weight: 800; font-size: 15px;
          padding: 16px 48px; border-radius: 50px; border: none; cursor: pointer; transition: all 0.2s;
        }
        .dp-bottom-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(255,215,0,0.3); }

        @media (max-width: 1100px) {
          .dp-nav-prev { left: -20px; }
          .dp-nav-next { right: -20px; }
        }
        @media (max-width: 768px) {
          .dp-grid { grid-template-columns: 1fr; }
          .dp-slider-nav { display: none; }
        }
      `}</style>

      <section className="dp-section" id="plans">
        <div className="dp-max">

          <div className="dp-header">
            <span className="dp-tag">✦ Network Packages</span>
            <h2 className="dp-title">Plans For Every Home — <span>Discover Our Best Value Offers</span></h2>
            <p className="dp-sub">
              Whether you need a short-term trial or a long-term solution, all our plans come with premium features and complete entertainment in HD and 4K quality, without buffering.
            </p>
          </div>

          {/* Slider */}
          <div className="dp-slider-wrap">
            <button className="dp-slider-nav dp-nav-prev" onClick={prev} disabled={startIdx === 0}>←</button>
            <button className="dp-slider-nav dp-nav-next" onClick={next} disabled={startIdx >= total - VISIBLE}>→</button>

            <div className="dp-grid">
              {visiblePlans.map((plan, vi) => {
                const gi = startIdx + vi;
                const isTrial = plan.name === "Free Trial";
                const features = isTrial ? trialFeatures : commonFeatures;

                return (
                  <div key={gi}
                    className={`dp-card ${plan.popular ? "popular" : ""} ${hovered === gi ? "active" : ""} ${isTrial ? "trial" : ""}`}
                    onMouseEnter={() => setHovered(gi)}
                    onMouseLeave={() => setHovered(null)}>

                    <div className="dp-topline" style={{background: plan.color}} />

                    {plan.badge && (
                      <div className="dp-badge" style={{background: isTrial ? "#4ade80" : plan.color}}>
                        {plan.badge}
                      </div>
                    )}

                    {/* Head */}
                    <div className="dp-plan-head">
                      <span className="dp-plan-icon">{plan.icon}</span>
                      <div className="dp-plan-name">♦ {plan.name}</div>
                      <div className="dp-plan-tag">{plan.tag}</div>
                    </div>

                    {/* Price */}
                    <div className="dp-price-area">
                      <div className="dp-price-row">
                        {!isTrial && <span className="dp-dollar">$</span>}
                        <span className="dp-amount">{isTrial ? "FREE" : plan.price.replace("$","")}</span>
                      </div>
                      <div className="dp-dur">{isTrial ? "Limited Time Trial" : `for ${plan.duration}`}</div>
                      <span className="dp-pm">{isTrial ? "🎁 NO CREDIT CARD" : `JUST ONLY ${plan.perMonth}`}</span>
                    </div>

                    {/* CTA */}
                    <div className="dp-cta">
                      <button className="dp-btn" onClick={() => setShowForm(true)}
                        style={{
                          background: isTrial
                            ? "linear-gradient(135deg,#4ade80,#22c55e)"
                            : plan.popular || hovered === gi
                            ? `linear-gradient(135deg,${plan.color},#FFA500)`
                            : `${plan.color}18`,
                          color: isTrial ? "#000" : plan.popular || hovered === gi ? "#000" : plan.color,
                          border: isTrial || plan.popular || hovered === gi ? "none" : `1px solid ${plan.color}40`,
                        }}>
                        {isTrial ? "🎁 GET FREE TRIAL" : plan.popular ? "⭐ BUY NOW" : "BUY NOW"}
                      </button>
                    </div>

                    {/* Features */}
                    <div className="dp-body">
                      <div className="dp-section-label">{isTrial ? "Trial includes:" : "Offer includes:"}</div>
                      {features.map((f, j) => (
                        <div key={j} className="dp-feat">
                          <div className="dp-chk" style={{background: isTrial ? "#4ade80" : plan.color}}>✓</div>
                          {f}
                        </div>
                      ))}
                      <div className="dp-one-time" style={{color: isTrial ? "#4ade80" : "#FFD700"}}>
                        <span>{isTrial ? "✨" : "👉"}</span>
                        <span>{isTrial ? "No commitment — try free!" : `One-time payment. No renewals for ${plan.duration}!`}</span>
                      </div>
                    </div>

                    {/* Toggle */}
                    <button className="dp-toggle" style={{color: isTrial ? "#4ade80" : plan.color}}
                      onClick={() => setOpenDetails(openDetails === gi ? null : gi)}>
                      <span>View details</span>
                      <span style={{fontSize:"12px",display:"inline-block",transition:"transform 0.3s",
                        transform: openDetails === gi ? "rotate(180deg)" : "none"}}>▼</span>
                    </button>

                    {openDetails === gi && (
                      <div className="dp-expand">
                        {isTrial ? [
                          "Works on all devices instantly",
                          "Full channel access during trial",
                          "WhatsApp activation in minutes",
                          "No payment required",
                        ].map((f,j) => (
                          <div key={j} className="dp-exp-item">
                            <span style={{color:"#4ade80",fontSize:"10px"}}>✦</span> {f}
                          </div>
                        )) : [
                          `${plan.quality} Quality`,
                          `${plan.devices} Device${plan.devices > 1 ? "s" : ""} Supported`,
                          "Instant Activation",
                          "Free Setup Support",
                        ].map((f,j) => (
                          <div key={j} className="dp-exp-item">
                            <span style={{color:plan.color,fontSize:"10px"}}>✦</span> {f}
                          </div>
                        ))}
                        <button onClick={() => setShowForm(true)}
                          style={{marginTop:"12px",width:"100%",padding:"10px",borderRadius:"10px",
                            fontSize:"12px",fontWeight:700,cursor:"pointer",
                            border:`1px solid ${isTrial ? "#4ade8040" : plan.color+"40"}`,
                            background:`${isTrial ? "#4ade8010" : plan.color+"10"}`,
                            color: isTrial ? "#4ade80" : plan.color}}>
                          {isTrial ? "Get Free Trial →" : "Get This Plan →"}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dots */}
            <div className="dp-dots">
              {Array.from({length: total - VISIBLE + 1}).map((_,i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`dp-dot ${i === startIdx ? "active" : ""}`}
                  style={{width: i === startIdx ? "24px" : "8px"}} />
              ))}
            </div>
          </div>

          <div className="dp-bottom">
            <p style={{color:"#6b7280",fontSize:"14px",marginBottom:"16px"}}>
              Not sure? Start with a free trial — no credit card needed!
            </p>
            <button className="dp-bottom-btn" onClick={() => setShowForm(true)}>
              🎁 Start Free Trial
            </button>
          </div>

        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
