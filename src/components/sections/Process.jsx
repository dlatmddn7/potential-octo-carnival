import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Film, Video, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "기획 (Planning)",
        desc: "클라이언트의 니즈를 분석하고, 행사/영상의 최적화된 컨셉과 시나리오를 기획합니다.",
        icon: <ClipboardList className="w-10 h-10 text-white" />
    },
    {
        id: "02",
        title: "준비 (Preparation)",
        desc: "장소 섭외, 시스템 세팅, 리허설 등 완벽한 실행을 위한 철저한 사전 준비를 진행합니다.",
        icon: <Film className="w-10 h-10 text-white" />
    },
    {
        id: "03",
        title: "실행 (Execution)",
        desc: "현장 운영 및 연출, 촬영, 송출 등 전문 인력을 투입하여 성공적인 결과를 만들어냅니다.",
        icon: <Video className="w-10 h-10 text-white" />
    }
];

const Process = () => {
    return (
        <section id="process" className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        ONE-STOP <span className="text-primary">SYSTEM</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        비제로스튜디오는 기획부터 촬영, 편집까지 모든 과정을 직접 수행하는<br />
                        체계적이고 안정적인 올인원 프로세스를 보유하고 있습니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-white rounded-full flex items-center justify-center mb-8 mx-auto shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                {React.cloneElement(step.icon, { className: "w-10 h-10 text-purple-600" })}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center flex items-center justify-center gap-2">
                                <span className="text-primary font-mono text-sm">{step.id}.</span> {step.title}
                            </h3>
                            <p className="text-gray-400 text-center text-sm leading-relaxed">
                                {step.desc}
                            </p>

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
