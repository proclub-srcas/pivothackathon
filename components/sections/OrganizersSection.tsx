'use client';

import React from 'react';
import { motion } from 'framer-motion';
import JumpingText from '@/components/JumpingText';

interface TeamMember {
    name: string;
    role: string;
    company: string;
}

const landtMembers: TeamMember[] = [
    { name: 'Daisy Mary M', role: 'Committee Member', company: 'L&T Product Development' },
    { name: 'Mahendra Prasath S', role: 'Committee Member', company: 'L&T Product Development' },
    { name: 'Abhishek Raj R', role: 'Committee Member', company: 'L&T Product Development' },
];

const facultyMembers: TeamMember[] = [
    { name: 'Dr.N.Sumathi', role: 'Coordinator', company: 'SRCAS' },
    { name: 'Dr. M. Praneesh', role: 'Coordinator', company: 'SRCAS' },
    { name: 'Mr.S.Manoj', role: 'Coordinator', company: 'SRCAS' },
];

const studentMembers: TeamMember[] = [
    { name: 'Pravin B', role: 'Chairman', company: 'Programming Club' },
    { name: 'Sarath P', role: 'Vice Chairman', company: 'Programming Club' },
    { name: 'Vaishnavi R', role: 'Secretary', company: 'Programming Club' },
    { name: 'Dhananjay R S', role: 'Joint Secretary', company: 'Programming Club' },
];

const MemberCard = ({ member }: { member: TeamMember }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative w-full sm:w-80"
    >
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
        </div>
    </motion.div>
);

export default function OrganizersSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#005CAA]/5 via-white to-[#005CAA]/5 rounded-2xl shadow-lg border border-[#005CAA]/20 p-8 md:p-12 hover:shadow-xl transition-all duration-300 w-full max-w-7xl mx-auto mb-12">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#005CAA1a_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16 tracking-wide">
                    <span className="inline-block">
                        <JumpingText text="Organizers " defaultColor="#111827" hoverColor="#005CAA" />
                    </span>
                    <span className="inline-block">
                        <JumpingText text="Committee" defaultColor="#111827" hoverColor="#005CAA" />
                    </span>
                </h2>

                <div className="space-y-12">
                    {/* Row 1: L&T (2 members) */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {landtMembers.map((member, idx) => (
                            <MemberCard key={`lt-${idx}`} member={member} />
                        ))}
                    </div>

                    {/* Row 2: Faculty (3 members) */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {facultyMembers.map((member, idx) => (
                            <MemberCard key={`faculty-${idx}`} member={member} />
                        ))}
                    </div>

                    {/* Row 3: Student (4 members) */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {studentMembers.map((member, idx) => (
                            <MemberCard key={`student-${idx}`} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
