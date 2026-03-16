import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-model.jpg";
import genzLogo from "@/assets/genz-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background page-enter">
      <Navbar />
      <div className="container px-6 pt-24 pb-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center max-w-3xl mx-auto"
        >
          <img src={genzLogo} alt="GENZ" className="h-12 invert mx-auto mb-8" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
            Manifesto
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] relative group"
          >
            <img src={heroImage} alt="The GENZ Movement" className="w-full h-full object-cover grayscale brightness-75" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="font-display text-9xl font-black text-white mix-blend-overlay tracking-tighter opacity-50">GENZ</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-primary font-display text-3xl font-bold uppercase tracking-tighter mb-4">The Origin</h2>
              <p className="text-muted-foreground font-body text-base leading-relaxed">
                Born in 2026 from the concrete of the inner city. GENZ isn't just a label; it's a disruption. We saw an industry that recycled the same exhausted concepts and decided to rewrite the rules.
              </p>
            </div>

            <div>
              <h2 className="text-primary font-display text-3xl font-bold uppercase tracking-tighter mb-4">The Ethos</h2>
              <p className="text-muted-foreground font-body text-base leading-relaxed">
                Unapologetic. Fearless. Raw. We deal in heavyweights, deep textures, and severe silhouettes. Every drop is crafted with an obsessive attention to detail. We don't follow trends; we set the tempo.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <h3 className="font-display text-4xl font-black text-foreground mb-1">0%</h3>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Compromise</p>
                 </div>
                 <div>
                    <h3 className="font-display text-4xl font-black text-foreground mb-1">100%</h3>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">Authentic</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
