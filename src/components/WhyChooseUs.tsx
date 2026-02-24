import { CheckCircle2 } from 'lucide-react';
import Section from './Section';

const features = [
  'All caregivers are licensed, bonded, and insured',
  'Comprehensive background checks and drug screening',
  'Personalized care plans tailored to individual needs',
  'Ongoing training and professional development',
  'Flexible scheduling including 24/7 availability',
  'Direct communication with nursing supervisors',
];

const stats = [
  { number: '24/7', label: 'Availability' },
  { number: '100%', label: 'Licensed & Insured' },
  { number: '5-Star', label: 'Quality Care' },
  { number: 'RN/LVN', label: 'Certified Staff' },
];

export default function WhyChooseUs() {
  return (
    <Section id="about" background="white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-h2 md:text-[42px] text-primary mb-6">
            Why Families Trust Andora
          </h2>
          <p className="text-body text-gray-600 mb-8 leading-relaxed">
            We understand that choosing a care provider is one of the most important decisions you'll make. Our commitment to excellence, compassion, and professionalism has made us Houston's trusted partner in home healthcare.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-care flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-xl text-center shadow-lg"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm md:text-base opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional healthcare team ready to provide compassionate care"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
