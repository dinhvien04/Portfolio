"use client";

import { Certification } from "@/types";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

interface CertificationsProps {
    certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
    return (
        <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Chứng Chỉ
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Các chứng chỉ chuyên môn từ Google for Education
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-6">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
                                    {cert.name}
                                </h3>
                                
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                    {cert.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                    <span>{cert.issuer}</span>
                                </div>

                                <div className="text-xs text-gray-500 mb-4">
                                    Hiệu lực: {new Date(cert.validFrom).toLocaleDateString('vi-VN')} - {new Date(cert.validUntil).toLocaleDateString('vi-VN')}
                                </div>

                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                >
                                    Xem chứng chỉ
                                    <FaExternalLinkAlt className="text-sm" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
