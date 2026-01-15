import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "South Delhi",
    rating: 5,
    text: "Excellent service! The audiologist was very patient and explained everything in detail. My father's hearing has improved significantly with the Signia hearing aids.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    location: "Greater Kailash",
    rating: 5,
    text: "Best hearing clinic in Delhi. The staff is very professional and the clinic is very clean. Highly recommend for anyone looking for quality hearing care.",
    date: "1 month ago",
  },
  {
    name: "Anil Gupta",
    location: "Hauz Khas",
    rating: 5,
    text: "I was hesitant about hearing aids, but REHEARing made the entire process comfortable. The invisible CIC aids are amazing - no one can even tell I'm wearing them!",
    date: "3 weeks ago",
  },
  {
    name: "Sunita Verma",
    location: "Lajpat Nagar",
    rating: 5,
    text: "Very impressed with the free hearing test. The audiologist took time to understand my needs and recommended the perfect Widex hearing aid within my budget.",
    date: "1 week ago",
  },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="bg-muted/30">
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
            Testimonials
          </span>
          <h2 className="section-heading">
            What Our Patients Say
          </h2>
          <p className="section-subheading">
            Real experiences from our valued patients who have transformed their hearing with our care.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-card border border-border">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">on Google Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
