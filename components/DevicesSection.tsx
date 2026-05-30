"use client";
import { useState } from "react";

const devices = [
  {
    name: "Amazon Fire Stick 4K",
    price: "$49.99",
    image: "🔥",
    badge: "Best Seller",
    badgeColor: "#FFD700",
    amazonLink: "https://www.amazon.com/s?k=amazon+fire+stick+4k",
    desc: "Most popular for IPTV streaming",
  },
  {
    name: "Apple iPhone 15",
    price: "$799.00",
    image: "📱",
    badge: null,
    badgeColor: null,
    amazonLink: "https://www.amazon.com/s?k=iphone+15",
    desc: "Perfect for mobile streaming",
  },
  {
    name: "Android Smart TV Box",
    price: "$35.99",
    image: "��",
    badge: "Recommended",
    badgeColor: "#4ade80",
    amazonLink: "https://www.amazon.com/s?k=android+tv+box+4k",
    desc: "Best value TV box for IPTV",
  },
  {
    name: "Samsung Galaxy S24",
    price: "$699.99",
    image: "📲",
    badge: null,
    badgeColor: null,
    amazonLink: "https://www.amazon.com/s?k=samsung+galaxy+s24",
    desc: "Android streaming on the go",
  },
  {
    name: "MAG 524W3 IPTV Box",
    price: "$89.99",
    image: "🎮",
    badge: "IPTV Ready",
    badgeColor: "#818cf8",
    amazonLink: "https://www.amazon.com/s?k=mag+iptv+box",
    desc: "Dedicated IPTV set-top box",
  },
  {
    name: "Apple TV 4K",
    price: "$129.00",
    image: "🍎",
    badge: null,
    badgeColor: null,
    amazonLink: "https://www.amazon.com/s?k=apple+tv+4k",
    desc: "Premium streaming experience",
  },
  {
    name: "Nvidia Shield TV",
    price: "$149.99",
    image: "🛡️",
    badge: "Pro Choice",
    badgeColor: "#76b900",
    amazonLink: "https://www.amazon.com/s?k=nvidia+shield+tv",
    desc: "Most powerful streaming device",
  },
  {
    name: "Google Chromecast 4K",
    price: "$49.99",
    image: "🔵",
    badge: null,
    badgeColor: null,
    amazonLink: "https://www.amazon.com/s?k=google+chromecast+4k",
    desc: "Easy plug & play streaming",
  },
];

export default function DevicesSection() {
  const [startIdx, setStartIdx] = useState(0);
  const visible = 4;

  const prev = () => setStartIdx(p => Math.max(0, p - 1));
  const next = () => setStartIdx(p => Math.min(devices.length - visible, p + 1));

  const visibleDevices = devices.slice(startIdx, startIdx + visible);

  return (
    <>
      <style>{`
        .devices-section {
          padding: 100px 24px;
          background: #08080f;
          position: relative;
          overflow: hidden;
        }
        .devices-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        .devices-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .devices-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .devices-tag {
          color: #FFD700;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }
        .devices-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #fff;
          margin-bottom: 16px;
        }
        .devices-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .devices-sub {
          color: #6b7280;
          font-size: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Slider */
        .devices-slider-wrap {
          position: relative;
        }
        .devices-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          transition: all 0.4s;
        }
        .device-card {
          background: #0f0f1a;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.35s;
          position: relative;
        }
        .device-card:hover {
          border-color: rgba(255,215,0,0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(255,215,0,0.08);
        }
        .device-img-box {
          background: linear-gradient(135deg, #13131f, #1a1a2e);
          padding: 40px 24px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          min-height: 200px;
          position: relative;
        }
        .device-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 10px;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #000;
        }
        .device-info {
          padding: 20px;
        }
        .device-name {
          font-size: 15px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .device-desc {
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 14px;
          line-height: 1.5;
        }
        .device-price {
          font-size: 18px;
          font-weight: 900;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 14px;
        }
        .device-amazon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          background: #FF9900;
          color: #000;
          font-weight: 800;
          font-size: 13px;
          text-decoration: none;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }
        .device-amazon-btn:hover {
          background: #e88800;
          transform: translateY(-1px);
        }

        /* Nav buttons */
        .slider-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,215,0,0.1);
          border: 1.5px solid rgba(255,215,0,0.3);
          color: #FFD700;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          z-index: 10;
        }
        .slider-nav-btn:hover {
          background: rgba(255,215,0,0.2);
          border-color: #FFD700;
        }
        .slider-nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .slider-prev { left: -60px; }
        .slider-next { right: -60px; }

        /* MOBILE */
        @media (max-width: 1100px) {
          .slider-prev { left: -20px; }
          .slider-next { right: -20px; }
        }
        @media (max-width: 900px) {
          .devices-grid { grid-template-columns: repeat(2, 1fr); }
          .slider-prev, .slider-next { display: none; }
        }
        @media (max-width: 600px) {
          .devices-section { padding: 60px 20px; }
          .devices-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .device-img-box { font-size: 60px; min-height: 150px; padding: 28px 16px 16px; }
          .device-info { padding: 14px; }
        }
      `}</style>

      <section className="devices-section" id="devices">
        <div className="devices-inner">
          <div className="devices-header">
            <span className="devices-tag">✦ Supported Devices</span>
            <h2 className="devices-title">Works on <span>All Your Devices</span></h2>
            <p className="devices-sub">Krishna IPTV works on any device. Buy from Amazon with free shipping — setup takes just 2 minutes!</p>
          </div>

          <div className="devices-slider-wrap">
            <button className="slider-nav-btn slider-prev" onClick={prev} disabled={startIdx === 0}>←</button>

            <div className="devices-grid">
              {visibleDevices.map((device, i) => (
                <div key={startIdx + i} className="device-card">
                  <div className="device-img-box">
                    {device.badge && (
                      <div className="device-badge" style={{background: device.badgeColor || "#FFD700"}}>
                        {device.badge}
                      </div>
                    )}
                    {device.image}
                  </div>
                  <div className="device-info">
                    <div className="device-name">{device.name}</div>
                    <div className="device-desc">{device.desc}</div>
                    <div className="device-price">{device.price}</div>
                    <a href={device.amazonLink} target="_blank" rel="noopener noreferrer"
                      className="device-amazon-btn">
                      🛒 Buy on Amazon
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button className="slider-nav-btn slider-next" onClick={next}
              disabled={startIdx >= devices.length - visible}>→</button>
          </div>

          {/* Dots */}
          <div style={{display:"flex",justifyContent:"center",gap:"8px",marginTop:"32px"}}>
            {Array.from({length: devices.length - visible + 1}).map((_, i) => (
              <button key={i} onClick={() => setStartIdx(i)}
                style={{
                  width: i === startIdx ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === startIdx ? "#FFD700" : "rgba(255,255,255,0.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
