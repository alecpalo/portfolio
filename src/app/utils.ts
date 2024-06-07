import * as DevIcons from "developer-icons";

// Create a type that includes all keys from DevIcons
type DevIconKeys = keyof typeof DevIcons;

interface Technology {
    name: string;
    icon: DevIconKeys;
}

interface Project {
    title: string;
    description: string;
    learnings: string;
    technologies: Technology[];
}

export const experiences = [
    {
        title: 'Software Engineer',
        company: 'Dulany Street Analytics',
        startDate: 'January 2024',
        endDate: 'Present',
        details: 'Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality products on time.',
        responsibilities: [
            'Developed and maintained web applications using React, Node.js, and PostgreSQL.',
            'Collaborated with cross-functional teams to deliver high-quality products on time.',
            'Implemented new features and optimized existing code for performance improvements.'
        ]
    },
    {
        title: 'Web Developer',
        company: 'University of Michigan Electric Boat',
        startDate: 'June 2023',
        endDate: 'December 2023',
        details: 'Built and optimized user interfaces using HTML, CSS, and JavaScript. Implemented responsive design and enhanced user experiences for various web projects.',
        responsibilities: [
            'Built and optimized user interfaces using HTML, CSS, and JavaScript.',
            'Implemented responsive design and enhanced user experiences for various web projects.',
            'Worked closely with designers to create visually appealing and functional websites.'
        ]
    },
    {
        title: 'Software Developer Intern',
        company: 'BOLD Laser Automation',
        startDate: 'June 2023',
        endDate: 'August 2023',
        details: 'Built and optimized user interfaces using HTML, CSS, and JavaScript. Implemented responsive design and enhanced user experiences for various web projects.',
        responsibilities: [
            'Built and optimized user interfaces using HTML, CSS, and JavaScript.',
            'Implemented responsive design and enhanced user experiences for various web projects.',
            'Worked closely with designers to create visually appealing and functional websites.'
        ]
    },
    {
        title: 'IVL FP&A Intern',
        company: 'CVS Health',
        startDate: 'June 2023',
        endDate: 'December 2023',
        details: 'Built and optimized user interfaces using HTML, CSS, and JavaScript. Implemented responsive design and enhanced user experiences for various web projects.',
        responsibilities: [
            'Built and optimized user interfaces using HTML, CSS, and JavaScript.',
            'Implemented responsive design and enhanced user experiences for various web projects.',
            'Worked closely with designers to create visually appealing and functional websites.'
        ]
    },
    {
        title: 'FP&A Intern',
        company: 'Gentherm',
        startDate: 'June 2023',
        endDate: 'December 2023',
        details: 'Built and optimized user interfaces using HTML, CSS, and JavaScript. Implemented responsive design and enhanced user experiences for various web projects.',
        responsibilities: [
            'Built and optimized user interfaces using HTML, CSS, and JavaScript.',
            'Implemented responsive design and enhanced user experiences for various web projects.',
            'Worked closely with designers to create visually appealing and functional websites.'
        ]
    },
    // Add other experiences...
];

export const bio = "Hi, I'm Alec. I'm a passionate developer with experiences in various technologies including Next.js, TypeScript, and more. I love creating innovative solutions and working on exciting projects.";

export const projects: Project[] = [
    {
        title: 'My Portfolio Website',
        description: "This project involved building a portfolio website using Next.js, Tailwind CSS, and TypeScript. The website is fully responsive and showcases my projects and skills.",
        learnings: "Through this project, I gained a deeper understanding of server-side rendering with Next.js, styling with Tailwind CSS, and strong type-checking with TypeScript. I also improved my skills in modern web development practices and responsive design.",
        technologies: [
            { name: "React", icon: "ReactIcon" },
            { name: "TypeScript", icon: "TypeScriptIcon" },
            // Add other technologies here
        ]
    },
    // Add more projects here
];
