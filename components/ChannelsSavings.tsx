"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";

const savingOptions = [
  { label: "Monthly Saving in Cable/Satellite Bill", monthly: 120 },
  { label: "Monthly Saving in Dish TV Bill", monthly: 80 },
  { label: "Monthly Saving in Streaming Services", monthly: 60 },
  { label: "Monthly Saving in Sports Package", monthly: 40 },
];

export default function ChannelsSavings() {
  const [savingIdx, setSavingIdx] = useState(0);
  const [yearlySaving, setYearlySaving] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const calcSaving = () => {
    const saving = savingOptions[savingIdx].monthly * 12 - 115;
    setYearlySaving(saving);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `📞 Call Back Request!%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <style>{`
        /* Savings Banner */
        .sv-banner {
          background: linear-gradient(135deg, #1a1a00 0%, #2a2000 50%, #1a1a00 100%);
          padding: 28px 24px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,215,0,0.15);
          border-bottom: 1px solid rgba(255,215,0,0.15);
        }
        .sv-banner::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(255,215,0,0.05) 0%, transparent 50%, rgba(255,215,0,0.05) 100%);
        }
        .sv-banner-inner {
          max-width: 1200px; margin: 0 auto;
          position: relative; z-index: 10;
          display: flex; align-items: center;
          justify-content: center; gap: 16px;
          flex-wrap: wrap;
        }
        .sv-banner-text {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 900; color: #fff;
          text-align: center;
        }
        .sv-banner-text span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sv-banner-badge {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-size: 14px; font-weight: 900;
          padding: 8px 20px; border-radius: 50px;
          white-space: nowrap;
        }

        /* Main section */
        .sv-section {
          position: relative;
          overflow: hidden;
          min-height: 600px;
          display: flex;
          align-items: stretch;
        }

        /* BG image area */
        .sv-bg {
          position: absolute; inset: 0;
          background-image: url('/images/family-sofa.jpg');
          background-size: cover;
          background-position: center right;
          opacity: 0.2;
        }
        .sv-bg-fallback {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #0a0a12 0%, #0f0f1a 100%);
        }
        .sv-bg-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(8,8,15,0.97) 0%, rgba(8,8,15,0.9) 60%, rgba(8,8,15,0.5) 100%);
        }

        /* Content */
        .sv-inner {
          position: relative; z-index: 10;
          max-width: 1400px; margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 380px 1fr 400px;
          gap: 0;
          align-items: stretch;
        }

        /* LEFT — Calculator */
        .sv-calc {
          padding: 48px 36px;
          border-right: 1px solid rgba(255,215,0,0.1);
        }
        .sv-calc-logo {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 28px; padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .sv-calc-logo-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; font-weight: 900; color: #000;
        }
        .sv-calc-logo-name { font-size: 16px; font-weight: 900; color: #fff; }
        .sv-calc-logo-sub { font-size: 11px; color: #6b7280; }
        .sv-calc-title {
          font-size: 18px; font-weight: 900; color: #fff;
          text-align: center; margin-bottom: 6px;
        }
        .sv-calc-sub {
          font-size: 12px; color: #6b7280; text-align: center;
          margin-bottom: 20px;
        }
        .sv-select {
          width: 100%; padding: 12px 14px; margin-bottom: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px; color: #fff; font-size: 13px;
          outline: none; cursor: pointer; appearance: none;
          backgroundImage: "url(\"data:image/svg+xml,...\")";
        }
        .sv-select:focus { border-color: rgba(255,215,0,0.3); }
        .sv-calc-btn {
          width: 100%; padding: 13px; border-radius: 10px;
          font-size: 13px; font-weight: 800; cursor: pointer;
          border: none; transition: all 0.2s;
          text-transform: uppercase; letter-spacing: 0.5px;
          margin-bottom: 10px;
        }
        .sv-calc-btn-primary {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000;
        }
        .sv-calc-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(255,215,0,0.3); }
        .sv-result {
          text-align: center; padding: 16px;
          background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.2);
          border-radius: 10px; margin-bottom: 10px;
        }
        .sv-result-num { font-size: 2rem; font-weight: 900; color: #4ade80; }
        .sv-result-label { font-size: 12px; color: #6b7280; margin-top: 4px; }
        .sv-no-bill {
          text-align: center; padding: 14px;
          background: rgba(255,215,0,0.06);
          border: 1px solid rgba(255,215,0,0.15);
          border-radius: 10px; margin-bottom: 10px;
          font-size: 16px; font-weight: 900;
          background: linear-gradient(135deg,#FFD700,#FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sv-wa-btn {
          width: 100%; padding: 13px;
          background: #25D366; color: #fff;
          font-size: 13px; font-weight: 800;
          border: none; border-radius: 10px; cursor: pointer;
          text-transform: uppercase; text-decoration: none;
          display: block; text-align: center; transition: all 0.2s;
        }
        .sv-wa-btn:hover { background: #20b858; }

        /* CENTER — Contact Form */
        .sv-form-wrap {
          padding: 48px 48px;
          border-right: 1px solid rgba(255,215,0,0.08);
          display: flex; flex-direction: column; justify-content: center;
        }
        .sv-form-title {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 900; color: #fff; margin-bottom: 6px;
        }
        .sv-form-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sv-form-sub { color: #6b7280; font-size: 13px; margin-bottom: 24px; }
        .sv-form-divider {
          width: 60px; height: 3px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 2px; margin-bottom: 24px;
        }
        .sv-input {
          width: 100%; padding: 13px 0;
          background: transparent;
          border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
          color: #fff; font-size: 14px; outline: none;
          margin-bottom: 20px; transition: border-color 0.2s;
          font-family: inherit; box-sizing: border-box;
        }
        .sv-input:focus { border-color: #FFD700; }
        .sv-input::placeholder { color: rgba(255,255,255,0.25); }
        .sv-textarea {
          width: 100%; padding: 13px 0;
          background: transparent;
          border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
          color: #fff; font-size: 14px; outline: none;
          margin-bottom: 24px; transition: border-color 0.2s;
          resize: none; font-family: inherit;
          min-height: 70px; box-sizing: border-box;
        }
        .sv-textarea:focus { border-color: #FFD700; }
        .sv-textarea::placeholder { color: rgba(255,255,255,0.25); }
        .sv-submit {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-weight: 800; font-size: 14px;
          padding: 14px 36px; border-radius: 50px;
          border: none; cursor: pointer;
          text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.2s;
        }
        .sv-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(255,215,0,0.3); }

        /* RIGHT — Family Image */
        .sv-image-side {
          position: relative;
          overflow: hidden;
          min-height: 500px;
        }
        .sv-image-placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 16px; color: rgba(255,215,0,0.15);
          text-align: center; padding: 32px;
          background: rgba(255,215,0,0.02);
          border-left: 1px solid rgba(255,215,0,0.08);
        }
        /* Real image lagane ke liye:
           <img src="/images/family-sofa.jpg"
             style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" />
        */

        @media (max-width: 1100px) {
          .sv-inner { grid-template-columns: 1fr 1fr; }
          .sv-image-side { display: none; }
        }
        @media (max-width: 700px) {
          .sv-inner { grid-template-columns: 1fr; }
          .sv-calc { padding: 32px 20px; border-right: none; border-bottom: 1px solid rgba(255,215,0,0.1); }
          .sv-form-wrap { padding: 32px 20px; }
          .sv-banner-text { font-size: 1.2rem; }
        }
      `}</style>

      {/* Savings Banner */}
      <div className="sv-banner">
        <div className="sv-banner-inner">
          <div className="sv-banner-text">
            You <span>SAVE $1,000+/Year</span> with Krishna IPTV
          </div>
          <div className="sv-banner-badge">💰 vs Cable TV</div>
        </div>
      </div>

      {/* Main Section */}
      <section className="sv-section">
        <div className="sv-bg-fallback" />
        <div className="sv-bg" />
        <div className="sv-bg-overlay" />

        <div className="sv-inner">

          {/* LEFT — Calculator */}
          <div className="sv-calc">
            <div className="sv-calc-logo">
              <div className="sv-calc-logo-icon">K</div>
              <div>
                <div className="sv-calc-logo-name">KRISHNA IPTV</div>
                <div className="sv-calc-logo-sub">#1 Indian IPTV in USA</div>
              </div>
            </div>

            <div className="sv-calc-title">Total Yearly Saving with Us</div>
            <div className="sv-calc-sub">Please Select Your Current Bill Amount</div>

            <select className="sv-select" value={savingIdx}
              onChange={e => { setSavingIdx(Number(e.target.value)); setYearlySaving(null); }}
              style={{background:"rgba(255,255,255,0.04)"}}>
              {savingOptions.map((s,i) => (
                <option key={i} value={i} style={{background:"#0f0f1a"}}>{s.label}</option>
              ))}
            </select>

            <button className="sv-calc-btn sv-calc-btn-primary" onClick={calcSaving}>
              📊 Calculate Yearly Saving
            </button>

            {yearlySaving !== null ? (
              <div className="sv-result">
                <div className="sv-result-num">${yearlySaving.toLocaleString()}</div>
                <div className="sv-result-label">Saved per year with Krishna IPTV!</div>
              </div>
            ) : (
              <div style={{
                textAlign:"center",padding:"14px",marginBottom:"10px",
                fontSize:"16px",fontWeight:900,
                background:"linear-gradient(135deg,#FFD700,#FFA500)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
              }}>
                No Monthly Bill Shock! 🎉
              </div>
            )}

            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="sv-wa-btn">
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* CENTER — Form */}
          <div className="sv-form-wrap">
            {!sent ? (
              <>
                <h3 className="sv-form-title">
                  <span>Request</span> A Call Back
                </h3>
                <div className="sv-form-divider" />
                <p className="sv-form-sub">Fill in your details — our team will call you back within minutes!</p>
                <form onSubmit={handleSubmit}>
                  <input className="sv-input" placeholder="Enter Name:" required
                    value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  <input className="sv-input" placeholder="Enter Email" type="email" required
                    value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  <input className="sv-input" placeholder="Enter Phone NO." type="tel" required
                    value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  <textarea className="sv-textarea" placeholder="Enter Your Query"
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  <button type="submit" className="sv-submit">
                    Submit Request →
                  </button>
                </form>
              </>
            ) : (
              <div style={{textAlign:"center",padding:"60px 0"}}>
                <div style={{fontSize:"56px",marginBottom:"16px"}}>✅</div>
                <h3 style={{color:"#fff",fontWeight:900,fontSize:"1.5rem",marginBottom:"8px"}}>Request Sent!</h3>
                <p style={{color:"#6b7280",marginBottom:"24px"}}>We'll call you back within minutes!</p>
                <button onClick={() => setSent(false)}
                  style={{padding:"12px 32px",borderRadius:"50px",background:"linear-gradient(135deg,#FFD700,#FFA500)",border:"none",color:"#000",fontWeight:800,cursor:"pointer"}}>
                  Send Another
                </button>
              </div>
            )}
          </div>

          {/* RIGHT — Image */}
          <div className="sv-image-side">
            {/*
              Real image lagane ke liye:
              <img src="/images/family-sofa.jpg"
                style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",inset:0}} />
            */}
            <div className="sv-image-placeholder">
              <div style={{fontSize:"80px"}}>👨‍👩‍👧‍👦</div>
              <div style={{fontSize:"16px",fontWeight:700}}>Family Image</div>
              <div style={{fontSize:"12px",opacity:0.5,lineHeight:1.6}}>
                public/images/<br/>family-sofa.jpg
              </div>
              <div style={{
                marginTop:"16px",padding:"12px 20px",
                background:"rgba(255,215,0,0.08)",
                border:"1px solid rgba(255,215,0,0.15)",
                borderRadius:"10px",
                fontSize:"12px",color:"rgba(255,215,0,0.6)",
                textAlign:"center",
              }}>
                Koi bhi family/couple<br/>watching TV image lagao
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
