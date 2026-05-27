import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

function FloatingWhatsAppButton() {
    const isMobile = useIsMobile();
    const [isVisible, setIsVisible] = useState(false);

    const phoneNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos Lumina.");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isMobile) return null;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-all duration-500 hover:scale-110 active:scale-95 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
                animation: isVisible ? "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" : "none",
            }}
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
            <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
        </a>
    );
}

export default FloatingWhatsAppButton;
