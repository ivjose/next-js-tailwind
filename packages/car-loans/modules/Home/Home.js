import HeroLanding from './components/HeroLanding';
import Clients from './components/Clients';
import Services from './components/Services';
import Process from './components/Process';

import Resources from './components/Resources';
import LiveRates from './components/LiveRates';
import Testimonial from './components/Testimonial';
import CtaSection from './components/CtaSection';

export default function Home() {
  return (
    <>
      <HeroLanding />
      <Clients />
      <Services />
      <Process />
      <Resources />
      <LiveRates />
      <Testimonial />
      <CtaSection />
    </>
  );
}
