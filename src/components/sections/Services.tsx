import React from 'react';
import { Code, Rocket, LineChart, Brain } from 'lucide-react';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, from web applications to mobile apps.',
    icon: Code,
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns to boost your online presence and reach your target audience.',
    icon: LineChart,
  },
  {
    title: 'Venture Building',
    description: 'End-to-end support in building and scaling your startup from concept to market success.',
    icon: Rocket,
  },
  {
    title: 'Business Strategy',
    description: 'Expert guidance in funding, market research, and strategic planning for sustainable growth.',
    icon: Brain,
  },
];

export function Services() {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive solutions to help your startup thrive in today's competitive market.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}