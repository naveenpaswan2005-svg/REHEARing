import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Eye, X, Bluetooth, BatteryCharging, Volume2, ShieldCheck } from "lucide-react";
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

export const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.brand.toLowerCase() === filter.toLowerCase());

  const brands = ["all", ...new Set(products.map(p => p.brand))];

  const openWhatsApp = (product: Product) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${product.name} (${product.price}). Please share more details.`
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="section-heading">
            Premium Hearing Aids Collection
          </h2>
          <p className="section-subheading">
            Explore our range of 18+ hearing aids from world-renowned brands including Signia, Widex, Phonak & ReSound.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setFilter(brand)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === brand
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {brand === "all" ? "All Brands" : brand}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="product-card group"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-muted to-background p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={getProductImage(product.type, product.brand)}
                  alt={product.name}
                  className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Brand Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                  {product.brand}
                </span>
                {/* Type Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-card/90 text-foreground text-xs font-medium rounded-full border border-border">
                  {product.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-2 min-h-[3rem]">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.channels} Channels • {product.unit}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.connectivity !== "Basic" && product.connectivity !== "—" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">
                      <Bluetooth className="w-3 h-3" />
                      Bluetooth
                    </span>
                  )}
                  {product.battery.includes("Li-ion") || product.battery.includes("Rechargeable") ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">
                      <BatteryCharging className="w-3 h-3" />
                      Rechargeable
                    </span>
                  ) : null}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting From</p>
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
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
                  <div className="bg-gradient-to-br from-muted to-background rounded-2xl p-8 flex items-center justify-center">
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
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-full">
                            <Volume2 className="w-3 h-3" />
                            Noise Reduction
                          </span>
                        )}
                        {selectedProduct.tinnitusSupport && (
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-full">
                            <ShieldCheck className="w-3 h-3" />
                            Tinnitus Support
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.idealFor.map((ideal, i) => (
                          <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full">
                            {ideal}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Warranty */}
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl">
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
                        className="flex-1 gap-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
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
