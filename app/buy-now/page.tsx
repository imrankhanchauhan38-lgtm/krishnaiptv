"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/styles/brand";
import TrialForm from "@/components/TrialForm";

const planOptions = [
  { label: "Select Your Plan", value: "" },
  { label: "3-Month Plan — $33 (Just $11/mo)", value: "3month-33" },
  { label: "6-Month Plan — $60 (Just $10/mo)", value: "6month-60" },
  { label: "1-Year Plan — $115 (Just $10/mo) ⭐ Most Popular", value: "1year-115" },
  { label: "2-Year Plan — $210 (Just $9/mo) 💎 Best Value", value: "2year-210" },
  { label: "3-Year Plan — $270 (Just $7.5/mo) 🏆 Super Saver", value: "3year-270" },
  { label: "5-Year Plan — $340 (Just $5.7/mo) 👑 Best Deal Ever", value: "5year-340" },
  { label: "Free Trial — $0 🎁 Try Before You Buy", value: "trial-0" },
];

const savingOptions = [
  { label: "Monthly Saving in Cable/Satellite Bill", monthly: 120 },
  { label: "Monthly Saving in Dish TV Bill", monthly: 80 },
  { label: "Monthly Saving in Streaming Services", monthly: 60 },
  { label: "Monthly Saving in Sports Package", monthly: 40 },
];

export default function BuyNowPage() {
  const [form, setForm] = useState({
    plan: "",
    quantity: "1",
    name: "",
    email: "",
    phone: "",
    device: "",
    terms: false,
  });
  const [sent, setSent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [savingIdx, setSavingIdx] = useState(0);
  const [yearlySaving, setYearlySaving] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.terms) { alert("Please accept Terms & Conditions"); return; }
    const planLabel = planOptions.find(p => p.value === form.plan)?.label || form.plan;
    const msg = `🛒 New Order!%0APlan: ${planLabel}%0AQuantity: ${form.quantity}%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ADevice: ${form.device}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  const calcSaving = () => {
    const opt = savingOptions[savingIdx];
    setYearlySaving(opt.monthly * 12 - 115);
  };

  return (
    <main style={{background:"#08080f",minHeight:"100vh",color:"#fff",overflowX:"hidden"}}>
      <Navbar />

      {/* Hero */}
      <div style={{
        position:"relative", paddingTop:"220px", paddingBottom:"80px",
        textAlign:"center", overflow:"hidden",
        background:"linear-gradient(135deg,#0f0f1a,#08080f)",
        borderBottom:"1px solid rgba(255,215,0,0.1)",
      }}>
        <div style={{position:"absolute",inset:0,backgroundImage:"url('/images/buy-hero.jpg')",backgroundSize:"cover",backgroundPosition:"center",opacity:0.12}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(8,8,15,0.8),rgba(8,8,15,0.95))"}} />
        <div style={{position:"absolute",inset:0,opacity:0.03,backgroundImage:"linear-gradient(#FFD700 1px,transparent 1px),linear-gradient(90deg,#FFD700 1px,transparent 1px)",backgroundSize:"50px 50px"}} />
        <div style={{position:"relative",zIndex:10}}>
          <span style={{color:"#FFD700",fontSize:"12px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",display:"block",marginBottom:"16px"}}>✦ Buy Now</span>
          <h1 style={{fontSize:"clamp(2.5rem,6vw,4rem)",fontWeight:900,color:"#fff",marginBottom:"16px",lineHeight:1.1}}>
            Our Plans &{" "}
            <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              Packages
            </span>
          </h1>
          <p style={{color:"#9ca3af",fontSize:"1.1rem",maxWidth:"500px",margin:"0 auto 20px",lineHeight:1.7}}>
            Krishna IPTV Best Plan & Packages for Indian Channels — Instant Activation
          </p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",color:"#6b7280",fontSize:"14px"}}>
            <a href="/" style={{color:"#6b7280",textDecoration:"none"}}>Home</a>
            <span>/</span>
            <span style={{color:"#FFD700",fontWeight:600}}>Buy Now</span>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div style={{
        background:"linear-gradient(135deg,#1a1a00,#2a2000)",
        borderBottom:"1px solid rgba(255,215,0,0.1)",
        padding:"20px 24px",
      }}>
        <div style={{maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
          {[
            {icon:"🚀",title:"Instant Activation",sub:"Just pay and activate your subscription"},
            {icon:"🔒",title:"Safe Payment",sub:"Safest way to pay online"},
            {icon:"📦",title:"Free Delivery",sub:"Free express delivery in USA & Canada"},
          ].map((t,i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:"16px"}}>
              <div style={{
                width:"50px",height:"50px",borderRadius:"12px",
                background:"rgba(255,215,0,0.1)",border:"1px solid rgba(255,215,0,0.2)",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:"22px",flexShrink:0,
              }}>{t.icon}</div>
              <div>
                <div style={{fontSize:"14px",fontWeight:800,color:"#fff",marginBottom:"2px"}}>{t.title}</div>
                <div style={{fontSize:"12px",color:"#6b7280"}}>{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section style={{padding:"80px 24px",maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 420px",gap:"32px",alignItems:"start"}}>

          {/* LEFT — Buy Form */}
          <div style={{
            background:"#0f0f1a",
            border:"1px solid rgba(255,215,0,0.15)",
            borderRadius:"24px",
            padding:"40px",
          }}>
            {!sent ? (
              <>
                <div style={{marginBottom:"32px"}}>
                  <h2 style={{fontSize:"1.8rem",fontWeight:900,color:"#fff",marginBottom:"6px"}}>
                    <span style={{background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                      Buy Now
                    </span>{" "}Krishna IPTV
                  </h2>
                  <p style={{color:"#6b7280",fontSize:"14px"}}>Fill in your details — we'll activate within minutes!</p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Plan Select */}
                  <div style={{marginBottom:"20px"}}>
                    <label style={{fontSize:"12px",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"1px",display:"block",marginBottom:"8px"}}>
                      Select Plan *
                    </label>
                    <select required value={form.plan}
                      onChange={e => setForm({...form, plan: e.target.value})}
                      style={{
                        width:"100%",padding:"14px 16px",
                        background:"rgba(255,255,255,0.04)",
                        border:"1px solid rgba(255,255,255,0.1)",
                        borderRadius:"12px",color: form.plan ? "#fff" : "#4b5563",
                        fontSize:"14px",outline:"none",cursor:"pointer",
                        appearance:"none",
                        backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23FFD700' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"right 16px center",
                      }}>
                      {planOptions.map((p,i) => (
                        <option key={i} value={p.value} style={{background:"#0f0f1a",color:"#fff"}}>{p.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity */}
                  <div style={{marginBottom:"20px"}}>
                    <label style={{fontSize:"12px",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"1px",display:"block",marginBottom:"8px"}}>
                      Quantity
                    </label>
                    <select value={form.quantity}
                      onChange={e => setForm({...form, quantity: e.target.value})}
                      style={{
                        width:"100%",padding:"14px 16px",
                        background:"rgba(255,255,255,0.04)",
                        border:"1px solid rgba(255,255,255,0.1)",
                        borderRadius:"12px",color:"#fff",
                        fontSize:"14px",outline:"none",cursor:"pointer",
                        appearance:"none",
                        backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23FFD700' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"right 16px center",
                      }}>
                      {[1,2,3,4,5].map(n => (
                        <option key={n} value={n} style={{background:"#0f0f1a"}}>{n}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div style={{marginBottom:"20px"}}>
                    <label style={{fontSize:"12px",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"1px",display:"block",marginBottom:"8px"}}>
                      Your Name *
                    </label>
                    <input required placeholder="John Smith"
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      style={{width:"100%",padding:"14px 16px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",color:"#fff",fontSize:"14px",outline:"none",boxSizing:"border-box"}} />
                  </div>

                  {/* Email + Phone */}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"20px"}}>
                    <div>
                      <label style={{fontSize:"12px",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"1px",display:"block",marginBottom:"8px"}}>Email *</label>
                      <input required type="email" placeholder="john@email.com"
                        value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        style={{width:"100%",padding:"14px 16px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",color:"#fff",fontSize:"14px",outline:"none",boxSizing:"border-box"}} />
                    </div>
                    <div>
                      <label style={{fontSize:"12px",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"1px",display:"block",marginBottom:"8px"}}>Phone *</label>
                      <input required type="tel" placeholder="+1 234 567 8900"
                        value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        style={{width:"100%",padding:"14px 16px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",color:"#fff",fontSize:"14px",outline:"none",boxSizing:"border-box"}} />
                    </div>
                  </div>

                  {/* Device */}
                  <div style={{marginBottom:"24px"}}>
                    <label style={{fontSize:"12px",fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"1px",display:"block",marginBottom:"8px"}}>
                      Your Device
                    </label>
                    <select value={form.device}
                      onChange={e => setForm({...form, device: e.target.value})}
                      style={{
                        width:"100%",padding:"14px 16px",
                        background:"rgba(255,255,255,0.04)",
                        border:"1px solid rgba(255,255,255,0.1)",
                        borderRadius:"12px",color: form.device ? "#fff" : "#4b5563",
                        fontSize:"14px",outline:"none",cursor:"pointer",
                        appearance:"none",
                        backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23FFD700' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"right 16px center",
                      }}>
                      <option value="" style={{background:"#0f0f1a",color:"#666"}}>Select Your Device</option>
                      {["Smart TV","Amazon Fire Stick","Android TV Box","MAG Box","iPhone / iPad","Android Phone","Windows PC / Mac","Apple TV"].map(d => (
                        <option key={d} value={d} style={{background:"#0f0f1a",color:"#fff"}}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* Terms */}
                  <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"24px"}}>
                    <input type="checkbox" id="terms" checked={form.terms}
                      onChange={e => setForm({...form, terms: e.target.checked})}
                      style={{width:"18px",height:"18px",accentColor:"#FFD700",cursor:"pointer"}} />
                    <label htmlFor="terms" style={{fontSize:"13px",color:"#9ca3af",cursor:"pointer"}}>
                      I agree to the{" "}
                      <a href="/terms" style={{color:"#FFD700",textDecoration:"none"}}>Terms & Conditions</a>
                      {" "}and{" "}
                      <a href="/privacy" style={{color:"#FFD700",textDecoration:"none"}}>Privacy Policy</a>
                    </label>
                  </div>

                  <button type="submit" style={{
                    width:"100%",padding:"16px",
                    background:"linear-gradient(135deg,#FFD700,#FFA500)",
                    color:"#000",fontWeight:900,fontSize:"16px",
                    borderRadius:"12px",border:"none",cursor:"pointer",
                    letterSpacing:"0.5px",transition:"all 0.2s",
                    marginBottom:"12px",
                  }}>
                    🛒 BUY NOW via WhatsApp
                  </button>

                  <div style={{
                    display:"flex",alignItems:"center",justifyContent:"center",
                    gap:"8px",color:"#4b5563",fontSize:"12px",
                  }}>
                    <span>🔒</span> Secure Order · Free Delivery · Instant Activation
                  </div>
                </form>
              </>
            ) : (
              <div style={{textAlign:"center",padding:"60px 0"}}>
                <div style={{fontSize:"64px",marginBottom:"16px"}}>✅</div>
                <h3 style={{color:"#fff",fontWeight:900,fontSize:"1.8rem",marginBottom:"8px"}}>Order Sent!</h3>
                <p style={{color:"#6b7280",marginBottom:"8px",fontSize:"15px"}}>We'll activate your subscription within minutes!</p>
                <p style={{color:"#FFD700",fontSize:"14px",fontWeight:600,marginBottom:"32px"}}>Check WhatsApp for confirmation 💬</p>
                <button onClick={() => setSent(false)}
                  style={{padding:"14px 36px",borderRadius:"50px",background:"linear-gradient(135deg,#FFD700,#FFA500)",border:"none",color:"#000",fontWeight:800,cursor:"pointer",fontSize:"14px"}}>
                  Place Another Order
                </button>
              </div>
            )}
          </div>

          {/* RIGHT — Savings Calculator */}
          <div style={{display:"flex",flexDirection:"column",gap:"20px",position:"sticky",top:"220px"}}>

            {/* Calculator card */}
            <div style={{
              background:"#0f0f1a",
              border:"1px solid rgba(255,215,0,0.15)",
              borderRadius:"24px",
              overflow:"hidden",
            }}>
              {/* Header */}
              <div style={{
                background:"linear-gradient(135deg,#1a1a00,#2a2000)",
                padding:"24px",
                borderBottom:"1px solid rgba(255,215,0,0.1)",
                textAlign:"center",
              }}>
                <div style={{
                  width:"56px",height:"56px",borderRadius:"14px",
                  background:"linear-gradient(135deg,#FFD700,#FFA500)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:"24px",fontWeight:900,color:"#000",
                  margin:"0 auto 12px",
                }}>K</div>
                <div style={{fontSize:"16px",fontWeight:900,color:"#fff",marginBottom:"4px"}}>KRISHNA IPTV</div>
                <div style={{fontSize:"12px",color:"#6b7280"}}>#1 Indian IPTV in USA</div>
              </div>

              <div style={{padding:"24px"}}>
                <h3 style={{fontSize:"16px",fontWeight:900,color:"#fff",textAlign:"center",marginBottom:"6px"}}>
                  Total Yearly Saving with Us
                </h3>
                <p style={{fontSize:"12px",color:"#6b7280",textAlign:"center",marginBottom:"20px"}}>
                  Please Select Your Current Bill Amount
                </p>

                <select value={savingIdx}
                  onChange={e => {setSavingIdx(Number(e.target.value));setYearlySaving(null);}}
                  style={{
                    width:"100%",padding:"13px 16px",marginBottom:"14px",
                    background:"rgba(255,255,255,0.04)",
                    border:"1px solid rgba(255,255,255,0.1)",
                    borderRadius:"12px",color:"#fff",
                    fontSize:"13px",outline:"none",cursor:"pointer",
                    appearance:"none",
                    backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23FFD700' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"right 14px center",
                  }}>
                  {savingOptions.map((s,i) => (
                    <option key={i} value={i} style={{background:"#0f0f1a"}}>{s.label}</option>
                  ))}
                </select>

                <button onClick={calcSaving} style={{
                  width:"100%",padding:"13px",
                  background:"linear-gradient(135deg,#FFD700,#FFA500)",
                  color:"#000",fontWeight:800,fontSize:"13px",
                  borderRadius:"12px",border:"none",cursor:"pointer",
                  marginBottom:"12px",textTransform:"uppercase",letterSpacing:"0.5px",
                  transition:"all 0.2s",
                }}>
                  📊 Calculate Yearly Saving
                </button>

                {yearlySaving !== null ? (
                  <div style={{
                    background:"rgba(74,222,128,0.08)",
                    border:"1px solid rgba(74,222,128,0.2)",
                    borderRadius:"12px",padding:"16px",
                    textAlign:"center",marginBottom:"12px",
                  }}>
                    <div style={{fontSize:"2rem",fontWeight:900,color:"#4ade80",lineHeight:1}}>
                      ${yearlySaving.toLocaleString()}
                    </div>
                    <div style={{fontSize:"12px",color:"#6b7280",marginTop:"4px"}}>
                      Saved per year with Krishna IPTV!
                    </div>
                  </div>
                ) : (
                  <div style={{
                    background:"linear-gradient(135deg,rgba(255,215,0,0.08),rgba(255,165,0,0.04))",
                    border:"1px solid rgba(255,215,0,0.15)",
                    borderRadius:"12px",padding:"14px",
                    textAlign:"center",marginBottom:"12px",
                  }}>
                    <div style={{
                      fontSize:"18px",fontWeight:900,
                      background:"linear-gradient(135deg,#FFD700,#FFA500)",
                      WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
                    }}>No Monthly Bill Shock! 🎉</div>
                  </div>
                )}

                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" style={{
                  display:"block",width:"100%",padding:"13px",
                  background:"#25D366",color:"#fff",
                  fontWeight:800,fontSize:"13px",textAlign:"center",
                  borderRadius:"12px",textDecoration:"none",
                  textTransform:"uppercase",letterSpacing:"0.5px",
                  transition:"all 0.2s",
                }}>
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Quick info */}
            <div style={{
              background:"#0f0f1a",
              border:"1px solid rgba(255,255,255,0.06)",
              borderRadius:"20px",padding:"20px",
            }}>
              <h4 style={{fontSize:"14px",fontWeight:800,color:"#fff",marginBottom:"14px"}}>✦ Why Krishna IPTV?</h4>
              {[
                "⚡ Instant activation after payment",
                "📺 8,000+ live Indian channels",
                "🎬 100,000+ movies & VOD",
                "📱 Works on all devices",
                "🔒 No hidden fees ever",
                "🛟 24/7 WhatsApp support",
              ].map((f,i) => (
                <div key={i} style={{
                  fontSize:"13px",color:"#9ca3af",
                  padding:"7px 0",
                  borderBottom:"1px solid rgba(255,255,255,0.04)",
                  display:"flex",alignItems:"center",gap:"8px",
                }}>
                  {f}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />

      {showForm && <TrialForm onClose={() => setShowForm(false)} />}

      <style>{`
        input::placeholder { color: #4b5563; }
        input:focus, select:focus {
          border-color: rgba(255,215,0,0.4) !important;
          background: rgba(255,215,0,0.03) !important;
        }
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 420px"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="position: sticky"] { position: static !important; }
          div[style*="grid-template-columns: repeat(3,1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
