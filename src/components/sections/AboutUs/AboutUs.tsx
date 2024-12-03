import React from 'react';

export function AboutUs() {
  return (
    <div className="bg-emerald-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">THIS IS WHO WE ARE</h2>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                WE ARE AS PASSIONATE ABOUT YOUR BUSINESS AS YOU ARE
              </h3>
              <p className="text-lg">
                Dusky is a hub of innovation and ambition, where driven individuals converge
                to spark industry-leading change. Our high-achieving team is united by a
                commitment to excellence and a passion for redefining industry standards.
              </p>
              <p className="text-lg">
                Joining Dusky means more than just a job; it's an invitation to be part of a
                transformative experience in venture building. We're looking for collaborators
                who challenge the status quo, embrace creative problem-solving, and have
                the vision to turn bold ideas into reality. At Dusky, you're not just an employee
                but a catalyst for groundbreaking change and disruptive growth.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-white p-8">
              <img
                src="/dusky-logo.png"
                alt="Dusky Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}