import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Phone, Mail, MapPin, Send, X, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_mnfg0fg';
const EMAILJS_TEMPLATE_ID = 'template_na1q2mj';
const EMAILJS_PUBLIC_KEY = 'Z-x2QyupFGQF4uE-Z';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("bezero2021@naver.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    company: formData.company,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus('success');
            setFormData({ company: '', name: '', email: '', phone: '', message: '' });

            // Close form after 2 seconds on success
            setTimeout(() => {
                setShowForm(false);
                setSubmitStatus(null);
            }, 2000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const openForm = () => {
        setShowForm(true);
        setSubmitStatus(null);
        document.body.style.overflow = 'hidden';
    };

    const closeForm = () => {
        setShowForm(false);
        setSubmitStatus(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="contact" className="py-16 md:py-32 bg-white border-t border-gray-200 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-8xl font-black mb-8 md:mb-12 leading-none tracking-tighter text-gray-900">
                            LET'S<br />
                            CREATE<br />
                            <span className="text-purple-600">TOGETHER.</span>
                        </h2>
                        <div className="space-y-6 md:space-y-10">
                            <div className="group">
                                <p className="text-xs text-gray-400 uppercase font-bold mb-2 tracking-widest flex items-center gap-2">
                                    <Phone size={14} /> Phone
                                </p>
                                <p className="text-xl md:text-3xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors cursor-default">062-229-3060</p>
                            </div>
                            <div className="group">
                                <p className="text-xs text-gray-400 uppercase font-bold mb-2 tracking-widest flex items-center gap-2">
                                    <Mail size={14} /> Email
                                </p>
                                <p className="text-xl md:text-3xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors cursor-default">bezero2021@naver.com</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold mb-2 tracking-widest flex items-center gap-2">
                                    <MapPin size={14} /> Office
                                </p>
                                <p className="text-base md:text-xl text-gray-600">
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
                        <div className="bg-gray-50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-gray-200 relative overflow-hidden group hover:border-purple-200 transition-colors duration-500 shadow-xl">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-200/50 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-200/80 transition-colors duration-500" />

                            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 relative z-10 text-gray-900">Project Inquiry</h3>
                            <p className="text-gray-500 text-sm mb-6 md:mb-8 leading-relaxed relative z-10">
                                새로운 프로젝트를 함께 시작해볼까요?<br />아래 버튼을 클릭해 문의해주세요.
                            </p>

                            {/* Contact Form Button */}
                            <button
                                onClick={openForm}
                                className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-3 shadow-lg relative z-10 mb-6 md:mb-8"
                            >
                                <Send className="w-5 h-5" />
                                프로젝트 문의하기
                            </button>

                            {/* Email Copy Section */}
                            <div className="relative z-10">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    또는 이메일로 직접 문의
                                    {copied && <span className="text-green-600 text-[10px] normal-case bg-green-100 px-2 py-0.5 rounded-full animate-fade-in">복사 완료!</span>}
                                </p>
                                <div
                                    className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors cursor-pointer group/email shadow-sm"
                                    onClick={handleCopyEmail}
                                >
                                    <span className="text-sm md:text-lg font-mono text-gray-800 select-all">bezero2021@naver.com</span>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-purple-600 group-hover/email:text-purple-600">
                                        {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contact Form Modal */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4"
                        onClick={closeForm}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl md:rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-100 p-4 md:p-6 flex items-center justify-between rounded-t-2xl md:rounded-t-3xl">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">프로젝트 문의</h3>
                                    <p className="text-sm text-gray-500">빠른 시일 내에 답변드리겠습니다</p>
                                </div>
                                <button
                                    onClick={closeForm}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-500" />
                                </button>
                            </div>

                            {/* Form Content */}
                            <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        기업명 / 업종 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="예: 비제로스튜디오 / 행사대행업"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        담당자 성함 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="예: 홍길동"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        이메일 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="예: contact@company.com"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        연락처 (전화번호)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="예: 010-1234-5678"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        문의 내용 <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        placeholder="프로젝트에 대해 자세히 알려주세요. (행사 유형, 예상 일정, 규모 등)"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                    />
                                </div>

                                {/* Submit Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2">
                                        <Check className="w-5 h-5" />
                                        문의가 성공적으로 전송되었습니다!
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                                        전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            전송 중...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            문의 보내기
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-gray-400 text-center">
                                    제출하신 정보는 문의 답변 목적으로만 사용됩니다.
                                </p>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
