import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight, Users, CheckCircle, X, Grid3X3, ArrowRight, Building2 } from 'lucide-react';

const venues = [
    {
        title: 'KDJ Convention Center',
        location: '광주 서구 상무누리로 30',
        capacity: 'Max 3,000 People',
        features: ['대규모 컨퍼런스', '국제회의 시설', '편리한 주차', 'VIP 대기실']
    },
    {
        title: 'Gwangju Content Cube',
        location: '광주 남구 송암로 60',
        capacity: '100~300 People',
        features: ['실감형 미디어 장비', '하이브리드 행사', '스튜디오 시설', '최신 음향/조명']
    },
    {
        title: 'I-PLEX Gwangju',
        location: '광주 동구 동계천로 150',
        capacity: '50~100 People',
        features: ['스타트업 행사 특화', '합리적인 대관료', '코워킹 스페이스', '동명동 인접']
    },
    {
        title: 'ACC (Asia Culture Center)',
        location: '광주 동구 문화전당로 38',
        capacity: 'Various Options',
        features: ['유니크 베뉴', '예술/문화 행사', '도심 랜드마크', '야외 광장 연계']
    },
];

// Venue Card Component
const VenueCard = ({ venue, index, isOpen, onClick, compact = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onClick={onClick}
        className={`border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${isOpen ? 'bg-white border-purple-200 shadow-xl' : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-md'}`}
    >
        <div className={`flex items-center justify-between ${compact ? 'p-3 md:p-6' : 'p-6 md:p-8'}`}>
            <div className="flex items-center gap-3 md:gap-6">
                <span className={`text-xs md:text-sm font-mono font-bold ${isOpen ? 'text-purple-600' : 'text-gray-400'}`}>0{index + 1}</span>
                <h3 className={`${compact ? 'text-sm md:text-xl' : 'text-xl md:text-2xl'} font-bold uppercase tracking-tight transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-500'}`}>{venue.title}</h3>
            </div>
            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-90 bg-purple-600 text-white border-purple-600' : 'border-gray-300 text-gray-400'}`}>
                <ChevronRight size={compact ? 12 : 16} />
            </div>
        </div>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className={`${compact ? 'p-4 md:p-8' : 'p-8'} pt-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 border-t border-gray-100 mt-2`}>
                        <div className="space-y-4 md:space-y-6 pt-4 md:pt-6">
                            <div>
                                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 md:mb-2 block">Location</span>
                                <div className="flex items-start gap-2 text-gray-700">
                                    <MapPin size={compact ? 14 : 18} className="mt-1 shrink-0 text-purple-600" />
                                    <span className={`${compact ? 'text-sm' : 'text-lg'} font-medium`}>{venue.location}</span>
                                </div>
                            </div>
                            <div>
                                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 md:mb-2 block">Capacity</span>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Users size={compact ? 14 : 18} className="text-purple-600" />
                                    <p className={`${compact ? 'text-lg' : 'text-2xl'} font-bold`}>{venue.capacity}</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 md:pt-6 relative">
                            <div className="absolute left-0 top-6 bottom-0 w-px bg-gray-100 hidden md:block"></div>
                            <div className="md:pl-8">
                                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 md:mb-4 block">Key Features</span>
                                <ul className="space-y-2 md:space-y-3">
                                    {venue.features.map((f, i) => (
                                        <li key={i} className={`flex items-center gap-2 md:gap-3 text-gray-600 ${compact ? 'text-xs md:text-base' : ''}`}>
                                            <CheckCircle size={compact ? 12 : 16} className="text-purple-600" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);

const Venue = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [showGallery, setShowGallery] = useState(false);
    const [galleryOpenIndex, setGalleryOpenIndex] = useState(0);

    const previewVenues = venues.slice(0, 2); // Show only 2 on main page

    // Listen for closeModals event from Navbar
    useEffect(() => {
        const handleCloseModals = () => {
            if (showGallery) {
                closeGallery();
            }
        };

        window.addEventListener('closeModals', handleCloseModals);
        return () => window.removeEventListener('closeModals', handleCloseModals);
    }, [showGallery]);

    const openGallery = () => {
        setShowGallery(true);
        setGalleryOpenIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = () => {
        setShowGallery(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="venues" className="py-16 md:py-24 bg-gray-50 relative z-10 border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-6">
                {/* Compact Header */}
                <div className="text-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 mb-4"
                    >
                        <Building2 className="w-4 h-4 text-purple-600" />
                        <span className="text-xs text-purple-700 font-bold">Venue Archive</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-4xl font-bold text-gray-900 mb-2"
                    >
                        Gwangju <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Venue List</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-sm md:text-base max-w-lg mx-auto"
                    >
                        비제로스튜디오가 검증한 최적의 행사 장소
                    </motion.p>
                </div>

                {/* Preview Venues - 2 Items Only */}
                <div className="flex flex-col gap-3 md:gap-4 mb-8">
                    {previewVenues.map((venue, index) => (
                        <VenueCard
                            key={index}
                            venue={venue}
                            index={index}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            compact={true}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <button
                        onClick={openGallery}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors shadow-lg"
                    >
                        <Grid3X3 className="w-5 h-5" />
                        전체 베뉴 보기 ({venues.length}개)
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>

            {/* Full Gallery Modal */}
            <AnimatePresence>
                {showGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white z-[200] overflow-y-auto"
                    >
                        {/* Fixed Close Button */}
                        <button
                            onClick={closeGallery}
                            className="fixed top-20 right-4 z-[210] p-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors shadow-lg"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Gallery Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={closeGallery}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-bold text-gray-700 transition-colors"
                                    >
                                        ← 홈으로 돌아가기
                                    </button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Building2 className="w-5 h-5 text-purple-600" />
                                    <h2 className="text-lg md:text-xl font-bold text-gray-900">베뉴 리스트</h2>
                                    <span className="text-sm text-gray-500">({venues.length}개)</span>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Content */}
                        <div className="max-w-5xl mx-auto px-6 py-8">
                            <div className="flex flex-col gap-4">
                                {venues.map((venue, index) => (
                                    <VenueCard
                                        key={index}
                                        venue={venue}
                                        index={index}
                                        isOpen={galleryOpenIndex === index}
                                        onClick={() => setGalleryOpenIndex(galleryOpenIndex === index ? -1 : index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Venue;
