// _components/Modal.tsx
"use client";
import React from 'react';
import Experience from "@/_components/experiences/experience";
import {
    ExperienceList,
    WorkExperience,
} from "@/app/style";

import {experiences} from "@/app/utils";
import AnimatedComponent from "@/_components/animatedComponent";

interface ExperienceListProps {
    openModal: (content: React.ReactNode) => void;
}

const ExperiencesList: React.FC<ExperienceListProps> = ({ openModal }) => {
    return (
        <>
            <ExperienceList>
                {experiences.map((experience, index) => (
                    <AnimatedComponent key={index}>
                        <WorkExperience
                            onClick={() => openModal(
                                <Experience key={index} title={experience.title} startDate={experience.startDate} endDate={experience.endDate} company={experience.company} details={experience.details} responsibilities={experience.responsibilities} />
                            )}
                        >
                            <strong>{experience.company}</strong>
                        </WorkExperience>
                    </AnimatedComponent>
                ))}
            </ExperienceList>
        </>
    );
};

export default ExperiencesList;
