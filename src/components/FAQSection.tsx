import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Typical website projects take 4-8 weeks depending on complexity. SaaS products range from 8-16 weeks for MVP delivery.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is unique. We provide custom quotes based on scope, complexity, and timeline. Reach out for a free consultation.",
  },
  {
    question: "Do you build SaaS products from scratch?",
    answer:
      "Yes! We handle everything from product strategy and UX design to full-stack development, deployment, and ongoing support.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern frameworks like React, Next.js, and TypeScript on the frontend, paired with scalable cloud backends. We choose the best stack for each project.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Absolutely. We offer retainer packages for continuous improvement, bug fixes, feature development, and performance monitoring.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-5xl font-extrabold uppercase leading-tight text-foreground"
            >
              What They
              <br />
              Ask
            </motion.h2>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-foreground/10">
                  <AccordionTrigger className="font-display text-sm md:text-base uppercase tracking-wide text-foreground text-left hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
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

export default FAQSection;
