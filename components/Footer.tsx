"use client";

import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

interface FooterProps {
    name?: string;
    githubRepo?: string;
}

const Footer = ({ name = "Tên Của Bạn", githubRepo }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="mb-4">
                        <p className="flex items-center justify-center gap-2 text-gray-300">
                            © {currentYear} - Được xây dựng với{" "}
                            <FaHeart className="text-red-500 animate-pulse" /> bởi{" "}
                            <span className="font-semibold text-white">{name}</span>
                        </p>
                    </div>

                    {githubRepo && (
                        <div className="flex items-center justify-center gap-6 text-gray-400">
                            <a
                                href={githubRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                            >
                                <FaCodeBranch />
                                <span>Fork</span>
                            </a>
                            <a
                                href={`${githubRepo}/stargazers`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                            >
                                <FaStar />
                                <span>Sao</span>
                            </a>
                        </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-gray-800">
                        <p className="text-sm text-gray-500">
                            Được hỗ trợ bởi{" "}
                            <a
                                href="https://nextjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                            >
                                Next.js
                            </a>{" "}
                            &{" "}
                            <a
                                href="https://tailwindcss.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                            >
                                Tailwind CSS
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
