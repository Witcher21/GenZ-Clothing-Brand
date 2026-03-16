import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import collection1 from "@/assets/collection-1.jpg";

const Careers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <PremiumBackground>
      <Navbar />
      <div className="container px-6 pt-32 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-20 flex flex-col justify-center"
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Join The Collective</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 drop-shadow-lg">
              Careers
            </h1>
            
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-12 max-w-lg border-l-2 border-primary/30 pl-4 py-2">
              We are constantly seeking visionaries to join our ranks. If you possess the drive, the skill, and an unapologetic attitude, there is a place for you at GENZ.
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
               {[{ title: "Senior Menswear Designer", loc: "London, UK", type: "Full Time" },
                 { title: "E-Commerce Manager", loc: "Remote", type: "Full Time" },
                 { title: "Brand Strategist", loc: "New York, USA", type: "Contract" },
               ].map((job, i) => (
               <motion.div key={i} variants={itemVariants} className="group relative overflow-hidden bg-card/60 backdrop-blur-sm border border-border p-8 hover:border-primary transition-all duration-300 cursor-pointer shadow-lg outline-none">
                  {/* Sweep hover effect */}
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div>
                         <h3 className="text-foreground font-display text-2xl font-bold uppercase tracking-widest group-hover:text-primary transition-colors">{job.title}</h3>
                         <div className="flex gap-3 text-muted-foreground font-body text-sm mt-3">
                             <span className="bg-background px-3 py-1 uppercase tracking-widest text-[10px]">{job.loc}</span>
                             <span className="bg-background px-3 py-1 uppercase tracking-widest text-[10px]">{job.type}</span>
                         </div>
                     </div>
                     
                     <div className="flex-shrink-0">
                         <button className="btn-outline-premium border border-border px-8 py-3 text-sm font-body font-bold uppercase tracking-widest text-foreground group-hover:border-primary group-hover:text-primary">
                             Apply
                         </button>
                     </div>
                  </div>
               </motion.div>
               ))}
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center relative h-full min-h-[600px]">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1.2, delay: 0.2 }}
               className="relative z-10 w-4/5 ml-auto"
             >
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform -translate-x-10 translate-y-10" />
                <img src={collection1} alt="GENZ Culture" className="w-full h-auto object-cover grayscale brightness-75 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" />
                
                <div className="absolute inset-0 flex items-center justify-center mix-blend-overlay">
                   <span className="font-display font-black text-[12rem] text-white opacity-20 transform -rotate-90 origin-center whitespace-nowrap translate-x-[40%] translate-y-[20%]">GENZ</span>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-8 -left-12 bg-card p-6 border-l-2 border-primary shadow-2xl backdrop-blur-md"
                >
                    <p className="font-display font-bold uppercase tracking-widest text-foreground">Culture over everything</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">Join the movement</p>
                </motion.div>
             </motion.div>
          </div>
          
        </div>
      </div>
      <Footer />
    </PremiumBackground>
  );
};

export default Careers;
