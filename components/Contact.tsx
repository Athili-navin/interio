import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '1 BHK',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xgolkvoj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          type: '1 BHK',
          message: ''
        });
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Contact Us</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-dark-800 p-8 md:p-12 rounded-lg shadow-xl border border-gray-800">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors text-white placeholder-gray-500"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors text-white placeholder-gray-500"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors text-white placeholder-gray-500"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">Property Type</label>
            <div className="relative">
              <select
                name="type"
                id="type"
                className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors appearance-none text-white"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK</option>
                <option value="Villa">Villa</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-sm focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors text-white placeholder-gray-500"
              placeholder="Tell us about your dream home..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gold-600 text-white font-bold py-4 rounded-sm hover:bg-gold-700 transition-colors uppercase tracking-widest ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;