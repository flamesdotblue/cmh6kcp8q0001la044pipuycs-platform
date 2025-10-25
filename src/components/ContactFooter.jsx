import React, { useState } from "react";
import { Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";

const ContactFooter = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="relative mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold">Join the Waitlist</h3>
            <p className="mt-2 text-white/80">Be first to access agentic protection, API, and the Chrome extension.</p>
            <form className="mt-6 grid gap-4">
              <input placeholder="Name" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:ring-2 ring-cyan-400/40" />
              <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:ring-2 ring-cyan-400/40" />
              <textarea placeholder="Message" rows={4} className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:ring-2 ring-cyan-400/40" />
              <button type="button" className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-cyan-500/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/30 transition">
                Join the Waitlist
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-transparent p-6">
            <h4 className="text-xl font-semibold">For Developers & Banks</h4>
            <ul className="mt-3 text-white/80 list-disc list-inside space-y-1 text-sm">
              <li>Chrome extension with live TrustLens badge</li>
              <li>Play Store “Install Safely” integration</li>
              <li>API for banks to auto-verify partner apps</li>
              <li>Community database for suspicious apps</li>
              <li>Partnerships with regulators</li>
            </ul>
            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <a className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-center" href="#">Docs</a>
              <a className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-center" href="#">API Console</a>
              <a className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-center" href="#">Security</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Home</a>
            <a className="hover:text-white" href="#">About</a>
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Support</a>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="LinkedIn" href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Twitter className="h-4 w-4" /></a>
            <a aria-label="YouTube" href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Youtube className="h-4 w-4" /></a>
          </div>
          <div>Copyright © 2025 TrustLens AI</div>
        </div>
      </div>

      <button onClick={() => setOpen((o) => !o)} className="fixed bottom-6 right-6 group shadow-xl inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/20 border border-emerald-300/30 text-emerald-200 hover:bg-emerald-500/30 backdrop-blur-xl">
        <MessageCircle className="h-5 w-5" /> Ask if an app is safe!
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-[22rem] rounded-2xl border border-white/10 bg-[#0A1224]/95 backdrop-blur-xl p-4">
          <div className="text-sm text-white/70">AI Assistant</div>
          <div className="mt-2 text-sm">Hi! Enter an app name and I’ll estimate its safety.</div>
          <input placeholder="e.g., PhonePe" className="mt-3 w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 outline-none focus:ring-2 ring-emerald-400/40" />
          <div className="mt-3 flex justify-end gap-2">
            <button onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Close</button>
            <button className="px-3 py-2 rounded-xl bg-emerald-500/20 border border-emerald-300/30 text-emerald-200 hover:bg-emerald-500/30">Ask</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactFooter;
