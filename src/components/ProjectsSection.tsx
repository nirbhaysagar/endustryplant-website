import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "@/assets/agenttrace.png";
import project2 from "@/assets/triptrek.png";
import project3 from "@/assets/intelly.png";

// proof of work assets
import at1 from "@/assets/agenttrace-1.png";
import at2 from "@/assets/agenttrace-2.png";
import at3 from "@/assets/agenttrace-3.png";
import at4 from "@/assets/agenttrace-4.png";
import at5 from "@/assets/agenttrace-5.png";
import at6 from "@/assets/agenttrace-6.png";
import at7 from "@/assets/agenttrace-7.png";

// forion assets
import fr1 from "@/assets/forion-1.png";
import fr2 from "@/assets/forion-2.png";
import fr3 from "@/assets/forion-3.png";
import fr4 from "@/assets/forion-4.png";
import fr5 from "@/assets/forion-5.png";

// triptrek gallery assets
import tt0 from "@/assets/triptrek-0.png";
import tt1 from "@/assets/triptrek-1.png";
import tt2 from "@/assets/triptrek-2.png";
import tt3 from "@/assets/triptrek-3.png";
import tt4 from "@/assets/triptrek-4.png";
import tt5 from "@/assets/triptrek-5.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: project1,
    title: "AgentTrace",
    category: "AI Infrastructure",
    description: "One timeline, every agent execution. Records every tool call, state change, and LLM decision.",
    bgColor: "bg-[#1A1A1A]",
    url: "https://www.theagenttrace.com/",
    screenshots: [at1, at2, at3, at4, at5, at6, at7],
  },
  {
    image: fr1,
    title: "Forion",
    category: "AI Operating System",
    description: "The operating system for AI-native development. A unified ecosystem for building software with agents.",
    bgColor: "bg-[#0A0A0A]",
    url: "https://forion.ai/",
    screenshots: [fr1, fr2, fr3, fr4, fr5],
  },
  {
    image: tt1,
    title: "Trip Trek Holiday",
    category: "Travel Platform",
    description: "All-in-one Travel Booking. Explore the world's most breathtaking destinations.",
    bgColor: "bg-[#2A2A2A]",
    url: "https://triptrekholiday.com/",
    screenshots: [tt1, tt2, tt3, tt4, tt5],
  },
  {
    image: project3,
    title: "Intelly",
    category: "HealthTech SaaS",
    description: "A sophisticated health management dashboard for medical professionals.",
    bgColor: "bg-[#333333]",
    url: "#",
  },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  
  // gallery lightbox state
  const [activeProjIndex, setActiveProjIndex] = useState<number | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

  // lock body scroll
  useEffect(() => {
    if (activeProjIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeProjIndex]);

  // key shortcuts
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (activeProjIndex === null) return;
      if (e.key === "Escape") setActiveProjIndex(null);
      
      const project = projects[activeProjIndex];
      if (!project.screenshots) return;

      if (e.key === "ArrowRight") {
        setActiveImgIndex((prev) => (prev + 1) % project.screenshots!.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImgIndex((prev) => (prev - 1 + project.screenshots!.length) % project.screenshots!.length);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeProjIndex]);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    const container = containerRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          endTrigger: container,
          end: `bottom bottom`,
          id: `card-${index}`,
          // markers: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative bg-black">
      {/* section header */}
      <div className="container mx-auto px-6 pt-20 pb-12 sticky top-0 z-0">
        <p className="font-technical text-sm tracking-[0.3em] text-primary mb-4 font-bold">
          proof & results
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-black leading-tight text-white max-w-3xl tracking-tighter">
          built with precision.<br />backed by results.
        </h2>
      </div>

      <div className="relative z-10 space-y-[20vh] md:space-y-[40vh] pb-[40vh]">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`project-card min-h-screen flex items-center justify-center px-6 ${project.bgColor} border-t border-white/5 relative`}
            style={{ zIndex: index + 10 }}
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                {/* project text */}
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="space-y-4">
                    <span className="font-technical text-[10px] tracking-[0.4em] text-primary font-black">
                      case study / 0{index + 1}
                    </span>
                    <h3 className="text-4xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter">
                      {project.title.toLowerCase()}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-1.5 rounded-full border border-white/10 text-white/40 text-[10px] font-black tracking-widest font-technical">
                      {project.category.toLowerCase()}
                    </span>
                  </div>

                  <p className="text-white/60 font-body text-sm md:text-base max-w-md leading-relaxed">
                    {project.description.toLowerCase()}
                  </p>

                  <div className="flex flex-col gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-white font-technical text-[10px] font-black tracking-[0.3em] hover:text-primary transition-colors"
                    >
                      view project
                      <span className="w-8 h-[1px] bg-white/20 group-hover:bg-primary group-hover:w-16 transition-all duration-500" />
                    </a>
                    
                    {project.screenshots && (
                      <button
                        onClick={() => {
                          setActiveProjIndex(index);
                          setActiveImgIndex(0);
                        }}
                        className="group flex items-center gap-4 text-white/40 font-technical text-[10px] font-black tracking-[0.3em] hover:text-white transition-colors text-left font-black"
                      >
                        project gallery
                        <span className="w-4 h-[4px] bg-white/10 group-hover:bg-white group-hover:w-8 transition-all duration-500" />
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 overflow-hidden rounded-xl shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover aspect-[4/3] scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-black px-6 py-3 rounded-full font-technical font-black text-[10px] tracking-widest">VISIT SITE</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* project gallery lightbox */}
      <AnimatePresence>
        {activeProjIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col"
          >
            {/* hud header */}
            <div className="flex justify-between items-center p-8 z-10">
              <div className="space-y-1">
                <p className="font-technical text-[10px] font-black text-primary tracking-[0.3em]">
                  EYE-VIEW / 0{activeImgIndex + 1}
                </p>
                <p className="font-display text-white font-black text-lg tracking-tight">
                  {projects[activeProjIndex].title.toLowerCase()} // case study
                </p>
              </div>
              <button 
                onClick={() => setActiveProjIndex(null)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group pointer-events-auto"
              >
                <span className="text-xl group-hover:rotate-90 transition-transform">×</span>
              </button>
            </div>

            {/* main image container */}
            <div className="flex-grow relative flex items-center justify-center p-6 md:p-12">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImgIndex}
                  src={projects[activeProjIndex].screenshots?.[activeImgIndex]}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5"
                />
              </AnimatePresence>

              {/* nav arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none">
                <button 
                  onClick={() => setActiveImgIndex((prev) => (prev - 1 + projects[activeProjIndex].screenshots!.length) % projects[activeProjIndex].screenshots!.length)}
                  className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-md transition-all pointer-events-auto"
                >
                  ←
                </button>
                <button 
                  onClick={() => setActiveImgIndex((prev) => (prev + 1) % projects[activeProjIndex].screenshots!.length)}
                  className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-md transition-all pointer-events-auto"
                >
                  →
                </button>
              </div>
            </div>

            {/* HUD footer */}
            <div className="p-8 flex justify-center gap-3">
              {projects[activeProjIndex].screenshots?.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImgIndex(i)}
                  className={`w-12 h-1 bg-white transition-all ${i === activeImgIndex ? 'opacity-100 bg-primary' : 'opacity-20 hover:opacity-40'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
