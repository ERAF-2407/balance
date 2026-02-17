"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    const navLinks = [
        { label: t.nav.manifesto, href: "#manifesto" },
        { label: t.nav.whoWeAre, href: "#who-we-are" },
        { label: t.nav.services, href: "#services" },
        { label: t.nav.contact, href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <Logo className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xl font-bold tracking-widest text-white">BALANCE</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors hover:glow"
                        >
                            {link.label}
                        </a>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        className="text-xs font-bold border border-white/20 px-3 py-1 rounded-full text-white hover:bg-white hover:text-black transition-all"
                    >
                        {language === "es" ? "EN" : "ES"}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-xs font-bold border border-white/20 px-2 py-1 rounded-full text-white"
                    >
                        {language === "es" ? "EN" : "ES"}
                    </button>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg text-gray-300 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
