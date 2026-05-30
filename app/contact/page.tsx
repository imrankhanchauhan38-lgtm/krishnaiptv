"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/styles/brand";

const faqs = [
  {
    q: "How do I set up my IPTV service?",
    a: "After payment, we will send you the setup instructions via WhatsApp within minutes. Setup is easy on any device — Smart TV, Fire Stick, Android Box, iPhone, or PC. Our team is available 24/7 to help you get started.",
  },
  {
    q: "What devices are compatible with Krishna IPTV?",
    a: "Krishna IPTV works on Smart TVs (Samsung, LG, Sony), Amazon Fire Stick, Android TV Box, MAG Box, iPhone, iPad, Android phones, Windows PC, Mac, and any device that supports IPTV players like TiviMate, IPTV Smarters, or GSE Smart IPTV.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Our subscriptions are one-time payments for a fixed duration (3 months, 6 months, 1 year, etc.). There are no monthly charges or auto-renewals. Once your subscription period ends, you can choose to renew or not.",
  },
  {
    q: "Do you offer international channels?",
    a: "Yes! Krishna IPTV includes 8,000+ channels in Hindi, Punjabi, Tamil, Telugu, Malayalam, Gujarati, Bengali, Urdu, Kannada, Marathi, Oriya, English and many more international languages.",
  },
  {
    q: "How long does activation take?",
    a: "Activation is instant! Once payment is confirmed, we send your IPTV credentials via WhatsApp within 5-10 minutes. You can start watching immediately after setup.",
  },
  {
    q: "What if I face buffering or technical issues?",
    a: "Our technical support team is available 24/7 via WhatsApp. We resolve most issues within minutes. Our servers are located in USA & Canada for fastest streaming speeds and 99.9% uptime.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! We offer a free trial so you can test our service before subscribing. Contact us via WhatsApp to request your free trial — no credit card required.",
  },
  {
    q: "How many devices can I use simultaneously?",
    a: "This depends on your subscription plan. Our standard plans support 1-2 devices simultaneously. Contact us if you need multi-screen support for your household.",
  },
];

const categories = [
  "General Inquiry",
  "Technical Support",
  "Billing & Payment",
  "Channel Request",
  "Free Trial",
  "Reseller Program",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", category: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `📩 Contact Form!%0AName: ${form.firstName} ${form.lastName}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ACategory: ${form.category}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <main style={{ background: "#08080f", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      {/* HERO */}
      <div style={{ position: "relative", paddingTop: "220px", paddingBottom: "80px", textAlign: "center", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/contact-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0f0f1a,#08080f)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,15,0.75)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "400px", background: "radial-gradient(circle,rgba(255,215,0,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10, padding: "0 24px" }}>
          <span style={{ color: "#FFD700", fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>✦ Contact Us</span>
          <h1 style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 900, color: "#fff", marginBottom: "16px", lineHeight: 1.1 }}>
            Get in{" "}
            <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Touch
            </span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            We care about your entertainment needs. Contact us today and say bye to boredom!
          </p>
          <a href="/buy-now" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "15px", padding: "15px 40px", borderRadius: "50px", textDecoration: "none" }}>
            ▶ BUY NOW
          </a>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#6b7280", fontSize: "14px", marginTop: "24px" }}>
            <a href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <span>/</span>
            <span style={{ color: "#FFD700", fontWeight: 600 }}>Contact Us</span>
          </div>
        </div>
      </div>

      {/* 3 SUPPORT CARDS */}
      <section style={{ padding: "60px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="resp-3col">
          {[
            { icon: "📞", title: "Phone Support", sub: "Speak directly with our support team", value: brand.phone, href: `tel:${brand.phone}`, color: "#4f8ef7", badge: "24/7 Available" },
            { icon: "✉️", title: "Email Support", sub: "Send us your questions anytime", value: brand.email, href: `mailto:${brand.email}`, color: "#FFD700", badge: "Response within 24 hours" },
            { icon: "💬", title: "Live Chat", sub: "Instant support via WhatsApp", value: "Start Chat", href: `https://wa.me/${brand.whatsapp}`, color: "#25D366", badge: "24/7 Available" },
          ].map((card, i) => (
            <a key={i} href={card.href} target={i === 2 ? "_blank" : undefined}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "36px 24px", background: "#0f0f1a", border: `1px solid ${card.color}25`, borderRadius: "20px", textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = card.color; el.style.transform = "translateY(-6px)"; el.style.boxShadow = `0 20px 60px ${card.color}20`; el.style.background = `linear-gradient(160deg,${card.color}08,#0f0f1a)`; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${card.color}25`; el.style.transform = "none"; el.style.boxShadow = "none"; el.style.background = "#0f0f1a"; }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "18px", background: `${card.color}15`, border: `1.5px solid ${card.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "16px" }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>{card.title}</h3>
              <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "16px" }}>{card.sub}</p>
              <div style={{ fontSize: "15px", fontWeight: 700, color: card.color, marginBottom: "8px" }}>{card.value}</div>
              <span style={{ fontSize: "11px", color: "#4b5563", fontWeight: 600 }}>{card.badge}</span>
            </a>
          ))}
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section style={{ padding: "0 24px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "32px", alignItems: "start" }} className="resp-2col">

          {/* FORM */}
          <div style={{ background: "#0f0f1a", border: "1px solid rgba(255,215,0,0.15)", borderRadius: "20px", padding: "40px" }}>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2rem)", fontWeight: 900, color: "#fff", marginBottom: "8px" }}>
              Send us a{" "}
              <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Message</span>
            </h2>
            <div style={{ width: "50px", height: "3px", background: "linear-gradient(135deg,#FFD700,#FFA500)", borderRadius: "2px", marginBottom: "28px" }} />

            {!sent ? (
              <form onSubmit={handleSubmit}>
                {/* First + Last Name */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>First Name *</label>
                    <input required placeholder="Enter first Name" value={form.firstName}
                      onChange={e => setForm({...form, firstName: e.target.value})}
                      style={{ width: "100%", padding: "13px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Last Name *</label>
                    <input required placeholder="Enter last Name" value={form.lastName}
                      onChange={e => setForm({...form, lastName: e.target.value})}
                      style={{ width: "100%", padding: "13px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                  </div>
                </div>

                {/* Email + Category */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Email Address *</label>
                    <input required type="email" placeholder="Enter email address" value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      style={{ width: "100%", padding: "13px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Select Category *</label>
                    <select required value={form.category}
                      onChange={e => setForm({...form, category: e.target.value})}
                      style={{ width: "100%", padding: "13px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: form.category ? "#fff" : "#4b5563", fontSize: "14px", outline: "none", cursor: "pointer", appearance: "none", boxSizing: "border-box" }}>
                      <option value="" style={{ background: "#0f0f1a", color: "#666" }}>Select Category</option>
                      {categories.map(c => <option key={c} value={c} style={{ background: "#0f0f1a", color: "#fff" }}>{c}</option>)}
                    </select>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Phone Number *</label>
                  <input required type="tel" placeholder="Enter Phone Number" value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    style={{ width: "100%", padding: "13px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                </div>

                {/* Message */}
                <div style={{ marginBottom: "28px" }}>
                  <label style={{ fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "8px" }}>Message *</label>
                  <textarea required placeholder="Enter your Message" rows={5} value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    style={{ width: "100%", padding: "13px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "14px", outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
                </div>

                <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", padding: "15px", background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "15px", borderRadius: "12px", border: "none", cursor: "pointer", transition: "all 0.2s" }}>
                  ✈️ Submit Message
                </button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ fontSize: "64px", marginBottom: "16px" }}>✅</div>
                <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "1.6rem", marginBottom: "8px" }}>Message Sent!</h3>
                <p style={{ color: "#6b7280", marginBottom: "24px" }}>We'll reply within minutes on WhatsApp!</p>
                <button onClick={() => setSent(false)} style={{ padding: "13px 32px", borderRadius: "50px", background: "linear-gradient(135deg,#FFD700,#FFA500)", border: "none", color: "#000", fontWeight: 800, cursor: "pointer" }}>
                  Send Another
                </button>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Phone */}
            <div style={{ background: "#0f0f1a", border: "1px solid rgba(79,142,247,0.2)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>📞</div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>Phone Support</h3>
              <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "12px" }}>Speak directly with our support team</p>
              <a href={`tel:${brand.phone}`} style={{ fontSize: "16px", fontWeight: 800, color: "#4f8ef7", textDecoration: "none", display: "block", marginBottom: "4px" }}>{brand.phone}</a>
              <span style={{ fontSize: "11px", color: "#4b5563" }}>24/7 Available</span>
            </div>

            {/* Email */}
            <div style={{ background: "#0f0f1a", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>✉️</div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>Email Support</h3>
              <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "12px" }}>Send us your questions anytime</p>
              <a href={`mailto:${brand.email}`} style={{ fontSize: "14px", fontWeight: 800, color: "#FFD700", textDecoration: "none", display: "block", marginBottom: "4px" }}>{brand.email}</a>
              <span style={{ fontSize: "11px", color: "#4b5563" }}>Response within 24 hours</span>
            </div>

            {/* Business Hours */}
            <div style={{ background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>🕐</div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>Business Hours</h3>
              <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "12px" }}>24/7 Customer Support</p>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#FFD700", marginBottom: "4px" }}>Sales: Mon-Sun 9AM-6PM CST</div>
              <span style={{ fontSize: "11px", color: "#4b5563" }}>24/7 Available</span>
            </div>

            {/* Emergency */}
            <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: "16px", padding: "24px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#ef4444", marginBottom: "6px" }}>🚨 Emergency Technical Support</h3>
              <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "14px" }}>For urgent technical issues affecting your service</p>
              <a href={`tel:${brand.phone}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", background: "#ef4444", color: "#fff", fontWeight: 800, fontSize: "13px", borderRadius: "10px", textDecoration: "none" }}>
                📞 CALL EMERGENCY LINE
              </a>
            </div>

            {/* WhatsApp */}
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "18px", background: "#25D366", color: "#fff", fontWeight: 800, fontSize: "15px", borderRadius: "16px", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#20b858"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#25D366"; }}>
              💬 Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 24px 80px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ color: "#FFD700", fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "14px" }}>✦ FAQ</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#fff", marginBottom: "12px" }}>
            Frequently Asked{" "}
            <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Questions</span>
          </h2>
          <p style={{ color: "#6b7280", fontSize: "15px" }}>Find quick answers to common questions about our IPTV service</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "#0f0f1a", border: `1px solid ${openFaq === i ? "rgba(255,215,0,0.3)" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", overflow: "hidden", transition: "all 0.3s" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px" }}>
                <span style={{ fontSize: "15px", fontWeight: 700, color: openFaq === i ? "#FFD700" : "#fff" }}>{faq.q}</span>
                <span style={{ fontSize: "18px", color: "#FFD700", flexShrink: 0, transition: "transform 0.3s", display: "inline-block", transform: openFaq === i ? "rotate(180deg)" : "none" }}>▼</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: "0 24px 20px", fontSize: "14px", color: "#9ca3af", lineHeight: 1.8, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ paddingTop: "16px" }}>{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div style={{ marginTop: "40px", background: "linear-gradient(135deg,#1a1a00,#2a2000)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>🤔</div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#fff", marginBottom: "8px" }}>Still Have Questions?</h3>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px" }}>Our support team is available 24/7 to help you!</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", fontWeight: 800, fontSize: "14px", padding: "13px 28px", borderRadius: "50px", textDecoration: "none" }}>
              💬 WhatsApp Us
            </a>
            <a href={`tel:${brand.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "13px 28px", borderRadius: "50px", textDecoration: "none" }}>
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus, select:focus { border-color: rgba(255,215,0,0.4) !important; background: rgba(255,215,0,0.03) !important; }
        @media (max-width: 900px) {
          .resp-2col { grid-template-columns: 1fr !important; }
          .resp-3col { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
        @media (max-width: 560px) {
          .resp-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
