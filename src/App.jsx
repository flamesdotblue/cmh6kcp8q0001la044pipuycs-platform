import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070B14] via-[#0A1224] to-[#0B1020] text-white selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
