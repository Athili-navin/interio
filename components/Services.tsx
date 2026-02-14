import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Our Services</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">What We Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group p-8 border border-gray-800 bg-dark-900 hover:bg-dark-700 hover:shadow-xl transition-all duration-300 rounded-sm"
            >
              <div className="mb-6 inline-block p-4 bg-dark-800 rounded-full text-gold-500 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                <service.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;