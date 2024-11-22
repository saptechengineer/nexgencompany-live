import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PricingPage from './pages/PricingPage';
import TechBlogsPage from './pages/TechBlogsPage';
import BlogPost from './components/BlogPost';
import ContactModal from './components/ContactModal';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PartnershipPage from './pages/PartnershipPage.tsx';
import { useScrollToTop } from './hooks/useScrollToTop';

const ScrollToTop: React.FC = () => {
  useScrollToTop();
  return null;
};

const App: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onContact={() => setShowContactModal(true)} />} />
            <Route path="/pricing" element={<PricingPage onContact={() => setShowContactModal(true)} />} />
            <Route path="/tech-blogs" element={<TechBlogsPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/partnership" element={<PartnershipPage onContact={() => setShowContactModal(true)} />} />
          </Routes>
        </main>
        <Footer onContact={() => setShowContactModal(true)} />
        {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
      </div>
    </Router>
  );
}

export default App;