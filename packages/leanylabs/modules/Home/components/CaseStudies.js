import Image from 'next/image';
import TitleHeader from '../../../components/TitleHeader';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Aspecto',
      description: `Don't break your APIs!`,
      img: 'aspecto_hero.png',
    },
    {
      id: 2,
      title: 'Weatherman',
      description:
        'Weather website with detailed weather forecasts, current conditions, tide predictions, radar, and weather maps for cities and places around the world.',
      img: 'home.png',
    },
    {
      id: 3,
      title: 'CryptoDividend',
      description:
        'Crypto projects directory that calculates dividend ROI for each listed project to help make better investment decisions.',
      img: 'today.png',
    },
  ];
  return (
    <section className="pb-20">
      <TitleHeader title="Case Studies" />
      
        {caseStudies.map((caseStudie) => (
          <div  key={caseStudie.id} className="flex flex-wrap  flex-col md:flex-row-reverse py-10">
            <a href="#" className="md:w-2/6 w-full">
              <Image
                className="w-full object-cover lg:w-full lg:h-full mx-auto "
                alt="hero"
                src={`/img/${caseStudie.img}`}
                width="350"
                height="187"
                sizes="40vw"
                priority
              />
            </a>
            <div className="flex-1 w-full md:pr-3">
              <h3 className="text-3xl text-green-600 py-3">
                {caseStudie.title}
              </h3>
              <p  className="text-lg">{caseStudie.description}</p>

              <div className="md:text-center mt-5">
                <a
                  href="#"
                  className="inline-block text-sm font-bold px-6 py-3 leading-none border rounded-md  bg-blue-800 hover:bg- -blue-900 text-white mt-4 lg:mt-0"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
       
    </section>
  );
}
