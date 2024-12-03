import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc?: string;
}

export function TeamMember({ name, title, imageSrc }: TeamMemberProps) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto mb-4">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 flex items-center justify-center">
                <div className="w-8 h-0.5 bg-gray-400 absolute transform rotate-45" />
                <div className="w-8 h-0.5 bg-gray-400 absolute transform -rotate-45" />
              </div>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="text-gray-300">{name}</p>
    </div>
  );
}