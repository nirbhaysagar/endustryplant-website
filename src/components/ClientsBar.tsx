import { motion } from "framer-motion";

const clients = ["TechFlow", "NovaBuild", "Meridian", "Cloudshift", "Apex Labs", "VaultCore"];

const ClientsBar = () => {
  return (
    <section className="border-y border-border py-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-8"
        >
          {clients.map((client) => (
            <span
              key={client}
              className="font-display text-base md:text-lg font-bold uppercase tracking-widest text-muted-foreground"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsBar;
