import {ExperienceDate, ExperienceDetails, ResumeList, ResumeListItem, ExperienceTitle, PositionName, CompanyName} from "@/app/style";
import React from "react";

interface ExperienceProps {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    details: string;
    responsibilities: string[];
}

const Experience = (experience: ExperienceProps) => {
    return(
        <>
            <ExperienceTitle>
                <PositionName>
                    {experience.title}
                </PositionName>
                 &nbsp;@&nbsp;
                <CompanyName>
                    {experience.company}
                </CompanyName>
            </ExperienceTitle>
            <ExperienceDate>
                {experience.startDate} - {experience.endDate}
            </ExperienceDate>
            <ExperienceDetails>
                {experience.details}
            </ExperienceDetails>
            <ResumeList>
                {experience.responsibilities.map((responsibility, i) => (
                    <ResumeListItem key={i}>
                        {responsibility}
                    </ResumeListItem>
                ))}
            </ResumeList>
        </>
    );
}

export default Experience;