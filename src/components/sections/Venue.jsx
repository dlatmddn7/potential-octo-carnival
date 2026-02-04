import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight, Users, CheckCircle, X, Grid3X3, ArrowRight, Building2 } from 'lucide-react';

const venues = [
    // ========================================
    // 1. Premium & Business (호텔/컨벤션)
    // 격식 있는 이사회, 외부 VIP 초청, 연회 동반 행사
    // ========================================
    {
        title: '홀리데이 인 광주',
        location: '광주 서구 상무지구',
        capacity: '20~300명',
        category: 'Premium',
        features: ['글로벌 체인 호텔', '외빈 응대 최적화', '케이터링 품질 우수', '소규모~대형 컨벤션홀'],
        link: 'https://higwangju.com/index.php?cate=005'
    },
    {
        title: '라마다플라자 광주',
        location: '광주 서구 상무지구',
        capacity: '30~500명',
        category: 'Premium',
        features: ['상무지구 중심 위치', '교통 접근성 우수', '중소연회장 다양', '인원맞춤 공간'],
        link: 'https://www.ramadagwangju.com/banquet/meeting.php'
    },
    {
        title: '유탑부티크호텔',
        location: '광주 서구 상무지구',
        capacity: '50~100명',
        category: 'Premium',
        features: ['신축 깔끔한 시설', '레지던스형 호텔', '숙박 연계 워크숍', '연회장 예약 가능'],
        link: 'https://www.utopboutique.com'
    },
    {
        title: '김대중컨벤션센터',
        location: '광주 서구 상무지구',
        capacity: '10~수천명',
        category: 'Premium',
        features: ['호남 최대 규모', '회의실 크기별 세분화', '소규모 미팅 가능', '전시 연계 행사'],
        link: 'https://www.kdjcenter.or.kr'
    },
    // ========================================
    // 2. Unique & Creative (복합문화공간)
    // 브랜드 런칭, 네트워킹 파티, 창의적 워크숍
    // ========================================
    {
        title: '어반브룩 (Urban Brook)',
        location: '광주 남구 임암동',
        capacity: '30~100명',
        category: 'Unique',
        features: ['코리아 유니크 베뉴 선정', '자연 채광 우수', '포르쉐/롤스로이스 VIP 행사', '스몰 럭셔리 이벤트'],
        link: 'http://urbanbrook.co.kr/biz'
    },
    {
        title: '라운지 OIC',
        location: '광주 광산구 첨단',
        capacity: '50~100명+',
        category: 'Unique',
        features: ["'Oasis In The City' 컨셉", '대형 스크린 & 무대', '공연 포함 파티 최적', 'F&B 매출 보장 조건'],
        link: 'https://glowseoul.co.kr/portfolio/lounge-oic/'
    },
    {
        title: 'ACC (국립아시아문화전당)',
        location: '광주 동구 충장로',
        capacity: '10~500명',
        category: 'Unique',
        features: ['광주 대표 랜드마크', '예술적 분위기', '최첨단 회의 시설', '극장/야외 활용 가능'],
        link: 'https://www.acc.go.kr/main/contents.do?PID=040201'
    },
    {
        title: '광주전통문화관',
        location: '광주 동구 무등산',
        capacity: '10~50명',
        category: 'Unique',
        features: ['한옥 공간 (서석당, 입석당)', '이색 회의 분위기', '외국인 바이어 접견 추천', '좌식/입식 확인 필요'],
        link: 'https://www.gjcf.or.kr/cf/intro/rent.do'
    },
    // ========================================
    // 3. Public & Reasonable (공공/가성비)
    // 실무 교육, 세미나, 사업설명회
    // ========================================
    {
        title: '광주디자인진흥원',
        location: '광주 북구 첨단',
        capacity: '30~200명',
        category: 'Public',
        features: ['디자인/IT 행사 적합', '대회의실(4층) 장비 양호', '공공기관 합리적 요금', '세미나실 보유'],
        link: 'https://www.gdc.or.kr/contents.do?S=S01&M=0201020000'
    },
    {
        title: '광주상공회의소',
        location: '광주 서구 농성동',
        capacity: '30~150명',
        category: 'Public',
        features: ['전통적 기업 행사 메카', '교통 요지 위치', '지하 교육장', '7층 대회의실'],
        link: 'http://www.gjcci.or.kr/user/sub501020'
    },
    {
        title: '광주 공유센터',
        location: '광주 남구 진월동',
        capacity: '10~50명',
        category: 'Public',
        features: ['무료/저렴한 대관', '빔프로젝터/노트북 대여', '예약 경쟁 있음', '상업적 행사 제한'],
        link: 'http://www.sharegj.kr/'
    },
    // ========================================
    // 4. Tech & Startup (기술/창업 특화)
    // 해커톤, 데모데이, 스타트업 네트워킹
    // ========================================
    {
        title: 'I-Plex 광주',
        location: '광주 동구 동명동',
        capacity: '10~100명',
        category: 'Tech',
        features: ['스타트업 허브 이미지', 'IP/창업 행사 최적', '주차 협소 (대중교통 권장)', '코워킹 스페이스'],
        link: 'https://www.iplexgj.com'
    },
    {
        title: '광주 AI 창업캠프',
        location: '광주 동구 금남로',
        capacity: '10~50명',
        category: 'Tech',
        features: ['AI/Tech 상징적 장소', '입주/협약 기업 우선', '전화 문의 필수', '첨단 장비 보유'],
        link: 'https://www.bizinfo.go.kr'
    },
    {
        title: '광주실감콘텐츠큐브 (GCC)',
        location: '광주 남구 송암동',
        capacity: '다양함',
        category: 'Tech',
        features: ['최신 실감형 스튜디오', '메타버스/XR 시연 독보적', '콘텐츠 제작 특화', '행사장 보유'],
        link: 'https://www.gicon.or.kr/menu.es?mid=a11003030000'
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
                            {/* Full screen white background to cover everything */}
                            <div className="min-h-screen bg-white">
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
                                <div className="max-w-5xl mx-auto px-6 py-8 pb-24 min-h-screen">
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
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Venue;
