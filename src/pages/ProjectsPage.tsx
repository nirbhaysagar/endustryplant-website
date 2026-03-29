import PageLayout from "@/components/PageLayout";
import ProjectsSection from "@/components/ProjectsSection";
import { motion } from "framer-motion";

const ProjectsPage = () => {
    return (
        <PageLayout>
            <section className="pt-32 pb-0 bg-black text-white">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.9] tracking-tighter mb-8"
                    >
                        our recent <br /> projects
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl font-display text-white/60 max-w-2xl leading-relaxed"
                    >
                        a curated showcase of infrastructure-grade digital products and high-performance platforms.
                    </motion.p>
                </div>
            </section>

            <div className="-mt-10">
                <ProjectsSection />
            </div>
        </PageLayout>
    );
};

export default ProjectsPage;
