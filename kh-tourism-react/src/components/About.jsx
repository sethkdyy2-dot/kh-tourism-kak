import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
  const stats = [
    { label: 'Temples', value: '4,000+' },
    { label: 'People', value: '17M' },
    { label: 'Islands', value: '60+' },
    { label: 'Years of History', value: '2,000' },
  ];

  return (
    <section id="about" className="pt-32 pb-24 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-6xl font-black mb-8 tracking-tighter uppercase">The Kingdom of <span className="text-red-600">Wonder</span></h1>
            <p className="text-gray-500 dark:text-gray-400 text-2xl leading-relaxed">
              Cambodia is a country with a rich and complex history, a resilient spirit, and some of the most breathtaking landscapes in the world.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <Reveal width="100%">
            <img src="../pic/OIP.webp" alt="Culture" className="rounded-[5rem] shadow-2xl w-full h-full object-cover" />
          </Reveal>
          <div>
            <Reveal width="100%">
              <h2 className="text-4xl font-black mb-8 uppercase">A Rich Heritage</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                From the golden age of the Khmer Empire to the modern-day revitalization of its cities, Cambodia's journey is etched into the stones of its temples and the smiles of its people.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                The country is defined by the mighty Mekong River and the Tonlé Sap lake, which provide the lifeblood for its agriculture and diverse ecosystems.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal width="100%">
          <div className="bg-blue-900 rounded-[4rem] p-16 text-white text-center">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tight">Cambodia by the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-5xl font-black text-red-500 mb-2">{stat.value}</p>
                  <p className="text-blue-200 uppercase font-bold tracking-widest text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
