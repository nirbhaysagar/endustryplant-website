import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-sm tracking-[0.3em] text-primary-foreground/60 mb-4"
        >
          ready to build?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground max-w-4xl mx-auto"
        >
          let's create your next <br /> high-performance product.
        </motion.h2>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <Link
            to="/contact"
            className="font-display text-sm tracking-wider bg-primary-foreground text-primary px-8 py-4 hover:opacity-90 transition-opacity"
          >
            start your project
          </Link>
          <Link
            to="/projects"
            className="font-display text-sm tracking-wider border border-primary-foreground text-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            view our work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
