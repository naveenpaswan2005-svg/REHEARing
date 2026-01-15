import { motion } from "framer-motion";
import { Bluetooth, BatteryCharging, Eye, Cpu } from "lucide-react";

const hearingAidTypes = [
  {
    icon: Cpu,
    title: "Digital Hearing Aids",
    description: "Advanced digital processing for crystal-clear sound quality with automatic adjustments for different environments.",
    idealFor: "All hearing loss levels",
    benefits: ["Superior sound quality", "Noise reduction", "Multiple programs"],
    priceRange: "₹18,000 - ₹3,50,000",
  },
  {
    icon: Eye,
    title: "Invisible Hearing Aids (CIC/IIC)",
    description: "Completely hidden in the ear canal, perfect for those seeking maximum discretion without compromising performance.",
    idealFor: "Mild to moderate hearing loss",
    benefits: ["Invisible design", "Custom fit", "Natural sound"],
    priceRange: "₹25,000 - ₹1,50,000",
  },
  {
    icon: BatteryCharging,
    title: "Rechargeable Hearing Aids",
    description: "Eco-friendly and convenient with lithium-ion batteries providing all-day power without battery replacements.",
    idealFor: "Active lifestyles",
    benefits: ["No battery changes", "24-hour use", "Eco-friendly"],
    priceRange: "₹30,000 - ₹3,50,000",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth Hearing Aids",
    description: "Stream calls, music, and TV directly to your hearing aids. Control everything from your smartphone.",
    idealFor: "Tech-savvy users",
    benefits: ["Direct streaming", "App control", "Hands-free calls"],
    priceRange: "₹35,000 - ₹3,50,000",
  },
];

export const HearingAidTypes = () => {
  return (
    <section id="hearing-aids" className="bg-background">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Hearing Aid Types
          </span>
          <h2 className="section-heading">
            Find Your Perfect Hearing Solution
          </h2>
          <p className="section-subheading">
            Explore our range of modern hearing aid technologies designed to match your lifestyle and hearing needs.
          </p>
        </motion.div>

        {/* Types Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hearingAidTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  
                  {/* Ideal For */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary">Ideal for: </span>
                    <span className="text-sm text-muted-foreground">{type.idealFor}</span>
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {type.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Price Range */}
                  <div className="pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">Price Range: </span>
                    <span className="font-semibold text-primary">{type.priceRange}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
