import React from 'react';
import backgroundImage from '../assets/background.png';
import pptxFile from '../assets/SIH2026-IDEA-Presentation-Format.pptx';

const Template = () => {
  const pptxUrl = pptxFile;

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
            <h1 className="font-sans text-2xl md:text-3xl font-extrabold text-[#0c2340]">SIH PPT Template</h1>
            <p className="text-slate-500 text-[10px] sm:text-xs mt-1 font-sans">Download official PPT template for your presentation</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center py-6">
        <div className="bg-white border border-slate-100 p-8 md:p-10 shadow-lg rounded-[32px] max-w-[420px] w-full flex flex-col items-center text-center">
          {/* Double Circle Icon Badge */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-sm scale-110"></div>
            <div className="relative w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </div>
          
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-[#0c2340] mb-2">PPT Template</h2>
          <div className="w-10 h-[2.5px] bg-blue-600 mx-auto mb-5 rounded-full"></div>
          
          <p className="text-[#0c2340] font-semibold text-sm sm:text-base mb-4 leading-relaxed font-sans max-w-[320px]">
            Official PowerPoint presentation format for project submissions.
          </p>
          
          <p className="text-slate-500 text-xs max-w-[280px] mx-auto mb-6 leading-relaxed font-sans">
            Please adhere to the guidelines and templates provided inside this presentation to submit your ideas successfully.
          </p>
          
          <div className="mb-6">
            <a 
              href={pptxUrl}
              download="SIH2026-IDEA-Presentation-Format.pptx"
              className="bg-[#0c2340] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Template (.pptx)</span>
            </a>
          </div>

          {/* Compact Instructions */}
          <div className="pt-5 border-t border-slate-100 w-full text-left font-sans">
            <h4 className="font-bold text-slate-800 text-[10px] sm:text-xs mb-3 uppercase tracking-wide">Steps to use:</h4>
            <ul className="text-slate-500 text-[11px] space-y-2.5 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">1.</span>
                <span>Download the official presentation format.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">2.</span>
                <span>Open in Microsoft PowerPoint (2016 or later).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">3.</span>
                <span>Customize slides with your specific project details.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600">4.</span>
                <span>Save slides and submit per instructions.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Template;