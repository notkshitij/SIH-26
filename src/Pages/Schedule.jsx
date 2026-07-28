import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import sih2026Image from '../assets/SIH-2026.jpeg';

const Schedule = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className="min-h-screen bg-notebook-paper py-6 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between pb-6 border-b border-sketch-dashed mb-8">
          <button
            onClick={() => window.history.back()}
            className="btn-sketch-secondary p-2.5 inline-flex items-center justify-center"
            title="Home"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          <h1 className="font-serif-elegant text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            SIH 2026 Timeline
          </h1>
          <div className="w-10"></div> {/* Spacer to balance the layout */}
        </div>

        <div className="bg-white/40 border-sketch-thin p-1.5 sm:p-2 shadow-md">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <img
              src={sih2026Image} 
              alt="SIH 2026 Timeline" 
              className="absolute top-0 left-0 w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/1200x675/0a2342/ffffff?text=SIH+2026+Timeline';
              }}
            />
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="font-handwritten text-gray-600 text-lg sm:text-xl md:text-2xl">
            * Timeline is subject to change. Please check back for updates.
          </p>
        </div>

        {/* Registration CTA Button */}
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => handleNavigation('/register')}
            className="btn-sketch-primary px-8 py-3 text-base font-semibold shadow-md flex items-center gap-2 group cursor-pointer"
          >
            Apply for your team registration
            <svg className="w-5 h-5 inline-block transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12c4-0.5,14-0.5,16 0" />
              <path d="M14 6l6 6-6 6" />
            </svg>
          </button>
        </div>

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
            {', '}
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
          <p className="font-handwritten text-gray-400 text-[10px] mt-1">
            © {new Date().getFullYear()} SIH2026 - All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Schedule;