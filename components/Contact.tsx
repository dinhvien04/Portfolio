"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

interface ContactProps {
    email: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    callToAction?: string;
}

const Contact = ({ email, github, linkedin, twitter, facebook, callToAction = "Hãy cùng làm việc với nhau!" }: ContactProps) => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                        Liên Hệ
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-700 mb-12"
                    >
                        {callToAction}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
                    >
                        <p className="text-lg text-gray-700 mb-8">
                            Đừng ngần ngại liên hệ với tôi qua bất kỳ kênh nào sau đây:
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                            <motion.a
                                href={`mailto:${email}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
                            >
                                <FaEnvelope size={20} />
                                Gửi Email
                            </motion.a>
                        </div>

                        <div className="flex justify-center space-x-8">
                            {github && (
                                <motion.a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                >
                                    <FaGithub size={35} />
                                </motion.a>
                            )}
                            {linkedin && (
                                <motion.a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                >
                                    <FaLinkedin size={35} />
                                </motion.a>
                            )}
                            {twitter && (
                                <motion.a
                                    href={twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                >
                                    <FaTwitter size={35} />
                                </motion.a>
                            )}
                            {facebook && (
                                <motion.a
                                    href={facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                >
                                    <FaFacebook size={35} />
                                </motion.a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-12"
                    >
                        <p className="text-gray-600">
                            Hoặc đơn giản gửi email cho tôi tại:{" "}
                            <a
                                href={`mailto:${email}`}
                                className="text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300"
                            >
                                {email}
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
