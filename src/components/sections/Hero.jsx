import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const heroImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000", // Event Crowd
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000", // Conference
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2000", // Concert Lights
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000"  // Networking
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={heroImages[currentIndex]}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay to darken images for text readability */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                        {/* Gradient overlay for smooth transition to next section */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-gray-300 tracking-wide">새로운 프로젝트를 기다립니다</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 drop-shadow-2xl"
                >
                    <span className="block text-gray-300/80 text-3xl md:text-5xl mb-4 font-bold tracking-normal">
                        당신의 수고로움을
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-pink-400">
                        BEZERO 하다.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-lg"
                >
                    비제로스튜디오는 <span className="text-white font-bold">기획, 연출, 운영, 컨설팅</span>까지<br className="hidden md:block" />
                    비즈니스의 성공을 위한 크리에이티브 올인원 솔루션을 제공합니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-purple-600 transition-all flex items-center gap-2 group shadow-lg shadow-primary/30">
                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        서비스 보기
                    </button>
                    <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 transition-all font-bold flex items-center gap-2 group backdrop-blur-md">
                        포트폴리오
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-full border border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 transition-all font-bold flex items-center gap-2 group backdrop-blur-md">
                        기업 소개서
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1 backdrop-blur-sm">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
