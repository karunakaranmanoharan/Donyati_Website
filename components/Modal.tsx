import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from './icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const previouslyFocusedElement = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isOpen) {
            previouslyFocusedElement.current?.focus();
            return;
        }
        
        previouslyFocusedElement.current = document.activeElement as HTMLElement;
        const modalNode = modalRef.current;
        if (!modalNode) return;

        const focusableElements = modalNode.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
                return;
            }

            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        // Defer focus setting to allow modal to render
        setTimeout(() => {
            firstElement?.focus();
        }, 100);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] p-4 transition-opacity duration-300 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div 
                ref={modalRef}
                className="bg-[var(--bg-color)] rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-[var(--border-color)] transition-transform duration-300 animate-scale-up"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex justify-between items-center p-6 border-b border-[var(--border-color)] flex-shrink-0">
                    <h2 id="modal-title" className="text-2xl font-bold text-[var(--text-color)]">{title}</h2>
                    <button onClick={onClose} className="p-1 rounded-full text-[var(--text-muted)] hover:bg-[var(--card-color)] hover:text-[var(--text-color)] transition-colors" aria-label="Close modal">
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </header>
                <div className="overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')!
    );
};

export default Modal;