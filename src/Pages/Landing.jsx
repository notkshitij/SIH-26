import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const cardDropVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const DesktopLanding = ({ navigate }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
    if (window.hasSplashPlayed) {
      setShouldAnimate(true);
    } else {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 3200); // Wait for splash screen
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  const cards = [
    {
      title: "Problem Statements",
      desc: "Browse through various problem statements from sectors",
      onClick: () => handleNavigation('/dashboard'),
      icon: (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      )
    },
    {
      title: "SIH PPT Template",
      desc: "Download the official SIH presentation template",
      onClick: () => handleNavigation('/template'),
      icon: (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <rect x="8" y="11" width="8" height="6" rx="1" />
          <text x="9.5" y="15" fontSize="4.5" fontWeight="black" fontFamily="sans-serif" fill="currentColor" stroke="none">PPT</text>
        </svg>
      )
    },
    {
      title: "Event Schedule",
      desc: "Check the timelines, schedules and important dates",
      onClick: () => handleNavigation('/schedule'),
      icon: (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="8" cy="14" r="0.75" fill="currentColor" />
          <circle cx="12" cy="14" r="0.75" fill="currentColor" />
          <circle cx="16" cy="14" r="0.75" fill="currentColor" />
          <circle cx="8" cy="18" r="0.75" fill="currentColor" />
          <circle cx="12" cy="18" r="0.75" fill="currentColor" />
          <circle cx="16" cy="18" r="0.75" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "FAQs",
      desc: "Find quick answers to common questions about the hackathon",
      onClick: () => handleNavigation('/faqs'),
      icon: (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M7 16l-4 4v-4" />
          <text x="7" y="11.5" fontSize="5.5" fontWeight="black" fontFamily="sans-serif" fill="currentColor" stroke="none">Q&A</text>
        </svg>
      )
    }
  ];

  return (
    <div 
      className={`min-h-screen lg:h-screen w-full p-3 md:p-6 lg:px-12 flex flex-col justify-between overflow-y-auto lg:overflow-hidden relative ${isMounted ? 'opacity-100' : 'opacity-0'}`} 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'right center', 
        backgroundRepeat: 'no-repeat', 
        transition: 'opacity 300ms ease-in-out' 
      }}
    >
      {/* Header */}
      <header className="max-w-[1440px] mx-auto w-full flex justify-between items-center py-2 px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4 cursor-pointer select-none" onClick={() => handleNavigation('/')}>
          <img src="/images/pu_logo.png" alt="Poornima University Logo" className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[9px] sm:text-xs font-bold text-slate-500 tracking-wider font-sans uppercase">
              Poornima University
            </span>
            <span className="text-lg sm:text-2xl font-black text-[#0c2340] tracking-tight font-sans uppercase mt-0.5">
              Internal Hackathon
            </span>
            <div className="flex flex-col items-start mt-0.5">
              <span className="text-lg sm:text-2xl font-black text-[#1d4ed8] tracking-tight font-sans uppercase">
                2026 (SIH)
              </span>
              <div className="w-12 h-[2.5px] bg-[#1d4ed8] mt-0.5 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main / Hero Content */}
      <main className="flex-1 flex flex-col items-start justify-center py-4 px-4 sm:px-6 max-w-[1440px] mx-auto w-full">
        <motion.div 
          className="max-w-2xl text-left flex flex-col items-start"
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/80 border border-slate-200/60 rounded-full px-3.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-sm w-fit mb-4"
          >
            <span role="img" aria-label="lightbulb">💡</span>
            <span>For Product Builders & Problem Solvers doing SIH 2026</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0c2340] leading-tight mb-2.5 tracking-tight max-w-xl font-sans"
          >
            Where Great Teams Build Extraordinary <span className="text-[#1d4ed8]">Solutions</span>.
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-600 text-xs sm:text-sm mb-5 max-w-md leading-relaxed font-sans"
          >
            Join India's largest hackathon initiative to solve real-world problems. Prepare templates, browse problem statements, view timelines, and submit your entries.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="mb-4"
          >
            <button
              onClick={() => handleNavigation('/register')}
              className="bg-[#0c2340] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer group"
            >
              <svg className="w-3.5 h-3.5 text-white transform rotate-45 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <span>Apply for your team registration</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200 ml-1">→</span>
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* Cards Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 mb-4 flex justify-center">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1000px]"
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardDropVariants}
              onClick={card.onClick}
              whileHover={{ y: -4, boxShadow: "0 8px 12px -3px rgba(0, 0, 0, 0.05), 0 3px 4px -2px rgba(0, 0, 0, 0.05)" }}
              className="bg-white border border-slate-200/50 p-4 lg:p-5 flex flex-col items-center text-center justify-between rounded-2xl shadow-sm cursor-pointer select-none min-h-[180px] lg:min-h-[190px] group"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-50/70 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[#0c2340] text-xs sm:text-sm md:text-base mb-1 font-sans">{card.title}</h3>
                <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed mb-3 font-sans">{card.desc}</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-500 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 mb-3 mt-auto flex justify-center">
        <div className="bg-white/95 border border-slate-200/80 rounded-2xl p-3 sm:p-4 shadow-md flex flex-col lg:flex-row justify-between items-center gap-4 w-full max-w-[1000px]">
          {/* Left Side: Logo & Organized By */}
          <div className="flex items-center gap-3">
            <div className="text-[#0c2340] flex-shrink-0">
              <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 10L6 18L24 26L42 18L24 10Z" fill="#0c2340" stroke="#0c2340" />
                <path d="M12 21.5V30C12 33 16.5 36 24 36C31.5 36 36 33 36 30V21.5" stroke="#0c2340" />
                <path d="M38 18V27.5" stroke="#0c2340" />
                <circle cx="38" cy="28.5" r="1.5" fill="#0c2340" stroke="none" />
                <path d="M8 36C5.5 31.5 5 25.5 8 20" stroke="#0c2340" />
                <path d="M8 20L6 18" stroke="#0c2340" />
                <path d="M7 25L4 24" stroke="#0c2340" />
                <path d="M8 30L5 30" stroke="#0c2340" />
                <path d="M9 35L6 36" stroke="#0c2340" />
                <path d="M40 36C42.5 31.5 43 25.5 40 20" stroke="#0c2340" />
                <path d="M40 20L42 18" stroke="#0c2340" />
                <path d="M41 25L44 24" stroke="#0c2340" />
                <path d="M40 30L43 30" stroke="#0c2340" />
                <path d="M39 35L42 36" stroke="#0c2340" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="font-bold text-slate-800 text-[10px] sm:text-xs font-sans">
                Organized by Poornima University
              </span>
              <span className="text-slate-500 text-[9px] sm:text-[10px] font-sans">
                in association with Smart India Hackathon
              </span>
            </div>
          </div>

          {/* Vertical divider line after left block */}
          <div className="hidden lg:block w-[1px] h-8 bg-slate-200"></div>

          {/* Middle Side: Certificate Notice */}
          <div className="flex-1 flex items-center justify-center py-1 text-center">
            <span className="text-[10px] sm:text-xs font-semibold text-blue-600 bg-blue-50/60 rounded-full px-4 py-1.5 border border-blue-100 flex items-center gap-1.5 font-sans animate-pulse">
              🎓 You can also download your SIH Internal certificates from this portal. Stay tuned!
            </span>
          </div>

          {/* Vertical divider line before right block */}
          <div className="hidden lg:block w-[1px] h-8 bg-slate-200"></div>

          {/* Right Side: Copyright & Developers */}
          <div className="flex flex-col text-center lg:text-right leading-tight">
            <span className="text-slate-500 text-[9px] sm:text-[10px] font-sans">
              © 2026 SIH2026 • All rights reserved
            </span>
            <span className="text-slate-800 font-bold text-[9px] sm:text-[10px] font-sans mt-0.5 whitespace-nowrap">
              Developed by{' '}
              <a 
                href="https://www.linkedin.com/in/kshitijjain-dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600 transition-colors"
              >
                Kshitij Jain
              </a>
              {' '} & {' '}
              <a 
                href="https://www.linkedin.com/in/manvendra-singh-ab88b3330/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600 transition-colors"
              >
                Manvendra Singh
              </a>
              {' '} & {' '}
              <a 
                href="https://www.linkedin.com/in/manish-kumar-4b013132a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600 transition-colors"
              >
                Manish Kumar
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Landing = () => {
  const navigate = useNavigate();
  return <DesktopLanding navigate={navigate} />;
};

export default Landing;