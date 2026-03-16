import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Products from "./pages/Products.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import Collections from "./pages/Collections.tsx";
import CollectionDetail from "./pages/CollectionDetail.tsx";
import CategoryDetail from "./pages/CategoryDetail.tsx";
import Lookbook from "./pages/Lookbook.tsx";
import About from "./pages/About.tsx";

// Footer pages
import Sustainability from "./pages/Sustainability.tsx";
import Careers from "./pages/Careers.tsx";
import Press from "./pages/Press.tsx";
import FAQ from "./pages/FAQ.tsx";
import Shipping from "./pages/Shipping.tsx";
import Returns from "./pages/Returns.tsx";
import SizeGuide from "./pages/SizeGuide.tsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:category" element={<CategoryDetail />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collection/:slug" element={<CollectionDetail />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/about" element={<About />} />
          
          {/* Footer pages routes */}
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
