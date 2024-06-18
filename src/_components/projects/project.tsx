import React from "react";
import * as DevIcons from "developer-icons";
import '../../app/globals.css';


interface ProjectProps {
    title: string;
    technologies: { name: string; icon: keyof typeof DevIcons }[];
    description: string;
    learnings: string;
}

const Project: React.FC<ProjectProps> = (project) => {
    return (
        <>
            <h2 className="project-title">{project.title}</h2>
            <ul className="technology-list">
                {project.technologies.map((tech, index) => {
                    const IconComponent = DevIcons[tech.icon] as React.ElementType;
                    return (
                        <li key={index} className="technology-item" title={tech.name}>
                            <IconComponent />
                        </li>
                    );
                })}
            </ul>
            <p className="project-description">{project.description}</p>
            <div className="project-learnings">
                <h3 className="learnings-title">What I Learned</h3>
                <p className="learnings-content">{project.learnings}</p>
            </div>
        </>
    );
}

export default Project;
