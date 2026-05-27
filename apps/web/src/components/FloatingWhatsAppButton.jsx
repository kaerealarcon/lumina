import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

function FloatingWhatsAppButton() {
    const isMobile = useIsMobile();
    const [isVisible, setIsVisible] = useState(false);

    const phoneNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos Lumina.");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isMobile) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg"
                    aria-label="Contato via WhatsApp"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <MessageCircle className="w-6 h-6" />
                    <motion.span
                        className="absolute inset-0 rounded-full bg-[#25D366]"
                        animate={{ scale: [1, 1.4, 1.4], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                </motion.a>
            )}
        </AnimatePresence>
    );
}

export default FloatingWhatsAppButton;
