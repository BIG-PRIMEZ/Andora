import { Helmet } from 'react-helmet-async';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Andora Home Care',
    url: 'https://www.andorahealth.com',
    logo: 'https://www.andorahealth.com/Andora_BlackLogo_Variant_PNG@14x.png',
    telephone: '+1-346-202-3538',
    email: 'Privatecare@andorahealth.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5718 Westheimer Rd, Suite 1000',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77057',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.7372,
      longitude: -95.4825,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Houston',
      sameAs: 'https://en.wikipedia.org/wiki/Houston',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Care Services',
      itemListElement: [
        'Private Duty Nursing',
        'Skilled Nursing Care',
        'Personal Care',
        '24/7 Home Care',
        'Companionship',
        'Respite Care',
        'Dementia Care',
      ].map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
    description:
      'Licensed private duty nursing and 24-hour home care in Houston. Professional, compassionate caregivers providing skilled nursing, companion care, and personal care services.',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQ[];
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
