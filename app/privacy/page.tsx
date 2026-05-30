import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/styles/brand";

export const metadata = {
  title: "Privacy Policy – Krishna IPTV",
  description: "Krishna IPTV Privacy Policy — how we collect, use and protect your personal information.",
};

const sections = [
  {
    icon: "📋",
    title: "Information We Collect",
    content: [
      "Personal Information: When you purchase a subscription or contact us, we may collect your name, email address, phone number, and payment information.",
      "Device Information: We may collect information about the device you use to access our service, including device type, operating system, and IP address.",
      "Usage Data: We collect information about how you use our service, including channels watched, viewing duration, and preferences.",
      "Communication Data: When you contact us via WhatsApp, email, or phone, we retain records of those communications to provide better support.",
    ],
  },
  {
    icon: "🎯",
    title: "How We Use Your Information",
    content: [
      "To provide, maintain, and improve our IPTV service and customer support.",
      "To process your subscription payments and manage your account.",
      "To send you service updates, promotional offers, and important notifications.",
      "To respond to your inquiries and provide technical support via WhatsApp or email.",
      "To analyze usage patterns and improve our channel offerings and service quality.",
      "To comply with legal obligations and protect against fraudulent activity.",
    ],
  },
  {
    icon: "🔒",
    title: "How We Protect Your Information",
    content: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction.",
      "All payment transactions are processed through secure, encrypted payment gateways. We do not store your full credit card or payment details on our servers.",
      "Access to your personal information is restricted to authorized personnel only, who are required to maintain the confidentiality of your data.",
      "We regularly review and update our security practices to ensure your data remains protected at all times.",
    ],
  },
  {
    icon: "🤝",
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share your information with trusted service providers who assist us in operating our service, subject to confidentiality agreements.",
      "We may disclose your information if required by law or to protect our rights, property, or safety.",
      "In the event of a business merger or acquisition, your information may be transferred to the new entity, with appropriate notice provided.",
    ],
  },
  {
    icon: "🍪",
    title: "Cookies & Tracking",
    content: [
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.",
      "You can control cookie settings through your browser preferences. Disabling cookies may affect some features of our website.",
      "We use analytics tools to understand how visitors interact with our website, helping us improve our content and services.",
      "We do not use tracking technologies to collect sensitive personal information or to track your activity across unrelated third-party websites.",
    ],
  },
  {
    icon: "👤",
    title: "Your Rights",
    content: [
      "Access: You have the right to request a copy of the personal information we hold about you.",
      "Correction: You can request that we correct any inaccurate or incomplete personal information.",
      "Deletion: You may request that we delete your personal information, subject to certain legal obligations.",
      "Opt-Out: You can opt out of receiving promotional communications from us at any time by contacting us via WhatsApp or email.",
      "Data Portability: You have the right to receive your personal data in a structured, machine-readable format.",
    ],
  },
  {
    icon: "👶",
    title: "Children's Privacy",
    content: [
      "Our service is not directed to children under the age of 13.",
      "We do not knowingly collect personal information from children under 13 years of age.",
      "If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information promptly.",
      "Parents or guardians who believe their child has provided personal information to us should contact us immediately.",
    ],
  },
  {
    icon: "🔄",
    title: "Changes to This Policy",
    content: [
      "We reserve the right to update or modify this Privacy Policy at any time.",
      "We will notify you of any significant changes by posting a notice on our website or sending you a direct notification.",
      "Your continued use of our service after any changes to this Privacy Policy constitutes your acceptance of the updated policy.",
      "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
    ],
  },
];

export default function PrivacyPage() {
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
            Privacy{" "}
            <span style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Policy
            </span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1rem", maxWidth: "560px", margin: "0 auto 20px", lineHeight: 1.7 }}>
            Your privacy is important to us. This policy explains how Krishna IPTV collects, uses, and protects your personal information.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "50px", padding: "8px 20px" }}>
            <span style={{ color: "#FFD700", fontSize: "13px", fontWeight: 600 }}>📅 Last Updated: May 2025</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#6b7280", fontSize: "14px", marginTop: "20px" }}>
            <a href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <span>/</span>
            <span style={{ color: "#FFD700", fontWeight: 600 }}>Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* INTRO CARD */}
      <section style={{ padding: "0 24px 40px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ background: "linear-gradient(135deg,#1a1a00,#2a2000)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "16px", padding: "28px 32px" }}>
          <p style={{ color: "#d1d5db", fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
            Welcome to <strong style={{ color: "#FFD700" }}>Krishna IPTV</strong>. We are committed to protecting your privacy and personal information. This Privacy Policy describes how we collect, use, and safeguard the information you provide when using our IPTV service. By using our service, you agree to the terms outlined in this policy. If you have any questions, please contact us at{" "}
            <a href={`mailto:${brand.email}`} style={{ color: "#FFD700" }}>{brand.email}</a> or via WhatsApp at{" "}
            <a href={`https://wa.me/${brand.whatsapp}`} style={{ color: "#FFD700" }}>{brand.phone}</a>.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section style={{ padding: "0 24px 80px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {sections.map((section, i) => (
            <div key={i} style={{ background: "#0f0f1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden", transition: "border-color 0.2s" }}>
              {/* Section Header */}
              <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "14px", background: "rgba(255,215,0,0.02)" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                  {section.icon}
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#FFD700", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "2px" }}>
                    Section {i + 1}
                  </div>
                  <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", margin: 0 }}>
                    {section.title}
                  </h2>
                </div>
              </div>

              {/* Section Content */}
              <div style={{ padding: "24px 28px" }}>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
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

        {/* Contact Section */}
        <div style={{ marginTop: "40px", background: "linear-gradient(135deg,#0f0f1a,#1a1a2e)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <div style={{ fontSize: "40px", marginBottom: "14px" }}>📬</div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#fff", marginBottom: "10px" }}>
            Questions About Our Privacy Policy?
          </h3>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px", lineHeight: 1.7 }}>
            If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please don't hesitate to contact us.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${brand.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#000", fontWeight: 800, fontSize: "14px", padding: "13px 28px", borderRadius: "50px", textDecoration: "none" }}>
              ✉️ Email Us
            </a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", fontWeight: 800, fontSize: "14px", padding: "13px 28px", borderRadius: "50px", textDecoration: "none" }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
