import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Typography } from '@/components/Typography';
import { Dropdown } from '@/components/faq/dropdown';
import { questions, srcasQuestions } from './index';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const FaqList: React.FC = () => {
  // State to track which problem statement is currently open (accordion behavior)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // State to track if we are showing SRCAS specific problem statements
  const [isSrcas, setIsSrcas] = useState(false);

  const activeQuestions = isSrcas ? srcasQuestions : questions;

  const handleToggle = (index: number) => {
    // If clicking the already open item, close it. Otherwise, open the clicked item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-24 w-full relative overflow-hidden"
      id="problems"
    >
      {/* Decorative Left Element - Pixel Question Mark */}
      <motion.div
        className="hidden xl:block absolute left-[5%] top-[40%] text-white/5"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 2h4v4h4v4h-4v4h-4v-4h4V6h-4V2zM10 18h4v4h-4v-4z" />
          {/* Pixel art style glow/shadow */}
          <rect x="8" y="2" width="2" height="4" fillOpacity="0.3" />
          <rect x="14" y="2" width="2" height="4" fillOpacity="0.3" />
        </svg>
      </motion.div>

      {/* Decorative Right Element - Pixel Bulb/Idea */}
      <motion.div
        className="hidden xl:block absolute right-[5%] top-[40%] text-white/5"
        animate={{
          y: [20, -20, 20],
          rotate: [0, -5, 0, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 2h6v2h2v4h2v6h-2v2h-2v2h-6v-2H7v-2H5V8h2V4h2V2zm2 16h2v2h-2v-2zm-2-2h6v2H9v-2zm0-2h6v2H9v-2zm-2-6h10V6h-2V4h-6v2H7v4z" />
        </svg>
      </motion.div>

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
                <div className="bg-[#005CAA]/5 border border-[#005CAA]/10 rounded-2xl p-6 mt-6 max-w-3xl mx-auto backdrop-blur-sm">
                  <p className="text-gray-700 text-center text-lg font-medium leading-relaxed">
                    🎓 <span className="font-bold text-[#005CAA]">Engineering Students</span>, explore the challenges below.
                    <br />
                    🏛️ <span className="font-bold text-[#005CAA]">SRCAS Students</span>, switch to view your exclusive problem statements.
                  </p>
                </div>
              </div>
            </div>
          </span>
        </motion.div>

        {/* TOGGLE BUTTONS */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-40 mt-8 mb-16 relative z-20"
        >
          <button
            onClick={() => {
              setIsSrcas(false);
              setOpenIndex(null);
            }}
            className={`
              relative inline-flex items-center gap-2 px-4 py-2 md:px-8 md:py-3 rounded-full 
              font-semibold text-xs md:text-base transition-all duration-300 shadow-lg border-2
              ${!isSrcas
                ? 'bg-[#005CAA] text-white border-[#005CAA] hover:bg-[#004a8c]'
                : 'bg-white text-[#005CAA] border-[#005CAA] hover:bg-[#005CAA]/5'
              }
            `}
          >
            Engineering Students
          </button>

          <button
            onClick={() => {
              setIsSrcas(true);
              setOpenIndex(null);
            }}
            className={`
              relative inline-flex items-center gap-2 px-4 py-2 md:px-8 md:py-3 rounded-full 
              font-semibold text-xs md:text-base transition-all duration-300 shadow-lg border-2
              ${isSrcas
                ? 'bg-[#005CAA] text-white border-[#005CAA] hover:bg-[#004a8c]'
                : 'bg-white text-[#005CAA] border-[#005CAA] hover:bg-[#005CAA]/5'
              }
            `}
          >
            Only For SRCAS Students
          </button>
        </motion.div>

      </div>
      <div className="w-full max-w-7xl px-6 grid grid-cols-1 gap-6 mt-10 relative z-10 items-start">
        {activeQuestions.map((question, index) => (
          <Dropdown
            key={`${isSrcas ? 'srcas' : 'standard'}-question-${index}`}
            question={`PS${index + 1}: ${question.question}`}
            answer={question.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section >
  );
};
