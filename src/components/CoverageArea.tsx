import { MapPin, CheckCircle } from 'lucide-react';
import Section from './Section';

const areas = [
  'Downtown Houston',
  'The Woodlands',
  'Sugar Land',
  'Pearland',
  'Katy',
  'Spring',
  'Cypress',
  'Memorial',
  'River Oaks',
  'Bellaire',
  'West University',
  'Heights',
];

export default function CoverageArea() {
  return (
    <Section background="light">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-primary" size={36} />
            <h2 className="text-h2 md:text-[42px] text-primary">
              Proudly Serving Greater Houston
            </h2>
          </div>
          <p className="text-body text-gray-600 mb-8 leading-relaxed">
            We provide comprehensive home care services throughout the Houston metropolitan area. No matter where you live, our dedicated caregivers are ready to bring professional, compassionate care to your doorstep.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            Our coverage includes, but is not limited to:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-care flex-shrink-0" size={20} />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 italic">
            Don't see your area listed? Call us at (832) 679-3716 to confirm service availability in your neighborhood.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Houston skyline representing our service area across Greater Houston"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
