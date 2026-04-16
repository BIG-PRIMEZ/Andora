import { BookOpen, FileText, Video, HelpCircle, Download, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import SEO from '../components/SEO';
import { FAQPageSchema } from '../components/StructuredData';

export default function ResourcesPage() {
  const guides = [
    {
      title: 'Understanding Home Health Care',
      description: 'A comprehensive guide to home healthcare services, what to expect, and how to choose the right provider.',
      category: 'Getting Started'
    },
    {
      title: 'Caring for Someone with Dementia',
      description: 'Expert tips and strategies for providing safe, compassionate care for loved ones with dementia or Alzheimer\'s.',
      category: 'Caregiving Tips'
    },
    {
      title: 'Family Caregiver Support',
      description: 'Resources and advice for family members taking on caregiving responsibilities, including self-care strategies.',
      category: 'Family Support'
    },
    {
      title: 'Medication Management at Home',
      description: 'Best practices for safely managing medications, organizing schedules, and preventing errors.',
      category: 'Health & Safety'
    },
    {
      title: 'Fall Prevention Guide',
      description: 'Creating a safe home environment and reducing fall risks for elderly or mobility-impaired individuals.',
      category: 'Health & Safety'
    }
  ];

  const videos = [
    {
      title: 'AARP Family Caregiving Video Series',
      description: 'Wound care, medication management, incontinence, and mobility training',
      url: 'https://www.aarp.org/pri/initiatives/home-alone-alliance/family-caregiving-videos/'
    },
    {
      title: 'UCLA Health Dementia Care Videos',
      description: 'Practical dementia and Alzheimer\'s care training tools',
      url: 'https://www.uclahealth.org/medical-services/geriatrics/dementia/caregiver-education/caregiver-training-videos'
    },
    {
      title: 'Pennsylvania Homecare Association',
      description: 'Free online learning for homecare professionals',
      url: 'https://learningcenter.pahomecare.org/'
    },
    {
      title: 'CareAcademy Training Platform',
      description: 'Comprehensive Home Health Aide training and certification',
      url: 'https://careacademy.com/'
    },
    {
      title: 'mmLearn Caregiver Training',
      description: 'Medication management, wound care, and legal tools',
      url: 'https://training.mmlearn.org/caregiver-training-videos'
    },
    {
      title: 'Caregiver Training Solutions',
      description: 'Video packages on vital signs, personal care, bathing, and transfers',
      url: 'https://www.caregivertrainingsolutions.org/products'
    }
  ];

  const faqs = [
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

  const downloadables = [
    {
      title: 'Family Caregiver Alliance Resources',
      description: 'Fact sheets, guides, and checklists for family caregivers',
      url: 'https://www.caregiver.org/resource/'
    },
    {
      title: 'Medicare Coverage Guide',
      description: 'Official Medicare handbook and coverage information',
      url: 'https://www.medicare.gov/publications'
    },
    {
      title: 'CDC Infection Control Resources',
      description: 'Home healthcare infection prevention and control guidelines',
      url: 'https://www.cdc.gov/infection-control/hcp/home-care/index.html'
    },
    {
      title: 'AARP Caregiving Resource Center',
      description: 'Downloadable toolkits, planners, and care guides',
      url: 'https://www.aarp.org/caregiving/'
    },
    {
      title: 'Home Care Association of America',
      description: 'Industry standards, best practices, and policy documents',
      url: 'https://www.hcaoa.org/resources'
    },
    {
      title: 'National Institute on Aging',
      description: 'Free publications on aging, caregiving, and health conditions',
      url: 'https://www.nia.nih.gov/health/publications'
    }
  ];

  return (
    <>
      <SEO
        title="Home Care Resources & FAQs | Andora Home Care"
        description="Helpful guides and frequently asked questions about home healthcare services in Houston. Expert resources for families and caregivers from Andora Home Care."
        canonical="/resources"
      />
      <FAQPageSchema faqs={faqs} />
      <Section
        className="pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="text-center max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="heading-1 mb-6">Resources & Support</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Access helpful guides, videos, and tools to support your healthcare journey. We're committed to empowering families with knowledge and resources.
          </p>
        </div>
      </Section>

      <Section>
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-primary" size={32} />
          <h2 className="heading-2">Care Guides & Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Card key={index} className="hover:shadow-xl transition-smooth cursor-pointer">
              <div className="text-sm text-primary font-semibold mb-2">
                {guide.category}
              </div>
              <h3 className="font-bold text-lg mb-3">{guide.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                Read More <ExternalLink size={16} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="flex items-center gap-3 mb-8">
          <Video className="text-primary" size={32} />
          <h2 className="heading-2">Video Library</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="hover:shadow-xl transition-smooth cursor-pointer h-full">
                <div className="bg-gradient-to-br from-primary/20 to-blue-100 rounded-lg h-40 flex items-center justify-center mb-4">
                  <Video className="text-primary" size={48} />
                </div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  {video.title}
                  <ExternalLink size={16} className="text-primary" />
                </h3>
                <p className="text-sm text-gray-600">{video.description}</p>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="text-primary" size={32} />
          <h2 className="heading-2">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-smooth">
              <h3 className="font-bold text-lg mb-3 text-primary">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="flex items-center gap-3 mb-8">
          <Download className="text-white" size={32} />
          <h2 className="heading-2 text-white">Downloadable Resources</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {downloadables.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-start gap-3 hover:bg-white/20 transition-smooth cursor-pointer"
            >
              <FileText size={24} className="flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="font-semibold mb-1 flex items-center gap-2">
                  {item.title}
                  <ExternalLink size={16} />
                </div>
                <p className="text-sm text-blue-100">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-blue-100">
            All resources are provided free of charge to help support you and your family.
          </p>
        </div>
      </Section>
    </>
  );
}
