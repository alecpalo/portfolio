'use client';

import { useState } from 'react';
import { Container, Section, ContentWrapper, Title, Bio, ExperienceList, ProjectList, WorkExperience, Project, ModalTitle, ModalDate, ModalDetails, ModalList, ModalListItem, ModalImage } from './style';
import Modal from '../_components/modal';
import { experiences, projects, bio } from './utils';
import { AnimatePresence } from 'framer-motion';
import AnimatedComponent from "@/_components/animatedComponent";

const sections = ['Title', 'Bio', 'Experience', 'Projects', 'Contact'];

export default function Home() {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

    const openModal = (content: React.ReactNode) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <Container>
            <AnimatePresence>
                {modalContent && (
                    <Modal onClose={closeModal}>
                        {modalContent}
                    </Modal>
                )}
            </AnimatePresence>

            {sections.map((section) => (
                <Section
                    key={section}
                >
                    <ContentWrapper>
                        {section === 'Title' && (
                            <Title>Hey, I&apos;m Alec</Title>
                        )}
                        {section === 'Bio' && (
                            <AnimatedComponent>
                                <Bio>
                                    {bio}
                                </Bio>
                            </AnimatedComponent>
                        )}
                        {section === 'Experience' && (
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
                                            <strong>{experience.title}</strong>
                                            <span>{experience.company}</span>
                                            <small>{experience.startDate} - {experience.endDate}</small>
                                        </WorkExperience>
                                    </AnimatedComponent>
                                ))}
                            </ExperienceList>
                        )}
                        {section === 'Projects' && (
                            <ProjectList>
                                {projects.map((project, index) => (
                                    <AnimatedComponent key={index}>
                                        <Project
                                            onClick={() => openModal(
                                                <>
                                                    <ModalTitle>{project.title}</ModalTitle>
                                                    <ModalDate>{project.startDate} - {project.endDate}</ModalDate>
                                                    <ModalImage src={project.image} alt={project.title} />
                                                    <ModalDetails>{project.details}</ModalDetails>
                                                    <ModalList>
                                                        {project.features.map((feature, i) => (
                                                            <ModalListItem key={i}>{feature}</ModalListItem>
                                                        ))}
                                                    </ModalList>
                                                </>
                                            )}
                                        >
                                            <strong>{project.title}</strong>
                                            <small>{project.startDate} - {project.endDate}</small>
                                        </Project>
                                    </AnimatedComponent>
                                ))}
                            </ProjectList>
                        )}
                        {section == 'Test' && (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh'
                            }}>

                            </div>
                        )}
                    </ContentWrapper>
                </Section>
            ))}
        </Container>
    );
}
