"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export const Footer = () => {
    const { t } = useLanguage();
    const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Placeholder ID

    const handleFormSubmit = async (e: React.FormEvent) => {
        // Since we don't have a real ID, we just prevent default to avoid error
        // In production, this would use the handleSubmit from useForm
        e.preventDefault();
        alert("Form submission simulated (missing Formspree ID)");
    };

    return (
        <footer id="contact" className="bg-black text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                    {/* Contact Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Logo />
                            <span className="text-2xl font-bold tracking-widest">BALANCE</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {t.contact.title}
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            {t.contact.description}
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:contact@biosbalance.net" className="flex items-center gap-3 text-xl hover:text-violet-400 transition-colors">
                                <Mail className="w-5 h-5" />
                                contact@biosbalance.net
                            </a>
                            <div className="flex gap-4 mt-8">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-600 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-600 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10">
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.form.name}</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.form.company}</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.form.email}</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.form.message}</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors" />
                            </div>
                            <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl transition-all">
                                {t.contact.form.submit}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} BALANCE. {t.footer.tagline}</p>
                </div>
            </div>
        </footer>
    );
};
