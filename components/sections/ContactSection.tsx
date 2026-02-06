'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User, Users, ExternalLink } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="relative py-24 px-4 overflow-hidden bg-transparent">
            {/* Subtle overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div>
                            <motion.h2
                                variants={fadeInUp}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4"
                            >
                                How can we<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005CAA] to-blue-500">
                                    Help you?
                                </span>
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                className="text-gray-600 text-lg max-w-md"
                            >
                                Hacker Experience is what we prioritize! Have questions, need
                                assistance, or just want to connect? Feel free to reach out!
                            </motion.p>
                        </div>

                        {/* Phone Icon */}
                        <motion.div
                            variants={fadeInUp}
                            className="hidden md:flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-[#005CAA] to-blue-600 shadow-xl shadow-[#005CAA]/30"
                        >
                            <Phone className="w-12 h-12 text-white" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Contact Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                >
                    {/* Staff Coordinator */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-[#005CAA]/10">
                                <User className="w-5 h-5 text-[#005CAA]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Staff Coordinator</h3>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 hover:border-[#005CAA]/30 hover:shadow-xl transition-all duration-300">
                            <p className="font-semibold text-gray-900 mb-1">Dr. M. Praneesh</p>
                            <a href="tel:+919629924052" className="text-gray-600 hover:text-[#005CAA] transition-colors flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                +91 9629924052
                            </a>
                        </div>
                    </motion.div>

                    {/* Address */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-[#005CAA]/10">
                                <MapPin className="w-5 h-5 text-[#005CAA]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Address</h3>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 hover:border-[#005CAA]/30 hover:shadow-xl transition-all duration-300">
                            <p className="text-gray-700 leading-relaxed">
                                SRI RAMAKRISHNA COLLEGE OF ARTS & SCIENCE <br />
                                Nava India, Avinashi Road <br />
                                Coimbatore, Tamil Nadu 641006
                            </p>
                        </div>
                    </motion.div>

                    {/* Student Coordinators */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-[#005CAA]/10">
                                <Users className="w-5 h-5 text-[#005CAA]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Student Coordinators</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 hover:border-[#005CAA]/30 hover:shadow-xl transition-all duration-300">
                                <p className="font-semibold text-gray-900 text-sm mb-1">Mr. B. Pravin</p>
                                <a href="tel:+918778227393" className="text-gray-600 hover:text-[#005CAA] transition-colors text-sm flex items-center gap-1">
                                    <Phone className="w-3 h-3" />
                                    +91 8778227393
                                </a>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 hover:border-[#005CAA]/30 hover:shadow-xl transition-all duration-300">
                                <p className="font-semibold text-gray-900 text-sm mb-1">Mr. R.S Dhananjay</p>
                                <a href="tel:+919345060349" className="text-gray-600 hover:text-[#005CAA] transition-colors text-sm flex items-center gap-1">
                                    <Phone className="w-3 h-3" />
                                    +91 9345060349
                                </a>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 hover:border-[#005CAA]/30 hover:shadow-xl transition-all duration-300 col-span-2 md:col-span-1">
                                <p className="font-semibold text-gray-900 text-sm mb-1">Mr. Sarath P</p>
                                <a href="tel:+919003802153" className="text-gray-600 hover:text-[#005CAA] transition-colors text-sm flex items-center gap-1">
                                    <Phone className="w-3 h-3" />
                                    +91 90038 02153
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-[#005CAA]/10">
                                <Mail className="w-5 h-5 text-[#005CAA]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 hover:border-[#005CAA]/30 hover:shadow-xl transition-all duration-300">
                            <a
                                href="mailto:proclub@srcas.ac.in"
                                className="text-[#005CAA] hover:text-blue-600 transition-colors text-lg font-medium flex items-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                proclub@srcas.ac.in
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-[#005CAA]/10">
                            <MapPin className="w-5 h-5 text-[#005CAA]" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Reaching SRCAS Coimbatore</h3>
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white/80 backdrop-blur-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2649563948785!2d76.9868191!3d11.0226208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85849d74c3695%3A0x9153ec3168293ec5!2sSri%20Ramakrishna%20College%20of%20Arts%20%26%20Science!5e0!3m2!1sen!2sin!4v1709283746000!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>

                    <div className="mt-4 text-center">
                        <a
                            href="https://maps.app.goo.gl/W7uqokm1bK1miC1b9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#005CAA] transition-colors text-sm"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Open in Google Maps
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
