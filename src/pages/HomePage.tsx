import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CareProcess from '../components/CareProcess';
import FAQ from '../components/FAQ';
import CoverageArea from '../components/CoverageArea';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <CareProcess />
      <FAQ showAllLink />
      <CoverageArea />
      <FinalCTA />
    </>
  );
}
