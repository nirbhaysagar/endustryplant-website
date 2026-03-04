import PageLayout from "@/components/PageLayout";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";

const ServicesPage = () => {
    return (
        <PageLayout>
            <section className="pt-32 pb-10 bg-secondary text-foreground">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.9] tracking-tighter uppercase mb-8"
                    >
                        Built for <br /> Performance.
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl font-display text-foreground/60 max-w-2xl leading-relaxed"
                    >
                        Our services are engineered to scale your ideas into infrastructure and attention into revenue.
                    </motion.p>
                </div>
            </section>

            <ServicesSection />
        </PageLayout>
    );
};

export default ServicesPage;
