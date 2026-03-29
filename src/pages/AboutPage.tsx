import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import ClientsBar from "@/components/ClientsBar";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <PageLayout>
      <section className="pt-32 pb-12 bg-black text-white relative">
        {/* Ambient Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] md:text-[8vw] font-display font-black leading-[0.9] tracking-tighter mb-8 lowercase"
          >
            the engineering <br /> <span className="text-primary italic">forge.</span>
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12"
          >
            <div className="space-y-6">
              <p className="font-technical text-[10px] tracking-[0.5em] text-primary font-black uppercase">Our Identity</p>
              <p className="text-xl md:text-2xl font-body font-medium leading-relaxed lowercase text-white/80">
                we are a specialized engineering forge and product thinkers. we do not build websites—we architect deterministic growth systems that leverage deep LLM orchestration and zero-latency frontend deployment.
              </p>
            </div>
            <div className="space-y-6">
              <p className="font-technical text-[10px] tracking-[0.5em] text-white/40 font-black uppercase">The Philosophy</p>
              <p className="text-sm md:text-base font-body leading-relaxed lowercase text-white/40">
                the era of generic "ai features" is over. today's winners move from probabilistic guesses to deterministic execution. our stack is built on inference engines and massive scalability protocols to ensure that every interaction is hardened and every outcome is tracked.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5">
          <div className="space-y-2">
            <p className="text-4xl font-display font-black tracking-tighter text-white">142ms</p>
            <p className="text-[10px] font-technical tracking-widest text-white/30 uppercase font-black">Avg Inference Latency</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-display font-black tracking-tighter text-white">99.9%</p>
            <p className="text-[10px] font-technical tracking-widest text-white/30 uppercase font-black">Uptime Commitment</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-display font-black tracking-tighter text-white">24/7</p>
            <p className="text-[10px] font-technical tracking-widest text-white/30 uppercase font-black">Active Monitoring</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-display font-black tracking-tighter text-white">0%</p>
            <p className="text-[10px] font-technical tracking-widest text-white/30 uppercase font-black">Generic AI Fluff</p>
          </div>
        </div>
      </div>

      <AboutSection />
      <ClientsBar />
        </PageLayout>
    );
};

export default AboutPage;
