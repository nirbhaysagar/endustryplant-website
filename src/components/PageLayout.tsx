import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;
