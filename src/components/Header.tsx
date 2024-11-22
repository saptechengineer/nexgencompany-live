import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DollarSign, Zap, AlertTriangle, Radio, Users, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    {
      label: "The Problem",
      icon: AlertTriangle,
      action: () => scrollToSection('problem'),
    },
    {
      label: "The Solution",
      icon: Zap,
      action: () => scrollToSection('solution'),
    },
    {
      label: "Pricing",
      icon: DollarSign,
      to: "/pricing",
    },
    {
      label: "Partnership",
      icon: Users,
      to: "/partnership",
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold z-50">
            <span className="text-primary">NexGen</span>
            <span className="text-text">Company</span>
            <span className="text-primary">.ai</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-sm font-medium hover:text-primary transition-colors duration-200 ease-in-out flex items-center"
                    >
                      <item.icon className="w-4 h-4 mr-1" />
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="text-sm font-medium hover:text-primary transition-colors duration-200 ease-in-out flex items-center"
                    >
                      <item.icon className="w-4 h-4 mr-1" />
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
              <li>
                <a 
                  href="https://discovery.nexgencompany.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="discovery-btn text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:bg-hover transition-all duration-200 ease-in-out flex items-center"
                >
                  <Radio className="w-4 h-4 mr-1" />
                  Discovery
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className={`
            fixed inset-0 bg-white/95 backdrop-blur-lg transition-transform duration-300 md:hidden
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <nav className="h-full flex items-center justify-center">
              <ul className="space-y-8 text-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-lg font-medium hover:text-primary transition-colors duration-200 ease-in-out flex items-center justify-center"
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className="text-lg font-medium hover:text-primary transition-colors duration-200 ease-in-out flex items-center justify-center mx-auto"
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
                <li>
                  <a 
                    href="https://discovery.nexgencompany.ai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="discovery-btn text-lg font-medium bg-primary text-white px-6 py-3 rounded-full hover:bg-hover transition-all duration-200 ease-in-out flex items-center justify-center mx-auto w-max"
                  >
                    <Radio className="w-5 h-5 mr-2" />
                    Discovery
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;