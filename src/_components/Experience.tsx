// _components/Modal.tsx
"use client";
import React from 'react';
import {
    ExperienceList,
    ModalDate,
    ModalDetails,
    ModalList,
    ModalListItem,
    ModalTitle,
    WorkExperience,
} from "@/app/style";

import {experiences} from "@/app/utils";
import AnimatedComponent from "@/_components/animatedComponent";

interface ExperienceProps {
    openModal: (content: React.ReactNode) => void;
}

const Experience: React.FC<ExperienceProps> = ({ openModal }) => {
    return (
        <>
            <ExperienceList>
                {experiences.map((experience, index) => (
                    <AnimatedComponent key={index}>
                        <WorkExperience
                            onClick={() => openModal(
                                <>
                                    <ModalTitle>{experience.title} at {experience.company}</ModalTitle>
                                    <ModalDate>{experience.startDate} - {experience.endDate}</ModalDate>
                                    <ModalDetails>{experience.details}</ModalDetails>
                                    <ModalList>
                                        {experience.responsibilities.map((responsibility, i) => (
                                            <ModalListItem key={i}>{responsibility}</ModalListItem>
                                        ))}
                                    </ModalList>
                                </>
                            )}
                        >
                            {/*<strong>{experience.title}</strong>*/}
                            <strong>{experience.company}</strong>
                        </WorkExperience>
                    </AnimatedComponent>
                ))}
            </ExperienceList>
        </>
    );
};

export default Experience;
