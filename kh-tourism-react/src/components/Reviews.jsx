import React from 'react';
import { Reveal } from './Reveal';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    initials: 'SD',
    color: 'bg-red-100 text-red-600',
    rating: 5,
    text: "Angkor Wat at sunrise was a life-changing experience. This guide helped me find the best spots away from the crowds!"
  },
  {
    name: 'Marc Lee',
    initials: 'ML',
    color: 'bg-blue-100 text-blue-800',
    rating: 4,
    text: "Koh Rong is paradise. The beaches are even better than the photos. Highly recommend the island tour."
  },
  {
    name: 'Anna Klein',
    initials: 'AK',
    color: 'bg-green-100 text-green-600',
    rating: 5,
    text: "The local culture and food in Phnom Penh are incredible. This website was a great resource for my planning."
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="pt-32 pb-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 dark:text-white uppercase tracking-tighter">Traveler Reviews</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {reviews.map((review, i) => (
            <Reveal key={i} width="100%">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${review.color} rounded-full flex items-center justify-center font-bold`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">{review.name}</h4>
                    <div className="text-yellow-400 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 italic">"{review.text}"</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal width="100%">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-12 rounded-[3rem] shadow-2xl">
            <h3 className="text-3xl font-black mb-8 text-center dark:text-white uppercase tracking-tight">Share Your Story</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-900/30 transition-all outline-none dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Rating</label>
                  <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-900/30 transition-all outline-none appearance-none dark:text-white">
                    <option>5 Stars - Excellent</option>
                    <option>4 Stars - Great</option>
                    <option>3 Stars - Good</option>
                    <option>2 Stars - Fair</option>
                    <option>1 Star - Poor</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Your Review</label>
                <textarea rows="4" placeholder="How was your trip?" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-900/30 transition-all outline-none dark:text-white"></textarea>
              </div>
              <button className="w-full bg-blue-800 text-white font-black py-5 rounded-2xl text-lg hover:bg-blue-900 transition-all uppercase tracking-widest">Submit Review</button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Reviews;
