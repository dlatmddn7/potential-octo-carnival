import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const consultingCases = [
    {
        id: 1,
        tab: "예산이 적어도 '있어 보이게' 만드는 센스",
        messages: [
            {
                type: 'client',
                text: "행사 예산이 넉넉지 않아서 화려한 무대나 장치는 어려울 것 같아요. 너무 썰렁해 보이거나 촌스러울까 봐 걱정이에요 🥲"
            },
            {
                type: 'agency',
                text: "화려한 장치보다 중요한 건 **'확실한 컨셉'**이죠! 😉 비제로는 비싼 구조물 대신, 트렌디한 브랜딩과 감각적인 포토존만으로도 **'사진 찍고 싶은 힙(Hip)한 현장'**을 만들어 드려요. 예산은 아끼고, 분위기는 살리는 방법, 저희가 다 알고 있어요!"
            },
        ]
    },
    {
        id: 2,
        tab: "요즘 행사는 '선택과 집중'이 대세",
        messages: [
            {
                type: 'client',
                text: "하고 싶은 프로그램은 많은데 예산은 정해져 있고... 😭 현실적으로 이걸 다 하려면 퀄리티를 포기해야 할까요?"
            },
            {
                type: 'agency',
                text: "에이, 다 포기하면 재미없잖아요! 🙅‍♂️ 요즘 트렌드는 이것저것 나열하기보다, 확실한 '킬링 포인트' 하나에 힘을 주는 거예요. 불필요한 의전이나 장식은 과감히 빼고, 참가자들이 가장 즐거워할 포인트에 예산을 집중해서 임팩트 있게 기획해 봐요!"
            },
        ]
    },
    {
        id: 3,
        tab: "딱딱한 행사는 그만, 유연한 기획",
        messages: [
            {
                type: 'client',
                text: "매년 하던 행사라 형식이 너무 뻔해요. '요즘 감성'으로 바꾸고 싶은데, 예산 내에서 어떻게 바꿔야 할지 감이 안 잡혀요. 🤔"
            },
            {
                type: 'agency',
                text: "그 고민, 저희한테 맡겨주세요! 🙌 뻔한 식순은 줄이고, 참여형 콘텐츠나 굿즈 같은 소소하지만 알찬 디테일로 채우면 분위기가 확 달라집니다. 기존 예산 그대로, 구성만 바꿔도 훨씬 젊고 세련된 행사가 될 수 있어요."
            },
        ]
    },
];

// Helper function to render text with bold markdown
const renderBoldText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

const Consulting = () => {
    const [activeCase, setActiveCase] = useState(0);

    return (
        <section className="py-32 relative overflow-hidden bg-bg">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
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
                        클라이언트의 특성과 해당 시장에 유연하게 대응하여<br />목표에 맞는 맞춤형 행사를 기획/운영합니다.
                    </motion.p>
                </div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {consultingCases.map((caseItem, index) => (
                        <button
                            key={caseItem.id}
                            onClick={() => setActiveCase(index)}
                            className={`px-5 py-3 rounded-full text-sm font-bold transition-all ${activeCase === index
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                                }`}
                        >
                            {caseItem.tab}
                        </button>
                    ))}
                </motion.div>

                {/* Chat Messages */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCase}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {consultingCases[activeCase].messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: msg.type === 'client' ? -20 : 20, y: 10 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ delay: index * 0.3, type: "spring" }}
                                className={`flex ${msg.type === 'agency' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[85%] md:max-w-[70%] p-6 rounded-3xl shadow-lg relative ${msg.type === 'agency'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-white text-black rounded-tl-none'
                                    }`}>
                                    {/* Sender Label */}
                                    <div className={`absolute -top-6 text-xs font-bold ${msg.type === 'agency' ? 'right-0 text-primary' : 'left-0 text-gray-400'
                                        }`}>
                                        {msg.type === 'agency' ? 'BEZERO' : 'Client'}
                                    </div>

                                    {/* Tail */}
                                    <div className={`absolute top-0 w-4 h-4 ${msg.type === 'agency'
                                            ? '-right-2 bg-primary [clip-path:polygon(0_0,0_100%,100%_0)]'
                                            : '-left-2 bg-white [clip-path:polygon(0_0,100%_0,100%_100%)]'
                                        }`} />

                                    <p className="text-sm md:text-base font-medium whitespace-pre-line leading-relaxed">
                                        {renderBoldText(msg.text)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Consulting;
