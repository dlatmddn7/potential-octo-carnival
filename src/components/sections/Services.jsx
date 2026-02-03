import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, PenTool, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Event Planning & Operation",
        desc: "성공적인 행사를 위한 A to Z. 예산 관리부터 시나리오 기획, 현장 운영까지 빈틈없는 솔루션을 제공합니다.",
        tags: ["관공서 행사", "워크숍/포럼", "지역 축제", "기공식/준공식", "의전 행사"],
        icon: <Calendar className="text-purple-600" />
    },
    {
        title: "Exhibition & Convention (MICE)",
        desc: "글로벌 비즈니스의 장을 만듭니다. 학술대회, 세미나, 박람회 부스 기획 및 운영의 전문성을 보유하고 있습니다.",
        tags: ["학술대회", "세미나", "박람회 부스", "컨퍼런스"],
        icon: <Users className="text-purple-600" />
    },
    {
        title: "Creative & Media",
        desc: "Bezero Studio만의 차별점. 자체 디자인팀이 행사의 격을 높이는 고품질 비주얼 아이덴티티를 제작합니다.",
        tags: ["키비주얼 디자인", "행사 홍보물", "굿즈 제작", "무대 디자인"],
        icon: <PenTool className="text-purple-600" />
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-bold tracking-widest text-purple-600 mb-3 uppercase">Our Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Expertise Area
                    </h3>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        기획부터 디자인, 운영까지. <br className="hidden md:block" />
                        성공적인 비즈니스를 위한 최적의 파트너입니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-purple-100/50 hover:border-purple-200 transition-all duration-500 cursor-pointer flex flex-col h-[420px] relative overflow-hidden"
                        >
                            <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {React.cloneElement(service.icon, { size: 32 })}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                {service.desc}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {service.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
