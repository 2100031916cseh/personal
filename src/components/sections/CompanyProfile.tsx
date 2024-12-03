import React from 'react';

export function CompanyProfile() {
  return (
    <div id="about" className="relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Technology background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">COMPANY PROFILE</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our venture-building studio draws on years of software agency expertise
            to empower tech startups with the resources they need to succeed
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
}