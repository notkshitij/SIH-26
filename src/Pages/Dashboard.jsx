import React from 'react';
import backgroundImage from '../assets/background.png';

const Dashboard = () => {
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
      
      {/* Header */}
      <header className="max-w-6xl mx-auto w-full pb-4 mb-4">
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="bg-white border border-slate-200/80 p-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all text-[#0c2340] cursor-pointer"
            title="Home"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          
          <div className="flex flex-col items-end pr-4 border-r-2 border-blue-600 leading-tight">
            <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0c2340]">Problem Statements</h1>
            <p className="text-slate-500 text-[10px] sm:text-xs mt-1 font-sans">Browse and filter through SIH 2026 statements</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center py-6">
        <div className="bg-white border border-slate-100 p-8 md:p-10 shadow-lg rounded-[32px] max-w-[420px] w-full flex flex-col items-center text-center">
          {/* Double Circle Icon Badge */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-sm scale-110"></div>
            <div className="relative w-16 h-16 rounded-full bg-blue-55 border border-blue-100 flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-16.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-16.25v14.25" />
              </svg>
            </div>
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0c2340] mb-2">Coming Soon!</h2>
          <div className="w-10 h-[2.5px] bg-blue-600 mx-auto mb-5 rounded-full"></div>
          
          <p className="text-[#0c2340] font-semibold text-sm sm:text-base mb-4 leading-relaxed font-sans max-w-[320px]">
            The official problem statements for Smart India Hackathon 2026 are not out yet.
          </p>
          
          <p className="text-slate-500 text-xs max-w-[280px] mx-auto mb-6 leading-relaxed font-sans">
            We are working closely with SIH organizers. Once the statements are released, you will be able to search, sort, and filter them right here on this page.
          </p>
          
          <div>
            <button 
              onClick={() => window.history.back()}
              className="bg-[#0c2340] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full max-w-6xl mx-auto mb-2 mt-4 flex justify-center">
        <div className="bg-white/95 border border-slate-200/80 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          {/* Organized by */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14v7M4.64 10.53A9 9 0 0 0 12 21a9 9 0 0 0 7.36-10.47" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight font-sans">
              <span className="text-slate-500 text-[9px] sm:text-[10px]">Organized in association with</span>
              <span className="font-bold text-slate-800 text-[10px] sm:text-xs">Smart India Hackathon</span>
            </div>
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-slate-200"></div>

          {/* Developed by */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight font-sans">
              <span className="text-slate-500 text-[9px] sm:text-[10px]">Developed by</span>
              <span className="font-bold text-slate-800 text-[10px] sm:text-xs">Kshitij Jain & Manvendra Singh</span>
            </div>
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-slate-200"></div>

          {/* Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight font-sans">
              <span className="font-bold text-slate-800 text-[10px] sm:text-xs">© 2026 SIH2026</span>
              <span className="text-slate-500 text-[9px] sm:text-[10px]">All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;