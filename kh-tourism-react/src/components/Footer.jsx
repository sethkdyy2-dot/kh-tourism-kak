import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-20 pb-10 border-t border-gray-100 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-3xl font-black text-blue-800 dark:text-blue-400 mb-6 uppercase tracking-tighter">
            Cambodia<span className="text-red-600">.</span>
          </h4>
          <p className="text-gray-600 dark:text-gray-400 max-w-md text-lg leading-relaxed">
            Dedicated to showcasing the unparalleled beauty of the Kingdom of Wonder. Join us on a journey through history, nature, and culture.
          </p>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-6 dark:text-white uppercase tracking-widest text-sm">Explore</h5>
          <ul className="space-y-4 text-gray-500 dark:text-gray-400">
            <li><a href="#Explore" className="hover:text-red-600 transition-colors">Siem Reap</a></li>
            <li><a href="#Explore-Phnom" className="hover:text-red-600 transition-colors">Phnom Penh</a></li>
            <li><a href="#Explore-Kosrong" className="hover:text-red-600 transition-colors">Koh Rong</a></li>
            <li><a href="#Destinations" className="hover:text-red-600 transition-colors">All Destinations</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-6 dark:text-white uppercase tracking-widest text-sm">Contact</h5>
          <ul className="space-y-4 text-gray-500 dark:text-gray-400">
            <li>hello@visitcambodia.com</li>
            <li>+855 23 456 789</li>
            <li>Phnom Penh, Cambodia</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-10 border-t border-gray-100 dark:border-gray-800 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Kingdom of Cambodia Tourism. Official Guide.
      </div>
    </footer>
  );
};

export default Footer;
