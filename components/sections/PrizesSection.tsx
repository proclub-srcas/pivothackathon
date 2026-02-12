'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Sparkles, Gift } from 'lucide-react';

const prizes = [
    {
        position: '1st',
        title: 'Winner',
        reward: 'Premier Internship',
        subReward: 'Direct Opportunity',
        icon: Trophy,
        color: 'from-yellow-400 to-amber-500',
        bgGlow: 'bg-yellow-400/20',
        borderColor: 'border-yellow-400/30',
        shadowColor: 'shadow-yellow-500/20',
        features: ['Premier Internship Offer', 'Executive Mentorship', 'Exclusive L&T Swag Kit', 'Trophy of Excellence'],
    },
    {
        position: '2nd',
        title: '1st Runner Up',
        reward: 'Priority Access',
        subReward: 'Internship Fast-Track',
        icon: Medal,
        color: 'from-gray-300 to-gray-400',
        bgGlow: 'bg-gray-300/20',
        borderColor: 'border-gray-300/30',
        shadowColor: 'shadow-gray-400/20',
        features: ['Internship Interview', 'Resume Spotlight', 'Exclusive L&T Swag Kit', 'Certificate of Merit'],
    },
    {
        position: '3rd',
        title: '2nd Runner Up',
        reward: 'Talent Spotlight',
        subReward: 'Evaluation Pool',
        icon: Award,
        color: 'from-amber-600 to-amber-700',
        bgGlow: 'bg-amber-600/20',
        borderColor: 'border-amber-500/30',
        shadowColor: 'shadow-amber-600/20',
        features: ['Internship Consideration', 'Profile Recommendation', 'Exclusive L&T Swag Kit', 'Certificate of Merit'],
    },
];

const specialPrizes = [
    {
        title: 'Best Innovation',
        description: 'Most creative and innovative solution',
        icon: Sparkles,
    },
    {
        title: 'Best UI/UX',
        description: 'Best designed user interface',
        icon: Gift,
    },
    {
        title: "People's Choice",
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
                            {/* Career Defining Opportunities */}
                        </span>
                    </motion.div>

                    {/* <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                    >
                        {/* Win Big at{' '} 
                        <span className="text-[#005CAA]">Exciting Rewards and Opportunities</span>
                    </motion.h2> */}

                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        {/* It's your gateway to the industry. */}
                        {/* Top performers will secure  with
                        L&T Product Development Centre, working on real-world engineering challenges. */}
                    </motion.p>
                </motion.div>

                {/* Main Prizes */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="flex justify-center mb-16"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="relative group max-w-2xl w-full"
                    >
                        {/* Card */}
                        <div className={`
                  relative h-full p-10 rounded-3xl 
                  bg-white/90 backdrop-blur-md border border-yellow-400/30
                  shadow-xl shadow-yellow-500/20
                  transition-all duration-500
                  group-hover:shadow-2xl group-hover:-translate-y-2
                  overflow-hidden
                  text-center
                `}>
                            {/* Glow effect */}
                            <div className={`absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50`} />

                            {/* Icon */}
                            <div className={`
                    w-24 h-24 mb-8 rounded-2xl mx-auto
                    bg-gradient-to-br from-yellow-400 to-amber-500
                    flex items-center justify-center
                    shadow-xl
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                                <Trophy className="w-12 h-12 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-500 mb-2 uppercase tracking-wider">Top Performers</h3>
                            <div className="mb-8">
                                <p className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent leading-tight mb-4`}>
                                    {/* Internship Opportunity */}
                                </p>
                                <p className="text-gray-600 font-medium text-3xl leading-relaxed">
                                    Exciting Rewards and Opportunities. <br />
                                    It's your gateway to the industry.
                                </p>
                            </div>

                            {/* Features */}
                            {/* <ul className="flex flex-wrap justify-center gap-4 mt-6">
                                {['Direct Industry Entry', 'Executive Mentorship', 'Exclusive L&T Swag Kit', 'Certificate of Excellence'].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Special Category Prizes */}
                {/* <motion.div
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
                </motion.div> */}

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 mb-4">
                        All Finalists will receive certificates and exclusive L&T goodies!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm">
                            🎓 Certificates for All Finalists
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