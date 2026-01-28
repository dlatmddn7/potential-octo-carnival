import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Layers, MapPin, Camera } from 'lucide-react';

const services = [
    {
        icon: <Mic className="w-8 h-8" />,
        title: '기업행사 대행 및 기획',
        desc: '성공적인 비즈니스를 위한 품격 있는 기업 행사, 기념식, 선포식 등을 기획하고 운영합니다.',
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: '창업행사 및 데모데이',
        desc: '스타트업의 열정을 보여줄 수 있는 IR 피칭, 데모데이, 해커톤 네트워킹 파티 기획/운영 등 특화된 창업 행사를 만듭니다.',
    },
    {
        icon: <MapPin className="w-8 h-8" />,
        title: '워크샵 및 세미나',
        desc: '조직의 결속력을 다지는 워크샵부터 팀빌딩, 역량강화 교육 등 조직 활성화 프로그램, 전문적인 지식 공유를 위한 세미나까지 완벽하게 서포트합니다.',
    },
    {
        icon: <Camera className="w-8 h-8" />,
        title: '홍보물 제작 및 브랜딩',
        desc: '행사의 키비주얼 디자인, 굿즈 제작, 홍보 영상 및 브랜딩 콘텐츠 등 통합적인 크리에이티브 솔루션을 제공합니다.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-6"
                    >
                        OUR <span className="text-gray-700">SERVICES</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-xl text-lg"
                    >
                        우리는 클라이언트의 니즈를 정확히 파악하고<br />가장 효율적인 크리에이티브 솔루션을 제안합니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-primary hover:border-blue-500 transition-all duration-500 cursor-pointer flex flex-col justify-between h-[400px] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 duration-700">
                                {React.cloneElement(service.icon, { size: 100 })}
                            </div>

                            <div>
                                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            </div>

                            <div className="border-t border-white/10 pt-6 group-hover:border-white/30 transition-colors">
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
