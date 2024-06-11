import { useInView } from './useInView';
import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useState } from 'react';
import {useIsMobile} from "@/_components/useIsMobile";

interface Props {
    children: ReactNode;
}

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
