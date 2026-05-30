"use client";

const leftFeatures = [
  {
    icon: "⏪",
    title: "Rewind Live TV",
    desc: "We provide the best IPTV service to our loyal customers. Customer requirements are our utmost priority. We provide support in all regional languages and English. Additionally, you get an option for rewinding live HD channels for up to 7 days.",
  },
  {
    icon: "📺",
    title: "10,000+ World Channels",
    desc: "We cover certain countries worldwide, including the USA, Australia, Canada and Europe. We have around 10,000+ worldwide channels and successfully provided our exceptional services to more than 50,000+ subscribers.",
  },
  {
    icon: "4K",
    title: "4K and 8K Quality",
    desc: "Krishna IPTV provides Digital picture & sound quality. 5x picture clarity with Hi-Definition. Crystal clear channels with zero pixelation or distortion on any device.",
  },
];

const rightFeatures = [
  {
    icon: "💰",
    title: "Transparent Charges",
    desc: "You avail the broad list of Indian TV channels with our IPTV subscription. Enjoy all channels of Bollywood Dramas in full HD quality. We provide a divergent list of TV channels such as Hindi, Bangla, Tamil, Punjabi, and many more. You access all this with no extra or hidden charges.",
  },
  {
    icon: "📡",
    title: "Free Installation Support",
    desc: "We give you IPTV services and also provide free installation support on your devices. Our team helps you setup on Smart TV, Fire Stick, Android Box, iPhone and any device within minutes.",
  },
  {
    icon: "🛟",
    title: "Fast Support 24/7",
    desc: "As top Indian IPTV Provider in USA, Canada, Australia and India, we assist with the best online IPTV service. Regardless of the day, location, language, you get instant customer care support via WhatsApp. Customer satisfaction is our primary goal.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .wcu-section {
          padding: 80px 24px;
          background: #08080f;
          position: relative;
          overflow: hidden;
        }
        .wcu-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        .wcu-inner { max-width: 1200px; margin: 0 auto; }

        /* Header */
        .wcu-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .wcu-tag {
          color: #FFD700; font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 14px; display: block;
        }
        .wcu-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900; color: #fff; margin-bottom: 16px;
        }
        .wcu-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wcu-sub {
          color: #6b7280; font-size: 15px;
          max-width: 680px; margin: 0 auto; line-height: 1.75;
        }

        /* 3 column layout */
        .wcu-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 40px;
          align-items: center;
        }

        /* Left & Right features */
        .wcu-col {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }
        .wcu-feature {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: transform 0.2s;
        }
        .wcu-feature:hover { transform: translateX(4px); }
        .wcu-right-col .wcu-feature {
          flex-direction: row-reverse;
          text-align: right;
        }
        .wcu-right-col .wcu-feature:hover { transform: translateX(-4px); }
        .wcu-icon {
          width: 56px; height: 56px;
          border-radius: 14px;
          background: rgba(255,215,0,0.08);
          border: 1.5px solid rgba(255,215,0,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; font-weight: 900;
          flex-shrink: 0;
          transition: all 0.3s;
          color: #FFD700;
        }
        .wcu-feature:hover .wcu-icon {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-color: transparent;
          box-shadow: 0 8px 24px rgba(255,215,0,0.25);
          color: #000;
        }
        .wcu-feature-title {
          font-size: 16px; font-weight: 800;
          color: #fff; margin-bottom: 8px;
        }
        .wcu-feature-desc {
          font-size: 13px; color: #6b7280;
          line-height: 1.7;
        }

        /* Center image */
        .wcu-center {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 280px;
        }
        .wcu-center-img {
          width: 260px; height: 340px;
          border-radius: 20px;
          background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
          border: 2px dashed rgba(255,215,0,0.15);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 12px; color: rgba(255,215,0,0.2);
          text-align: center; padding: 20px;
          position: relative; overflow: hidden;
        }
        .wcu-center-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Bottom banner */
        .wcu-bottom {
          margin-top: 60px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 16px;
          padding: 32px 40px;
          text-align: center;
        }
        .wcu-bottom-title {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 900; color: #000; margin-bottom: 10px;
        }
        .wcu-bottom-sub {
          color: rgba(0,0,0,0.65); font-size: 15px;
          max-width: 700px; margin: 0 auto 6px;
          line-height: 1.7;
        }
        .wcu-langs {
          font-size: 14px; font-weight: 700; color: rgba(0,0,0,0.8);
          margin-top: 10px;
        }

        @media (max-width: 1000px) {
          .wcu-grid {
            grid-template-columns: 1fr;
          }
          .wcu-center { display: none; }
          .wcu-right-col .wcu-feature {
            flex-direction: row;
            text-align: left;
          }
          .wcu-right-col .wcu-feature:hover { transform: translateX(4px); }
        }
        @media (max-width: 600px) {
          .wcu-section { padding: 60px 20px; }
          .wcu-bottom { padding: 28px 20px; }
          .wcu-feature { gap: 12px; }
          .wcu-icon { width: 46px; height: 46px; font-size: 18px; }
        }
      `}</style>

      <section className="wcu-section">
        <div className="wcu-inner">

          {/* Header */}
          <div className="wcu-header">
            <span className="wcu-tag">✦ Why Krishna IPTV</span>
            <h2 className="wcu-title">Why Choose <span>Us</span></h2>
            <p className="wcu-sub">
              <strong style={{color:"#FFD700"}}>Krishna IPTV</strong> — Get the best Indian IPTV service at a very affordable price. For the greatest Indian IPTV experience, pick us since we provide outstanding convenience, quality, and variety. High-definition streaming and smooth playback with excellent audio and visual quality.
            </p>
          </div>

          {/* 3 Column Grid */}
          <div className="wcu-grid">

            {/* LEFT */}
            <div className="wcu-col">
              {leftFeatures.map((f, i) => (
                <div key={i} className="wcu-feature">
                  <div className="wcu-icon">{f.icon}</div>
                  <div>
                    <div className="wcu-feature-title">{f.title}</div>
                    <div className="wcu-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="wcu-center">
              <div className="wcu-center-img">
                <div className="wcu-center-glow" />
                {/*
                  Real image:
                  <img src="/images/woman-laptop.png"
                    style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",inset:0,borderRadius:"18px"}} />
                */}
                <div style={{fontSize:"80px",position:"relative",zIndex:1}}>👩‍💻</div>
                <div style={{fontSize:"12px",fontWeight:600,position:"relative",zIndex:1}}>
                  Person Photo
                </div>
                <div style={{fontSize:"10px",opacity:0.4,position:"relative",zIndex:1}}>
                  public/images/<br/>woman-laptop.png
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="wcu-col wcu-right-col">
              {rightFeatures.map((f, i) => (
                <div key={i} className="wcu-feature">
                  <div className="wcu-icon">{f.icon}</div>
                  <div>
                    <div className="wcu-feature-title">{f.title}</div>
                    <div className="wcu-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Banner */}
          <div className="wcu-bottom">
            <h3 className="wcu-bottom-title">No Monthly Rental — No Hidden Charges!</h3>
            <p className="wcu-bottom-sub">
              You get to enjoy all of your favourite Indian TV channels in fully HD picture quality. The various channel list of
            </p>
            <p className="wcu-langs">
              Hindi · Bengali · Tamil · Telugu · Malayalam · Punjabi · English · Gujarati · Marathi
              <br/>
              <span style={{fontWeight:500,color:"rgba(0,0,0,0.6)"}}>etc. make it a perfect choice for Indian TV show lovers.</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
