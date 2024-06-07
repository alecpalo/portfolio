// _components/Modal.tsx
import React from 'react';
import { Modal, ModalContent, CloseButton } from '@/app/style';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
        <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
        >
            <ModalContent
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0}}
            >
                <CloseButton onClick={onClose}>×</CloseButton>
                {children}
            </ModalContent>
        </Modal>
    );
};

export default ModalComponent;
