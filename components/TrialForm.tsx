"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";

export default function TrialForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Krishna IPTV!%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message || "I want a free trial"}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative w-full max-w-md glass rounded-2xl p-8 border border-yellow-500/30 glow-gold"
        onClick={e => e.stopPropagation()}>
        
        <button onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-xl font-light">✕</button>

        {!sent ? (
          <>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-black text-lg mx-auto mb-3">K</div>
              <h3 className="text-xl font-bold text-white">Get Free Trial</h3>
              <p className="text-gray-400 text-sm mt-1">Fill in your details — we'll activate in minutes!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name", label: "Your Name", type: "text", placeholder: "John Smith" },
                { key: "phone", label: "Phone Number", type: "tel", placeholder: "+1 234 567 8900" },
                { key: "email", label: "Email Address", type: "email", placeholder: "john@email.com" },
              ].map(field => (
                <div key={field.key}>
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} required
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors" />
                </div>
              ))}
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">Message (Optional)</label>
                <textarea placeholder="Any specific channel or device?" rows={2}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors resize-none" />
              </div>
              <button type="submit" className="btn-gold w-full py-3.5 text-sm font-bold tracking-wide">
                Send via WhatsApp →
              </button>
              <p className="text-center text-xs text-gray-600">We respond within 5 minutes · 24/7 support</p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-white mb-2">Request Sent!</h3>
            <p className="text-gray-400 text-sm">We'll activate your free trial within minutes.</p>
            <button onClick={onClose} className="btn-gold mt-6 px-8 py-3 text-sm">Done</button>
          </div>
        )}
      </div>
    </div>
  );
}
