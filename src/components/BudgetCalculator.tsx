import React, { useState } from 'react';
import { content } from '../config/content';
import { Mail } from 'lucide-react';

const BudgetCalculator: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [hours, setHours] = useState<number>(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const calculateTotal = () => {
    const rate = content.budgetCalculator.rates.find(r => r.level === selectedLevel)?.rate || 0;
    return rate * hours;
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">{content.budgetCalculator.title}</h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-apple">
        <h2 className="text-2xl font-semibold mb-6">{content.budgetCalculator.subtitle}</h2>
        <p className="mb-8 text-secondary">{content.budgetCalculator.description}</p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Engineer Levels and Rates</h3>
          <div className="grid grid-cols-1 gap-4">
            {content.budgetCalculator.rates.map((rate, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <span className="font-medium">{rate.level}</span>
                <span className="font-semibold text-primary">${rate.rate}/hour</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Calculate Your Budget</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Select Engineer Level</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="">Select a level</option>
                {content.budgetCalculator.rates.map((rate, index) => (
                  <option key={index} value={rate.level}>{rate.level}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium">Number of Hours</label>
              <input 
                type="number" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
            </div>
            <div className="text-2xl font-semibold text-primary">
              Total Estimated Cost: ${calculateTotal()}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3">
            {content.budgetCalculator.services.map((service, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <button 
            onClick={() => setShowContactModal(true)}
            className="btn btn-primary flex items-center justify-center w-full"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </button>
        </div>
      </div>

      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-apple max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-4">Reach out to discuss your specific requirements and get a tailored solution.</p>
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 mr-2 text-primary" />
              <a href="mailto:partha@nexgencompany.ai" className="text-primary hover:underline">partha@nexgencompany.ai</a>
            </div>
            <button 
              onClick={() => setShowContactModal(false)}
              className="btn btn-secondary w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetCalculator;