import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitExam from "@/assets/portrait-audiologist-exam.jpg";
import portraitConsultation from "@/assets/portrait-consultation.jpg";

interface PortraitSectionProps {
  variant?: "exam" | "consultation";
}

export const PortraitSection = ({ variant = "exam" }: PortraitSectionProps) => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const content = variant === "exam" ? {
    badge: "WHO WE ARE",
    title: "We Promise To Provide Excellent",
    highlight: "Medical Treatment",
    description: "At REHEARing, we combine cutting-edge audiology technology with compassionate care. Our certified audiologists are committed to improving your hearing health with personalized treatment plans and the latest hearing aid solutions from world-leading brands.",
    image: portraitExam,
    imageAlt: "Audiologist examining patient's ear",
    ctaText: "More About Us",
    reverseLayout: false,
  } : {
    badge: "OUR COMMITMENT",
    title: "Expert Care For Your",
    highlight: "Hearing Health",
    description: "Every patient deserves individualized attention. Our team takes the time to understand your unique hearing challenges and lifestyle needs, ensuring you receive the most suitable hearing solution with ongoing support and care.",
    image: portraitConsultation,
    imageAlt: "Doctor consulting with patient",
    ctaText: "Get In Touch",
    reverseLayout: true,
  };

  return (
    <section className="bg-background py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${content.reverseLayout ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: content.reverseLayout ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`relative ${content.reverseLayout ? 'lg:col-start-2' : ''}`}
          >
            <div className="relative">
              {/* Main Image with decorative border */}
              <div className="relative rounded-3xl overflow-hidden shadow-strong">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
                <img
                  src={content.image}
                  alt={content.imageAlt}
                  className="w-full h-auto object-cover rounded-3xl relative z-10"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-60" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full" />
              
              {/* Curved arrow decoration */}
              <svg 
                className="absolute -right-8 bottom-1/4 w-16 h-24 text-primary/40 hidden lg:block"
                viewBox="0 0 64 96" 
                fill="none"
              >
                <path 
                  d="M8 8C32 8 56 24 56 56C56 72 48 88 32 88" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                />
                <path 
                  d="M40 80L32 88L40 96" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: content.reverseLayout ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`space-y-6 ${content.reverseLayout ? 'lg:col-start-1' : ''}`}
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase">
              {content.badge}
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {content.title}{" "}
              <span className="text-primary">{content.highlight}</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              {content.description}
            </p>
            
            <Button
              onClick={scrollToContact}
              className="gap-2 h-12 px-6 bg-primary hover:bg-primary/90 shadow-medium transition-all"
            >
              {content.ctaText}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        

      {/* Bottom CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-20 bg-accent/50 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-foreground font-medium">Do You Have Any Questions?</span>
          <button 
            onClick={scrollToContact}
            className="text-primary font-semibold hover:underline underline-offset-4 transition-all"
          >
            GET IN TOUCH!
          </button>
        </div>
      </motion.div>
    </section>
  );
};
