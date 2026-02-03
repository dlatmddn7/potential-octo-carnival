import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Youtube, Film, ExternalLink } from 'lucide-react';

// YouTube video data with real video IDs and actual titles/descriptions
const videos = [
    // 지역홍보 (인터뷰 콘텐츠)
    {
        id: 1,
        title: "선아리 - 작은 바느질로 이어가는 큰 가치",
        category: "지역홍보",
        videoId: "qKt-oz-zEcY",
        description: "친환경 굿즈 제작 전문기업, 봉제 기술을 가진 시니어와 취약계층이 함께하는 책임소비 이야기"
    },
    {
        id: 2,
        title: "에드업 - 복지와 스포츠를 잇다",
        category: "지역홍보",
        videoId: "XoH_C0KMHts",
        description: "비대면 운동 플랫폼으로 장애인과 취약계층이 운동에 쉽게 접근할 수 있도록 돕는 사회적 가치 실현"
    },
    {
        id: 3,
        title: "더일러스트앤아트 - 그림과 예술로 피워내는 치유",
        category: "지역홍보",
        videoId: "zQLmY3yJPn4",
        description: "보태니컬 아트와 컬러 심리를 접목한 교육·전시·출판으로 생애전환기 시민들에게 치유와 성장 제안"
    },
    {
        id: 4,
        title: "민들레씨앤비 - 건강한 빵을 만들며 성장하는",
        category: "지역홍보",
        videoId: "19D5gwwxC0s",
        description: "광주 동구 인증사회적기업 빵글빵글, 속이 편한 빵으로 자립준비청년을 돕는 사회적 가치 창출"
    },
    {
        id: 5,
        title: "행복한쓰임 개소식",
        category: "지역홍보",
        videoId: "MWfnwef9EAE",
        description: "행복한쓰임협동조합, 선아리, 좋은날에가 함께한 공공 개소식 현장"
    },
    {
        id: 6,
        title: "헌혈, 생명을 살리는 아름다운 도전",
        category: "헌혈캠페인",
        videoId: "QN_Dv2WLm5A",
        description: "건강할 때 헌혈하는 것은 자신과 사랑하는 가족, 모두를 위한 사랑의 실천"
    },
    // 금터뷰 시리즈 (인터뷰 콘텐츠)
    {
        id: 7,
        title: "원인터내셔널 - 마법같은 스마트홈 자동문",
        category: "인터뷰 콘텐츠",
        videoId: "1l0AjXWOKkE",
        description: "반짝반짝 빛날 기업들을 만나는 금터뷰, 스마트홈 자동문과 AI장비 인테리어 전문기업"
    },
    {
        id: 8,
        title: "마인스페이스 - AI 인테리어 플랫폼 꾸민(GGUMIN)",
        category: "인터뷰 콘텐츠",
        videoId: "5FBjH-1NXnM",
        description: "2025 CES 혁신상 수상, AI가 인테리어와 쇼핑까지 해주는 공간혁명 플랫폼"
    },
    // 라이브커머스
    {
        id: 9,
        title: "The청정 EM 홈케어 비누세트",
        category: "라이브커머스",
        videoId: "YMgXTmPV9CY",
        description: "유해화학물질 없이 천연 성분으로 만든 친환경 비누, 재활용 오일 수작업 공정"
    },
    {
        id: 10,
        title: "우리밀스토리 수제쿠키 6종",
        category: "라이브커머스",
        videoId: "Oh2ApM5Fd4k",
        description: "100% 우리밀로 만든 바삭한 수제쿠키 - 오트밀, 검은깨, 녹차, 초코, 호두, 땅콩"
    },
    {
        id: 11,
        title: "오로라팜투어 - 동건이네농장 추희자두 수확",
        category: "라이브커머스",
        videoId: "cmDkUyzuzpg",
        description: "장성 드넓은 동건이네농장에서 가족 체험과 제철 과일 추희자두 수확"
    },
    {
        id: 12,
        title: "소소마켓 라이브",
        category: "라이브커머스",
        videoId: "sYJeTCp4bbE",
        description: "광주 북구지역 소상공인들이 함께하는 소소마켓 라이브 방송"
    },
    {
        id: 13,
        title: "진원골새순묘목농원 분갈이체험",
        category: "라이브커머스",
        videoId: "6i14yvqsclI",
        description: "전남 장성 무늬동백 분갈이 체험, 이색체험을 원하는 분들에게 안성맞춤"
    },
    {
        id: 14,
        title: "보리담은 나주 찰보리빵",
        category: "라이브커머스",
        videoId: "uxlaI1mpUU8",
        description: "전남여성일자리박람회 현장, 첨가물 없이 건강하게 만든 찰보리빵과 경주빵"
    },
    {
        id: 15,
        title: "2022 광주주류페스타 - 현대 F&B",
        category: "라이브커머스",
        videoId: "A6cnWujHy9k",
        description: "광주주류페스타 X 아이플렉스 현대 F&B 라이브커머스"
    },
    {
        id: 16,
        title: "2022 광주주류페스타 - 베다라이프",
        category: "라이브커머스",
        videoId: "f8tj22-URV8",
        description: "광주주류페스타 X 아이플렉스 베다라이프 라이브커머스"
    },
    {
        id: 17,
        title: "2022 광주주류페스타 - 리와인드프롬오아시스",
        category: "라이브커머스",
        videoId: "aacNYG7d8oE",
        description: "광주주류페스타 X 아이플렉스 리와인드프롬오아시스 라이브커머스"
    },
];

const Media = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [activeFilter, setActiveFilter] = useState('전체');

    const categories = ['전체', '지역홍보', '인터뷰 콘텐츠', '라이브커머스', '헌혈캠페인'];

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
