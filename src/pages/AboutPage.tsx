import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import ClientsBar from "@/components/ClientsBar";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <PageLayout>
            <section className="pt-32 pb-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.9] tracking-tighter uppercase mb-8"
                    >
                        We Are <br /> Endustry Plant.
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl font-display text-white/60 max-w-2xl leading-relaxed"
                    >
                        A high-performance digital studio engineering growth systems for the next generation of founders.
                    </motion.p>
                </div>
            </section>

            <AboutSection />
            <ClientsBar />
        </PageLayout>
    );
};

export default AboutPage;
