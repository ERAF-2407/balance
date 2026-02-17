"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const },
        },
    };

    return (
        <section className="relative h-screen flex flex-col items-center justify-center bg-black text-white px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center max-w-4xl"
            >
                <motion.h2 variants={itemVariants} className="text-xl md:text-2xl tracking-[0.2em] font-light text-violet-400 mb-4">
                    {t.hero.subtitle}
                </motion.h2>

                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
                    {t.hero.title}
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                    {t.hero.subtext}
                </motion.p>

                <motion.a
                    href="#manifesto"
                    variants={itemVariants}
                    className="inline-block px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(109,40,217,0.5)]"
                >
                    {t.hero.cta}
                </motion.a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-gray-500 w-6 h-6" />
            </motion.div>
        </section>
    );
};
