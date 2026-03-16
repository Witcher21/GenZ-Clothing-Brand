import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Product3DCard from "@/components/Product3DCard";
import { products } from "@/data/products";

const CategoryDetail = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Normalize category param for matching our data
  const normalizedCategory = category?.toLowerCase();
  
  const categoryProducts = products.filter(
    (p) => 
      p.category.toLowerCase() === normalizedCategory || 
      // specific mapping since we call them Accessories in data but Caps in the footer
      (normalizedCategory === 'caps' && p.category.toLowerCase() === 'accessories')
  );

  const displayTitle = category?.replace('-', ' ');

  if (!categoryProducts.length) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <Navbar />
        <p className="text-foreground font-display text-2xl mt-20">Category not found</p>
        <button
          onClick={() => navigate("/products")}
          className="btn-premium bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-widest"
        >
          Browse All Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background page-enter">
      <Navbar />
      
      <div className="container px-6 pt-32 pb-20">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/products")}
          className="btn-outline-premium flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body uppercase tracking-widest mb-12 border border-border px-4 py-2 w-max"
        >
          <ArrowLeft size={16} /> All Products
        </motion.button>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Category Focus</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter drop-shadow-lg">
            {displayTitle}
          </h1>
          <p className="text-muted-foreground font-body text-base mt-6 max-w-xl">
            Explore our curated selection of {displayTitle}. Premium quality engineered for the fearless movement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <Product3DCard
              key={product.slug}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              tag={product.tag}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
