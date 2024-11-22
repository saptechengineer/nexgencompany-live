import React, { useState } from 'react';
import { content } from '../config/content';

const FAQItem: React.FC<{ question: string; answer: string[] }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-secondary space-y-2">
          {answer.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-title">{content.faq.title}</h2>
        <div className="max-w-3xl mx-auto mt-16">
          {content.faq.questions.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;