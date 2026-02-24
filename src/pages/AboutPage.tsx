import { Award, Heart, Shield, Users, Clock, Star } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every client with the dignity, respect, and kindness they deserve.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through transparency, reliability, and integrity.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Committed to the highest standards of care through continuous training and improvement.'
    },
    {
      icon: Users,
      title: 'Family-Centered',
      description: 'We work closely with families to ensure coordinated, personalized care.'
    }
  ];

  const stats = [
    { number: '24/7', label: 'Availability' },
    { number: '100%', label: 'Licensed & Insured' },
    { number: 'RN/LVN', label: 'Certified Staff' },
    { number: '5-Star', label: 'Quality Care' }
  ];

  return (
    <>
      <Section className="bg-gradient-to-br from-blue-50 to-white pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="heading-1 mb-6">About Andora</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Houston's trusted partner in private duty home health care, bringing professional medical care and compassionate support directly to your home.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Andora was born from a simple belief: that exceptional healthcare should be accessible in the comfort and familiarity of home. Our founder, a registered nurse with extensive clinical experience, saw firsthand how home-based care could transform lives.
              </p>
              <p>
                Our team of dedicated nurses and caregivers is committed to making Andora Houston's premier private duty home health service. We are driven by our core mission: providing compassionate, personalized care that treats every client like family.
              </p>
              <p>
                Our certified nurses and caregivers uphold the highest standards of medical excellence while maintaining the warm, personal touch that sets us apart.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core values guide everything we do, from the care we provide to the relationships we build.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                <value.icon className="text-primary" size={32} />
              </div>
              <h3 className="heading-3 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-2 mb-8 text-center">Accreditations & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <Award className="text-primary mx-auto mb-3" size={40} />
              <h3 className="font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-sm text-gray-600">Fully licensed home health agency</p>
            </Card>
            <Card className="text-center">
              <Shield className="text-primary mx-auto mb-3" size={40} />
              <h3 className="font-semibold mb-2">JCAHO Accredited</h3>
              <p className="text-sm text-gray-600">Meeting highest quality standards</p>
            </Card>
            <Card className="text-center">
              <Clock className="text-primary mx-auto mb-3" size={40} />
              <h3 className="font-semibold mb-2">Medicare Certified</h3>
              <p className="text-sm text-gray-600">Accepting most insurance plans</p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
