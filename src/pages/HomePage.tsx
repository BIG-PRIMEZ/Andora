import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CareProcess from '../components/CareProcess';
import Testimonials from '../components/Testimonials';
import CoverageArea from '../components/CoverageArea';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <CareProcess />
      <Testimonials />
      <CoverageArea />
      <FinalCTA />
    </>
  );
}
