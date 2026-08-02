import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.png';
import logoImage from '../assets/Poornima-Sih.png';
import phoneBgImage from '../assets/phone-bg.png';


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
      className={`min-h-screen w-full p-3 md:p-6 lg:px-12 flex flex-col justify-between overflow-y-auto relative ${isMounted ? 'opacity-100' : 'opacity-0'}`} 
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
          <img src={logoImage} alt="Poornima University Logo" className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[9px] sm:text-xs font-bold text-slate-500 tracking-wider font-sans uppercase">
              SIH 2026
            </span>
            <span className="text-lg sm:text-2xl font-black text-[#0c2340] tracking-tight font-sans uppercase mt-0.5">
              Internal Selection
            </span>
            <div className="flex flex-col items-start mt-0.5">
              <span className="text-lg sm:text-2xl font-black text-[#1d4ed8] tracking-tight font-sans uppercase">
                Poornima University
              </span>
              <div className="w-12 h-[2.5px] bg-[#1d4ed8] mt-0.5 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Top-Right: Unique pulsing Video Guides button */}
        <button
          onClick={() => handleNavigation('/youtube')}
          className="bg-blue-50/80 hover:bg-blue-100/90 text-blue-600 border border-blue-100/80 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow active:scale-95"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span className="hidden sm:inline">Watch Demo Guides</span>
          <span className="sm:hidden">Demo Guides</span>
        </button>
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
            className="bg-white border border-slate-200/80 rounded-full px-4 py-2 text-[10px] sm:text-xs font-semibold text-[#0c2340] flex items-center gap-2 shadow-sm w-fit mb-4"
          >
            <svg className="w-4.5 h-4.5 text-blue-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M20 12h-2" />
              <path d="M6 12H4" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>
            <span>For Product Builders & Problem Solvers doing SIH 2026</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c2340] leading-tight mb-2.5 tracking-tight max-w-xl font-sans"
          >
            Where Great Teams Build Extraordinary <span className="text-[#1d4ed8]">Solutions</span>.
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-600 text-xs sm:text-sm mb-5 max-w-md leading-relaxed font-sans"
          >
            Everything you need for Smart India Hackathon 2026. Access official resources, browse problem statements, track important dates, and prepare your team for success.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="mb-4"
          >
            <a
              href="https://docs.google.com/forms/d/1wlgQvyCGKRkThI-G9CrMJyzzDPQ94_8owlLaXiPATB0/previewResponse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c2340] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all duration-300 inline-flex items-center gap-2 cursor-pointer group"
            >
              <svg className="w-3.5 h-3.5 text-white transform rotate-45 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <span>Apply for your team registration</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200 ml-1">→</span>
            </a>
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
            <img src="/images/pu_logo.png" alt="Poornima University Logo" className="w-10 h-10 object-contain flex-shrink-0" />
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

const MobileLanding = ({ navigate }) => {
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  
  React.useEffect(() => {
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
      className="min-h-screen w-full p-4 flex flex-col justify-between overflow-y-auto relative bg-[#f8fafc]" 
      style={{ 
        backgroundImage: `url(${phoneBgImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Header */}
      <header className="w-full flex justify-between items-center py-2 px-1 mb-6">
        <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => handleNavigation('/')}>
          <img src={logoImage} alt="Poornima University Logo" className="w-8 h-8 object-contain" />
          <div className="flex flex-col items-start leading-none font-sans">
            <span className="text-[7px] font-bold text-slate-500 tracking-wider uppercase">
              SIH 2026
            </span>
            <span className="text-[12px] font-black text-[#0c2340] tracking-tight uppercase mt-0.5">
              Internal Selection
            </span>
            <div className="flex flex-col items-start mt-0.5">
              <span className="text-[12px] font-black text-[#2563eb] tracking-tight uppercase">
                Poornima University
              </span>
              <div className="w-8 h-[1.5px] bg-[#2563eb] mt-0.5 rounded-full"></div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => handleNavigation('/youtube')}
          className="bg-white border border-slate-200/80 p-2.5 rounded-2xl shadow-sm text-[#0c2340] active:scale-95 transition-all cursor-pointer"
          title="Watch Demo Guides"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Main / Hero Content */}
      <main className="flex-1 flex flex-col items-start justify-center py-2 w-full">
        <motion.div 
          className="w-full text-left flex flex-col items-start"
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          variants={containerVariants}
        >


          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5 text-[10px] font-semibold text-[#0c2340] flex items-center gap-3 shadow-sm w-fit max-w-[340px] mb-6"
          >
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M20 12h-2" />
              <path d="M6 12H4" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>
            <span className="leading-tight">
              For Product Builders & <br />
              Problem Solvers doing SIH 2026
            </span>
          </motion.div>

          {/* Subheading */}
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-extrabold text-[#0c2340] leading-snug mb-2.5 tracking-tight font-sans"
          >
            Where Great Teams Build <br />
            Extraordinary <span className="text-[#2563eb]">Solutions</span>.
          </motion.h2>

          {/* Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-600 text-[11px] font-medium mb-4.5 leading-relaxed font-sans max-w-[240px]"
          >
            Everything you need for Smart India Hackathon 2026. Access official resources, browse problem statements, track important dates, and prepare your team for success.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="w-fit mb-6.5"
          >
            <a
              href="https://docs.google.com/forms/d/1wlgQvyCGKRkThI-G9CrMJyzzDPQ94_8owlLaXiPATB0/previewResponse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c2340] hover:bg-[#1d4ed8] text-white px-5 py-3.5 rounded-xl text-[11px] font-bold shadow-md transition-all duration-300 flex items-center justify-start gap-4 w-fit cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span className="whitespace-nowrap">Apply for your team registration</span>
              </div>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200 text-sm">→</span>
            </a>
          </motion.div>
        </motion.div>
      </main>

      {/* Cards Section */}
      <section className="w-full mb-6">
        <motion.div 
          className="grid grid-cols-2 gap-4 w-full"
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardDropVariants}
              onClick={card.onClick}
              whileTap={{ scale: 0.97 }}
              className="bg-white border border-slate-200/50 p-4 flex flex-col items-center text-center justify-between rounded-3xl shadow-sm cursor-pointer select-none min-h-[160px] group"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-50/70 flex items-center justify-center mb-2">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[#0c2340] text-xs mb-1 font-sans leading-tight">{card.title}</h3>
                <p className="text-slate-500 text-[10px] leading-relaxed mb-2 font-sans">{card.desc}</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#f0f7ff] border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Certificate Alert Banner */}
      <div className="w-full mt-2 mb-3 flex justify-center">
        <div className="text-[9px] font-semibold text-blue-600 bg-blue-50/60 rounded-xl px-3.5 py-2 border border-blue-100/80 text-center leading-normal font-sans animate-pulse w-full">
          🎓 You can also download your SIH Internal certificates from this portal. Stay tuned!
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto mb-2">
        <div className="bg-white/95 border border-slate-200/80 rounded-2xl p-2.5 shadow-sm flex flex-row justify-between items-center gap-1 w-full text-center">
          {/* Organized by */}
          <div className="flex items-center gap-1.5 flex-1 justify-center">
            <img src="/images/pu_logo.png" alt="Poornima University Logo" className="w-7 h-7 object-contain flex-shrink-0" />
            <div className="flex flex-col text-left leading-none font-sans scale-[0.9] origin-left">
              <span className="text-slate-500 text-[7px] whitespace-nowrap">Organized by</span>
              <span className="font-bold text-slate-800 text-[8px] whitespace-nowrap">Poornima University</span>
            </div>
          </div>

          <div className="w-[1px] h-6 bg-slate-200"></div>

          {/* Developed by */}
          <div className="flex items-center gap-1.5 flex-1 justify-center">
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-none font-sans scale-[0.9] origin-left">
              <span className="text-slate-500 text-[7px] whitespace-nowrap">Developed by</span>
              <span className="font-bold text-slate-800 text-[8px] whitespace-nowrap">Kshitij, Manvendra & Manish</span>
            </div>
          </div>

          <div className="w-[1px] h-6 bg-slate-200"></div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 flex-1 justify-center">
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-none font-sans scale-[0.9] origin-left">
              <span className="font-bold text-slate-800 text-[8px] whitespace-nowrap">© 2026 SIH2026</span>
              <span className="text-slate-500 text-[7px] whitespace-nowrap">All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden md:block w-full">
        <DesktopLanding navigate={navigate} />
      </div>
      <div className="block md:hidden w-full">
        <MobileLanding navigate={navigate} />
      </div>
    </>
  );
};

export default Landing;