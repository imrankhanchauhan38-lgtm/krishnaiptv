import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/styles/brand";

export const metadata = {
  title: "Terms & Conditions – Krishna IPTV",
  description: "Krishna IPTV Terms & Conditions — please read before using our service.",
};

const sections = [
  {
    icon: "📜",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using Krishna IPTV services, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.",
      "If you do not agree with any of these terms, you are prohibited from using or accessing our service.",
      "These terms apply to all users of the service, including without limitation users who are browsers, customers, merchants, and content contributors.",
      "We reserve the right to update these Terms & Conditions at any time without prior notice. Continued use of the service constitutes acceptance of the updated terms.",
    ],
  },
  {
    icon: "📺",
    title: "Service Description",
    content: [
      "Krishna IPTV provides Internet Protocol Television (IPTV) services that allow subscribers to access live TV channels, movies, and on-demand content over the internet.",
      "Our service includes access to 8,000+ live Indian and international channels in HD & 4K quality, subject to your subscription plan.",
      "Channel availability may vary and is subject to change without notice due to licensing agreements, technical issues, or other factors beyond our control.",
      "We do not guarantee uninterrupted access to all channels at all times. Maintenance windows may occasionally affect service availability.",
      "Our service is provided for personal, non-commercial use only. Any commercial use is strictly prohibited without prior written consent.",
    ],
  },
  {
    icon: "💳",
    title: "Subscription & Payment",
    content: [
      "All subscription fees are charged in US Dollars (USD) and are non-refundable once the service has been activated and delivered.",
      "Subscription plans are offered on a one-time payment basis for the selected duration (3 months, 6 months, 1 year, 2 years, 3 years, or 5 years).",
      "We reserve the right to change our pricing at any time. Price changes will not affect existing active subscriptions.",
      "Free trial subscriptions are provided for evaluation purposes only and are limited to one trial per customer.",
      "Any fraudulent payment activity will result in immediate termination of service and may be reported to relevant authorities.",
      "Payments are processed securely through our payment partners. We do not store your full payment card details on our servers.",
    ],
  },
  {
    icon: "🚫",
    title: "Prohibited Uses",
    content: [
      "Redistribution or resale of our IPTV service without prior written authorization from Krishna IPTV.",
      "Sharing your subscription credentials with individuals outside your household.",
      "Using our service for any illegal purpose or in violation of any local, national, or international laws.",
      "Attempting to gain unauthorized access to our servers, systems, or networks.",
      "Using automated tools, bots, or scripts to access or scrape our service.",
      "Recording, capturing, or distributing any content provided through our service for commercial purposes.",
      "Reverse engineering, decompiling, or disassembling any software or technology used in our service.",
    ],
  },
  {
    icon: "⚖️",
    title: "Intellectual Property",
    content: [
      "All content delivered through Krishna IPTV, including TV channels, movies, and VOD content, is protected by applicable copyright and intellectual property laws.",
      "Users are granted a limited, non-exclusive, non-transferable license to access and view content for personal, non-commercial use only.",
      "The Krishna IPTV name, logo, and all related marks are trademarks of Krishna IPTV. Unauthorized use is strictly prohibited.",
      "We respect the intellectual property rights of content owners. If you believe any content infringes your copyright, please contact us immediately.",
    ],
  },
  {
    icon: "⚡",
    title: "Service Availability",
    content: [
      "Krishna IPTV strives to provide 99.9% uptime but does not guarantee uninterrupted service availability at all times.",
      "We reserve the right to temporarily suspend or permanently discontinue any part of our service with or without notice.",
      "Scheduled maintenance may occasionally result in brief service interruptions. We will attempt to notify users in advance when possible.",
      "Service quality may vary depending on your internet connection speed, device capabilities, and geographic location.",
      "We are not responsible for service interruptions caused by factors beyond our control, including internet outages, natural disasters, or third-party service failures.",
    ],
  },
  {
    icon: "🛡️",
    title: "Limitation of Liability",
    content: [
      "Krishna IPTV shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our service.",
      "Our total liability to you for any claims arising from or related to our service shall not exceed the amount you paid for your current subscription period.",
      "We do not warrant that our service will meet your specific requirements or that it will be error-free, secure, or available at all times.",
      "We are not responsible for any content viewed through our service or for any decisions made based on such content.",
    ],
  },
  {
    icon: "🔚",
    title: "Termination",
    content: [
      "We reserve the right to terminate or suspend your account and access to our service immediately, without prior notice, for any violation of these Terms & Conditions.",
      "You may terminate your subscription at any time, however, no refunds will be provided for unused subscription time.",
      "Upon termination, your right to access and use our service will immediately cease.",
      "All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.",
    ],
  },
  {
    icon: "📍",
    title: "Governing Law",
    content: [
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of the United States of America.",
      "Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of the United States.",
      "If any provision of these Terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable.",
      "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main style={{ background: "#08080f", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>
      <Navbar />

      {/* HERO */}
      <div style={{ position: "relative", paddingTop: "220px", paddingBottom: "80px", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0f0f1a,#08080f)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "400px", background: "radial-gradient(circle,rgba(255,215,0,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10 }}>
          <span style={{ color: "#FFD700", fontSize: "12px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>✦ Legal</span>
          <h1 style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 900, color: "#fff", marginBottom: "16px", lineHeight: 1.1 }}>
            Terms &{" "}
            <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Conditions
            </span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1rem", maxWidth: "560px", margin: "0 auto 20px", lineHeight: 1.7 }}>
            Please read these Terms & Conditions carefully before using Krishna IPTV service. By using our service, you agree to these terms.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "50px", padding: "8px 20px" }}>
            <span style={{ color: "#FFD700", fontSize: "13px", fontWeight: 600 }}>📅 Last Updated: May 2025</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#6b7280", fontSize: "14px", marginTop: "20px" }}>
            <a href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <span>/</span>
            <span style={{ color: "#FFD700", fontWeight: 600 }}>Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* INTRO CARD */}
      <section style={{ padding: "0 24px 40px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ background: "linear-gradient(135deg,#1a1a00,#2a2000)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "16px", padding: "28px 32px" }}>
          <p style={{ color: "#d1d5db", fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
            These Terms & Conditions govern your use of <strong style={{ color: "#FFD700" }}>Krishna IPTV</strong> services. By subscribing to or using our service, you acknowledge that you have read, understood, and agree to be bound by these terms. If you have any questions, please contact us at{" "}
            <a href={`mailto:${brand.email}`} style={{ color: "#FFD700" }}>{brand.email}</a> or via WhatsApp at{" "}
            <a href={`https://wa.me/${brand.whatsapp}`} style={{ color: "#FFD700" }}>{brand.phone}</a> before using our service.
          </p>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <section style={{ padding: "0 24px 40px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
          📌 Quick Summary
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }} className="resp-3col-terms">
          {[
            { icon: "✅", text: "Personal use only" },
            { icon: "✅", text: "One-time payment" },
            { icon: "✅", text: "No monthly fees" },
            { icon: "❌", text: "No redistribution" },
            { icon: "❌", text: "No credential sharing" },
            { icon: "❌", text: "No commercial use" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 16px", background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", fontSize: "13px", color: "#d1d5db", fontWeight: 600 }}>
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS */}
      <section style={{ padding: "0 24px 80px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {sections.map((section, i) => (
            <div key={i} style={{ background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden" }}>
              {/* Header */}
              <div style={{ padding: "22px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "14px", background: "rgba(255,215,0,0.02)" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                  {section.icon}
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "#FFD700", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "2px" }}>
                    Clause {i + 1}
                  </div>
                  <h2 style={{ fontSize: "17px", fontWeight: 800, color: "#fff", margin: 0 }}>
                    {section.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "22px 28px" }}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {section.content.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#9ca3af", lineHeight: 1.7 }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "linear-gradient(135deg,#FFD700,#FFA500)", flexShrink: 0, marginTop: "8px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Agreement Box */}
        <div style={{ marginTop: "40px", background: "linear-gradient(135deg,#1a1a00,#2a2000)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <div style={{ fontSize: "40px", marginBottom: "14px" }}>🤝</div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#fff", marginBottom: "10px" }}>
            By Using Our Service, You Agree to These Terms
          </h3>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 24px" }}>
            If you have any questions about these Terms & Conditions or need clarification, please contact us before subscribing.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/buy-now" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "13px 28px", borderRadius: "50px", textDecoration: "none" }}>
              🛒 Subscribe Now
            </a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", fontWeight: 800, fontSize: "14px", padding: "13px 28px", borderRadius: "50px", textDecoration: "none" }}>
              💬 Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .resp-3col-terms { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
