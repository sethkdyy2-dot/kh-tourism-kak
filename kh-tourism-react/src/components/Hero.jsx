import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="../pic/ECAR_Sunset_Ankgor_Wat_Cambodia.jpg" 
          alt="Angkor Wat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase">
          Kingdom of <br /><span className="text-red-500">Wonder</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light text-gray-200">
          Discover the magic of ancient temples, pristine beaches, and the soul of Southeast Asia.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href="#Explore"
            className="bg-red-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/50"
          >
            Start Exploring
          </a>
          <a 
            href="#about"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
