import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Eye, ArrowRight } from "lucide-react";

interface Product3DCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  tag?: string | null;
  slug: string;
  size?: "large" | "small";
}

const Product3DCard = ({ name, category, price, image, tag, slug, size = "small" }: Product3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxTilt = 15;
    const rY = (mouseX / (rect.width / 2)) * maxTilt;
    const rX = -(mouseY / (rect.height / 2)) * maxTilt;

    setRotateX(rX);
    setRotateY(rY);
    setGlareX(((e.clientX - rect.left) / rect.width) * 100);
    setGlareY(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={() => navigate(`/product/${slug}`)}
    >
      <div
        className="relative overflow-hidden bg-card transition-all duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
      >
        {/* Product image */}
        <div className={`${size === "large" ? "aspect-square" : "aspect-[3/4]"} overflow-hidden relative`}>
          <img
            src={image}
            alt={`GENZ ${name}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* 3D Glare overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(173, 255, 47, 0.12) 0%, transparent 60%)`,
            }}
          />

          {/* GENZ Watermark - 3D floating */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ transform: "translateZ(40px)" }}
          >
            <span className="text-6xl font-display font-black text-white/[0.06] tracking-tighter select-none">
              GENZ
            </span>
          </div>
        </div>

        {/* Tag badge */}
        {tag && (
          <div className="absolute top-3 left-3" style={{ transform: "translateZ(30px)" }}>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-primary text-primary-foreground px-3 py-1 text-[9px] font-body font-bold uppercase tracking-widest inline-flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
              {tag}
            </motion.span>
          </div>
        )}

        {/* Product info (moved above action buttons) */}
        {size === "large" ? (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 to-transparent flex flex-col justify-end min-h-[120px] pb-16">
            <p className="text-primary text-[10px] font-body uppercase tracking-[0.3em] mb-1">{category}</p>
            <h3 className="font-display text-2xl font-bold">{name}</h3>
            <p className="text-muted-foreground text-sm font-body">{price}</p>
          </div>
        ) : (
          <div className="p-4 bg-card relative z-[1] min-h-[90px] flex flex-col justify-end">
            <p className="text-primary text-[9px] font-body uppercase tracking-[0.2em] mb-0.5">{category}</p>
            <h3 className="font-display text-sm font-bold truncate">{name}</h3>
            <div className="flex items-center justify-between mt-1">
              <p className="text-muted-foreground text-xs font-body">{price}</p>
              <ArrowRight size={12} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0" />
            </div>
          </div>
        )}

        {/* Hover action buttons */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
          <div className="flex gap-0 w-full h-12">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${slug}`);
              }}
              className="group/btn flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-body font-bold uppercase tracking-widest relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
              <Eye size={14} className="relative z-10" />
              <span className="relative z-10">Quick View</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="group/cart flex items-center justify-center gap-2 bg-foreground text-background px-5 text-xs font-body font-bold uppercase tracking-widest relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-primary translate-y-[100%] group-hover/cart:translate-y-0 transition-transform duration-300 ease-out" />
              <ShoppingBag size={14} className="relative z-10 group-hover/cart:text-primary-foreground transition-colors" />
            </button>
          </div>
        </div>
        
        {/* Glow border */}
        <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none z-30" />
        
        {/* Corner accents on hover */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none transform -translate-y-12 group-hover:-translate-y-12" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none transform -translate-y-12 group-hover:-translate-y-12" />
      </div>
    </motion.div>
  );
};

export default Product3DCard;
