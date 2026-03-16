import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";

const faqs = [
  {
    q: "When will sold out items restock?",
    a: "We rarely restock specific items. Most of our drops are limited edition to maintain exclusivity. To ensure you don't miss out, subscribe to our newsletter."
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We ship worldwide from our UK and US fulfillment centers. Delivery times and shipping costs vary depending on the destination. Visit our Shipping page for full details."
  },
  {
    q: "How do I track my order?",
    a: "Once your order is dispatched, you will receive an email containing a tracking number and a direct link to follow your delivery."
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day return policy for all unworn and unwashed items with tags attached. Custom or limited release items may be final sale."
  },
  {
    q: "How do your sizes run?",
    a: "Our garments are intentionally designed for an oversized, boxy fit. If you prefer a standard fit, we highly recommend sizing down. Refer to our Size Guide for measurements."
  }
];

const FAQAccordion = ({ faq, isOpen, toggle }: { faq: typeof faqs[0], isOpen: boolean, toggle: () => void }) => {
  return (
    <div className="border border-border bg-card/40 backdrop-blur-sm mb-4 transition-colors hover:border-primary group">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <h3 className="text-foreground font-display text-lg md:text-xl font-bold uppercase tracking-widest leading-relaxed">
          {faq.q}
        </h3>
        <motion.div
           animate={{ rotate: isOpen ? 180 : 0 }}
           transition={{ duration: 0.3 }}
           className="text-primary ml-4"
        >
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-border/50">
               <p className="text-muted-foreground font-body text-base leading-loose mt-4 border-l-2 border-primary/50 pl-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PremiumBackground>
      <Navbar />
      <div className="container px-6 pt-32 pb-32 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Support Hub</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 drop-shadow-lg">
            FAQ
          </h1>
          <p className="text-muted-foreground font-body text-base max-w-lg mx-auto">
             Everything you need to know about navigating the GENZ drop system, sizing, shipping, and returns.
          </p>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.3, duration: 0.8 }}
           className="space-y-2 z-20 relative"
        >
          {faqs.map((faq, i) => (
             <FAQAccordion 
                key={i} 
                faq={faq} 
                isOpen={openIndex === i} 
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
             />
          ))}
        </motion.div>
        
        {/* Massive background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 mix-blend-overlay">
           <span className="font-display font-black text-[15rem] md:text-[25rem] text-white opacity-[0.03] select-none tracking-tighter">?</span>
        </div>
      </div>
      <Footer />
    </PremiumBackground>
  );
};

export default FAQ;
