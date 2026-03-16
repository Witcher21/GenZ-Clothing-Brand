import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import genzLogo from "@/assets/genz-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div 
              className="flex items-center gap-3 mb-6 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <span className="font-display text-3xl font-black uppercase tracking-tighter text-gradient transition-all duration-500 group-hover:translate-x-1">
                GENZ
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-body">
              Premium streetwear for the fearless generation.
            </p>
          </div>
          {[
            {
              title: "Shop",
              links: [
                { label: "Hoodies", path: "/category/hoodies" },
                { label: "T-Shirts", path: "/category/t-shirts" },
                { label: "Trousers", path: "/category/trousers" },
                { label: "Shorts", path: "/category/shorts" },
                { label: "Shoes", path: "/category/shoes" },
                { label: "Sandals", path: "/category/sandals" },
                { label: "Caps", path: "/category/caps" },
              ],
            },
            {
              title: "Info",
              links: [
                { label: "About Us", path: "/about" },
                { label: "Sustainability", path: "/sustainability" },
                { label: "Careers", path: "/careers" },
                { label: "Press", path: "/press" },
              ],
            },
            {
              title: "Help",
              links: [
                { label: "FAQ", path: "/faq" },
                { label: "Shipping", path: "/shipping" },
                { label: "Returns", path: "/returns" },
                { label: "Size Guide", path: "/size-guide" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="font-display text-sm font-bold uppercase tracking-widest mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-muted-foreground text-sm font-body hover:text-primary transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-muted-foreground text-xs font-body text-center md:text-left">© 2026 GENZ. All rights reserved.</p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="text-[10px] text-muted-foreground/60 font-body uppercase tracking-[0.2em]">Created by</span>
              <span className="text-xs font-display font-bold uppercase tracking-widest text-gradient relative group cursor-default">
                G.Nawod Sanjana
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
              </span>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Instagram", "TikTok", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-muted-foreground text-xs font-body uppercase tracking-widest hover:text-primary transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
