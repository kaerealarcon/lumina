import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, ChevronDown } from "lucide-react";
import ProductCard from "@/components/ProductCard.jsx";
import TestimonialCard from "@/components/TestimonialCard.jsx";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton.jsx";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
    }),
};

const slideFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

function HomePage() {
    const { t } = useTranslation();

    const featuredProducts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1567966456076-905a50a06d8c",
            name: t("colecao.products.p1"),
            price: "R$ 289,90",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1681114486721-a5f9be2e28a1",
            name: t("colecao.products.p2"),
            price: "R$ 189,90",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1562347174-7370ad83dc47",
            name: t("colecao.products.p3"),
            price: "R$ 249,90",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1701119527218-ceed8ec844e4",
            name: t("colecao.products.p4"),
            price: "R$ 349,90",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1567966456076-905a50a06d8c",
            name: t("colecao.products.p5"),
            price: "R$ 329,90",
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1681114486721-a5f9be2e28a1",
            name: t("colecao.products.p6"),
            price: "R$ 219,90",
        },
    ];

    const bestSellers = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1562347174-7370ad83dc47",
            name: t("maisVendidos.products.p1"),
            price: "R$ 279,90",
            isBestSeller: true,
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1701119527218-ceed8ec844e4",
            name: t("maisVendidos.products.p2"),
            price: "R$ 389,90",
            isBestSeller: true,
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1567966456076-905a50a06d8c",
            name: t("maisVendidos.products.p3"),
            price: "R$ 349,90",
            isBestSeller: true,
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1681114486721-a5f9be2e28a1",
            name: t("maisVendidos.products.p4"),
            price: "R$ 229,90",
            isBestSeller: true,
        },
    ];

    const testimonials = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            name: "Ana Silva",
            testimonial: t("depoimentos.t1"),
            rating: 5,
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            name: "Beatriz Costa",
            testimonial: t("depoimentos.t2"),
            rating: 5,
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
            name: "Carla Mendes",
            testimonial: t("depoimentos.t3"),
            rating: 5,
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
            name: "Diana Oliveira",
            testimonial: t("depoimentos.t4"),
            rating: 5,
        },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>{`${t("hero.title")} - ${t("hero.subtitle")}`}</title>
                <meta
                    name="description"
                    content={t("sobre.p1")}
                />
            </Helmet>

            <div className="min-h-screen">
                {/* ─── HERO ─── */}
                <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url(https://images.unsplash.com/photo-1619929170800-45892634962f)",
                        }}
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="absolute inset-0 bg-black/50" />
                    </motion.div>

                    <div className="relative z-10 text-center px-4">
                        <motion.h1
                            className="text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {t("hero.title")}
                        </motion.h1>
                        <motion.p
                            className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {t("hero.subtitle")}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Button
                                onClick={() => scrollToSection("#colecao")}
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]"
                            >
                                {t("hero.cta")}
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronDown className="w-8 h-8 text-white/60" />
                        </motion.div>
                    </motion.div>
                </section>

                {/* ─── FEATURED COLLECTION ─── */}
                <section id="colecao" className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                        >
                            <h2 className="mb-4">{t("colecao.title")}</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                {t("colecao.subtitle")}
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={staggerContainer}
                        >
                            {featuredProducts.map((product, index) => (
                                <motion.div key={product.id} variants={scaleIn} custom={index}>
                                    <ProductCard {...product} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ─── BEST SELLERS ─── */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                        >
                            <h2 className="mb-4">{t("maisVendidos.title")}</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                {t("maisVendidos.subtitle")}
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={staggerContainer}
                        >
                            {bestSellers.map((product, index) => (
                                <motion.div key={product.id} variants={scaleIn} custom={index}>
                                    <ProductCard {...product} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ─── ABOUT ─── */}
                <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                variants={slideFromLeft}
                            >
                                <h2 className="mb-6">{t("sobre.title")}</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    {t("sobre.p1")}
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {t("sobre.p2")}
                                </p>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                variants={slideFromRight}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1656042744506-1d3c6e2b013e"
                                    alt="Atelier Lumina com peças de moda feminina sofisticada"
                                    className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ─── TESTIMONIALS ─── */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                        >
                            <h2 className="mb-4">{t("depoimentos.title")}</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                {t("depoimentos.subtitle")}
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={staggerContainer}
                        >
                            {testimonials.map((testimonial, index) => (
                                <motion.div key={testimonial.id} variants={fadeUp} custom={index}>
                                    <TestimonialCard {...testimonial} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ─── FOOTER ─── */}
                <motion.footer
                    id="contato"
                    className="bg-foreground text-primary-foreground py-16 px-4 sm:px-6 lg:px-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeIn}
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                            <div>
                                <span
                                    className="text-3xl font-bold mb-4 block"
                                    style={{ fontFamily: "Playfair Display, serif" }}
                                >
                                    {t("hero.title")}
                                </span>
                                <p className="text-primary-foreground/80">{t("footer.slogan")}</p>
                            </div>

                            <div>
                                <span className="font-semibold text-lg mb-4 block">{t("footer.links")}</span>
                                <nav className="flex flex-col gap-2">
                                    <a
                                        href="#home"
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                                    >
                                        {t("nav.home")}
                                    </a>
                                    <a
                                        href="#colecao"
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                                    >
                                        {t("nav.colecao")}
                                    </a>
                                    <a
                                        href="#sobre"
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                                    >
                                        {t("nav.sobre")}
                                    </a>
                                    <a
                                        href="#contato"
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                                    >
                                        {t("nav.contato")}
                                    </a>
                                </nav>
                            </div>

                            <div>
                                <span className="font-semibold text-lg mb-4 block">{t("footer.contact")}</span>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href="https://wa.me/5511999999999"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                                    >
                                        WhatsApp: (11) 99999-9999
                                    </a>
                                    <a
                                        href="mailto:contato@lumina.com.br"
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                                    >
                                        contato@lumina.com.br
                                    </a>
                                </div>
                            </div>

                            <div>
                                <span className="font-semibold text-lg mb-4 block">{t("footer.social")}</span>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://tiktok.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                                        aria-label="TikTok"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-primary-foreground/20 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-primary-foreground/80 text-sm">
                                    {t("footer.rights")}
                                </p>
                                <div className="flex gap-6">
                                    <a
                                        href="#"
                                        className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
                                    >
                                        {t("footer.privacy")}
                                    </a>
                                    <a
                                        href="#"
                                        className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
                                    >
                                        {t("footer.terms")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.footer>

                <FloatingWhatsAppButton />
            </div>
        </>
    );
}

export default HomePage;
