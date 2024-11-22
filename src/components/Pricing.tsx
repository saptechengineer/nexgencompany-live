import React from 'react';
import { content } from '../config/content';
import { Check } from 'lucide-react';

const PricingCard: React.FC<{
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  features: string[];
  popular?: boolean;
}> = ({ title, description, price, discountedPrice, features, popular }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-apple transition-all duration-300 hover:scale-105 ${popular ? 'border-2 border-primary relative' : ''}`}>
    {popular && (
      <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-secondary mb-6">{description}</p>
    <div className="mb-8">
      <span className="text-4xl font-bold">${discountedPrice}</span>
      <span className="text-secondary line-through ml-2">${price}</span>
      <span className="text-sm text-secondary ml-1">USD</span>
    </div>
    <ul className="mb-8 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full btn btn-primary hover:bg-opacity-90 transition-all duration-300">Download NexGen Rate Card</button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">{content.pricing.title}</h2>
        <p className="section-subtitle">{content.pricing.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {content.pricing.plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;