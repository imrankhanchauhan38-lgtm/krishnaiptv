"use client";
import { useState } from "react";

const testimonials = [
  { name: "Vijay", location: "USA", text: "Great customer service! The man I spoke with was very helpful in answering questions as well as helping in finding the best solutions for IPTV services.", avatar: "👳" },
  { name: "Rajesh Kumar", location: "California, USA", text: "Krishna IPTV is amazing! Crystal clear 4K quality. All Hindi and Punjabi channels working perfectly. Best IPTV service I have used in USA.", avatar: "👨" },
  { name: "Priya Singh", location: "Toronto, Canada", text: "Excellent service! All South Indian channels working perfectly. Malayalam, Tamil, Telugu — all great. Customer support is very responsive on WhatsApp.", avatar: "👩" },
  { name: "Gurpreet S.", location: "New Jersey, USA", text: "Switched from another provider and Krishna IPTV is 10x better. No buffering at all. All channels work perfectly. Highly recommended!", avatar: "🧔" },
];

export default function TestimonialsMap() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <>
      <style>{`
        .tm2-section {
          padding: 80px 24px;
          background: #0a0a12;
          position: relative; overflow: hidden;
        }
        .tm2-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        /* Dot world map bg */
        .tm2-map-bg {
          position: absolute; inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(circle, #FFD700 1px, transparent 1px);
          background-size: 22px 22px;
          pointer-events: none;
        }
        .tm2-inner {
          position: relative; z-index: 10;
          max-width: 1200px; margin: 0 auto;
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 60px; align-items: center;
        }

        /* LEFT Image */
        .tm2-img-box {
          width: 100%; aspect-ratio: 3/4;
          border-radius: 20px; overflow: hidden;
          background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
          border: 2px dashed rgba(255,215,0,0.12);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 12px; color: rgba(255,215,0,0.2);
          text-align: center; padding: 24px;
        }

        /* RIGHT */
        .tm2-right {}
        .tm2-tag {
          color: #FFD700; font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 12px; display: block;
        }
        .tm2-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 900; color: #fff;
          margin-bottom: 8px; line-height: 1.2;
        }
        .tm2-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tm2-sub { color: #6b7280; font-size: 14px; margin-bottom: 32px; }

        /* Card */
        .tm2-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 36px;
          margin-bottom: 20px;
          transition: border-color 0.3s;
          position: relative;
        }
        .tm2-card:hover { border-color: rgba(255,215,0,0.2); }
        .tm2-quote {
          font-size: 56px; color: rgba(255,215,0,0.12);
          font-family: Georgia, serif; line-height: 0.5;
          margin-bottom: 20px; display: block;
        }
        .tm2-text {
          color: #d1d5db; font-size: 15px;
          line-height: 1.8; margin-bottom: 24px;
          font-style: italic;
        }
        .tm2-author {
          display: flex; align-items: center; gap: 14px;
        }
        .tm2-avatar {
          width: 52px; height: 52px; border-radius: 50%;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; flex-shrink: 0;
          border: 3px solid rgba(255,215,0,0.25);
        }
        .tm2-name {
          font-size: 15px; font-weight: 800; color: #FFD700;
          margin-bottom: 2px;
        }
        .tm2-loc { font-size: 12px; color: #6b7280; }
        .tm2-stars { margin-left: auto; color: #FFD700; font-size: 16px; }

        /* Controls */
        .tm2-controls {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 40px;
        }
        .tm2-nav {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid rgba(255,215,0,0.3);
          background: transparent; color: #FFD700;
          font-size: 16px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .tm2-nav:hover { background: rgba(255,215,0,0.1); border-color: #FFD700; }
        .tm2-dots { display: flex; gap: 8px; }
        .tm2-dot {
          height: 4px; border-radius: 2px;
          border: none; cursor: pointer; transition: all 0.3s;
          background: rgba(255,255,255,0.12);
        }
        .tm2-dot.active { background: #FFD700; }

        /* Bottom CTA */
        .tm2-cta {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 16px; padding: 28px 36px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 20px;
          flex-wrap: wrap;
        }
        .tm2-cta h3 {
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 900; color: #000; margin-bottom: 4px;
        }
        .tm2-cta p { color: rgba(0,0,0,0.6); font-size: 13px; }
        .tm2-cta-btn {
          background: #000; color: #FFD700;
          font-weight: 800; font-size: 13px;
          padding: 13px 24px; border-radius: 50px;
          border: none; cursor: pointer;
          white-space: nowrap; text-decoration: none;
          display: inline-block; transition: all 0.2s;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .tm2-cta-btn:hover { background: #111; transform: translateY(-1px); }

        @media (max-width: 900px) {
          .tm2-inner { grid-template-columns: 1fr; }
          .tm2-img-box { display: none; }
          .tm2-cta { flex-direction: column; text-align: center; padding: 24px 20px; }
        }
        @media (max-width: 600px) {
          .tm2-section { padding: 60px 20px; }
          .tm2-card { padding: 24px 20px; }
        }
      `}</style>

      <section className="tm2-section">
        <div className="tm2-map-bg" />
        <div className="tm2-inner">

          {/* LEFT */}
          <div className="tm2-img-box">
            {/*
              Real image:
              <img src="/images/family-tv.jpg" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"18px",position:"absolute",inset:0}} />
            */}
            <div style={{fontSize:"80px"}}>👨‍👩‍👧‍👦</div>
            <div style={{fontSize:"14px",fontWeight:600}}>Family Photo</div>
            <div style={{fontSize:"11px",opacity:0.4}}>public/images/family-tv.jpg</div>
          </div>

          {/* RIGHT */}
          <div className="tm2-right">
            <span className="tm2-tag">✦ Testimonials</span>
            <h2 className="tm2-title">What Our <span>Customers Say</span></h2>
            <p className="tm2-sub">50,000+ happy customers across USA & Canada</p>

            <div className="tm2-card">
              <span className="tm2-quote">"</span>
              <p className="tm2-text">{t.text}</p>
              <div className="tm2-author">
                <div className="tm2-avatar">{t.avatar}</div>
                <div>
                  <div className="tm2-name">{t.name}</div>
                  <div className="tm2-loc">{t.location}</div>
                </div>
                <div className="tm2-stars">★★★★★</div>
              </div>
            </div>

            <div className="tm2-controls">
              <button className="tm2-nav" onClick={() => setCurrent(p => (p-1+testimonials.length)%testimonials.length)}>←</button>
              <div className="tm2-dots">
                {testimonials.map((_,i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`tm2-dot ${i===current?"active":""}`}
                    style={{width:i===current?"24px":"8px"}} />
                ))}
              </div>
              <button className="tm2-nav" onClick={() => setCurrent(p => (p+1)%testimonials.length)}>→</button>
            </div>

            <div className="tm2-cta">
              <div>
                <h3>Top Selling Indian IPTV</h3>
                <p>One of the largest Indian IPTV providers with 50,000+ happy customers worldwide.</p>
              </div>
              <a href="/plans" className="tm2-cta-btn">Book Now an Appointment</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
