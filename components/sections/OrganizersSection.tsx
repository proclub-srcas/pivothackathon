'use client';

import React from 'react';
import TeamSection, { TeamMember } from './TeamSection';

const landtMembers: TeamMember[] = [
    { name: 'Ms. Daisy Mary M', role: 'Committee Member', company: 'L&T Product Development' },
    { name: 'Mr. Abhishek Raj R', role: 'Committee Member', company: 'L&T Product Development' },
    { name: 'Mr. Mahendra Prasath S', role: 'Committee Member', company: 'L&T Product Development' },
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

export default function OrganizersSection() {
    return (
        <div className="space-y-4">
            <TeamSection
                title="Organizers Committee"
                members={landtMembers}
                textOnly={true}
                centerItems={true}
                hideLinkedIn={true}
            />
            <TeamSection
                title="Faculty Coordinators"
                members={facultyMembers}
                textOnly={true}
                centerItems={true}
                hideLinkedIn={true}
            />
            <TeamSection
                title="Student Organizers"
                members={studentMembers}
                textOnly={true}
                centerItems={false}
                hideLinkedIn={true}
            />
        </div>
    );
}
