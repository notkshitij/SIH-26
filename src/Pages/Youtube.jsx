import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaClock, FaCalendarAlt, FaTimes, FaEye } from 'react-icons/fa';

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
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const videoData = [
  {
    id: 1,
    title: "Smart India Hackathon 2024 Official Trailer",
    description: "Get ready for SIH 2026 with this official guide showcasing innovation, problem solving and registration guidelines.",
    videoId: "33BR5Vhcfcc",
    duration: "2:30",
    date: "Jan 15, 2024",
    views: "2.4M"
  },
  {
    id: 2,
    title: "Smart India Hackathon 2023 Grand Finale Highlights",
    description: "Experience the grand finale of SIH 2023 with key highlights and winning team project presentations.",
    videoId: "WMgLFxewZ1Y",
    duration: "12:34",
    date: "Aug 15, 2023",
    views: "1.2M"
  },
  {
    id: 3,
    title: "How to Win at SIH: Pro Tips & Strategy Guide",
    description: "Learn winning presentation strategies and presentation deck tips directly from past SIH national winners.",
    videoId: "_S97ArKlWYQ",
    duration: "15:45",
    date: "Sep 01, 2023",
    views: "856K"
  },
  {
    id: 4,
    title: "SIH Top Project Showcase & Innovation Gallery",
    description: "Top innovative hardware and software prototype solutions from Smart India Hackathon finalists.",
    videoId: "nd4bBknAltk",
    duration: "18:22",
    date: "Aug 20, 2023",
    views: "2.1M"
  },
  {
    id: 5,
    title: "Mentor's Complete Guide to SIH Success",
    description: "Expert advice from official SIH evaluation judges on how to pitch effectively and structure your code.",
    videoId: "9SXmhCaXkzI",
    duration: "14:30",
    date: "Sep 05, 2023",
    views: "543K"
  },
  {
    id: 6,
    title: "SIH 2026 Problem Statements Breakdown & Selection",
    description: "Detailed analysis and walkthrough on how to choose the right problem statement for your team.",
    videoId: "dNe-3Uk4o_c",
    duration: "22:15",
    date: "Aug 25, 2023",
    views: "1.5M"
  }
];

const YouTube = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-custom-layout py-8 md:py-12 px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Bar */}
        <div className="flex justify-between items-center pb-6 border-b border-sketch-dashed mb-8">
          <a
            href="/"
            className="btn-sketch-secondary p-2.5 inline-flex items-center justify-center cursor-pointer"
            title="Return to Home"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>

          <div className="text-center flex-1 px-4">
            <h1 className="font-serif-elegant text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Watch Guide & Video Gallery 🎬
            </h1>
            <p className="font-handwritten text-gray-600 text-sm sm:text-base mt-1">
              Official video guides, tutorials, and success stories for SIH 2026
            </p>
          </div>

          <div className="w-10"></div> {/* Spacer for symmetry */}
        </div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {videoData.map((video) => (
            <motion.div
              key={video.id}
              className="bg-white/50 border-sketch p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer group relative"
              variants={itemVariants}
              whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              onClick={() => openModal(video)}
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative border-sketch-thin overflow-hidden mb-4 aspect-video bg-gray-100">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 font-handwritten text-white text-xs px-2 py-0.5 rounded border border-white/20">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-lg group-hover:scale-110 transition-transform duration-200" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.45)" />
                      <polygon points="26,20 26,44 46,32" fill="white" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-serif-elegant text-lg font-bold text-gray-900 mb-2 leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <p className="font-sans text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                  {video.description}
                </p>
              </div>

              {/* Meta information */}
              <div className="pt-3 border-t border-sketch-dashed flex justify-between items-center font-handwritten text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-gray-400" />
                  <span>{video.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaEye className="text-gray-400" />
                  <span>{video.views} views</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

            {/* Modal Dialog */}
            <motion.div
              className="relative z-10 w-full max-w-4xl bg-notebook-paper border-sketch p-4 sm:p-6 shadow-2xl overflow-hidden"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="btn-sketch-secondary p-2 absolute top-3 right-3 sm:top-4 sm:right-4 z-20"
                aria-label="Close video player"
              >
                <FaTimes className="w-5 h-5 text-gray-800" />
              </button>

              {/* Responsive Video Frame */}
              <div className="relative aspect-video w-full border-sketch-thin overflow-hidden mb-4 bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info Container */}
              <div className="bg-white/40 border-sketch-thin p-4">
                <h3 className="font-serif-elegant text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="font-sans text-gray-700 text-sm leading-relaxed mb-3">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center gap-4 font-handwritten text-xs text-gray-600 border-t border-sketch-dashed pt-2">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> Published: {selectedVideo.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEye /> Views: {selectedVideo.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> Duration: {selectedVideo.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Section */}
      <footer className="mt-12 max-w-4xl mx-auto w-full">
        <div className="bg-white/40 border-sketch-thin p-4 text-center shadow-sm">
          <p className="font-handwritten text-gray-600 text-xs md:text-sm">
            Organized by Poornima University in association with Smart India Hackathon
          </p>
          <p className="font-handwritten text-gray-700 text-xs mt-1 font-bold">
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
            {' '}&{' '}
            <a
              href="https://www.linkedin.com/in/manish-kumar-4b013132a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer hover:text-black transition-colors"
            >
              Manish Kumar
            </a>
          </p>
          <p className="font-handwritten text-gray-400 text-[10px] mt-0.5">
            © {new Date().getFullYear()} SIH2026 - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default YouTube;