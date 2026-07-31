import React from 'react';
import { motion } from 'framer-motion';
import pptxFile from '../assets/SIH2026-IDEA-Presentation-Format.pptx';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const Template = () => {
    const pptxUrl = pptxFile;

    return (
        <div className="min-h-screen bg-notebook-paper py-12 px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-6xl mx-auto w-full flex justify-between items-center pb-6 border-b border-sketch-dashed mb-8">
                    <a 
                        href="/"
                        className="btn-sketch-secondary p-2.5 inline-flex items-center justify-center"
                        title="Home"
                    >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </a>
                    <h1 className="font-serif-elegant text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        SIH 2026 Template
                    </h1>
                    <div className="w-10"></div> {/* Spacer */}
                </div>

                <motion.div
                    className="bg-white/40 border-sketch p-6 md:p-8 mb-8 relative shadow-sm"
                    variants={itemVariants}
                >
                    <div className="p-2 md:p-4">
                        <motion.div
                            className="text-center mb-8"
                            variants={itemVariants}
                        >
                            <h2 className="font-serif-elegant text-3xl md:text-4xl font-bold text-gray-900 mb-2">SIH 2026 IDEA Presentation</h2>
                            <div className="w-24 h-0.5 border-b border-sketch-dashed mx-auto mt-2"></div>
                            <p className="font-handwritten text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                                Download the official presentation template for your SIH 2026 project submission.
                            </p>
                        </motion.div>

                        <motion.div
                            className="w-full bg-transparent overflow-hidden"
                            variants={itemVariants}
                        >
                            <div className="p-4 sm:p-6 flex flex-col items-center justify-center min-h-[340px] sm:min-h-[380px] bg-transparent">
                                <div className="max-w-2xl w-full bg-white p-5 sm:p-8 border-none sm:border-sketch text-center shadow-sm">
                                    <div className="mb-6">
                                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-50">
                                            <svg
                                                className="h-10 w-10 text-blue-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <motion.h3
                                        className="font-serif-elegant text-2xl font-bold text-gray-900 mb-3"
                                        variants={itemVariants}
                                    >
                                        SIH 2026 Presentation Template
                                    </motion.h3>

                                    <motion.p
                                        className="text-gray-600 mb-8 max-w-md mx-auto text-sm"
                                        variants={itemVariants}
                                    >
                                        Download the official presentation template for your project submission.
                                    </motion.p>

                                    <motion.div variants={itemVariants}>
                                        <a
                                            href={pptxUrl}
                                            download="SIH2026-IDEA-Presentation-Format.pptx"
                                            className="btn-sketch-primary inline-flex items-center px-8 py-3.5 text-base font-semibold shadow-md"
                                        >
                                            <svg
                                                className="-ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Download Template (.pptx)
                                        </a>
                                    </motion.div>

                                    <motion.div
                                        className="mt-6 pt-6 border-t border-sketch-dashed"
                                        variants={itemVariants}
                                    >
                                        <p className="text-xs text-gray-500 font-handwritten text-sm">
                                            <span className="font-bold">File format:</span> Microsoft PowerPoint (.pptx)
                                        </p>
                                        <p className="text-xs text-gray-400 mt-2">
                                            For best results, open this file in Microsoft PowerPoint 2016 or later
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-10 bg-white/40 border-sketch p-6 md:p-8 shadow-sm max-w-6xl mx-auto"
                    variants={itemVariants}
                >
                    <h3 className="font-serif-elegant text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">How to Use This Template</h3>
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
                                title: 'Download the Template',
                                description: 'Click the download button above to get the PowerPoint template file.'
                            },
                            {
                                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                                title: 'Open in PowerPoint',
                                description: 'Open the downloaded file in Microsoft PowerPoint 2016 or later.'
                            },
                            {
                                icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
                                title: 'Customize Content',
                                description: 'Replace the placeholder text and images with your project details.'
                            },
                            {
                                icon: 'M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4',
                                title: 'Save & Submit',
                                description: 'Save your changes and submit as per SIH guidelines.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col sm:flex-row items-center sm:items-start p-3 sm:p-4 bg-white border-sketch-thin hover:shadow-sm transition-shadow duration-200 text-center sm:text-left"
                                whileHover={{ y: -2 }}
                                variants={itemVariants}
                            >
                                <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3 sm:mb-0 sm:mr-4">
                                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-serif-elegant text-sm sm:text-lg font-bold text-gray-900 leading-tight">{item.title}</h4>
                                    <p className="mt-1 text-[10px] sm:text-xs text-gray-600 leading-normal sm:leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer Section */}
                <footer className="mt-16 pt-6 border-t border-sketch-dashed text-center max-w-6xl mx-auto w-full">
                    <p className="font-handwritten text-gray-600 text-xs md:text-sm">
                        Organized by Poornima University in association with Smart India Hackathon
                    </p>
                    <p className="font-handwritten text-gray-700 text-xs mt-0.5 font-bold">
                        Developed by{' '}
                        <a 
                            href="https://www.linkedin.com/in/kshitijjain-dev/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline cursor-pointer hover:text-black transition-colors"
                        >
                            Kshitij Jain
                        </a>
                        {' '}&{' '}
                        <a 
                            href="https://www.linkedin.com/in/manvendra-singh-ab88b3330/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline cursor-pointer hover:text-black transition-colors"
                        >
                            Manvendra Singh
                        </a>
                    </p>
                    <p className="font-handwritten text-gray-400 text-[10px] mt-1">
                        © {new Date().getFullYear()} SIH2026 - All rights reserved
                    </p>
                </footer>
            </motion.div>
        </div>
    );
};

export default Template;