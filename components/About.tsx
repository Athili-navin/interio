import React from 'react';
import { Users, PenTool, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">About Us</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Crafting Elegant Living</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At JSV Interiors, we believe great design transforms lives. Our mission is to create thoughtfully designed spaces that balance beauty, function, and comfort — turning every house into a home you'll love.
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-800">
            <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3">Expert Designers</h3>
            <p className="text-gray-400 leading-relaxed">
              Our team of seasoned professionals brings decades of combined experience in luxury interiors.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-800">
            <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500">
              <PenTool size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3">Customized Interiors</h3>
            <p className="text-gray-400 leading-relaxed">
              Every project is uniquely tailored to match your lifestyle, taste, and vision.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-800">
            <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3">End-to-End Execution</h3>
            <p className="text-gray-400 leading-relaxed">
              From concept to completion, we manage every detail for a seamless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;