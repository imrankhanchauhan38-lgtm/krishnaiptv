"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StayConnected from "@/components/StayConnected";
import { brand } from "@/styles/brand";

const malayalamChannels = [
  { name: "Asianet", category: "Entertainment", emoji: "🌟" },
  { name: "Mazhavil Manorama", category: "Entertainment", emoji: "🌈" },
  { name: "Surya TV", category: "Entertainment", emoji: "☀️" },
  { name: "Flowers TV", category: "Entertainment", emoji: "🌸" },
  { name: "Zee Keralam", category: "Entertainment", emoji: "🎭" },
  { name: "Kairali TV", category: "Entertainment", emoji: "🌿" },
  { name: "Amrita TV", category: "Entertainment", emoji: "��" },
  { name: "Janam TV", category: "News", emoji: "📰" },
  { name: "Reporter TV", category: "News", emoji: "📡" },
  { name: "Media One", category: "News", emoji: "📻" },
  { name: "Asianet News", category: "News", emoji: "🎙️" },
  { name: "Manorama News", category: "News", emoji: "📢" },
  { name: "News18 Kerala", category: "News", emoji: "🔔" },
  { name: "Mathrubhumi News", category: "News", emoji: "📰" },
  { name: "Kappa TV", category: "Music", emoji: "🎵" },
  { name: "Kochu TV", category: "Kids", emoji: "👶" },
  { name: "Asianet Movies", category: "Movies", emoji: "🎬" },
  { name: "Mazhavil Movies", category: "Movies", emoji: "��️" },
  { name: "Surya Movies", category: "Movies", emoji: "🎥" },
  { name: "Zee Keralam Movies", category: "Movies", emoji: "🎦" },
  { name: "Safari TV", category: "Lifestyle", emoji: "🌍" },
  { name: "Shalom TV", category: "Religious", emoji: "✝️" },
  { name: "Darshanam TV", category: "Religious", emoji: "🙏" },
  { name: "Star Sports Tamil", category: "Sports", emoji: "⚽" },
  { name: "Willow Cricket", category: "Sports", emoji: "🏏" },
  { name: "DD Kerala", category: "Entertainment", emoji: "🏛️" },
];

const categories = ["All", "Entertainment", "News", "Movies", "Music", "Religious", "Sports", "Kids", "Lifestyle"];

const contactOptions = [
  { icon: "✉️", label: "Email", value: brand.email, href: `mailto:${brand.email}`, color: "#FFD700" },
  { icon: "💬", label: "WhatsApp", value: "Chat Now", href: `https://wa.me/${brand.whatsapp}`, color: "#25D366" },
  { icon: "📞", label: "Phone", value: brand.phone, href: `tel:${brand.phone}`, color: "#4f8ef7" },
];

const keralaFeatures = [
  { icon: "🌴", title: "God's Own Country", desc: "Experience Kerala's culture — Kathakali, Mohiniyattam & classical arts" },
  { icon: "🌊", title: "Kerala Backwaters", desc: "Travel, nature & lifestyle shows from the beautiful land of Kerala" },
  { icon: "🎬", title: "Mollywood Movies", desc: "Latest Malayalam movies, web series & Mollywood blockbusters in 4K" },
  { icon: "📰", title: "Live Kerala News", desc: "24/7 Malayalam news — Asianet News, Manorama News, Media One & more" },
  { icon: "🌸", title: "Onam Specials", desc: "Onam, Vishu, Thrissur Pooram — all Kerala festival specials live" },
  { icon: "🎵", title: "Malayalam Music", desc: "Classic & modern Malayalam songs, Mappila songs & folk music" },
];

export default function MalayalamChannelsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const filtered = activeCategory === "All"
    ? malayalamChannels
    : malayalamChannels.filter(c => c.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `📺 Malayalam Channel List Request!%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <main style={{ background: "#08080f", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      {/* HERO — Kerala/Malayalam Feel */}
      <div style={{ position: "relative", paddingTop: "220px", paddingBottom: "100px", textAlign: "center", overflow: "hidden" }}>
        {/* Kerala green theme */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#001a08,#001510,#08080f)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/malayalam-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,15,0.8)" }} />

        {/* Backwater ripple pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(34,197,94,0.5) 20px, rgba(34,197,94,0.5) 21px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(34,197,94,0.3) 40px, rgba(34,197,94,0.3) 41px)" }} />

        {/* Glow */}
        <div style={{ position: "absolute", top: "20%", left: "20%", width: "400px", height: "400px", background: "radial-gradient(circle,rgba(34,197,94,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "20%", width: "300px", height: "300px", background: "radial-gradient(circle,rgba(255,215,0,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10 }}>
          <div style={{ fontSize: "48px", marginBottom: "12px", opacity: 0.8 }}>🌴</div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.4)", borderRadius: "50px", padding: "8px 20px", marginBottom: "20px" }}>
            <span style={{ width: "8px", height: "8px", background: "#4ade80", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px #4ade80" }} />
            <span style={{ color: "#22c55e", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>🌊 Malayalam Channels</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 900, color: "#fff", marginBottom: "8px", lineHeight: 1.1 }}>
            Watch Online{" "}
            <span style={{ background: "linear-gradient(135deg,#22c55e,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Malayalam TV Channels
            </span>
          </h1>

          {/* Malayalam text */}
          <p style={{ color: "rgba(34,197,94,0.6)", fontSize: "14px", fontWeight: 600, marginBottom: "8px", letterSpacing: "2px" }}>
            മലയാളം ചാനലുകൾ · God's Own Country
          </p>

          <p style={{ color: "#9ca3af", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto 28px", lineHeight: 1.7 }}>
            Best Malayalam IPTV Channels Provider in USA, UK & Canada — 250+ Malayalam channels in HD & 4K. Watch Asianet, Mazhavil, Surya TV & more!
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
            {[["250+","Malayalam Channels"],["4K","Ultra HD Quality"],["24/7","Live Streaming"]].map(([n,l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 900, background: "linear-gradient(135deg,#22c55e,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{n}</div>
                <div style={{ fontSize: "11px", color: "#6b7280", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/buy-now" style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "#fff", fontWeight: 800, fontSize: "15px", padding: "15px 36px", borderRadius: "50px", textDecoration: "none" }}>🛒 BUY NOW</a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ border: "1.5px solid rgba(34,197,94,0.4)", color: "#22c55e", fontWeight: 700, fontSize: "15px", padding: "15px 36px", borderRadius: "50px", textDecoration: "none" }}>💬 WhatsApp</a>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#6b7280", fontSize: "14px", marginTop: "24px" }}>
            <a href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <span>/</span>
            <a href="/channels" style={{ color: "#6b7280", textDecoration: "none" }}>Channels</a>
            <span>/</span>
            <span style={{ color: "#22c55e", fontWeight: 600 }}>Malayalam</span>
          </div>
        </div>
      </div>

      {/* KERALA CULTURE FEATURES */}
      <section style={{ padding: "60px 24px", background: "linear-gradient(135deg,#001a08,#0a0a12)", borderTop: "3px solid rgba(34,197,94,0.3)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ color: "#22c55e", fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>✦ Kerala Entertainment</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 900, color: "#fff", marginBottom: "8px" }}>
              God's Own Country —{" "}
              <span style={{ background: "linear-gradient(135deg,#22c55e,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                In Your Living Room
              </span>
            </h2>
            <p style={{ color: "#6b7280", fontSize: "15px" }}>From Kathakali to Kollywood — experience the best of Kerala's rich culture</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="resp-3col">
            {keralaFeatures.map((f, i) => (
              <div key={i} style={{ background: "rgba(34,197,94,0.03)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: "16px", padding: "24px", transition: "all 0.3s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(34,197,94,0.4)"; el.style.transform = "translateY(-4px)"; el.style.background = "rgba(34,197,94,0.06)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(34,197,94,0.15)"; el.style.transform = "none"; el.style.background = "rgba(34,197,94,0.03)"; }}>
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
          <span style={{ background: "linear-gradient(135deg,#22c55e,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>We Provide —</span>{" "}
          Over 250+ Malayalam Channels with Krishna IPTV
        </h2>
        <div style={{ width: "60px", height: "3px", background: "linear-gradient(135deg,#22c55e,#16a34a)", borderRadius: "2px", marginBottom: "24px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="resp-2col">
          <div>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
              Experience the beauty of <strong style={{ color: "#22c55e" }}>God's Own Country</strong> with <strong style={{ color: "#fff" }}>Krishna IPTV</strong> — bringing you <strong style={{ color: "#fff" }}>250+ Malayalam channels</strong> in USA, UK & Canada. From the enchanting backwaters to vibrant Onam celebrations, from Kathakali to Mollywood blockbusters — we deliver the complete Kerala experience to your home.
            </p>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8 }}>
              Watch all your favorites — <strong style={{ color: "#fff" }}>Asianet, Mazhavil Manorama, Surya TV, Flowers TV, Zee Keralam</strong> — in crystal clear HD & 4K. Never miss your favorite Malayalam serials, reality shows, or live news again!
            </p>
          </div>
          <div>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
              Our <strong style={{ color: "#FFD700" }}>Malayalam IPTV</strong> subscription includes complete entertainment — Mollywood movies on Asianet Movies & Surya Movies, 24/7 Malayalam news, devotional content, kids channels, and soul-refreshing nature & travel shows from Kerala.
            </p>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8 }}>
              All plans include <strong style={{ color: "#fff" }}>8,000+ channels</strong> in Hindi, Tamil, Telugu, Punjabi, Bengali & more. <strong style={{ color: "#22c55e" }}>Starting from just $33 for 3 months</strong> — instant activation, no contracts, 24/7 support in Hindi & English.
            </p>
          </div>
        </div>
      </section>

      {/* GET CHANNEL LIST */}
      <section style={{ padding: "60px 24px", background: "#0a0a12", borderTop: "1px solid rgba(34,197,94,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "#fff", textAlign: "center", marginBottom: "8px" }}>Get Channel List Through</h2>
          <p style={{ color: "#6b7280", textAlign: "center", fontSize: "14px", marginBottom: "40px" }}>Click Here For Available Malayalam Channels · Request a call back for more info.</p>
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
          <span style={{ color: "#22c55e", fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>✦ Full Channel List</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            250+ Malayalam{" "}
            <span style={{ background: "linear-gradient(135deg,#22c55e,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Channels</span>
          </h2>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ padding: "8px 18px", borderRadius: "50px", border: "none", fontSize: "13px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s", background: activeCategory === cat ? "linear-gradient(135deg,#22c55e,#16a34a)" : "rgba(255,255,255,0.05)", color: activeCategory === cat ? "#fff" : "#9ca3af" }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="resp-4col">
          {filtered.map((ch, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", background: "#0f0f1a", border: "1px solid rgba(34,197,94,0.1)", borderRadius: "12px", transition: "all 0.2s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(34,197,94,0.35)"; el.style.background = "rgba(34,197,94,0.04)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(34,197,94,0.1)"; el.style.background = "#0f0f1a"; }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>{ch.emoji}</div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{ch.name}</div>
                <div style={{ fontSize: "11px", color: "#6b7280" }}>{ch.category}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>+ Many more Malayalam channels available. Contact us for the full list!</p>
          <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ display: "inline-block", background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "#fff", fontWeight: 800, fontSize: "14px", padding: "14px 36px", borderRadius: "50px", textDecoration: "none" }}>
            💬 Get Full Malayalam Channel List
          </a>
        </div>
      </section>

      {/* SAVINGS + FORM */}
      <section style={{ padding: "60px 24px", background: "#0a0a12", borderTop: "1px solid rgba(34,197,94,0.15)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg,#001a08,#002010)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: "16px", padding: "24px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
            <div>
              <div style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 900, color: "#fff" }}>
                You <span style={{ background: "linear-gradient(135deg,#22c55e,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>SAVE $1,000+/Year</span> with Krishna IPTV
              </div>
              <div style={{ color: "#6b7280", fontSize: "14px", marginTop: "4px" }}>vs Cable/Satellite TV — Instant activation, no contracts</div>
            </div>
            <a href="/buy-now" style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "#fff", fontWeight: 800, fontSize: "14px", padding: "14px 28px", borderRadius: "50px", textDecoration: "none", whiteSpace: "nowrap" }}>🛒 Get Started Now</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="resp-2col">
            <div style={{ background: "#0f0f1a", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "20px", padding: "36px" }}>
              {!sent ? (
                <>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", marginBottom: "6px" }}>
                    <span style={{ background: "linear-gradient(135deg,#22c55e,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Request</span> A Call Back
                  </h3>
                  <div style={{ width: "50px", height: "3px", background: "linear-gradient(135deg,#22c55e,#16a34a)", borderRadius: "2px", marginBottom: "20px" }} />
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
                    <button type="submit" style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", color: "#fff", fontWeight: 800, fontSize: "14px", padding: "14px 36px", borderRadius: "50px", border: "none", cursor: "pointer" }}>
                      Submit Request →
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "14px" }}>✅</div>
                  <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "1.4rem", marginBottom: "8px" }}>Sent!</h3>
                  <p style={{ color: "#6b7280", marginBottom: "20px" }}>We'll call back within minutes!</p>
                  <button onClick={() => setSent(false)} style={{ padding: "12px 28px", borderRadius: "50px", background: "linear-gradient(135deg,#22c55e,#16a34a)", border: "none", color: "#fff", fontWeight: 800, cursor: "pointer" }}>Send Another</button>
                </div>
              )}
            </div>

            <div style={{ background: "linear-gradient(135deg,#001a08,#0f0f1a)", border: "2px dashed rgba(34,197,94,0.15)", borderRadius: "20px", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", color: "rgba(34,197,94,0.25)", padding: "32px" }}>
                <div style={{ fontSize: "72px", marginBottom: "16px" }}>🌴</div>
                <div style={{ fontSize: "15px", fontWeight: 700 }}>Kerala Family Image</div>
                <div style={{ fontSize: "12px", opacity: 0.6, marginTop: "8px" }}>public/images/kerala-family.jpg</div>
                <div style={{ marginTop: "12px", fontSize: "18px", opacity: 0.4 }}>മലയാളം</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StayConnected />
      <Footer />

      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus { border-color: rgba(34,197,94,0.4) !important; }
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
