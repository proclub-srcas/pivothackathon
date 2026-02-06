'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import GlassNavBar from "@/components/navbar";


import TeamSection from '@/components/sections/TeamSection';

const mentors = [
  {
    name: "Dr. Ranjithkumar Rajamani",
    role: "Vice President",
    company: "Einstein Research Academy",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Aswin Ram",
    role: "Product Owner",
    company: "BOSCH",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sriram M",
    role: "Data Architect",
    company: "Deloitte",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Dinesh Paranthagan",
    role: "CEO & Founder",
    company: "Hackup Technology",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    linkedin: "https://linkedin.com"
  }
];

const crew = [
  {
    name: "Karthik Raja",
    role: "Organizing Lead",
    company: "Programming Club",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Priya Lakshmi",
    role: "Design Lead",
    company: "Programming Club",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Arun Kumar",
    role: "Technical Lead",
    company: "Programming Club",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Meera N",
    role: "Event Coordinator",
    company: "Programming Club",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedin: "https://linkedin.com"
  }
];

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
                                    About PIVOT Hackathon
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Where Innovation{" "}
                                <span className="text-[#005CAA]">Meets Excellence</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                PIVOT Hackathon brings together brilliant minds from academia
                                and cutting-edge technology from industry leaders to create
                                solutions for tomorrow's challenges.
                            </p>
                        </motion.div>

                        {/* Partner Cards */}
                        <motion.div variants={fadeInUp} className="mt-16 relative">
                            {/* Desktop: Flex layout with handshake emojis between cards */}
                            <div className="hidden md:flex md:items-stretch md:gap-6 md:justify-center">
                                {/* SRCAS Card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300 flex-1 max-w-sm"
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
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        SRCAS is a premier educational institution committed to
                                        academic excellence and holistic development.
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

                                {/* Handshake Emoji 1 */}
                                <div className="flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 10, -10, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="bg-white rounded-full p-4 shadow-xl border-2 border-gray-200"
                                    >
                                        <span className="text-4xl">🤝</span>
                                    </motion.div>
                                </div>

                                {/* L&T Technology Services Card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300 flex-1 max-w-sm"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm">
                                            <Image
                                                src="/L&Ts-logo.jpeg"
                                                alt="L&T Technology Services Logo"
                                                width={80}
                                                height={80}
                                                className="w-20 h-20 object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        L&T Technology Services
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        A global leader in Engineering and R&D services, LTTS
                                        empowers businesses with innovative solutions across
                                        industries including automotive, aerospace, industrial
                                        products, and smart cities.
                                    </p>
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

                                {/* Handshake Emoji 2 */}
                                <div className="flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, -10, 10, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5,
                                        }}
                                        className="bg-white rounded-full p-4 shadow-xl border-2 border-[#005CAA]/20"
                                    >
                                        <span className="text-4xl">🤝</span>
                                    </motion.div>
                                </div>

                                {/* Programming Club of SRCAS Card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300 flex-1 max-w-sm"
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
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        Dedicated to fostering innovation and technical excellence
                                        among students. We organize coding competitions, workshops,
                                        and hackathons to build a strong developer community.
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
                                            <span>Hackathon Events</span>
                                        </div>
                                    </div>
                                </motion.div>
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
                                    <p className="text-gray-600 mb-4 leading-relaxed">
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

                                {/* Handshake Emoji 1 */}
                                <div className="flex justify-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="bg-white rounded-full p-3 shadow-lg border-2 border-gray-200"
                                    >
                                        <span className="text-3xl">🤝</span>
                                    </motion.div>
                                </div>

                                {/* L&T Technology Services Card - Mobile */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm">
                                            <Image
                                                src="/L&Ts-logo.jpeg"
                                                alt="L&T Technology Services Logo"
                                                width={80}
                                                height={80}
                                                className="w-20 h-20 object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        L&T Technology Services
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        A global leader in Engineering and R&D services, LTTS
                                        empowers businesses with innovative solutions across
                                        industries including automotive, aerospace, industrial
                                        products, and smart cities.
                                    </p>
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

                                {/* Handshake Emoji 2 */}
                                <div className="flex justify-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="bg-white rounded-full p-3 shadow-lg border-2 border-[#005CAA]/20"
                                    >
                                        <span className="text-3xl">🤝</span>
                                    </motion.div>
                                </div>

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
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        Dedicated to fostering innovation and technical excellence
                                        among students. We organize coding competitions, workshops,
                                        and hackathons to build a strong developer community.
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
                                            <span>Hackathon Events</span>
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
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-[#005CAA]/10 rounded-full border border-gray-200">
                                <span className="text-gray-700 font-medium">Powered by</span>
                                <span className="text-2xl">🤝</span>
                                <span className="text-[#005CAA] font-semibold">
                                    Academic-Industry Collaboration
                                </span>
                                
                            </div>
                        </motion.div>
                    </motion.div>
                    <span className="text-[#005CAA] font-semibold">
                                    .
                                </span>
                </div>
                    <TeamSection title="Our Mentors" members={mentors} id="mentors" />
                    <TeamSection title="Our Crew" members={crew} id="crew" />
            </section>
        </main>
    );
}
