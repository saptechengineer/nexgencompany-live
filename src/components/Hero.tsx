import React from 'react';
import { content } from '../config/content';
import { Cpu, BarChart2, Database, Link } from 'lucide-react';

interface HeroProps {
  onContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContact }) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Get your enterprise apps{' '}
            <span className="relative">
              <span className="relative z-10">in days</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 -skew-x-12" style={{ zIndex: 0 }}></span>
            </span>,{' '}
            <span className="text-primary">not months</span>
          </h1>
          <p className="text-xl mb-12 text-secondary">{content.hero.subtitle}</p>
          <button onClick={onContact} className="btn btn-primary hover:bg-hover transition-all duration-300">{content.hero.ctaText}</button>
        </div>
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 slide-up">
          {content.hero.services.map((service, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {React.createElement(service.icon, { className: "w-12 h-12 mx-auto mb-4 text-primary" })}
              <p className="font-medium">{service.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center items-center space-x-12 text-2xl font-bold text-secondary">
          <span>SAP</span>
          <span>SAP BTP</span>
          <span>Azure</span>
          <span>AWS</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;