"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Plans", href: "/plans",
    children: [
      { label: "3 Month Plan — $33", href: "/plans" },
      { label: "6 Month Plan — $60", href: "/plans" },
      { label: "1 Year Plan — $115 ⭐", href: "/plans" },
      { label: "2 Year Plan — $210 💎", href: "/plans" },
      { label: "3 Year Plan — $270 🏆", href: "/plans" },
      { label: "5 Year Plan — $340 👑", href: "/plans" },
    ]
  },
  {
    label: "Buy Now", href: "/buy-now",
    children: [
      { label: "🛒 Buy Now", href: "/buy-now" },
      { label: "🎁 Get Free Trial", href: "/buy-now" },
      { label: "💬 WhatsApp Order", href: `https://wa.me/${brand.whatsapp}` },
    ]
  },
  {
    label: "Channels", href: "/channels",
    children: [
      { label: "🇮🇳 Hindi Channels", href: "/channels/hindi" },
      { label: "🌾 Punjabi Channels", href: "/channels/punjabi" },
      { label: "🎭 Tamil Channels", href: "/channels/tamil" },
      { label: "🏺 Telugu Channels", href: "/channels/telugu" },
      { label: "🌴 Malayalam Channels", href: "/channels/malayalam" },
      { label: "🪔 Gujarati Channels", href: "/channels/gujarati" },
      { label: "🐯 Bengali Channels", href: "/channels/bengali" },
      { label: "🌙 Urdu Channels", href: "/channels/urdu" },
      { label: "🌍 English Channels", href: "/channels/english" },
      { label: "⚽ Sports Channels", href: "/channels/sports" },
      { label: "🎵 Marathi Channels", href: "/channels/marathi" },
      { label: "🌸 Kannada Channels", href: "/channels/kannada" },
      { label: "🌊 Oriya Channels", href: "/channels/oriya" },
    ]
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <>
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 1000, display: "flex", flexDirection: "column",
      }}>

        {/* TOP SOCIAL BAR */}
        <div style={{ background: "#0a0a10", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "7px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {[
              { label: "f", title: "Facebook", href: "#" },
              { label: "t", title: "Twitter", href: "#" },
              { label: "▶", title: "YouTube", href: "#" },
              { label: "◎", title: "Instagram", href: "#" },
            ].map(s => (
              <a key={s.title} href={s.href} title={s.title} style={{ width: "28px", height: "28px", borderRadius: "6px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", fontSize: "11px", fontWeight: 700, textDecoration: "none" }}>{s.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href={`mailto:${brand.email}`} style={{ color: "#6b7280", fontSize: "12px", textDecoration: "none" }}>✉️ {brand.email}</a>
            <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.08)" }} />
            <a href="#" style={{ color: "#6b7280", fontSize: "12px", textDecoration: "none" }}>🛟 Support</a>
            <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.08)" }} />
            <a href="#" style={{ color: "#6b7280", fontSize: "12px", textDecoration: "none" }}>🤝 Reseller</a>
          </div>
        </div>

        {/* OFFER BAR */}
        <div style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", padding: "9px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#000", margin: 0 }}>
            🎁 Limited Offer: Get <strong>1 Month FREE</strong> with any 6-month plan! Code: <strong>KRISHNA6</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href={`tel:${brand.phone}`} style={{ fontSize: "12px", fontWeight: 700, color: "rgba(0,0,0,0.7)", textDecoration: "none" }}>📞 {brand.phone}</a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ fontSize: "12px", fontWeight: 700, color: "rgba(0,0,0,0.7)", textDecoration: "none" }}>💬 WhatsApp</a>
          </div>
        </div>

        {/* MAIN NAV */}
        <div style={{ background: "rgba(8,8,15,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,215,0,0.12)", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px", gap: "16px" }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#FFD700,#FFA500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 900, color: "#000" }}>K</div>
            <div>
              <div style={{ fontSize: "17px", fontWeight: 900, letterSpacing: "1px", background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.2 }}>KRISHNA IPTV</div>
              <span style={{ fontSize: "9px", color: "#6b7280", letterSpacing: "2px", textTransform: "uppercase", display: "block" }}>#1 Indian IPTV in USA</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1, justifyContent: "center" }} className="nav-desktop">
            {navLinks.map(link => (
              <div key={link.label} style={{ position: "relative" }} className="nav-item">
                <a href={link.href} className="nav-link" style={{ display: "flex", alignItems: "center", gap: "4px", padding: "8px 13px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, color: "#9ca3af", textDecoration: "none", whiteSpace: "nowrap", transition: "all 0.2s" }}>
                  {link.label}
                  {link.children && <span style={{ fontSize: "10px" }}>▾</span>}
                </a>
                {link.children && (
                  <div className="nav-dd" style={{
                    position: "absolute", top: "calc(100% + 8px)", left: 0,
                    background: "#0f0f1a",
                    border: "1px solid rgba(255,215,0,0.15)",
                    borderRadius: "14px", padding: "8px",
                    minWidth: link.label === "Channels" ? "220px" : "200px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                    zIndex: 200, display: "none",
                    maxHeight: link.label === "Channels" ? "400px" : "none",
                    overflowY: link.label === "Channels" ? "auto" : "visible",
                  }}>
                    {link.children.map(c => (
                      <a key={c.label} href={c.href} className="nav-dd-item" style={{ display: "block", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", color: "#9ca3af", textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}>
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }} className="nav-right">
            <a href={`tel:${brand.phone}`} style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: "12px", padding: "8px 14px", textDecoration: "none" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: "linear-gradient(135deg,#FFD700,#FFA500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>📞</div>
              <div>
                <div style={{ fontSize: "9px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>Call Us Now</div>
                <div style={{ fontSize: "13px", color: "#fff", fontWeight: 800, whiteSpace: "nowrap" }}>{brand.phone}</div>
              </div>
            </a>
            <button onClick={() => setShowForm(true)} style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "13px", padding: "11px 20px", borderRadius: "50px", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
              �� Free Trial
            </button>
          </div>

          {/* Burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-burger"
            style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "6px" }}>
            <span style={{ display: "block", width: "22px", height: "2px", background: "#FFD700", borderRadius: "1px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "#FFD700", borderRadius: "1px", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "#FFD700", borderRadius: "1px", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: "#0a0a12", borderTop: "1px solid rgba(255,215,0,0.1)", maxHeight: "80vh", overflowY: "auto" }}>
            {navLinks.map(link => (
              <div key={link.label}>
                {link.children ? (
                  <button onClick={() => setOpenMobile(openMobile === link.label ? null : link.label)}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "14px 20px", color: "#d1d5db", fontSize: "15px", fontWeight: 600, background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "pointer", textAlign: "left" }}>
                    {link.label}
                    <span style={{ fontSize: "12px", color: "#FFD700" }}>{openMobile === link.label ? "▲" : "▼"}</span>
                  </button>
                ) : (
                  <a href={link.href} onClick={() => setMenuOpen(false)}
                    style={{ display: "block", padding: "14px 20px", color: "#d1d5db", fontSize: "15px", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    {link.label}
                  </a>
                )}
                {link.children && openMobile === link.label && (
                  <div style={{ background: "rgba(255,255,255,0.02)" }}>
                    {link.children.map(c => (
                      <a key={c.label} href={c.href} onClick={() => setMenuOpen(false)}
                        style={{ display: "block", padding: "10px 32px", color: "#6b7280", fontSize: "13px", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href={`tel:${brand.phone}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px", borderRadius: "12px", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
                �� {brand.phone}
              </a>
              <a href="/buy-now" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "13px", borderRadius: "12px", background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontSize: "14px", fontWeight: 800, textDecoration: "none" }}>
                🛒 Buy Now
              </a>
              <button onClick={() => { setShowForm(true); setMenuOpen(false); }}
                style={{ padding: "13px", borderRadius: "50px", background: "transparent", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
                🎁 Get Free Trial
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .nav-item:hover .nav-dd { display: block !important; }
        .nav-link:hover { color: #FFD700 !important; background: rgba(255,215,0,0.06) !important; }
        .nav-dd-item:hover { color: #FFD700 !important; background: rgba(255,215,0,0.05) !important; padding-left: 20px !important; }
        .nav-dd::-webkit-scrollbar { width: 4px; }
        .nav-dd::-webkit-scrollbar-track { background: transparent; }
        .nav-dd::-webkit-scrollbar-thumb { background: rgba(255,215,0,0.3); border-radius: 2px; }
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-right { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
