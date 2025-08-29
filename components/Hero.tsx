"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

interface HeroProps {
    name: string;
    title: string;
    description: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
}

const Hero = ({ name, title, description, github, linkedin, twitter }: HeroProps) => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
                >
                    Xin chào, tôi là{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        {name}
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-4xl text-gray-700 mb-6"
                >
                    Tôi là {title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex justify-center space-x-6 mb-12"
                >
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            <FaGithub size={30} />
                        </a>
                    )}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            <FaLinkedin size={30} />
                        </a>
                    )}
                    {twitter && (
                        <a
                            href={twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            <FaTwitter size={30} />
                        </a>
                    )}
                </motion.div>

                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                    Tìm Hiểu Thêm
                    <HiArrowDown className="animate-bounce" />
                </motion.a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-10"
            >
                <div className="animate-bounce">
                    <HiArrowDown size={30} className="text-gray-400" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
