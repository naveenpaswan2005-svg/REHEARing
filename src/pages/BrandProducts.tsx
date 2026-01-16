import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Bluetooth, BatteryCharging, Eye, MessageCircle, Volume2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { products, Product, getProductsByBrand } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useState } from "react";

import bteImage from "@/assets/product-bte-hearing-aid.png";
import cicImage from "@/assets/product-cic-hearing-aid.png";
import ricImage from "@/assets/product-ric-hearing-aid.png";
import stylettoImage from "@/assets/product-styletto-hearing-aid.png";

import brandSignia from "@/assets/brand-signia.jpg";
import brandWidex from "@/assets/brand-widex.jpg";
import brandPhonak from "@/assets/brand-phonak.jpg";
import brandResound from "@/assets/brand-resound.jpg";

const brandLogos: Record<string, string> = {
  signia: brandSignia,
  widex: brandWidex,
  phonak: brandPhonak,
  resound: brandResound,
};

const getProductImage = (type: string, brand: string) => {
  if (type.includes("CIC") || type.includes("IIC") || type.includes("ITC")) return cicImage;
  if (type.includes("RIC") && brand === "Signia") return stylettoImage;
  if (type.includes("RIC")) return ricImage;
  return bteImage;
};

const BrandProducts = () => {
  const { brandName } = useParams<{ brandName: string }>();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const normalizedBrand = brandName?.toLowerCase() || "";
  const brandProducts = getProductsByBrand(normalizedBrand === "resound" ? "ReSound" : normalizedBrand);
  const brandLogo = brandLogos[normalizedBrand];

  const displayBrandName = normalizedBrand === "resound" ? "ReSound" : 
    normalizedBrand.charAt(0).toUpperCase() + normalizedBrand.slice(1);

  const openWhatsApp = (product: Product) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${product.name} (${product.price}). Please share more details.`
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection="brands" onSectionChange={() => {}} />
      
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/30 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {brandLogo && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <img
                    src={brandLogo}
                    alt={displayBrandName}
                    className="max-w-[180px] max-h-24 object-contain"
                  />
                </motion.div>
              )}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-bold text-foreground"
                >
                  {displayBrandName} Hearing Aids
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-muted-foreground mt-2"
                >
                  Explore our collection of {brandProducts.length} {displayBrandName} hearing aids
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {brandProducts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {brandProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="product-card group"
                  >
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
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No products found for {displayBrandName}. Please check back later.
                </p>
                <Button onClick={() => navigate("/")} className="mt-6">
                  Browse All Products
                </Button>
              </div>
            )}
          </div>
        </section>

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
                          navigate("/#contact");
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
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BrandProducts;
