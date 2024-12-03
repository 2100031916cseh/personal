import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { CompanyProfile } from './components/sections/CompanyProfile';
import { ServiceCarousel } from './components/sections/Services/ServiceCarousel';
import { AboutUs } from './components/sections/AboutUs/AboutUs';
import { Team } from './components/sections/Team/Team';
import { GoalStatement } from './components/sections/GoalStatement';
import { PastWork } from './components/sections/PastWork/PastWork';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CompanyProfile />
        <ServiceCarousel />
        <AboutUs />
        <Team />
        <GoalStatement />
        <PastWork />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} DUSKT TECH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;