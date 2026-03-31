import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Server, Activity, Database, Cpu } from "lucide-react";

const protocols = [
  {
    id: "01",
    status: "SYSTEMS ONLINE",
    icon: <Server className="w-5 h-5 text-primary" />,
    name: "Core Infrastructure Engine",
    description: "rapid deployment of scalable saas applications, dashboards, and internal platforms. engineered for real-world stress testing without sacrificing architectural purity.",
    stack: ["React", "PostgreSQL", "Node.js", "Redis"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "02",
    status: "NEURAL LINK ACTIVE",
    icon: <Cpu className="w-5 h-5 text-primary" />,
    name: "Deep Reasoning & RAG",
    description: "integration of multi-modal reasoning models, retrieval-augmented generation architectures, and vector databases. we embed deterministic intelligence directly into your stack.",
    stack: ["Vector DBs", "LLM APIs", "Python", "WebSockets"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "03",
    status: "LOAD BALANCING",
    icon: <Database className="w-5 h-5 text-primary" />,
    name: "Enterprise Hardening",
    description: "high-load platform engineering. zero-latency interactions, complex state management, and robust conversion-first user interfaces resistant to traffic spikes.",
    stack: ["Next.js", "AWS", "GraphQL", "Edge Compute"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "04",
    status: "PERFORMANCE NOMINAL",
    icon: <Activity className="w-5 h-5 text-primary" />,
    name: "Conversion Systems",
    description: "custom experiential landing platforms and e-commerce deployments. moving away from basic templates to engineered digital experiences that dominate attention.",
    stack: ["Framer Motion", "WebGL", "Tailwind", "Vite"],
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=800"
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const ServicesSection = () => {
  const [hoveredProtocol, setHoveredProtocol] = useState<number | null>(null);
  
  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs add weight and smoothness to the cursor movement
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by half the width/height of the floating image (300x200) to center it
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 100);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#050505] overflow-hidden relative">
      
      {/* Floating Hover Image Portal */}
      <AnimatePresence>
        {hoveredProtocol !== null && (
          <motion.img
            initial={{ opacity: 0, scale: 0.7, filter: "brightness(0)" }}
            animate={{ opacity: 1, scale: 1, filter: "brightness(1.2)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "brightness(0)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            src={protocols[hoveredProtocol].image}
            alt="Service Preview"
            className="fixed z-50 pointer-events-none object-cover rounded-xl shadow-[0_0_50px_rgba(107,140,77,0.4)] border border-primary/20 w-[300px] h-[200px] hidden md:block"
            style={{
              left: cursorXSpring,
              top: cursorYSpring,
            }}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Terminal Header */}
        <div className="mb-10 md:mb-16 border-b border-white/10 pb-4 md:pb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
              <span className="font-technical text-[9px] md:text-[10px] text-white/50 tracking-[0.2em] md:tracking-[0.3em] uppercase">Agenttrace // Service Matrix</span>
            </div>
            <span className="hidden md:block font-technical text-[10px] text-primary tracking-[0.3em] uppercase opacity-70">
              SYS_REV_v3.0.4
            </span>
        </div>

        {/* Protocol Rows */}
        <div className="space-y-4 md:space-y-4 relative z-10">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={rowVariants}
              onMouseEnter={() => setHoveredProtocol(index)}
              onMouseLeave={() => setHoveredProtocol(null)}
              className="group relative bg-[#0A0A0A] border border-white/5 hover:border-primary/30 rounded-2xl p-5 md:p-10 transition-all duration-500 overflow-hidden cursor-crosshair"
            >
              
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_250px] xl:grid-cols-[250px_1fr_300px] gap-6 md:gap-8 lg:gap-12 relative z-10 items-start pointer-events-none">
                
                {/* Column 1: ID & Status */}
                <div className="flex flex-col gap-2 md:gap-4 pointer-events-auto">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="font-display text-3xl md:text-4xl font-black text-white/20 group-hover:text-primary/40 transition-colors">
                      {protocol.id}
                    </span>
                    {protocol.icon}
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-auto pt-2 md:pt-10">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping shrink-0" />
                    <span className="font-technical text-[8px] md:text-[9px] text-white/40 tracking-[0.2em] font-medium uppercase truncate">
                      [{protocol.status}]
                    </span>
                  </div>
                </div>

                {/* Column 2: Name & Description */}
                <div className="flex flex-col gap-4 md:gap-6 pointer-events-auto">
                  <h3 className="font-display text-2xl md:text-4xl font-black text-white lowercase tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
                    {protocol.name}
                  </h3>
                  <p className="font-body text-sm md:text-base text-white/60 leading-relaxed lowercase max-w-xl">
                    {protocol.description}
                  </p>
                </div>

                {/* Column 3: Tech Stack Array */}
                <div className="flex flex-col h-full justify-center pointer-events-auto">
                  <p className="font-technical text-[10px] text-primary tracking-[0.2em] uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    Deployed Stack Structure
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {protocol.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-[#111111] border border-white/10 rounded text-[11px] font-technical text-white/70 uppercase tracking-widest group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Global System Check Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-end relative z-10"
        >
             <div className="px-4 py-2 border border-white/5 bg-[#0A0A0A] rounded-full inline-flex items-center gap-3 cursor-default hover:border-primary/20 transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                 <div className="flex gap-1">
                     <div className="w-1 h-3 bg-primary animate-pulse" style={{ animationDelay: '0ms' }} />
                     <div className="w-1 h-3 bg-primary animate-pulse" style={{ animationDelay: '150ms' }} />
                     <div className="w-1 h-3 bg-primary" />
                 </div>
                 <span className="font-technical text-[9px] tracking-[0.3em] uppercase text-white/40">All nodes operational</span>
             </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
