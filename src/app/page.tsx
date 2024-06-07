'use client';

import React, { useEffect, useState } from 'react';
import { Container, Section, ContentWrapper, Title, Name, Bio} from './style';
import Modal from '@/_components/modal';
import ProjectsList from "@/_components/projects/projectsList";
import { bio } from './utils';
import ExperiencesList from "@/_components/experiences/experiencesList";
import NavBar from "@/_components/nav";
import { AnimatePresence } from 'framer-motion';
import AnimatedComponent from "@/_components/animatedComponent";

const sections = ['Title', 'Bio', 'Experience', 'Projects', 'Contact'];

export default function Home() {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const [currentSection, setCurrentSection] = useState(sections[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    const handleSectionClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const openModal = (content: React.ReactNode) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <Container>
            <NavBar
                sections={sections}
                currentSection={currentSection}
                onSectionClick={handleSectionClick}
            />
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
                    id={section}
                >
                    <ContentWrapper>
                        {section === 'Title' && (
                            <div style={{
                                display: 'inline-flex',
                            }}>
                                <Title>
                                    Hey, I&apos;m&nbsp;
                                </Title>
                                <Name>
                                     Alec
                                </Name>
                            </div>
                        )}
                        {section === 'Bio' && (
                            <AnimatedComponent>
                                <Bio>
                                    {bio}
                                </Bio>
                            </AnimatedComponent>
                        )}
                        {section === 'Experience' && (
                            <ExperiencesList openModal={openModal}/>
                        )}
                        {section === 'Projects' && (
                            <ProjectsList openModal={openModal}/>
                        )}
                        {section == 'Contact' && (
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
