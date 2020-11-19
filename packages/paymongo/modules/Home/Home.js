import HeroBanner from './components/HeroBanner';
import SupportBusiness from './components/SupportBusiness';
import GrowPaymongo from './components/GrowPaymongo';
import BannerQoute from './components/BannerQoute';
import Clients from './components/Clients';
import Customer from './components/Customer';

export default function Home() {
  return (
    <main className="body-font">
      <section className="max-w-screen-lg mx-auto pb-5 md:pb-20">
        <HeroBanner />
      </section>
      <section className="py-10 md:py-16 gradiant-bg">
        <SupportBusiness />
      </section>
      <section className="max-w-screen-lg mx-auto   px-5 py-10 md:py-16">
        <GrowPaymongo />
      </section>
      <section className="px-5 pt-10 md:pt-16 pb-10 gradiant-bg-70">
        <BannerQoute />
      </section>
      <section className="max-w-screen-md mx-auto pb-10 md:pb-16">
        <Clients />
      </section>
      <section className="max-w-screen-lg mx-auto pb-10 md:pb-16">
        <Customer />
      </section>
      
    </main>
  );
}
