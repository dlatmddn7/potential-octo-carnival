import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("bezero2021@naver.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl md:text-8xl font-black mb-12 leading-none tracking-tighter">
                            LET'S<br />
                            CREATE<br />
                            <span className="text-primary">TOGETHER.</span>
                        </h2>
                        <div className="space-y-10">
                            <div className="group">
                                <p className="text-xs text-gray-500 uppercase font-bold mb-2 tracking-widest flex items-center gap-2">
                                    <Phone size={14} /> Phone
                                </p>
                                <p className="text-3xl font-bold group-hover:text-primary transition-colors cursor-default">062-229-3060</p>
                            </div>
                            <div className="group">
                                <p className="text-xs text-gray-500 uppercase font-bold mb-2 tracking-widest flex items-center gap-2">
                                    <Mail size={14} /> Email
                                </p>
                                <p className="text-3xl font-bold group-hover:text-primary transition-colors cursor-default">bezero2021@naver.com</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold mb-2 tracking-widest flex items-center gap-2">
                                    <MapPin size={14} /> Office
                                </p>
                                <p className="text-xl text-gray-400">
                                    광주광역시 동구 동계천로 150(I-PLEX), 204
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />

                            <h3 className="text-3xl font-bold mb-4 relative z-10">Project Inquiry</h3>
                            <p className="text-gray-400 text-sm mb-10 leading-relaxed relative z-10">
                                보다 정확한 상담을 위해<br />아래 메일 주소로 직접 문의 내용을 보내주세요.
                            </p>

                            <div className="mb-10 relative z-10">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                                    Official Email
                                    {copied && <span className="text-green-500 text-[10px] normal-case bg-green-500/10 px-2 py-0.5 rounded-full animate-fade-in">복사 완료!</span>}
                                </p>
                                <div
                                    className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-5 hover:border-primary/50 transition-colors cursor-pointer group/email"
                                    onClick={handleCopyEmail}
                                >
                                    <span className="text-lg md:text-xl font-mono text-gray-200 select-all">bezero2021@naver.com</span>
                                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-500 hover:text-white group-hover/email:text-white">
                                        {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">문의 양식 (Inquiry Format)</p>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex items-start gap-3"><span className="text-primary font-bold font-mono mt-0.5">01.</span><span>기업명 및 업종 (Company)</span></li>
                                    <li className="flex items-start gap-3"><span className="text-primary font-bold font-mono mt-0.5">02.</span><span>담당자 성함 (Name)</span></li>
                                    <li className="flex items-start gap-3"><span className="text-primary font-bold font-mono mt-0.5">03.</span><span>연락처 (Contact)</span></li>
                                    <li className="flex items-start gap-3"><span className="text-primary font-bold font-mono mt-0.5">04.</span><span>문의 내용 (Request)</span></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
