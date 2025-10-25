import React from "react";
import { motion } from "framer-motion";
import { Shield, Fingerprint, Sparkles, Scan, ArrowRight } from "lucide-react";
import Particles from "./Particles";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="absolute -top-56 -left-56 h-[40rem] w-[40rem] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute top-32 -right-56 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <Particles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
              <Sparkles className="h-4 w-4 text-amber-300" /> Ultra-secure, Agentic AI
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.05 }} className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              TrustLens AI — Your Financial Safety Guardian
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="mt-5 text-lg text-white/80 max-w-2xl">
              AI-powered protection against fake loan apps, scams, and misinformation. Feel confident with holographic Trust Scores, real-time risk alerts, and explainable insights.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#demo" className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 backdrop-blur-md transition">
                <Scan className="h-5 w-5" /> Scan an App <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition" />
              </a>
              <a href="#score" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <Shield className="h-5 w-5 text-emerald-300" /> Explore Safe Apps
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {["RBI Verified Data", "Community Lens", "Real-time Alerts"].map((k, i) => (
                <div key={k} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4 text-center">
                  <div className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent,transparent,rgba(34,211,238,.18),transparent,transparent)] animate-spin-slow" />
                  <div className="relative text-sm text-white/80">{k}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative h-[28rem] md:h-[32rem]">
              <div className="absolute inset-0 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,.18),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(234,179,8,.16),transparent_35%)]" />
                <motion.div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/30 blur-2xl" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
                <motion.div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-emerald-400/30 blur-2xl" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 6 }} />

                <div className="relative h-full w-full grid place-items-center">
                  <motion.div initial={{ rotateX: 12, rotateY: -12, opacity: 0 }} animate={{ rotateX: 0, rotateY: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-48 w-48 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-emerald-400/20 border border-cyan-300/30 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,.25)]">
                    <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(120deg,rgba(255,255,255,.15),transparent_30%)]" />
                    <div className="absolute inset-4 rounded-2xl border border-white/10 grid place-items-center">
                      <Fingerprint className="h-16 w-16 text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,.85)]" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white/80 backdrop-blur-xl">
                      Holographic Identity & App Scan
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
