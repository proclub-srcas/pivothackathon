'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Typography } from '@/components/Typography';
import { problemData } from '@/config/problems';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function ProblemSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lockedIndex, setLockedIndex] = useState<number | null>(null);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsSmallScreen(w <= 640);
      setIsMediumScreen(w > 640 && w <= 1100);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const isDesktop = !isSmallScreen && !isMediumScreen;

  const expandedWidth = '45%';
  const collapsedWidth = '8%';
  const idleWidth = '18%';

  const anyActive = lockedIndex !== null || activeIndex !== null;

  const desktopGap = anyActive ? 'gap-2' : 'gap-3';
  const gridGap = anyActive ? 'gap-3' : 'gap-4';
  const mobileGap = anyActive ? 'gap-3' : 'gap-4';

  return (
    <section
      id="problems"
      className="relative py-28 w-full min-h-screen lg:min-h-[1000px] pt-[18vh] text-white overflow-hidden bg-cover bg-top"
      style={{
        backgroundImage: 'url("/backgrounds/themes.png")',
      }}
    >
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* HEADING */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full flex flex-col items-center gap-4"
        >
          <span
            className="font-wc-rough-trad text-[clamp(2.5rem,5vw,4rem)] text-black text-center font-bold "
            style={{ letterSpacing: '2px' }}
          >
            <div className="max-w-7xl mx-auto relative z-10">
              {/* Section Title */}
              <div className="flex flex-col items-center justify-center mb-20 text-center space-y-4">
                <Typography.H2 className="font-wc-rough-trad text-black text-[clamp(3rem,5vw,5rem)] leading-none">
                  Problem{' '}
                  <span className="font-wc-rough-trad text-[#005CAA] block md:inline">
                    STATEMENTS
                  </span>
                </Typography.H2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-gray-700 to-black rounded-full mt-4" />
              </div>
            </div>
          </span>
          <p className="text-gray-700 text-center max-w-2xl text-sm md:text-base font-averta-std">
            Choose from our curated problem statements focusing on
            cybersecurity, sustainability, and smart city solutions.
          </p>

        </motion.div>

        {/* CARDS CONTAINER */}
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 w-full"
        >
          <div
            className={
              isSmallScreen
                ? `flex flex-col ${mobileGap}`
                : isMediumScreen
                  ? `grid grid-cols-3 ${gridGap} place-items-center`
                  : `flex ${desktopGap} items-stretch justify-center`
            }
          >
            {problemData.map((problem, idx) => {
              const isActive = lockedIndex === idx || activeIndex === idx;

              const targetWidth = isDesktop
                ? anyActive
                  ? isActive
                    ? expandedWidth
                    : collapsedWidth
                  : idleWidth
                : '100%';

              const forcedStyle = !isDesktop
                ? {
                  width: '100%',
                  minWidth: '100%',
                  height: isSmallScreen ? '420px' : '500px',
                }
                : {};

              return (
                <motion.div
                  key={problem.id}
                  layout
                  animate={{ width: targetWidth }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  onMouseEnter={() =>
                    isDesktop && lockedIndex === null && setActiveIndex(idx)
                  }
                  onMouseLeave={() =>
                    isDesktop && lockedIndex === null && setActiveIndex(null)
                  }
                  onClick={() =>
                    setLockedIndex((prev) => (prev === idx ? null : idx))
                  }
                  className={`group relative h-[520px] rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 ${isActive
                      ? 'border-white/60 shadow-2xl shadow-purple-900/20'
                      : 'border-white/10'
                    }`}
                  style={forcedStyle}
                >
                  {/* 1. BACKGROUND IMAGE */}
                  <Image
                    src={problem.img1}
                    alt={problem.heading}
                    fill
                    className={`object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'
                      }`}
                  />

                  {/* 2. GRADIENT OVERLAY */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t transition-colors duration-500 ${isActive
                        ? 'from-black/95 via-black/60 to-transparent'
                        : 'from-black/80 via-black/20 to-transparent'
                      }`}
                  />

                  {/* 3. PROBLEM NUMBER BADGE */}
                  <div className="absolute top-4 left-4 bg-purple-600/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-white">
                      Problem {idx + 1}
                    </span>
                  </div>

                  {/* 4. CONTENT AREA */}
                  <div className="absolute inset-x-0 bottom-0 h-full p-6 pointer-events-none">
                    {/* TITLE */}
                    <div
                      className="absolute left-6 right-6 transition-all duration-500 ease-in-out"
                      style={{
                        bottom: isActive ? '140px' : '30px',
                      }}
                    >
                      <h3 className="font-wc-rough-trad text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-md break-words leading-tight">
                        {problem.heading}
                      </h3>
                    </div>

                    {/* DESCRIPTION */}
                    <div
                      className={`absolute left-6 right-6 bottom-6 transition-all duration-500 ease-in-out ${isActive ? 'delay-300' : 'delay-0'
                        }`}
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? 'translateY(0)'
                          : 'translateY(20px)',
                      }}
                    >
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-averta-std line-clamp-6 sm:line-clamp-5 min-w-[200px]">
                        {problem.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* INSTRUCTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm md:text-base font-averta-std max-w-2xl mx-auto">
            💡 Hover over cards to preview • Click to expand and read full
            details
          </p>
        </motion.div>
      </div>
    </section>
  );
}
