import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-notebook-paper p-4 md:p-8 flex flex-col justify-between overflow-hidden w-full">
      
      {/* Header */}
      <header className="max-w-6xl mx-auto w-full border-b border-sketch-dashed pb-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
            <h1 className="font-serif-elegant text-3xl md:text-4xl font-bold text-gray-900 mb-1">Problem Statements</h1>
            <p className="font-handwritten text-lg text-gray-600">Browse and filter through SIH 2026 statements</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center py-12">
        <div className="bg-white/40 border-sketch p-8 md:p-12 text-center shadow-md max-w-xl w-full">
          <div className="mb-6">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-50">
              <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-16.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-16.25v14.25" />
              </svg>
            </div>
          </div>
          
          <h2 className="font-serif-elegant text-3xl font-bold text-gray-900 mb-2">Coming Soon!</h2>
          <div className="w-16 h-0.5 border-b border-sketch-dashed mx-auto mb-6"></div>
          
          <p className="font-handwritten text-lg text-gray-600 mb-8 leading-relaxed">
            The official problem statements for Smart India Hackathon 2026 are not out yet.
          </p>
          
          <p className="text-gray-500 text-sm max-w-sm mx-auto mb-8">
            We are working closely with SIH organizers. Once the statements are released, you will be able to search, sort, and filter them right here on this page.
          </p>
          
          <div>
            <button 
              onClick={() => window.history.back()}
              className="btn-sketch-primary px-6 py-2.5 text-sm"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-8 pt-4 border-t border-sketch-dashed text-center max-w-6xl mx-auto w-full mb-4">
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
        <p className="font-handwritten text-gray-400 text-[10px] mt-1">
          © {new Date().getFullYear()} SIH2026 - All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;