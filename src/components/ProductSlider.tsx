import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Bluetooth, BatteryCharging, Eye, MessageCircle, Volume2, ShieldCheck, Filter, Headphones, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { products, Product } from "@/data/products";

import bteImage from "@/assets/product-bte-hearing-aid.png";
import cicImage from "@/assets/product-cic-hearing-aid.png";
import ricImage from "@/assets/product-ric-hearing-aid.png";
import stylettoImage from "@/assets/product-styletto-hearing-aid.png";

const getProductImage = (type: string, brand: string) => {
  if (type.includes("CIC") || type.includes("IIC") || type.includes("ITC")) return cicImage;
  if (type.includes("RIC") && brand === "Signia") return stylettoImage;
  if (type.includes("RIC")) return ricImage;
  return bteImage;
};

// Get full type name
const getTypeName = (type: string) => {
  const typeMap: Record<string, string> = {
    "RIC": "Receiver-in-Canal",
    "BTE": "Behind-The-Ear",
    "CIC": "Completely-in-Canal",
    "ITE": "In-The-Ear",
    "ITC": "In-The-Canal",
    "IIC": "Invisible-in-Canal"
  };
  return typeMap[type] || type;
};

// Brand colors for badges
const getBrandColor = (brand: string) => {
  const colorMap: Record<string, string> = {
    "Signia": "bg-primary text-white",
    "Widex": "bg-emerald-500 text-white",
    "Phonak": "bg-blue-500 text-white",
    "ReSound": "bg-orange-500 text-white"
  };
  return colorMap[brand] || "bg-primary text-white";
};

export const ProductSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Calculate brand counts
  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    products.forEach(p => {
      const brand = p.brand.toLowerCase().replace(/\s+/g, '');
      counts[brand] = (counts[brand] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = [
    { id: "all", label: "All" },
    { id: "signia", label: "Signia" },
    { id: "widex", label: "Widex" },
    { id: "phonak", label: "Phonak" },
    { id: "resound", label: "ReSound" },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => {
        const productBrand = p.brand.toLowerCase().replace(/\s+/g, '');
        const categoryBrand = activeCategory.toLowerCase().replace(/\s+/g, '');
        return productBrand === categoryBrand;
      });

  // Calculate stats
  const stats = useMemo(() => {
    const prices = products.map(p => {
      const numericPrice = parseInt(p.price.replace(/[₹,]/g, ''));
      return numericPrice;
    });
    const minPrice = Math.min(...prices);
    
    return {
      totalProducts: products.length,
      totalBrands: new Set(products.map(p => p.brand)).size,
      startingPrice: `₹${Math.round(minPrice / 1000)}K`,
      warranty: "2 Yrs"
    };
  }, []);

  // Update slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const totalSlides = Math.ceil(filteredProducts.length / slidesPerView);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / slidesPerView;
      const scrollAmount = direction === "left" ? -cardWidth * slidesPerView : cardWidth * slidesPerView;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      
      setCurrentSlide(prev => {
        if (direction === "left") return Math.max(0, prev - 1);
        return Math.min(totalSlides - 1, prev + 1);
      });
    }
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / slidesPerView;
      sliderRef.current.scrollTo({ left: cardWidth * slidesPerView * index, behavior: "smooth" });
      setCurrentSlide(index);
    }
  };

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

  const openWhatsApp = (product: Product) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${product.name} (${product.price}). Please share more details.`
    );
    window.open(`https://wa.me/9899252548?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            <Headphones className="w-4 h-4" />
            Our Products
          </motion.span>
          
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Premium <span className="text-primary">Hearing Aids</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Collection</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg"
          >
            Explore our range of {products.length} digital, Bluetooth-enabled, and rechargeable hearing aids from
            global brands like Signia, Widex, Phonak, and more. Prices from ₹10,000 to ₹3,40,990.
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {[
            { value: `${stats.totalProducts}+`, label: "Total Products" },
            { value: `${stats.totalBrands}+`, label: "Premium Brands" },
            { value: stats.startingPrice, label: "Starting Price" },
            { value: stats.warranty, label: "Warranty" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 md:p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
            >
              <span className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10"
        >
          <Filter className="w-5 h-5 text-muted-foreground hidden sm:block" />
          {categories.map((cat) => {
            const count = brandCounts[cat.id.toLowerCase().replace(/\s+/g, '')] || 0;
            const isActive = activeCategory === cat.id;
            
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-muted text-foreground border border-border"
                }`}
              >
                {cat.label}
                {cat.id !== "all" && (
                  <span className={`text-xs ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    ({count})
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-foreground"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            disabled={currentSlide >= totalSlides - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-foreground"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Products Grid */}
          <motion.div
            ref={sliderRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex-shrink-0 w-[280px] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] snap-start"
              >
                <div className="bg-card rounded-2xl border border-border/50 overflow-hidden h-full hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                  {/* Product Image Area */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/30 p-4 flex items-center justify-center">
                    {/* Brand Badge */}
                    <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-md ${getBrandColor(product.brand)}`}>
                      {product.brand}
                    </span>
                    
                    {/* Unit Badge */}
                    <span className="absolute top-3 right-3 px-2 py-1 bg-card/90 text-foreground text-xs font-medium rounded-md border border-border/50">
                      {product.unit}
                    </span>
                    
                    {/* Product Image */}
                    <img
                      src={getProductImage(product.type, product.brand)}
                      alt={product.name}
                      className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Product Name */}
                    <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    
                    {/* Product Type */}
                    <p className="text-xs text-muted-foreground mb-3">
                      {product.type} ({getTypeName(product.type)})
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {/* Channels */}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {product.channels}ch
                      </span>
                      
                      {/* App Control */}
                      {(product.connectivity.includes("Bluetooth") || product.connectivity.includes("App")) && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                          <Smartphone className="w-3 h-3" />
                          App
                        </span>
                      )}
                      
                      {/* Rechargeable */}
                      {(product.battery.includes("Li-ion") || product.battery.includes("Rechargeable")) && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                          <BatteryCharging className="w-3 h-3" />
                          Rechargeable
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <p className="text-lg md:text-xl font-bold text-primary">
                      {product.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? "w-8 h-2 bg-primary" 
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Product Count */}
        <p className="text-center text-muted-foreground text-sm mt-4">
          Showing {filteredProducts.length} products
        </p>

        {/* Product Detail Modal */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-8 mt-4">
                  {/* Image */}
                  <div className="bg-gradient-to-br from-primary/5 to-accent/30 rounded-2xl p-8 flex items-center justify-center">
                    <img
                      src={getProductImage(selectedProduct.type, selectedProduct.brand)}
                      alt={selectedProduct.name}
                      className="w-full h-auto max-h-64 object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <span className={`px-3 py-1 text-sm font-medium rounded-md ${getBrandColor(selectedProduct.brand)}`}>
                        {selectedProduct.brand}
                      </span>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Specs */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Specifications</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span className="text-muted-foreground">Type</span>
                          <span className="font-medium">{selectedProduct.type}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span className="text-muted-foreground">Model</span>
                          <span className="font-medium">{selectedProduct.model}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span className="text-muted-foreground">Channels</span>
                          <span className="font-medium">{selectedProduct.channels}</span>
                        </div>
                        <div className="flex justify-between p-3 bg-muted rounded-lg">
                          <span className="text-muted-foreground">Battery</span>
                          <span className="font-medium">{selectedProduct.battery}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.features.map((feature, i) => (
                          <span key={i} className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                        {selectedProduct.noiseReduction && (
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                            <Volume2 className="w-3 h-3" />
                            Noise Reduction
                          </span>
                        )}
                        {selectedProduct.tinnitusSupport && (
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full">
                            <ShieldCheck className="w-3 h-3" />
                            Tinnitus Support
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price & Warranty */}
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                      <div>
                        <p className="text-sm text-muted-foreground">Price ({selectedProduct.unit})</p>
                        <p className="text-2xl font-bold text-primary">{selectedProduct.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Warranty</p>
                        <p className="font-semibold text-foreground">{selectedProduct.warranty}</p>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 gap-2 bg-primary hover:bg-primary/90"
                        onClick={() => {
                          setSelectedProduct(null);
                          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Book Free Trial
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 gap-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                        onClick={() => openWhatsApp(selectedProduct)}
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
