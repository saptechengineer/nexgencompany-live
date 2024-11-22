import React, { useState } from 'react';
import { content } from '../config/content';
import { DollarSign, Clock, Building, Rocket, Crown, Check, User, Users, Briefcase, Cpu, Award } from 'lucide-react';

interface PricingOptionsProps {
  onContact: () => void;
}

const PricingOptions: React.FC<PricingOptionsProps> = ({ onContact }) => {
  const [activeTab, setActiveTab] = useState<'fixed' | 'timeAndMaterial'>('fixed');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [hours, setHours] = useState<number>(0);

  const calculateTotal = () => {
    const rate = content.budgetCalculator.rates.find(r => r.level === selectedLevel)?.rate || 0;
    return rate * hours;
  };

  const getEngineerIcon = (level: number) => {
    switch (level) {
      case 1: return User;
      case 2: return Users;
      case 3: return Briefcase;
      case 4: return Cpu;
      case 5: return Award;
      default: return User;
    }
  };

  const planIcons = [Building, Rocket, Crown];

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
      
      <div className="flex justify-center mb-8">
        <button
          className={`btn ${activeTab === 'fixed' ? 'btn-primary' : 'btn-secondary'} mr-4 flex items-center`}
          onClick={() => setActiveTab('fixed')}
        >
          <DollarSign className="w-5 h-5 mr-2" />
          Fixed Budget Projects
        </button>
        <button
          className={`btn ${activeTab === 'timeAndMaterial' ? 'btn-primary' : 'btn-secondary'} flex items-center`}
          onClick={() => setActiveTab('timeAndMaterial')}
        >
          <Clock className="w-5 h-5 mr-2" />
          Time and Material
        </button>
      </div>

      {activeTab === 'fixed' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.pricing.plans.map((plan, index) => {
            const Icon = planIcons[index];
            return (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-apple transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-2 border-primary' : ''} flex flex-col`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-4xl ${plan.popular ? 'text-primary' : 'text-secondary'}`}>
                    <Icon />
                  </div>
                  {plan.popular && (
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.discountedPrice}</span>
                  <span className="text-secondary line-through ml-2">${plan.price}</span>
                  <span className="text-sm text-secondary ml-1">/month</span>
                </div>
                <p className="text-secondary mb-6">{plan.description}</p>
                <ul className="mb-8 space-y-3 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn btn-primary mt-auto" onClick={onContact}>
                  {index === 2 ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'timeAndMaterial' && (
        <div className="bg-white p-8 rounded-2xl shadow-apple">
          <h2 className="text-2xl font-semibold mb-6">{content.budgetCalculator.subtitle}</h2>
          <p className="mb-8 text-secondary">{content.budgetCalculator.description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Engineer Levels and Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.budgetCalculator.rates.map((rate, index) => {
                const Icon = getEngineerIcon(index + 1);
                return (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <Icon className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <span className="font-bold text-lg block">{rate.level.split('[')[0].trim()}</span>
                      <span className="text-sm text-secondary block">{rate.level.match(/\[(.*?)\]/)?.[1]}</span>
                      <span className="text-xs text-secondary block">{rate.level.match(/\((.*?)\)/)?.[1]}</span>
                    </div>
                    <span className="font-semibold text-primary ml-auto">${rate.rate}/hour</span>
                  </div>
                );
              })}
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

          <button 
            onClick={onContact}
            className="btn btn-primary flex items-center justify-center w-full"
          >
            Get in Touch
          </button>
        </div>
      )}

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.budgetCalculator.services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-apple">
              <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingOptions;