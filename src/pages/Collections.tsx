import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { collections } from "@/data/collections";

const Collections = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background page-enter">
      <Navbar />
      <div className="container px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-2">SS26 Season</p>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Collections
          </h1>
        </motion.div>

        <div className="space-y-16">
          {collections.map((col, i) => (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div
                className={`group relative overflow-hidden cursor-pointer ${i % 2 === 1 ? "md:order-2" : ""}`}
                onClick={() => navigate(`/collection/${col.slug}`)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-8xl font-display font-black text-white/[0.06] tracking-tighter select-none">GENZ</span>
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-primary font-body text-xs uppercase tracking-[0.3em] mb-2">{col.subtitle}</p>
                <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">{col.title}</h2>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{col.description}</p>
                <div className="flex items-center gap-6 mb-8">
                  <div>
                    <p className="font-display text-2xl font-black text-primary">{col.itemCount}</p>
                    <p className="text-muted-foreground text-xs font-body">Pieces</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-black text-primary">{col.price.replace("From ", "")}</p>
                    <p className="text-muted-foreground text-xs font-body">Starting</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/collection/${col.slug}`)}
                  className="btn-premium bg-primary text-primary-foreground px-8 py-4 text-sm font-body font-bold uppercase tracking-widest inline-flex items-center gap-2"
                >
                  Explore Collection <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
