import React from "react";
import * as DevIcons from "developer-icons";
import { ProjectTitle, TechnologyList, TechnologyItem, ProjectDescription, ProjectLearnings, LearningsTitle, LearningsContent } from "@/app/style";

interface ProjectProps {
    title: string;
    technologies: { name: string; icon: keyof typeof DevIcons }[];
    description: string;
    learnings: string;
}

const Project = (project: ProjectProps) => {
    return(
        <>
            <ProjectTitle>{project.title}</ProjectTitle>
            <TechnologyList>
                {project.technologies.map((tech, index) => {
                    const IconComponent = DevIcons[tech.icon] as React.ElementType;
                    return (
                        <TechnologyItem key={index} title={tech.name}>
                            <IconComponent />
                        </TechnologyItem>
                    );
                })}
            </TechnologyList>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLearnings>
                <LearningsTitle>What I Learned</LearningsTitle>
                <LearningsContent>{project.description}</LearningsContent>
            </ProjectLearnings>
        </>
    );
}

export default Project;