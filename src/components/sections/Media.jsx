import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Youtube, Film, ExternalLink, Grid3X3, ArrowRight } from 'lucide-react';

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
        source: "youtube",
        description: "광주주류페스타 X 아이플렉스 리와인드프롬오아시스 라이브커머스"
    },
    // 결과보고 영상
    {
        id: 18,
        title: "광주불교연합회 2025년도 결과보고영상",
        category: "결과보고",
        videoId: "18Iny9th1ijpwnzwLeaoVk3VoXGdDxErG",
        source: "gdrive",
        description: "광주불교연합회 2025년도 활동 결과보고 영상"
    },
    // 기업홍보 영상 (Google Drive)
    {
        id: 19,
        title: "호산농장 천관쌀 브랜드 홍보영상",
        category: "기업홍보",
        videoId: "19b1g3eunQ6kqSt2znh2gcxwMXyn_fqoF",
        source: "gdrive",
        description: "호산농장의 프리미엄 천관쌀 브랜드 홍보"
    },
    {
        id: 20,
        title: "시유플레닛 기업 홍보영상",
        category: "기업홍보",
        videoId: "1feKeANsmycYn_89mF4OarNVtjbJlkRxB",
        source: "gdrive",
        description: "시유플레닛 기업 소개 홍보영상"
    },
    {
        id: 21,
        title: "시유플래닛 숏츠(릴스) 홍보영상",
        category: "기업홍보",
        videoId: "191tU7f_595bLWZHg-j_B_1ae4YhMdPYa",
        source: "gdrive",
        description: "시유플래닛 SNS용 숏폼 홍보영상"
    },
    {
        id: 22,
        title: "소트뉴 기업 홍보영상",
        category: "기업홍보",
        videoId: "1g_9MjUZUN4yqktVrJsRwvrWCyTxQdO2m",
        source: "gdrive",
        description: "소트뉴 기업 소개 홍보영상"
    },
    {
        id: 23,
        title: "유니코니 팝업스토어 라이브커머스",
        category: "라이브커머스",
        videoId: "1NcYN5WrPgRMSjX4tnXYgULeNrPfDPuKr",
        source: "gdrive",
        description: "유니코니 팝업스토어 라이브커머스 방송"
    },
    {
        id: 24,
        title: "2025 빛고을로봇페스티벌 스케치 홍보영상",
        category: "행사영상",
        videoId: "1JmdFYQAMGDOnHo2H618WQWMVpr1iwkK3",
        source: "gdrive",
        description: "2025 빛고을로봇페스티벌 현장 스케치 영상"
    },
    {
        id: 25,
        title: "행복한쓰임 기업 홍보영상",
        category: "기업홍보",
        videoId: "1hg6SiideTbcZol-tILUbdD1PmRz3bKS1",
        source: "gdrive",
        description: "행복한쓰임 기업 소개 홍보영상"
    },
    {
        id: 26,
        title: "인그래픽스 기업 홍보영상",
        category: "기업홍보",
        videoId: "10WFlW4VkJcJT44StZf8YIlT9ET4R0FJK",
        source: "gdrive",
        description: "인그래픽스 기업 소개 홍보영상"
    },
    {
        id: 27,
        title: "빵글빵글 기업 홍보영상",
        category: "기업홍보",
        videoId: "1X1WCAzZnNeseRES8syxa_DFWwH3t_QWz",
        source: "gdrive",
        description: "빵글빵글 베이커리 기업 홍보영상"
    },
    {
        id: 28,
        title: "예술약방 기업 홍보영상",
        category: "기업홍보",
        videoId: "1dBHAZ8G6BVsFDCuGmWFJUtZ0UXEYk5xt",
        source: "gdrive",
        description: "예술약방 기업 소개 홍보영상"
    },
    {
        id: 29,
        title: "헬프포유 기업 홍보영상",
        category: "기업홍보",
        videoId: "1zgdX8XEDo6SEidBqWfzd5q_Fv4w6cgAh",
        source: "gdrive",
        description: "헬프포유 기업 소개 홍보영상"
    },
    {
        id: 30,
        title: "어감 쿡방행사 홍보영상",
        category: "지역홍보",
        videoId: "181qH2mZi-tuaW3tG8fgGJEWWZ9kikdg5",
        source: "gdrive",
        description: "광주동구 서남동 마을사랑채 어감 쿡방행사"
    },
    {
        id: 31,
        title: "선아리 기업 홍보영상",
        category: "기업홍보",
        videoId: "1IwtOLcriquXFJ1j8NrUfRt8nJGdx4Gwd",
        source: "gdrive",
        description: "선아리 기업 소개 홍보영상"
    },
    {
        id: 32,
        title: "2024 별별동구 스토리텔링 성과공유영상",
        category: "결과보고",
        videoId: "1FFDmyWTxvCaOZ1Jck5VG6mWur_n68TgD",
        source: "gdrive",
        description: "2024 별별동구 스토리텔링 성과공유 영상"
    },
    {
        id: 33,
        title: "공공 개소식 및 기업 홍보영상",
        category: "기업홍보",
        videoId: "1Ov2q8p3eZlkatLKcpH87SJly365QSaMJ",
        source: "gdrive",
        description: "공공 장소 개소식 및 기업 홍보영상"
    },
    {
        id: 34,
        title: "창업행사 하이라이트 영상",
        category: "행사영상",
        videoId: "1PpnRrBmyvKylWE47pLdJ9Qnb1w5PCyBm",
        source: "gdrive",
        description: "창업행사 현장 하이라이트 영상"
    },
    {
        id: 35,
        title: "중견중소기업 오픈이노베이션 기업인터뷰",
        category: "인터뷰 콘텐츠",
        videoId: "1Kqsp6-I5nRZDuY56uHcxW_noEtZRtUf-",
        source: "gdrive",
        description: "중견중소기업 오픈이노베이션 창업행사 기업인터뷰"
    },
    {
        id: 36,
        title: "IBK창공2기 입소식, 워크숍 하이라이트",
        category: "행사영상",
        videoId: "1WcdlDKu8DBizqYmcF7TZYRoL0A-_QISv",
        source: "gdrive",
        description: "IBK창공 광주 2기 입소식 및 워크숍 하이라이트 영상"
    },
];

// Video Card Component for reuse
const VideoCard = ({ video, onClick, small = false }) => {
    // Get thumbnail based on source
    const getThumbnail = () => {
        if (video.source === 'gdrive') {
            return `https://drive.google.com/thumbnail?id=${video.videoId}&sz=w640`;
        }
        return `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
    };

    return (
        <div
            onClick={() => onClick(video)}
            className="group cursor-pointer"
        >
            <div className={`relative overflow-hidden rounded-xl md:rounded-2xl bg-gray-200 aspect-video shadow-lg`}>
                <img
                    src={getThumbnail()}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className={`${small ? 'w-10 h-10 md:w-14 md:h-14' : 'w-14 h-14 md:w-16 md:h-16'} bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl`}>
                        <Play className={`${small ? 'w-5 h-5 md:w-6 md:h-6' : 'w-6 h-6 md:w-8 md:h-8'} text-purple-600 ml-1`} />
                    </div>
                </div>
                <div className="absolute top-2 md:top-4 left-2 md:left-4">
                    <span className="px-2 md:px-3 py-1 bg-purple-600 text-white text-[10px] md:text-xs font-bold rounded-full">
                        {video.category}
                    </span>
                </div>
            </div>
            <div className="mt-2 md:mt-4">
                <h3 className={`${small ? 'text-sm md:text-lg' : 'text-base md:text-xl'} font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-1`}>
                    {video.title}
                </h3>
                <p className={`text-gray-500 ${small ? 'text-xs' : 'text-sm'} mt-1 line-clamp-1`}>{video.description}</p>
            </div>
        </div>
    );
};

const Media = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showGallery, setShowGallery] = useState(false);
    const [activeFilter, setActiveFilter] = useState('전체');

    const categories = ['전체', '기업홍보', '지역홍보', '인터뷰 콘텐츠', '라이브커머스', '행사영상', '결과보고', '헌혈캠페인'];

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

    const previewVideos = videos.slice(0, 3); // Show only 3 on main page

    const filteredVideos = activeFilter === '전체'
        ? videos
        : videos.filter(v => v.category === activeFilter);

    const openVideo = (video) => {
        setSelectedVideo(video);
        document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
        setSelectedVideo(null);
        document.body.style.overflow = showGallery ? 'hidden' : 'auto';
    };

    const openGallery = () => {
        setShowGallery(true);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = () => {
        setShowGallery(false);
        setActiveFilter('전체');
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="media" className="py-16 md:py-24 bg-gray-50 relative z-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header - Compact */}
                <div className="text-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 mb-4"
                    >
                        <Film className="w-4 h-4 text-purple-600" />
                        <span className="text-xs text-purple-700 font-bold">Media Gallery</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-4xl font-bold text-gray-900 mb-2"
                    >
                        우리가 만든 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">영상 콘텐츠</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-sm md:text-base max-w-xl mx-auto"
                    >
                        비제로스튜디오가 기획하고 제작한 다양한 영상 콘텐츠
                    </motion.p>
                </div>

                {/* Preview Video Grid - 3 Videos Only */}
                <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8">
                    {previewVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <VideoCard video={video} onClick={openVideo} small={true} />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-4"
                >
                    <button
                        onClick={openGallery}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors shadow-lg"
                    >
                        <Grid3X3 className="w-5 h-5" />
                        전체 영상 보기 ({videos.length}개)
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                        href="https://www.youtube.com/channel/UCRWdx-ktiMVTAg-FLCfN-8g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors"
                    >
                        <Youtube className="w-5 h-5" />
                        유튜브 채널
                    </a>
                </motion.div>
            </div>

            {/* Full Gallery Modal - Portal to body for z-index isolation */}
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {showGallery && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed top-0 left-0 right-0 bottom-0 bg-white z-[9999] overflow-y-auto"
                        >
                            <div className="min-h-screen bg-white">
                                {/* Fixed Close Button - Always Visible */}
                                <button
                                    onClick={closeGallery}
                                    className="fixed top-20 right-4 z-[210] p-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors shadow-lg"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>

                                {/* Gallery Header */}
                                <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={closeGallery}
                                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-bold text-gray-700 transition-colors"
                                            >
                                                ← 홈으로 돌아가기
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Film className="w-5 h-5 text-purple-600" />
                                            <h2 className="text-lg md:text-xl font-bold text-gray-900">영상 갤러리</h2>
                                            <span className="text-sm text-gray-500">({filteredVideos.length}개)</span>
                                        </div>
                                    </div>

                                    {/* Category Filters */}
                                    <div className="max-w-7xl mx-auto px-6 pb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => setActiveFilter(category)}
                                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === category
                                                        ? 'bg-purple-600 text-white shadow-lg'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-purple-50'
                                                        }`}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Grid */}
                                <div className="max-w-7xl mx-auto px-6 py-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                        {filteredVideos.map((video, index) => (
                                            <motion.div
                                                key={video.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.03 }}
                                            >
                                                <VideoCard video={video} onClick={openVideo} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}

            {/* Video Player Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
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
                                src={selectedVideo.source === 'gdrive'
                                    ? `https://drive.google.com/file/d/${selectedVideo.videoId}/preview`
                                    : `https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`
                                }
                                title={selectedVideo.title}
                                className="w-full h-full rounded-2xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
};

export default Media;

