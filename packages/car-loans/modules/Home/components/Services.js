import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Financing Your Way',
      description:
        'Secure your financing easily from your tablet or your phone',
      icon: {
        img: 'home-why-us-1-rs.png',
        width: 60,
        height: 60,
      },
    },
    {
      title: 'Shop Any Time',
      description: 'Browse our inventory from the comfort of your living room',
      icon: {
        img: 'home-why-us-2-rs.png',
        width: 57,
        height: 60,
      },
    },
    {
      title: 'Delivery Anywhere',
      description:
        'You choose if you want to visit the dealership to pick up your new car or if you want it delivered to your home',
      icon: {
        img: 'home-why-us-3-rs.png',
        width: 69,
        height: 60,
      },
    },
    {
      title: 'Safe & Secure',
      description: 'Your information is protected with Bank Level Encryption',
      icon: {
        img: 'home-why-us-4-rs.png',
        width: 74,
        height: 60,
      },
    },
    {
      title: 'Recommendations',
      description:
        'Receive Tips & Recommendations to help you with your Credit Journey',
      icon: {
        img: 'home-why-us-5-rs.png',
        width: 49,
        height: 60,
      },
    },
    {
      title: 'No Impact',
      description:
        'Get your free credit score without a hit to your credit at the start of the process',
      icon: {
        img: 'home-why-us-6-rs.png',
        width: 62,
        height: 60,
      },
      link: [
        {
          label: 'Get Your free Credit Score',
          link: '/',
        },
      ],
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2  text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why choose us?
          </h2>
          <p className="mt-4 mb-10 md:mb-20 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Through transparency we deliver a car buying journey you can trust
          </p>
          <div className="flex flex-wrap ">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-wrap   w-full md:w-1/2 lg:w-1/3 px-5 text-center md:text-left mb-10"
              >
                <div className="md:w-auto w-full md:flex-shrink-0 md:mr-5">
                  <Image
                    alt={service.title}
                    src={`/img/${service.icon.img}`}
                    width={service.icon.width}
                    height={service.icon.height}
                  />
                </div>
                <div className="md:flex-1 w-full">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
