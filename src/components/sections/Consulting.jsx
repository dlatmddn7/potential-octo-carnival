import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const messages = [
    { type: 'client', text: "이런 목적의 영상을 만들고 싶은데, 이런 형식으로 가능할까요?", delay: 0 },
    { type: 'client', text: "그리고.. 저희 영상쪽 예산이 이정도인데.. 이 안으로 가능할까요? 😭", delay: 1500 },
    { type: 'agency', text: "희망 견적으로 진행하시려면... 🤔\n이렇게 수정해서 진행하면 가능 예산으로 작업 가능합니다!", delay: 3500 },
    { type: 'agency', text: "형식을 이렇게 진행하면서 예산도 아끼고,\n좀 더 목적에 맞게 원하시는 결과물을 받으실 수 있어요~", delay: 5000 },
];

const Consulting = () => {
    const [visibleMessages, setVisibleMessages] = useState([]);

    useEffect(() => {
        let timeouts = [];

        // IntersectionObserver logic usually handles viewport triggering, 
        // using framer-motion whileInView for simplicity here.
        // But to restart animation effectively, tracking 'isInView' state inside component might be better.
        // For simplicity, we'll let Framer Motion handle the entrance.
    }, []);

    return (
        <section className="py-32 relative overflow-hidden bg-bg">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-primary">[ 클라이언트 맞춤 컨설팅 ]</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-400"
                    >
                        클라이언트의 특성과 해당 시장에 유연하게 대응하여<br />목표에 맞는 기획으로 영상을 제작합니다.
                    </motion.p>
                </div>

                <div className="space-y-6">
                    {messages.map((msg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: msg.type === 'client' ? -20 : 20, y: 10 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.8, type: "spring" }} // Staggered entrance
                            className={`flex ${msg.type === 'agency' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] md:max-w-[60%] p-6 rounded-3xl shadow-lg relative ${msg.type === 'agency'
                                    ? 'bg-primary text-white rounded-tr-none'
                                    : 'bg-white text-black rounded-tl-none'
                                }`}>
                                {/* Tail */}
                                <div className={`absolute top-0 w-4 h-4 ${msg.type === 'agency'
                                        ? '-right-2 bg-primary [clip-path:polygon(0_0,0_100%,100%_0)]'
                                        : '-left-2 bg-white [clip-path:polygon(0_0,100%_0,100%_100%)]'
                                    }`} />

                                <p className="text-sm md:text-base font-medium whitespace-pre-line leading-relaxed">
                                    {msg.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Consulting;
