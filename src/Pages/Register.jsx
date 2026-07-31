import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-notebook-paper p-4 md:p-8 flex flex-col justify-between overflow-y-auto w-full">
      
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
            <h1 className="font-serif-elegant text-3xl md:text-4xl font-bold text-gray-900 mb-1">Team Registration</h1>
            <p className="font-handwritten text-lg text-gray-600">Register your team for the internal hackathon</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center py-12">
        <div className="bg-white/40 border-sketch p-8 md:p-12 text-center shadow-md max-w-xl w-full">
          <div className="mb-6">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-orange-50">
              <svg className="h-10 w-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="font-serif-elegant text-3xl font-bold text-gray-900 mb-2">Registration Coming Soon!</h2>
          <div className="w-16 h-0.5 border-b border-sketch-dashed mx-auto mb-6"></div>
          
          <p className="font-handwritten text-lg text-gray-600 mb-8 leading-relaxed">
            The team registration process for Smart India Hackathon 2026 has not opened yet.
          </p>
          
          <p className="text-gray-500 text-sm max-w-sm mx-auto mb-8">
            Please gather your team members, download the official presentation template, prepare your slides, and stay tuned for the registration link.
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
            href="https://www.linkedin.com/in/kshitijjain-dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer hover:text-black transition-colors"
          >
            Kshitij Jain
          </a>
          {' '}&{' '}
          <a 
            href="https://www.linkedin.com/in/manvendra-singh-ab88b3330/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer hover:text-black transition-colors"
          >
            Manvendra Singh
          </a>
        </p>
        <p className="font-handwritten text-gray-400 text-[10px] mt-1">
          © {new Date().getFullYear()} SIH2026 - All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Register;
