import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../config/blogPosts';

const TechBlogs: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">Tech Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} to={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-2xl shadow-apple overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 h-full flex flex-col">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{post.title}</h2>
                  <p className="text-secondary mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-secondary">{post.date}</span>
                    <span className="text-primary font-medium group-hover:underline">Read more</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBlogs;