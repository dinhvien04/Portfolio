"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/types";

interface ProjectsProps {
    projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
                        Dự Án
                    </h2>

                    <div className="space-y-20 max-w-7xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                                    }`}
                            >
                                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow duration-300"
                                        >
                                            <FaExternalLinkAlt />
                                            Xem Demo
                                        </motion.a>

                                        <motion.a
                                            href={project.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center gap-2 px-6 py-2 border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
                                        >
                                            <FaGithub />
                                            Mã Nguồn
                                        </motion.a>
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className={`relative group ${index % 2 === 1 ? "md:col-start-1" : ""
                                        }`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                                    <div className="relative bg-gray-200 rounded-xl overflow-hidden aspect-video shadow-xl">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                                                <span className="text-4xl text-gray-400">🖼️</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
