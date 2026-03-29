import { motion } from "framer-motion";
import ImageTrail from "./ImageTrail";
import { Link } from "react-router-dom";

const CrosshairSVG = (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M12 2v20M2 12h20M12 8v8M8 12h8" strokeDasharray="2 2" />
  </svg>
);

const BlueprintGridSVG = (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
    <rect x="2" y="2" width="20" height="20" />
    <path d="M2 8h20M2 16h20M8 2v20M16 2v20" />
  </svg>
);

const ArchitectureNodeSVG = (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v7M12 15v7M2 12h7M15 12h7" strokeDasharray="1 3" />
  </svg>
);

const technicalSymbols = [
  "[ ]",
  "{ }",
  "//",
  CrosshairSVG,
  BlueprintGridSVG,
  ArchitectureNodeSVG,
  "01",
  "∑"
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-12 pb-12 bg-black text-white overflow-hidden">
      {/* Symbol Trail Effect */}
      <ImageTrail symbols={technicalSymbols} />

      {/* Main Title - Shifted Even Higher */}
      <div className="container mx-auto px-6 relative z-20 flex-grow flex flex-col items-center justify-start pt-0 md:-mt-8">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[8vw] md:text-[6.5vw] font-display font-black leading-[0.9] tracking-tighter text-center text-white max-w-5xl lowercase"
        >
          we engineer <br /> deterministic <br /> digital infrastructure <br />
          <span className="text-primary italic">— not just websites</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 text-[14px] md:text-lg text-white/50 font-medium max-w-2xl text-center font-body leading-relaxed lowercase"
        >
          we are a specialized forge of engineers and product thinkers. we architect high-performance mvps, saas ecosystems, and custom dashboards — optimized for zero-latency and massive scalability.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-10 flex flex-col md:flex-row gap-6 items-center"
        >
          <Link to="/contact" className="bg-primary text-white border border-primary px-10 py-4 text-[10px] font-black tracking-[0.3em] font-technical hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-full">
            start your project
          </Link>
          <a href="#process" className="bg-transparent text-white border border-white/20 px-10 py-4 text-[10px] font-black tracking-[0.3em] font-technical hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-full">
            see how we build
          </a>
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-20 pb-12">
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="max-w-[300px] text-[10px] tracking-widest leading-relaxed font-technical font-bold text-white"
        >
          we turn attention into revenue, <br /> and ideas into infrastructure.
        </motion.p>

        {/* Floating Scroll Indicator Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.8,
          }}
          className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center text-[10px] tracking-widest hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer font-technical font-bold"
        >
          scroll
        </motion.div>
      </div>

      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/5 blur-[100px] -z-20 rounded-full" />
    </section>
  );
};

export default HeroSection;
