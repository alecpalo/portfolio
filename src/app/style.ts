import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

export const theme = {
    colors: {
        text: '#cdd6f4', // Text
        subtext: '#bac2de', // Subtext
        background: '#1E1E2E', // Base
        primary: '#F28FAD', // Pink
        secondary: '#89b4fa', // Yellow
        accent: '#89b4fa', // Green
        overlay1: '#6E6C7E', // Overlay1
        overlay2: '#7f849c', // Overlay2
        rosewater: '#f5e0dc', // Rosewater
        flamingo: '#f2cdcd', // Flamingo
        pink: '#f5c2e7', // Pink
        mauve: '#cba6f7', // Mauve
        red: '#f38ba8', // Red
        maroon: '#eba0ac', // Maroon
        peach: '#fab387', // Peach
        yellow: '#f9e2af', // Yellow
        green: '#a6e3a1', // Green
        teal: '#94e2d5', // Teal
        sky: '#89dceb', // Sky
        sapphire: '#74c7ec', // Sapphire
        blue: '#89b4fa', // Blue
        lavender: '#b4befe', // Lavender
        surface: '#585b70', // Surface
        base: '#1E1E2E', // Base
        mantle: '#181825', // Mantle
        crust: '#11111b', // Crust
    },
};

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'JetBrainsMono';
        src: url('/fonts/JetBrainsMonoNerdFont-Regular.ttf') format('truetype'),
        url('/fonts/JetBrainsMonoNerdFont-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: 'JetBrains Mono', monospace;
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
`;

export const Section = styled(motion.section)`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    scroll-behavior: smooth;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    // background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const Name = styled.span`
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.rosewater};
    margin: 0;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;


export const Bio = styled.p`
    font-size: 1.5rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.subtext};

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.875rem;
        padding: 0 0.5rem;
    }
`;


export const ExperienceList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const Projects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

export const WorkExperience = styled(motion.div)`
    cursor: pointer;
    padding: 15px;
    background: ${({ theme }) => theme.colors.overlay1};
    border-radius: 8px;
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
        transform: scale(1.05);
        z-index: 1;
        color: ${({ theme }) => theme.colors.peach};
        box-shadow: 0 0 24px ${({ theme }) => theme.colors.peach};
        transition: transform 0.2s, color 0.2s, box-shadow 0.2s;
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
        padding: 10px;
    }
`;

export const ProjectContainer = styled(motion.div)`
    cursor: pointer;
    padding: 15px;
    background: ${({ theme }) => theme.colors.overlay2};
    border-radius: 8px;
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
        transform: scale(1.05);
        z-index: 1;
        color: ${({ theme }) => theme.colors.teal};
        box-shadow: 0 0 16px ${({ theme }) => theme.colors.teal};
        transition: transform 0.2s, color 0.2s, box-shadow 0.2s;
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
        padding: 10px;
    }
`;

export const Modal = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContent = styled(motion.div)`
    background: ${({ theme }) => theme.colors.crust};
    padding: 20px;
    border-radius: 10px;
    max-width: 900px;
    width: 90%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    text-align: left;
    position: relative;

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.peach};

    &:hover {
        color: ${({ theme }) => theme.colors.red};
        transition: color 0.5s;
    }
`;

export const ExperienceTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.overlay2}; // Code comment color

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const CompanyName = styled.span`
    color: ${({ theme }) => theme.colors.blue}; // Function color
`;

export const PositionName = styled.span`
    color: ${({ theme }) => theme.colors.pink}; // Variable color
`;

export const ExperienceDate = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.lavender}; // Keyword color
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 0.875rem;
    }
`;

export const ExperienceDetails = styled.p`
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text}; // Default text color

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ResumeList = styled.ul`
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text}; // Default text color

    @media (max-width: 768px) {
        padding-left: 15px;
    }
`;

export const ResumeListItem = styled.li`
    font-size: 1rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 0.875rem;
    }
`;

export const ModalImage = styled.img`
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
`;


export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    z-index: 1000;
`;

export const NavContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavSection = styled.div`
    display: flex;
    align-items: center;
`;

export const NavItem = styled.div<{ active: boolean; color: string }>`
    margin: 0 1rem;
    color: ${({ active, color, theme }) => (active ? color : theme.colors.text)};
    font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
    transition: color 0.2s, font-weight 0.2s;

    &:hover {
        cursor: pointer;
        color: ${({  color }) => color};
        font-weight: bold;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
`;

export const IconLink = styled.a<{ color: string }>`
    margin: 0 0.5rem;
    color: ${({  theme }) => theme.colors.subtext};
    transition: color 0.3s;

    &:hover {
        color: ${({  color }) => color};
    }
`;

export const ProjectTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.mauve}; // Code comment color

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const TechnologyList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
`;

export const TechnologyItem = styled.li`
    margin-right: 10px;
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const ProjectDescription = styled.p`
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text}; // Default text color

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ProjectLearnings = styled.div`
    margin-top: 20px;
`;

export const LearningsTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.sky}; // Function color

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const LearningsContent = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text}; // Default text color

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.base}; // Background color
    padding: 20px;
`;

export const ContactText = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text}; // Text color
    text-align: center;

    a {
        color: ${({ theme }) => theme.colors.blue}; // Link color
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;