import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-display text-xl font-black uppercase tracking-tighter text-white">
          Endustry Plant
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-technical text-[10px] uppercase font-black tracking-widest text-white hover:text-primary transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="font-technical text-[10px] uppercase font-black tracking-widest bg-primary text-white px-6 py-2.5 hover:scale-105 transition-transform rounded-full"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-lg uppercase font-black tracking-tighter text-white border-b border-white/5 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="font-technical text-xs uppercase font-black tracking-widest bg-primary text-white px-5 py-4 text-center hover:opacity-90 transition-opacity rounded-full mt-4"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
