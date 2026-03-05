import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import Button from './Button';

export const faqs = [
  {
    question: 'How do I know if I need home healthcare?',
    answer: 'Home healthcare is ideal if you or a loved one needs medical care, assistance with daily activities, or companionship but prefers to remain at home. Our team can assess your needs during a free consultation.'
  },
  {
    question: 'How quickly can care start?',
    answer: 'We understand that care needs can be urgent. In many cases, we can arrange for care to begin within 24-48 hours of your initial consultation.'
  },
  {
    question: 'Can I choose my caregiver?',
    answer: 'Yes! We carefully match caregivers based on your needs, preferences, and personality. If you\'re not satisfied with the match, we\'ll make adjustments at no charge.'
  },
  {
    question: 'What if my needs change over time?',
    answer: 'Care plans are flexible and can be adjusted as needs evolve. We regularly reassess and update care plans to ensure they continue to meet your changing requirements.'
  }
];

interface FAQProps {
  showAllLink?: boolean;
}

export default function FAQ({ showAllLink = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-h2 md:text-[42px] text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-body text-gray-600 max-w-2xl mx-auto">
          Get answers to the most common questions about our home healthcare services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-card overflow-hidden transition-smooth"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <h3 className="font-bold text-lg text-primary pr-4">{faq.question}</h3>
              <ChevronDown
                className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                size={24}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed px-6">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {showAllLink && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="medium"
            onClick={() => navigate('/resources')}
          >
            View All Resources
          </Button>
        </div>
      )}
    </Section>
  );
}
