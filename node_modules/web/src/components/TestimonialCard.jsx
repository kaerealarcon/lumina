import React from "react";
import { Star } from "lucide-react";

function TestimonialCard({ image, name, testimonial, rating = 5 }) {
    return (
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-4 mb-6">
                <img src={image} alt={name} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                    <h4 className="font-semibold text-card-foreground">{name}</h4>
                    <div className="flex gap-1 mt-1">
                        {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-muted-foreground leading-relaxed italic">"{testimonial}"</p>
        </div>
    );
}

export default TestimonialCard;
