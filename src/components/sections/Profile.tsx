"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2 } from "lucide-react";

export const Profile = () => {
    const { t } = useLanguage();

    return (
        <section id="who-we-are" className="py-24 md:py-32 bg-white text-black relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">{t.whoWeAre.title}</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            {t.whoWeAre.description}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {t.whoWeAre.focus}
                        </p>
                        <p className="text-lg font-semibold text-violet-700 mt-6">
                            {t.whoWeAre.location}
                        </p>
                    </motion.div>

                    {/* Right Column: Team */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
                    >
                        <h3 className="text-2xl font-bold mb-6">{t.whoWeAre.teamTitle}</h3>
                        <ul className="space-y-4">
                            {t.whoWeAre.team.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
