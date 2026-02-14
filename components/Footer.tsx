import React from 'react';
import { Instagram } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-20 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center">
                 <span className="text-white font-serif font-bold text-md">JSV</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide">JSV Interiors</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming spaces into stunning, functional interiors since 2015. We bring your vision to life with precision and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-wider mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/jsv_interiors?igsh=MjltZTVwa2FkaWc2&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} JSV Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;