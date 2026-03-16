import productHoodie from "@/assets/product-hoodie.jpg";
import productTrousers from "@/assets/product-trousers.jpg";
import productShorts from "@/assets/product-shorts.jpg";
import productSandals from "@/assets/product-sandals.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
import productCap from "@/assets/product-cap.jpg";

export const products = [
  // Essentials
  { name: "Stealth Hoodie", category: "Hoodies", price: "$129", image: productHoodie, tag: "Bestseller", slug: "stealth-hoodie", collectionId: "essentials" },
  { name: "Core T-Shirt", category: "T-Shirts", price: "$49", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop", tag: null, slug: "core-t-shirt", collectionId: "essentials" },
  { name: "Everyday Shorts", category: "Shorts", price: "$59", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1000&auto=format&fit=crop", tag: null, slug: "everyday-shorts", collectionId: "essentials" },
  { name: "Slide Sandals", category: "Sandals", price: "$59", image: productSandals, tag: "New", slug: "slide-sandals", collectionId: "essentials" },
  { name: "Logo Beanie", category: "Accessories", price: "$35", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop", tag: null, slug: "logo-beanie", collectionId: "essentials" },
  
  // Neon Drop
  { name: "Volt Shorts", category: "Shorts", price: "$69", image: productShorts, tag: "Limited", slug: "volt-shorts", collectionId: "neon-drop" },
  { name: "Venom Hi-Tops", category: "Shoes", price: "$189", image: productShoes, tag: "Limited", slug: "venom-hi-tops", collectionId: "neon-drop" },
  { name: "Acid Wash Tee", category: "T-Shirts", price: "$65", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop", tag: "New", slug: "acid-wash-tee", collectionId: "neon-drop" },
  { name: "Neon Runner Hat", category: "Accessories", price: "$45", image: productCap, tag: null, slug: "neon-runner-hat", collectionId: "neon-drop" },
  
  // Dark Mode
  { name: "Cargo Trousers", category: "Trousers", price: "$99", image: productTrousers, tag: "Bestseller", slug: "cargo-trousers", collectionId: "dark-mode" },
  { name: "Midnight Hoodie", category: "Hoodies", price: "$139", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop", tag: "New", slug: "midnight-hoodie", collectionId: "dark-mode" },
  { name: "Statement Tee", category: "T-Shirts", price: "$59", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop", tag: null, slug: "statement-tee", collectionId: "dark-mode" },
  { name: "Shadow Sneakers", category: "Shoes", price: "$159", image: "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=1000&auto=format&fit=crop", tag: null, slug: "shadow-sneakers", collectionId: "dark-mode" },
  { name: "Tactical Shorts", category: "Shorts", price: "$79", image: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&w=1000&auto=format&fit=crop", tag: "Limited", slug: "tactical-shorts", collectionId: "dark-mode" },
  { name: "Obsidian Slide", category: "Sandals", price: "$65", image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1000&auto=format&fit=crop", tag: null, slug: "obsidian-slide", collectionId: "dark-mode" },
];
