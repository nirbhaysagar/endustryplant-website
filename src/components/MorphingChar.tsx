import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MorphingCharProps {
    char: string;
    className?: string;
}

const morphPaths: Record<string, { initial: string; hover: string }> = {
    A: {
        initial: "M 10 90 L 50 10 L 90 90 M 30 60 L 70 60",
        hover: "M 10 90 C 10 40 90 40 90 90 M 30 65 L 70 65",
    },
    O: {
        initial: "M 50 10 C 25 10 10 30 10 50 C 10 70 25 90 50 90 C 75 90 90 70 90 50 C 90 30 75 10 50 10 Z",
        hover: "M 50 15 C 20 15 5 35 5 50 C 5 65 20 85 50 85 C 80 85 95 65 95 50 C 95 35 80 15 50 15 Z M 50 35 C 40 35 35 45 35 50 C 35 55 40 65 50 65 C 60 65 65 55 65 50 C 65 45 60 35 50 35 Z",
    },
    G: {
        initial: "M 90 30 C 80 15 65 10 50 10 C 25 10 10 30 10 50 C 10 70 25 90 50 90 C 70 90 85 80 90 60 L 50 60",
        hover: "M 95 25 C 85 10 70 5 50 5 C 20 5 5 25 5 50 C 5 75 20 95 50 95 C 75 95 90 85 95 55 L 45 55"
    },
    Y: {
        initial: "M 10 10 L 50 50 L 90 10 M 50 50 L 50 90",
        hover: "M 10 10 C 10 50 90 50 90 10 M 50 45 L 50 95",
    },
    R: {
        initial: "M 20 90 L 20 10 L 70 10 C 85 10 85 40 70 40 L 20 40 M 45 40 L 80 90",
        hover: "M 20 90 L 20 10 L 75 10 C 95 10 95 45 75 45 L 20 45 M 50 45 L 90 95",
    },
    P: {
        initial: "M 20 90 L 20 10 L 70 10 C 85 10 85 50 70 50 L 20 50",
        hover: "M 25 95 L 25 5 L 80 5 C 100 5 100 55 80 55 L 25 55",
    },
    L: {
        initial: "M 20 10 L 20 90 L 80 90",
        hover: "M 30 5 L 10 95 L 90 85",
    },
    N: {
        initial: "M 20 90 L 20 10 L 80 90 L 80 10",
        hover: "M 10 90 L 15 5 L 85 95 L 90 10",
    },
    T: {
        initial: "M 10 10 L 90 10 M 50 10 L 50 90",
        hover: "M 5 20 L 95 20 M 50 20 L 50 100",
    },
    I: {
        initial: "M 50 10 L 50 90 M 20 10 L 80 10 M 20 90 L 80 90",
        hover: "M 50 5 L 50 95 M 30 5 L 70 5 M 30 95 L 70 95",
    },
    S: {
        initial: "M 80 20 C 80 10 20 10 20 30 C 20 50 80 50 80 70 C 80 90 20 90 20 80",
        hover: "M 90 15 C 90 5 10 5 10 35 C 10 55 90 55 90 75 C 90 95 10 95 10 85",
    },
    D: {
        initial: "M 20 10 L 20 90 L 50 90 C 80 90 80 10 50 10 Z",
        hover: "M 20 5 L 20 95 L 60 95 C 95 95 95 5 60 5 Z",
    },
    U: {
        initial: "M 20 10 L 20 70 C 20 90 80 90 80 70 L 80 10",
        hover: "M 10 5 L 10 75 C 10 100 90 100 90 75 L 90 5",
    }
};

const MorphingChar: React.FC<MorphingCharProps> = ({ char, className }) => {
    const pathRef = useRef<SVGPathElement>(null);
    const paths = morphPaths[char.toUpperCase()];

    useEffect(() => {
        if (!paths || !pathRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(pathRef.current, {
                attr: { d: paths.hover },
                duration: 2 + Math.random(), // Slower, more organic speed
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                delay: Math.random() * 2, // Stagger them
            });
        }, pathRef);

        return () => ctx.revert();
    }, [paths]);

    if (!paths) {
        return <span className={className}>{char}</span>;
    }

    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            style={{ display: "inline-block", verticalAlign: "middle", height: "0.8em", width: "0.8em" }}
        >
            <path
                ref={pathRef}
                d={paths.initial}
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default MorphingChar;
