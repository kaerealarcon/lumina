import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

function ProductCard({ image, name, price, isBestSeller = false }) {
    const phoneNumber = "5511999999999";
    const whatsappMessage = encodeURIComponent(
        `Olá! Tenho interesse no produto: ${name} - ${price}. Qual é a disponibilidade?`,
    );
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    return (
        <div className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {isBestSeller && (
                <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Mais Vendido</Badge>
            )}

            <div className="aspect-[3/4] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium text-card-foreground">{name}</h3>
                    <p className="text-2xl font-semibold text-primary">{price}</p>
                </div>

                <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                >
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Consultar no WhatsApp
                    </a>
                </Button>
            </div>
        </div>
    );
}

export default ProductCard;
