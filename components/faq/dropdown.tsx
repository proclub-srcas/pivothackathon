'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Typography from '../Typography';

type DropdownProps = {
  question: string;
  answer: React.ReactNode;
};

export const Dropdown: React.FC<DropdownProps> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="relative w-full mb-6">
      {/* Decorative Tab - Visible only when open or hovered? Let's keep it consistent */}
      <div
        className={`absolute -top-3 left-6 w-32 h-6 bg-[#005CAA] rounded-t-xl transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
      />

      {/* Main Card */}
      <div
        className={`relative z-10 bg-[#181818] rounded-2xl border-2 border-[#ACACAC] overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-xl shadow-blue-900/20' : ''}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
        >
          <Typography.H6 className="text-white !mb-0 pr-4">{question}</Typography.H6>
          <div
            className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'} ${isHover && !isOpen ? 'scale-110' : ''}`}
          >
            <Plus size={28} className="text-white" />
          </div>
        </button>

        {/* Expandable Body */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white"
            >
              <div className="p-6 border-t border-gray-200">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Offset Card Effect */}
      <div
        className={`absolute inset-0 bg-[#005CAA] rounded-2xl -z-10 transition-transform duration-300 ${isOpen ? 'translate-x-2 translate-y-2' : 'translate-x-0 translate-y-0'}`}
      />
    </div>
  );
};
