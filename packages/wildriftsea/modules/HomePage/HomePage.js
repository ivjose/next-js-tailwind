import HeroBanner from './components/HeroBanner';
import ShowMatch from './components/ShowMatch';
import Charity from './components/Charity';
import Teams from './components/Teams';
import Casters from './components/Casters';
import LiveStream from './components/LiveStream';



export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ShowMatch />
      <Charity />
      <Teams />
      <Casters/>
      <LiveStream />
    </>
  );
}
