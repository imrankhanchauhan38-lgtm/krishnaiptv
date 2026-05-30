"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";
import TrialForm from "./TrialForm";

export default function Plans() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section id="plans" style={{padding:"80px 0",position:"relative",overflow:"hidden"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          
          {/* Header */}
          <div style={{textAlign:"center",marginBottom:"56px"}}>
            <span style={{color:"#FFD700",fontSize:"11px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase"}}>Pricing Plans</span>
            <h2 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:900,color:"#fff",margin:"12px 0 16px"}}>Choose Your Plan</h2>
            <p style={{color:"#6b7280",maxWidth:"500px",margin:"0 auto"}}>All plans include full channel access. No hidden fees. Cancel anytime.</p>
          </div>

          {/* Plans Grid */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"16px"}}>
            {brand.plans.map((plan) => (
              <div key={plan.name}
                style={{
                  position:"relative",
                  borderRadius:"20px",
                  padding:"24px",
                  border: plan.popular ? "1px solid #FFD700" : "1px solid rgba(255,255,255,0.08)",
                  background: plan.popular ? "linear-gradient(160deg,rgba(255,215,0,0.08),#0f0f1a)" : "#0f0f1a",
                  transition:"transform 0.3s",
                  transform: plan.popular ? "scale(1.03)" : "scale(1)",
                }}>
                
                {plan.popular && (
                  <div style={{position:"absolute",top:"-14px",left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#FFD700,#FFA500)",color:"#000",fontSize:"10px",fontWeight:900,padding:"4px 16px",borderRadius:"50px",textTransform:"uppercase",letterSpacing:"2px",whiteSpace:"nowrap"}}>
                    ⭐ Most Popular
                  </div>
                )}

                <div style={{fontSize:"11px",fontWeight:700,color:"#6b7280",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"4px"}}>{plan.name}</div>
                <div style={{fontSize:"2.5rem",fontWeight:900,color:"#fff",marginBottom:"2px"}}>{plan.price}</div>
                <div style={{fontSize:"12px",color:"#6b7280",marginBottom:"20px"}}>{plan.duration}</div>

                <div style={{marginBottom:"24px"}}>
                  {[
                    `${brand.channels.total} Channels`,
                    `${plan.quality} Quality`,
                    `${plan.devices} Device${plan.devices > 1 ? "s" : ""}`,
                    "All Languages",
                    "24/7 Support",
                    ...(plan.popular ? ["100K+ VOD"] : []),
                  ].map(f => (
                    <div key={f} style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",color:"#d1d5db",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                      <span style={{color:"#FFD700",fontSize:"10px",flexShrink:0}}>✦</span> {f}
                    </div>
                  ))}
                </div>

                <button onClick={() => setShowForm(true)}
                  style={{
                    width:"100%",padding:"12px",borderRadius:"12px",fontSize:"14px",fontWeight:700,cursor:"pointer",border:"none",
                    background: plan.popular ? "linear-gradient(135deg,#FFD700,#FFA500)" : "transparent",
                    color: plan.popular ? "#000" : "#FFD700",
                    border: plan.popular ? "none" : "1px solid rgba(255,215,0,0.4)",
                    transition:"all 0.2s",
                  }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{textAlign:"center",marginTop:"48px"}}>
            <p style={{color:"#6b7280",fontSize:"14px",marginBottom:"16px"}}>Not sure? Try free first — no credit card needed!</p>
            <button onClick={() => setShowForm(true)} className="btn-gold" style={{padding:"16px 40px",fontSize:"1rem",border:"none",cursor:"pointer"}}>
              🎁 Start Free Trial
            </button>
          </div>
        </div>
      </section>
      {showForm && <TrialForm onClose={() => setShowForm(false)} />}
    </>
  );
}
