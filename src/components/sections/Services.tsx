"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Mic2, Users, Briefcase, Trees, Laptop, MapPin, MonitorSmartphone } from "lucide-react";

export const Services = () => {
    const { t } = useLanguage();

    const icons = [Mic2, Users, Briefcase, Trees];
    const modalityIcons = [Laptop, MapPin, MonitorSmartphone];

    return (
        <section id="services" className="py-24 md:py-32 bg-neutral-950 text-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.services.title}</h2>
                    <p className="text-gray-400 text-lg">{t.services.description}</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {t.services.items.map((item, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-neutral-900/50 border border-white/5 p-8 rounded-2xl hover:bg-neutral-900 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-violet-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="text-violet-400 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Modalities */}
                <div className="bg-white/5 rounded-3xl p-10 md:p-16 text-center">
                    <h3 className="text-2xl font-bold mb-10">{t.services.modalities.title}</h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {t.services.modalities.items.map((item, index) => {
                            const Icon = modalityIcons[index];
                            return (
                                <div key={index} className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center">
                                        <Icon className="text-violet-400 w-8 h-8" />
                                    </div>
                                    <span className="font-medium text-lg">{item}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="mt-12 text-violet-300 italic font-medium max-w-2xl mx-auto">
                        "{t.services.differential}"
                    </p>
                </div>
            </div>
        </section>
    );
};
