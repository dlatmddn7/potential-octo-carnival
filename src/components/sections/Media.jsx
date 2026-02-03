import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Youtube, Film, ExternalLink } from 'lucide-react';

// YouTube video data - Add more videos here with their YouTube video IDs
const videos = [
    {
        id: 1,
        title: "별별동구 시즌1",
        category: "지역 홍보 콘텐츠",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        description: "광주 동구의 숨겨진 이야기를 담은 다큐멘터리 시리즈"
    },
    {
        id: 2,
        title: "금터뷰 시리즈",
        category: "인터뷰 콘텐츠",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        description: "지역 소상공인 및 창업자 인터뷰 시리즈"
    },
    {
        id: 3,
        title: "관광공사 라이브커머스",
        category: "라이브커머스",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        description: "한국관광공사와 함께한 지역특산물 라이브커머스"
    },
    {
        id: 4,
        title: "천관쌀 브랜드 영상",
        category: "홍보 영상",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        description: "장흥 천관쌀 브랜딩 및 홍보 영상 제작"
    },
    {
        id: 5,
        title: "IBK창공 성과 영상",
        category: "행사 영상",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        description: "IBK창공 광주 프로그램 성과 기록 영상"
    },
    {
        id: 6,
        title: "해남 고구마 라이브",
        category: "라이브커머스",
        videoId: "dQw4w9WgXcQ", // Replace with actual video ID
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        description: "해남 고구마 판촉 라이브커머스 방송"
    },
];

const Media = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [activeFilter, setActiveFilter] = useState('전체');

    const categories = ['전체', '지역 홍보 콘텐츠', '인터뷰 콘텐츠', '라이브커머스', '홍보 영상', '행사 영상'];

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
                            transition={{ delay: index * 0.1 }}
                            onClick={() => openVideo(video)}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-video shadow-lg">
                                <img
                                    src={video.thumbnail}
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
        </section>
    );
};

export default Media;
