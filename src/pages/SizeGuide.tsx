import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import productHoodie from "@/assets/product-hoodie.png";

const SizeGuide = () => {
  return (
    <PremiumBackground>
      <Navbar />
      <div className="container px-6 pt-32 pb-32 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Measurements</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 drop-shadow-lg">
            Size Guide
          </h1>
          
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto border border-primary/20 bg-card/60 p-4 rounded-sm">
            <span className="text-primary font-bold">Note:</span> Our garments are designated for an oversized, boxy fit. If you prefer a more standard fitted look, we recommend sizing down. All measurements are in inches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* The Fitting Graphic */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-1 hidden lg:flex relative justify-center items-center h-[500px]"
            >
                <div className="absolute inset-0 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />
                <img src={productHoodie} alt="Hoodie Diagram" className="w-full relative z-10 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] filter grayscale opacity-80" />
                
                {/* Measurement lines */}
                <div className="absolute top-[25%] left-[20%] right-[20%] h-[2px] border-b border-dashed border-primary/70 pointer-events-none z-20 flex items-center justify-center">
                   <span className="bg-background px-2 text-xs text-primary font-body uppercase tracking-widest translate-y-[-10px]">Shoulder</span>
                </div>
                <div className="absolute top-[45%] left-[25%] right-[25%] h-[2px] border-b border-dashed border-primary/70 pointer-events-none z-20 flex items-center justify-center">
                   <span className="bg-background px-2 text-xs text-primary font-body uppercase tracking-widest translate-y-[-10px]">Chest</span>
                </div>
                <div className="absolute top-[20%] bottom-[10%] left-[50%] w-[2px] border-r border-dashed border-white/50 pointer-events-none z-20 flex items-center justify-center">
                   <span className="bg-background px-2 text-xs text-white font-body uppercase tracking-widest -rotate-90 translate-x-[-15px]">Length</span>
                </div>
            </motion.div>

            {/* The Data Table */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-2 w-full"
            >
              <div className="overflow-x-auto border border-border bg-card/40 backdrop-blur-md shadow-2xl relative z-20">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-background/80">
                      <th className="p-6 border-b border-r border-border font-display uppercase tracking-widest text-primary font-bold text-lg">Size</th>
                      <th className="p-6 border-b border-r border-border font-display uppercase tracking-widest text-foreground font-bold">Chest</th>
                      <th className="p-6 border-b border-r border-border font-display uppercase tracking-widest text-foreground font-bold">Length</th>
                      <th className="p-6 border-b border-border font-display uppercase tracking-widest text-foreground font-bold">Shoulders</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground font-body">
                    <tr className="hover:bg-primary/5 transition-colors group cursor-crosshair">
                      <td className="p-6 border-b border-r border-border text-foreground font-bold text-xl group-hover:text-primary transition-colors">S</td>
                      <td className="p-6 border-b border-r border-border">42"</td>
                      <td className="p-6 border-b border-r border-border">27"</td>
                      <td className="p-6 border-b border-border">20"</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group cursor-crosshair">
                      <td className="p-6 border-b border-r border-border text-foreground font-bold text-xl group-hover:text-primary transition-colors">M</td>
                      <td className="p-6 border-b border-r border-border">44"</td>
                      <td className="p-6 border-b border-r border-border">28"</td>
                      <td className="p-6 border-b border-border">21"</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group cursor-crosshair">
                      <td className="p-6 border-b border-r border-border text-foreground font-bold text-xl group-hover:text-primary transition-colors">L</td>
                      <td className="p-6 border-b border-r border-border">46"</td>
                      <td className="p-6 border-b border-r border-border">29"</td>
                      <td className="p-6 border-b border-border">22"</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group cursor-crosshair">
                      <td className="p-6 border-r border-border text-foreground font-bold text-xl group-hover:text-primary transition-colors">XL</td>
                      <td className="p-6 border-r border-border">48"</td>
                      <td className="p-6 border-r border-border">30"</td>
                      <td className="p-6">23"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
            
        </div>
      </div>
      <Footer />
    </PremiumBackground>
  );
};

export default SizeGuide;
