import React from 'react';
import { TeamMember } from './TeamMember';

const teamMembers = [
  { name: 'Name', title: 'TITLE' },
  { name: 'Name', title: 'TITLE' },
  { name: 'Name', title: 'TITLE' },
  { name: 'Name', title: 'TITLE' },
  { name: 'Name', title: 'TITLE' },
  { name: 'Name', title: 'TITLE' },
];

export function Team() {
  return (
    <div className="bg-emerald-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}