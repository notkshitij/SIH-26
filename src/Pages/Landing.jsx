import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // slightly longer stagger for a clear chain-reaction look
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardDropVariants = {
  hidden: { y: -350, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 110, // slower, smoother spring action
      damping: 14,   // pleasant soft bounce
      mass: 1.0      // realistic weight
    }
  }
};

const buttonHover = {
  scale: 1.03,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const buttonTap = { scale: 0.98 };

// Hand-drawn SVGs
const SketchedFunnel = () => (
  <svg className="w-24 h-24 text-gray-800 opacity-90 hidden lg:block flex-shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Rough sketchy path of a funnel */}
    <path d="M15 15 C 20 12, 80 12, 85 15 C 80 25, 55 45, 55 65 C 53 72, 47 72, 45 65 C 45 45, 20 25, 15 15" />
    <path d="M18 20 C 35 17, 65 17, 82 20" />
    <path d="M30 35 C 40 32, 60 32, 70 35" />
    <path d="M45 65 L 45 85 C 45 87, 43 89, 40 89 L 35 89 C 32 89, 30 87, 30 85" />
    <path d="M55 65 L 55 75" />
    {/* Sketchy shadow lines */}
    <line x1="25" y1="20" x2="35" y2="28" />
    <line x1="28" y1="22" x2="38" y2="30" />
    <line x1="32" y1="25" x2="42" y2="32" />
  </svg>
);

const SketchedRocket = () => (
  <svg className="w-24 h-24 text-gray-800 opacity-90 hidden lg:block flex-shrink-0 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Sketched rocket body */}
    <path d="M50 15 C 60 25, 65 45, 60 65 L 40 65 C 35 45, 40 25, 50 15 Z" />
    {/* Nose cone */}
    <path d="M45 27 C 50 22, 50 22, 55 27" />
    {/* Wings */}
    <path d="M40 55 L 25 65 C 23 66, 25 70, 30 68 L 40 63" />
    <path d="M60 55 L 75 65 C 77 66, 75 70, 70 68 L 60 63" />
    {/* Fins / Booster */}
    <path d="M45 65 L 43 75 L 57 75 L 55 65" />
    {/* Flames / thrust lines */}
    <path d="M46 78 C 47 88, 49 85, 50 90 C 51 85, 53 88, 54 78" />
    <line x1="42" y1="78" x2="38" y2="85" />
    <line x1="58" y1="78" x2="62" y2="85" />
  </svg>
);

const SketchedOval = ({ children, colorClass = "text-blue-600/80" }) => (
  <div className="relative inline-flex items-center justify-center py-1 sm:py-2 px-3 sm:px-6 min-h-[45px] sm:min-h-[60px]">
    <span className="font-handwritten text-base sm:text-xl md:text-2xl font-bold text-gray-900 relative z-10">{children}</span>
    <svg className={`absolute inset-0 w-full h-full ${colorClass}`} viewBox="0 0 110 50" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {/* Sketched hand-drawn double loop oval */}
      <path d="M 12 25 C 12 10, 98 8, 98 25 C 98 40, 18 40, 15 27 C 12 18, 92 14, 88 25" />
    </svg>
  </div>
);

const MobileMessage = () => {
  const [currentEmoji, setCurrentEmoji] = React.useState('💻');
  const emojis = ['💻', '🚀'];
  
  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % emojis.length;
      setCurrentEmoji(emojis[index]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#ece9e2] p-4 flex items-center justify-center font-sans">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-notebook-paper border-sketch p-8 max-w-sm w-full text-center shadow-lg relative overflow-hidden"
      >
        <motion.div
          className="text-5xl mb-4 inline-block"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {currentEmoji}
        </motion.div>
        
        <h1 className="font-serif-elegant text-2xl font-bold text-gray-900 mb-4">
          Desktop Required
        </h1>
        
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          For the best experience, please access this platform from a desktop or laptop computer. The Smart India Hackathon platform is optimized for larger screens to provide you with all required tools.
        </p>

        <div className="border-sketch-dashed p-4 text-left bg-white/40 text-xs text-gray-700">
          <p className="font-bold mb-1">Why desktop?</p>
          The portal contains complex problem statements, template downloads, and event timelines that are best reviewed on larger screens.
        </div>
      </motion.div>
    </div>
  );
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
      }, 3200); // Wait for the 2.8s splash + 0.4s fadeout
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`min-h-screen lg:h-screen w-full bg-notebook-paper p-4 md:p-8 flex flex-col justify-between overflow-y-auto lg:overflow-hidden relative ${isMounted ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 300ms ease-in-out' }}>
      
      {/* Decorative Grid Line Borders on all sides */}
      <div className="absolute top-0 left-0 right-0 h-1 border-b border-sketch-dashed opacity-25 z-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 border-t border-sketch-dashed opacity-25 z-50"></div>
      <div className="absolute top-0 bottom-0 left-0 w-1 border-r border-sketch-dashed opacity-25 z-50"></div>
      <div className="absolute top-0 bottom-0 right-0 w-1 border-l border-sketch-dashed opacity-25 z-50"></div>

        <header className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4 pb-3 border-b border-sketch-dashed mb-4">
          <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => handleNavigation('/')}>
            <span className="font-handwritten text-2xl font-extrabold text-gray-900 transform -rotate-1 tracking-tight">
              SIH 2026
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8 font-handwritten text-base font-bold text-gray-700">
            <span onClick={() => handleNavigation('/dashboard')} className="hover:text-black cursor-pointer transition-colors relative group py-0.5">
              Problem Statements
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </span>
            <span onClick={() => handleNavigation('/template')} className="hover:text-black cursor-pointer transition-colors relative group py-0.5">
              PPT Template
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </span>
            <span onClick={() => handleNavigation('/schedule')} className="hover:text-black cursor-pointer transition-colors relative group py-0.5">
              Event Schedule
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </span>
            <span onClick={() => handleNavigation('/faqs')} className="hover:text-black cursor-pointer transition-colors relative group py-0.5">
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-200"></span>
            </span>
          </nav>

          {/* Header CTA */}
          <div>
            <button
              onClick={() => handleNavigation('/youtube')}
              className="btn-sketch-secondary px-4 py-1.5 text-xs flex items-center gap-1.5"
            >
              Watch Guide 🎬
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center py-2 max-w-6xl mx-auto w-full">
          <motion.div
            className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between"
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Left Sketched Drawing */}
            <motion.div variants={itemVariants} className="flex-1 flex justify-center">
              <SketchedFunnel />
            </motion.div>

            {/* Main Text Content */}
            <motion.div className="w-full lg:w-3/5 text-center flex flex-col items-center" variants={itemVariants}>
              {/* Badge subtitle */}
              <div className="font-handwritten text-sm md:text-base border-sketch px-4 py-1.5 inline-block bg-white/40 mb-4 shadow-sm transform -rotate-1 select-none">
                for product builders & problem solvers doing SIH 2026
              </div>

              {/* Elegant Editorial Serif Heading */}
              <h1 className="font-serif-elegant text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 max-w-3xl">
                We make your ideas scale, compile code, and look premium.
              </h1>

              {/* Body Text */}
              <p className="text-gray-600 text-sm md:text-base mb-6 max-w-xl leading-relaxed">
                Join India's largest hackathon initiative to solve real-world problems. Prepare templates, browse problem statements, view timelines, and submit your entries.
              </p>

              {/* Main CTA Button styled like a sketching border */}
              <motion.div whileHover={buttonHover} whileTap={buttonTap} className="mb-3">
                <button
                  onClick={() => handleNavigation('/register')}
                  className="btn-sketch-primary px-8 py-3 text-base md:text-lg inline-flex items-center gap-2 select-none shadow-md group cursor-pointer"
                >
                  Apply for your team registration
                  <svg className="w-5 h-5 inline-block ml-1 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12c4-0.5,14-0.5,16 0" />
                    <path d="M14 6l6 6-6 6" />
                  </svg>
                </button>
              </motion.div>
              
              <span className="font-handwritten text-gray-500 text-xs">#SmartIndiaHackathon #InnovateForIndia</span>
            </motion.div>

            {/* Right Sketched Drawing */}
            <motion.div variants={itemVariants} className="flex-1 flex justify-center">
              <SketchedRocket />
            </motion.div>
          </motion.div>
        </main>

        {/* Feature Grid / Cards */}
        <section className="mt-4 max-w-6xl mx-auto w-full">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full"
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {[
              {
                ovalText: "PS",
                title: "Problem Statements",
                desc: "Browse through various problem statements from sectors",
                onClick: () => handleNavigation('/dashboard'),
                color: "text-blue-600/80"
              },
              {
                ovalText: "Deck",
                title: "SIH PPT Template",
                desc: "Download the official SIH presentation template document",
                onClick: () => handleNavigation('/template'),
                color: "text-orange-600/80"
              },
              {
                ovalText: "Timeline",
                title: "Event Schedule",
                desc: "Check the timelines, schedules and important dates",
                onClick: () => handleNavigation('/schedule'),
                color: "text-emerald-600/80"
              },
              {
                ovalText: "Q&A",
                title: "FAQs",
                desc: "Find quick answers to common questions about the hackathon",
                onClick: () => handleNavigation('/faqs'),
                color: "text-purple-600/80"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardDropVariants}
                onClick={card.onClick}
                whileHover={{ y: -6, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                className="bg-white/40 border-sketch p-2.5 sm:p-4 flex flex-col items-center justify-between text-center cursor-pointer shadow-sm hover:shadow-md select-none"
              >
                <div className="flex flex-col items-center gap-1.5 w-full">
                  <SketchedOval colorClass={card.color}>
                    {card.ovalText}
                  </SketchedOval>
                  <h3 className="font-serif-elegant text-xs sm:text-base font-bold text-gray-900 leading-tight">{card.title}</h3>
                  <p className="text-gray-500 text-[9px] sm:text-[11px] leading-normal sm:leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        {/* Footer */}
        <footer className="mt-4 pt-3 border-t border-sketch-dashed text-center max-w-6xl mx-auto w-full">
          <p className="font-handwritten text-gray-600 text-xs md:text-sm">
            Organized by Poornima University in association with Smart India Hackathon
          </p>
          <p className="font-handwritten text-gray-700 text-xs mt-0.5 font-bold">
            Developed by{' '}
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
              href="https://www.linkedin.com/in/kshitijjain-dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer hover:text-black transition-colors"
            >
              Kshitij Jain
            </a>
          </p>
          <p className="font-handwritten text-gray-400 text-[10px] mt-0.5">
            © {new Date().getFullYear()} SIH2026 - All rights reserved
          </p>
        </footer>
    </div>
  );
};

const Landing = () => {
  const navigate = useNavigate();
  return <DesktopLanding navigate={navigate} />;
};

export default Landing;