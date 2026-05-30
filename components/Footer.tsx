import { brand } from "@/styles/brand";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #05050d;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 48px;
          display: grid;
          grid-template-columns: 2fr 1.2fr 1fr 1fr;
          gap: 48px;
        }
        /* Col 1 */
        .footer-brand {}
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          text-decoration: none;
        }
        .footer-logo-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 900;
          color: #000;
          flex-shrink: 0;
        }
        .footer-logo-text {
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 1px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-logo-sub {
          font-size: 10px;
          color: #6b7280;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin-top: -2px;
        }
        .footer-about {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.75;
          margin-bottom: 28px;
          max-width: 280px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .footer-social {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.2s;
          color: #6b7280;
        }
        .footer-social:hover {
          background: rgba(255,215,0,0.1);
          border-color: rgba(255,215,0,0.3);
          color: #FFD700;
          transform: translateY(-2px);
        }

        /* Col 2 — Contacts */
        .footer-col-title {
          font-size: 15px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 24px;
          letter-spacing: 0.5px;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.5;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-item:hover { color: #FFD700; }
        .footer-contact-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,215,0,0.08);
          border: 1px solid rgba(255,215,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Col 3 & 4 — Links */
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          color: #6b7280;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-links a::before {
          content: '→';
          color: #FFD700;
          font-size: 11px;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.2s;
        }
        .footer-links a:hover {
          color: #FFD700;
          padding-left: 4px;
        }
        .footer-links a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 24px;
        }
        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-bottom-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .footer-bottom-logo-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 900;
          color: #000;
        }
        .footer-bottom-logo-text {
          font-size: 14px;
          font-weight: 800;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-copyright {
          color: #4b5563;
          font-size: 13px;
        }
        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }
        .footer-bottom-links a {
          color: #4b5563;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-bottom-links a:hover { color: #FFD700; }

        /* Floating WhatsApp */
        .wa-float-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          background: #25D366;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 14px 22px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 30px rgba(37,211,102,0.4);
          transition: all 0.3s;
          text-decoration: none;
        }
        .wa-float-btn:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 12px 40px rgba(37,211,102,0.5);
        }
        .wa-pulse {
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 50%;
          animation: waPulse 2s infinite;
        }
        @keyframes waPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }
        @media (max-width: 600px) {
          .footer-main {
            grid-template-columns: 1fr;
            padding: 48px 20px 32px;
          }
          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }
          .footer-bottom-links { flex-wrap: wrap; justify-content: center; }
          .wa-float-btn { bottom: 20px; right: 20px; padding: 12px 18px; font-size: 13px; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-main">

          {/* Col 1 — Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <div className="footer-logo-icon">K</div>
              <div>
                <div className="footer-logo-text">KRISHNA IPTV</div>
                <span className="footer-logo-sub">#1 Indian IPTV in USA</span>
              </div>
            </a>
            <p className="footer-about">
              We're developing the ultimate Indian IPTV service to provide high-quality, secure, and affordable entertainment for Indians living in USA & Canada. 10,000+ channels, zero buffering.
            </p>
            <div className="footer-socials">
              {[
                { icon: "📘", label: "Facebook", href: "#" },
                { icon: "🐦", label: "Twitter", href: "#" },
                { icon: "▶️", label: "YouTube", href: "#" },
                { icon: "📸", label: "Instagram", href: "#" },
              ].map(s => (
                <a key={s.label} href={s.href} className="footer-social" title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Contacts */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <a href={`tel:${brand.phone}`} className="footer-contact-item">
              <div className="footer-contact-icon">📞</div>
              <div>{brand.phone}<br/><span style={{fontSize:"12px",opacity:0.6}}>Available 24/7</span></div>
            </a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="footer-contact-item">
              <div className="footer-contact-icon">💬</div>
              <div>WhatsApp Support<br/><span style={{fontSize:"12px",opacity:0.6}}>Reply in 5 minutes</span></div>
            </a>
            <a href={`mailto:${brand.email}`} className="footer-contact-item">
              <div className="footer-contact-icon">✉️</div>
              <div>{brand.email}<br/><span style={{fontSize:"12px",opacity:0.6}}>24hr response</span></div>
            </a>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📍</div>
              <div>Serving USA & Canada<br/><span style={{fontSize:"12px",opacity:0.6}}>All 50 States</span></div>
            </div>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {[
                { label: "Home", href: "/" },
                { label: "Our Plans", href: "#plans" },
                { label: "Channels", href: "#channels" },
                { label: "Devices", href: "#devices" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Blog", href: "/blog" },
              ].map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h4 className="footer-col-title">Legal & Support</h4>
            <ul className="footer-links">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Setup Guide", href: "/setup-guide" },
                { label: "Free Trial", href: "#" },
                { label: "Reseller Program", href: "#" },
                { label: "Sitemap", href: "/sitemap" },
              ].map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <a href="/" className="footer-bottom-logo">
              <div className="footer-bottom-logo-icon">K</div>
              <span className="footer-bottom-logo-text">KRISHNA IPTV</span>
            </a>
            <p className="footer-copyright">
              © 2025 Krishna IPTV. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Legal</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="wa-float-btn">
        <div className="wa-pulse" />
        💬 WhatsApp
      </a>
    </>
  );
}
