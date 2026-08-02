import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Landing from './Pages/Landing';
import Schedule from './Pages/Schedule';
import Faqs from './Pages/Faqs';
import Template from './Pages/Template';
import Dashboard from './Pages/Dashboard';
import YouTube from './Pages/Youtube';
import './App.css';


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      window.hasSplashPlayed = true;
    }, 2800); // 2.8 seconds splash time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.05,
              filter: "blur(8px)",
              transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
            }}
            className="fixed inset-0 z-50 bg-notebook-paper flex flex-col items-center justify-center overflow-hidden w-full h-full"
          >
            {/* Subtle pencil sketch grid lines border */}
            <div className="absolute inset-0 border-[6px] border-sketch-dashed m-4 pointer-events-none rounded-lg opacity-40"></div>

            <div className="text-center px-4 relative max-w-lg mx-auto">
              {/* Dynamic Pencil Icon Drawing/Floating Animation */}
              <motion.div
                initial={{ y: 20, opacity: 0, rotate: -20 }}
                animate={{ 
                  y: [0, -10, 0], 
                  opacity: 1, 
                  rotate: [-15, -5, -15],
                  transition: { 
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    opacity: { duration: 0.8 }
                  } 
                }}
                className="mb-8 flex justify-center"
              >
                <svg className="w-16 h-16 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </motion.div>

              {/* Title SIH 2026 */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="font-handwritten text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight select-none transform -rotate-1 inline-block"
              >
                SIH 2026
              </motion.h1>

              {/* Animated Sketchy Divider Line */}
              <div className="relative w-48 h-2 mx-auto my-4 overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 left-0 w-full h-[2px] border-b border-sketch-dashed border-gray-800"
                />
              </div>

              {/* Organized by Poornima University */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="font-handwritten text-xl sm:text-2xl text-gray-700 font-semibold tracking-wide"
              >
                Organized by Poornima University
              </motion.p>
              
              {/* Soft notebook highlight yellow underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 1.5, duration: 1 }}
                className="h-2 bg-yellow-300/40 rounded-full mx-auto mt-2"
              />
            </div>
            
            {/* Small loading indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.8 }}
              className="absolute bottom-12 font-handwritten text-sm text-gray-500 flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-ping"></div>
              <span>Opening portal...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route 
          path="/" 
          element={<Landing />} 
        />
        <Route 
          path="/schedule" 
          element={<Schedule />} 
        />
        <Route 
          path="/faqs" 
          element={<Faqs />} 
        />
        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />
        <Route 
          path="/template" 
          element={<Template />} 
        />

        <Route 
          path="/youtube" 
          element={<YouTube />} 
        />
        <Route 
          path="*" 
          element={<Navigate to="/" replace />} 
        />
      </Routes>
    </div>
  );
}

export default App;