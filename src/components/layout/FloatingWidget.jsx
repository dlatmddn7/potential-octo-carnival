import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-surface/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl mb-2 w-64"
                    >
                        <div className="flex flex-col gap-3">
                            <p className="text-sm text-gray-300">
                                궁금한 점이 있으신가요?<br />
                                언제든 문의주세요!
                            </p>
                            <button
                                onClick={scrollToContact}
                                className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-purple-600 transition-colors"
                            >
                                문의 남기기
                            </button>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-500 font-bold uppercase">Call Us</span>
                                <a href="tel:062-229-3060" className="text-white font-bold hover:text-primary transition-colors">
                                    062-229-3060
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={toggleOpen}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-gray-700 text-white' : 'bg-primary text-white'}`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>
        </div>
    );
};

export default FloatingWidget;
