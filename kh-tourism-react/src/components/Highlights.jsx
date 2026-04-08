import React from 'react';
import { Reveal } from './Reveal';

const experiences = [
  { title: 'Ancient Temples', img: '../pic/ECAR_Sunset_Ankgor_Wat_Cambodia.jpg' },
  { title: 'Tropical Islands', img: '../pic/30.312.1-Cambodias-Eco-friendly-Retreat-Song-Saa-Private-Island.webp' },
  { title: 'Urban Energy', img: '../pic/download (1).webp' },
];

const Highlights = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Top Experiences</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {experiences.map((exp, index) => (
            <Reveal key={exp.title} width="100%">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={exp.img} 
                    alt={exp.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
