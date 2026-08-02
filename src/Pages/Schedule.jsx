import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.png';
import sih2026Image from '../assets/SIH-2026.jpeg';

const Schedule = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
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
            <h1 className="font-sans text-2xl md:text-3xl font-extrabold text-[#0c2340]">SIH 2026 Timeline</h1>
            <p className="text-slate-500 text-[10px] sm:text-xs mt-1 font-sans">Check the timelines, schedules and important dates</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center py-6">
        <div className="bg-white border border-slate-100 p-4 sm:p-6 shadow-lg rounded-[32px] w-full max-w-4xl">
          <div className="w-full overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm bg-white">
            <img
              src={sih2026Image} 
              alt="SIH 2026 Timeline" 
              className="w-full h-auto block"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/1200x675/0a2342/ffffff?text=SIH+2026+Timeline';
              }}
            />
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-slate-500 text-xs font-sans italic">
              * Timeline is subject to change. Please check back for updates.
            </p>
          </div>

          {/* Registration CTA Button */}
          <div className="mt-6 flex justify-center">
            <a 
              href="https://docs.google.com/forms/d/1wlgQvyCGKRkThI-G9CrMJyzzDPQ94_8owlLaXiPATB0/previewResponse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c2340] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer group"
            >
              <span>Apply for your team registration</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200 ml-1">→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Schedule;