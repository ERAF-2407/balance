"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Manifesto = () => {
    const { t } = useLanguage();

    return (
        <section id="manifesto" className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
            {/* Side Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="w-16 h-1 bg-violet-600 mb-8" />

                    <h2 className="text-3xl md:text-4xl font-light mb-8 text-neutral-400">
                        {t.manifesto.title}
                    </h2>

                    <p className="text-2xl md:text-4xl font-medium leading-relaxed md:leading-normal">
                        <span className="text-white">{t.manifesto.text.split('.')[0]}.</span>
                        <span className="block mt-6 text-gray-400 font-light">
                            {t.manifesto.text.split('.').slice(1).join('.')}
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
