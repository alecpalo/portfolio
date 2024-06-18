import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useIsMobile } from "@/_components/useIsMobile";
import '../app/globals.css'; // Import the CSS file for navbar styles

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
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-section">
                    {isMobile ?
                        <div className="nav-item active" style={{ color: colorMapping[currentSection] }}>
                            {currentSection}
                        </div>
                        :
                        sections.map((section) => (
                            <div
                                key={section}
                                className={`nav-item ${currentSection === section ? 'active' : ''}`}
                                style={{ color: currentSection === section ? colorMapping[section] : '' }}
                                onClick={() => onSectionClick(section)}
                            >
                                {section !== 'Title' ? section : ""}
                            </div>
                        ))
                    }
                </div>
                <div className="social-icons">
                    <a href="https://github.com/alecpalo" target="_blank" rel="noopener noreferrer" className="icon-link" style={{ color: colorMapping[currentSection] }}>
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href="https://linkedin.com/in/apalo" target="_blank" rel="noopener noreferrer" className="icon-link" style={{ color: colorMapping[currentSection] }}>
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
