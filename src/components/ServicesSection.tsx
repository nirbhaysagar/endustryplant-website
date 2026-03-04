import { motion } from "framer-motion";
import serviceWeb from "@/assets/service-web.jpg";
import serviceSaas from "@/assets/service-saas.jpg";
import serviceGrowth from "@/assets/service-growth.jpg";
import project1 from "@/assets/project-1.jpg";

const services = [
  {
    number: "01",
    title: "Web Platforms",
    tags: ["High-Performance", "Conversion-Focused", "Relentless"],
    description: "Websites built for speed, clarity, and conversion. From landing pages to complex web apps, we create digital experiences that feel effortless and perform relentlessly.",
    image: serviceWeb,
  },
  {
    number: "02",
    title: "Custom SaaS",
    tags: ["Full-Stack", "Architecture", "AI-Integrated"],
    description: "We transform business ideas into scalable software products. MVP to full-scale platform — architecture, backend systems, automation, and AI engineered to grow with you.",
    image: serviceSaas,
  },
  {
    number: "03",
    title: "Automation",
    tags: ["Workflows", "Smart AI", "Output x10"],
    description: "We streamline operations using smart workflows and AI-driven tools, reducing friction and multiplying output. Digital infrastructure that prints momentum.",
    image: project1,
  },
  {
    number: "04",
    title: "Growth",
    tags: ["SEO & Performance", "Analytics", "Digital Strategy"],
    description:
      "SEO, performance optimization, and growth-driven design to ensure your digital product reaches its full potential and drives measurable results.",
    image: serviceGrowth,
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60,
    rotateX: -8,
    scale: 0.97,
    transition: { delay: i * 0.1 },
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-40 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Large editorial heading */}
        <motion.h2
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-7xl md:text-9xl lg:text-[12rem] font-black uppercase leading-[0.8] tracking-tighter text-foreground mb-16 md:mb-24"
        >
          Services
        </motion.h2>

        {/* Service rows */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              style={{ perspective: 800 }}
              className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr_auto] items-start md:items-center gap-4 md:gap-8 py-10 md:py-12 border-t border-foreground/10 last:border-b cursor-default"
            >
              {/* Number */}
              <span className="font-technical text-[10px] uppercase tracking-[0.4em] text-foreground md:w-16 font-black">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-4xl md:text-6xl font-black text-foreground md:w-80 group-hover:text-primary transition-colors duration-300 uppercase tracking-tighter leading-none">
                {service.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 md:w-48">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-technical text-[10px] text-primary uppercase tracking-widest leading-tight font-black"
                  >
                    {tag}
                    {tag !== service.tags[service.tags.length - 1] && ","}
                    &nbsp;
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-body text-sm text-foreground leading-relaxed md:max-w-sm font-medium">
                {service.description}
              </p>

              {/* Image - reveals on hover on desktop */}
              <div className="hidden md:block w-40 h-28 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
