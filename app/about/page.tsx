import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import TestimonialsMap from "@/components/TestimonialsMap";
import WhatIsIPTV from "@/components/WhatIsIPTV";
import ServicesBanner from "@/components/ServicesBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import ComparisonSection from "@/components/ComparisonSection";
import AboutExtra from "@/components/AboutExtra";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us – Krishna IPTV | #1 Indian IPTV Service USA & Canada",
  description: "Learn about Krishna IPTV — India's most trusted IPTV service for USA & Canada.",
};

const features = [
  { num: "1", title: "24/7 Support", desc: "Krishna IPTV provides round-the-clock support via WhatsApp and call in Hindi & English." },
  { num: "2", title: "Live Recording (DVR)", desc: "Record live Indian channels and watch them anytime at your convenience." },
  { num: "3", title: "5X Picture Quality", desc: "4K Ultra HD picture quality — 5 times clearer than standard IPTV." },
  { num: "4", title: "Zero Buffering", desc: "99.9% uptime guarantee. No freezing, no buffering — just smooth entertainment." },
  { num: "5", title: "All Indian Languages", desc: "Hindi, Punjabi, Tamil, Telugu, Malayalam, Gujarati, Bengali, Kannada and 50+ more." },
  { num: "6", title: "Multi-Device Support", desc: "Smart TV, Fire Stick, iPhone, Android, PC — one subscription, all devices." },
];

const stats = [
  { num: "10,000+", label: "Live Channels" },
  { num: "100K+", label: "Movies & VOD" },
  { num: "50K+", label: "Happy Customers" },
  { num: "99.9%", label: "Uptime" },
];

export default function AboutPage() {
  return (
    <main style={{background:"#08080f",minHeight:"100vh",color:"#fff",overflowX:"hidden"}}>
      <Navbar />

      {/* Hero */}
      <div style={{
        position:"relative",minHeight:"400px",
        display:"flex",alignItems:"center",justifyContent:"center",
        textAlign:"center",overflow:"hidden",
        paddingTop:"220px",paddingBottom:"80px",
      }}>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,#0f0f1a,#1a1a2e,#08080f)"}} />
        <div style={{position:"absolute",inset:0,backgroundImage:"url('/images/about-hero.jpg')",backgroundSize:"cover",backgroundPosition:"center",opacity:0.15}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(8,8,15,0.7),rgba(8,8,15,0.9))"}} />
        <div style={{position:"absolute",inset:0,opacity:0.03,backgroundImage:"linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)",backgroundSize:"50px 50px"}} />
        <div style={{position:"relative",zIndex:10}}>
          <span style={{color:"#FFD700",fontSize:"12px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",display:"block",marginBottom:"16px"}}>✦ Our Profile</span>
          <h1 style={{fontSize:"clamp(2.5rem,6vw,4rem)",fontWeight:900,color:"#fff",marginBottom:"16px",lineHeight:1.1}}>
            About{" "}
            <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              Krishna IPTV
            </span>
          </h1>
          <p style={{color:"#9ca3af",fontSize:"1.1rem",maxWidth:"580px",margin:"0 auto 32px",lineHeight:1.7}}>
            #1 Indian IPTV Service — Best Indian IPTV subscription for entertainment in USA & Canada
          </p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",color:"#6b7280",fontSize:"14px"}}>
            <a href="/" style={{color:"#6b7280",textDecoration:"none"}}>Home</a>
            <span>/</span>
            <span style={{color:"#FFD700",fontWeight:600}}>About Us</span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",padding:"28px 24px"}}>
        <div style={{maxWidth:"1000px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",textAlign:"center"}}>
          {stats.map((s,i) => (
            <div key={i}>
              <div style={{fontSize:"2rem",fontWeight:900,color:"#000",lineHeight:1}}>{s.num}</div>
              <div style={{fontSize:"12px",fontWeight:700,color:"rgba(0,0,0,0.6)",textTransform:"uppercase",letterSpacing:"1px",marginTop:"4px"}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome + Features */}
      <section style={{padding:"80px 24px",maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"start"}}>
          <div>
            <span style={{color:"#FFD700",fontSize:"12px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",display:"block",marginBottom:"16px"}}>✦ Who We Are</span>
            <h2 style={{fontSize:"clamp(1.8rem,3vw,2.5rem)",fontWeight:900,color:"#fff",marginBottom:"20px",lineHeight:1.2}}>
              Welcome to{" "}
              <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Krishna IPTV</span>
              {" "}— The Best Indian IPTV in USA
            </h2>
            <div style={{width:"60px",height:"3px",background:"linear-gradient(135deg,#FFD700,#FFA500)",borderRadius:"2px",marginBottom:"24px"}} />
            <p style={{color:"#9ca3af",fontSize:"15px",lineHeight:1.8,marginBottom:"16px"}}>
              Welcome to <strong style={{color:"#FFD700"}}>Krishna IPTV</strong> — your trusted source for high-quality <strong style={{color:"#fff"}}>Indian IPTV subscription plans</strong>. All your favorite desi/Indian channels are available in high definition. With a commitment to quality, innovation, and customer satisfaction, we have established ourselves as the industry leader.
            </p>
            <p style={{color:"#9ca3af",fontSize:"15px",lineHeight:1.8,marginBottom:"32px"}}>
              Krishna IPTV has the largest number of satisfied and happy customers across USA & Canada. We cover all 50 states in the USA — delivering premium Indian entertainment to your home instantly.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              {[
                "50,000+ happy customers across USA & Canada",
                "10,000+ live Indian channels in HD & 4K quality",
                "Instant activation — start watching in minutes",
                "100% money-back guarantee if not satisfied",
              ].map((p,i) => (
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:"12px"}}>
                  <div style={{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg,#FFD700,#FFA500)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:900,color:"#000",flexShrink:0,marginTop:"1px"}}>✓</div>
                  <span style={{color:"#d1d5db",fontSize:"14px",lineHeight:1.6}}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span style={{color:"#FFD700",fontSize:"12px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",display:"block",marginBottom:"16px"}}>✦ Why Choose Us</span>
            <h2 style={{fontSize:"clamp(1.8rem,3vw,2.5rem)",fontWeight:900,color:"#fff",marginBottom:"32px",lineHeight:1.2}}>
              Our{" "}
              <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Features</span>
            </h2>
            <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
              {features.map((f,i) => (
                <div key={i} style={{display:"flex",gap:"16px",padding:"18px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"14px"}}>
                  <div style={{width:"34px",height:"34px",borderRadius:"10px",background:"linear-gradient(135deg,#FFD700,#FFA500)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:900,color:"#000",flexShrink:0}}>
                    {f.num}
                  </div>
                  <div>
                    <div style={{fontSize:"14px",fontWeight:800,color:"#fff",marginBottom:"4px"}}>{f.title}</div>
                    <div style={{fontSize:"13px",color:"#6b7280",lineHeight:1.6}}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extra section — image + text */}
      <AboutExtra />
      <ServicesBanner />
      <WhatIsIPTV />
      <ContactSection />
      <TestimonialsMap />
      <WhyChooseUs />
      <ComparisonSection />

      {/* Mission */}
      <section style={{background:"linear-gradient(135deg,#0f0f1a,#1a1a2e)",padding:"80px 24px",borderTop:"1px solid rgba(255,215,0,0.1)",borderBottom:"1px solid rgba(255,215,0,0.1)"}}>
        <div style={{maxWidth:"800px",margin:"0 auto",textAlign:"center"}}>
          <span style={{color:"#FFD700",fontSize:"12px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",display:"block",marginBottom:"16px"}}>✦ Our Mission</span>
          <h2 style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:900,color:"#fff",marginBottom:"20px",lineHeight:1.2}}>
            Bringing India's Best Entertainment<br/>
            <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              To Your Home in USA & Canada
            </span>
          </h2>
          <p style={{color:"#9ca3af",fontSize:"16px",lineHeight:1.8,marginBottom:"40px"}}>
            Our mission is simple — to keep Indians living in USA & Canada connected to their culture, language, and entertainment. We believe every Indian family deserves access to their favorite channels at an affordable price, without any compromise on quality.
          </p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="/plans" style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",color:"#000",fontWeight:800,fontSize:"15px",padding:"16px 36px",borderRadius:"50px",textDecoration:"none"}}>
              🎁 View Our Plans
            </a>
            <a href={`https://wa.me/13614940799`} target="_blank" style={{border:"1.5px solid rgba(255,215,0,0.35)",color:"#FFD700",fontWeight:700,fontSize:"15px",padding:"16px 36px",borderRadius:"50px",textDecoration:"none"}}>
              💬 Contact Us
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          div[style*="grid-template-columns: repeat(4,1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
