import { motion } from "framer-motion";
import ImageTrail from "./ImageTrail";

// Import images for the trail
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import aboutImg from "@/assets/about-image.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceSaas from "@/assets/service-saas.jpg";
import serviceGrowth from "@/assets/service-growth.jpg";
import { Link } from "react-router-dom";

const trailImages = [
  project1,
  project2,
  project3,
  aboutImg,
  serviceWeb,
  serviceSaas,
  serviceGrowth,
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-12 pb-12 bg-black text-white overflow-hidden uppercase">
      {/* Image Trail Effect */}
      <ImageTrail images={trailImages} />

      {/* Main Title - Shifted Even Higher */}
      <div className="container mx-auto px-6 relative z-20 flex-grow flex flex-col items-center justify-start pt-0 md:-mt-8">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tight text-center uppercase text-white max-w-5xl"
        >
          We Engineer <br /> Digital Growth Systems
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 text-[12px] md:text-base tracking-[0.2em] text-white font-black max-w-2xl text-center font-technical uppercase leading-relaxed"
        >
          Endustry Plant builds high-performance websites and scalable SaaS products that turn attention into revenue, and ideas into infrastructure.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-10 flex flex-col md:flex-row gap-6 items-center"
        >
          <Link to="/contact" className="bg-primary text-white border border-primary px-10 py-4 text-[10px] font-black uppercase tracking-[0.3em] font-technical hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-full">
            Build With Us
          </Link>
          <Link to="/projects" className="bg-transparent text-white border border-white/20 px-10 py-4 text-[10px] font-black uppercase tracking-[0.3em] font-technical hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-full">
            See Our Work
          </Link>
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-8 relative z-20 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-[300px] text-[10px] uppercase tracking-widest leading-relaxed font-technical font-bold text-white"
        >
          Brand, Creative and Development Partners to Tech and Cultural Changemakers
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1,
          }}
          className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center text-[10px] uppercase tracking-widest hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer font-technical font-bold"
        >
          Let's Work
        </motion.div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black -z-10" />
    </section>
  );
};

export default HeroSection;
