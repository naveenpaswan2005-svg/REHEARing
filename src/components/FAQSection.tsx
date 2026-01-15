import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if I need a hearing aid?",
    answer: "Common signs include difficulty understanding conversations (especially in noisy environments), frequently asking people to repeat themselves, turning up the TV volume higher than others prefer, and feeling like people are mumbling. We recommend a free hearing test at our clinic to accurately assess your hearing health.",
  },
  {
    question: "What is the cost of hearing aids at REHEARing?",
    answer: "Our hearing aids range from ₹10,000 to ₹3,50,000 depending on the brand, technology level, and features. We offer options for every budget, and EMI plans are available. We also provide transparent pricing with no hidden costs.",
  },
  {
    question: "How long do hearing aids last?",
    answer: "With proper care and maintenance, hearing aids typically last 5-7 years. Battery-operated aids need regular battery changes, while rechargeable aids have batteries that last 4-5 years. We offer comprehensive maintenance services to extend the life of your hearing aids.",
  },
  {
    question: "Do you offer free hearing tests?",
    answer: "Yes! We offer completely free comprehensive hearing tests using advanced audiometry equipment. The test takes about 30-45 minutes and includes a detailed consultation with our certified audiologist.",
  },
  {
    question: "Can I try hearing aids before buying?",
    answer: "Absolutely! We offer free trials on most hearing aid models for 7-15 days. This allows you to experience the benefits in your daily life before making a purchase decision.",
  },
  {
    question: "What brands do you offer?",
    answer: "We are authorized dealers for Signia, Widex, Phonak, and ReSound - all world-renowned hearing aid manufacturers. Each brand has its unique strengths, and our audiologist will help you choose the best fit for your needs.",
  },
  {
    question: "Is there a warranty on hearing aids?",
    answer: "Yes, all hearing aids come with manufacturer warranties ranging from 1-4 years depending on the model. We also offer extended warranty options and comprehensive after-sales support.",
  },
  {
    question: "Do you provide home visits?",
    answer: "Yes, we offer home visit services for elderly or mobility-challenged patients within South Delhi. Our audiologist can conduct hearing tests and fittings at your home for your convenience.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-background">
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
            FAQ
          </span>
          <h2 className="section-heading">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading">
            Find answers to common questions about hearing aids, our services, and hearing care.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-card-hover transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
