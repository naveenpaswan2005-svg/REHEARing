import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BrandsSection } from "@/components/BrandsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortraitSection } from "@/components/PortraitSection";
import { HearingAidTypes } from "@/components/HearingAidTypes";
import { ProductSlider } from "@/components/ProductSlider";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

// Section mapping for navigation
const sectionMap: Record<string, string[]> = {
  home: ["home", "brands", "services", "portrait1", "hearing-aids", "products", "portrait2", "why-us", "reviews", "faq", "contact"],
  services: ["services"],
  "hearing-aids": ["hearing-aids"],
  products: ["products"],
  brands: ["brands"],
  reviews: ["reviews"],
  faq: ["faq"],
  contact: ["contact"],
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Listen for custom navigation events from Navbar
  useEffect(() => {
    const handleNavigation = (event: CustomEvent<{ section: string }>) => {
      setActiveSection(event.detail.section);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("navSectionChange" as any, handleNavigation);
    return () => {
      window.removeEventListener("navSectionChange" as any, handleNavigation);
    };
  }, []);

  const visibleSections = sectionMap[activeSection] || sectionMap.home;
  const isHome = activeSection === "home";

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        <AnimatePresence mode="wait">
          {/* Hero - Only on Home */}
          {isHome && (
            <motion.div
              key="hero"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <HeroSection />
            </motion.div>
          )}

          {/* Brands Section - 2nd position */}
          {visibleSections.includes("brands") && (
            <motion.div
              key="brands"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: isHome ? 0.1 : 0 }}
            >
              <BrandsSection />
            </motion.div>
          )}

          {/* Services */}
          {visibleSections.includes("services") && (
            <motion.div
              key="services"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: isHome ? 0.15 : 0 }}
            >
              <ServicesSection />
            </motion.div>
          )}

          {/* Portrait Section 1 - After Services */}
          {isHome && (
            <motion.div
              key="portrait1"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.2 }}
            >
              <PortraitSection variant="exam" />
            </motion.div>
          )}

          {/* Hearing Aid Types */}
          {visibleSections.includes("hearing-aids") && (
            <motion.div
              key="hearing-aids"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: isHome ? 0.25 : 0 }}
            >
              <HearingAidTypes />
            </motion.div>
          )}

          {/* Products Slider (renamed from Featured Collection) */}
          {visibleSections.includes("products") && (
            <motion.div
              key="products"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: isHome ? 0.3 : 0 }}
            >
              <ProductSlider />
            </motion.div>
          )}

          {/* Portrait Section 2 - After Products */}
          {isHome && (
            <motion.div
              key="portrait2"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.35 }}
            >
              <PortraitSection variant="consultation" />
            </motion.div>
          )}

          {/* Why Choose Us */}
          {isHome && (
            <motion.div
              key="why-us"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: 0.4 }}
            >
              <WhyChooseUs />
            </motion.div>
          )}

          {/* Reviews */}
          {visibleSections.includes("reviews") && (
            <motion.div
              key="reviews"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: isHome ? 0.45 : 0 }}
            >
              <ReviewsSection />
            </motion.div>
          )}

          {/* FAQ */}
          {visibleSections.includes("faq") && (
            <motion.div
              key="faq"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: isHome ? 0.5 : 0 }}
            >
              <FAQSection />
            </motion.div>
          )}

          {/* Contact */}
          {visibleSections.includes("contact") && (
            <motion.div
              key="contact"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: isHome ? 0.55 : 0 }}
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;