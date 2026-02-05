'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Sparkles, Gift } from 'lucide-react';

const prizes = [
    {
        position: '1st',
        title: 'Grand Prize',
        amount: '₹25,000',
        icon: Trophy,
        color: 'from-yellow-400 to-amber-500',
        bgGlow: 'bg-yellow-400/20',
        borderColor: 'border-yellow-400/30',
        shadowColor: 'shadow-yellow-500/20',
        features: ['Cash Prize', 'Internship Opportunity', 'L&T Swag Kit', 'Certificate of Excellence'],
    },
    {
        position: '2nd',
        title: 'Runner Up',
        amount: '₹15,000',
        icon: Medal,
        color: 'from-gray-300 to-gray-400',
        bgGlow: 'bg-gray-300/20',
        borderColor: 'border-gray-300/30',
        shadowColor: 'shadow-gray-400/20',
        features: ['Cash Prize', 'L&T Swag Kit', 'Certificate of Merit'],
    },
    {
        position: '3rd',
        title: 'Second Runner Up',
        amount: '₹10,000',
        icon: Award,
        color: 'from-amber-600 to-amber-700',
        bgGlow: 'bg-amber-600/20',
        borderColor: 'border-amber-500/30',
        shadowColor: 'shadow-amber-600/20',
        features: ['Cash Prize', 'L&T Swag Kit', 'Certificate of Merit'],
    },
];

const specialPrizes = [
    {
        title: 'Best Innovation',
        amount: '₹5,000',
        description: 'Most creative and innovative solution',
        icon: Sparkles,
    },
    {
        title: 'Best UI/UX',
        amount: '₹5,000',
        description: 'Best designed user interface',
        icon: Gift,
    },
    {
        title: "People's Choice",
        amount: '₹5,000',
        description: 'Voted by fellow participants',
        icon: Trophy,
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
        transition: { staggerChildren: 0.15 },
    },
};

const PrizesSection: React.FC = () => {
    return (
        <section id="prizes" className="relative py-24 px-4 overflow-hidden bg-transparent">
            {/* Subtle overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#005CAA]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="mb-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#005CAA]/10 text-[#005CAA] rounded-full text-sm font-semibold uppercase tracking-wider">
                            <Trophy className="w-4 h-4" />
                            Prizes Worth ₹50,000+
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Win Big at{' '}
                        <span className="text-[#005CAA]">PIVOT Hackathon</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Compete for exciting prizes, internship opportunities, and recognition
                        from industry leaders at L&T Technology Services.
                    </motion.p>
                </motion.div>

                {/* Main Prizes */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
                >
                    {prizes.map((prize, index) => {
                        const Icon = prize.icon;
                        const isFirst = index === 0;

                        return (
                            <motion.div
                                key={prize.position}
                                variants={fadeInUp}
                                className={`relative group ${isFirst ? 'md:-mt-8' : ''}`}
                            >
                                {/* Card */}
                                <div className={`
                  relative h-full p-8 rounded-3xl 
                  bg-white/90 backdrop-blur-md border ${prize.borderColor}
                  shadow-xl ${prize.shadowColor}
                  transition-all duration-500
                  group-hover:shadow-2xl group-hover:-translate-y-2
                  overflow-hidden
                `}>
                                    {/* Glow effect */}
                                    <div className={`absolute -top-20 -right-20 w-40 h-40 ${prize.bgGlow} rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50`} />

                                    {/* Position badge */}
                                    <div className={`
                    absolute top-4 right-4 
                    w-12 h-12 rounded-xl 
                    bg-gradient-to-br ${prize.color}
                    flex items-center justify-center
                    shadow-lg
                    transform rotate-12 group-hover:rotate-0 transition-transform duration-300
                  `}>
                                        <span className="text-white font-bold text-lg">{prize.position}</span>
                                    </div>

                                    {/* Icon */}
                                    <div className={`
                    w-20 h-20 mb-6 rounded-2xl 
                    bg-gradient-to-br ${prize.color}
                    flex items-center justify-center
                    shadow-xl
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{prize.title}</h3>
                                    <p className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-6`}>
                                        {prize.amount}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3">
                                        {prize.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prize.color}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Special Category Prizes */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h3
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8"
                    >
                        Special Category Awards
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {specialPrizes.map((prize) => {
                            const Icon = prize.icon;

                            return (
                                <motion.div
                                    key={prize.title}
                                    variants={fadeInUp}
                                    className="group relative"
                                >
                                    <div className="
                    p-6 rounded-2xl 
                    bg-gradient-to-br from-gray-900 to-gray-800
                    border border-gray-700
                    hover:border-[#005CAA]/50
                    transition-all duration-300
                    hover:-translate-y-1
                  ">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-[#005CAA]/20 group-hover:bg-[#005CAA]/30 transition-colors">
                                                <Icon className="w-6 h-6 text-[#005CAA]" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-white mb-1">{prize.title}</h4>
                                                <p className="text-2xl font-bold text-[#005CAA] mb-2">{prize.amount}</p>
                                                <p className="text-gray-400 text-sm">{prize.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 mb-4">
                        All participants will receive certificates and exclusive L&T goodies!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm">
                            🎓 Certificates for All
                        </div>
                        <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm">
                            🎁 Swag Kits
                        </div>
                        <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm">
                            💼 Networking Opportunities
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrizesSection;
