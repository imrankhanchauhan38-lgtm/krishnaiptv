"use client";
import { brand } from "@/styles/brand";

export default function AboutExtra() {
  return (
    <>
      <style>{`
        .ae-section {
          padding: 80px 24px;
          background: #08080f;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .ae-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        /* LEFT */
        .ae-left {
          position: relative;
        }
        .ae-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: visible;
        }
        .ae-img-main {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 20px;
          background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
          border: 2px dashed rgba(255,215,0,0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: rgba(255,215,0,0.2);
          text-align: center;
          padding: 24px;
          overflow: hidden;
        }
        /* Real image aane par:
           <img src="/images/family-watching.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:20px;" />
        */
        .ae-img-device {
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 140px;
          height: 140px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1a1a2e, #0f0f1a);
          border: 2px solid rgba(255,215,0,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .ae-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 400px; height: 300px;
          background: radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }

        /* RIGHT */
        .ae-right {}
        .ae-tag {
          color: #FFD700;
          font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 16px; display: block;
        }
        .ae-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 900; color: #fff;
          line-height: 1.15; margin-bottom: 20px;
        }
        .ae-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ae-divider {
          width: 60px; height: 3px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 2px; margin-bottom: 20px;
        }
        .ae-desc {
          color: #9ca3af; font-size: 15px;
          line-height: 1.8; margin-bottom: 14px;
        }
        .ae-langs {
          color: #d1d5db; font-size: 15px;
          line-height: 1.8; margin-bottom: 28px;
        }
        .ae-langs strong {
          color: #FFD700; font-weight: 700;
        }

        /* Mini stats */
        .ae-mini-stats {
          display: flex;
          gap: 32px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .ae-mini-stat {}
        .ae-mini-num {
          font-size: 2rem; font-weight: 900;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .ae-mini-label {
          font-size: 13px; color: #6b7280;
          font-weight: 600; margin-top: 4px;
        }

        /* Buttons */
        .ae-btns {
          display: flex; gap: 14px; flex-wrap: wrap;
        }
        .ae-btn-call {
          display: flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-weight: 800; font-size: 14px;
          padding: 14px 28px; border-radius: 50px;
          text-decoration: none; transition: all 0.2s;
          white-space: nowrap;
        }
        .ae-btn-call:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(255,215,0,0.3);
        }
        .ae-btn-chat {
          display: flex; align-items: center; gap: 10px;
          background: #25D366;
          color: #fff; font-weight: 800; font-size: 14px;
          padding: 14px 28px; border-radius: 50px;
          text-decoration: none; transition: all 0.2s;
          white-space: nowrap;
        }
        .ae-btn-chat:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(37,211,102,0.3);
        }

        @media (max-width: 900px) {
          .ae-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .ae-img-device { display: none; }
        }
        @media (max-width: 600px) {
          .ae-section { padding: 60px 20px; }
          .ae-btns { flex-direction: column; }
          .ae-btn-call, .ae-btn-chat {
            width: 100%; justify-content: center;
          }
        }
      `}</style>

      <section className="ae-section">
        <div className="ae-inner">

          {/* LEFT — Images */}
          <div className="ae-left">
            <div className="ae-glow" />
            <div className="ae-img-wrap">
              <div className="ae-img-main">
                {/*
                  Real image:
                  <img src="/images/family-watching.jpg"
                    style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"20px",position:"absolute",inset:0}} />
                */}
                <div style={{fontSize:"80px"}}>👨‍👩‍👧‍👦</div>
                <div style={{fontSize:"14px",fontWeight:600,color:"rgba(255,215,0,0.3)"}}>Family Photo</div>
                <div style={{fontSize:"11px",opacity:0.4}}>public/images/family-watching.jpg</div>
              </div>

              {/* Device overlay */}
              <div className="ae-img-device">
                {/*
                  Real image:
                  <img src="/images/iptv-device.png" style={{width:"80%",objectFit:"contain"}} />
                */}
                <div style={{fontSize:"48px"}}>📺</div>
                <div style={{fontSize:"10px",color:"rgba(255,215,0,0.4)",fontWeight:600,textAlign:"center"}}>
                  IPTV Box<br/>
                  <span style={{opacity:0.5}}>iptv-device.png</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="ae-right">
            <span className="ae-tag">✦ About Krishna IPTV</span>
            <h2 className="ae-title">
              Experience Top <span>Indian IPTV Content</span>{" "}
              with the Best Provider in USA
            </h2>
            <div className="ae-divider" />

            <p className="ae-desc">
              Now enjoy your favourite <strong style={{color:"#fff"}}>Indian channels</strong> anytime, anywhere with <strong style={{color:"#FFD700"}}>Krishna IPTV</strong>. We stream media and channels directly to your device to supply an exquisite entertainment experience. We provide 10,000+ HD channels in multiple languages.
            </p>

            <p className="ae-langs">
              Including{" "}
              <strong>Hindi</strong>,{" "}
              <strong>Gujarati</strong>,{" "}
              <strong>Punjabi</strong>,{" "}
              <strong>Telugu</strong>,{" "}
              <strong>Tamil</strong>,{" "}
              <strong>Kannada</strong>,{" "}
              <strong>Malayalam</strong>,{" "}
              <strong>Bangla</strong>,{" "}
              <strong>Marathi</strong>,{" "}
              <strong>Urdu</strong>{" "}
              and lots of more.
            </p>

            {/* Mini stats */}
            <div className="ae-mini-stats">
              <div className="ae-mini-stat">
                <div className="ae-mini-num">4K</div>
                <div className="ae-mini-label">Ultra HD Quality</div>
              </div>
              <div className="ae-mini-stat">
                <div className="ae-mini-num">10K+</div>
                <div className="ae-mini-label">Live Channels</div>
              </div>
              <div className="ae-mini-stat">
                <div className="ae-mini-num">50K+</div>
                <div className="ae-mini-label">Happy Customers</div>
              </div>
            </div>

            <p className="ae-desc">
              We are not just a streaming service — we are your window to the{" "}
              <strong style={{color:"#fff"}}>best in Indian entertainment</strong>. Founded with the vision to expand the realm of entertainment, we rapidly grew to be the most trusted name for Indians in USA, UK, Canada, Australia, UAE, and worldwide.
            </p>

            {/* Buttons */}
            <div className="ae-btns">
              <a href={`tel:${brand.phone}`} className="ae-btn-call">
                📞 Call Us
              </a>
              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="ae-btn-chat">
                💬 Chat With Us
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
