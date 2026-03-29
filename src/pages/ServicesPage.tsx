import PageLayout from "@/components/PageLayout";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";

const ServicesPage = () => {
    return (
        <PageLayout>
            <section className="pt-32 pb-10 bg-[#050505] text-white relative flex flex-col items-center">
                {/* Ambient Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.9] tracking-tighter mb-8 lowercase"
                    >
                        engineering <br /> <span className="text-primary italic">protocols</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl font-body text-white/50 max-w-2xl leading-relaxed lowercase"
                    >
                        our systematic deployments are structured to scale your infrastructure and serialize attention into revenue.
                    </motion.p>
                </div>
            </section>

            <ServicesSection />
        </PageLayout>
    );
};

export default ServicesPage;
