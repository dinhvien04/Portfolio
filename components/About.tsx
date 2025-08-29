"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {
    aboutText: string;
    additionalInfo?: string;
    resumeUrl?: string;
    profileImage?: string;
}

const About = ({ aboutText, additionalInfo, resumeUrl, profileImage }: AboutProps) => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
                        Giới Thiệu
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="order-2 md:order-1"
                        >
                            <div className="relative w-full max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 opacity-30"></div>
                                <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-square">
                                    {profileImage ? (
                                        <Image
                                            src={profileImage}
                                            alt="Profile"
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-6xl text-gray-400">👤</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="order-1 md:order-2"
                        >
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                {aboutText}
                            </p>

                            {additionalInfo && (
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    {additionalInfo}
                                </p>
                            )}

                            {resumeUrl && (
                                <motion.a
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    Xem CV
                                </motion.a>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
