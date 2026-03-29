import { motion } from "framer-motion";

const workWith = [
  "Founders building serious products",
  "Startups validating ideas",
  "Businesses upgrading systems",
  "Teams that value quality over shortcuts",
];

const notFor = [
  "Cheap, quick fixes",
  "Template-based builds",
  "One-time low-value work",
];

const FilterSection = () => {
  return (
    <section id="filter" className="py-24 md:py-40 bg-zinc-100 text-black overflow-hidden relative border-y border-black/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-[10px] tracking-[0.4em] text-primary mb-6 font-black"
          >
            efficiency first
          </motion.p>
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.8] tracking-tighter"
          >
            who we <br />
            work with
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="font-body text-xl md:text-2xl mt-8 font-medium italic opacity-60"
          >
            we're not for everyone.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-black/10">
          {/* work with */}
          <div className="bg-zinc-100 py-16 md:py-24 pr-8 md:pr-16 text-right flex flex-col items-end">
            <h3 className="font-display text-3xl md:text-5xl font-black tracking-tighter mb-12 text-black">
              ideal clients
            </h3>
            <ul className="space-y-6">
              {workWith.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 justify-end group cursor-default"
                >
                  <span className="font-body text-sm md:text-lg font-bold group-hover:text-primary transition-colors">{item.toLowerCase()}</span>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* not for */}
          <div className="bg-zinc-100 py-16 md:py-24 pl-8 md:pl-16 text-left flex flex-col items-start translate-y-8 md:translate-y-16">
            <h3 className="font-display text-3xl md:text-5xl font-black tracking-tighter mb-12 text-red-500">
              who we're not for
            </h3>
            <ul className="space-y-6">
              {notFor.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 justify-start group cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="font-body text-sm md:text-lg font-bold group-hover:text-red-500 transition-colors">{item.toLowerCase()}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* structural background text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display font-black text-black/[0.01] pointer-events-none select-none tracking-tighter">
        filter
      </div>
    </section>
  );
};

export default FilterSection;
