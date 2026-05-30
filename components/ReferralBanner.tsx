"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";

export default function ReferralBanner() {
  const [form, setForm] = useState({ name: "", phone: "", friend: "", friendPhone: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🎁 Referral Request!%0AMy Name: ${form.name}%0AMy Phone: ${form.phone}%0AFriend Name: ${form.friend}%0AFriend Phone: ${form.friendPhone}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <style>{`
        .referral-section {
          padding: 64px 24px;
          position: relative;
          overflow: hidden;
          background: #FFD700;
        }
        .referral-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 30px,
            rgba(0,0,0,0.5) 30px,
            rgba(0,0,0,0.5) 32px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 30px,
            rgba(0,0,0,0.5) 30px,
            rgba(0,0,0,0.5) 32px
          );
        }
        .referral-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          text-align: center;
        }
        .referral-tag {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
          margin-bottom: 12px;
          display: block;
        }
        .referral-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 900;
          color: #000;
          margin-bottom: 8px;
        }
        .referral-sub {
          color: rgba(0,0,0,0.6);
          font-size: 15px;
          margin-bottom: 36px;
        }
        .referral-form {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr auto;
          gap: 12px;
          align-items: center;
        }
        .referral-input {
          padding: 16px 20px;
          border-radius: 12px;
          border: 2px solid rgba(0,0,0,0.1);
          background: rgba(255,255,255,0.9);
          font-size: 14px;
          font-weight: 500;
          color: #000;
          outline: none;
          transition: all 0.2s;
          width: 100%;
        }
        .referral-input:focus {
          border-color: rgba(0,0,0,0.3);
          background: #fff;
        }
        .referral-input::placeholder { color: #999; }
        .referral-btn {
          background: #000;
          color: #FFD700;
          font-weight: 800;
          font-size: 14px;
          padding: 16px 28px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .referral-btn:hover {
          background: #111;
          transform: translateY(-1px);
        }
        .referral-note {
          margin-top: 16px;
          font-size: 13px;
          color: rgba(0,0,0,0.5);
        }
        .referral-note strong { color: rgba(0,0,0,0.8); }

        @media (max-width: 900px) {
          .referral-form {
            grid-template-columns: 1fr 1fr;
          }
          .referral-btn { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          .referral-section { padding: 48px 20px; }
          .referral-form { grid-template-columns: 1fr; }
          .referral-btn { grid-column: span 1; justify-content: center; }
        }
      `}</style>

      <section className="referral-section">
        <div className="referral-pattern" />
        <div className="referral-inner">
          <span className="referral-tag">🎁 Refer & Earn</span>
          <h2 className="referral-title">Refer a Friend — Get 1 Month FREE!</h2>
          <p className="referral-sub">Fill in your details and your friend's info — we'll give you both a free month!</p>

          {sent ? (
            <div style={{background:"rgba(0,0,0,0.1)",borderRadius:"16px",padding:"32px",fontSize:"18px",fontWeight:700,color:"#000"}}>
              ✅ Sent! We'll contact you on WhatsApp shortly.
            </div>
          ) : (
            <form className="referral-form" onSubmit={handleSubmit}>
              <input className="referral-input" placeholder="Your Name *" required
                value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input className="referral-input" placeholder="Your Phone *" required type="tel"
                value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              <input className="referral-input" placeholder="Friend's Name *" required
                value={form.friend} onChange={e => setForm({...form, friend: e.target.value})} />
              <input className="referral-input" placeholder="Friend's Phone *" required type="tel"
                value={form.friendPhone} onChange={e => setForm({...form, friendPhone: e.target.value})} />
              <button type="submit" className="referral-btn">
                Send via WhatsApp →
              </button>
            </form>
          )}
          <p className="referral-note">
            <strong>How it works:</strong> Your friend subscribes → You both get 1 month FREE! 🎉
          </p>
        </div>
      </section>
    </>
  );
}
