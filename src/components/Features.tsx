import React from 'react';
import { Cpu, BarChart, Shield } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Cpu className="w-12 h-12 text-blue-600" />,
    title: 'Advanced AI Technology',
    description: 'Leverage state-of-the-art AI algorithms to optimize your business processes.'
  },
  {
    icon: <BarChart className="w-12 h-12 text-blue-600" />,
    title: 'Data-Driven Insights',
    description: 'Gain valuable insights from your data to make informed decisions.'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Secure & Reliable',
    description: 'Our solutions prioritize data security and system reliability.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;