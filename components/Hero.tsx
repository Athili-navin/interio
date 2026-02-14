import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" 
            type="video/mp4" 
          />
          {/* Fallback image if video fails to load or on unsupported devices */}
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920" 
            alt="Interior Design Hero"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="text-gold-500 font-bold uppercase tracking-widest mb-4 text-sm md:text-base animate-slide-down">
          JSV Interiors
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
          Designing Spaces That Inspire
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          We transform homes into stylish, comfortable spaces that reflect your personality and elevate everyday living.
        </p>
      </div>
    </section>
  );
};

export default Hero;