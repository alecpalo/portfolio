import React, { ReactNode } from 'react';
import { useInView } from './useInView';
import { motion } from 'framer-motion';

interface Props {
    children: ReactNode;
}

export default function AnimatedComponent({ children }: Props) {
    const { ref, isInView } = useInView({ threshold: 0.99 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}
