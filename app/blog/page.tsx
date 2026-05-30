"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/styles/brand";

const blogPosts = [
  {
    id: 1,
    slug: "best-indian-iptv-usa",
    category: "IPTV Guide",
    categoryColor: "#FFD700",
    emoji: "📺",
    title: "Best Indian IPTV Service in USA 2025 — Complete Guide",
    excerpt: "Looking for the best Indian IPTV service in USA? Krishna IPTV offers 8,000+ live Indian channels in HD & 4K quality at the most affordable price. Here's everything you need to know.",
    date: "May 15, 2025",
    readTime: "5 min read",
    tags: ["IPTV", "Indian Channels", "USA"],
  },
  {
    id: 2,
    slug: "hindi-channels-usa",
    category: "Hindi Channels",
    categoryColor: "#FF6B35",
    emoji: "🇮🇳",
    title: "Watch Hindi Channels in USA — Star Plus, Zee TV, Colors TV & More",
    excerpt: "Miss watching your favorite Hindi serials in USA? With Krishna IPTV, watch Star Plus, Zee TV, Colors TV, Sony TV and 230+ Hindi channels live in HD quality.",
    date: "May 10, 2025",
    readTime: "4 min read",
    tags: ["Hindi", "Star Plus", "Zee TV"],
  },
  {
    id: 3,
    slug: "iptv-vs-cable-tv",
    category: "Comparison",
    categoryColor: "#4f8ef7",
    emoji: "📊",
    title: "IPTV vs Cable TV — Why Indian Families in USA Are Switching to IPTV",
    excerpt: "Cable TV costs $120/month. Krishna IPTV costs just $33 for 3 months. See why thousands of Indian families in USA are switching from cable to IPTV for Indian channels.",
    date: "May 5, 2025",
    readTime: "6 min read",
    tags: ["IPTV", "Cable TV", "Savings"],
  },
  {
    id: 4,
    slug: "how-to-setup-iptv-firestick",
    category: "Setup Guide",
    categoryColor: "#4ade80",
    emoji: "🔥",
    title: "How to Setup IPTV on Amazon Fire Stick — Step by Step Guide",
    excerpt: "Setting up Krishna IPTV on your Amazon Fire Stick is easy! Follow this simple step-by-step guide to start watching 8,000+ Indian channels on your Fire Stick in minutes.",
    date: "April 28, 2025",
    readTime: "7 min read",
    tags: ["Fire Stick", "Setup", "Tutorial"],
  },
  {
    id: 5,
    slug: "punjabi-channels-canada",
    category: "Punjabi Channels",
    categoryColor: "#FFA500",
    emoji: "🌾",
    title: "Best Punjabi IPTV Channels in Canada — PTC Punjabi, Zee Punjabi & More",
    excerpt: "Watch PTC Punjabi, Zee Punjabi, 9X Tashan and 198+ Punjabi channels in Canada with Krishna IPTV. Best Punjabi entertainment at the lowest price!",
    date: "April 20, 2025",
    readTime: "4 min read",
    tags: ["Punjabi", "Canada", "PTC"],
  },
  {
    id: 6,
    slug: "tamil-channels-usa",
    category: "Tamil Channels",
    categoryColor: "#FF6B35",
    emoji: "☀️",
    title: "Watch Tamil Channels in USA — Sun TV, Vijay TV, Zee Tamil & More",
    excerpt: "Never miss your favorite Tamil serials and Kollywood movies! Krishna IPTV brings 300+ Tamil channels including Sun TV, Vijay TV, Zee Tamil in crystal clear 4K quality.",
    date: "April 15, 2025",
    readTime: "5 min read",
    tags: ["Tamil", "Sun TV", "Kollywood"],
  },
  {
    id: 7,
    slug: "4k-iptv-indian-channels",
    category: "Technology",
    categoryColor: "#8b5cf6",
    emoji: "🎬",
    title: "4K Ultra HD Indian IPTV — Is It Worth It? Everything You Need to Know",
    excerpt: "Is 4K IPTV worth it for Indian channels? Krishna IPTV offers 4K Ultra HD streaming for hundreds of Indian channels. Here's what you need to know about 4K IPTV quality.",
    date: "April 8, 2025",
    readTime: "6 min read",
    tags: ["4K", "Ultra HD", "Quality"],
  },
  {
    id: 8,
    slug: "iptv-smart-tv-setup",
    category: "Setup Guide",
    categoryColor: "#4ade80",
    emoji: "📱",
    title: "How to Watch Indian Channels on Smart TV — Complete Setup Guide 2025",
    excerpt: "Watch Indian IPTV channels on your Samsung, LG, Sony or any Smart TV. This guide shows you exactly how to setup Krishna IPTV on your Smart TV in just 5 minutes.",
    date: "April 1, 2025",
    readTime: "5 min read",
    tags: ["Smart TV", "Setup", "Guide"],
  },
  {
    id: 9,
    slug: "malayalam-channels-usa",
    category: "Malayalam Channels",
    categoryColor: "#22c55e",
    emoji: "��",
    title: "Watch Malayalam Channels in USA — Asianet, Mazhavil Manorama & More",
    excerpt: "God's Own Country entertainment in the USA! Krishna IPTV brings you 250+ Malayalam channels including Asianet, Mazhavil Manorama, Surya TV in HD & 4K quality.",
    date: "March 25, 2025",
    readTime: "4 min read",
    tags: ["Malayalam", "Kerala", "Asianet"],
  },
];

const categories = ["All", "IPTV Guide", "Setup Guide", "Hindi Channels", "Tamil Channels", "Malayalam Channels", "Punjabi Channels", "Comparison", "Technology"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter(post => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <main style={{ background: "#08080f", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      {/* HERO */}
      <div style={{ position: "relative", paddingTop: "220px", paddingBottom: "80px", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0f0f1a,#1a1a00,#08080f)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "400px", background: "radial-gradient(circle,rgba(255,215,0,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10 }}>
          <span style={{ color: "#FFD700", fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>✦ Our Blog</span>
          <h1 style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 900, color: "#fff", marginBottom: "16px", lineHeight: 1.1 }}>
            Krishna IPTV{" "}
            <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Blog
            </span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            IPTV guides, setup tutorials, channel updates & more — everything you need to know about Indian IPTV in USA & Canada
          </p>

          {/* Search */}
          <div style={{ maxWidth: "480px", margin: "0 auto", position: "relative" }}>
            <input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: "100%", padding: "16px 56px 16px 20px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,215,0,0.2)",
                borderRadius: "50px", color: "#fff",
                fontSize: "14px", outline: "none",
                boxSizing: "border-box",
              }} />
            <span style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", fontSize: "18px" }}>🔍</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#6b7280", fontSize: "14px", marginTop: "24px" }}>
            <a href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <span>/</span>
            <span style={{ color: "#FFD700", fontWeight: 600 }}>Blog</span>
          </div>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <section style={{ padding: "32px 24px 0", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{ padding: "8px 18px", borderRadius: "50px", border: "none", fontSize: "13px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s", background: activeCategory === cat ? "linear-gradient(135deg,#FFD700,#FFA500)" : "rgba(255,255,255,0.05)", color: activeCategory === cat ? "#000" : "#9ca3af" }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* BLOG GRID */}
      <section style={{ padding: "48px 24px 80px", maxWidth: "1200px", margin: "0 auto" }}>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: "56px", marginBottom: "16px" }}>🔍</div>
            <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "1.4rem", marginBottom: "8px" }}>No articles found</h3>
            <p style={{ color: "#6b7280" }}>Try a different search term or category</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="resp-3col">
            {filtered.map((post, i) => (
              <article key={post.id} style={{
                background: "#0f0f1a",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px", overflow: "hidden",
                transition: "all 0.3s", cursor: "pointer",
                display: "flex", flexDirection: "column",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,215,0,0.3)"; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.transform = "none"; el.style.boxShadow = "none"; }}>

                {/* Card Image Area */}
                <div style={{
                  height: "180px",
                  background: `linear-gradient(135deg, ${post.categoryColor}15, #0f0f1a)`,
                  borderBottom: `1px solid ${post.categoryColor}20`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
                  <div style={{ fontSize: "64px", position: "relative", zIndex: 1 }}>{post.emoji}</div>
                  <div style={{
                    position: "absolute", top: "16px", left: "16px",
                    background: post.categoryColor, color: "#000",
                    fontSize: "10px", fontWeight: 800,
                    padding: "4px 12px", borderRadius: "50px",
                    letterSpacing: "0.5px", textTransform: "uppercase",
                  }}>{post.category}</div>
                </div>

                {/* Card Content */}
                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h2 style={{ fontSize: "16px", fontWeight: 800, color: "#fff", marginBottom: "10px", lineHeight: 1.4 }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.7, marginBottom: "16px", flex: 1 }}>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                    {post.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: "10px", fontWeight: 700,
                        color: post.categoryColor,
                        background: `${post.categoryColor}15`,
                        border: `1px solid ${post.categoryColor}30`,
                        padding: "3px 10px", borderRadius: "50px",
                      }}>#{tag}</span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "14px" }}>
                    <div style={{ fontSize: "12px", color: "#4b5563" }}>
                      📅 {post.date}
                    </div>
                    <div style={{ fontSize: "12px", color: "#4b5563" }}>
                      ⏱ {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Read More */}
                <div style={{ padding: "0 24px 24px" }}>
                  <a href={`/blog/${post.slug}`} style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "8px", padding: "12px",
                    background: `${post.categoryColor}12`,
                    border: `1px solid ${post.categoryColor}30`,
                    borderRadius: "10px",
                    color: post.categoryColor, fontSize: "13px",
                    fontWeight: 700, textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${post.categoryColor}25`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${post.categoryColor}12`; }}>
                    Read Article →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Results count */}
        <div style={{ textAlign: "center", marginTop: "40px", color: "#4b5563", fontSize: "14px" }}>
          Showing {filtered.length} of {blogPosts.length} articles
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "0 24px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg,#1a1a00,#2a2000)",
          border: "1px solid rgba(255,215,0,0.2)",
          borderRadius: "20px", padding: "48px 40px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: "24px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 900, color: "#fff", marginBottom: "8px" }}>
              Ready to Watch Indian Channels in USA?
            </h3>
            <p style={{ color: "#6b7280", fontSize: "15px" }}>
              Start with a free trial — no credit card needed. 8,000+ channels in HD & 4K!
            </p>
          </div>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
            <a href="/buy-now" style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "14px 28px", borderRadius: "50px", textDecoration: "none", whiteSpace: "nowrap" }}>
              🛒 Get Started
            </a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ border: "1.5px solid rgba(255,215,0,0.35)", color: "#FFD700", fontWeight: 700, fontSize: "14px", padding: "14px 28px", borderRadius: "50px", textDecoration: "none", whiteSpace: "nowrap" }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        input::placeholder { color: rgba(255,255,255,0.25); }
        input:focus { border-color: rgba(255,215,0,0.4) !important; }
        @media (max-width: 900px) {
          .resp-3col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .resp-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
