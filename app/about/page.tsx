'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import GlassNavBar from "@/components/navbar";


import OrganizersSection from '@/components/sections/OrganizersSection';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <GlassNavBar />
            {/* About Section */}
            <section className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {/* Hero Header */}
                        <motion.div variants={fadeInUp} className="text-center mb-16">
                            <div className="inline-block px-6 py-2 bg-[#005CAA]/10 rounded-full mb-6">
                                <span className="text-[#005CAA] font-semibold uppercase tracking-wider text-sm">
                                    About PIVOT Innovation Challenge
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
                                Where Innovation{" "}
                                <span className="text-[#005CAA]">Meets Excellence</span>
                            </h1>
                            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                PIVOT Innovation Challenge brings together brilliant minds from academia
                                and cutting-edge technology from industry leaders to create
                                solutions for tomorrow's challenges.
                            </p>
                        </motion.div>

                        {/* Partner Cards */}
                        <motion.div variants={fadeInUp} className="mt-16 relative">
                            {/* Desktop: Two-row layout */}
                            <div className="hidden md:block">
                                {/* First Row: SRCAS and Programming Club */}
                                <div className="flex items-stretch gap-8 justify-center mb-8">
                                    {/* SRCAS Card */}
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300 flex-1 max-w-md"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                                <Image
                                                    src="/srcas.png"
                                                    alt="SRCAS Logo"
                                                    width={80}
                                                    height={80}
                                                    className="w-20 h-20 object-contain"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            SRCAS
                                        </h3>
                                        <p className="text-gray-600 text-base mb-4 leading-relaxed text-justify">
                                            Sri Ramakrishna College of Arts and Science
                                            (SRCAS), Coimbatore, ranked 76th in NIRF
                                            2025, excels in teaching, research, and learning
                                            resources. Accredited with NAAC 'A+' grade
                                            and affiliated to Bharathiar University, SRCAS
                                            offers diverse programs and empowers
                                            students through innovation and quality
                                            education.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-base text-[#005CAA]">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                <span>Academic Excellence</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                <span>Holistic Development</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                <span>Innovation & Research Hub</span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Programming Club of SRCAS Card */}
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300 flex-1 max-w-md"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                                <Image
                                                    src="/programming-club-1-logo.png"
                                                    alt="Programming Club Logo"
                                                    width={80}
                                                    height={80}
                                                    className="w-20 h-20 object-contain"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            Programming Club of SRCAS
                                        </h3>
                                        <p className="text-gray-600 text-base mb-4 leading-relaxed text-justify">
                                            Dedicated to fostering innovation and technical excellence
                                            among students. We organize coding competitions, workshops,
                                            and Innovation Challenges to build a strong developer community.
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                <span>Coding Competitions</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                <span>Technical Workshops</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                <span>Innovation ChallengeEvents</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Second Row:  L&T Product Development Centre(Centered) */}
                                <div className="flex justify-center">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300 w-full max-w-4xl"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                                <Image
                                                    src="/L&Ts-logo.jpeg"
                                                    alt="L&T Product Development Centre"
                                                    width={80}
                                                    height={80}
                                                    className="w-20 h-20 object-contain"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            L&T Product Development Centre
                                        </h3>
                                        <div className="text-gray-600 text-base mb-4 leading-relaxed space-y-4 text-justify">
                                            <p>
                                                L&T Product Development Centre is an Indian multinational engaged in EPC Projects, Hi-Tech Manufacturing and Services, operating in over 50 countries worldwide. The Product Development Centre (PDC), a specialized product design and development organization, is positioned as an innovation engine for industrial transformation. It drives mechanization, automation, import substitution, faster speed-to-market, and operational excellence through practical and scalable engineering solutions.
                                            </p>
                                            <p>
                                                With over 20 years of proven engineering excellence and a strong talent pool representing 500+ man-years of skilled experience, the unit delivers end-to-end product development across diverse domains—from concept and detailed design to validation and manufacturing support. Its strength lies in deep domain knowledge supported by established processes that ensure scalability, reliability, and consistent quality, enabling L&T to sustain leadership in its major lines of business.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-base text-[#005CAA]">
                                                <span className="w-2 h-2 bg-[#005CAA] rounded-full"></span>
                                                <span>Global Engineering Excellence</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                                <span className="w-2 h-2 bg-[#005CAA] rounded-full"></span>
                                                <span>Cutting-Edge Technology Solutions</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                                <span className="w-2 h-2 bg-[#005CAA] rounded-full"></span>
                                                <span>Industry-Academia Partnerships</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Mobile: Flex column with 3 cards */}
                            <div className="md:hidden flex flex-col gap-6">
                                {/* SRCAS Card - Mobile */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm">
                                            <Image
                                                src="/srcas.png"
                                                alt="SRCAS Logo"
                                                width={80}
                                                height={80}
                                                className="w-20 h-20 object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        SRCAS
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                                        Sri Ramakrishna College of Arts and Science
                                        (SRCAS), Coimbatore, ranked 76th in NIRF
                                        2025, excels in teaching, research, and learning
                                        resources. Accredited with NAAC r A+' grade
                                        and affiliated to Bharathiar University, SRCAS
                                        offers diverse programs and empowers
                                        students through innovation and quality
                                        education.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                            <span>Academic Excellence</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                            <span>Holistic Development</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                            <span>Innovation & Research Hub</span>
                                        </div>
                                    </div>
                                </motion.div>



                                {/*L&T Product Development Centre Card - Mobile */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm">
                                            <Image
                                                src="/L&Ts-logo.jpeg"
                                                alt="L&T Product Development Centre"
                                                width={80}
                                                height={80}
                                                className="w-20 h-20 object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        L&T Product Development Centre
                                    </h3>
                                    <div className="text-gray-600 text-sm mb-4 leading-relaxed space-y-4 text-justify">
                                        <p>
                                            L&T Product Development Centre is an Indian multinational engaged in EPC Projects, Hi-Tech Manufacturing and Services, operating in over 50 countries worldwide. The Product Development Centre (PDC), a specialized product design and development organization, is positioned as an innovation engine for industrial transformation. It drives mechanization, automation, import substitution, faster speed-to-market, and operational excellence through practical and scalable engineering solutions.
                                        </p>
                                        <p>
                                            With over 20 years of proven engineering excellence and a strong talent pool representing 500+ man-years of skilled experience, the unit delivers end-to-end product development across diverse domains—from concept and detailed design to validation and manufacturing support. Its strength lies in deep domain knowledge supported by established processes that ensure scalability, reliability, and consistent quality, enabling L&T to sustain leadership in its major lines of business.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                            <span className="w-2 h-2 bg-[#005CAA] rounded-full"></span>
                                            <span>Global Engineering Excellence</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                            <span className="w-2 h-2 bg-[#005CAA] rounded-full"></span>
                                            <span>Cutting-Edge Technology Solutions</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                            <span className="w-2 h-2 bg-[#005CAA] rounded-full"></span>
                                            <span>Industry-Academia Partnerships</span>
                                        </div>
                                    </div>
                                </motion.div>



                                {/* Programming Club of SRCAS Card - Mobile */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm">
                                            <Image
                                                src="/programming-club-1-logo.png"
                                                alt="Programming Club Logo"
                                                width={80}
                                                height={80}
                                                className="w-20 h-20 object-contain"
                                            />
                                        </div>

                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        Programming Club of SRCAS
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                                        Dedicated to fostering innovation and technical excellence
                                        among students. We organize coding competitions, workshops,
                                        and Innovation Challenges to build a strong developer community.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                            <span>Coding Competitions</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                            <span>Technical Workshops</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-[#005CAA]">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                            <span>Innovation ChallengeEvents</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Partnership Badge */}
                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 flex justify-center"
                        >
                            {/* <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-[#005CAA]/10 rounded-full border border-gray-200">
                                <span className="text-gray-700 font-medium">Powered by</span>
                                <span className="text-2xl">🤝</span>
                                <span className="text-[#005CAA] font-semibold">
                                    Academic-Industry Collaboration
                                </span>

                            </div> */}
                        </motion.div>
                    </motion.div>
                    <span className="text-[#005CAA] font-semibold">
                        .
                    </span>
                </div>
                <OrganizersSection />
            </section>
        </main>
    );
}