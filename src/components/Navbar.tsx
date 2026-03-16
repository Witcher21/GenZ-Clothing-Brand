import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import genzLogo from "@/assets/genz-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Collections", path: "/collections" },
    { label: "Products", path: "/products" },
    { label: "Lookbook", path: "/lookbook" },
    { label: "About", path: "/about" },
  ];

  const handleNavClick = (path: string) => {
    // If on home page and it's a section anchor, scroll to it
    if (location.pathname === "/" && ["Collections", "Products"].includes(path.replace("/", "").charAt(0).toUpperCase() + path.slice(2))) {
      const sectionId = path.replace("/", "").toLowerCase();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
        return;
      }
    }
    navigate(path);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 px-6">
        <a
          onClick={(e) => { e.preventDefault(); navigate("/"); }}
          href="/"
          className="flex items-center gap-3 cursor-pointer group"
        >
          <span className="font-display text-2xl md:text-3xl font-black uppercase tracking-tighter text-gradient group-hover:translate-x-1 transition-all duration-500">
            GENZ
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.path)}
              className="btn-nav text-sm font-body uppercase tracking-widest text-muted-foreground relative pb-1"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => navigate("/products")}
            className="btn-shop bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold uppercase tracking-widest"
          >
            Shop Now
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.path)}
                  className="text-lg font-display uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { navigate("/products"); setOpen(false); }}
                className="btn-premium bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-widest text-center mt-2"
              >
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
