import React from "react";
import '../../app/globals.css';

interface ExperienceProps {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    details: string;
    responsibilities: string[];
}

const Experience: React.FC<ExperienceProps> = (experience) => {
    return (
        <>
            <h2 className="experience-title">
                <span className="position-name">
                    {experience.title}
                </span>
                &nbsp;@&nbsp;
                <span className="company-name">
                    {experience.company}
                </span>
            </h2>
            <p className="experience-date">
                {experience.startDate} - {experience.endDate}
            </p>
            <p className="experience-details">
                {experience.details}
            </p>
            <ul className="resume-list">
                {experience.responsibilities.map((responsibility, i) => (
                    <li key={i} className="resume-list-item">
                        {responsibility}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Experience;
