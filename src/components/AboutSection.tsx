import { motion } from "framer-motion";
import MorphingChar from "./MorphingChar";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          {/* Left Side - Label & CTA */}
          <div className="md:w-1/3 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-black"></span>
                <p className="text-[10px] uppercase tracking-[0.4em] font-technical font-black text-black">
                  Our Philosophy
                </p>
              </div>

              <div className="group relative inline-flex items-center">
                <button className="bg-black text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-widest font-technical font-black hover:bg-primary transition-all duration-500 hover:scale-105">
                  About the Studio
                </button>
                <div className="absolute -right-4 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity animate-bounce">
                  <span className="text-white text-[10px] transform -rotate-45">→</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Massive Statement */}
          <div className="md:w-2/3">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[8vw] md:text-[5.5vw] font-display font-black uppercase leading-[0.9] tracking-tighter"
            >
              Most businesses <br />
              don’t f<MorphingChar char="a" className="h-[0.8em] w-[0.8em] text-primary" />il because <br />
              of b<MorphingChar char="a" className="h-[0.8em] w-[0.8em] text-primary" />d ide<MorphingChar char="a" className="h-[0.8em] w-[0.8em] text-primary" />s.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 grid md:grid-cols-2 gap-12"
            >
              <div className="space-y-6">
                <p className="text-sm md:text-base leading-relaxed font-body font-medium text-black">
                  They fail because their digital foundation can’t scale. At Endustry Plant, we design and build conversion-focused websites and robust SaaS platforms that operate like growth engines.
                </p>
                <p className="text-sm md:text-base leading-relaxed font-body font-medium text-black">
                  Every interface is intentional. Every workflow is engineered. Every pixel has a purpose. We don’t just make things look good — we make them work for users, for teams, and for revenue.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-[10px] uppercase tracking-[0.3em] font-technical font-black text-primary mb-2">The Vision</p>
                <p className="text-sm md:text-base leading-relaxed font-body font-medium text-black">
                  The future belongs to businesses that own their systems. We help companies move from dependency to autonomy — from scattered tools to structured ecosystems. We don't chase trends. We build foundations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Background Graphic Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#3B4FE4]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default AboutSection;
