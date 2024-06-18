"use client";
import Project from "./project";
import { projects } from "@/app/utils";
import AnimatedComponent from "@/_components/animatedComponent";
import React from "react";
import '../../app/globals.css';

interface ProjectsListProps {
    openModal: (content: React.ReactNode) => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ openModal }) => {
    return (
        <div className="projects">
            {projects.map((project, index) => (
                <AnimatedComponent key={index}>
                    <div
                        className="project-container"
                        onClick={() => openModal(
                            <Project title={project.title} description={project.description} learnings={project.learnings} technologies={project.technologies} />
                        )}
                    >
                        <strong>{project.title}</strong>
                    </div>
                </AnimatedComponent>
            ))}
        </div>
    );
}

export default ProjectsList;
