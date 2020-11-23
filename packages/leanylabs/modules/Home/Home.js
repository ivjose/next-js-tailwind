import HeroBanner from './components/HeroBanner';
import WhyLeanLabs from './components/WhyLeanLabs';
import Technologies from './components/Technologies';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';

import Testimonials from './components/Testimonials';
import OurBlog from './components/OurBlog';
import ContactUs from './components/ContactUs';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WhyLeanLabs />
      <Technologies />
      <Services />
      <CaseStudies/>
      <Testimonials />
      <OurBlog />
      <ContactUs />
    </>
  );
}
