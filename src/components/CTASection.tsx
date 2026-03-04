import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm uppercase tracking-[0.3em] text-primary-foreground/60 mb-4"
        >
          Get Started
        </motion.p>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight text-primary-foreground max-w-4xl mx-auto"
        >
          The Innovative Ideas
          <br />
          You Would Love
        </motion.h2>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <a
            href="#contact"
            className="font-display text-sm uppercase tracking-wider bg-primary-foreground text-primary px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
          <a
            href="#projects"
            className="font-display text-sm uppercase tracking-wider border border-primary-foreground text-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Our Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
