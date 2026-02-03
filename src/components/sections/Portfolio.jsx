import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "2024 IBK창공 광주 '창공의 밤'",
        category: "Event Planning & Operation",
        image: "/images/portfolio/ibk_changgong/main.jpg",
        client: "IBK기업은행 / 전남대학교 기술지주회사",
        period: "2024.12.20",
        participants: "100+",
        details: "성과공유회 및 네트워킹 파티 기획/운영",
        description: "스타트업과 투자자, 유관기관이 함께하는 네트워킹 행사 '창공의 밤'. 크리스마스 컨셉의 공간 연출과 편안한 네트워킹 분위기를 조성하여 참여자들의 자연스러운 교류를 유도했습니다."
    },
    {
        id: 2,
        title: "IBK창공 광주 1기 PRE-DEMO DAY",
        category: "Demo Day & IR Pitching",
        image: "/images/portfolio/ibk_predemoday/main_hall.jpg",
        client: "IBK기업은행 / 전남대학교 기술지주회사",
        period: "2024.10.29",
        participants: "80+",
        details: "데모데이 기획, 현장 운영, 영상 제작",
        description: "창업기업의 투자 유치를 위한 프리 데모데이 행사. 기업별 피칭 영상 제작부터 리허설 코칭, 현장 운영까지 성공적인 IR을 위한 전방위 솔루션을 제공했습니다."
    },
    {
        id: 3,
        title: "2024 광주창업페스티벌",
        category: "Festival",
        image: "/images/portfolio/startup_festival/main.jpg",
        client: "광주광역시 / 광주테크노파크",
        period: "2024.11.28",
        participants: "500+",
        details: "페스티벌 총괄 운영 및 부스 조성",
        description: "지역 최대 규모의 창업 페스티벌. 개막식부터 포럼, 전시 부스, 투자 IR, 네트워킹 프로그램까지 행사의 전 과정을 통합 운영하였습니다."
    },
    {
        id: 4,
        title: "2025 광주광역시교육청 ESG 포럼",
        category: "Conference",
        image: "/images/portfolio/esg_forum/main.jpg",
        client: "광주광역시교육청",
        period: "2025.01",
        participants: "200+",
        details: "포럼 기획 및 행사장 연출",
        description: "지속가능한 교육 환경을 위한 ESG 포럼. 친환경 자재를 활용한 무대 조성과 페이퍼리스 운영으로 ESG 가치를 행사 현장에 직접 구현했습니다."
    },
    {
        id: 5,
        title: "2025 구청장협의회",
        category: "Conference",
        image: "/images/portfolio/district_council/main.jpg",
        client: "광주광역시 구청장협의회",
        period: "2025.04",
        participants: "50+",
        details: "협의회 정례회의 운영 및 의전",
        description: "광주 5개 구청장이 모이는 정례 협의회. 격식 있는 의전과 원활한 회의 진행을 위한 시스템 운영을 지원했습니다."
    },
    {
        id: 6,
        title: "2025 로봇 페스티벌",
        category: "Festival / Exhibition",
        image: "/images/portfolio/robot_festival/main.jpg",
        client: "광주광역시",
        period: "2025.04",
        participants: "1,000+",
        details: "전시 체험존 조성 및 경진대회 운영",
        description: "미래 과학 인재 양성을 위한 로봇 페스티벌. 다양한 로봇 전시 체험존과 학생 로봇 경진대회를 안전하고 흥미롭게 운영했습니다."
    },
    {
        id: 7,
        title: "2024 해남 고구마 라이브커머스",
        category: "Promotion / Live Commerce",
        image: "/images/portfolio/haenam_sweet_potato/main.jpg",
        client: "해남군",
        period: "2024.10",
        participants: "온라인 시청자 10,000+",
        details: "라이브커머스 기획/송출 및 세트장 연출",
        description: "지역 특산물 판로 개척을 위한 라이브커머스. 전문 쇼호스트 섭외부터 방송 기획, 현장 세트장 조성 및 고화질 송출까지 원스톱으로 수행했습니다."
    },
    {
        id: 8,
        title: "2024 사회적경제 소셜임팩트 IR",
        category: "IR Pitching",
        image: "/images/portfolio/social_economy_ir/main.jpg",
        client: "광주사회적경제지원센터",
        period: "2024.10",
        participants: "100+",
        details: "IR 피칭 대회 운영 및 투자자 매칭",
        description: "사회적경제 기업의 투자 유치를 위한 IR 대회. '온스테이지' 컨셉의 몰입감 있는 무대 연출로 기업의 발표 효과를 극대화했습니다."
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-32 bg-black relative z-10">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex items-center justify-between mb-20">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Selected Works</h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
                        프로젝트 전체보기 <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                            />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className="w-8 h-[1px] bg-primary"></span>
                                        <span className="text-primary text-xs font-bold tracking-widest uppercase">{project.category}</span>
                                    </div>
                                    <h3 className="text-white text-3xl font-bold leading-tight mb-2">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
                        프로젝트 전체보기
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
