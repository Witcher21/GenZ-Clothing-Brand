import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarqueeBanner from "@/components/MarqueeBanner";
import heroImage from "@/assets/hero-model.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const Lookbook = () => {
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
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">SS26 Visuals</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
            Lookbook
          </h1>
          <p className="mt-6 text-muted-foreground font-body text-lg">
            A visual documentation of the SS26 GENZ movement. Raw textures, unapologetic attitude, and the energy of the streets.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {/* Main Hero Shot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-card"
          >
            <img src={heroImage} alt="GENZ Model" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute top-4 left-4 mix-blend-difference text-white">
              <span className="font-display font-bold uppercase tracking-widest text-xl">01</span>
            </div>
            
            {/* Corner accents */}
            <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>

          {/* Shot 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group overflow-hidden bg-card"
          >
             <img src={collection2} alt="Lookbook Shot" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
             <div className="absolute top-4 left-4 mix-blend-difference text-white">
              <span className="font-display font-bold uppercase tracking-widest text-xl">02</span>
            </div>
          </motion.div>

          {/* Shot 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group overflow-hidden bg-card"
          >
             <img src={productShoes} alt="Lookbook Shot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute top-4 left-4 mix-blend-difference text-white">
              <span className="font-display font-bold uppercase tracking-widest text-xl">03</span>
            </div>
          </motion.div>

          {/* Shot 4 (Wide) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative group overflow-hidden bg-card"
          >
             <img src={collection3} alt="Lookbook Shot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute top-4 left-4 mix-blend-difference text-white">
              <span className="font-display font-bold uppercase tracking-widest text-xl">04</span>
            </div>
          </motion.div>

          {/* Shot 5 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group overflow-hidden bg-card"
          >
             <img src={collection1} alt="Lookbook Shot" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
             <div className="absolute top-4 left-4 mix-blend-difference text-white">
              <span className="font-display font-bold uppercase tracking-widest text-xl">05</span>
            </div>
          </motion.div>
          
           {/* Shot 6 */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-1 md:row-span-2 lg:row-span-1 relative group overflow-hidden bg-card"
          >
             <img src={productHoodie} alt="Lookbook Shot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute top-4 left-4 mix-blend-difference text-white">
              <span className="font-display font-bold uppercase tracking-widest text-xl">06</span>
            </div>
            
            <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ margin: "20px" }} />
          </motion.div>
        </div>
      </div>
      
      <MarqueeBanner />
      <Footer />
    </div>
  );
};

export default Lookbook;
