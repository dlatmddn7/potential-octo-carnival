import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const heroImages = [
    "/images/hero/slide1.jpg", // IBK창공 광주 1기 PRE DEMO DAY
    "/images/hero/slide2.jpg", // 2023 광주 스타트업 페스티벌
    "/images/hero/slide3.jpg", // IBK창공 광주 2기 PRE DEMO DAY
    "/images/hero/slide4.jpg", // ESG 포럼
    "/images/hero/slide5.jpg", // 2025 빛고을 로봇 페스티벌
    "/images/hero/slide6.jpg", // 소셜임팩트 온스테이지
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 13000);
        return () => clearInterval(timer);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-16 pb-20 md:pt-20 md:pb-0 overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={heroImages[currentIndex]}
                            alt="Background"
                            className="w-full h-full object-cover blur-[2px]"
                        />
                        {/* Lighter overlay for transparency - blends with white theme */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-white/70 backdrop-blur-[1px]" />
                        {/* Gradient overlay for smooth transition to white section below */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* 1. ACCENT - English slogan (Script font, small, elegant) */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-base sm:text-lg md:text-xl text-gray-400 mb-3 md:mb-4 tracking-wide italic drop-shadow-lg"
                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                    Start from Zero, Create Infinite.
                </motion.p>

                {/* 2. HEADLINE - Main copy (Sans-serif, very large, bold) */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-6 md:mb-8 drop-shadow-2xl text-white"
                    style={{ fontFamily: "'Pretendard', 'Inter', sans-serif" }}
                >
                    당신의 수고로움을<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-400">BEZERO</span> 하다.
                </motion.h1>

                {/* 3. BODY - Description (Gothic, readable, generous line-height) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-loose drop-shadow-lg"
                    style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}
                >
                    상상 그 이상의 현장, 비제로스튜디오가 기획합니다.<br className="hidden sm:block" />
                    기획, 연출, 운영, 컨설팅까지 —<br />
                    비즈니스의 성공을 위한 크리에이티브 올인원 솔루션을 경험하세요.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => scrollTo('services')}
                        className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-purple-600 transition-all flex items-center gap-2 group shadow-lg shadow-primary/30"
                    >
                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        서비스 보기
                    </button>
                    <button
                        onClick={() => scrollTo('portfolio')}
                        className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 transition-all font-bold flex items-center gap-2 group backdrop-blur-md"
                    >
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
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden md:block"
            >
                <div className="w-6 h-10 rounded-full border-2 border-gray-400/50 flex items-start justify-center p-1 backdrop-blur-sm">
                    <div className="w-1 h-2 bg-gray-500/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

