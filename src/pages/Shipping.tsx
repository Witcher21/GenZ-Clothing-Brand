import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";

const Shipping = () => {
  return (
    <PremiumBackground>
      <Navbar />
      <div className="container px-6 pt-32 pb-32 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Delivery</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 drop-shadow-lg">
            Shipping
          </h1>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.3, duration: 0.8 }}
           className="grid grid-cols-1 md:grid-cols-2 gap-8 z-20 relative text-muted-foreground font-body text-base"
        >
          {/* Card 1 */}
          <div className="group relative overflow-hidden bg-card/60 backdrop-blur-md border border-border p-8 hover:border-primary transition-all duration-500 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <h3 className="text-foreground font-display text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6 relative z-10 border-b border-border/50 pb-4">
               Domestic <span className="text-primary font-body text-sm ml-2">(US & UK)</span>
             </h3>
             
             <ul className="space-y-6 relative z-10">
                <li className="flex justify-between items-center group/item hover:translate-x-2 transition-transform cursor-default">
                  <span className="text-foreground font-bold">Standard</span> 
                  <span className="text-muted-foreground ml-auto pr-4">3-5 Days</span>
                  <span className="font-display text-lg text-primary">$5</span>
                </li>
                <li className="flex justify-between items-center group/item hover:translate-x-2 transition-transform cursor-default">
                  <span className="text-foreground font-bold">Express</span> 
                  <span className="text-muted-foreground ml-auto pr-4">1-2 Days</span>
                  <span className="font-display text-lg text-primary">$15</span>
                </li>
             </ul>

             <div className="mt-8 pt-6 border-t border-border/50 relative z-10">
                <p className="text-foreground/80 font-bold inline-flex items-center gap-2">
                   <span className="text-primary text-xl">✨</span> Standard Delivery FREE over $100
                </p>
             </div>
          </div>
          
          {/* Card 2 */}
          <div className="group relative overflow-hidden bg-card/60 backdrop-blur-md border border-border p-8 hover:border-primary transition-all duration-500 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <h3 className="text-foreground font-display text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6 relative z-10 border-b border-border/50 pb-4">
               International
             </h3>
             
             <ul className="space-y-6 relative z-10">
                <li className="flex justify-between items-center group/item hover:translate-x-2 transition-transform cursor-default">
                  <span className="text-foreground font-bold">Europe</span> 
                  <span className="text-muted-foreground ml-auto pr-4">5-10 Days</span>
                  <span className="font-display text-lg text-primary">$20</span>
                </li>
                <li className="flex justify-between items-center group/item hover:translate-x-2 transition-transform cursor-default">
                  <span className="text-foreground font-bold">Rest of World</span> 
                  <span className="text-muted-foreground ml-auto pr-4">7-14 Days</span>
                  <span className="font-display text-lg text-primary">$30</span>
                </li>
             </ul>

             <div className="mt-8 pt-6 border-t border-border/50 relative z-10">
               <p className="text-xs text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-3">
                 Please note: International orders may be subject to customs duties and taxes upon arrival. These charges are the responsibility of the buyer.
               </p>
             </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </PremiumBackground>
  );
};

export default Shipping;
