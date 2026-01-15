import { motion } from "framer-motion";

import brandSignia from "@/assets/brand-signia.jpg";
import brandWidex from "@/assets/brand-widex.jpg";
import brandPhonak from "@/assets/brand-phonak.jpg";
import brandResound from "@/assets/brand-resound.jpg";

const brands = [
  { name: "Signia", logo: brandSignia },
  { name: "Widex", logo: brandWidex },
  { name: "Phonak", logo: brandPhonak },
  { name: "ReSound", logo: brandResound },
];

export const BrandsSection = () => {
  return (
    <section id="brands" className="bg-background">
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
            Partner Brands
          </span>
          <h2 className="section-heading">
            Brands We Offer
          </h2>
          <p className="section-subheading">
            We partner with world-leading hearing aid manufacturers to bring you the best technology.
          </p>
        </motion.div>

        {/* Brands Grid - Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center justify-center h-40">
                <img
                  src={brand.logo}
                  alt={`${brand.name} hearing aids`}
                  className="max-w-[160px] max-h-24 object-contain brand-logo group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brands Slider - Mobile */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-[200px] snap-center"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card flex items-center justify-center h-32">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} hearing aids`}
                    className="max-w-[120px] max-h-16 object-contain"
                  />
                </div>
                <p className="text-center mt-3 font-medium text-muted-foreground">
                  {brand.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
