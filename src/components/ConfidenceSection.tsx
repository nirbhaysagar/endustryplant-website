import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const reasons = [
  {
    title: "We communicate clearly",
    description: "No technical jargon. No hidden agendas. We speak in outcomes and keep you in the loop every step of the way.",
  },
  {
    title: "We think before we build",
    description: "Every line of code starts with a strategy. We map out systems and flows to ensure longevity and performance.",
  },
  {
    title: "We don’t overpromise — we execute",
    description: "We set realistic timelines and exceed them. Our reputation is built on delivering what we say we will.",
  },
  {
    title: "We treat your product like our own",
    description: "We're not just builders; we're product thinkers. If we see a better way to achieve your goal, we'll tell you.",
  },
];

const ConfidenceSection = () => {
  return (
    <section id="confidence" className="py-24 md:py-40 bg-zinc-950 text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-[10px] tracking-[0.4em] text-primary mb-6 font-black"
            >
              the psychology
            </motion.p>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-display font-black leading-[0.9] tracking-tighter mb-12"
            >
              why clients <br /> choose us
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 border-l-2 border-primary bg-white/5 backdrop-blur-sm max-w-sm"
            >
              <p className="font-body text-lg italic text-white/80 leading-relaxed">
                "we’d rather say no than build something that doesn’t work."
              </p>
              <p className="font-display text-[10px] tracking-widest mt-4 font-black">
                — our philosophy
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <Accordion type="single" collapsible className="w-full">
              {reasons.map((reason, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="font-display text-xl md:text-2xl font-black tracking-tighter text-white text-left hover:no-underline py-6 group">
                    <div className="flex items-center gap-6">
                      <span className="text-primary opacity-40 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                      {reason.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-white/60 text-base leading-relaxed pb-8 pl-14">
                    {reason.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;
