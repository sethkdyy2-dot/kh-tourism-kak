import React, { useState } from 'react';
import { Reveal } from './Reveal';

const destinations = [
  {
    id: 1,
    title: 'Siem Reap',
    category: 'Temples',
    img: '../pic/ECAR_Sunset_Ankgor_Wat_Cambodia.jpg',
    description: 'The gateway to the Angkor region, home to the magnificent Angkor Wat and hundreds of ancient temples.',
    tag: 'Top Rated',
    exploreLink: '#Explore'
  },
  {
    id: 2,
    title: 'Phnom Penh',
    category: 'Cities',
    img: '../pic/download.webp',
    description: 'The vibrant capital city where traditional architecture meets modern lifestyle along the Mekong River.',
    exploreLink: '#Explore-Phnom'
  },
  {
    id: 3,
    title: 'Koh Rong',
    category: 'Beaches',
    img: '../pic/download.jpg',
    description: 'An island paradise with white sandy beaches and turquoise waters, perfect for relaxation and diving.',
    exploreLink: '#Explore-Kosrong'
  }
];

const Destinations = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Temples', 'Beaches', 'Cities', 'Nature'];

  const filteredDestinations = filter === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === filter);

  return (
    <section id="Destinations" className="pt-32 pb-24 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <h2 className="text-5xl font-black mb-12 text-center uppercase tracking-tighter">Popular Destinations</h2>
        </Reveal>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full font-bold transition-all ${
                filter === cat 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredDestinations.map((dest) => (
            <Reveal key={dest.id} width="100%">
              <div className="bg-white dark:bg-gray-800 rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={dest.img} alt={dest.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  {dest.tag && (
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold text-red-600">
                      {dest.tag}
                    </span>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{dest.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">{dest.description}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-blue-800 dark:text-blue-400 font-bold">{dest.category}</span>
                    <a href={dest.exploreLink} className="text-red-600 font-black flex items-center gap-2 hover:gap-4 transition-all">
                      Explore Now <span>→</span>
                    </a>
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

export default Destinations;
