import React from 'react';

export const metadata = {
    title: 'Alec Palo',
    description: 'My Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico"/>
            <title> Alec Palo </title>
        </head>
        <body>
        {children}
            </body>
        </html>
    );
}

