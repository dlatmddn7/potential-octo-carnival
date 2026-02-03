import React from 'react';
import { motion } from 'framer-motion';

// Using placeholders for now since we don't have the actual logo files yet.
// In a real scenario, these would be imported assets.
const partners = [
    "Asan Orchestra", "BeBe Therapy", "KHNP", "CDICA", "Asan City Insect", "Duram School",
    "Family Center", "Sinchang Council", "Sangsak", "KECI", "Chungnam Province", "Ministry of Agriculture",
    "Chungnam Culture", "Chungnam Education", "SK Shieldus", "Happy Wings", "Sammyook Foods", "Gongju City", "Pyeongtaek City",
    "Cheonan City", "Asan City", "Hongseong County", "Buyeo County", "Pai Chai Univ", "Chungbuk Health", "Yonam Inst"
];

const Partners = () => {
    return (
        <section id="partners" className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-left mb-16">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 font-bold tracking-widest uppercase mb-4 text-sm"
                    >
                        Client
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                    >
                        행사 프로젝트를 진행한 <br className="md:hidden" /> 다양한 기관 및 업체들
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100"
                        >
                            {/* Placeholder for Logo - In reality, replace text with <img> */}
                            <div className="text-gray-500 font-bold text-center border border-gray-200 rounded-lg w-full h-24 flex items-center justify-center hover:bg-white hover:shadow-md hover:text-purple-600 transition-all bg-white">
                                {partner}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
