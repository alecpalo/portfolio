import { useInView } from './useInView';
import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useState } from 'react';


interface Props {
    children: ReactNode;
}


const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

export default function AnimatedComponent({ children }: Props) {
    const { ref, isInView } = useInView({ threshold: 0.99 });
    const isMobile = useIsMobile();

    return (
        <motion.div
            ref={ref}
            animate={isMobile ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}
