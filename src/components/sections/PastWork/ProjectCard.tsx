import React from 'react';

interface ProjectCardProps {
  number: number;
  imageSrc: string;
  imageAlt: string;
  description: string;
  className?: string;
}

export function ProjectCard({ number, imageSrc, imageAlt, description, className = '' }: ProjectCardProps) {
  return (
    <div className={`relative group overflow-hidden rounded-lg ${className}`}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-between p-6">
        <div className="text-white">
          <div className="text-lg font-semibold mb-2">PROJECT {number}</div>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
}