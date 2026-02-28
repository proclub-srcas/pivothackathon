'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Award } from 'lucide-react';
import Image from 'next/image';

// Problem Statement type
type ProblemStatement = 'PS 01' | 'PS 02' | 'PS 03' | 'PS 04' | 'PS 05' | 'All Problem Statements';

interface Team {
    sno: number;
    teamName: string;
    leader: string;
    institution: string;
    problemStatement: ProblemStatement;
}

const finalistsData: Team[] = [
    {
        sno: 1,
        teamName: 'Circuit C',
        leader: 'Sathish G',
        institution: 'SRMIST, Kattankulathur',
        problemStatement: 'PS 01',
    },
    {
        sno: 2,
        teamName: 'theenginAI',
        leader: 'SWETHA S N',
        institution: 'PSG COLLEGE OF ENGINEERING AND TECHNOLOGY',
        problemStatement: 'PS 01',
    },
    {
        sno: 3,
        teamName: 'Tech Mavericks',
        leader: 'Abdul Munaf Z',
        institution: 'Sri Krishna Arts and Science College',
        problemStatement: 'PS 01',
    },
    {
        sno: 4,
        teamName: 'Innovators',
        leader: 'M Rosi',
        institution: 'Sona Vazhvi Engineering College for women',
        problemStatement: 'PS 01',
    },
    {
        sno: 5,
        teamName: 'Circuit Breakers',
        leader: 'John Doe',
        institution: 'Anna University',
        problemStatement: 'PS 02',
    },
    {
        sno: 6,
        teamName: 'Code Warriors',
        leader: 'Jane Smith',
        institution: 'VIT Chennai',
        problemStatement: 'PS 02',
    },
    // Add more teams as needed
];

const problemStatements: ProblemStatement[] = [
    'All Problem Statements',
    'PS 01',
    'PS 02',
    'PS 03',
    'PS 04',
    'PS 05',
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const FinalistsPage: React.FC = () => {
    const [selectedPS, setSelectedPS] = useState<ProblemStatement>('All Problem Statements');

    const filteredTeams = selectedPS === 'All Problem Statements'
        ? finalistsData
        : finalistsData.filter((team) => team.problemStatement === selectedPS);

    const totalTeams = filteredTeams.length;

    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
            {/* Header Section */}
            <section className="relative pt-32 pb-16 px-4 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#005CAA]/10 rounded-full blur-3xl" />
                <div className="absolute top-40 right-10 w-96 h-96 bg-[#FBA919]/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center"
                    >
                        {/* Logo/Badge Area */}
                        <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#005CAA]/20 blur-xl rounded-full" />
                                <div className="relative bg-white border-4 border-[#FBA919] rounded-2xl px-8 py-4 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                                    <h1 className="text-2xl md:text-3xl font-bold">
                                        <span className="text-[#005CAA]">PIVOT</span>{' '}
                                        <span className="text-[#FBA919]">INNOVATION</span>{' '}
                                        <span className="text-gray-700">CHALLENGE</span>
                                    </h1>
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                        >
                            Finalists of <br />
                            <span className="text-[#005CAA]">PIVOT INNOVATION CHALLENGE</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8"
                        >
                            Congratulations to all the selected finalists! Your innovative solutions have earned you a spot in the next stage. Detailed instructions regarding the upcoming rounds will be shared with you shortly.
                        </motion.p>

                        {/* Stats Badge */}
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FBA919]/20 border border-[#FBA919]/30 rounded-full"
                        >
                            <Trophy className="w-5 h-5 text-[#FBA919]" />
                            <span className="font-semibold text-[#005CAA]">
                                {totalTeams} Teams Selected
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 px-4 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-gray-700">
                            <Users className="w-5 h-5" />
                            <span className="font-semibold">Filter by PS:</span>
                        </div>

                        {/* Dropdown */}
                        <div className="relative">
                            <select
                                value={selectedPS}
                                onChange={(e) => setSelectedPS(e.target.value as ProblemStatement)}
                                className="appearance-none px-6 py-3 pr-12 bg-white border-2 border-[#005CAA]/20 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-[#005CAA] transition-colors cursor-pointer hover:border-[#005CAA]/50"
                            >
                                {problemStatements.map((ps) => (
                                    <option key={ps} value={ps}>
                                        {ps}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teams Table/Cards Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        key={selectedPS}
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Desktop Table View */}
                        <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-[#005CAA] to-[#003366]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-white font-semibold uppercase tracking-wider text-sm">
                                            S.NO
                                        </th>
                                        <th className="px-6 py-4 text-left text-white font-semibold uppercase tracking-wider text-sm">
                                            Team Name
                                        </th>
                                        <th className="px-6 py-4 text-left text-white font-semibold uppercase tracking-wider text-sm">
                                            Team Leader
                                        </th>
                                        <th className="px-6 py-4 text-left text-white font-semibold uppercase tracking-wider text-sm">
                                            Institution
                                        </th>
                                        <th className="px-6 py-4 text-center text-white font-semibold uppercase tracking-wider text-sm">
                                            PS No.
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredTeams.map((team, index) => (
                                        <motion.tr
                                            key={team.sno}
                                            variants={fadeInUp}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-gray-700 font-medium">{index + 1}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#005CAA] to-[#003366] flex items-center justify-center text-white font-bold">
                                                        {team.teamName.charAt(0)}
                                                    </div>
                                                    <span className="font-semibold text-gray-900">{team.teamName}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">{team.leader}</td>
                                            <td className="px-6 py-4 text-gray-600 text-sm">{team.institution}</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-block px-4 py-1.5 bg-[#FBA919]/20 text-[#FBA919] font-bold rounded-full border border-[#FBA919]/30">
                                                    {team.problemStatement}
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden space-y-4">
                            {filteredTeams.map((team, index) => (
                                <motion.div
                                    key={team.sno}
                                    variants={fadeInUp}
                                    className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#005CAA] to-[#003366] flex items-center justify-center text-white font-bold text-lg">
                                                {team.teamName.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">{team.teamName}</h3>
                                                <p className="text-sm text-gray-500">#{index + 1}</p>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-[#FBA919]/20 text-[#FBA919] font-bold rounded-full text-sm border border-[#FBA919]/30">
                                            {team.problemStatement}
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <Users className="w-4 h-4 text-[#005CAA] mt-0.5 flex-shrink-0" />
                                            <div>
                                                <span className="text-gray-500">Leader:</span>{' '}
                                                <span className="text-gray-900 font-medium">{team.leader}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Award className="w-4 h-4 text-[#005CAA] mt-0.5 flex-shrink-0" />
                                            <div>
                                                <span className="text-gray-500">Institution:</span>{' '}
                                                <span className="text-gray-700">{team.institution}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Empty State */}
                    {filteredTeams.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">No teams found for this problem statement.</p>
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default FinalistsPage;
