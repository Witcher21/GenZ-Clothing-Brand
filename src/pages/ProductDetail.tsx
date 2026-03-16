import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Heart, Share2, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTrousers from "@/assets/product-trousers.jpg";
import productShorts from "@/assets/product-shorts.jpg";
import productSandals from "@/assets/product-sandals.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
import productCap from "@/assets/product-cap.jpg";

import { products } from "@/data/products";

// Helper to provide extended details for the product detail page
const getProductDetails = (productSlug: string) => {
  const baseProduct = products.find(p => p.slug === productSlug);
  if (!baseProduct) return null;

  return {
    ...baseProduct,
    description: baseProduct.category === "Shoes" 
      ? "Limited run, unlimited style. Chunky sole platform with premium leather upper and neon accents. Hand-finished GENZ branding. Built for those who demand more from their footwear."
      : baseProduct.category === "Hoodies"
      ? "The ultimate oversized hoodie. 380gsm premium cotton with brushed fleece interior. Dropped shoulders, kangaroo pocket, and the signature GENZ embroidery. Built for those who move different."
      : baseProduct.category === "T-Shirts"
      ? "Heavyweight 250gsm cotton tee with bold GENZ graphics. Oversized boxy fit, ribbed crew neck, and double-stitched seams for durability."
      : "Utility meets style. Premium fabrics, signature GENZ branding, and a fit designed for the modern street movement.",
    sizes: baseProduct.category === "Shoes" || baseProduct.category === "Sandals"
      ? ["6", "7", "8", "9", "10", "11", "12"]
      : baseProduct.category === "Accessories"
      ? ["One Size"]
      : ["XS", "S", "M", "L", "XL", "XXL"],
    colors: baseProduct.category === "Neon Drop" ? ["Neon Green", "Black", "Charcoal"] : ["Black", "White", "Grey", "Volt"],
  };
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductDetails(slug || "");
  const imgRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center flex-col gap-6">
        <Navbar />
        <p className="text-foreground font-display text-2xl mt-20">Product not found</p>
        <button onClick={() => navigate("/products")} className="btn-premium bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-widest">
          Browse Products
        </button>
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const rY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 15;
    const rX = -((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 15;
    setRotateX(rX);
    setRotateY(rY);
  };

  return (
    <div className="min-h-screen bg-background page-enter">
      <Navbar />
      <div className="container px-6 pt-24 pb-20">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="btn-outline-premium flex items-center gap-2 text-muted-foreground text-sm font-body uppercase tracking-widest mb-8 border border-border px-4 py-2"
        >
          <ArrowLeft size={16} /> Back
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* 3D Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            ref={imgRef}
            className="relative cursor-crosshair"
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { setRotateX(0); setRotateY(0); setIsHovered(false); }}
            onMouseEnter={() => setIsHovered(true)}
          >
            <div
              className="relative overflow-hidden bg-card"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
                transformStyle: "preserve-3d",
                transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
                // Disable tilt on small screens for better UX
                ...(typeof window !== 'undefined' && window.innerWidth < 768 ? { transform: 'none' } : {})
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              {product.tag && (
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-[10px] font-body font-bold uppercase tracking-widest inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                    {product.tag}
                  </span>
                </div>
              )}
              {/* GENZ watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
                <span className="text-8xl font-display font-black text-white tracking-tighter select-none">GENZ</span>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0 }} />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0 }} />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0 }} />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0 }} />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-2">{product.category}</p>
            <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-primary">{product.price}</span>
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-muted-foreground text-xs font-body">(128 reviews)</span>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Size selector */}
            <div className="mb-6">
              <p className="font-display text-sm font-bold uppercase tracking-widest mb-3">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm font-body border transition-all duration-200 ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color selector */}
            <div className="mb-8">
              <p className="font-display text-sm font-bold uppercase tracking-widest mb-3">Color</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm font-body border transition-all duration-200 ${
                      selectedColor === color
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button className="btn-premium flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 text-sm font-body font-bold uppercase tracking-widest order-1 sm:order-none">
                <ShoppingBag size={18} />
                Add to Cart
              </button>
              <div className="flex gap-3 order-2 sm:order-none">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`btn-outline-premium flex-1 sm:flex-none border px-6 py-4 transition-all duration-300 ${
                    liked ? "border-red-500 text-red-500" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  <Heart size={18} fill={liked ? "currentColor" : "none"} />
                </button>
                <button className="btn-outline-premium flex-1 sm:flex-none border border-border px-6 py-4 text-muted-foreground">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 pt-8 border-t border-border">
              {[
                { icon: Truck, label: "Free Shipping", sub: "Orders over $100" },
                { icon: Shield, label: "Authenticity", sub: "100% Genuine" },
                { icon: RotateCcw, label: "Easy Returns", sub: "30-day policy" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-1">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center sm:bg-transparent">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold">{label}</p>
                    <p className="text-[10px] text-muted-foreground font-body">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
