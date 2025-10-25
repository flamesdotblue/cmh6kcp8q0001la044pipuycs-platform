import React from "react";

const getColor = (score) => {
  if (score >= 80) return { bar: "bg-emerald-400", glow: "from-emerald-400/40" };
  if (score >= 50) return { bar: "bg-amber-400", glow: "from-amber-400/40" };
  return { bar: "bg-rose-400", glow: "from-rose-400/40" };
};

const TrustMeter = ({ score = 72, label = "Trust Score" }) => {
  const color = getColor(score);
  return (
    <div className="relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="relative flex items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
          <div className="mt-1 text-3xl font-bold">{score}/100</div>
        </div>
        <div className="relative w-48 h-3 rounded-full bg-white/10 overflow-hidden">
          <div className={`absolute inset-y-0 left-0 ${color.bar}`} style={{ width: `${score}%` }} />
          <div className={`absolute -inset-3 bg-gradient-to-r ${color.glow} to-transparent blur-xl`} style={{ width: `${score}%` }} />
        </div>
      </div>
      <div className="mt-3 text-sm text-white/70">
        {score >= 80 && "✅ Safe: Strong transparency and compliant permissions."}
        {score >= 50 && score < 80 && "⚠ Moderate Risk: Review permissions and claims before use."}
        {score < 50 && "❌ High Risk: Predatory patterns detected. Avoid this app."}
      </div>
    </div>
  );
};

export default TrustMeter;
