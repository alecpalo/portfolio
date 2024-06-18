// _components/Modal.tsx
import React from 'react';
import { motion } from 'framer-motion';
import '../app/globals.css'; // Import the CSS file for modal styles

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
        <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <button className="close-button" onClick={onClose}>×</button>
                {children}
            </motion.div>
        </motion.div>
    );
};

export default ModalComponent;
