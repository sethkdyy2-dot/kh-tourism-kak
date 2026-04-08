import React from 'react';
import { Reveal } from './Reveal';
import { MapPin, Phone, Mail, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-24 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <h1 className="text-6xl font-black mb-16 tracking-tighter uppercase">Contact Us</h1>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <Reveal width="100%">
              <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed mb-12">
                Planning a trip to the Cambodia? Our team of local experts is here to help you craft the perfect itinerary.
              </p>
            </Reveal>

            <div className="space-y-10">
              <Reveal width="100%">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1 dark:text-white">Address</h3>
                    <p className="text-gray-500 dark:text-gray-400">Toul Sanker, Phnom Penh, Cambodia</p>
                  </div>
                </div>
              </Reveal>

              <Reveal width="100%">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-800 dark:text-blue-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1 dark:text-white">Phone Number</h3>
                    <p className="text-gray-500 dark:text-gray-400">+855 23 456 789 / +855 12 345 678 </p>
                  </div>
                </div>
              </Reveal>

              <Reveal width="100%">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1 dark:text-white">Email Support</h3>
                    <p className="text-gray-500 dark:text-gray-400">info@visitcambodia.com / support@cambodiatourism.gov</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal width="100%">
              <div className="mt-16 p-10 bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-black mb-4 dark:text-white">Official Tourism Guide</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Download our official 2026 travel brochure for all the latest safety tips and hidden gems.</p>
                <button className="bg-blue-800 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-900 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" /> Download Brochure (PDF)
                </button>
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/2">
            <Reveal width="100%">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-900/30 transition-all outline-none dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-900/30 transition-all outline-none dark:text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Trip Interest</label>
                  <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-900/30 transition-all outline-none appearance-none dark:text-white">
                    <option>Historical & Cultural</option>
                    <option>Island & Coastal</option>
                    <option>Nature & Eco-Tourism</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Your Message</label>
                  <textarea rows="6" placeholder="Tell us about your dream trip..." className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-900/30 transition-all outline-none dark:text-white"></textarea>
                </div>
                <button className="w-full bg-red-600 text-white font-black py-5 rounded-2xl text-lg hover:bg-red-700 shadow-xl shadow-red-500/20 transition-all uppercase tracking-widest">Send Message</button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
