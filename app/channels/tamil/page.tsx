"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StayConnected from "@/components/StayConnected";
import { brand } from "@/styles/brand";

const tamilChannels = [
  { name: "Sun TV", category: "Entertainment", emoji: "☀️" },
  { name: "Vijay TV", category: "Entertainment", emoji: "⭐" },
  { name: "Zee Tamil", category: "Entertainment", emoji: "🎭" },
  { name: "Kalaignar TV", category: "Entertainment", emoji: "🎨" },
  { name: "Polimer TV", category: "Entertainment", emoji: "💎" },
  { name: "Jaya TV", category: "Entertainment", emoji: "🌟" },
  { name: "Colors Tamil", category: "Entertainment", emoji: "🎪" },
  { name: "Star Vijay", category: "Entertainment", emoji: "🏆" },
  { name: "Sun News", category: "News", emoji: "��" },
  { name: "Puthiya Thalaimurai", category: "News", emoji: "📡" },
  { name: "News18 Tamil Nadu", category: "News", emoji: "📻" },
  { name: "Thanthi TV", category: "News", emoji: "🎙️" },
  { name: "Polimer News", category: "News", emoji: "📢" },
  { name: "Captain TV", category: "News", emoji: "⚓" },
  { name: "Raj News Tamil", category: "News", emoji: "👑" },
  { name: "Sun Music", category: "Music", emoji: "🎵" },
  { name: "Kalaignar Music", category: "Music", emoji: "🎶" },
  { name: "Raj Musix", category: "Music", emoji: "🎼" },
  { name: "Super Music", category: "Music", emoji: "��" },
  { name: "Ayngaran Music", category: "Music", emoji: "🥁" },
  { name: "Sun Pictures", category: "Movies", emoji: "🎬" },
  { name: "Vijay Movies", category: "Movies", emoji: "🎞️" },
  { name: "Zee Thirai", category: "Movies", emoji: "🎥" },
  { name: "KTV", category: "Movies", emoji: "🎦" },
  { name: "Chutti TV", category: "Kids", emoji: "👶" },
  { name: "Disney Tamil", category: "Kids", emoji: "🎠" },
];

const categories = ["All", "Entertainment", "News", "Music", "Movies", "Kids"];

const contactOptions = [
  { icon: "✉️", label: "Email", value: brand.email, href: `mailto:${brand.email}`, color: "#FFD700" },
  { icon: "💬", label: "WhatsApp", value: "Chat Now", href: `https://wa.me/${brand.whatsapp}`, color: "#25D366" },
  { icon: "📞", label: "Phone", value: brand.phone, href: `tel:${brand.phone}`, color: "#4f8ef7" },
];

const tamilFeatures = [
  { icon: "🏛️", title: "Classical Culture", desc: "Kolam, Bharatanatyam, Carnatic music — all cultural content" },
  { icon: "🎬", title: "Kollywood Movies", desc: "Latest Tamil movies, web series & Kollywood blockbusters" },
  { icon: "📰", title: "Live Tamil News", desc: "24/7 Tamil news from Sun News, Puthiya Thalaimurai & more" },
  { icon: "🎵", title: "Tamil Music", desc: "ARR songs, Yuvan Shankar Raja, Anirudh & all Tamil hits" },
  { icon: "☀️", title: "Sun Network", desc: "Complete Sun TV network — Sun, Vijay, KTV, Sun Music & more" },
  { icon: "⭐", title: "Reality Shows", desc: "Bigg Boss Tamil, Super Singer, Dance vs Dance & all reality shows" },
];

export default function TamilChannelsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const filtered = activeCategory === "All"
    ? tamilChannels
    : tamilChannels.filter(c => c.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `📺 Tamil Channel List Request!%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <main style={{ background: "#08080f", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      {/* HERO — Tamil Culture Feel */}
      <div style={{ position: "relative", paddingTop: "220px", paddingBottom: "100px", textAlign: "center", overflow: "hidden" }}>
        {/* Tamil pattern background */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#1a0010,#0d0020,#08080f)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/tamil-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,15,0.8)" }} />

        {/* Kolam-inspired decorative dots */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, #FF6B35 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        {/* Glow effects */}
        <div style={{ position: "absolute", top: "20%", left: "15%", width: "400px", height: "400px", background: "radial-gradient(circle,rgba(255,107,53,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "15%", width: "300px", height: "300px", background: "radial-gradient(circle,rgba(255,215,0,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Tamil Om symbol */}
          <div style={{ fontSize: "48px", marginBottom: "12px", opacity: 0.7 }}>🕉️</div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.4)", borderRadius: "50px", padding: "8px 20px", marginBottom: "20px" }}>
            <span style={{ width: "8px", height: "8px", background: "#4ade80", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px #4ade80" }} />
            <span style={{ color: "#FF6B35", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>☀️ Tamil Channels</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 900, color: "#fff", marginBottom: "8px", lineHeight: 1.1 }}>
            Watch Online{" "}
            <span style={{ background: "linear-gradient(135deg,#FF6B35,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Tamil TV Channels
            </span>
          </h1>

          {/* Tamil text decoration */}
          <p style={{ color: "rgba(255,107,53,0.6)", fontSize: "14px", fontWeight: 600, marginBottom: "8px", letterSpacing: "2px" }}>
            தமிழ் சேனல்கள் · Tamil Entertainment
          </p>

          <p style={{ color: "#9ca3af", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto 28px", lineHeight: 1.7 }}>
            Best Tamil IPTV Channels Provider in USA, UK & Canada — 300+ Tamil channels in HD & 4K quality. Watch Kollywood, Sun Network, Vijay TV & more!
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
            {[["300+","Tamil Channels"],["100%","HD & 4K"],["24/7","Live Streaming"]].map(([n,l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 900, background: "linear-gradient(135deg,#FF6B35,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{n}</div>
                <div style={{ fontSize: "11px", color: "#6b7280", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/buy-now" style={{ background: "linear-gradient(135deg,#FF6B35,#FFD700)", color: "#000", fontWeight: 800, fontSize: "15px", padding: "15px 36px", borderRadius: "50px", textDecoration: "none" }}>🛒 BUY NOW</a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ border: "1.5px solid rgba(255,107,53,0.4)", color: "#FF6B35", fontWeight: 700, fontSize: "15px", padding: "15px 36px", borderRadius: "50px", textDecoration: "none" }}>💬 WhatsApp</a>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#6b7280", fontSize: "14px", marginTop: "24px" }}>
            <a href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <span>/</span>
            <a href="/channels" style={{ color: "#6b7280", textDecoration: "none" }}>Channels</a>
            <span>/</span>
            <span style={{ color: "#FF6B35", fontWeight: 600 }}>Tamil</span>
          </div>
        </div>
      </div>

      {/* TAMIL CULTURE FEATURES */}
      <section style={{ padding: "60px 24px", background: "linear-gradient(135deg,#0f0a00,#0a0a12)", borderTop: "3px solid rgba(255,107,53,0.3)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ color: "#FF6B35", fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>✦ Tamil Entertainment</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 900, color: "#fff", marginBottom: "8px" }}>
              Everything Tamil —{" "}
              <span style={{ background: "linear-gradient(135deg,#FF6B35,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                One Subscription
              </span>
            </h2>
            <p style={{ color: "#6b7280", fontSize: "15px" }}>From Kolam to Kollywood — experience the best of Tamil culture</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="resp-3col">
            {tamilFeatures.map((f, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,107,53,0.15)",
                borderRadius: "16px", padding: "24px",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,107,53,0.4)";
                el.style.transform = "translateY(-4px)";
                el.style.background = "rgba(255,107,53,0.05)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,107,53,0.15)";
                el.style.transform = "none";
                el.style.background = "rgba(255,255,255,0.02)";
              }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{f.icon}</div>
                <div style={{ fontSize: "15px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>{f.title}</div>
                <div style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "60px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#fff", marginBottom: "20px", lineHeight: 1.2 }}>
          <span style={{ background: "linear-gradient(135deg,#FF6B35,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>We Provide —</span>{" "}
          Over 300+ Tamil Channels with Krishna IPTV
        </h2>
        <div style={{ width: "60px", height: "3px", background: "linear-gradient(135deg,#FF6B35,#FFD700)", borderRadius: "2px", marginBottom: "24px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="resp-2col">
          <div>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
              Experience the richness of <strong style={{ color: "#FF6B35" }}>Tamil culture</strong> with <strong style={{ color: "#fff" }}>Krishna IPTV</strong> — your gateway to <strong style={{ color: "#fff" }}>300+ Tamil channels</strong> in USA, UK & Canada. From the vibrant Kollywood film industry to classical Carnatic music, devotional content, and live Tamil news — we bring the heart of Tamil Nadu straight to your home.
            </p>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8 }}>
              Watch all your favorites — <strong style={{ color: "#fff" }}>Sun TV, Vijay TV, Zee Tamil, Kalaignar TV</strong>, and the entire Sun Network in crystal clear HD & 4K quality. Never miss Bigg Boss Tamil, Super Singer, or your favorite serials again!
            </p>
          </div>
          <div>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
              Our <strong style={{ color: "#FFD700" }}>Tamil IPTV</strong> subscription includes not just entertainment — but the complete Tamil experience. Watch live cricket, Tamil news 24/7, latest Kollywood movies on KTV and Vijay Movies, and soul-stirring devotional content.
            </p>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8 }}>
              All our plans include <strong style={{ color: "#fff" }}>8,000+ channels</strong> in Hindi, Punjabi, Telugu, Malayalam, Bengali & more. <strong style={{ color: "#FFD700" }}>Starting from just $33 for 3 months</strong> — with instant activation, no contracts, and 24/7 support.
            </p>
          </div>
        </div>
      </section>

      {/* GET CHANNEL LIST */}
      <section style={{ padding: "60px 24px", background: "#0a0a12", borderTop: "1px solid rgba(255,107,53,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "#fff", textAlign: "center", marginBottom: "8px" }}>Get Channel List Through</h2>
          <p style={{ color: "#6b7280", textAlign: "center", fontSize: "14px", marginBottom: "40px" }}>Click Here For Available Tamil Channels · For more information request a call back.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
            {contactOptions.map((opt, i) => (
              <a key={i} href={opt.href} target={opt.label === "WhatsApp" ? "_blank" : undefined}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "32px 20px", background: "#0f0f1a", border: `2px solid ${opt.color}30`, borderRadius: "16px", textDecoration: "none", transition: "all 0.3s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = opt.color; el.style.transform = "translateY(-4px)"; el.style.boxShadow = `0 16px 48px ${opt.color}20`; el.style.background = `linear-gradient(160deg,${opt.color}08,#0f0f1a)`; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${opt.color}30`; el.style.transform = "none"; el.style.boxShadow = "none"; el.style.background = "#0f0f1a"; }}>
                <div style={{ fontSize: "36px" }}>{opt.icon}</div>
                <div style={{ fontSize: "18px", fontWeight: 900, color: opt.color }}>{opt.label}</div>
                <div style={{ fontSize: "12px", color: "#6b7280", textAlign: "center" }}>{opt.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNEL LIST */}
      <section style={{ padding: "60px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ color: "#FF6B35", fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>✦ Full Channel List</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            300+ Tamil{" "}
            <span style={{ background: "linear-gradient(135deg,#FF6B35,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Channels</span>
          </h2>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ padding: "8px 18px", borderRadius: "50px", border: "none", fontSize: "13px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s", background: activeCategory === cat ? "linear-gradient(135deg,#FF6B35,#FFD700)" : "rgba(255,255,255,0.05)", color: activeCategory === cat ? "#000" : "#9ca3af" }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="resp-4col">
          {filtered.map((ch, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", background: "#0f0f1a", border: "1px solid rgba(255,107,53,0.1)", borderRadius: "12px", transition: "all 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,107,53,0.35)"; el.style.background = "rgba(255,107,53,0.04)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,107,53,0.1)"; el.style.background = "#0f0f1a"; }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>{ch.emoji}</div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{ch.name}</div>
                <div style={{ fontSize: "11px", color: "#6b7280" }}>{ch.category}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>+ Many more Tamil channels available. Contact us for full list!</p>
          <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ display: "inline-block", background: "linear-gradient(135deg,#FF6B35,#FFD700)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "14px 36px", borderRadius: "50px", textDecoration: "none" }}>
            💬 Get Full Tamil Channel List
          </a>
        </div>
      </section>

      {/* SAVINGS + FORM */}
      <section style={{ padding: "60px 24px", background: "#0a0a12", borderTop: "1px solid rgba(255,107,53,0.15)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg,#1a0800,#200a00)", border: "1px solid rgba(255,107,53,0.25)", borderRadius: "16px", padding: "24px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
            <div>
              <div style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 900, color: "#fff" }}>
                You <span style={{ background: "linear-gradient(135deg,#FF6B35,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>SAVE $1,000+/Year</span> with Krishna IPTV
              </div>
              <div style={{ color: "#6b7280", fontSize: "14px", marginTop: "4px" }}>vs Cable/Satellite TV — Instant activation, no contracts</div>
            </div>
            <a href="/buy-now" style={{ background: "linear-gradient(135deg,#FF6B35,#FFD700)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "14px 28px", borderRadius: "50px", textDecoration: "none", whiteSpace: "nowrap" }}>🛒 Get Started Now</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="resp-2col">
            <div style={{ background: "#0f0f1a", border: "1px solid rgba(255,107,53,0.2)", borderRadius: "20px", padding: "36px" }}>
              {!sent ? (
                <>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", marginBottom: "6px" }}>
                    <span style={{ background: "linear-gradient(135deg,#FF6B35,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Request</span> A Call Back
                  </h3>
                  <div style={{ width: "50px", height: "3px", background: "linear-gradient(135deg,#FF6B35,#FFD700)", borderRadius: "2px", marginBottom: "20px" }} />
                  <form onSubmit={handleSubmit}>
                    {[
                      { key: "name", placeholder: "Enter Name:", type: "text" },
                      { key: "phone", placeholder: "Enter Phone NO.", type: "tel" },
                      { key: "email", placeholder: "Enter Email", type: "email" },
                    ].map(f => (
                      <input key={f.key} type={f.type} placeholder={f.placeholder} required
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: "100%", padding: "13px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "14px", outline: "none", marginBottom: "18px", boxSizing: "border-box", fontFamily: "inherit" }} />
                    ))}
                    <textarea placeholder="Enter Your Query" rows={3}
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: "100%", padding: "13px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "14px", outline: "none", marginBottom: "24px", resize: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                    <button type="submit" style={{ background: "linear-gradient(135deg,#FF6B35,#FFD700)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "14px 36px", borderRadius: "50px", border: "none", cursor: "pointer" }}>
                      Submit Request →
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "14px" }}>✅</div>
                  <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "1.4rem", marginBottom: "8px" }}>Sent!</h3>
                  <p style={{ color: "#6b7280", marginBottom: "20px" }}>We'll call back within minutes!</p>
                  <button onClick={() => setSent(false)} style={{ padding: "12px 28px", borderRadius: "50px", background: "linear-gradient(135deg,#FF6B35,#FFD700)", border: "none", color: "#000", fontWeight: 800, cursor: "pointer" }}>Send Another</button>
                </div>
              )}
            </div>

            <div style={{ background: "linear-gradient(135deg,#1a0800,#0f0f1a)", border: "2px dashed rgba(255,107,53,0.15)", borderRadius: "20px", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", color: "rgba(255,107,53,0.25)", padding: "32px" }}>
                <div style={{ fontSize: "72px", marginBottom: "16px" }}>☀️</div>
                <div style={{ fontSize: "15px", fontWeight: 700 }}>Tamil Family Image</div>
                <div style={{ fontSize: "12px", opacity: 0.6, marginTop: "8px" }}>public/images/tamil-family.jpg</div>
                <div style={{ marginTop: "12px", fontSize: "20px", opacity: 0.4 }}>தமிழ்</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StayConnected />
      <Footer />

      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus { border-color: rgba(255,107,53,0.4) !important; }
        @media (max-width: 900px) {
          .resp-2col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .resp-3col { grid-template-columns: 1fr 1fr !important; }
          .resp-4col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .resp-3col { grid-template-columns: 1fr !important; }
          .resp-4col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
