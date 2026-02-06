'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, Code, Trophy, Users, Lightbulb, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface TimelineEvent {
    date: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    type: 'start' | 'milestone' | 'end';
}

const timelineEvents: TimelineEvent[] = [
    {
        date: 'Feb 6, 2026',
        title: 'Registration Opens',
        description: 'Online registrations begin. Form your teams and sign up!',
        icon: <Users className="w-6 h-6" />,
        type: 'start',
    },
    {
        date: 'Feb 10, 2026',
        title: 'ABSTRACT Submission Deadline',
        description: 'Submit your innovative ideas and project proposals.',
        icon: <Lightbulb className="w-6 h-6" />,
        type: 'milestone',
    },
    {
        date: 'Feb 14, 2026',
        title: 'Shortlisted Teams Announced',
        description: 'Selected teams will be notified via email.',
        icon: <CheckCircle className="w-6 h-6" />,
        type: 'milestone',
    },
    {
        date: 'Feb 18, 2026',
        title: 'Hackathon Begins',
        description: '24-hour coding marathon starts! Build, innovate, create.',
        icon: <Code className="w-6 h-6" />,
        type: 'milestone',
    },
    {
        date: 'Feb 20, 2026',
        title: 'Finals & Awards',
        description: 'Final presentations and prize ceremony. Winners announced!',
        icon: <Trophy className="w-6 h-6" />,
        type: 'end',
    },
];

function TimelineItem({
    event,
    index,
}: {
    event: TimelineEvent;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    // Trigger animation when item is 200px from entering viewport
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const isLeft = index % 2 === 0;

    // Staggered delay based on index for sequential appearance
    const baseDelay = index * 0.15;

    // Color schemes based on event type
    const getTypeStyles = () => {
        switch (event.type) {
            case 'start':
                return {
                    ring: 'ring-2 ring-green-400/50',
                    badge: 'from-green-500 to-emerald-600',
                    icon: 'from-green-400 to-emerald-600',
                    glow: 'bg-green-400/20',
                };
            case 'end':
                return {
                    ring: 'ring-2 ring-yellow-400/50',
                    badge: 'from-yellow-500 to-orange-500',
                    icon: 'from-yellow-400 to-orange-500',
                    glow: 'bg-yellow-400/20',
                };
            default:
                return {
                    ring: '',
                    badge: 'from-[#005CAA] to-blue-600',
                    icon: 'from-[#005CAA] to-blue-600',
                    glow: 'bg-[#005CAA]/20',
                };
        }
    };

    const styles = getTypeStyles();

    return (
        <div
            ref={ref}
            className={`relative flex items-center w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
        >
            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -80 : 80, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                    duration: 0.7,
                    delay: baseDelay,
                    ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-20 md:pl-0 text-left`}
            >
                <div
                    className={`group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:border-[#005CAA]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${styles.ring}`}
                >
                    {/* Subtle glow effect */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 ${styles.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Date Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${styles.badge} text-white text-sm font-semibold mb-4 shadow-lg`}>
                        <Calendar className="w-4 h-4" />
                        {event.date}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#005CAA] transition-colors duration-300">
                        {event.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        {event.description}
                    </p>

                    {/* Type indicator */}
                    {event.type === 'start' && (
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                            <Sparkles className="w-4 h-4" />
                            Event Kickoff
                        </div>
                    )}
                    {event.type === 'end' && (
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                            <Trophy className="w-4 h-4" />
                            Grand Finale
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Center Timeline Node */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center z-20">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: baseDelay + 0.1,
                        type: 'spring',
                        stiffness: 200
                    }}
                    className={`w-14 h-14 rounded-xl rotate-45 flex items-center justify-center shadow-xl bg-gradient-to-br ${styles.icon} text-white border-4 border-white`}
                >
                    <div className="-rotate-45">
                        {event.icon}
                    </div>
                </motion.div>
            </div>

            {/* Empty space for alignment */}
            <div className="hidden md:block md:w-5/12" />
        </div>
    );
}

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ['start center', 'end center'],
    });

    // Transform scroll progress to line height percentage
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section
            id="timeline"
            ref={containerRef}
            className="relative py-28 px-4 overflow-hidden bg-transparent"
        >
            {/* Subtle overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 backdrop-blur-[2px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#005CAA]/20 bg-white/80 backdrop-blur-sm text-[#005CAA] text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm"
                    >
                        <Calendar className="w-4 h-4" />
                        Mark Your Calendar
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Event{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005CAA] to-blue-500">
                            Timeline
                        </span>
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
                        From registration to the grand finale, here&apos;s your roadmap to innovation
                    </p>

                    <div className="flex items-center justify-center gap-2 mt-8">
                        <div className="w-12 h-1.5 bg-[#005CAA] rounded-full" />
                        <div className="w-3 h-3 bg-[#005CAA] rounded-full" />
                        <div className="w-12 h-1.5 bg-[#005CAA] rounded-full" />
                    </div>
                </motion.div>

                {/* Timeline Container */}
                <div ref={timelineRef} className="relative">
                    {/* Static Background Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200/70 rounded-full" />

                    {/* Animated Fill Line (Desktop) - Smooth scroll-based animation */}
                    <motion.div
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-[#005CAA] via-blue-500 to-blue-400 rounded-full origin-top"
                        style={{ height: lineHeight }}
                    />

                    {/* Static Background Line (Mobile) */}
                    <div className="md:hidden absolute left-6 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200/70 rounded-full" />

                    {/* Animated Fill Line (Mobile) */}
                    <motion.div
                        className="md:hidden absolute left-6 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-[#005CAA] via-blue-500 to-blue-400 rounded-full origin-top"
                        style={{ height: lineHeight }}
                    />

                    {/* Timeline Events */}
                    <div className="space-y-16 md:space-y-20 relative">
                        {timelineEvents.map((event, index) => (
                            <TimelineItem
                                key={event.date}
                                event={event}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <div className="inline-block p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50">
                        <p className="text-gray-600 mb-6 text-lg">
                            📅 Don&apos;t miss out on any important dates!
                        </p>
                        <a
                            href="#register"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#005CAA] to-blue-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-[#005CAA]/30 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            Register Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
