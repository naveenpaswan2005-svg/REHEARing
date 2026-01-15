import { motion } from "framer-motion";
import { 
  Ear, 
  HeadphonesIcon, 
  Volume2, 
  Baby, 
  Shield, 
  Wrench 
} from "lucide-react";

const services = [
  {
    icon: Ear,
    title: "Hearing Evaluation",
    description: "Comprehensive hearing tests using advanced audiometry equipment to accurately assess your hearing health.",
  },
  {
    icon: HeadphonesIcon,
    title: "Hearing Aid Fitting & Trials",
    description: "Professional fitting services with free trials to find the perfect hearing aid matched to your lifestyle.",
  },
  {
    icon: Volume2,
    title: "Tinnitus Management",
    description: "Specialized therapy and sound therapy solutions to help manage and reduce tinnitus symptoms.",
  },
  {
    icon: Baby,
    title: "Pediatric Audiology",
    description: "Child-friendly hearing assessments and solutions designed specifically for young patients.",
  },
  {
    icon: Shield,
    title: "Custom Earplugs",
    description: "Customized hearing protection for musicians, swimmers, and industrial workers.",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Expert repair services and regular maintenance to keep your hearing aids performing optimally.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-muted/30">
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
            Our Services
          </span>
          <h2 className="section-heading">
            Comprehensive Hearing Care Solutions
          </h2>
          <p className="section-subheading">
            Expert audiology services tailored to your unique hearing needs, delivered with care and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card group cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
