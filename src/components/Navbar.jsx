import React, { useEffect, useState } from "react";
import { Shield, Sun, Moon, Menu } from "lucide-react";

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme-dark");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === null ? prefersDark : stored === "true";
    setDark(isDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme-dark", String(dark));
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-xl bg-cyan-400/30 blur-lg" />
            <Shield className="relative h-7 w-7 text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
          </span>
          <div className="leading-tight">
            <div className="text-sm text-cyan-300 tracking-wide uppercase">TrustLens</div>
            <div className="text-lg font-semibold">AI — Financial Safety Guardian</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#vision" className="hover:text-white transition">Vision</a>
          <a href="#score" className="hover:text-white transition">Trust Score</a>
          <a href="#architecture" className="hover:text-white transition">Architecture</a>
          <a href="#demo" className="hover:text-white transition">Demo</a>
          <a href="#contact" className="hover:text-white transition">Join</a>
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Toggle theme" onClick={() => setDark((d) => !d)} className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            {dark ? <Sun className="h-5 w-5 text-amber-300" /> : <Moon className="h-5 w-5 text-cyan-300" />}
          </button>
          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition" onClick={() => setOpen((o) => !o)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          <div className="flex flex-col gap-2 pt-2 text-white/80">
            <a onClick={() => setOpen(false)} href="#vision" className="px-3 py-2 rounded-lg hover:bg-white/5">Vision</a>
            <a onClick={() => setOpen(false)} href="#score" className="px-3 py-2 rounded-lg hover:bg-white/5">Trust Score</a>
            <a onClick={() => setOpen(false)} href="#architecture" className="px-3 py-2 rounded-lg hover:bg-white/5">Architecture</a>
            <a onClick={() => setOpen(false)} href="#demo" className="px-3 py-2 rounded-lg hover:bg-white/5">Demo</a>
            <a onClick={() => setOpen(false)} href="#contact" className="px-3 py-2 rounded-lg hover:bg-white/5">Join</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
