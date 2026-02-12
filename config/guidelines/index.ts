export interface Guideline {
    id: string;
    icon: string;
    title: string;
    description: string | string[];
    isHighlighted?: boolean;
    downloadLink?: {
        url: string;
        text: string;
        filename: string;
    };
}

export const guidelinesData: Guideline[] = [
    {
        id: 'engineering',
        icon: 'no-prerequisites',
        title: 'Open to Engineering Students from all streams',
        description:
            '',
        isHighlighted: true,
    },

    {
        id: 'register',
        icon: 'register',
        title: 'Free Registration',
        description:
            'Participation is completely free! No registration fees required to join the PIVOT Innovation Challenge.',
    },
    {
        id: 'team',
        icon: 'team',
        title: 'Team Size: 2-4 Members',
        description:
            'Team members can be of 2-4 students',
    },
    {
        id: 'venue',
        icon: 'venue',
        title: 'SRCAS Campus',
        description:
            'The PIVOT Innovation Challenge will be held at Sri Ramakrishna College of Arts and Science, Coimbatore.',
    },
    {
        id: 'id-card',
        icon: 'id-card',
        title: 'Valid College ID Required',
        description:
            'All participants must carry a valid college ID card for verification during the event.',
    },
    // {
    //     id: 'connectivity',
    //     icon: 'connectivity',
    //     title: 'Wi-Fi & Connectivity',
    //     description:
    //         'Internet and charging stations will be available for all participants.',
    // },
    {
        id: 'Submission Format',
        icon: 'safe',
        title: 'Submission Format',
        description: [
            'File format PDF only',
            'Word limit 1200 words (strict)',
            'Pages Maximum 3 page.'
        ]
    },
        {
        id: 'in-person',
        icon: 'in-person',
        title: 'Guidelines for PIVOT Innovation Challenge',
        description:
            'Round 1 is focused on evaluating the idea and approach, not the final solution. Each team must submit a PDF abstract.',
        downloadLink: {
            url: '/fileFolder/Abstract Submission Guidelines.pdf',
            text: 'Download Guidelines',
            filename: 'Abstract_Submission_Guidelines.pdf'
        }
    },
];
