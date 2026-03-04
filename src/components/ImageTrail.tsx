import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailImage {
  id: number;
  x: number;
  y: number;
  src: string;
}

interface ImageTrailProps {
  images: string[];
}

const ImageTrail: React.FC<ImageTrailProps> = ({ images }) => {
  const [trail, setTrail] = useState<TrailImage[]>([]);
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
        const newImage: TrailImage = {
          id: trailCount.current++,
          x,
          y,
          src: images[Math.floor(Math.random() * images.length)],
        };

        setTrail((prev) => [...prev.slice(-15), newImage]);
        lastPos.current = { x, y };

        // Auto-remove image after 0.5 seconds to ensure trail clears faster
        setTimeout(() => {
          setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
        }, 500);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [images]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <AnimatePresence>
        {trail.map((img) => (
          <motion.img
            key={img.id}
            src={img.src}
            initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 20 - 10 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2, transition: { duration: 0.5 } }}
            style={{
              position: "absolute",
              left: img.x,
              top: img.y,
              transform: "translate(-50%, -50%)",
              width: "150px",
              height: "auto",
              pointerEvents: "none",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageTrail;
