import { motion } from "framer-motion";

const steps = [
  {
    title: "Deep Understanding",
    description: "We don’t start with code. We start with your problem.",
  },
  {
    title: "System Design",
    description: "We map the product before building it.",
  },
  {
    title: "Rapid Build Phase",
    description: "Fast execution with clean architecture.",
  },
  {
    title: "Feedback Loop",
    description: "We refine based on real use.",
  },
  {
    title: "Scale & Optimize",
    description: "We prepare your product for growth.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-40 bg-black text-white overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-[10px] tracking-[0.4em] text-primary mb-6 font-black"
            >
              how we build
            </motion.p>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.8] tracking-tighter"
            >
              the system <br />
              behind the <br />
              <span className="text-primary italic">build</span>
            </motion.h2>
          </div>
          <div className="max-w-xs pt-12">
            <p className="font-body text-sm md:text-base text-white/40 leading-relaxed font-medium">
              we're not freelancers. we're operators. our structured build process ensures speed without chaos and scale from day choice.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group grid grid-cols-1 md:grid-cols-[100px_1fr_auto] items-center gap-8 py-12 border-t border-white/10 last:border-b"
            >
              <span className="font-display text-[10px] tracking-[0.4em] text-white/40 group-hover:text-primary transition-colors font-black">
                phase {index + 1}
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                {step.title.toLowerCase()}
              </h3>
              <p className="font-body text-sm md:text-base text-white/60 md:max-w-xs text-right group-hover:text-white transition-colors duration-300">
                {step.description.toLowerCase()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Visual accent: scrolling text or similar */}
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block" />
    </section>
  );
};

export default ProcessSection;
