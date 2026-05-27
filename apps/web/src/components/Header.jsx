import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: t("nav.home"), href: "#home" },
        { name: t("nav.colecao"), href: "#colecao" },
        { name: t("nav.sobre"), href: "#sobre" },
        { name: t("nav.contato"), href: "#contato" },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setIsOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-background shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, "#home")}
                        className="text-3xl font-bold text-foreground transition-colors duration-200"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        Lumina
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200 relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}

                        <div className="flex items-center gap-2 border-l border-border pl-6 ml-2">
                            <button
                                className={`text-sm font-medium transition-colors ${
                                    i18n.language === 'pt' ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
                                }`}
                                onClick={() => i18n.changeLanguage('pt')}
                            >
                                PT
                            </button>
                            <span className="text-border">|</span>
                            <button
                                className={`text-sm font-medium transition-colors ${
                                    i18n.language === 'en' ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
                                }`}
                                onClick={() => i18n.changeLanguage('en')}
                            >
                                EN
                            </button>
                        </div>
                    </nav>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="text-foreground" aria-label="Menu">
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-background">
                            <nav className="flex flex-col gap-6 mt-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-xl font-medium text-foreground hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                ))}

                                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                                    <button
                                        className={`text-lg font-medium transition-colors ${
                                            i18n.language === 'pt' ? 'text-primary' : 'text-foreground/60'
                                        }`}
                                        onClick={() => { i18n.changeLanguage('pt'); setIsOpen(false); }}
                                    >
                                        PT
                                    </button>
                                    <span className="text-border">|</span>
                                    <button
                                        className={`text-lg font-medium transition-colors ${
                                            i18n.language === 'en' ? 'text-primary' : 'text-foreground/60'
                                        }`}
                                        onClick={() => { i18n.changeLanguage('en'); setIsOpen(false); }}
                                    >
                                        EN
                                    </button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default Header;
