"use client";
import { useEffect, useRef, useState } from "react";
import { brand } from "@/styles/brand";

const stats = [
  { icon: "📺", num: 10000, suffix: "+", label: "Live Channels" },
  { icon: "🌎", num: 50, suffix: "+", label: "Languages" },
  { icon: "👥", num: 50000, suffix: "+", label: "Happy Customers" },
  { icon: "⭐", num: 99, suffix: ".9%", label: "Uptime Guarantee" },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatItem({ icon, num, suffix, label }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(num, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const display = num >= 1000 ? (count >= 1000 ? Math.floor(count/1000)+"k" : count.toString()) : count.toString();

  return (
    <div ref={ref} className="stat-row">
      <div className="stat-icon-circle">
        <span style={{fontSize:"24px"}}>{icon}</span>
      </div>
      <div className="stat-text">
        <div className="stat-number">{num >= 1000 ? (started ? Math.floor(count/1000)+"k" : "0") : (started ? count : "0")}{suffix}</div>
        <div className="stat-label-text">{label}</div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <>
      <style>{`
        .stats-section {
          padding: 100px 24px;
          background: #08080f;
          position: relative;
          overflow: hidden;
        }
        .stats-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        .stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* LEFT */
        .stats-left {}
        .stats-tag {
          color: #FFD700;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }
        .stats-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .stats-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stats-desc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 36px;
        }
        .stats-desc-text {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.75;
        }
        .stats-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .stats-img-box {
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
          border: 2px dashed rgba(255,215,0,0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255,215,0,0.2);
          font-size: 12px;
          gap: 8px;
          text-align: center;
          padding: 12px;
          transition: border-color 0.3s;
        }
        .stats-img-box:hover {
          border-color: rgba(255,215,0,0.25);
        }
        /* Real image aane par */
        .stats-img-real {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* RIGHT */
        .stats-right {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .stat-row {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 28px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s;
          border-radius: 0;
        }
        .stat-row:first-child {
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .stat-row:hover {
          background: rgba(255,215,0,0.03);
          border-color: rgba(255,215,0,0.15);
        }
        .stat-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255,215,0,0.08);
          border: 1.5px solid rgba(255,215,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        .stat-row:hover .stat-icon-circle {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-color: transparent;
          box-shadow: 0 8px 24px rgba(255,215,0,0.25);
        }
        .stat-row:hover .stat-icon-circle span {
          filter: grayscale(1) brightness(0);
        }
        .stat-text {}
        .stat-number {
          font-size: 2.2rem;
          font-weight: 900;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label-text {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .stats-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 600px) {
          .stats-section { padding: 60px 20px; }
          .stats-desc-grid { grid-template-columns: 1fr; }
          .stat-row { padding: 20px 16px; }
          .stat-number { font-size: 1.8rem; }
        }
      `}</style>

      <section className="stats-section">
        <div className="stats-inner">

          {/* LEFT */}
          <div className="stats-left">
            <span className="stats-tag">✦ Why Choose Us</span>
            <h2 className="stats-title">
              All Your Favorite Indian TV<br/>
              For a <span>Better Value</span> —<br/>
              No Hidden Fees
            </h2>

            <div className="stats-desc-grid">
              <p className="stats-desc-text">
                Krishna IPTV gives you instant access to all your favorite live channels and on-demand video at the lowest price. No hidden fees, no equipment rentals, no contracts.
              </p>
              <p className="stats-desc-text">
                We've built the most affordable Indian IPTV plan so you get the entertainment you want, when you want it — on any device, anywhere in USA & Canada.
              </p>
            </div>

            {/* 2 Image boxes */}
            <div className="stats-images">
              <div className="stats-img-box">
                {/* 
                  Real image: public/images/stats1.jpg
                  <img src="/images/stats1.jpg" className="stats-img-real" alt="Friends watching sports" />
                */}
                <div style={{fontSize:"40px"}}>⚽</div>
                <div>Sports Channels</div>
                <div style={{fontSize:"10px",opacity:0.5}}>public/images/stats1.jpg</div>
              </div>
              <div className="stats-img-box">
                {/*
                  Real image: public/images/stats2.jpg
                  <img src="/images/stats2.jpg" className="stats-img-real" alt="Family watching TV" />
                */}
                <div style={{fontSize:"40px"}}>📺</div>
                <div>Family Entertainment</div>
                <div style={{fontSize:"10px",opacity:0.5}}>public/images/stats2.jpg</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Animated Stats */}
          <div className="stats-right">
            {stats.map((s, i) => (
              <StatItem key={i} {...s} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
