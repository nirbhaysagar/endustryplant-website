import PageLayout from "@/components/PageLayout";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";

const FAQPage = () => {
    return (
        <PageLayout>
            <section className="pt-32 pb-10 bg-white text-black">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.9] tracking-tighter uppercase mb-8"
                    >
                        Questions & <br /> Answers.
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl font-display text-black/60 max-w-2xl leading-relaxed"
                    >
                        Everything you need to know about our process, partnership, and delivery.
                    </motion.p>
                </div>
            </section>

            <FAQSection />
        </PageLayout>
    );
};

export default FAQPage;
