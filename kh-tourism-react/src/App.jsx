import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  // Theme hook is used in Header but we call it here too if needed
  // or just let Header handle it. Header already uses useTheme.
  
  return (
    <div className="min-h-screen bg-yellow-100 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Destinations />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      
      {/* Back to Top Logic (Simplified for React) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all z-50"
        title="Back to Top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  );
}

export default App;
