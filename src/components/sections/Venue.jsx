import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight, Users, CheckCircle } from 'lucide-react';

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

const Venue = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="venues" className="py-32 bg-[#0A0A0A] relative z-10">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black mb-6 text-white/5"
                    >
                        ARCHIVE
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold -mt-16 relative z-10"
                    >
                        Gwangju Venue List
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 mt-6 max-w-lg mx-auto"
                    >
                        성공적인 행사를 위한 공간.<br />
                        비제로스튜디오가 검증한 최적의 장소들을 확인하세요.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-4">
                    {venues.map((venue, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${openIndex === index ? 'bg-white/5 border-primary/50' : 'bg-transparent hover:bg-white/5'}`}
                        >
                            <div className="flex items-center justify-between p-6 md:p-8">
                                <div className="flex items-center gap-6">
                                    <span className={`text-sm font-mono opacity-50 ${openIndex === index ? 'text-primary' : 'text-gray-500'}`}>0{index + 1}</span>
                                    <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-tight transition-colors ${openIndex === index ? 'text-white' : 'text-gray-400'}`}>{venue.title}</h3>
                                </div>
                                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-90 bg-primary text-white border-primary' : 'text-gray-500'}`}>
                                    <ChevronRight size={16} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 mt-2">
                                            <div className="space-y-6 pt-6">
                                                <div>
                                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Location</span>
                                                    <div className="flex items-start gap-2 text-gray-300">
                                                        <MapPin size={18} className="mt-1 shrink-0 text-primary" />
                                                        <span className="text-lg font-medium">{venue.location}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Capacity</span>
                                                    <div className="flex items-center gap-2 text-gray-300">
                                                        <Users size={18} className="text-primary" />
                                                        <p className="text-2xl font-bold">{venue.capacity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-6 relative">
                                                <div className="absolute left-0 top-6 bottom-0 w-px bg-white/10 hidden md:block"></div>
                                                <div className="md:pl-8">
                                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 block">Key Features</span>
                                                    <ul className="space-y-3">
                                                        {venue.features.map((f, i) => (
                                                            <li key={i} className="flex items-center gap-3 text-gray-400">
                                                                <CheckCircle size={16} className="text-primary" />
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Venue;
