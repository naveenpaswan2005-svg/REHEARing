import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Bluetooth, BatteryCharging, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

import bteImage from "@/assets/product-bte-hearing-aid.png";
import cicImage from "@/assets/product-cic-hearing-aid.png";
import ricImage from "@/assets/product-ric-hearing-aid.png";
import stylettoImage from "@/assets/product-styletto-hearing-aid.png";

const categories = [
  { id: "digital", label: "Digital", icon: null },
  { id: "invisible", label: "Invisible", icon: EyeOff },
  { id: "rechargeable", label: "Rechargeable", icon: BatteryCharging },
  { id: "bluetooth", label: "Bluetooth", icon: Bluetooth },
];

const getProductImage = (type: string, brand: string) => {
  if (type.includes("CIC") || type.includes("IIC") || type.includes("ITC")) return cicImage;
  if (type.includes("RIC") && brand === "Signia") return stylettoImage;
  if (type.includes("RIC")) return ricImage;
  return bteImage;
};

// Featured products - top picks
const featuredProducts = products.filter(p => 
  ["Signia Styletto IX RIC Hearing Aid", "Signia Silk Charge&Go 1 IX", "Widex Moment 110 M XP ITC 312", "Phonak Hearing Aid", "Signia Styletto 3 IX Hearing Aids", "Widex Enjoy Evoke RIC 10"].includes(p.name)
);

export const ProductSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Featured Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Premium Hearing Aids
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground text-sm font-medium rounded-full transition-all duration-300"
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-card border border-border rounded-full shadow-medium flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-card border border-border rounded-full shadow-medium flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] snap-start"
              >
                <div className="product-card group h-full">
                  {/* Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-purple-soft to-background p-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={getProductImage(product.type, product.brand)}
                      alt={product.name}
                      className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {product.brand}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.type} • {product.channels} Channels
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary">{product.price}</p>
                      <Button size="sm" variant="outline" className="gap-1">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
