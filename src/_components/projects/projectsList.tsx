"use client";
import Project from "./project";
import {projects} from "@/app/utils";
import AnimatedComponent from "@/_components/animatedComponent";
import {
    ProjectContainer,
    Projects
} from "@/app/style";
import React from "react";

interface ProjectsListProps {
    openModal: (content: React.ReactNode) => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ openModal }) => {
    return(
        <Projects>
            {projects.map((project, index) => (
                <AnimatedComponent key={index}>
                    <ProjectContainer
                        onClick={() => openModal(
                            <Project title={project.title} description={project.description} learnings={project.learnings} technologies={project.technologies} />
                        )}
                    >
                        <strong>{project.title}</strong>
                    </ProjectContainer>
                </AnimatedComponent>
            ))}
        </Projects>
    );
}

export default ProjectsList;