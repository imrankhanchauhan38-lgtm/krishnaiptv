"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `📩 New Message!%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <style>{`
        .cs2-section {
          position: relative;
          overflow: hidden;
        }
        .cs2-bg {
          position: absolute; inset: 0;
          background-image: url('/images/contact-bg.jpg');
          background-size: cover; background-position: center;
          opacity: 0.1;
        }
        .cs2-inner {
          position: relative; z-index: 10;
          max-width: 1400px; margin: 0 auto;
          display: grid;
          grid-template-columns: 400px 1fr 400px;
          min-height: 520px;
        }

        /* LEFT PANEL */
        .cs2-left {
          background: linear-gradient(160deg, #1a1a00 0%, #2a2000 100%);
          border-right: 1px solid rgba(255,215,0,0.15);
          padding: 60px 40px;
          display: flex; flex-direction: column; justify-content: center;
          position: relative; overflow: hidden;
        }
        .cs2-left::before {
          content: '';
          position: absolute; top: -100px; left: -100px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .cs2-left-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 900; color: #fff;
          line-height: 1.15; margin-bottom: 16px;
        }
        .cs2-left-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cs2-divider {
          width: 60px; height: 3px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 2px; margin-bottom: 28px;
        }
        .cs2-info-label {
          color: #FFD700; font-size: 11px; font-weight: 800;
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 16px; display: block;
        }
        .cs2-btn-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 10px; margin-bottom: 24px;
        }
        .cs2-info-btn {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 4px; padding: 14px 10px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 12px; text-decoration: none;
          transition: all 0.2s; cursor: pointer; border: none;
        }
        .cs2-info-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,215,0,0.3);
        }
        .cs2-btn-label {
          font-size: 9px; font-weight: 800;
          color: rgba(0,0,0,0.6);
          text-transform: uppercase; letter-spacing: 1px;
        }
        .cs2-btn-val {
          font-size: 12px; font-weight: 900; color: #000;
          text-align: center;
        }
        .cs2-left-sub {
          color: rgba(255,255,255,0.45);
          font-size: 13px; line-height: 1.75;
        }

        /* CENTER FORM */
        .cs2-center {
          background: #08080f;
          padding: 60px 56px;
          border-right: 1px solid rgba(255,215,0,0.08);
        }
        .cs2-form-title {
          font-size: clamp(1.6rem, 2.5vw, 2rem);
          font-weight: 900; color: #fff; margin-bottom: 36px;
        }
        .cs2-form-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cs2-input {
          width: 100%; padding: 14px 0;
          background: transparent;
          border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
          color: #fff; font-size: 14px; outline: none;
          margin-bottom: 24px; transition: border-color 0.2s;
          font-family: inherit;
        }
        .cs2-input:focus { border-color: #FFD700; }
        .cs2-input::placeholder { color: rgba(255,255,255,0.25); }
        .cs2-textarea {
          width: 100%; padding: 14px 0;
          background: transparent;
          border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
          color: #fff; font-size: 14px; outline: none;
          margin-bottom: 32px; transition: border-color 0.2s;
          resize: none; font-family: inherit; min-height: 90px;
        }
        .cs2-textarea:focus { border-color: #FFD700; }
        .cs2-textarea::placeholder { color: rgba(255,255,255,0.25); }
        .cs2-submit {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-weight: 800; font-size: 14px;
          padding: 15px 40px; border-radius: 50px;
          border: none; cursor: pointer;
          text-transform: uppercase; letter-spacing: 1px;
          transition: all 0.2s;
        }
        .cs2-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(255,215,0,0.3);
        }

        /* RIGHT PANEL */
        .cs2-right {
          background: linear-gradient(160deg, #1a1a00 0%, #2a2000 100%);
          border-left: 1px solid rgba(255,215,0,0.15);
          position: relative; overflow: hidden;
        }
        .cs2-right-img {
          width: 100%; height: 100%;
          object-fit: cover; opacity: 0.4;
          display: block;
        }
        .cs2-right-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(26,26,0,0.7), rgba(42,32,0,0.5));
        }
        .cs2-right-placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 12px; color: rgba(255,215,0,0.15);
          text-align: center; padding: 24px;
        }

        @media (max-width: 1100px) {
          .cs2-inner { grid-template-columns: 1fr 1fr; }
          .cs2-right { display: none; }
        }
        @media (max-width: 700px) {
          .cs2-inner { grid-template-columns: 1fr; }
          .cs2-left { padding: 40px 24px; }
          .cs2-center { padding: 40px 24px; }
        }
      `}</style>

      <section className="cs2-section">
        <div className="cs2-bg" />
        <div className="cs2-inner">

          {/* LEFT */}
          <div className="cs2-left">
            <h2 className="cs2-left-title">
              Don't Worry!<br/>
              <span>Contact Us For</span>
            </h2>
            <div className="cs2-divider" />
            <span className="cs2-info-label">More Information</span>
            <div className="cs2-btn-grid">
              <a href={`tel:${brand.phone}`} className="cs2-info-btn">
                <span className="cs2-btn-label">Helpline Number</span>
                <span className="cs2-btn-val">{brand.phone}</span>
              </a>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="cs2-info-btn">
                <span className="cs2-btn-label">Live Chat</span>
                <span className="cs2-btn-val">💬 Click Here</span>
              </a>
            </div>
            <p className="cs2-left-sub">
              Feel free to connect with our sales team any time. Know more about plans, packages and features. We are available 24/7 in Hindi & English.
            </p>
          </div>

          {/* CENTER FORM */}
          <div className="cs2-center">
            {!sent ? (
              <>
                <h2 className="cs2-form-title">
                  Send us a <span>Message!</span>
                </h2>
                <form onSubmit={handleSubmit}>
                  <input className="cs2-input" placeholder="Enter Name:" required
                    value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  <input className="cs2-input" placeholder="Enter Email" type="email" required
                    value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  <input className="cs2-input" placeholder="Enter Phone NO." type="tel" required
                    value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  <textarea className="cs2-textarea" placeholder="Enter Your Query"
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  <button type="submit" className="cs2-submit">Send Message! →</button>
                </form>
              </>
            ) : (
              <div style={{textAlign:"center",padding:"80px 0"}}>
                <div style={{fontSize:"56px",marginBottom:"16px"}}>✅</div>
                <h3 style={{color:"#fff",fontWeight:900,fontSize:"1.5rem",marginBottom:"8px"}}>Message Sent!</h3>
                <p style={{color:"#6b7280",marginBottom:"24px"}}>We'll reply within minutes on WhatsApp!</p>
                <button onClick={() => setSent(false)}
                  style={{padding:"12px 32px",borderRadius:"50px",background:"linear-gradient(135deg,#FFD700,#FFA500)",border:"none",color:"#000",fontWeight:800,cursor:"pointer"}}>
                  Send Another
                </button>
              </div>
            )}
          </div>

          {/* RIGHT — Image */}
          <div className="cs2-right">
            <div className="cs2-right-placeholder">
              <div style={{fontSize:"80px"}}>👨‍👩‍👧‍👦</div>
              <div style={{fontSize:"13px",fontWeight:600}}>Contact Image</div>
              <div style={{fontSize:"10px",opacity:0.5}}>public/images/contact-bg.jpg</div>
            </div>
          </div>

        </div>
      </section>

      {sent && null}
    </>
  );
}
