"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Giới Thiệu", href: "#about" },
        { name: "Dự Án", href: "#projects" },
        { name: "Liên Hệ", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-gray-800">
                        Portfolio
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                            <span
                                className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 space-y-2"
                    >
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </nav>
        </motion.header>
    );
};

export default Header;
