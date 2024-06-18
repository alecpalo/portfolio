'use client';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Modal from '@/_components/modal';
import Contact from '../_components/contact';
import ProjectsList from "@/_components/projects/projectsList";
import { bio } from './utils';
import { AnimatePresence } from 'framer-motion';
import AnimatedComponent from "@/_components/animatedComponent";
import NavBar from "@/_components/nav";
import ExperiencesList from "@/_components/experiences/experiencesList";
import './globals.css';

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
        <div className="container">
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
                <div
                    key={section}
                    id={section}
                    className="section"
                >
                    <div className="content-wrapper">
                        {section === 'Title' && (
                            <div className="title-container">
                                <div className="text-container">
                                    <h1 className="title">
                                        Hey, I&apos;m&nbsp;
                                        <span className="name">
                                            Alec
                                        </span>
                                    </h1>
                                </div>
                                <div className="image-container">
                                    <Image src="/me.png" alt="Catppuccin Logo" fill={true} />
                                </div>
                            </div>
                        )}
                        {section === 'Bio' && (
                            <AnimatedComponent>
                                <p className="bio">
                                    {bio}
                                </p>
                            </AnimatedComponent>
                        )}
                        {section === 'Experience' && (
                            <ExperiencesList openModal={openModal}/>
                        )}
                        {section === 'Projects' && (
                            <ProjectsList openModal={openModal}/>
                        )}
                        {section == 'Contact' && (
                            <Contact/>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
