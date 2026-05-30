import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import CtaBanner from "@/components/CtaBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ReferralBanner from "@/components/ReferralBanner";
import PricingSection from "@/components/PricingSection";
import TestimonialsContact from "@/components/TestimonialsContact";
import DevicesSection from "@/components/DevicesSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Krishna IPTV – #1 Indian IPTV Service USA & Canada | 10,000+ Channels",
  description: "Best Indian IPTV provider in USA & Canada. Watch 10,000+ live channels in 4K.",
};

export default function Home() {
  return (
    <main style={{background:"#08080f",minHeight:"100vh",color:"#fff",overflowX:"hidden"}}>
      <Navbar />
      <Hero />
      <WhyUs />
      <CtaBanner />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ReferralBanner />
      <PricingSection />
      <TestimonialsContact />
      <DevicesSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
