import Image from 'next/image';
import TitleHeader from '../../../components/TitleHeader';

export default function WhyLeanLabs() {
  const details = [
    {
      id: 1,
      title: 'Narrow Tech Focus',
      description:
        'LeanyLabs focused on Javascript Application Development. It helps with building highly-skilled dedicated teams and attracting rare professionals.',
    },
    {
      id: 2,
      title: 'Great Developers',
      description:
        'The most valuable part of our company is the people. We take every hire seriously and usually conduct around 20 interviews for each position.',
    },
    {
      id: 3,
      title: 'More Than Just Agile',
      description:
        'Getting feedback fast is crucial for startups. Thanks to CI/CD and automated testing, we can speed up development cycles. Critical features can go live in hours, way ahead of the usual sprints.',
    },
    {
      id: 4,
      title: 'Build to Adapt',
      description:
        'We know that startups must stay dynamic to thrive. In situations of extreme uncertainty, we favor software designs with lower costs of changes.',
    },
    {
      id: 5,
      title: 'Zero Communication Overhead',
      description:
        'Talk directly with your team members when you need to. We don`t like micro-management and wasting time on pointless internal meetings.',
    },
    {
      id: 6,
      title: 'Always There to Help You',
      description:
        'Building strong, long-lasting relations is crucial for our business. We want you to succeed and grow with us. We`ll do our best to make it happen.',
    },
  ];
  return (
    <section>
      <TitleHeader title="Why LeanyLabs" />
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/5 text-lg md:pr-10">
          <p className="mb-5">
            LeanyLabs aims to eliminate struggles startups face with software
            development. By specializing solely in web applications, we always
            stay on the edge of technologies and best practices required to
            provide exceptional services.
          </p>

          <p className="mb-5">
            Our experts shine in rapid prototyping and MVP development to
            quickly validate the idea and launch your application to the market.
          </p>
        </div>
        <div className="w-full md:w-2/5">
          <div className="md:-mt-16 text-center">
            <Image
              className="w-full object-cover lg:w-full lg:h-full"
              alt="hero"
              src="/img/benefits_product_iteration.svg"
              width="468"
              height="384"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mb-24">
        {details.map((item) => (
          <div key={item.id} className="flex flex-row w-full sm:w-1/2 mb-7">
            <div className=" mr-4">
              <Image
                className="w-full lg:w-full lg:h-full"
                alt="hero"
                src="/img/check.svg"
                width="37"
                height="37" 
              />
            </div>
            <div className="flex-auto w-full">
              <h3 className="font-bold mb-5 text-xl">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
