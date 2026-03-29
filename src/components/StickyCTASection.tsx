import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "@/assets/agenttrace.png";
import project2 from "@/assets/triptrek.png";
import project3 from "@/assets/intelly.png";

gsap.registerPlugin(ScrollTrigger);

const StickyCTASection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current || !overlayRef.current) return;

        const ctx = gsap.context(() => {
            // Pin the whole section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=200%", // Scroll distance
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                },
            });

            // Animate the overlay sliding over the fixed text
            tl.fromTo(
                overlayRef.current,
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1, ease: "none" }
            );

            // Subtle scaling on the background text
            tl.to(textRef.current, { scale: 0.9, opacity: 0.3, ease: "none" }, 0);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full bg-[#f2d4be] overflow-hidden flex items-center justify-center"
        >
            {/* Background Layer - Fixed/Pinned Text */}
            <div
                ref={textRef}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10"
            >
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] md:text-sm font-black tracking-[0.5em] text-white mb-6 font-display max-w-lg leading-relaxed lowercase"
                >
                    if you’re serious about building a real product — not just another project — we should talk. let’s build something that actually works.
                </motion.p>
                <h2 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] tracking-tighter text-white lowercase">
                    built to <br /> scale <br /> right
                </h2>
            </div>

            {/* Foreground Layer - Transparent Screen with Images */}
            <div
                ref={overlayRef}
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
                <div className="container mx-auto px-6 relative h-full w-full">
                    {/* Floating Images (simulating the "screen move over" effect) */}
                    <div className="absolute top-[15%] left-[10%] w-48 md:w-64 rotate-[-5deg] shadow-2xl bg-white p-2 md:p-4 pb-8 md:pb-12 pointer-events-auto hover:scale-105 transition-transform rounded-sm">
                        <img src={project1} alt="Project 1" className="w-full grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" />
                        <div className="mt-4">
                            <p className="text-[10px] font-black tracking-widest text-black font-technical">agenttrace</p>
                            <p className="text-[8px] text-black font-black">view case study →</p>
                        </div>
                    </div>

                    <div className="absolute bottom-[20%] right-[10%] w-56 md:w-80 rotate-[3deg] shadow-2xl bg-primary p-2 md:p-4 pb-8 md:pb-12 pointer-events-auto hover:scale-105 transition-transform rounded-sm">
                        <img src={project2} alt="Project 2" className="w-full rounded-sm" />
                        <div className="mt-4 text-white">
                            <p className="text-[10px] font-black tracking-widest font-technical">trip trek holiday</p>
                            <p className="text-[8px] text-white font-black">view case study →</p>
                        </div>
                    </div>

                    <div className="absolute top-[10%] right-[15%] w-40 md:w-56 rotate-[10deg] shadow-2xl bg-white p-2 md:p-4 pb-8 md:pb-12 pointer-events-auto hover:scale-105 transition-transform hidden md:block rounded-sm">
                        <img src={project3} alt="Project 3" className="w-full grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" />
                        <div className="mt-4">
                            <p className="text-[10px] font-black tracking-widest text-black font-technical">intelly</p>
                            <p className="text-[8px] opacity-40 font-technical font-bold">view case study →</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Floating Badge - Standardized */}
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary rounded-full flex items-center justify-center z-30 animate-pulse pointer-events-auto cursor-pointer group border border-white/20 shadow-2xl">
                <p className="text-white text-[10px] font-black text-center leading-tight group-hover:scale-110 transition-transform font-technical tracking-widest">
                    lets<br />work
                </p>
            </div>
        </section>
    );
};

export default StickyCTASection;
