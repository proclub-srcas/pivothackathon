export interface Guideline {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export const guidelinesData: Guideline[] = [
    {
        id: 'hackathon',
        icon: 'hackathon',
        title: '24-Hour Hackathon',
        description:
            'An intense 24-hour coding marathon where you build innovative solutions to real-world problems.',
    },
    {
        id: 'register',
        icon: 'register',
        title: 'Free Registration',
        description:
            'Participation is completely free! No registration fees required to join the hackathon.',
    },
    {
        id: 'team',
        icon: 'team',
        title: 'Team Size: 2-4 Members',
        description:
            'Form a team of 2 to 4 members. Cross-college teams are allowed and encouraged!',
    },
    {
        id: 'venue',
        icon: 'venue',
        title: 'SRCAS Campus',
        description:
            'The hackathon will be held at Sri Ramakrishna College of Arts and Science, Coimbatore.',
    },
    {
        id: 'id-card',
        icon: 'id-card',
        title: 'Valid College ID Required',
        description:
            'All participants must carry a valid college ID card for verification during the event.',
    },
    {
        id: 'free-food',
        icon: 'free-food',
        title: 'Meals Provided',
        description:
            'All meals, snacks, and refreshments will be provided throughout the hackathon.',
    },
    {
        id: 'in-person',
        icon: 'in-person',
        title: 'ABSTRACT SUBMISSION GUIDELINES',
        description:
            'Round 1 is focused on evaluating the idea and approach, not the final solution. Each team must submit a PDF abstract',
    },
    {
        id: 'engineering',
        icon: 'no-prerequisites',
        title: 'Only for Engineering Students',
        description:
            'Open to all Engineering Students! Whether you are a beginner or an expert, everyone is welcome.',
    },
    {
        id: 'Submission Format',
        icon: 'safe',
        title: 'Submission Format',
        description:
            'File format PDF only, Word limit 1200 words (strict), Pages Maximum 3 page.',
    },
];
