import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Funding',
    description: 'We prepare everything you need for your tax return',
    icon: '💼',
  },
  {
    title: 'Market Research',
    description: 'We build financial models you can pitch to investors',
    icon: '📊',
  },
  {
    title: 'Business Strategy',
    description: 'We deliver thoughtful investment advisory services',
    icon: '🎯',
  },
  {
    title: 'Digital Solutions',
    description: 'We create innovative digital solutions for your business',
    icon: '💻',
  },
];

export function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 animate-fade-in">OUR SERVICES</h2>
      
      <div className="flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors hover-lift"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex justify-center items-center space-x-12 mx-8">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % services.length;
            return (
              <div 
                key={index} 
                className="text-center w-64 p-6 rounded-lg hover-glow animate-scale-in"
                style={{ animationDelay: `${offset * 0.2}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl animate-float">
                    {services[index].icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gradient">{services[index].title}</h3>
                <p className="text-gray-600">{services[index].description}</p>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors hover-lift"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}