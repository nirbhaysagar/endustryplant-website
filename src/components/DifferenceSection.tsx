import { motion } from "framer-motion";

const differences = [
  {
    title: "Engineer-Led, Not Designer-Led",
    description: "We don’t just make things look good — we make them work.",
  },
  {
    title: "Product Thinking > Task Execution",
    description: "We think in systems, flows, and outcomes — not just pages.",
  },
  {
    title: "Built for Scale From Day 1",
    description: "No shortcuts. No rebuilds later.",
  },
  {
    title: "Custom > Template",
    description: "Every solution is built from scratch for your use case.",
  },
  {
    title: "Speed Without Chaos",
    description: "We move fast, but with structured systems.",
  },
];

const DifferenceSection = () => {
  return (
    <section id="difference" className="py-24 md:py-40 bg-white text-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-[10px] tracking-[0.4em] text-primary mb-6 font-black"
            >
              the trust breaker
            </motion.p>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter"
            >
              why endustry plant <br /> is different
            </motion.h2>
          </div>
          <div className="hidden md:block">
            <p className="font-technical text-[10px] tracking-[0.2em] font-black text-black/20 text-right">
              built for <br /> performance
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {differences.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col gap-6 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-primary font-display font-black text-xl italic leading-none">{index + 1}.</span>
                <span className="h-[1px] w-full bg-black/5 flex-grow group-hover:bg-primary transition-colors duration-500" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-display font-black tracking-tighter leading-none group-hover:text-primary transition-colors duration-300">
                  {diff.title.toLowerCase()}
                </h3>
                <p className="font-body text-sm md:text-base font-medium text-black/60 max-w-xs leading-relaxed">
                  {diff.description.toLowerCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background number */}
      <div className="absolute right-[-5%] bottom-[-5%] text-[40vw] font-display font-black text-black/[0.02] pointer-events-none select-none leading-[0.6]">
        core
      </div>
    </section>
  );
};

export default DifferenceSection;
