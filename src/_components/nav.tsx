import React from 'react';
import { NavItem, Nav, NavContainer, NavSection, SocialIcons, IconLink } from '@/app/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {useIsMobile} from "@/_components/useIsMobile";

interface NavBarProps {
    sections: string[];
    currentSection: string;
    onSectionClick: (id: string) => void;
}

const colorMapping: { [key: string]: string } = {
    Title: '#f5e0dc',       // rosewater
    Bio: '#f38ba8',         // red
    Experience: '#fab387',  // peach
    Projects: '#94e2d5',    // teal
    Contact: '#89b4fa',     // blue
};

const NavBar: React.FC<NavBarProps> = ({ sections, currentSection, onSectionClick }) => {
    const isMobile = useIsMobile();
    return (
        <Nav>
            <NavContainer>
                <NavSection>
                    {isMobile ?
                        <NavItem active={true} color={colorMapping[currentSection]}>
                            {currentSection}
                        </NavItem>
                    :
                        sections.map((section) => (
                            <NavItem
                                key={section}
                                color={colorMapping[section]}
                                active={currentSection == section}
                                onClick={() => onSectionClick(section)}
                            >
                                {section !== 'Title' ? section : ""}
                            </NavItem>
                        ))
                    }
                </NavSection>
                <SocialIcons>
                    <IconLink href="https://github.com/alecpalo" target="_blank" rel="noopener noreferrer" color={colorMapping[currentSection]}>
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </IconLink>
                    <IconLink href="https://linkedin.com/in/apalo" target="_blank" rel="noopener noreferrer" color={colorMapping[currentSection]}>
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </IconLink>
                </SocialIcons>
            </NavContainer>
        </Nav>
    );
};

export default NavBar;
