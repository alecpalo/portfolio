'use client';
import StyledComponentsRegistry from './registry';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './style';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledComponentsRegistry>
                {children}
        </StyledComponentsRegistry>
        </ThemeProvider>
        </body>
        </html>
    );
}
