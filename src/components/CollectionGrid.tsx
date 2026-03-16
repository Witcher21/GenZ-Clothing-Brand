import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";

const Collection3DCard = ({ item, i }: { item: typeof collections[0]; i: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rY = ((e.clientX - centerX) / (rect.width / 2)) * 12;
    const rX = -((e.clientY - centerY) / (rect.height / 2)) * 12;
    setRotateX(rX);
    setRotateY(rY);
  };

  return (
    <motion.div
      ref={cardRef}
      key={item.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      className="group relative cursor-pointer"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setRotateX(0); setRotateY(0); setIsHovered(false); }}
      onMouseEnter={() => setIsHovered(true)}
      onClick={() => navigate(`/collection/${item.slug}`)}
    >
      <div
        className="relative overflow-hidden"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.03 : 1})`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        
        {/* GENZ watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-7xl font-display font-black text-white/[0.05] tracking-tighter select-none">GENZ</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-primary text-xs font-body uppercase tracking-[0.2em] mb-1">{item.subtitle}</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">{item.title}</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="text-muted-foreground text-sm font-body">{item.price}</p>
            <span className="flex items-center gap-1 text-primary text-xs font-body uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
              Explore <ArrowRight size={12} />
            </span>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
      </div>
    </motion.div>
  );
};

const CollectionGrid = () => {
  return (
    <section id="collections" className="py-20 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-2">What's New</p>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Collections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((item, i) => (
            <Collection3DCard key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
