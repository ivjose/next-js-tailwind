import Image from 'next/image';
import TitleHeader from '../../../components/TitleHeader';

export default function OurBlog() {
  const caseStudies = [
    {
      id: 1,
      title: 'MVP Development Explained',
      description: `You'll find the complete guide on a minimum viable product, why it's necessary, the primary purpose of building one, along with tips and examples.`,
      img: 'blog-img-1.png',
      date: 'July 29, 2020',
      readTime: 20,
    },
    {
      id: 2,
      title:
        'React, Angular or Vue: Choosing the Right Framework for Your Project',
      description:
        'React is still the most popular, Vue is the king in Asia, Angular is losing its momentum. We have a detailed, up-to-date comparison for 2020.',
      img: 'blog-img-2.png',
      date: 'July 15, 2020',
      readTime: 11,
    },
    {
      id: 3,
      title:
        'Serverless, Microservices, or Monolith: Choosing Back End Architecture for Your Startup',
      description:
        'Monolith for speed and simplicity, Microservices for huge applications and high loads, Serverless for inconsistent loads, and small things. Find out why.',
      img: 'blog-img-3.png',
      date: 'July 03, 2020',
      readTime: 14,
    },
  ];
  return (
    <section className="pb-20">
      <TitleHeader title="Our Blog" />

      {caseStudies.map((caseStudie) => (
        <div
          key={caseStudie.id}
          className="flex flex-wrap items-center  flex-col md:flex-row py-10"
        >
          <a href="#" className=" w-full md:w-2/6">
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
          <div className="flex-1 w-full pt-2 md:pt-0 md:px-5">
            <h3 className="text-2xl md:text-3xl text-green-600">{caseStudie.title}</h3>
            <span className="block py-4">
              {caseStudie.date} • {caseStudie.readTime}
            </span>
            <p className="text-lg">{caseStudie.description}</p>

         
          </div>
        </div>
      ))}
    </section>
  );
}
