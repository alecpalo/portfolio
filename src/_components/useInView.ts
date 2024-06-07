// useInView.ts
import { useState, useEffect } from 'react';

export const useInView = (options: IntersectionObserverInit) => {
    const [ref, setRef] = useState<Element | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        observer.observe(ref);

        return () => {
            if (ref) observer.unobserve(ref);
        };
    }, [ref, options]);

    return { ref: setRef, isInView };
};
