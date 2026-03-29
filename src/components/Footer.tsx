import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-20 md:pt-28 relative overflow-hidden">
      {/* Topographic Background Pattern (SVG) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" width="400" height="400" patternUnits="userSpaceOnUse">
              <path d="M0 100 Q 100 50 200 100 T 400 100 M0 200 Q 100 150 200 200 T 400 200 M0 300 Q 100 250 200 300 T 400 300"
                fill="none" stroke="black" strokeWidth="2" />
              <path d="M50 0 Q 100 100 50 200 T 50 400 M150 0 Q 200 100 150 200 T 150 400 M250 0 Q 300 100 250 200 T 250 400"
                fill="none" stroke="black" strokeWidth="1" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Organic Curved Top Border with Overlapping Logo */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[65%] w-20 h-20 md:w-28 md:h-28 z-20">
            {/* Centered Logo Placeholder - Topographic Asterisk */}
            <div className="w-full h-full bg-primary rounded-full flex items-center justify-center relative shadow-xl overflow-hidden group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full scale-150 animate-spin-slow">
                  <path d="M10 10 Q 50 0 90 10 T 10 90" fill="none" stroke="black" strokeWidth="0.5" />
                  <path d="M20 20 Q 50 10 80 20 T 20 80" fill="none" stroke="black" strokeWidth="0.5" />
                  <path d="M30 30 Q 50 20 70 30 T 30 70" fill="none" stroke="black" strokeWidth="0.5" />
                </svg>
              </div>
              <span className="text-white text-4xl md:text-5xl font-display font-black leading-none relative z-10">*</span>
            </div>
          </div>

          <div className="bg-black rounded-t-[50px] md:rounded-t-[80px] pt-16 pb-8 px-6">
            <div className="container mx-auto">
              {/* Branding Only */}
              <div className="text-center pt-8 pb-12">
                <h2 className="text-[10vw] font-display font-black leading-[0.8] tracking-tighter text-white mb-6">
                  endustry plant
                </h2>
                <p className="text-primary font-technical font-black uppercase text-[10px] md:text-xs tracking-[0.4em] opacity-80 mx-auto max-w-xl">
                  engineering deterministic outcomes // zero-latency systems
                </p>
              </div>

              {/* Bottom Bar */}
              <div className="flex flex-wrap justify-between items-center gap-4 pt-8 border-t border-white/5">
                <div className="flex gap-6 text-[9px] font-display font-black tracking-[0.2em] text-white/30">
                  <a href="#" className="hover:text-white transition-colors">privacy policy</a>
                  <a href="#" className="hover:text-white transition-colors">terms of service</a>
                </div>
                <p className="text-[9px] font-display font-black tracking-[0.2em] text-white/30">
                  © 2024 endustry studio — all rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
