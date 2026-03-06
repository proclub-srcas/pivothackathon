'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Megaphone, CalendarDays } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { ArrowRight } from "lucide-react";

const AnnouncementModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show modal after a short delay when page loads
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-slate-900/40 z-[100]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-lg w-full pointer-events-auto mt-10 md:mt-0"
                        >
                            {/* Blue Accent Frame Backgrounds */}
                            {/* Top right block */}
                            <div className="absolute -top-6 -right-6 w-3/4 h-3/4 bg-[#005CAA] rounded-[3rem] -z-10 shadow-xl" />
                            {/* Bottom left block */}
                            <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 bg-[#005CAA] rounded-[3rem] -z-10 shadow-xl" />

                            {/* Main White Card */}
                            <div className="relative bg-[#f8f9fa] rounded-[2.5rem] px-8 pt-6 pb-10 md:px-12 md:pt-8 md:pb-12 shadow-[inset_0_2px_10px_rgba(255,255,255,0.8),0_15px_30px_rgba(0,0,0,0.15)] text-center flex flex-col items-center">

                                {/* Megaphone Icon (protruding) */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -40 }}
                                    animate={{ scale: 1, rotate: -15 }}
                                    transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                                    className="absolute -top-10 -left-4 md:-top-14 md:-left-12"
                                >
                                    <div className="relative">
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-blue-300 blur-2xl opacity-40 rounded-full" />
                                        <Megaphone className="w-32 h-32 md:w-36 md:h-36 text-[#005CAA] drop-shadow-xl fill-[#005CAA]/10" strokeWidth={1} />
                                    </div>
                                </motion.div>

                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-gray-200/60 hover:bg-gray-300 transition-colors z-10 group"
                                >
                                    <X className="w-5 h-5 text-gray-600 transition-colors" />
                                </button>

                                {/* Title */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-14 mb-4 flex flex-col items-center w-full"
                                >
                                    <h1 className="text-2xl md:text-3xl font-black text-[#005CAA] uppercase tracking-tight leading-loose text-center">
                                        🎉 Results Announced! 🎉
                                    </h1>
                                </motion.div>

                                {/* Message */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-800 text-base md:text-lg mb-5 font-medium leading-relaxed max-w-sm mx-auto"
                                >
                                    <p>
                                        The finalists for <span className="font-bold text-[#005CAA]">PIVOT Innovation Challenge</span> have been selected! Check if your team made it to the finals.
                                    </p>
                                </motion.div>

                                {/* Date Box
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mb-6 p-5 bg-blue-50/50 border border-blue-100 rounded-2xl shadow-sm text-center flex flex-col items-center justify-center w-full max-w-xs mx-auto"
                                >
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <CalendarDays className="w-5 h-5 text-[#005CAA]" />
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Announcement Date</p>
                                    </div>
                                    <p className="text-2xl md:text-3xl font-black text-[#005CAA]">March 5, 2026</p>
                                </motion.div> */}


                                {/* Instruction Text */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.55 }}
                                    className="text-gray-500 text-sm mb-6 font-medium max-w-sm mx-auto"
                                >
                                    <p>Congratulations to all selected teams! 🏆</p>
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="w-full"
                                >
                                    <Link
                                        href="/finalists"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full max-w-xs inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#005CAA] text-white font-bold rounded-xl shadow-lg hover:bg-[#004a8c] hover:shadow-[#005CAA]/25 transform transition-all duration-300 mx-auto"
                                    >
                                        View Finalists! 🏆
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AnnouncementModal;
