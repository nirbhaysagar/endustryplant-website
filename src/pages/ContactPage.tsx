import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <PageLayout>
            <section className="pt-32 pb-40 bg-black text-white min-h-[80vh] flex flex-col justify-center">
                <div className="container mx-auto px-6">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-display font-black uppercase tracking-[0.3em] text-sm mb-6"
                    >
                        Connect
                    </motion.p>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.9] tracking-tighter uppercase mb-12"
                    >
                        Start Your <br /> Project.
                    </motion.h1>

                    <div className="grid md:grid-cols-2 gap-12 items-end">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-white/40 font-display uppercase tracking-widest text-[10px] mb-4">Email Us</p>
                            <a
                                href="mailto:endustryplant@gmail.com"
                                className="text-2xl md:text-4xl font-display font-black text-white hover:text-primary transition-colors hover:underline decoration-primary underline-offset-8"
                            >
                                endustryplant@gmail.com
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col gap-2"
                        >
                            <p className="text-white/40 font-display uppercase tracking-widest text-[10px] mb-2">Socials</p>
                            <div className="flex gap-6 text-sm font-display font-black uppercase tracking-widest">
                                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-primary transition-colors">Behance</a>
                                <a href="#" className="hover:text-primary transition-colors">X</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default ContactPage;
