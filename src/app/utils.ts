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
        details: 'A startup building a tool to help patent attorneys better research patents, focusing on assisting in finding patent infringement. We are developing a fullstack application using Next.js and Typescript for a frontend and Python as a backend, with a PostgreSQL Database.',
        responsibilities: [
            'Designed and implemented logging to track user activity, prevent security breaches and aid in finding bugs and errors',
            'Developed web scrapes to get Abstract, Claims and Description sections from google patents',
            'Implemented API calls to highlight important sections of the patent based on key metrics from the Abstract, Claims and Description sections speeding up research times by 25%.',
            'Designed and built an interactive UI enabling users to view, modify and add up to 10 generated metrics based on search inputs helping users find 6 - 10 metrics where patents are similar, aiding in patent infringement discovery',
            'Displayed similarities between metrics through a radar graph, showing similarity between 2 patents'
        ]
    },
    {
        title: 'Web Developer',
        company: 'University of Michigan Electric Boat',
        startDate: 'January 2023',
        endDate: 'May 2024',
        details: 'Maintained and updated the website for a project team on campus. Eventually redesigning and re-implementing the entire website.',
        responsibilities: [
            'Maintained and updated the original website, including updating HTML and CSS.',
            'Redesigned the the website in Figma alongside club leaders to better align it with goals for the club and make it more visually appealing on mobile and web platforms.',
            'Implemented the redesigned website with Next.js, Typescript and TailwindCSS.',
            'Designed reusable components to ensure code reusability and mobile responsiveness.'
        ]
    },
    {
        title: 'Software Developer Intern',
        company: 'BOLD Laser Automation',
        startDate: 'June 2023',
        endDate: 'August 2023',
        details: 'Worked on various projects getting experience working with embedded systems and the general workflow of a software engineer.',
        responsibilities: [
            'Created basic front ends for machines using both WPF and Winform, enabling data visualization and interactivity with the lasers.',
            'Researched and set up ImmuDB, an immutable database, to store logs locally on machines, ensuring all data will be stored.',
            'Developed a Modbus relay using memory mapped files to store data enabling communication between 2 Modbus clients.',
            'Implemented Modbus TCP in Lua utilizing redbean, a compile once run anywhere framework for Lua and C, to create a front end for machines that can be ported to any operating system easily.'
        ]
    },
    {
        title: 'IVL FP&A Intern',
        company: 'CVS Health',
        startDate: 'June 2022',
        endDate: 'August 2022',
        details: 'I worked as a FP&A intern for a Insurance team within Aetna creating reports, analyzing financial data for our team and forecasting future revenue. I worked on many ad-hoc projects throughout my internship and one large project, automating reporting, aiding in the basic functioning on the team.',
        responsibilities: [
            'Created 4 automated reports that create presentable financial data streamlining the forecasting process and saving between 5 and 7 hours of work per week.',
            'Prepared slide decks to be presented to senior executives giving insight into our business area aiding in making decisions.',
            'Worked alongside team members to create a new report that would give senior executives better insight into our forecasting.'
        ]
    },
    {
        title: 'FP&A Intern',
        company: 'Gentherm',
        startDate: 'May 2021',
        endDate: 'August 2021',
        details: 'Built and optimized user interfaces using HTML, CSS, and JavaScript. Implemented responsive design and enhanced user experiences for various web projects.',
        responsibilities: [
            'Built and optimized user interfaces using HTML, CSS, and JavaScript.',
            'Implemented responsive design and enhanced user experiences for various web projects.',
            'Worked closely with designers to create visually appealing and functional websites.'
        ]
    },
];

export const bio = "Hi, I'm Alec. I am a recent graduate from UMICH with degrees in Computer Science and Business Administration. I am relatively new to software development but I quickly became a passionate developer. I love building new projects and learning new technologies in my free time. I am particularly interested in Backend Development and Embedded Systems. I am currently looking for full time work as a software developer.";

export const projects: Project[] = [
    {
        title: 'Fault Tolerant Key Value Store',
        description: "Created a fault tolerant key value store using the Paxos algorithm with Sharding. Users can ",
        learnings: "I knew Multithreaded applications could be incredibly complex, this project taught me how complex it can get. ",
        technologies: [
            { name: "Go", icon: "GoIcon" },
        ]
    },
    {
        title: 'Speed Reading App',
        description: "I designed, implemented and published a speed reading app that takes advantage of rapid serial visual presentation to help users easily read beyond 300 words per minute. Users can upload text from PDFs or input text that can be displayed at variable speeds.",
        learnings: "My capstone project for my CS degree at Umich",
        technologies: [
            { name: "Flutter", icon: "FlutterIcon" },
            { name: "Dart", icon: "DartIcon" },
        ]
    },
    {
        title: 'Terminal Text Editor',
        description: "Built a in terminal text editor that can do operations like disk read and write. Implemented syntax highlighting for Rust, allowing to develop the text editor with the text editor.",
        learnings: "This project taught me the very basics in Rust and quite a bit about how terminal based text editors work. The biggest learning I have from this project is the need to try things; I wanted to learn Rust and this project gave me the excuse to do so.",
        technologies: [
            { name: "Rust", icon: "RustIcon" },
        ]
    },
    {
        title: 'Humidity Detector',
        description: "",
        learnings: "",
        technologies: [
            { name: "HTML", icon: "HTML5Icon" },
            { name: "MySQL", icon: "MySQLIcon" },
            { name: "Flask", icon: "FlaskIcon" },
            { name: "C++", icon: "CPlusPlusIcon" },
            { name: "Python", icon: "PythonIcon" },
            { name: "Django", icon: "DjangoIcon" },
        ]
    },
    {
        title: 'Bootjack Properties Website',
        description: "Designed and implemented a website for a property holding company to display various properties they managed.",
        learnings: "This project taught me a lot about working with a customer and design. Setting clear goals and deadlines with a customer is crucial for a healthy work relationship on both ends. Design is not something that comes easily to me, however, I found that by iteratively working on something and getting feedback allowed me to create something the customer was satisfied with.",
        technologies: [
            { name: "React", icon: "ReactIcon" },
            { name: "TypeScript", icon: "TypeScriptIcon" },
            { name: "TailwindCSS", icon: "TailwindCSSIcon" },
        ]
    },
    {
        title: 'Folk Impressions Website',
        description: "",
        learnings: "",
        technologies: [
            { name: "React", icon: "ReactIcon" },
            { name: "TypeScript", icon: "TypeScriptIcon" },
            { name: "TailwindCSS", icon: "TailwindCSSIcon" },
        ]
    },
    {
        title: 'AI Desktop Assistant',
        description: "Developed a command line desktop assistant with a friend that can use your computer the same way we do. Using OpenAI's APIs and a YOLO model we were able to build a tool that can move your mouse and interact with your computer to write emails and work in excel.",
        learnings: "This project taught me a lot about what AI can do and how to use AI in conjunction with each other. We made this project to apply to YC, which was probably too much of a stretch, and it taught me to think about turning a project into something practical. We worked quickly so we could apply and were rejected, however, I still count this as a success because of what I learned.",
        technologies: [
            { name: "OpenAI", icon: "OpenAIIcon" },
            { name: "Python", icon: "PythonIcon" },
            { name: "Pytorch", icon: "PyTorchIcon" },
        ]
    },
    {
        title: 'Basic Programming Language: ALang',
        description: "",
        learnings: "",
        technologies: [
            { name: "OCaml", icon: "OCamlIcon" },
        ]
    },
    {
        title: 'Thread Library',
        description: "Built a multi-core thread, mutex and CV library in c++ enabling true parallelism and synchronization. Implemented basic functions like join, lock, unlock, wait, signal and broadcast.",
        learnings: "This project taught me a lot about multi-threaded programs, giving me a great insight into how threads work. Most importantly, this was the first project that forced me to plan extensively before write a single line of code. Understanding what I had to do and how synchronization worked before was critical to completing this project properly.",
        technologies: [
            { name: "C++", icon: "CPlusPlusIcon" },
        ]
    },
    {
        title: 'Table Vision',
        description: "A group of students and I worked together to build a system to detect if study tables around campus are open and display that information on a NextJs frontend. We created a custom trained YOLO model that could detect if a study table was open, which would then send to our frontend to display study tables that are open throughout building on campus.",
        learnings: "This was an early project in my software development journey; I learned how to work with other people, specially more than just 1 other person. Most importantly, this project showed me that coding can be fun and has pushed me to want to build more on my own time.",
        technologies: [
            { name: "Pytorch", icon: "PythonIcon" },
            { name: "NextJs", icon: "NextJsIcon" },
            { name: "TypeScript", icon: "TypeScriptIcon" },
            { name: "MySQL", icon: "MySQLIcon" },
        ]
    },
];
