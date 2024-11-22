import React, { useEffect } from 'react';
import { ChevronRight, Users, Code, Lightbulb, Zap, Globe, Shield } from 'lucide-react';

interface PartnershipPageProps {
  onContact: () => void;
}

const PartnershipPage: React.FC<PartnershipPageProps> = ({ onContact }) => {
  useEffect(() => {
    document.title = 'Partnership Program | NexGen Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join NexGen Technologies partnership program and accelerate your market presence with our proven AI and BTP solutions.');
    }
  }, []);

  const partnerships = [
    {
      title: "Implementation Partner",
      icon: Code,
      split: "60/40",
      you: [
        "Quick implementation templates",
        "AI-powered solutions",
        "Technical expertise",
        "3-10 day delivery"
      ],
      partner: [
        "Client relationships",
        "Industry expertise",
        "Local market presence",
        "Project management"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Technology Partner",
      icon: Lightbulb,
      split: "50/50",
      you: [
        "BTP & AI capabilities",
        "Integration expertise",
        "Rapid prototyping",
        "Technical support"
      ],
      partner: [
        "Domain expertise",
        "Existing products",
        "Market knowledge",
        "Customer base"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Strategic Partner",
      icon: Users,
      split: "70/30",
      you: [
        "Complete tech stack",
        "Proven AI solutions",
        "Rapid development",
        "Innovation capability"
      ],
      partner: [
        "Sales channels",
        "Market access",
        "Brand credibility",
        "Growth opportunities"
      ],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Time-to-Market",
      description: "3-10 days delivery vs. industry months"
    },
    {
      icon: Shield,
      title: "Proven Solutions",
      description: "50+ AI use cases, 100+ templates"
    },
    {
      icon: Globe,
      title: "Enterprise Scale",
      description: "Handling 2TB data in minutes"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-purple-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Enterprise Partnership Program</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Accelerate your market presence with our proven AI and BTP solutions
          </p>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {partnerships.map((type, index) => (
            <div key={index} className="mb-12 bg-white rounded-2xl shadow-apple overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
              <div className={`bg-gradient-to-r ${type.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <type.icon className="w-8 h-8" />
                    <h2 className="text-2xl font-bold">{type.title}</h2>
                  </div>
                  <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
                    {type.split} Revenue Split
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-6 text-primary">We Provide</h3>
                    <ul className="space-y-4">
                      {type.you.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-6 text-green-600">You Bring</h3>
                    <ul className="space-y-4">
                      {type.partner.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <ChevronRight className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/10 to-purple-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-apple text-center">
                <benefit.icon className="w-12 h-12 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Ready to Scale Together?</h2>
          <button 
            onClick={onContact}
            className="btn btn-primary text-lg px-12"
          >
            Start Partnership Discussion
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnershipPage;