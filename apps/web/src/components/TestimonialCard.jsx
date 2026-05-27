import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

function TestimonialCard({ image, name, testimonial, rating = 5 }) {
    return (
        <motion.div
            className="bg-card rounded-xl p-8 shadow-sm border border-border relative overflow-hidden"
            whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-border/50" />

            <div className="flex items-center gap-4 mb-6">
                <img src={image} alt={name} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                    <h4 className="font-semibold text-card-foreground">{name}</h4>
                    <div className="flex gap-1 mt-1">
                        {[...Array(rating)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.08, duration: 0.3, ease: "backOut" }}
                            >
                                <Star className="w-4 h-4 fill-accent text-accent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-muted-foreground leading-relaxed italic">"{testimonial}"</p>
        </motion.div>
    );
}

export default TestimonialCard;
