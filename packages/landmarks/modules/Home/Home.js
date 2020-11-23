import HeroBanner from './components/HeroBanner'
import Clients from './components/Clients'

import Services from './components/Services'
import Products from './components/Products'
import Statistic from './components/Statistic'
import Contacts from './components/Contacts'

export default function Home() {
  return (
    <div>
    <HeroBanner />
    <Clients />
    <Services />

    <Products />
    <Statistic />
    <Contacts />
    </div>
  );
}
