"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface FloatingLogosProps {
    hideInHero?: boolean;
}

export default function FloatingLogos({ hideInHero = false }: FloatingLogosProps) {
    const [showLogos, setShowLogos] = useState(!hideInHero);

    useEffect(() => {
        if (!hideInHero) {
            setShowLogos(true);
            return;
        }

        const handleScroll = () => {
            // Show logos after scrolling past 100vh (hero section)
            const scrollPosition = window.scrollY;
            const heroHeight = window.innerHeight;

            setShowLogos(scrollPosition > heroHeight * 0.8);
        };

        handleScroll(); // Check initial position
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hideInHero]);

    return (
        <AnimatePresence mode="wait">
            {showLogos && (
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1
                    }}
                    exit={{
                        opacity: 0,
                        x: 100,
                        scale: 0.8
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing curve
                        opacity: { duration: 0.4 },
                        scale: { duration: 0.5 }
                    }}
                    className="fixed top-32 right-10 hidden 2xl:flex flex-col gap-6 p-6 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-2xl z-50 hover:scale-105 transition-transform duration-300"
                >
                    <div className="flex flex-col items-center gap-6">
                        <Image
                            src="/L&Ts-logo.jpeg"
                            alt="L&T Technology Services"
                            width={140}
                            height={60}
                            className="h-12 w-auto object-contain"
                        />
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent" />
                        <Image
                            src="/programming-club-1-logo.png"
                            alt="Programming Club"
                            width={80}
                            height={80}
                            className="h-16 w-auto object-contain"
                        />
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent" />
                        <Image
                            src="/srcas.png"
                            alt="SRCAS"
                            width={80}
                            height={80}
                            className="h-14 w-auto object-contain"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
