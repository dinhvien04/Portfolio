"use client";

import { motion } from "framer-motion";
import {
    FaPython,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaPhp,
    FaDatabase,
    FaCloud
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiRedis,
    SiExpress,
    SiFastapi,
    SiDjango,
    SiLaravel
} from "react-icons/si";
import { Skill } from "@/types";

const Skills = () => {
    const skills: Skill[] = [
        { name: "JavaScript", icon: "FaJsSquare", color: "#F7DF1E" },
        { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
        { name: "Python", icon: "FaPython", color: "#3776AB" },
        { name: "PHP", icon: "FaPhp", color: "#777BB4" },
        { name: "React", icon: "FaReact", color: "#61DAFB" },
        { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
        { name: "Node.js", icon: "FaNodeJs", color: "#339933" },
        { name: "Express", icon: "SiExpress", color: "#000000" },
        { name: "FastAPI", icon: "SiFastapi", color: "#009688" },
        { name: "Django", icon: "SiDjango", color: "#092E20" },
        { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
        { name: "HTML5", icon: "FaHtml5", color: "#E34F26" },
        { name: "CSS3", icon: "FaCss3Alt", color: "#1572B6" },
        { name: "Tailwind", icon: "SiTailwindcss", color: "#06B6D4" },
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
        { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
        { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
        { name: "SQL Server", icon: "FaDatabase", color: "#CC2927" },
        { name: "Redis", icon: "SiRedis", color: "#DC382D" },
        { name: "Docker", icon: "FaDocker", color: "#2496ED" },
        { name: "AWS", icon: "FaAws", color: "#FF9900" },
        { name: "Google Cloud", icon: "FaCloud", color: "#4285F4" },
        { name: "Git", icon: "FaGitAlt", color: "#F05032" }
    ];

    const getIcon = (iconName: string, color: string) => {
        const iconProps = {
            size: 50,
            style: { color },
            className: "drop-shadow-lg"
        };

        const icons: { [key: string]: React.ReactElement } = {
            FaJsSquare: <FaJsSquare {...iconProps} />,
            SiTypescript: <SiTypescript {...iconProps} />,
            FaPython: <FaPython {...iconProps} />,
            FaPhp: <FaPhp {...iconProps} />,
            FaReact: <FaReact {...iconProps} />,
            SiNextdotjs: <SiNextdotjs {...iconProps} />,
            FaNodeJs: <FaNodeJs {...iconProps} />,
            SiExpress: <SiExpress {...iconProps} />,
            SiFastapi: <SiFastapi {...iconProps} />,
            SiDjango: <SiDjango {...iconProps} />,
            SiLaravel: <SiLaravel {...iconProps} />,
            FaHtml5: <FaHtml5 {...iconProps} />,
            FaCss3Alt: <FaCss3Alt {...iconProps} />,
            SiTailwindcss: <SiTailwindcss {...iconProps} />,
            SiMongodb: <SiMongodb {...iconProps} />,
            SiPostgresql: <SiPostgresql {...iconProps} />,
            SiMysql: <SiMysql {...iconProps} />,
            FaDatabase: <FaDatabase {...iconProps} />,
            SiRedis: <SiRedis {...iconProps} />,
            FaDocker: <FaDocker {...iconProps} />,
            FaAws: <FaAws {...iconProps} />,
            FaCloud: <FaCloud {...iconProps} />,
            FaGitAlt: <FaGitAlt {...iconProps} />
        };

        return icons[iconName] || null;
    };

    const duplicatedSkills = [...skills, ...skills]; // Duplicate for seamless loop

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
                        Kỹ Năng
                    </h2>

                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex space-x-12 whitespace-nowrap"
                            animate={{
                                x: [0, -100 * skills.length]
                            }}
                            transition={{
                                x: {
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }}
                        >
                            {duplicatedSkills.map((skill, index) => (
                                <motion.div
                                    key={`${skill.name}-${index}`}
                                    className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[120px]"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -10
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="mb-3">
                                        {getIcon(skill.icon, skill.color)}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 text-center whitespace-normal">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="mt-16">
                        <motion.div
                            className="flex space-x-12 whitespace-nowrap"
                            animate={{
                                x: [-100 * skills.length, 0]
                            }}
                            transition={{
                                x: {
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }}
                        >
                            {duplicatedSkills.reverse().map((skill, index) => (
                                <motion.div
                                    key={`reverse-${skill.name}-${index}`}
                                    className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[120px]"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -10
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="mb-3">
                                        {getIcon(skill.icon, skill.color)}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 text-center whitespace-normal">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-center text-gray-600 mt-12 text-lg max-w-3xl mx-auto"
                    >
                        Tôi luôn học hỏi và cập nhật những công nghệ mới nhất để phát triển những sản phẩm tốt nhất
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
