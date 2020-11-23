import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Vinzi repede',
      description: 'Scurtezi timpul de vanzare al proiectului.',
      img: 'vinzi.png',
    },
    {
      title: 'Costuri previzibile',
      description: 'SAi un singur buget pentru toata partea de markering.',
      img: 'costuri.png',
    },
    {
      title: 'Performanta asumata',
      description: 'Scurtezi timpul de vanzare al proiectului.',
      img: 'performanta.png',
    },
  ];
  return (
    <section className="flex flex-wrap mx-auto pt-16 pb-32">
      {services.map((service) => (
        <div key={service.title} className="mx-auto sm:w-1/3  text-center pb-10">
          <Image
            className="w-full object-cover lg:w-full lg:h-full"
            alt="hero"
            src={`/img/${service.img}`}
            width="110"
            height="130" 
            priority
          />
          <h3 className="text-2xl font-bold py-5">{service.title}</h3>
          <p className="text-base text-gray-500">{service.description}</p>
        </div>
      ))}
    </section>
  );
}
