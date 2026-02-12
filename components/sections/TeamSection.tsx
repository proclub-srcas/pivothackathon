'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import JumpingText from '@/components/JumpingText';

export interface TeamMember {
    name: string;
    role: string;
    company: string;
    image?: string;
    linkedin?: string;
}

interface TeamSectionProps {
    title: string;
    members: TeamMember[];
    id?: string;
    className?: string;
    hideLinkedIn?: boolean;
    centerItems?: boolean;
    textOnly?: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members, id, className = "", hideLinkedIn = false, centerItems = false, textOnly = false }) => {
    return (
        <section
            id={id}
            className={`
            relative overflow-hidden 
            bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 
            rounded-2xl shadow-lg border border-[#005CAA]/20 
            p-8 md:p-12
            hover:shadow-xl transition-all duration-300 
            w-full max-w-7xl mx-auto mb-12
            ${className}
          `}
        >
            {/* Dot Pattern Background - Blue dots for light theme */}
            <div className="absolute inset-0 bg-[radial-gradient(#005CAA1a_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16 tracking-wide">
                    <JumpingText text={title} defaultColor="#111827" hoverColor="#005CAA" />
                </h2>

                <div className={`gap-8 ${centerItems ? 'flex flex-wrap justify-center' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'}`}>
                    {members.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative ${centerItems ? 'w-full sm:w-80' : (textOnly ? 'w-full' : '')}`}
                        >
                            {textOnly ? (
                                <div className="h-full p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200 group-hover:border-[#005CAA] group-hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 group-hover:-translate-y-1">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#005CAA] transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#005CAA] font-medium text-base">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                                        @ {member.company}
                                    </p>
                                    {!hideLinkedIn && member.linkedin && (
                                        <Link
                                            href={member.linkedin}
                                            target="_blank"
                                            className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-[#0077b5]/10 text-[#0077b5] rounded-full text-sm font-semibold group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300"
                                        >
                                            <Linkedin className="w-3 h-3" />
                                            Connect
                                        </Link>
                                    )}
                                </div>
                            ) : (
                                <>
                                    {/* Image Container */}
                                    <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-100 mb-6 border border-gray-200 group-hover:border-[#005CAA] transition-all duration-300 shadow-md">
                                        {member.image && (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        )}

                                        {/* Sleek Bottom Shadow Overlay - Disappears on Hover */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />

                                        {/* Hover Overlay */}
                                        {!hideLinkedIn && (
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                <Link
                                                    href={member.linkedin || '#'}
                                                    target="_blank"
                                                    className="flex items-center gap-2 px-6 py-2 bg-[#0077b5] text-white rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 shadow-xl"
                                                >
                                                    <Linkedin className="w-4 h-4" />
                                                    Connect
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="text-left px-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#005CAA] transition-colors leading-tight">
                                            {member.name}
                                        </h3>
                                        <p className="text-[#005CAA] font-medium text-sm mb-1">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                            @ {member.company}
                                        </p>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
