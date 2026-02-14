import React from 'react';
import { FEATURES } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Why JSV Interiors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto bg-dark-700 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-gray-700">
                <feature.icon className="text-gold-500" size={36} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;