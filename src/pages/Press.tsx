import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import { DownloadCloud, Mail } from "lucide-react";

const Press = () => {
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
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Media</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 drop-shadow-lg">
            Press
          </h1>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto flex items-center justify-center gap-3">
             <Mail size={18} className="text-primary" /> press@genz.com
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 z-20 relative">
          
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="bg-card/40 backdrop-blur-md border border-border p-12 text-center hover:border-primary transition-all duration-500 rounded-sm shadow-2xl relative overflow-hidden group flex flex-col items-center justify-center"
          >
             <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
               <DownloadCloud className="text-primary" size={32} />
             </div>
             <h3 className="text-foreground font-display text-3xl font-bold uppercase tracking-widest mb-4">Media Kit</h3>
             <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8 max-w-xs mx-auto">
               Download our high-res logos, brand guidelines, and official SS26 campaign imagery.
             </p>
             <button className="btn-premium border border-border bg-foreground text-background font-body font-bold uppercase tracking-widest text-xs px-8 py-4 w-full">
                Download ZIP (24MB)
             </button>
             
             {/* Hover sweep element */}
             <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ margin: "10px" }} />
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="bg-card/40 backdrop-blur-md border border-border p-12 hover:border-primary transition-all duration-500 rounded-sm shadow-2xl relative overflow-hidden group flex flex-col justify-center"
          >
             <h3 className="text-foreground font-display text-3xl font-bold uppercase tracking-widest mb-6 border-l-4 border-primary pl-4">Inquiries</h3>
             
             <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                For media requests, styling pulls, and brand partnerships, please reach out to our communications team. Due to high volume, expect a response within 48 hours.
             </p>
             
             <div className="space-y-4 font-body text-sm">
                <div className="flex justify-between border-b border-border/50 pb-2">
                   <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">General Press</span>
                   <span className="text-foreground font-semibold hover:text-primary transition-colors cursor-pointer">press@genz.com</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                   <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Styling & VIP</span>
                   <span className="text-foreground font-semibold hover:text-primary transition-colors cursor-pointer">vip@genz.com</span>
                </div>
                <div className="flex justify-between border-border/50 pb-2">
                   <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Partnerships</span>
                   <span className="text-foreground font-semibold hover:text-primary transition-colors cursor-pointer">collab@genz.com</span>
                </div>
             </div>

             {/* Hover sweep element */}
             <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ margin: "10px" }} />
          </motion.div>

        </div>
      </div>
      <Footer />
    </PremiumBackground>
  );
};

export default Press;
