import React, { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailSymbol {
  id: number;
  x: number;
  y: number;
  content: ReactNode;
}

interface SymbolTrailProps {
  symbols: ReactNode[];
}

const ImageTrail: React.FC<SymbolTrailProps> = ({ symbols }) => {
  const [trail, setTrail] = useState<TrailSymbol[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const trailCount = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use window to capture events even if container has pointer-events-none
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();

      // Only proceed if mouse is inside the Hero Section (rect)
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const distance = Math.hypot(
        x - lastPos.current.x,
        y - lastPos.current.y
      );

      if (distance > 70) {
        const newSymbol: TrailSymbol = {
          id: trailCount.current++,
          x,
          y,
          content: symbols[Math.floor(Math.random() * symbols.length)],
        };

        setTrail((prev) => [...prev.slice(-15), newSymbol]);
        lastPos.current = { x, y };

        // Auto-remove image after 0.5 seconds to ensure trail clears faster
        setTimeout(() => {
          setTrail((prev) => prev.filter((item) => item.id !== newSymbol.id));
        }, 500);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [symbols]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <AnimatePresence>
        {trail.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 40 - 20 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2, transition: { duration: 0.5 } }}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
            className="text-4xl md:text-5xl font-technical font-black text-white/20 select-none whitespace-nowrap"
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            {item.content}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageTrail;
