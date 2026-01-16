import { motion } from "framer-motion";
import { Phone, Calendar, Star, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-audiologist.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-0 overflow-hidden bg-gradient-to-br from-background via-background to-purple-soft">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              <Award className="w-4 h-4" />
              Delhi's Trusted Hearing Care Experts
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hear Better,{" "}
                <span className="text-primary">Live Fully</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Experience world-class audiology care at REHEARing. Our certified audiologists 
                provide personalized hearing solutions with premium hearing aids from global brands.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">5000+</p>
                  <p className="text-sm text-muted-foreground">Happy Patients</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">4.9★</p>
                  <p className="text-sm text-muted-foreground">Google Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">15+ Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gap-2 h-14 px-8 text-base bg-primary hover:bg-primary/90 shadow-medium hover:shadow-strong transition-all"
                onClick={scrollToContact}
              >
                <Calendar className="w-5 h-5" />
                Book Free Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-14 px-8 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => window.open("tel:+919999999999")}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Doctor Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-strong">
                <img
                  src={heroImage}
                  alt="Expert Audiologist at REHEARing Clinic"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-strong border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Certified Audiologist</p>
                    <p className="text-sm text-muted-foreground">RCI Registered</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-strong"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold">Free</p>
                  <p className="text-xs">Hearing Test</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
