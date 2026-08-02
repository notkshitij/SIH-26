import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaClock, FaCalendarAlt, FaTimes, FaEye } from 'react-icons/fa';
import backgroundImage from '../assets/background.png';

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
    <div 
      className="min-h-screen p-4 md:p-8 flex flex-col justify-between overflow-y-auto w-full font-sans"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.96) 30%, rgba(255, 255, 255, 0.82) 70%, rgba(255, 255, 255, 0.4) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto w-full flex-1 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Bar */}
        <header className="w-full pb-4 mb-6">
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="bg-white border border-slate-200/80 p-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all text-[#0c2340] cursor-pointer flex items-center justify-center"
              title="Home"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
            
            <div className="flex flex-col items-end pr-4 border-r-2 border-blue-600 leading-tight">
              <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0c2340]">Watch Guide & Videos</h1>
              <p className="text-slate-500 text-[10px] sm:text-xs mt-1 font-sans">Official video guides, tutorials, and success stories for SIH 2026</p>
            </div>
          </div>
        </header>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4"
          variants={containerVariants}
        >
          {videoData.map((video) => (
            <motion.div
              key={video.id}
              className="bg-white border border-slate-100 p-4 flex flex-col justify-between shadow-md hover:shadow-lg transition-all rounded-[32px] cursor-pointer group relative"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              onClick={() => openModal(video)}
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative overflow-hidden mb-4 aspect-video rounded-2xl bg-slate-50 border border-slate-200/60 shadow-inner">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-lg border border-white/10 font-semibold font-sans">
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
                <h3 className="font-serif text-base sm:text-lg font-extrabold text-[#0c2340] mb-2 leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <p className="font-sans text-slate-500 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                  {video.description}
                </p>
              </div>

              {/* Meta information */}
              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] sm:text-xs text-slate-400 font-semibold font-sans">
                <div className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-slate-400" />
                  <span>{video.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaEye className="text-slate-400" />
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
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal Dialog */}
            <motion.div
              className="relative z-10 w-full max-w-3xl bg-white border border-slate-100 p-4 sm:p-6 shadow-2xl rounded-[32px] overflow-hidden"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="bg-white border border-slate-200/80 p-2 rounded-2xl shadow-sm hover:shadow-md transition-all text-[#0c2340] cursor-pointer absolute top-4 right-4 z-20"
                aria-label="Close video player"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Responsive Video Frame */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-4 bg-black border border-slate-200/60 shadow-md">
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
              <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 sm:p-5">
                <h3 className="font-serif text-lg sm:text-xl font-extrabold text-[#0c2340] mb-2 leading-tight">
                  {selectedVideo.title}
                </h3>
                <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                  {selectedVideo.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-[10px] sm:text-xs text-slate-400 font-semibold font-sans border-t border-slate-100 pt-3">
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
    </div>
  );
};

export default YouTube;