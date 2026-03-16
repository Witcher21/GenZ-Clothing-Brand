import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import CollectionGrid from "@/components/CollectionGrid";
import ProductShowcase from "@/components/ProductShowcase";
import LookbookSection from "@/components/LookbookSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <CollectionGrid />
      <ProductShowcase />
      <LookbookSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
