import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../config/blogPosts';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      // Update meta tags for blog post
      document.title = `${post.title} | NexGen Technologies`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');

      if (ogTitle) ogTitle.setAttribute('content', post.title);
      if (ogDescription) ogDescription.setAttribute('content', post.excerpt);
      if (ogImage) ogImage.setAttribute('content', post.image);
    }
  }, [post]);

  if (!post) {
    return <div className="container mx-auto px-6 py-24">Blog post not found</div>;
  }

  return (
    <article className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="mb-8 text-secondary">
          <span>{post.date}</span> • <span>{post.author}</span>
        </div>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-2xl mb-8"
          loading="lazy"
        />
        <div className="prose prose-lg max-w-none">
          <Markdown
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
              p: ({children}) => <p className="mb-4 text-justify">{children}</p>,
              h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
              h2: ({children}) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
              h3: ({children}) => <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>,
              ul: ({children}) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
              li: ({children}) => <li className="mb-2">{children}</li>,
              blockquote: ({children}) => <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>,
              img: ({src, alt}) => <img src={src} alt={alt} loading="lazy" className="rounded-lg" />,
            }}
          >
            {post.content}
          </Markdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;