import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import backgroundImage from '../assets/background.png';

const Faqs = () => {
  const [faqSections, setFaqSections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [visibleQuestions, setVisibleQuestions] = useState(3); // Show 3 questions by default

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('/Data/Faqs.txt');
        if (!response.ok) {
          throw new Error('Failed to load FAQs');
        }
        const text = await response.text();
        const sections = parseFaqText(text);
        setFaqSections(sections);
      } catch (err) {
        console.error('Error loading FAQs:', err);
        setError('Failed to load FAQs. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // Parse the FAQ text into sections and questions
  const parseFaqText = (text) => {
    const sections = [];
    let currentSection = { title: 'General FAQ', items: [] };
    
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for section headers (lines containing 'FAQ' but not 'FAQ\'s add')
      if (line.includes('FAQ') && !line.includes("FAQ's add")) {
        // Save current section if it has items
        if (currentSection.items.length > 0) {
          sections.push({...currentSection});
        }
        // Start new section
        currentSection = { 
          title: line, 
          items: [] 
        };
      } 
      // Check for questions (lines starting with Q. followed by a number)
      else if (line.match(/^Q\.\s*\d+\./)) {
        const question = line.replace(/^Q\.\s*\d+\.\s*/, '').trim();
        let answer = [];
        
        // Collect all following lines until next question or section
        while (i + 1 < lines.length && !lines[i + 1].match(/^(Q\.\s*\d+\.|FAQ)/)) {
          i++;
          if (lines[i].trim()) {
            answer.push(lines[i].trim());
          }
        }
        
        currentSection.items.push({
          question,
          answer: answer.join('\n')
        });
      }
    }
    
    // Add the last section if it has items
    if (currentSection.items.length > 0) {
      sections.push(currentSection);
    }
    
    return sections;
  };

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleSection = (sectionIndex) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex]
    }));
  };

  // Filter FAQs based on search query
  const filteredSections = faqSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (isLoading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center font-sans"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.96) 30%, rgba(255, 255, 255, 0.82) 70%, rgba(255, 255, 255, 0.4) 100%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-16 h-16 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center p-4 font-sans"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.96) 30%, rgba(255, 255, 255, 0.82) 70%, rgba(255, 255, 255, 0.4) 100%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bg-white border border-slate-100 p-8 shadow-lg rounded-[32px] max-w-md w-full text-center">
          <p className="font-serif text-2xl font-extrabold text-[#0c2340] mb-2">Error Loading FAQs</p>
          <p className="text-slate-500 text-xs sm:text-sm mb-4 leading-relaxed font-sans">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#0c2340] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 cursor-pointer"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        {/* Header */}
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
              <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-[#0c2340]">Frequently Asked Questions</h1>
              <p className="text-slate-500 text-[10px] sm:text-xs mt-1 font-sans">Answers to common queries about Smart India Hackathon 2026</p>
            </div>
          </div>
        </header>

        {/* Search Bar */}
        <div className="max-w-2xl w-full mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions or answers..."
              className="w-full px-6 py-3 border border-slate-200/80 bg-white focus:outline-none focus:border-blue-500 text-gray-800 rounded-full shadow-sm font-sans pr-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute right-5 top-3.5 h-5 w-5 text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-start"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredSections.map((section, sectionIndex) => (
            <motion.div 
              key={sectionIndex} 
              className="bg-white border border-slate-100 p-6 shadow-md rounded-[32px] flex flex-col"
              variants={item}
            >
              <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-[#0c2340] mb-4">
                {section.title}
              </h2>
              
              <div className="flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                  {section.items.map((faq, index) => {
                    const uniqueId = `${sectionIndex}-${index}`;
                    const isActive = activeIndex === uniqueId;
                    
                    return (
                      <motion.div 
                        key={uniqueId}
                        className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden transition-all duration-200"
                        variants={item}
                      >
                        <button
                          className="w-full px-5 py-3.5 text-left flex justify-between items-center transition-colors cursor-pointer"
                          onClick={() => toggleFaq(uniqueId)}
                        >
                          <span className="font-sans text-xs sm:text-sm font-semibold text-slate-800 pr-4 leading-normal">
                            {faq.question}
                          </span>
                          <svg className={`w-3.5 h-3.5 text-slate-400 transform transition-transform duration-200 flex-shrink-0 ${isActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-4 text-slate-600 border-t border-slate-100/80 pt-2 leading-relaxed text-xs sm:text-sm font-sans whitespace-pre-line">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Faqs;