import Navbar from "@/components/Navbar";
import DetailedPlans from "@/components/DetailedPlans";
import CountdownBanner from "@/components/CountdownBanner";
import PlansBanner from "@/components/PlansBanner";
import ServicesGrid from "@/components/ServicesGrid";
import ReferralBanner from "@/components/ReferralBanner";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Plans & Pricing – Krishna IPTV | Best Indian IPTV USA",
  description: "Best Krishna IPTV plans starting $33 for 3 months. 8000+ channels, 4K quality.",
};

export default function PlansPage() {
  return (
    <main style={{background:"#08080f",minHeight:"100vh",color:"#fff",overflowX:"hidden"}}>
      <Navbar />
      <div style={{
        paddingTop:"220px", paddingBottom:"80px",
        background:"linear-gradient(135deg,#0f0f1a,#08080f)",
        borderBottom:"1px solid rgba(255,215,0,0.1)",
        textAlign:"center", position:"relative", overflow:"hidden",
      }}>
        <div style={{position:"absolute",inset:0,opacity:0.025,backgroundImage:"linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)",backgroundSize:"50px 50px"}} />
        <div style={{position:"relative",zIndex:1}}>
          <span style={{color:"#FFD700",fontSize:"12px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",display:"block",marginBottom:"14px"}}>✦ Pricing</span>
          <h1 style={{fontSize:"clamp(2.5rem,5vw,3.5rem)",fontWeight:900,color:"#fff",margin:"0 0 16px"}}>
            Plans & Packages
          </h1>
          <p style={{color:"#6b7280",fontSize:"15px",marginBottom:"20px"}}>
            All plans include 8,000+ channels · No hidden fees · One-time payment
          </p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"14px"}}>
            <a href="/" style={{color:"#6b7280",textDecoration:"none"}}>Home</a>
            <span style={{color:"#6b7280"}}>/</span>
            <span style={{color:"#FFD700",fontWeight:600}}>Plans</span>
          </div>
        </div>
      </div>
      <DetailedPlans />
      <CountdownBanner />
      <PlansBanner />
      <ServicesGrid />
      <ReferralBanner />
      <FinalCTA />
      <Footer />
    </main>
  );
}
