'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CalendarClock, AlertTriangle } from 'lucide-react';

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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 30 }}
                            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                            className="relative max-w-md w-full bg-gradient-to-br from-white via-white to-blue-50 rounded-3xl shadow-2xl border border-[#005CAA]/20 overflow-hidden pointer-events-auto"
                        >
                            {/* Top accent bar */}
                            <div className="h-1.5 bg-gradient-to-r from-[#005CAA] via-blue-400 to-[#005CAA]" />

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10 group shadow-sm"
                            >
                                <X className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors" />
                            </button>

                            {/* Content */}
                            <div className="p-8 text-center relative">
                                {/* Decorative background elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#005CAA]/5 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl" />

                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                                    className="relative inline-flex items-center justify-center w-20 h-20 mb-5 bg-gradient-to-br from-[#005CAA] to-blue-600 rounded-2xl shadow-lg shadow-[#005CAA]/30"
                                >
                                    <CalendarClock className="w-10 h-10 text-white" />
                                </motion.div>

                                {/* Alert Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex justify-center mb-4"
                                >
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-sm font-semibold">
                                        <AlertTriangle className="w-4 h-4" />
                                        Important Update
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                                >
                                    Deadline Extended!
                                </motion.h2>

                                {/* Message */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-gray-600 text-base mb-5 leading-relaxed relative z-10"
                                >
                                    The <span className="font-semibold text-[#005CAA]">Abstract Submission Deadline</span> for PIVOT Innovation Challenge has been extended.
                                </motion.p>

                                {/* New Date Highlight */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.55 }}
                                    className="mb-6 p-4 bg-[#005CAA]/5 border border-[#005CAA]/15 rounded-2xl relative z-10"
                                >
                                    <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-1">New Deadline</p>
                                    <p className="text-2xl font-bold text-[#005CAA]">March 1, 2026</p>
                                    <div className="flex items-center justify-center gap-1.5 mt-1 text-gray-500">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-medium">11:59 PM IST</span>
                                    </div>
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#005CAA] to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-[#005CAA]/25 hover:shadow-xl hover:shadow-[#005CAA]/35 transform hover:scale-105 transition-all duration-300"
                                    >
                                        Got it!
                                    </button>
                                </motion.div>

                                {/* Footer Text */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-5 text-xs text-gray-400 relative z-10"
                                >
                                    Don&apos;t miss the new deadline — submit your abstract now! 🚀
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AnnouncementModal;
