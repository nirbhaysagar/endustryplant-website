import { motion } from "framer-motion";
import MorphingChar from "./MorphingChar";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white text-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          {/* Left Side - Label & CTA */}
          <div className="md:w-1/3 sticky top-32 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-black"></span>
                <p className="text-[10px] tracking-[0.4em] font-technical font-black text-black uppercase">
                  the manifesto
                </p>
              </div>

              <div className="group relative inline-flex items-center">
                <button className="bg-black text-white px-10 py-5 rounded-full text-[10px] tracking-widest font-technical font-black hover:bg-primary transition-all duration-500 hover:scale-105 uppercase">
                  core directives
                </button>
                <div className="absolute -right-4 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity animate-bounce">
                  <span className="text-white text-[10px] transform -rotate-45">→</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Massive Statement & Directives */}
          <div className="md:w-2/3 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[8vw] md:text-[5.5vw] font-display font-black leading-[0.9] tracking-tighter lowercase mb-20"
            >
              engineer-led. <br />
              <span className="text-primary italic">deterministic.</span> <br />
              built for sc<MorphingChar char="a" className="h-[0.8em] w-[0.8em] text-primary" />le.
            </motion.h2>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group border-t border-black/10 pt-8"
              >
                <p className="font-technical text-[10px] tracking-[0.5em] text-black/40 font-black uppercase mb-4 group-hover:text-primary transition-colors">Directive 01 / Flow</p>
                <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter mb-4 lowercase">outcomes over output</h3>
                <p className="font-body text-black/70 max-w-xl text-lg lowercase">
                  most agencies focus on delivering features. we focus on delivering working systems. a beautiful ui doesn't matter if it doesn't convert or validate the business hypothesis.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group border-t border-black/10 pt-8"
              >
                <p className="font-technical text-[10px] tracking-[0.5em] text-black/40 font-black uppercase mb-4 group-hover:text-primary transition-colors">Directive 02 / Logic</p>
                <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter mb-4 lowercase">deterministic intelligence</h3>
                <p className="font-body text-black/70 max-w-xl text-lg lowercase">
                  generic "ai fluff" is dead weight. we integrate deeply contextualized llm orchestration, vector architectures, and inference engines to ensure interactions are rigorous and traceable.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group border-t border-black/10 pt-8"
              >
                <p className="font-technical text-[10px] tracking-[0.5em] text-black/40 font-black uppercase mb-4 group-hover:text-primary transition-colors">Directive 03 / Code</p>
                <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter mb-4 lowercase">architectural purity</h3>
                <p className="font-body text-black/70 max-w-xl text-lg lowercase">
                  no templates. no shortcuts. zero-latency interactions and highly scalable logic frameworks built from scratch to prevent rebuilds in year two. speed without the chaos.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Graphic Element */}
      <div className="absolute right-[-10vw] top-1/4 w-[50vw] h-[50vw] outline outline-[1px] outline-black/5 rounded-full pointer-events-none" />
      <div className="absolute right-[-20vw] top-1/4 w-[70vw] h-[70vw] outline outline-[1px] outline-black/5 rounded-full pointer-events-none" />
    </section>
  );
};

export default AboutSection;
