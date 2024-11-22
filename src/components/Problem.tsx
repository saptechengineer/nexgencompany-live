import React from 'react';
import { content } from '../config/content';
import { ArrowRight } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">{content.problem.title}</h2>
        <p className="section-subtitle">{content.problem.subtitle}</p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-16 space-y-8 md:space-y-0">
          {content.problem.steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-xs slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-6xl mb-4">{step.emoji}</div>
                <p className="text-lg font-medium">{step.text}</p>
              </div>
              {index < content.problem.steps.length - 1 && (
                <ArrowRight className="hidden md:block w-12 h-12 mx-4 text-primary" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;