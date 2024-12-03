import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    number: 1,
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'ReThinkPack Project',
    description: 'We prioritize your profit. We invest in your success before our own. Our comprehensive approach encompasses planning, building, and managing your business to maximize your runway and minimize risk.',
  },
  {
    number: 2,
    imageSrc: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'Cybersecurity Project',
    description: 'We prioritize your profit. We invest in your success before our own. Our comprehensive approach encompasses planning, building, and managing your business to maximize your runway and minimize risk.',
  },
  {
    number: 3,
    imageSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'CRM System Project',
    description: 'We prioritize your profit. We invest in your success before our own. Our comprehensive approach encompasses planning, building, and managing your business to maximize your runway and minimize risk.',
  },
  {
    number: 4,
    imageSrc: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'AI Integration Project',
    description: 'We prioritize your profit. We invest in your success before our own. Our comprehensive approach encompasses planning, building, and managing your business to maximize your runway and minimize risk.',
  },
  {
    number: 5,
    imageSrc: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=500',
    imageAlt: 'Digital Transformation Project',
    description: 'We prioritize your profit. We invest in your success before our own. Our comprehensive approach encompasses planning, building, and managing your business to maximize your runway and minimize risk.',
  },
];

export function PastWork() {
  return (
    <div id="projects" className="relative py-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074"
          alt="Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            OUR PAST PROJECTS
            <br />
            SPEAK FOR US
          </h2>
          <p className="text-white text-xl max-w-3xl mx-auto">
            We prioritize your profit. We invest in your success before our own. Our
            comprehensive approach encompasses planning, building, and managing your
            business to maximize your runway and minimize risk.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}