import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-model.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="GENZ streetwear model" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container px-6 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">
            SS26 Collection
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] sm:leading-[0.85] tracking-tighter">
            Redefine
            <br />
            <span className="text-gradient">Your Style</span>
          </h1>
          <p className="mt-6 text-muted-foreground font-body text-base md:text-lg max-w-md">
            Streetwear that speaks louder than words. Bold cuts, raw textures, unapologetic attitude.
          </p>
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => {
                document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-premium bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest"
            >
              Explore
            </button>
            <button
              onClick={() => navigate("/lookbook")}
              className="btn-outline-premium border border-foreground/30 text-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest"
            >
              Lookbook
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
