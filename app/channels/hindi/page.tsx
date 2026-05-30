"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StayConnected from "@/components/StayConnected";
import { brand } from "@/styles/brand";

const hindiChannels = [
  { name: "Star Plus", category: "Entertainment", emoji: "⭐" },
  { name: "Zee TV", category: "Entertainment", emoji: "📺" },
  { name: "Colors TV", category: "Entertainment", emoji: "🎨" },
  { name: "Sony TV", category: "Entertainment", emoji: "🎬" },
  { name: "Star Bharat", category: "Entertainment", emoji: "🌟" },
  { name: "&TV", category: "Entertainment", emoji: "📡" },
  { name: "SAB TV", category: "Comedy", emoji: "😄" },
  { name: "DD National", category: "News", emoji: "🏛️" },
  { name: "Aaj Tak", category: "News", emoji: "📰" },
  { name: "NDTV India", category: "News", emoji: "📱" },
  { name: "India TV", category: "News", emoji: "🗺️" },
  { name: "News18 India", category: "News", emoji: "📻" },
  { name: "Republic Bharat", category: "News", emoji: "��️" },
  { name: "ABP News", category: "News", emoji: "📢" },
  { name: "Zee News", category: "News", emoji: "🔔" },
  { name: "Star Gold", category: "Movies", emoji: "🏆" },
  { name: "Zee Cinema", category: "Movies", emoji: "🎞️" },
  { name: "Sony Max", category: "Movies", emoji: "🎥" },
  { name: "&Pictures", category: "Movies", emoji: "🎦" },
  { name: "B4U Movies", category: "Movies", emoji: "🎭" },
  { name: "Zee Bollywood", category: "Movies", emoji: "💃" },
  { name: "Star Utsav Movies", category: "Movies", emoji: "🌈" },
  { name: "Sony Wah", category: "Movies", emoji: "👏" },
  { name: "MTV India", category: "Music", emoji: "🎵" },
  { name: "9XM", category: "Music", emoji: "🎶" },
  { name: "Zee Music", category: "Music", emoji: "🎼" },
  { name: "B4U Music", category: "Music", emoji: "🎸" },
  { name: "Mastii", category: "Music", emoji: "🥁" },
  { name: "Discovery India", category: "Lifestyle", emoji: "🔭" },
  { name: "National Geographic", category: "Lifestyle", emoji: "🌍" },
  { name: "TLC India", category: "Lifestyle", emoji: "🏠" },
  { name: "Food Food", category: "Lifestyle", emoji: "🍛" },
];

const categories = ["All", "Entertainment", "News", "Movies", "Music", "Lifestyle", "Comedy"];

const contactOptions = [
  { icon: "✉️", label: "Email", value: brand.email, href: `mailto:${brand.email}`, color: "#FFD700" },
  { icon: "💬", label: "WhatsApp", value: "Chat Now", href: `https://wa.me/${brand.whatsapp}`, color: "#25D366" },
  { icon: "📞", label: "Phone", value: brand.phone, href: `tel:${brand.phone}`, color: "#4f8ef7" },
];

const channelCategories2 = [
  { icon: "🎵", label: "Music" },
  { icon: "📰", label: "News" },
  { icon: "🎭", label: "Entertainment" },
  { icon: "🎬", label: "Movies" },
  { icon: "☪️", label: "Religious" },
  { icon: "��️", label: "Spiritual" },
  { icon: "⚽", label: "Sports" },
  { icon: "😄", label: "Comedy" },
  { icon: "🌤️", label: "Weather" },
  { icon: "🍛", label: "Food & Lifestyle" },
  { icon: "✈️", label: "Travel" },
  { icon: "🏛️", label: "Political" },
  { icon: "🔬", label: "Science" },
  { icon: "��", label: "Lifestyle" },
  { icon: "👶", label: "Kids & Family" },
  { icon: "🤝", label: "Commercial" },
  { icon: "🎭", label: "Thriller" },
  { icon: "💪", label: "Fitness" },
];

export default function HindiChannelsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const filtered = activeCategory === "All"
    ? hindiChannels
    : hindiChannels.filter(c => c.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `📺 Hindi Channel List Request!%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <main style={{ background: "#08080f", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      {/* HERO */}
      <div style={{
        position: "relative", paddingTop: "220px", paddingBottom: "80px",
        textAlign: "center", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/hindi-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0f0f1a,#1a0a00,#08080f)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,15,0.75)" }} />
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "500px", background: "radial-gradient(circle,rgba(255,215,0,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", borderRadius: "50px", padding: "8px 18px", marginBottom: "20px" }}>
            <span style={{ width: "8px", height: "8px", background: "#4ade80", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px #4ade80" }} />
            <span style={{ color: "#FFD700", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>✦ Hindi Channels</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 900, color: "#fff", marginBottom: "16px", lineHeight: 1.1 }}>
            Watch Online{" "}
            <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Hindi TV Channels
            </span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 28px", lineHeight: 1.7 }}>
            Best Hindi IPTV Channels Provider in USA, UK & Canada with Krishna IPTV — 230+ Hindi channels in HD & 4K
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/buy-now" style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "15px", padding: "15px 36px", borderRadius: "50px", textDecoration: "none" }}>
              🛒 BUY NOW
            </a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ border: "1.5px solid rgba(255,215,0,0.35)", color: "#FFD700", fontWeight: 700, fontSize: "15px", padding: "15px 36px", borderRadius: "50px", textDecoration: "none" }}>
              💬 WhatsApp
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#6b7280", fontSize: "14px", marginTop: "24px" }}>
            <a href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <span>/</span>
            <a href="/channels" style={{ color: "#6b7280", textDecoration: "none" }}>Channels</a>
            <span>/</span>
            <span style={{ color: "#FFD700", fontWeight: 600 }}>Hindi</span>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section style={{ padding: "60px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#fff", marginBottom: "20px", lineHeight: 1.2 }}>
          <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            We Provide —
          </span>{" "}
          Over 230+ Hindi Channels with Krishna IPTV
        </h2>
        <div style={{ width: "60px", height: "3px", background: "linear-gradient(135deg,#FFD700,#FFA500)", borderRadius: "2px", marginBottom: "24px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="resp-2col">
          <div>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
              <strong style={{ color: "#FFD700" }}>Krishna IPTV</strong> is a popular IPTV provider for the Indian population in the <strong style={{ color: "#fff" }}>USA</strong>, Canada, UK, and Australia, offering over <strong style={{ color: "#fff" }}>230+ Hindi channels</strong> for streaming. Krishna IPTV is one of the most extensive channel lineups in the business if you are looking to watch <strong style={{ color: "#fff" }}>Hindi IPTV</strong> online with the most variety of entertainment.
            </p>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
              Our content includes live <strong style={{ color: "#fff" }}>Hindi channels</strong>, the newest and best Hindi films from Bollywood, breaking news, reality shows, spiritual programs, food and travel material, and highly regarded online series on OTT platforms.
            </p>
          </div>
          <div>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
              Our IPTV service is not just available in Hindi. With more than <strong style={{ color: "#fff" }}>8,000+ channels</strong> available worldwide, Krishna IPTV is pleased to provide programming in 12+ additional Indian languages including regional Indian languages and international content.
            </p>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8 }}>
              We have the best <strong style={{ color: "#FFD700" }}>Indian IPTV</strong> subscription options that are flexible enough to accommodate a range of viewing interests — whether you are a movie enthusiast, news reader, or just looking for entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* GET CHANNEL LIST */}
      <section style={{ padding: "60px 24px", background: "#0a0a12", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "#fff", textAlign: "center", marginBottom: "8px" }}>
            Get Channel List Through
          </h2>
          <p style={{ color: "#6b7280", textAlign: "center", fontSize: "14px", marginBottom: "40px" }}>
            Click Here For Available Channels in Your Area · For more information request a call back.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
            {contactOptions.map((opt, i) => (
              <a key={i} href={opt.href} target={opt.label === "WhatsApp" ? "_blank" : undefined}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  justifyContent: "center", gap: "12px", padding: "32px 20px",
                  background: "#0f0f1a",
                  border: `2px solid ${opt.color}30`,
                  borderRadius: "16px", textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = opt.color;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = `0 16px 48px ${opt.color}20`;
                  el.style.background = `linear-gradient(160deg,${opt.color}08,#0f0f1a)`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${opt.color}30`;
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                  el.style.background = "#0f0f1a";
                }}>
                <div style={{ fontSize: "36px" }}>{opt.icon}</div>
                <div style={{ fontSize: "18px", fontWeight: 900, color: opt.color }}>{opt.label}</div>
                <div style={{ fontSize: "12px", color: "#6b7280", textAlign: "center" }}>{opt.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNEL CATEGORIES */}
      <section style={{ padding: "60px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "#fff", textAlign: "center", marginBottom: "40px" }}>
          Channels{" "}
          <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Category
          </span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "16px" }} className="resp-6col">
          {channelCategories2.map((cat, i) => (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: "10px", padding: "20px 12px",
              background: "#0f0f1a",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "14px", cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,215,0,0.3)";
              el.style.transform = "translateY(-3px)";
              el.style.background = "rgba(255,215,0,0.04)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.06)";
              el.style.transform = "none";
              el.style.background = "#0f0f1a";
            }}>
              <span style={{ fontSize: "28px" }}>{cat.icon}</span>
              <span style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 600, textAlign: "center" }}>{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CHANNEL LIST */}
      <section style={{ padding: "60px 24px", background: "#0a0a12", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ color: "#FFD700", fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>✦ Full List</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "#fff", marginBottom: "16px" }}>
              230+ Hindi <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Channels</span>
            </h2>

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 18px", borderRadius: "50px", border: "none",
                    fontSize: "13px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                    background: activeCategory === cat ? "linear-gradient(135deg,#FFD700,#FFA500)" : "rgba(255,255,255,0.05)",
                    color: activeCategory === cat ? "#000" : "#9ca3af",
                  }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="resp-4col">
            {filtered.map((ch, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "14px 16px",
                background: "#0f0f1a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px", transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,215,0,0.25)";
                el.style.background = "rgba(255,215,0,0.03)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.background = "#0f0f1a";
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", flexShrink: 0,
                }}>{ch.emoji}</div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{ch.name}</div>
                  <div style={{ fontSize: "11px", color: "#6b7280" }}>{ch.category}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>
              + Many more Hindi channels available. Contact us for full list!
            </p>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{
              display: "inline-block",
              background: "linear-gradient(135deg,#FFD700,#FFA500)",
              color: "#000", fontWeight: 800, fontSize: "14px",
              padding: "14px 36px", borderRadius: "50px", textDecoration: "none",
            }}>
              💬 Get Full Channel List
            </a>
          </div>
        </div>
      </section>

      {/* SAVINGS + CONTACT FORM */}
      <section style={{ padding: "60px 24px", background: "#08080f", borderTop: "1px solid rgba(255,215,0,0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Savings Banner */}
          <div style={{
            background: "linear-gradient(135deg,#1a1a00,#2a2000)",
            border: "1px solid rgba(255,215,0,0.2)",
            borderRadius: "16px", padding: "24px 36px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "16px", marginBottom: "40px",
          }}>
            <div>
              <div style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 900, color: "#fff" }}>
                You <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>SAVE $1,000+/Year</span> with Krishna IPTV
              </div>
              <div style={{ color: "#6b7280", fontSize: "14px", marginTop: "4px" }}>vs Cable/Satellite TV subscription</div>
            </div>
            <a href="/buy-now" style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "14px 28px", borderRadius: "50px", textDecoration: "none", whiteSpace: "nowrap" }}>
              🛒 Get Started Now
            </a>
          </div>

          {/* Form + Image */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "stretch" }} className="resp-2col">
            {/* Form */}
            <div style={{ background: "#0f0f1a", border: "1px solid rgba(255,215,0,0.15)", borderRadius: "20px", padding: "36px" }}>
              {!sent ? (
                <>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", marginBottom: "6px" }}>
                    <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Request</span> A Call Back
                  </h3>
                  <div style={{ width: "50px", height: "3px", background: "linear-gradient(135deg,#FFD700,#FFA500)", borderRadius: "2px", marginBottom: "20px" }} />
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
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: "100%", padding: "13px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "14px", outline: "none", marginBottom: "24px", resize: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                    <button type="submit" style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "14px 36px", borderRadius: "50px", border: "none", cursor: "pointer" }}>
                      Submit Request →
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "14px" }}>✅</div>
                  <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "1.4rem", marginBottom: "8px" }}>Sent!</h3>
                  <p style={{ color: "#6b7280", marginBottom: "20px" }}>We'll call back within minutes!</p>
                  <button onClick={() => setSent(false)} style={{ padding: "12px 28px", borderRadius: "50px", background: "linear-gradient(135deg,#FFD700,#FFA500)", border: "none", color: "#000", fontWeight: 800, cursor: "pointer" }}>Send Another</button>
                </div>
              )}
            </div>

            {/* Image placeholder */}
            <div style={{
              background: "linear-gradient(135deg,#0f0f1a,#1a1a2e)",
              border: "2px dashed rgba(255,215,0,0.12)",
              borderRadius: "20px", overflow: "hidden",
              minHeight: "400px", position: "relative",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {/*
                Real image:
                <img src="/images/hindi-family.jpg"
                  style={{width:"100%",height:"100%",objectFit:"cover",position:"absolute",inset:0}} />
              */}
              <div style={{ textAlign: "center", color: "rgba(255,215,0,0.2)", padding: "32px" }}>
                <div style={{ fontSize: "72px", marginBottom: "16px" }}>👨‍👩‍👧‍👦</div>
                <div style={{ fontSize: "15px", fontWeight: 700 }}>Family Image</div>
                <div style={{ fontSize: "12px", opacity: 0.6, marginTop: "8px" }}>public/images/hindi-family.jpg</div>
                <div style={{ marginTop: "16px", padding: "10px 16px", background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.1)", borderRadius: "8px", fontSize: "11px", lineHeight: 1.6 }}>
                  Koi family TV dekhti hui image lagao — automatically fit hogi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StayConnected />
      <Footer />

      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus { border-color: rgba(255,215,0,0.4) !important; }
        @media (max-width: 900px) {
          .resp-2col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .resp-4col { grid-template-columns: 1fr 1fr !important; }
          .resp-6col { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 560px) {
          .resp-4col { grid-template-columns: 1fr 1fr !important; }
          .resp-6col { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </main>
  );
}
