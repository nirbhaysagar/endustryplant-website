import MorphingChar from "./MorphingChar";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-6">
      <div className="bg-black rounded-t-[30px] md:rounded-t-[50px] pt-1 border-t-[8px] border-primary relative overflow-hidden text-white font-display">
        <div className="container mx-auto px-6 pt-12 pb-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 relative">
            {/* Top Row - Statement */}
            <div className="max-w-md">
              <p className="text-white text-sm leading-relaxed font-display">
                It's not client and supplier. It's equals; partners. Teamwork – smooth, enjoyable
                and incredibly productive. And from experience, the results are so much better for it.
              </p>
            </div>

            {/* "Let's Work" Badge - Standardized to Hero Style */}
            <Link to="/contact" className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse cursor-pointer hover:scale-110 transition-transform border border-white/20">
              <p className="text-white text-[9px] font-black uppercase text-center leading-tight font-display tracking-widest">
                Let's<br />Work
              </p>
            </Link>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-12 mb-16">
            <div>
              <h4 className="text-[10px] uppercase font-black tracking-widest text-white mb-6 font-display underline decoration-primary underline-offset-8">Studio</h4>
              <ul className="space-y-2 text-white text-xs md:text-sm font-bold font-display uppercase tracking-wider">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/projects" className="hover:text-primary transition-colors">Work</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Journal</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h4 className="text-[10px] uppercase font-black tracking-widest text-white mb-6 font-display underline decoration-primary underline-offset-8">Address</h4>
              <div className="text-white text-xs md:text-sm font-bold font-display uppercase tracking-wider space-y-1">
                <p>Noida, India</p>
                <div className="pt-4 flex flex-col gap-1">
                  <p>+91 73021 64841</p>
                  <p>+91 95486 91732</p>
                </div>
                <p className="pt-4 font-black text-primary italic lowercase tracking-normal">endustryplant@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Massive Brand Typography - Simplified */}
          <h2 className="text-[10vw] font-display font-black border-t border-white/10 pt-16 pb-12 px-4 select-none pointer-events-none leading-[0.8] flex justify-center text-center whitespace-nowrap">
            <span className="text-white">
              ENDUSTRY PLANT
            </span>
          </h2>

          {/* Bottom Bar */}
          <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-[8px] uppercase tracking-widest font-black text-white font-display">
            <p>© 2024 Endustry Studio Limited</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <span>*</span>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
