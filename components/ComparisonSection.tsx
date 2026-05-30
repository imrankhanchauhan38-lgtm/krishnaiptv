"use client";
import { useState } from "react";
import { brand } from "@/styles/brand";

const rows = [
  { feature: "Monthly Fees", krishna: true, yupp: false, shava: false, jadoo: true, other: false },
  { feature: "Free Trial Available", krishna: true, yupp: false, shava: false, jadoo: false, other: false },
  { feature: "HD Live Channels", krishna: true, yupp: true, shava: true, jadoo: true, other: true },
  { feature: "4K Live Channels", krishna: true, yupp: false, shava: false, jadoo: false, other: false },
  { feature: "24/7 Customer Support", krishna: true, yupp: false, shava: false, jadoo: false, other: false },
  { feature: "24/7 Technical Support", krishna: true, yupp: false, shava: true, jadoo: false, other: false },
  { feature: "#1 IPTV in USA/Canada", krishna: true, yupp: false, shava: false, jadoo: false, other: false },
  { feature: "Instant Activation", krishna: true, yupp: false, shava: false, jadoo: false, other: false },
];

const savings = [
  { label: "Monthly Cable/Satellite Bill", value: 120 },
  { label: "Monthly Streaming Services", value: 60 },
  { label: "Monthly Dish TV Bill", value: 80 },
  { label: "Monthly Sports Package", value: 40 },
];

export default function ComparisonSection() {
  const [selected, setSelected] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const saving = savings[selected].value - 15;
    setResult(saving);
  };

  return (
    <>
      <style>{`
        .cs-section {
          padding: 80px 24px;
          background: #0a0a12;
          position: relative;
          overflow: hidden;
        }
        .cs-section::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
        }
        .cs-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .cs-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .cs-tag {
          color: #FFD700; font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          margin-bottom: 14px; display: block;
        }
        .cs-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900; color: #fff; margin-bottom: 12px;
        }
        .cs-title span {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cs-sub { color: #6b7280; font-size: 15px; max-width: 500px; margin: 0 auto; }

        .cs-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 32px;
          align-items: start;
        }

        /* TABLE */
        .cs-table-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,215,0,0.15);
        }
        .cs-table {
          width: 100%;
          border-collapse: collapse;
        }
        .cs-th {
          padding: 16px 12px;
          font-size: 12px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 1px;
          text-align: center;
          background: #0f0f1a;
          color: #6b7280;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .cs-th.krishna {
          background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.08));
          color: #FFD700;
          font-size: 13px;
        }
        .cs-th-feature {
          text-align: left;
          padding-left: 20px;
          width: 40%;
        }
        .cs-tr:nth-child(even) td { background: rgba(255,255,255,0.015); }
        .cs-tr:hover td { background: rgba(255,215,0,0.03); }
        .cs-td {
          padding: 14px 12px;
          text-align: center;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          color: #9ca3af; font-size: 14px;
        }
        .cs-td-feature {
          text-align: left;
          padding-left: 20px;
          color: #d1d5db;
          font-weight: 500;
        }
        .cs-td.krishna-col {
          background: rgba(255,215,0,0.04);
        }
        .cs-yes { color: #4ade80; font-size: 18px; font-weight: 700; }
        .cs-no { color: #ef4444; font-size: 18px; font-weight: 700; }

        /* CALCULATOR */
        .cs-calc {
          background: #0f0f1a;
          border: 1px solid rgba(255,215,0,0.2);
          border-radius: 20px;
          padding: 32px 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          position: sticky;
          top: 200px;
        }
        .cs-calc-logo {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .cs-calc-logo-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; font-weight: 900; color: #000;
        }
        .cs-calc-title {
          font-size: 20px; font-weight: 900; color: #fff;
          margin-bottom: 4px;
        }
        .cs-calc-sub { font-size: 13px; color: #6b7280; }
        .cs-calc-label {
          font-size: 13px; font-weight: 700; color: #9ca3af;
          text-transform: uppercase; letter-spacing: 1px;
          margin-bottom: 10px; display: block;
        }
        .cs-calc-select {
          width: 100%; padding: 14px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; color: #fff;
          font-size: 14px; font-weight: 600;
          outline: none; cursor: pointer;
          margin-bottom: 16px;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23FFD700' stroke-width='2' fill='none'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
        }
        .cs-calc-select:focus { border-color: rgba(255,215,0,0.4); }
        .cs-calc-btn {
          width: 100%; padding: 15px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #000; font-weight: 800; font-size: 14px;
          border: none; border-radius: 12px; cursor: pointer;
          letter-spacing: 0.5px; transition: all 0.2s;
          margin-bottom: 16px;
        }
        .cs-calc-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(255,215,0,0.3);
        }
        .cs-calc-result {
          text-align: center; padding: 20px;
          background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.2);
          border-radius: 12px; margin-bottom: 16px;
        }
        .cs-calc-result-num {
          font-size: 2.2rem; font-weight: 900; color: #4ade80;
          display: block; margin-bottom: 4px;
        }
        .cs-calc-result-label {
          font-size: 13px; color: #6b7280; font-weight: 600;
        }
        .cs-no-bill {
          text-align: center; padding: 14px;
          font-size: 18px; font-weight: 900;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; margin-bottom: 20px;
        }
        .cs-calc-contact {
          width: 100%; padding: 13px;
          background: transparent;
          border: 1.5px solid rgba(255,215,0,0.3);
          border-radius: 12px; color: #FFD700;
          font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.2s;
          text-decoration: none; display: block;
          text-align: center;
        }
        .cs-calc-contact:hover { background: rgba(255,215,0,0.08); }

        @media (max-width: 1000px) {
          .cs-grid { grid-template-columns: 1fr; }
          .cs-calc { position: static; }
        }
        @media (max-width: 600px) {
          .cs-section { padding: 60px 20px; }
          .cs-th, .cs-td { padding: 10px 8px; font-size: 12px; }
          .cs-td-feature { padding-left: 12px; font-size: 12px; }
        }
      `}</style>

      <section className="cs-section">
        <div className="cs-inner">
          <div className="cs-header">
            <span className="cs-tag">✦ Compare Us</span>
            <h2 className="cs-title">
              Why <span>Krishna IPTV</span> is the Best Choice
            </h2>
            <p className="cs-sub">See how we compare to other IPTV providers. The choice is clear!</p>
          </div>

          <div className="cs-grid">
            {/* TABLE */}
            <div className="cs-table-wrap">
              <table className="cs-table">
                <thead>
                  <tr>
                    <th className="cs-th cs-th-feature">Features</th>
                    <th className="cs-th krishna">Krishna IPTV</th>
                    <th className="cs-th">Yupp TV</th>
                    <th className="cs-th">Shava TV</th>
                    <th className="cs-th">Jadoo</th>
                    <th className="cs-th">Other IPTV</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className="cs-tr">
                      <td className="cs-td cs-td-feature">{row.feature}</td>
                      <td className="cs-td krishna-col">
                        <span className={row.krishna ? "cs-yes" : "cs-no"}>
                          {row.krishna ? "✓" : "✗"}
                        </span>
                      </td>
                      <td className="cs-td">
                        <span className={row.yupp ? "cs-yes" : "cs-no"}>
                          {row.yupp ? "✓" : "✗"}
                        </span>
                      </td>
                      <td className="cs-td">
                        <span className={row.shava ? "cs-yes" : "cs-no"}>
                          {row.shava ? "✓" : "✗"}
                        </span>
                      </td>
                      <td className="cs-td">
                        <span className={row.jadoo ? "cs-yes" : "cs-no"}>
                          {row.jadoo ? "✓" : "✗"}
                        </span>
                      </td>
                      <td className="cs-td">
                        <span className={row.other ? "cs-yes" : "cs-no"}>
                          {row.other ? "✓" : "✗"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CALCULATOR */}
            <div className="cs-calc">
              <div className="cs-calc-logo">
                <div className="cs-calc-logo-icon">K</div>
                <div>
                  <div className="cs-calc-title">Savings Calculator</div>
                  <div className="cs-calc-sub">See how much you save with Krishna IPTV</div>
                </div>
              </div>

              <span className="cs-calc-label">Your Current Bill Type</span>
              <select className="cs-calc-select" value={selected}
                onChange={e => { setSelected(Number(e.target.value)); setResult(null); }}>
                {savings.map((s, i) => (
                  <option key={i} value={i} style={{background:"#0f0f1a"}}>{s.label}</option>
                ))}
              </select>

              <button className="cs-calc-btn" onClick={calculate}>
                📊 Calculate Yearly Saving
              </button>

              {result !== null ? (
                <div className="cs-calc-result">
                  <span className="cs-calc-result-num">${result}/mo</span>
                  <span className="cs-calc-result-label">
                    You save ${result * 12}/year with Krishna IPTV!
                  </span>
                </div>
              ) : (
                <div className="cs-no-bill">No Monthly Bill Shock! 🎉</div>
              )}

              <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="cs-calc-contact">
                💬 Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
