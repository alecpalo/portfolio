import React from 'react';
import { ContactContainer, ContactText } from '@/app/style';

const ContactPage = () => {
    return (
        <ContactContainer>
            <ContactText>
                Feel free to reach out to me on <a href="https://www.linkedin.com/in/apalo">LinkedIn</a> or send me an email at <a href="mailto:apalo@umich.edu">apalo@umich.edu</a>.
            </ContactText>
        </ContactContainer>
    );
};

export default ContactPage;
