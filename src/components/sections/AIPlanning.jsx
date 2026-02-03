import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Bot, Loader2 } from 'lucide-react';

const AIPlanning = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);
        setResponse('');

        // Simulate AI delay and response since we don't have the API key yet.
        // In production, this would call the actual Gemini API.
        setTimeout(() => {
            const mockResponse = `
**[ AI 기획 제안: "${input}" ]**

1. **컨셉 제안**: "몰입과 연결"
   참여자들이 단순히 관람하는 것을 넘어, 직접 체험하고 소통하는 인터랙티브형 행사를 제안합니다.

2. **주요 프로그램 아이디어**:
   - 오프닝 미디어 아트쇼
   - 실시간 오픈 채팅 Q&A
   - 네트워킹 매칭 프로그램

3. **추천 무대 연출**:
   - LED 스크린을 활용한 입체적 무대 디자인
   - 브랜드 컬러를 활용한 조명 연출

*본 기획안은 AI 예시이며, 상세 견적 요청 시 전문가가 더욱 디테일하게 기획해드립니다.*
            `;
            setResponse(mockResponse);
            setLoading(false);
        }, 2000);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 mb-6"
                    >
                        <Bot className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-purple-700 font-bold">AI Creative Lab</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
                    >
                        당신의 아이디어를 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">AI와 함께</span> 구체화하세요
                    </motion.h2>
                    <p className="text-gray-500 text-lg">
                        진행하고 싶은 행사나 영상의 주제를 입력해보세요.<br />
                        AI가 초안 기획과 아이디어를 제안해드립니다.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl"
                >
                    <form onSubmit={handleSubmit} className="relative mb-6">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="예: 스타트업 네트워킹 파티, 신제품 런칭 영상..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 pr-16 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                        </button>
                    </form>

                    <AnimatePresence>
                        {response && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shrink-0">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {response.split('\n').map((line, i) => (
                                            <p key={i} className="mb-2">{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default AIPlanning;
