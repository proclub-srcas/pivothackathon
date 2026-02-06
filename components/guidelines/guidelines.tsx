'use client';

import React from 'react';
import { Typography } from '@/components/Typography';
import { guidelinesData } from '@/config/guidelines';
import {
  Clock,
  FileText,
  Sparkles,
  IdCard,
  Users,
  MapPin,
  Utensils,
  User,
  ShieldCheck,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  hackathon: <Clock className="w-8 h-8 text-white" />,
  register: <FileText className="w-8 h-8 text-white" />,
  ppt: <FileText className="w-8 h-8 text-white" />,
  'no-prerequisites': <Sparkles className="w-8 h-8 text-white" />,
  'id-card': <IdCard className="w-8 h-8 text-white" />,
  team: <Users className="w-8 h-8 text-white" />,
  'free-food': <Utensils className="w-8 h-8 text-white" />,
  'in-person': <User className="w-8 h-8 text-white" />,
  venue: <MapPin className="w-8 h-8 text-white" />,
  safe: <ShieldCheck className="w-8 h-8 text-white" />,
};

const GuidelinesSection: React.FC = () => {
  return (
    <section id="guidelines" className="relative py-24 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary-soft/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center mb-20 text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50/50 text-gray-800 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            Everything you need to know
          </div>
          <Typography.H2 className="font-wc-rough-trad text-black text-[clamp(3rem,5vw,5rem)] leading-none">
            Guidelines for{' '}
            <span className="font-wc-rough-trad text-[#005CAA] block md:inline">
              PIVOT Hackathon
            </span>
          </Typography.H2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gray-700 to-black rounded-full mt-4" />
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidelinesData.map((guideline) => (
            <div key={guideline.id} className="group relative h-full">
              {/* Card Background & Border */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-300/50 group-hover:-translate-y-2 group-hover:border-black/20" />

              {/* Content */}
              <div className="relative p-8 flex flex-col items-center text-center h-full z-10 transition-transform duration-500 group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-black blur-xl opacity-10 group-hover:opacity-25 transition-opacity duration-500 rounded-full" />
                  <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-800 to-black shadow-lg group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-6">
                    {iconMap[guideline.icon] || (
                      <Sparkles className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-averta-std group-hover:text-black transition-colors duration-300">
                  {guideline.title}
                </h3>

                {/* Description */}
                <div className="w-12 h-1 bg-gray-200 rounded-full mb-4 group-hover:bg-black transition-colors duration-300" />
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {guideline.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PPT Download Section */}
        <div className="mt-20 relative overflow-hidden rounded-3xl">
          {/* Dark Background with dot pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Content
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Download Our Official PPT Template
            </h3>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              All participants must use this official PPT template for their submissions. This ensures
              uniformity and fairness in presentation across all teams.
            </p>

            Download Button
            <a
              href="/ppt-template.pptx"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm group hover:scale-105"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download PPT
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default GuidelinesSection;
