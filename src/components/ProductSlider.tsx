import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Bluetooth, BatteryCharging, Eye, MessageCircle, X, Volume2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { products, Product } from "@/data/products";

import bteImage from "@/assets/product-bte-hearing-aid.png";
import cicImage from "@/assets/product-cic-hearing-aid.png";
import ricImage from "@/assets/product-ric-hearing-aid.png";
import stylettoImage from "@/assets/product-styletto-hearing-aid.png";

const categories = [
  { id: "all", label: "All Products" },
  { id: "signia", label: "Signia" },
  { id: "widex", label: "Widex" },
  { id: "phonak", label: "Phonak" },
  { id: "resound", label: "ReSound" },
];

const getProductImage = (type: string, brand: string) => {
  if (type.includes("CIC") || type.includes("IIC") || type.includes("ITC")) return cicImage;
  if (type.includes("RIC") && brand === "Signia") return stylettoImage;
  if (type.includes("RIC")) return ricImage;
  return bteImage;
};

export const ProductSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => {
        if (activeCategory === "resound") return p.brand.toLowerCase() === "resound";
        return p.brand.toLowerCase() === activeCategory.toLowerCase();
      });

  const openWhatsApp = (product: Product) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${product.name} (${product.price}). Please share more details.`
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="products" className="bg-muted/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              Our Products
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Premium Hearing Aids
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground mt-2 max-w-lg"
            >
              Explore our collection of 18+ hearing aids from world-renowned brands
            </motion.p>
          </div>

          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "bg-card hover:bg-primary/10 text-muted-foreground border border-border/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-card border border-border rounded-full shadow-medium flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-card border border-border rounded-full shadow-medium flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Slider Container */}
          <motion.div
            ref={sliderRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="flex-shrink-0 w-[300px] snap-start"
              >
                <div className="product-card group h-full">
                  {/* Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-accent to-background p-6 flex items-center justify-center overflow-hidden">
                    <motion.img
                      src={getProductImage(product.type, product.brand)}
                      alt={product.name}
                      className="w-4/5 h-4/5 object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-soft">
                      {product.brand}
                    </span>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-card/90 text-foreground text-xs font-medium rounded-full border border-border">
                      {product.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[3rem]">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.channels} Channels • {product.unit}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.connectivity !== "Basic" && product.connectivity !== "—" && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                          <Bluetooth className="w-3 h-3" />
                          Bluetooth
                        </span>
                      )}
                      {(product.battery.includes("Li-ion") || product.battery.includes("Rechargeable")) && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-success/10 text-success text-xs rounded-full">
                          <BatteryCharging className="w-3 h-3" />
                          Rechargeable
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Starting From</p>
                        <p className="text-lg font-bold text-primary">{product.price}</p>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
                  <div className="bg-gradient-to-br from-accent to-background rounded-2xl p-8 flex items-center justify-center">
                    <img
                      src={getProductImage(selectedProduct.type, selectedProduct.brand)}
                      alt={selectedProduct.name}
                      className="w-full h-auto max-h-64 object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
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
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-success/10 text-success text-sm rounded-full">
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
                        className="flex-1 gap-2 border-success text-success hover:bg-success hover:text-white"
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