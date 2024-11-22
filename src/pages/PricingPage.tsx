import React, { useEffect } from 'react';
import PricingOptions from '../components/PricingOptions';

interface PricingPageProps {
  onContact: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onContact }) => {
  useEffect(() => {
    // Update meta tags for Pricing page
    document.title = 'Pricing | NexGen Technologies';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our flexible pricing options for enterprise solutions. Choose between fixed budget projects or time and material pricing models.');
    }
  }, []);

  return (
    <div className="pt-24">
      <PricingOptions onContact={onContact} />
    </div>
  );
};

export default PricingPage;