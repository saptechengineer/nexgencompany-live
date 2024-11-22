import React from 'react';
import { Mail } from 'lucide-react';
import { content } from '../config/content';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-apple max-w-md w-full">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p className="mb-4">Reach out to discuss your specific requirements and get a tailored solution.</p>
        <div className="flex items-center mb-4">
          <Mail className="w-5 h-5 mr-2 text-primary" />
          <a href="mailto:partha@nexgencompany.ai" className="text-primary hover:underline">partha@nexgencompany.ai</a>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">FAQ</h4>
          {content.faq.questions.map((faq, index) => (
            <details key={index} className="mb-2">
              <summary className="font-medium cursor-pointer">{faq.question}</summary>
              <div className="pl-4 mt-2">
                {faq.answer.map((item, i) => (
                  <p key={i} className="text-secondary mb-1">{item}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
        <button 
          onClick={onClose}
          className="btn btn-secondary w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;