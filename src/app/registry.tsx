'use client';

import React, { useState, useEffect } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import Loading from '@/_components/loading/loading';  // Adjust the path as necessary

export default function StyledComponentsRegistry({
                                                     children,
                                                 }: {
    children: React.ReactNode;
}) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
    const [isLoading, setIsLoading] = useState(true);

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    // Simulate a loading state for demonstration (remove in production)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // 2 seconds delay for loading
        return () => clearTimeout(timer);
    }, []);

    if (typeof window !== 'undefined') {
        return isLoading ? <Loading /> : <>{children}</>;
    }

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {isLoading ? <Loading /> : children}
        </StyleSheetManager>
    );
}
