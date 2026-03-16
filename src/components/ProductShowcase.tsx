import { motion } from "framer-motion";
import Product3DCard from "./Product3DCard";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTrousers from "@/assets/product-trousers.jpg";
import productShorts from "@/assets/product-shorts.jpg";
import productSandals from "@/assets/product-sandals.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
import productCap from "@/assets/product-cap.jpg";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const ProductShowcase = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 md:py-32 border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-2">Shop the Look</p>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Full Catalog
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-sm mt-4 md:mt-0 max-w-sm">
            Every piece branded with the GENZ mark. Premium materials, unmatched quality.
          </p>
        </motion.div>

        {/* Featured large products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Product3DCard
            name="Venom Hi-Tops"
            category="Shoes"
            price="$189"
            image={productShoes}
            tag="Limited Edition"
            slug="venom-hi-tops"
            size="large"
          />
          <Product3DCard
            name="Stealth Hoodie"
            category="Hoodies"
            price="$129"
            image={productHoodie}
            tag="Bestseller"
            slug="stealth-hoodie"
            size="large"
          />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[products[1], products[2], products[3], products[5], products[6]].map((product) => (
            <Product3DCard
              key={product.name}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              tag={product.tag}
              slug={product.slug}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button 
            onClick={() => navigate("/products")}
            className="btn-outline-premium border border-foreground/20 text-foreground px-10 py-4 text-sm font-body font-semibold uppercase tracking-widest"
          >
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
