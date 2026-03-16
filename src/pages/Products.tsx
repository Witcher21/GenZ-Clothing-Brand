import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Product3DCard from "@/components/Product3DCard";
import { products as allProducts } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-background page-enter">
      <Navbar />
      <div className="container px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-2">Full Catalog</p>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter">
            All Products
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-4 max-w-lg">
            Every piece branded with the GENZ mark. Premium materials, unmatched quality, made for the fearless.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
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

export default Products;
