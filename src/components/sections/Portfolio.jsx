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
    { id: 3, title: '기업 역량강화 멘토링', category: 'Workshop & Seminar', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000' },
    { id: 4, title: '전시 부스 기획 및 디자인', category: 'Exhibition', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000' },
    { id: 5, title: '지역 축제 및 페스티벌', category: 'Festival', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000' },
    { id: 6, title: '비즈니스 세미나', category: 'Conference', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000' },
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
