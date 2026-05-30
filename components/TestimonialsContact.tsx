"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";

const testimonials = [
  {
    text: "Krishna IPTV is amazing! Crystal clear picture quality and zero buffering. I can watch all my favorite Hindi and Punjabi channels in 4K. Best IPTV service in USA — highly recommended!",
    name: "Rajesh Sharma",
    location: "New Jersey, USA",
    rating: 5,
    avatar: "RS",
  },
  {
    text: "Excellent customer service! They activated my subscription within minutes. The channel selection is incredible — all South Indian channels, sports, news everything is there. Worth every penny!",
    name: "Priya Patel",
    location: "California, USA",
    rating: 5,
    avatar: "PP",
  },
  {
    text: "I switched from another IPTV and Krishna IPTV is 10x better. No buffering, all channels work perfectly. The support team is very helpful and responds instantly on WhatsApp. Great service!",
    name: "Gurpreet Singh",
    location: "Toronto, Canada",
    rating: 5,
    avatar: "GS",
  },
];

const channelLogos = [
  { name: "Star Plus", emoji: "⭐" },
  { name: "Sony TV", emoji: "📺" },
  { name: "Zee TV", emoji: "🎬" },
  { name: "Colors", emoji: "🌈" },
  { name: "Star Sports", emoji: "⚽" },
  { name: "News18", emoji: "📰" },
];

export default function TestimonialsContact() {
  const [current, setCurrent] = useState(0);
  const [contact, setContact] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "", prefer: "whatsapp" });
  const [sent, setSent] = useState(false);

  const next = () => setCurrent(p => (p + 1) % testimonials.length);
  const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `📞 Callback Request!%0AName: ${contact.firstName} ${contact.lastName}%0APhone: ${contact.phone}%0AEmail: ${contact.email}%0APrefer: ${contact.prefer}%0AMessage: ${contact.message}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  const t = testimonials[current];

  return (
    <>
      <style>{`
        .tc-section {
          position: relative;
          overflow: hidden;
          min-height: 700px;
          display: flex;
          align-items: center;
        }
        .tc-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/testimonial-bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .tc-bg-fallback {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0a0a12 0%, #1a1a2e 50%, #0a0a12 100%);
        }
        .tc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(8,8,15,0.92) 0%,
            rgba(8,8,15,0.85) 40%,
            rgba(8,8,15,0.75) 70%,
            rgba(8,8,15,0.65) 100%
          );
        }
        .tc-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent);
        }
        .tc-inner {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* LEFT */
        .tc-left {}
        .tc-tag {
          color: #FFD700;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }
        .tc-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 48px;
        }
        .tc-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tc-quote-mark {
          font-size: 80px;
          line-height: 0.5;
          color: rgba(255,215,0,0.3);
          font-family: Georgia, serif;
          margin-bottom: 24px;
          display: block;
        }
        .tc-quote-text {
          color: #d1d5db;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 32px;
          font-style: italic;
          min-height: 100px;
        }
        .tc-author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .tc-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 900;
          color: #000;
          flex-shrink: 0;
          border: 3px solid rgba(255,215,0,0.3);
        }
        .tc-author-name {
          font-size: 15px;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .tc-author-loc {
          font-size: 13px;
          color: #6b7280;
        }
        .tc-stars {
          color: #FFD700;
          font-size: 18px;
          letter-spacing: 2px;
        }
        .tc-controls {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
        }
        .tc-prev, .tc-next {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,215,0,0.3);
          background: transparent;
          color: #FFD700;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .tc-prev:hover, .tc-next:hover {
          background: rgba(255,215,0,0.1);
          border-color: #FFD700;
        }
        .tc-dots {
          display: flex;
          gap: 8px;
        }
        .tc-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }
        .tc-dot.active {
          background: #FFD700;
          width: 24px;
          border-radius: 4px;
        }

        /* Channel logos */
        .tc-logos {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 32px;
        }
        .tc-logos-label {
          font-size: 11px;
          color: #6b7280;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .tc-logos-grid {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .tc-logo-item {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 8px 14px;
          font-size: 13px;
          color: #9ca3af;
          font-weight: 600;
          transition: all 0.2s;
        }
        .tc-logo-item:hover {
          border-color: rgba(255,215,0,0.3);
          color: #FFD700;
        }

        /* RIGHT — Form */
        .tc-form-wrap {
          background: rgba(15,15,26,0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 40px 36px;
          margin-top: 40px;
        }
        .tc-form-title {
          font-size: 1.8rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 8px;
        }
        .tc-form-sub {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .tc-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }
        .tc-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
          margin-bottom: 12px;
        }
        .tc-input:focus {
          border-color: rgba(255,215,0,0.4);
          background: rgba(255,215,0,0.03);
        }
        .tc-input::placeholder { color: #4b5563; }
        .tc-radio-group {
          margin-bottom: 20px;
        }
        .tc-radio-label {
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 12px;
          display: block;
        }
        .tc-radios {
          display: flex;
          gap: 20px;
        }
        .tc-radio-opt {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
          color: #9ca3af;
        }
        .tc-radio-opt input { accent-color: #FFD700; }
        .tc-submit {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000;
          font-weight: 800;
          font-size: 15px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tc-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255,215,0,0.3);
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .tc-inner {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 60px 20px;
          }
          .tc-form-row { grid-template-columns: 1fr; }
          .tc-form-wrap { padding: 28px 20px; margin-top: 0; }
        }
      `}</style>

      <section className="tc-section">
        <div className="tc-bg-fallback" />
        <div className="tc-bg" />
        <div className="tc-overlay" />
        <div className="tc-top-line" />

        <div className="tc-inner">
          {/* LEFT */}
          <div className="tc-left">
            <span className="tc-tag">✦ Testimonials</span>
            <h2 className="tc-title">Our Customers <span>Love Us!</span></h2>

            <span className="tc-quote-mark">"</span>
            <p className="tc-quote-text">{t.text}</p>

            <div className="tc-author">
              <div className="tc-avatar">{t.avatar}</div>
              <div>
                <div className="tc-author-name">{t.name}</div>
                <div className="tc-author-loc">{t.location}</div>
              </div>
              <div className="tc-stars">{"★".repeat(t.rating)}</div>
            </div>

            <div className="tc-controls">
              <button className="tc-prev" onClick={prev}>←</button>
              <div className="tc-dots">
                {testimonials.map((_, i) => (
                  <button key={i} className={`tc-dot ${i === current ? "active" : ""}`}
                    onClick={() => setCurrent(i)} />
                ))}
              </div>
              <button className="tc-next" onClick={next}>→</button>
            </div>

            <div className="tc-logos">
              <div className="tc-logos-label">Available Channels Include</div>
              <div className="tc-logos-grid">
                {channelLogos.map(l => (
                  <div key={l.name} className="tc-logo-item">
                    <span>{l.emoji}</span> {l.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div>
            <div className="tc-form-wrap">
              {!sent ? (
                <>
                  <h3 className="tc-form-title">Request a Call Back</h3>
                  <p className="tc-form-sub">We are committed to providing excellent service. Fill in your details and we'll contact you shortly!</p>

                  <form onSubmit={handleSubmit}>
                    <div className="tc-form-row">
                      <input className="tc-input" style={{marginBottom:0}} placeholder="First name *" required
                        value={contact.firstName} onChange={e => setContact({...contact, firstName: e.target.value})} />
                      <input className="tc-input" style={{marginBottom:0}} placeholder="Last name *" required
                        value={contact.lastName} onChange={e => setContact({...contact, lastName: e.target.value})} />
                    </div>
                    <input className="tc-input" placeholder="Phone number *" type="tel" required
                      value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})} />
                    <input className="tc-input" placeholder="Email address *" type="email" required
                      value={contact.email} onChange={e => setContact({...contact, email: e.target.value})} />
                    <textarea className="tc-input" placeholder="Message (Optional)" rows={3} style={{resize:"none"}}
                      value={contact.message} onChange={e => setContact({...contact, message: e.target.value})} />

                    <div className="tc-radio-group">
                      <span className="tc-radio-label">How do you prefer to be contacted?</span>
                      <div className="tc-radios">
                        {["whatsapp", "call", "email"].map(opt => (
                          <label key={opt} className="tc-radio-opt">
                            <input type="radio" name="prefer" value={opt}
                              checked={contact.prefer === opt}
                              onChange={() => setContact({...contact, prefer: opt})} />
                            {opt.charAt(0).toUpperCase() + opt.slice(1)}
                          </label>
                        ))}
                      </div>
                    </div>

                    <button type="submit" className="tc-submit">
                      📞 Submit Request → WhatsApp
                    </button>
                  </form>
                </>
              ) : (
                <div style={{textAlign:"center",padding:"48px 0"}}>
                  <div style={{fontSize:"48px",marginBottom:"16px"}}>✅</div>
                  <h3 style={{color:"#fff",fontWeight:900,fontSize:"1.5rem",marginBottom:"8px"}}>Request Sent!</h3>
                  <p style={{color:"#6b7280"}}>We'll contact you within minutes on WhatsApp!</p>
                  <button onClick={() => setSent(false)}
                    style={{marginTop:"24px",padding:"12px 32px",borderRadius:"50px",background:"linear-gradient(135deg,#FFD700,#FFA500)",border:"none",color:"#000",fontWeight:800,cursor:"pointer"}}>
                    Send Another
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
