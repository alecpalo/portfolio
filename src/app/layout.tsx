import React from 'react';

export const metadata = {
    title: 'UMEB',
    description: 'New UMEB Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

