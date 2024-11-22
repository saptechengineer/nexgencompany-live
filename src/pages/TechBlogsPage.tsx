import React, { useEffect } from 'react';
import TechBlogs from '../components/TechBlogs';

const TechBlogsPage: React.FC = () => {
  useEffect(() => {
    // Update meta tags for Tech Blogs page
    document.title = 'Tech Blogs | NexGen Technologies';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our technical insights on enterprise solutions, AI, data engineering, and digital transformation.');
    }
  }, []);

  return (
    <div className="pt-24">
      <TechBlogs />
    </div>
  );
};

export default TechBlogsPage;