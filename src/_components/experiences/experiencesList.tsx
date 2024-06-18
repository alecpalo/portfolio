// _components/Modal.tsx
"use client";
import React from 'react';
import Experience from "@/_components/experiences/experience";
import AnimatedComponent from "@/_components/animatedComponent";
import { experiences } from "@/app/utils";
import '../../app/globals.css';

interface ExperienceListProps {
    openModal: (content: React.ReactNode) => void;
}

const ExperiencesList: React.FC<ExperienceListProps> = ({ openModal }) => {
    return (
        <div className="experience-list">
            {experiences.map((experience, index) => (
                <AnimatedComponent key={index}>
                    <div
                        className="work-experience"
                        onClick={() => openModal(
                            <Experience key={index} title={experience.title} startDate={experience.startDate} endDate={experience.endDate} company={experience.company} details={experience.details} responsibilities={experience.responsibilities} />
                        )}
                    >
                        <strong>{experience.company}</strong>
                    </div>
                </AnimatedComponent>
            ))}
        </div>
    );
};

export default ExperiencesList;
