import { motion } from "framer-motion";

const BeliefSection = () => {
  return (
    <section id="belief" className="py-24 md:py-40 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[10px] tracking-[0.4em] text-primary mb-8 font-black"
          >
            the core belief
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[8vw] md:text-[6vw] font-display font-black leading-[0.9] tracking-tighter mb-16"
          >
            we don’t build <br />
            projects. we build <br />
            <span className="text-primary italic">outcomes.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl font-display font-bold leading-tight">
                most agencies focus on delivering features. <br />
                <span className="text-white/40">we focus on delivering working systems.</span>
              </p>
              
              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="font-body text-sm md:text-base text-white/70">a website doesn’t matter if it doesn’t <span className="text-white font-bold">convert</span></p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="font-body text-sm md:text-base text-white/70">an app doesn’t matter if it doesn’t <span className="text-white font-bold">scale</span></p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="font-body text-sm md:text-base text-white/70">an mvp doesn’t matter if it doesn’t <span className="text-white font-bold">validate</span></p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <p className="font-display text-[10px] tracking-[0.4em] text-white/40 mb-6 font-black"
>
                the gap we bridge
              </p>
              <ul className="space-y-6">
                {["ideas and execution", "vision and reality", "concept and scale"].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 group">
                    <span className="text-primary font-black text-xl group-hover:translate-x-2 transition-transform duration-300">👉</span>
                    <span className="font-display text-2xl md:text-3xl font-black tracking-tighter transition-colors group-hover:text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Structural accent */}
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default BeliefSection;
