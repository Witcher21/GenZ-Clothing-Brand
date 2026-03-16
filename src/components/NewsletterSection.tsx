import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-2">Stay Connected</p>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Join the Movement
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Early access to drops. Exclusive pieces. No spam, just culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="your@email.com"
              className="flex-1 w-full sm:w-auto bg-secondary text-foreground px-6 py-4 font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary border border-border transition-all duration-300 focus:border-primary rounded-sm sm:rounded-none sm:rounded-l-sm"
            />
            <button
              onClick={handleSubmit}
              className="btn-subscribe bg-primary text-primary-foreground w-full sm:w-auto px-8 py-4 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm sm:rounded-none sm:rounded-r-sm"
            >
              {submitted ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-primary-foreground"
                >
                  ✓ Subscribed!
                </motion.span>
              ) : (
                <>
                  Subscribe
                  <Send size={14} />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
