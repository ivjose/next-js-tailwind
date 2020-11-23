import Image from 'next/image';
import TitleHeader from '../../../components/TitleHeader';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'MVP Development',
      description:
        'Build your idea from scratch and launch your application to the market. We would take care of all the technical challenges.',
      img: 'service-1.svg',
    },
    {
      id: 2,
      title: 'Remote Team',
      description:
        'Boost your team with our experts in Web development. We focus on improving your business by software, not just deliver high-quality code.',
      img: 'service-2.svg',
    },
  ];

  return (
    <section>
      <TitleHeader title="Our Services" />

      <div className="flex flex-wrap pb-20">
        {services.map((service, index) => (
          <div key={service.id} className="w-full md:w-1/2 text-center  mb-6">
            <a
              href="#"
              className={`${
                index % 2 == 0 ? 'md:mr-3 ' : 'md:ml-3'
              }  p-5 md:p-16 block border hover:border-blue-900 rounded-xl shadow-lg hover:shadow  transition duration-300 ease-out  h-full`}
            >
              <Image
                className="w-full object-cover lg:w-full lg:h-full mx-auto "
                alt="hero"
                src={`/img/${service.img}`}
                width="362"
                height="245"
                priority
              />
              <h4 className="text-xl text-green-600 text-center mb-10">
                {service.title}
              </h4>
              <p className="text-left">{service.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
