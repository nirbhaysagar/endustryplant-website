import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "@/assets/agenttrace.png";
import project2 from "@/assets/triptrek.png";
import project3 from "@/assets/intelly.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: project1,
    title: "AgentTrace",
    category: "AI Infrastructure",
    description: "One timeline, every agent execution. Records every tool call, state change, and LLM decision.",
    bgColor: "bg-[#1A1A1A]",
  },
  {
    image: project2,
    title: "Trip Trek Holiday",
    category: "Travel Platform",
    description: "All-in-one Travel Booking. Explore the world's most breathtaking destinations.",
    bgColor: "bg-[#2A2A2A]",
  },
  {
    image: project3,
    title: "Intelly",
    category: "HealthTech SaaS",
    description: "A sophisticated health management dashboard for medical professionals.",
    bgColor: "bg-[#333333]",
  },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    const container = containerRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Don't pin the last card

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
      {/* Section Header */}
      <div className="container mx-auto px-6 pt-20 pb-12 sticky top-0 z-0">
        <p className="font-technical text-sm uppercase tracking-[0.3em] text-primary mb-4 font-bold">
          Selected Work
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-tight text-white max-w-3xl tracking-tighter">
          The Innovative Ideas<br />You Would Love
        </h2>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`project-card w-full h-screen flex items-center justify-center p-6 md:p-12 ${project.bgColor} border-t border-white/5`}
            style={{ zIndex: index + 1 }}
          >
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4 font-bold font-technical">
                  {project.category}
                </p>
                <h3 className="text-3xl md:text-5xl font-display font-black uppercase text-white mb-6 leading-none tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-white text-base md:text-lg max-w-sm mb-10 leading-relaxed font-body">
                  {project.description}
                </p>
                <div className="inline-flex items-center gap-4 group cursor-pointer">
                  <span className="w-12 h-[1px] bg-white group-hover:w-20 group-hover:bg-primary transition-all duration-500"></span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-white group-hover:text-primary transition-colors font-technical">View Project</span>
                </div>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-xl shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-[4/3] scale-110 hover:scale-100 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
