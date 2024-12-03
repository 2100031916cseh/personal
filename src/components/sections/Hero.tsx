import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div id="home" className="relative bg-gradient-custom min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block text-shadow">Empowering Startups</span>
            <span className="block text-gradient mt-2">to Succeed</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We help innovative startups transform their ideas into successful businesses through cutting-edge technology solutions and strategic guidance.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover-lift md:py-4 md:text-lg md:px-10"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 animate-float" />
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="#services"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 hover-lift md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}