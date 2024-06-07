// app/layout.tsx
"use client";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './style';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
