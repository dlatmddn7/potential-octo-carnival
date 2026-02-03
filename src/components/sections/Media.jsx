import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Youtube, Film, ExternalLink } from 'lucide-react';

// YouTube video data with real video IDs
const videos = [
    // 인터뷰 영상
    {
        id: 1,
        title: "금터뷰 시리즈 - 지역 소상공인 인터뷰",
        category: "인터뷰 콘텐츠",
        videoId: "qKt-oz-zEcY",
        description: "지역 소상공인의 생생한 이야기"
    },
    {
        id: 2,
        title: "금터뷰 시리즈 - 창업자 인터뷰",
        category: "인터뷰 콘텐츠",
        videoId: "XoH_C0KMHts",
        description: "성공 창업가의 노하우 공유"
    },
    {
        id: 3,
        title: "금터뷰 시리즈 - 지역 명인 인터뷰",
        category: "인터뷰 콘텐츠",
        videoId: "zQLmY3yJPn4",
        description: "지역 명인과의 특별한 대화"
    },
    {
        id: 4,
        title: "금터뷰 시리즈 - 사회적기업 인터뷰",
        category: "인터뷰 콘텐츠",
        videoId: "1l0AjXWOKkE",
        description: "사회적 가치를 실현하는 기업가"
    },
    {
        id: 5,
        title: "금터뷰 시리즈 - 청년 창업가 인터뷰",
        category: "인터뷰 콘텐츠",
        videoId: "5FBjH-1NXnM",
        description: "청년 창업가의 도전 이야기"
    },
    {
        id: 6,
        title: "금터뷰 시리즈 - 로컬 브랜드 인터뷰",
        category: "인터뷰 콘텐츠",
        videoId: "19D5gwwxC0s",
        description: "로컬 브랜드 성장 스토리"
    },
    // 지역 홍보 콘텐츠
    {
        id: 7,
        title: "별별동구 시즌1 - 동구의 숨은 이야기",
        category: "지역 홍보 콘텐츠",
        videoId: "MWfnwef9EAE",
        description: "광주 동구의 다양한 매력 탐방"
    },
    {
        id: 8,
        title: "별별동구 시즌1 - 로컬 맛집 탐방",
        category: "지역 홍보 콘텐츠",
        videoId: "Oh2ApM5Fd4k",
        description: "동구의 숨은 맛집을 찾아서"
    },
    {
        id: 9,
        title: "별별동구 시즌1 - 문화예술 거리",
        category: "지역 홍보 콘텐츠",
        videoId: "QN_Dv2WLm5A",
        description: "동구의 문화예술 현장"
    },
    {
        id: 10,
        title: "별별동구 시즌1 - 역사 탐방",
        category: "지역 홍보 콘텐츠",
        videoId: "cmDkUyzuzpg",
        description: "동구의 역사와 전통"
    },
    {
        id: 11,
        title: "별별동구 시즌1 - 청년 창업 거리",
        category: "지역 홍보 콘텐츠",
        videoId: "sYJeTCp4bbE",
        description: "청년들이 만들어가는 동구"
    },
    {
        id: 12,
        title: "별별동구 시즌1 - 시장 이야기",
        category: "지역 홍보 콘텐츠",
        videoId: "6i14yvqsclI",
        description: "전통시장의 활력과 정"
    },
    // 라이브커머스
    {
        id: 13,
        title: "라이브커머스 - 지역특산물 판매방송",
        category: "라이브커머스",
        videoId: "YMgXTmPV9CY",
        description: "지역 특산물 실시간 판매"
    },
    {
        id: 14,
        title: "라이브커머스 - 로컬푸드 마켓",
        category: "라이브커머스",
        videoId: "uxlaI1mpUU8",
        description: "신선한 로컬푸드 라이브"
    },
    {
        id: 15,
        title: "라이브커머스 - 전통시장 특집",
        category: "라이브커머스",
        videoId: "A6cnWujHy9k",
        description: "전통시장 상품 라이브 판매"
    },
    {
        id: 16,
        title: "라이브커머스 - 농산물 직거래",
        category: "라이브커머스",
        videoId: "f8tj22-URV8",
        description: "농가와 소비자의 직접 연결"
    },
    {
        id: 17,
        title: "라이브커머스 - 해남 고구마 특집",
        category: "라이브커머스",
        videoId: "aacNYG7d8oE",
        description: "해남 고구마 산지직송 라이브"
    },
];

const Media = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [activeFilter, setActiveFilter] = useState('전체');

    const categories = ['전체', '인터뷰 콘텐츠', '지역 홍보 콘텐츠', '라이브커머스'];

    const filteredVideos = activeFilter === '전체'
        ? videos
        : videos.filter(v => v.category === activeFilter);

    const openVideo = (video) => {
        setSelectedVideo(video);
        document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="media" className="py-32 bg-gray-50 relative z-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 mb-6"
                    >
                        <Film className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-purple-700 font-bold">Media Gallery</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        우리가 만든 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">영상 콘텐츠</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto"
                    >
                        비제로스튜디오가 기획하고 제작한 다양한 영상 콘텐츠를 확인하세요.
                    </motion.p>

                    {/* YouTube Channel Link */}
                    <motion.a
                        href="https://www.youtube.com/channel/UCRWdx-ktiMVTAg-FLCfN-8g"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors"
                    >
                        <Youtube className="w-5 h-5" />
                        유튜브 채널 바로가기
                        <ExternalLink className="w-4 h-4" />
                    </motion.a>
                </div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === category
                                    ? 'bg-purple-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => openVideo(video)}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-video shadow-lg">
                                <img
                                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                                        <Play className="w-8 h-8 text-purple-600 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                                        {video.category}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                                    {video.title}
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">{video.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={closeVideo}
                    >
                        <button
                            onClick={closeVideo}
                            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X className="w-8 h-8 text-white" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-5xl aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                                title={selectedVideo.title}
                                className="w-full h-full rounded-2xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Media;
