import { motion } from "framer-motion";
import heroImage from "@/assets/hero-model.jpg";
import collection2 from "@/assets/collection-2.jpg";

const LookbookSection = () => {
  return (
    <section id="lookbook" className="py-20 md:py-32 border-t border-border">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-2">Lookbook</p>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Street
              <br />
              <span className="text-gradient">Culture</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Born from concrete jungles and midnight sessions. GenZ is more than fashion — it's a movement. 
              Every stitch carries the energy of a generation that refuses to blend in.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="font-display text-3xl font-black text-primary">50+</p>
                <p className="text-muted-foreground text-sm font-body">Unique Pieces</p>
              </div>
              <div>
                <p className="font-display text-3xl font-black text-primary">12</p>
                <p className="text-muted-foreground text-sm font-body">Countries</p>
              </div>
              <div>
                <p className="font-display text-3xl font-black text-primary">∞</p>
                <p className="text-muted-foreground text-sm font-body">Attitude</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 h-full"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img src={heroImage} alt="Lookbook shot 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-[3/4] overflow-hidden md:mt-12">
              <img src={collection2} alt="Lookbook shot 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
