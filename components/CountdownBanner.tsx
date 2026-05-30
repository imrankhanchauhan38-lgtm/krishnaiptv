"use client";
import { useState, useEffect } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

function useCountdown(targetDays: number) {
  const [time, setTime] = useState({ days: targetDays, hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}

export default function CountdownBanner() {
  const time = useCountdown(7);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        .cd-section {
          background: linear-gradient(135deg, #1a0a2e 0%, #0f0f2e 40%, #0a1628 100%);
          position: relative;
          overflow: hidden;
        }
        .cd-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(108,99,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(255,215,0,0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        /* Top offer strip */
        .cd-top {
          padding: 40px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }
        .cd-top-left { max-width: 480px; }
        .cd-free-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-size: 13px; font-weight: 900;
          padding: 6px 16px; border-radius: 50px;
          letter-spacing: 1px; text-transform: uppercase;
          margin-bottom: 16px;
        }
        .cd-top-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900; color: #fff; line-height: 1.15;
          margin-bottom: 10px;
        }
        .cd-top-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cd-top-sub { color: #9ca3af; font-size: 15px; line-height: 1.6; }

        /* Right device image area */
        .cd-top-right {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          min-width: 280px;
        }
        .cd-device-img {
          width: 240px; height: 180px;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .cd-device-emoji { font-size: 100px; filter: drop-shadow(0 20px 40px rgba(255,215,0,0.2)); }
        .cd-offer-badge {
          position: absolute;
          top: -10px; right: -10px;
          width: 80px; height: 80px;
          background: linear-gradient(135deg, #ff2d78, #ff0051);
          border-radius: 50%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(255,45,120,0.4);
          animation: badgePulse 2s infinite;
        }
        @keyframes badgePulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .cd-offer-badge-top { font-size: 10px; font-weight: 800; color: #fff; letter-spacing: 1px; }
        .cd-offer-badge-bot { font-size: 16px; font-weight: 900; color: #fff; }

        /* Countdown strip */
        .cd-strip {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          padding: 20px 24px;
          position: relative; z-index: 10;
        }
        .cd-strip-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 20px;
        }
        .cd-strip-left {
          display: flex; flex-direction: column; gap: 4px;
        }
        .cd-strip-title {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 900; color: #000; line-height: 1.2;
        }
        .cd-strip-sub { font-size: 13px; color: rgba(0,0,0,0.6); font-weight: 600; }

        .cd-timer {
          display: flex; align-items: center; gap: 8px;
        }
        .cd-unit {
          display: flex; flex-direction: column; align-items: center;
          min-width: 64px;
        }
        .cd-num {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900; color: #000;
          line-height: 1; font-variant-numeric: tabular-nums;
          background: rgba(0,0,0,0.08);
          padding: 8px 16px; border-radius: 10px;
          min-width: 72px; text-align: center;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }
        .cd-label {
          font-size: 11px; font-weight: 700;
          color: rgba(0,0,0,0.6); text-transform: uppercase;
          letter-spacing: 1px; margin-top: 4px;
        }
        .cd-colon {
          font-size: 2rem; font-weight: 900;
          color: rgba(0,0,0,0.4); margin-bottom: 16px;
        }
        .cd-strip-btn {
          background: #000; color: #FFD700;
          font-weight: 800; font-size: 14px;
          padding: 14px 28px; border-radius: 50px;
          border: none; cursor: pointer;
          white-space: nowrap; transition: all 0.2s;
          flex-shrink: 0;
        }
        .cd-strip-btn:hover {
          background: #111;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .cd-top { flex-direction: column; padding: 40px 20px 20px; }
          .cd-top-right { display: none; }
          .cd-strip-inner { flex-direction: column; align-items: flex-start; }
          .cd-timer { flex-wrap: wrap; }
          .cd-unit { min-width: 56px; }
          .cd-num { min-width: 60px; font-size: 1.8rem; padding: 6px 12px; }
        }
      `}</style>

      <section className="cd-section">
        {/* Top */}
        <div className="cd-top">
          <div className="cd-top-left">
            <div className="cd-free-badge">
              🎁 Limited Time Offer
            </div>
            <h2 className="cd-top-title">
              FREE <span>1 Month Bonus</span><br/>
              With 6-Month Plan
            </h2>
            <p className="cd-top-sub">
              Get totally unlimited Indian IPTV with absolutely free bonus month. 10,000+ channels, 4K quality — activate instantly!
            </p>
          </div>

          {/* Right device */}
          <div className="cd-top-right">
            <div className="cd-device-img">
              <span className="cd-device-emoji">📺</span>
              {/*
                Real image:
                <img src="/images/iptv-box.png" style={{width:"100%",objectFit:"contain"}} />
              */}
              <div className="cd-offer-badge">
                <span className="cd-offer-badge-top">Limited</span>
                <span className="cd-offer-badge-bot">OFFER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Strip */}
        <div className="cd-strip">
          <div className="cd-strip-inner">
            <div className="cd-strip-left">
              <div className="cd-strip-title">⏰ Hurry up! This offer ends in</div>
              <div className="cd-strip-sub">Don't miss out — limited slots available!</div>
            </div>

            <div className="cd-timer">
              <div className="cd-unit">
                <div className="cd-num">{String(time.days).padStart(2,"0")}</div>
                <div className="cd-label">Days</div>
              </div>
              <div className="cd-colon">:</div>
              <div className="cd-unit">
                <div className="cd-num">{String(time.hours).padStart(2,"0")}</div>
                <div className="cd-label">Hours</div>
              </div>
              <div className="cd-colon">:</div>
              <div className="cd-unit">
                <div className="cd-num">{String(time.minutes).padStart(2,"0")}</div>
                <div className="cd-label">Minutes</div>
              </div>
              <div className="cd-colon">:</div>
              <div className="cd-unit">
                <div className="cd-num">{String(time.seconds).padStart(2,"0")}</div>
                <div className="cd-label">Seconds</div>
              </div>
            </div>

            <button className="cd-strip-btn" onClick={() => setShowForm(true)}>
              🎁 Claim This Offer →
            </button>
          </div>
        </div>
      </section>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
