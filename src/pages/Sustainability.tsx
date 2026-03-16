import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import productHoodie from "@/assets/product-hoodie.png";
import productTrousers from "@/assets/product-trousers.png";

const Sustainability = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yImage1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);

  return (
    <PremiumBackground>
      <Navbar />
      <div ref={containerRef} className="container px-6 pt-32 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl z-20"
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Our Commitment</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-12 drop-shadow-lg">
              Sustain<br/>ability
            </h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-12 text-muted-foreground font-body text-base leading-loose"
            >
              <p className="text-xl text-foreground/90 font-medium">
                At GENZ, we believe that streetwear shouldn't cost the earth. We are continuously working towards minimizing our environmental footprint while maintaining the uncompromised quality and attitude of our garments.
              </p>
              
              <div className="group border-l-2 border-primary/30 hover:border-primary pl-6 transition-colors duration-500">
                <h2 className="text-foreground font-display text-2xl font-bold uppercase tracking-widest mb-3">Materials</h2>
                <p>
                  By 2028, our goal is to source 100% of our core fabrics from recycled or sustainably grown materials. Currently, all our heavyweight cotton is proudly sourced from certified organic farms, ensuring zero toxic pesticides are introduced into the environment.
                </p>
              </div>
              
              <div className="group border-l-2 border-primary/30 hover:border-primary pl-6 transition-colors duration-500">
                <h2 className="text-foreground font-display text-2xl font-bold uppercase tracking-widest mb-3">Manufacturing</h2>
                <p>
                  We pattern and cut our garments dynamically to reduce fabric waste by 30%. Our partnering factories utilize closed-loop water systems for our dyeing processes, drastically cutting down on water contamination and waste.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Mockup Column */}
          <div className="hidden lg:block relative h-[800px] w-full mt-[-50px]">
             {/* Abstract glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

             {/* Parallax Floating Product 1 */}
             <motion.div 
                style={{ y: yImage1 }}
                className="absolute top-[10%] left-[10%] w-[350px] z-10"
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
             >
                <img src={productHoodie} alt="Organic Cotton Hoodie Mockup" className="w-full h-auto drop-shadow-2xl" />
                <div className="absolute -bottom-8 -left-12 bg-card/80 backdrop-blur-md border border-border p-4">
                   <p className="font-display font-bold uppercase text-xs text-primary mb-1">Raw Material</p>
                   <p className="font-body text-sm text-foreground">380gsm Organic Heavyweight</p>
                </div>
             </motion.div>

             {/* Parallax Floating Product 2 */}
             <motion.div 
                style={{ y: yImage2 }}
                className="absolute top-[40%] right-[-5%] w-[320px] z-20"
                initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                animate={{ opacity: 1, scale: 1, rotate: 10 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
             >
                <img src={productTrousers} alt="Recycled Cargo Trousers Mockup" className="w-full h-auto drop-shadow-2xl" />
                <div className="absolute top-1/2 -right-8 bg-card/80 backdrop-blur-md border border-border p-4">
                   <p className="font-display font-bold uppercase text-xs text-primary mb-1">Zero Waste</p>
                   <p className="font-body text-sm text-foreground">Recycled Twill Nylon</p>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </PremiumBackground>
  );
};

export default Sustainability;
