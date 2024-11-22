import React, { useEffect } from 'react';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import { useLocation } from 'react-router-dom';

interface HomeProps {
  onContact: () => void;
}

const Home: React.FC<HomeProps> = ({ onContact }) => {
  const location = useLocation();

  useEffect(() => {
    // Update meta tags for Home page
    document.title = 'NexGen Technologies - Propelling Enterprises into the Future (NexGenCompany.ai)';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Crafting cutting-edge SaaS and AI solutions, data engineering, SAP BTP, and integrated cloud applications for enterprises. Get your enterprise apps in days, not months.');
    }
  }, [location]);

  return (
    <>
      <Hero onContact={onContact} />
      <Problem />
      <Solution />
    </>
  );
};

export default Home;