"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChannelsSavings from "@/components/ChannelsSavings";
import FinalCTA from "@/components/FinalCTA";

const channelCategories = [
  { name: "Hindi Channels", emoji: "🇮🇳", color: "#FF6B35", count: "230+", href: "/channels/hindi", channels: ["Star Plus","Zee TV","Colors TV","Sony TV","Star Bharat","&TV","SAB TV","DD National"] },
  { name: "Punjabi Channels", emoji: "🌾", color: "#FFD700", count: "45+", href: "/channels/punjabi", channels: ["PTC Punjabi","Zee Punjabi","MH1","PTC News","Pitaara TV","9X Tashan","MTV Beats","B4U Music"] },
  { name: "Tamil Channels", emoji: "🎭", color: "#4f8ef7", count: "60+", href: "/channels/tamil", channels: ["Sun TV","Vijay TV","Zee Tamil","Kalaignar TV","Polimer TV","Jaya TV","Sun News","Puthiya Thalaimurai"] },
  { name: "Telugu Channels", emoji: "🏺", color: "#6c63ff", count: "55+", href: "/channels/telugu", channels: ["Star Maa","Zee Telugu","Gemini TV","ETV Telugu","TV9 Telugu","NTV Telugu","Sakshi TV","T News"] },
  { name: "Malayalam Channels", emoji: "🌴", color: "#4ade80", count: "40+", href: "/channels/malayalam", channels: ["Asianet","Mazhavil","Surya TV","Flowers TV","Zee Keralam","Kairali TV","Reporter TV","Media One"] },
  { name: "Gujarati Channels", emoji: "🪔", color: "#fb923c", count: "25+", href: "/channels/gujarati", channels: ["DD Girnar","Zee 24 Kalak","VTV Gujarati","Sandesh News","TV9 Gujarati","Mantavya News","Aastha Gujarati","Colors Gujarati"] },
  { name: "Bengali Channels", emoji: "🐯", color: "#e879f9", count: "35+", href: "/channels/bengali", channels: ["Star Jalsha","Zee Bangla","Colors Bangla","Aakash Aath","Sony Aath","Sangeet Bangla","News18 Bangla","R Plus"] },
  { name: "Sports Channels", emoji: "⚽", color: "#f43f5e", count: "80+", href: "/channels/sports", channels: ["Star Sports 1","Star Sports 2","Sony Sports","ESPN","DD Sports","Ten Sports","Willow Cricket","Star Cricket"] },
  { name: "English Channels", emoji: "🌍", color: "#38bdf8", count: "120+", href: "/channels/english", channels: ["CNN","BBC World","HBO","Discovery","National Geographic","Fox News","Bloomberg","CNBC"] },
  { name: "Kids Channels", emoji: "🎠", color: "#a78bfa", count: "30+", href: "/channels/kids", channels: ["Cartoon Network","Disney Channel","Nick Jr","Pogo","Discovery Kids","Hungama","Disney Junior","Sonic"] },
  { name: "News Channels", emoji: "📰", color: "#34d399", count: "50+", href: "/channels/news", channels: ["Aaj Tak","NDTV India","India TV","News18 India","Republic TV","Times Now","ABP News","Zee News"] },
  { name: "Movies Channels", emoji: "🎬", color: "#fbbf24", count: "60+", href: "/channels/movies", channels: ["Star Gold","Zee Cinema","Sony Max","&Pictures","Star Movies","HBO","B4U Movies","Zee Bollywood"] },
];

const trustPoints = [
  { icon: "📺", title: "8,000+ Live Channels", desc: "Access over 8,000 live Indian and international channels in HD & 4K quality — all in one subscription." },
  { icon: "🌐", title: "All Indian Languages", desc: "Hindi, Punjabi, Tamil, Telugu, Malayalam, Kannada, Bengali, Gujarati, Marathi, Odia, Urdu, Nepali & more." },
  { icon: "⚡", title: "Zero Buffering", desc: "Our premium USA & Canada servers guarantee 99.9% uptime with crystal clear HD & 4K streaming." },
  { icon: "📱", title: "All Devices Supported", desc: "Watch on Smart TV, Fire Stick, Android Box, iPhone, Android, PC, Mac — any device, anywhere." },
];

function ChannelCard({ cat }: { cat: typeof channelCategories[0] }) {
  return (
    <a href={cat.href} style={{
      background:"#0f0f1a",
      border:"1px solid rgba(255,255,255,0.07)",
      borderRadius:"16px", padding:"24px 20px",
      textDecoration:"none", display:"block",
      transition:"all 0.3s",
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.borderColor = `${cat.color}50`;
      el.style.transform = "translateY(-4px)";
      el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)";
      el.style.background = `linear-gradient(160deg,${cat.color}08,#0f0f1a)`;
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.borderColor = "rgba(255,255,255,0.07)";
      el.style.transform = "none";
      el.style.boxShadow = "none";
      el.style.background = "#0f0f1a";
    }}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"}}>
        <div style={{
          width:"44px",height:"44px",borderRadius:"12px",
          background:`${cat.color}18`,border:`1.5px solid ${cat.color}30`,
          display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",
        }}>{cat.emoji}</div>
        <span style={{
          fontSize:"11px",fontWeight:800,color:cat.color,
          background:`${cat.color}15`,padding:"3px 10px",
          borderRadius:"50px",border:`1px solid ${cat.color}30`,
        }}>{cat.count}</span>
      </div>
      <div style={{fontSize:"15px",fontWeight:800,color:"#fff",marginBottom:"10px"}}>{cat.name}</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"4px"}}>
        {cat.channels.slice(0,4).map((ch,j) => (
          <span key={j} style={{fontSize:"10px",color:"#6b7280",background:"rgba(255,255,255,0.04)",padding:"2px 8px",borderRadius:"4px"}}>{ch}</span>
        ))}
        <span style={{fontSize:"10px",color:cat.color,padding:"2px 8px"}}>+more</span>
      </div>
    </a>
  );
}

export default function ChannelsPage() {
  return (
    <main style={{background:"#08080f",minHeight:"100vh",color:"#fff",overflowX:"hidden"}}>
      <Navbar />

      {/* Hero */}
      <div style={{
        position:"relative",paddingTop:"220px",paddingBottom:"80px",
        textAlign:"center",overflow:"hidden",
        background:"linear-gradient(135deg,#0f0f1a,#08080f)",
        borderBottom:"1px solid rgba(255,215,0,0.1)",
      }}>
        <div style={{position:"absolute",inset:0,backgroundImage:"url('/images/channels-hero.jpg')",backgroundSize:"cover",backgroundPosition:"center",opacity:0.15}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(8,8,15,0.7),rgba(8,8,15,0.95))"}} />
        <div style={{position:"absolute",inset:0,opacity:0.03,backgroundImage:"linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)",backgroundSize:"50px 50px"}} />
        <div style={{position:"relative",zIndex:10}}>
          <span style={{color:"#FFD700",fontSize:"12px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",display:"block",marginBottom:"16px"}}>✦ Our Channels</span>
          <h1 style={{fontSize:"clamp(2.5rem,6vw,4rem)",fontWeight:900,color:"#fff",marginBottom:"16px",lineHeight:1.1}}>
            Our Indian{" "}
            <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              Channels
            </span>
          </h1>
          <p style={{color:"#9ca3af",fontSize:"1.1rem",maxWidth:"500px",margin:"0 auto 32px",lineHeight:1.7}}>
            Krishna IPTV Service Provider for Indian IPTV Channels in USA & Canada
          </p>
          <a href="/buy-now" style={{
            display:"inline-block",
            background:"linear-gradient(135deg,#FFD700,#FFA500)",
            color:"#000",fontWeight:800,fontSize:"15px",
            padding:"16px 40px",borderRadius:"50px",textDecoration:"none",
          }}>🛒 BUY NOW</a>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",color:"#6b7280",fontSize:"14px",marginTop:"24px"}}>
            <a href="/" style={{color:"#6b7280",textDecoration:"none"}}>Home</a>
            <span>/</span>
            <span style={{color:"#FFD700",fontWeight:600}}>Channels</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section style={{padding:"80px 24px",maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"start"}} className="resp-2col">
          <div>
            <h2 style={{fontSize:"clamp(1.8rem,3vw,2.5rem)",fontWeight:900,color:"#fff",marginBottom:"20px",lineHeight:1.2}}>
              <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Krishna IPTV</span>
              {" "}— Over 8,000 Indian IPTV Channels
            </h2>
            <div style={{width:"60px",height:"3px",background:"linear-gradient(135deg,#FFD700,#FFA500)",borderRadius:"2px",marginBottom:"24px"}} />
            <p style={{color:"#9ca3af",fontSize:"15px",lineHeight:1.8,marginBottom:"16px"}}>
              Enjoy Live <strong style={{color:"#FFD700"}}>Indian IPTV channels</strong> with Krishna IPTV anywhere, any time. We provide 8,000+ FHD channels in multiple languages including <strong style={{color:"#fff"}}>Bengali</strong>, <strong style={{color:"#fff"}}>Tamil</strong>, <strong style={{color:"#fff"}}>Telugu</strong>, <strong style={{color:"#fff"}}>Malayalam</strong>, <strong style={{color:"#fff"}}>Hindi</strong>, <strong style={{color:"#fff"}}>Punjabi</strong>, <strong style={{color:"#fff"}}>English</strong>, <strong style={{color:"#fff"}}>Gujarati</strong>, <strong style={{color:"#fff"}}>Marathi</strong> IPTV Channels and lots of more.
            </p>
            <p style={{color:"#9ca3af",fontSize:"15px",lineHeight:1.8,marginBottom:"32px"}}>
              We specialize in our South Asian customer's way of watching live TV. We've customized our TV channels, movies and television shows — that's why Krishna IPTV is the one & only way of enjoying Indian IPTV Channels.
            </p>
            <div style={{display:"flex",gap:"32px",flexWrap:"wrap"}}>
              {[["8,000+","Live Channels"],["100K+","Movies & VOD"],["12+","Languages"],["24/7","Support"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{fontSize:"2rem",fontWeight:900,background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1}}>{n}</div>
                  <div style={{fontSize:"12px",color:"#6b7280",fontWeight:600,marginTop:"4px"}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{fontSize:"clamp(1.6rem,2.5vw,2.2rem)",fontWeight:900,color:"#fff",marginBottom:"28px",lineHeight:1.2}}>
              Why Thousands Trust Us as the{" "}
              <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                Top Indian IPTV in USA
              </span>
            </h2>
            <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              {trustPoints.map((t,i) => (
                <div key={i} style={{display:"flex",gap:"14px",padding:"16px 18px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"14px"}}>
                  <div style={{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(255,215,0,0.1)",border:"1px solid rgba(255,215,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",flexShrink:0}}>{t.icon}</div>
                  <div>
                    <div style={{fontSize:"14px",fontWeight:800,color:"#fff",marginBottom:"4px"}}>{t.title}</div>
                    <div style={{fontSize:"13px",color:"#6b7280",lineHeight:1.6}}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Channel Categories */}
      <section style={{padding:"80px 24px",background:"#0a0a12",borderTop:"1px solid rgba(255,255,255,0.05)"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:"56px"}}>
            <span style={{color:"#FFD700",fontSize:"12px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",display:"block",marginBottom:"14px"}}>✦ All Languages</span>
            <h2 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,color:"#fff",marginBottom:"14px"}}>
              Browse Channels by{" "}
              <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Language</span>
            </h2>
            <p style={{color:"#6b7280",fontSize:"15px",maxWidth:"500px",margin:"0 auto"}}>Click on any language to see the full channel list</p>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}} className="resp-4col">
            {channelCategories.map((cat,i) => (
              <ChannelCard key={i} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      <ChannelsSavings />
      <FinalCTA />
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .resp-2col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .resp-4col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .resp-4col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
