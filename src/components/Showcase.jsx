import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Bell, Search, Users, Cpu, ArrowRight, ShieldCheck, CheckCircle2, XCircle, Code } from "lucide-react";
import TrustMeter from "./TrustMeter";

const StatGlow = ({ glow }) => {
  if (glow === "rose") return <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-transparent via-rose-400/10 to-transparent blur-2xl" />;
  if (glow === "amber") return <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-transparent via-amber-400/10 to-transparent blur-2xl" />;
  if (glow === "emerald") return <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-transparent via-emerald-400/10 to-transparent blur-2xl" />;
  return <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent blur-2xl" />;
};

const StatCard = ({ title, value, subtitle, glow = "cyan" }) => (
  <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
    <StatGlow glow={glow} />
    <div className="relative">
      <div className="text-sm text-white/60">{title}</div>
      <div className="mt-1 text-3xl font-bold">{value}</div>
      <div className="text-xs text-white/60 mt-1">{subtitle}</div>
    </div>
  </div>
);

const RangePill = ({ label, color }) => (
  <div className={`px-3 py-1 rounded-full text-xs border ${color.border} ${color.bg} ${color.text}`}>{label}</div>
);

const Showcase = () => {
  const [input, setInput] = useState("FastCash Loan App");
  const score = useMemo(() => {
    const v = input.toLowerCase();
    if (v.includes("phonepe")) return 95;
    if (v.includes("paytm")) return 92;
    if (v.includes("fastcash") || v.includes("instant") || v.includes("quick")) return 25;
    return 72;
  }, [input]);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="vision" className="pt-6 md:pt-0 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Make financial safety as smart as financial growth.</h2>
            <p className="mt-4 text-white/80">TrustLens AI is your agentic financial guardian — proactive, explainable, and evolving. It scans apps, predicts risk, advises instantly, and learns continuously.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: <Search className="h-4 w-4" />, text: "Scans apps deeply" },
                { icon: <Cpu className="h-4 w-4" />, text: "Predicts risk" },
                { icon: <Bell className="h-4 w-4" />, text: "Real-time advice" },
                { icon: <Users className="h-4 w-4" />, text: "Learns from community" },
              ].map((b) => (
                <div key={b.text} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                  {b.icon} {b.text}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="grid grid-cols-2 gap-4">
            <StatCard title="Predatory loan app surge" value="300%" subtitle="Unregistered & harmful apps in the last 24 months" glow="rose" />
            <StatCard title="Common violations" value="Contacts • Photos • Camera" subtitle="Aggressive data grabs & harassment" glow="amber" />
            <StatCard title="Verified sources" value="RBI + Complaints" subtitle="Cross-checked, explainable results" glow="emerald" />
            <StatCard title="Agentic system" value="Autonomous alerts" subtitle="Notifies when risk changes" glow="cyan" />
          </motion.div>
        </div>

        <div id="score" className="mt-16">
          <h3 className="text-2xl font-semibold">Trust Score — holographic safety at a glance</h3>
          <p className="mt-2 text-white/80">Dynamic 0–100 meter. Hover the ranges and see how the AI explains its reasoning.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <div className="flex items-center gap-2 text-emerald-300"><CheckCircle2 className="h-5 w-5" /> 80–100 Safe</div>
              <p className="text-sm text-white/70 mt-2">Examples: Paytm, PhonePe</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <div className="flex items-center gap-2 text-amber-300"><ShieldCheck className="h-5 w-5" /> 50–79 Moderate Risk</div>
              <p className="text-sm text-white/70 mt-2">Review access and claims</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <div className="flex items-center gap-2 text-rose-300"><XCircle className="h-5 w-5" /> 0–49 High Risk</div>
              <p className="text-sm text-white/70 mt-2">Predatory or unregistered</p>
            </div>
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <TrustMeter score={95} label="PhonePe" />
            <TrustMeter score={25} label="FastCash Loan App" />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/70">AI Reasoning Highlight</div>
            <div className="mt-2 text-white/90">Low transparency + unrealistic claims + camera access → Risk 78%</div>
          </div>
        </div>

        <div id="architecture" className="mt-16">
          <h3 className="text-2xl font-semibold">Agentic AI Architecture</h3>
          <p className="mt-2 text-white/80">Layered pipeline with continuous learning and proactive alerts.</p>
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {[
              { t: "Data Collection", d: "Permissions, reviews, metadata, OS signals" },
              { t: "Analysis Engine", d: "NLP + rules + anomaly detection" },
              { t: "Output Layer", d: "Trust Score, verdict, evidence" },
              { t: "Agentic Behavior", d: "Auto-monitor & notify changes" },
            ].map((s, i) => (
              <motion.div key={s.t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="relative p-5 rounded-2xl border border-white/10 bg-white/5">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-emerald-400/10 to-transparent blur-xl" />
                <div className="relative font-semibold">{s.t}</div>
                <div className="relative text-sm text-white/70 mt-1">{s.d}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
            <RangePill label="Hugging Face" color={{ border: "border-white/10", bg: "bg-white/5", text: "" }} />
            <RangePill label="spaCy" color={{ border: "border-white/10", bg: "bg-white/5", text: "" }} />
            <RangePill label="GPT-4 / Gemini" color={{ border: "border-white/10", bg: "bg-white/5", text: "" }} />
            <RangePill label="Python logic" color={{ border: "border-white/10", bg: "bg-white/5", text: "" }} />
            <RangePill label="Agent notifications" color={{ border: "border-white/10", bg: "bg-white/5", text: "" }} />
          </div>
        </div>

        <div id="demo" className="mt-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-2xl font-semibold">Scan with AI — instant verdict</h3>
              <p className="mt-2 text-white/80">Enter an app name or link. The demo simulates a scan with animated scoring.</p>
            </div>
          </div>

          <div className="mt-6 grid lg:grid-cols-[1.2fr_1fr] gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <label className="text-sm text-white/70">App name or URL</label>
              <div className="mt-2 flex gap-2">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g., PhonePe or FastCash" className="flex-1 px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:ring-2 ring-cyan-400/40" />
                <button className="px-4 py-3 rounded-xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30">Scan</button>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  <div className="font-medium text-white/90">Permissions</div>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    {score < 50 ? (
                      <>
                        <li>Camera access</li>
                        <li>Contacts scrape</li>
                        <li>External storage</li>
                      </>
                    ) : (
                      <>
                        <li>Minimal permissions</li>
                        <li>Granular consent</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  <div className="font-medium text-white/90">Signals</div>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    {score < 50 ? (
                      <>
                        <li>Unrealistic loan claims</li>
                        <li>Unregistered developer</li>
                        <li>Harassment reports</li>
                      </>
                    ) : (
                      <>
                        <li>RBI references</li>
                        <li>Transparent fees</li>
                        <li>Positive reviews</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  <div className="font-medium text-white/90">Verdict</div>
                  <div className="mt-2 flex items-center gap-2">
                    {score >= 80 ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    ) : score >= 50 ? (
                      <ShieldCheck className="h-5 w-5 text-amber-300" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-rose-400" />
                    )}
                    <span className="text-white/90">
                      {score >= 80 ? "Safe" : score >= 50 ? "Moderate risk" : "Scam suspected"}
                    </span>
                  </div>
                  <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                    Get advice <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <TrustMeter score={score} label={input || "App"} />
              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
                Explanation: {score < 50 ? "Low transparency, unrealistic claims, excessive permissions." : score >= 80 ? "Compliant permissions, strong transparency signals." : "Mixed signals, review permissions carefully."}
              </div>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-4 gap-4">
            {[
              { icon: <Search className="h-5 w-5" />, t: "AI-Powered Scam Detector", d: "Detects patterns in permissions, reviews, and claims." },
              { icon: <Bell className="h-5 w-5" />, t: "Real-Time Risk Alerts", d: "Agentic monitoring with proactive notifications." },
              { icon: <Users className="h-5 w-5" />, t: "Community Lens", d: "Real user reports and flags enrich scoring." },
              { icon: <Code className="h-5 w-5" />, t: "Developer API", d: "Embed TrustLens in apps and extensions." },
            ].map((f) => (
              <div key={f.t} className="relative p-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(56,189,248,.15),transparent)] opacity-60 animate-spin [animation-duration:6s]" />
                <div className="relative flex items-start gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-cyan-500/15 border border-cyan-300/30 text-cyan-200">{f.icon}</div>
                  <div>
                    <div className="font-semibold">{f.t}</div>
                    <div className="text-sm text-white/70 mt-1">{f.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">Why We Built TrustLens</h4>
              <p className="mt-2 text-white/80">Misinformation and fake fintech apps exploit users. TrustLens restores digital trust proactively, bringing cinematic clarity to complex safety decisions.</p>
              <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                <RangePill label="Safety-first" color={{ border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-200" }} />
                <RangePill label="Explainable" color={{ border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-200" }} />
                <RangePill label="Private" color={{ border: "border-amber-500/30", bg: "bg-amber-500/10", text: "text-amber-200" }} />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-semibold">What People Say</h4>
              <div className="mt-4 grid gap-4">
                {["I almost got scammed — TrustLens saved me!", "Finally, an AI that exposes fake loan apps.", "This feels like a security team in my pocket."].map((q, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/30 border border-white/10 text-white/80">“{q}”</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
