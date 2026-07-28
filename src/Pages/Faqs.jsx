import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className="min-h-screen flex items-center justify-center bg-notebook-paper">
        <div className="w-16 h-16 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-notebook-paper p-4">
        <div className="text-gray-900 text-center p-8 border-sketch bg-white/40 max-w-md w-full">
          <p className="font-serif-elegant text-2xl font-bold mb-2">Error Loading FAQs</p>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-sketch-primary px-6 py-2.5"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-notebook-paper py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="max-w-6xl mx-auto w-full border-b border-sketch-dashed pb-6 mb-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="btn-sketch-secondary p-2.5 inline-flex items-center justify-center"
            title="Home"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          <div className="text-center sm:text-right">
            <h1 className="font-serif-elegant text-3xl md:text-4xl font-bold text-gray-900 mb-1">Frequently Asked Questions</h1>
            <p className="font-handwritten text-lg text-gray-600">Answers to common queries about Smart India Hackathon 2026</p>
          </div>
        </header>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions or answers..."
              className="w-full px-6 py-3 border-sketch bg-white focus:outline-none text-gray-800 font-sans"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute right-4 top-3.5 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <motion.div 
          className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start w-full"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredSections.map((section, sectionIndex) => (
            <motion.div 
              key={sectionIndex} 
              className="bg-white/40 border-sketch p-6 shadow-sm flex flex-col"
              variants={item}
            >
              <h2 className="font-serif-elegant text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-sketch-dashed">
                {section.title}
              </h2>
              
              <div className="flex-grow flex flex-col">
                <div className="space-y-4 flex-grow">
                  {section.items.slice(0, expandedSections[sectionIndex] ? section.items.length : Math.min(visibleQuestions, section.items.length)).map((faq, index) => {
                    const uniqueId = `${sectionIndex}-${index}`;
                    const isActive = activeIndex === uniqueId;
                    
                    return (
                      <motion.div 
                        key={uniqueId}
                        className="bg-white/60 border-sketch-thin overflow-hidden"
                        variants={item}
                      >
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors hover:bg-black/5"
                          onClick={() => toggleFaq(uniqueId)}
                        >
                          <span className="font-handwritten text-lg font-bold text-gray-800 pr-4">
                            {faq.question}
                          </span>
                          <motion.span
                            animate={{ rotate: isActive ? 180 : 0 }}
                            className="flex-shrink-0 text-gray-600"
                          >
                            ▼
                          </motion.span>
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
                              <div className="p-6 pt-2 text-gray-600 whitespace-pre-line border-t border-sketch-dashed mt-2 leading-relaxed text-sm md:text-base">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
                
                {section.items.length > visibleQuestions && !expandedSections[sectionIndex] ? (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleSection(sectionIndex)}
                      className="w-full btn-sketch-secondary py-3 text-center"
                    >
                      View {section.items.length - visibleQuestions} more questions
                    </button>
                  </div>
                ) : expandedSections[sectionIndex] ? (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleSection(sectionIndex)}
                      className="w-full btn-sketch-secondary py-3 text-center"
                    >
                      Show Less
                    </button>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Footer Section */}
      <footer className="mt-8 max-w-2xl mx-auto w-full">
        <div className="bg-white/40 border-sketch-thin p-4 text-center shadow-sm">
          <p className="font-handwritten text-gray-600 text-xs md:text-sm">
            Organized by Poornima University in association with Smart India Hackathon
          </p>
          <p className="font-handwritten text-gray-700 text-xs mt-1 font-bold">
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
        </div>
      </footer>
    </div>
  );
};

export default Faqs;