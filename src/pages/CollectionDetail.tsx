import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Product3DCard from "@/components/Product3DCard";
import { collections } from "@/data/collections";
import { products } from "@/data/products";

const CollectionDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <Navbar />
        <p className="text-foreground font-display text-2xl mt-20">Collection not found</p>
        <button
          onClick={() => navigate("/collections")}
          className="btn-premium bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-widest"
        >
          Browse Collections
        </button>
      </div>
    );
  }

  const collectionProducts = products.filter((p) => p.collectionId === slug);

  return (
    <div className="min-h-screen bg-background page-enter">
      <Navbar />
      
      {/* Hero Section for Collection */}
      <div className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img src={collection.image} alt={collection.title} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        
        <div className="relative container px-6 pb-20">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/collections")}
            className="btn-outline-premium flex items-center gap-2 text-white/70 hover:text-white text-sm font-body uppercase tracking-widest mb-8 border border-white/20 px-4 py-2"
          >
            <ArrowLeft size={16} /> All Collections
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">{collection.subtitle}</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4">
              {collection.title}
            </h1>
            <p className="text-white/80 font-body text-lg max-w-2xl content-relaxed">
              Experience the {collection.title.toLowerCase()} line. Designed for those who demand premium quality and unapologetic style.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tighter">Collection Pieces</h2>
            <p className="text-muted-foreground font-body text-sm mt-2">{collectionProducts.length} items</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collectionProducts.map((product) => (
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
          {/* Add a generic placeholder block if products are low to maintain layout */}
          {collectionProducts.length < 4 && (
             <div className="aspect-[3/4] bg-card/50 border border-border flex items-center justify-center flex-col text-center p-6">
                <span className="text-muted-foreground opacity-50 font-display text-4xl mb-2">+</span>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">More pieces dropping soon</p>
             </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollectionDetail;
