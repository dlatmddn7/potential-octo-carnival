import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'services', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'media', label: 'Media' },
        { id: 'venues', label: 'Venue List' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollTo = (id) => {
        // Dispatch custom event to close any open modals (like Media gallery)
        window.dispatchEvent(new CustomEvent('closeModals'));

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const handleHomeClick = () => {
        // Dispatch custom event to close any open modals
        window.dispatchEvent(new CustomEvent('closeModals'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#home" className="text-2xl font-black tracking-tighter flex items-center gap-2" onClick={handleHomeClick}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-800">BEZERO STUDIO</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                    <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase">
                        프로젝트 시작하기
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-bg/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-10 gap-8"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="text-2xl font-bold text-gray-300 hover:text-white transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
