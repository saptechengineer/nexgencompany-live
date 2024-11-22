import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "NexGen Company AI has transformed our business operations. Their AI solutions have increased our efficiency by 40%.",
    author: "Jane Doe",
    company: "Tech Innovators Inc."
  },
  {
    quote: "The insights provided by NexGen's AI have been invaluable. We've seen a significant boost in our decision-making process.",
    author: "John Smith",
    company: "Global Solutions Ltd."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;