import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../config/content';

interface FooterProps {
  onContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContact }) => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/">
              <div className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-transparent bg-clip-text">NexGen</span>
                <span className="text-[#1d1d1f]">Company</span>
                <span className="text-[#8E54E9]">.ai</span>
              </div>
            </Link>
            <h3 className="text-xl font-semibold mb-4">{content.footer.companyName}</h3>
            <p className="text-secondary mb-6">{content.footer.companyDescription}</p>
            <p className="text-sm text-secondary">{content.footer.copyright}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-secondary hover:text-primary transition-colors duration-200">Home</Link></li>
              <li><Link to="/pricing" className="text-secondary hover:text-primary transition-colors duration-200">Pricing Options</Link></li>
              <li><Link to="/tech-blogs" className="text-secondary hover:text-primary transition-colors duration-200">Tech Blogs</Link></li>
              <li><Link to="/partnership" className="text-secondary hover:text-primary transition-colors duration-200">Partnership</Link></li>
              <li><a href="https://nexgen.codes" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-200">NexGen Codes</a></li>
              <li><a href="https://discovery.nexgencompany.ai" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-200">Discovery</a></li>
              <li><button onClick={onContact} className="text-secondary hover:text-primary transition-colors duration-200">FAQ</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact & Legal</h4>
            <ul className="space-y-3">
              <li><button onClick={onContact} className="text-secondary hover:text-primary transition-colors duration-200">Contact Us</button></li>
              <li><a href={content.footer.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-200">LinkedIn</a></li>
              {content.footer.legalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-secondary hover:text-primary transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;