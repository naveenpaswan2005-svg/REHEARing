import { motion } from "framer-motion";
import { Check, Award, CreditCard, Baby, Users, Heart } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Registered Audiologist",
    description: "RCI-registered professionals with years of specialized training.",
  },
  {
    icon: Check,
    title: "Evidence-Based Fitting",
    description: "Scientific approach to hearing aid selection and fitting.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden costs. Clear pricing with detailed breakdowns.",
  },
  {
    icon: CreditCard,
    title: "EMI Options",
    description: "Flexible payment plans to make hearing care accessible.",
  },
  {
    icon: Baby,
    title: "Child-Friendly Care",
    description: "Specialized pediatric audiology services for young patients.",
  },
  {
    icon: Users,
    title: "Senior-Friendly",
    description: "Patient, understanding care designed for elderly patients.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              Why REHEARing?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary-foreground">Delhi's Most Trusted </span>
              <span className="text-accent">Hearing Care Clinic</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              At REHEARing, we combine clinical expertise with compassionate care. 
              Our state-of-the-art facility and experienced audiologists ensure you 
              receive the best possible hearing care experience.
            </p>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold">5000+</p>
                <p className="text-sm text-white/70">Happy Patients</p>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div className="text-center">
                <p className="text-4xl font-bold">4.9★</p>
                <p className="text-sm text-white/70">Google Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/20 transition-colors"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                  <reason.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{reason.title}</h3>
                <p className="text-sm text-white/70">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
