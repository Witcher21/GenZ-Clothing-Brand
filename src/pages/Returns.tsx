import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import { ArrowRight, Box, Mail, Send, ShieldCheck } from "lucide-react";

const Returns = () => {
  const steps = [
    { icon: <Mail className="text-primary" size={24} />, title: "Contact", desc: "Email returns@genz.com with your order number." },
    { icon: <ShieldCheck className="text-primary" size={24} />, title: "Approval", desc: "Print the provided pre-paid shipping label." },
    { icon: <Box className="text-primary" size={24} />, title: "Pack", desc: "Pack the items securely in their original packaging." },
    { icon: <Send className="text-primary" size={24} />, title: "Send", desc: "Drop off at your nearest designated courier location." },
  ];

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
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Policy</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 drop-shadow-lg">
            Returns
          </h1>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto p-4 flex items-center justify-center gap-3">
            We offer a <span className="text-primary font-bold text-xl inline-block px-2 py-1 bg-primary/10 rounded-sm">30-DAY</span> return policy for all unworn and unwashed items with tags attached.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 z-20 relative">
          
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="bg-card/40 backdrop-blur-md border border-border p-8 md:p-12 hover:border-primary transition-all duration-500 rounded-sm shadow-2xl relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
             <h2 className="text-foreground font-display text-3xl font-bold uppercase tracking-widest mb-10 relative z-10">How it works</h2>
             
             <div className="space-y-8 relative z-10">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start group/step">
                     <div className="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-background border border-border group-hover/step:border-primary transition-colors">
                        {step.icon}
                     </div>
                     <div>
                        <h3 className="text-foreground font-display text-lg font-bold uppercase tracking-widest leading-none mb-2">{step.title}</h3>
                        <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </motion.div>

          {/* Refund Details */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="flex flex-col justify-center"
          >
             <div className="border-l-4 border-primary/50 pl-8 space-y-8">
                 <div>
                    <h2 className="text-foreground font-display text-2xl font-bold uppercase tracking-widest mb-4">Refund Processing</h2>
                    <p className="text-muted-foreground font-body text-base leading-relaxed">
                      Once your return is received and inspected by our warehouse team, we will process your refund back to the original method of payment within <span className="text-foreground font-bold">5-7 business days</span>. Please note that original shipping costs are non-refundable.
                    </p>
                 </div>
                 
                 <div>
                    <h2 className="text-foreground font-display text-2xl font-bold uppercase tracking-widest mb-4 text-primary">Need Help?</h2>
                    <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
                      If your item arrived damaged or you received the wrong product, please contact us immediately.
                    </p>
                    <button className="btn-outline-premium border border-border hover:border-primary text-foreground px-8 py-3 text-sm font-body font-bold uppercase tracking-widest flex items-center gap-2 group max-w-max">
                       Contact Support <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </PremiumBackground>
  );
};

export default Returns;
