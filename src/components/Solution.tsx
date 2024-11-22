import React from 'react';
import { content } from '../config/content';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="section-title">{content.solution.title}</h2>
        <p className="section-subtitle">{content.solution.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {content.solution.services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 tile-hover slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center mb-6">
                {React.createElement(service.icon, { className: "w-10 h-10 text-primary mr-4" })}
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;