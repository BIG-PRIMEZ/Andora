import { GraduationCap, Heart, Shield, UserCheck, Award, CheckCircle } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export default function CaregiversPage() {

  const qualifications = [
    {
      icon: GraduationCap,
      title: 'Highly Trained Professionals',
      description: 'All our nurses are licensed RNs or LVNs with extensive clinical experience and ongoing education.'
    },
    {
      icon: Shield,
      title: 'Background Checked',
      description: 'Every caregiver undergoes comprehensive background checks and credential verification.'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Selected not just for skills, but for genuine compassion and dedication to patient care.'
    },
    {
      icon: Award,
      title: 'Certified Specialists',
      description: 'Many hold specialized certifications in dementia care, wound care, IV therapy, and more.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Structured Screening',
      description: 'A multi-step interview process, background verification, and clinical skill validation before joining our team.'
    },
    {
      step: '2',
      title: 'Ongoing Training',
      description: 'Continued education in safety protocols, evolving care techniques, and professionalism to maintain high standards in every home.'
    },
    {
      step: '3',
      title: 'Thoughtful Matching',
      description: 'Caregivers are carefully paired based on clinical needs, personality fit, household dynamics, and long-term stability.'
    },
    {
      step: '4',
      title: 'Active Oversight',
      description: 'Regular RN supervision, performance evaluations, and direct communication to ensure consistent quality of care.'
    }
  ];

  const benefits = [
    'Competitive compensation and benefits',
    'Flexible scheduling options',
    'Professional development opportunities',
    'Supportive team environment',
    'Continuing education credits',
    'Recognition and rewards programs'
  ];

  return (
    <>
      <Section
        className="pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="text-center max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="heading-1 mb-6">Our Caregivers</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet the heart of Andora. Our team of dedicated nurses and caregivers are the finest professionals in home healthcare, chosen for their expertise, compassion, and commitment to excellence.
          </p>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">What Sets Our Team Apart</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualifications.map((qual, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-smooth">
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                <qual.icon className="text-primary" size={32} />
              </div>
              <h3 className="heading-3 mb-3">{qual.title}</h3>
              <p className="text-gray-600 text-sm">{qual.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Selection Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards to ensure every caregiver represents the excellence you deserve.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-md h-full">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="text-primary">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6">Join Our Team</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Are you a compassionate healthcare professional looking to make a real difference in people's lives? Andora offers a rewarding career where you can provide exceptional one-on-one care in a supportive environment.
            </p>
            <h3 className="font-bold text-lg mb-4">Why Join Andora?</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="cta"
              size="large"
              onClick={() => window.location.href = 'mailto:Privatecare@andorahealth.com?subject=Caregiver Application&body=Hello, I am interested in applying for a caregiver position at Andora Healthcare.%0D%0A%0D%0AName:%0D%0APhone:%0D%0ALicense/Certification:%0D%0AYears of Experience:%0D%0A%0D%0APlease find my resume attached.'}
            >
              Apply Now
            </Button>
          </div>
          <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl p-8">
            <UserCheck size={48} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">We're Hiring!</h3>
            <p className="text-blue-100 mb-6">
              Current openings for licensed nurses (RN/LVN) and certified caregivers across the Houston area.
            </p>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>• Registered Nurses (RN)</li>
              <li>• Licensed Vocational Nurses (LVN)</li>
              <li>• Certified Nursing Assistants (CNA)</li>
              <li>• Home Health Aides (HHA)</li>
              <li>• Personal Care Attendants</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
