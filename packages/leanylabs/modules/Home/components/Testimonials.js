import Image from 'next/image';
import TitleHeader from '../../../components/TitleHeader';

export default function Testimonials() {
  const testimonials = [
    {
      id: 3,
      title:
        'Serverless, Microservices, or Monolith: Choosing Back End Architecture for Your Startup',
      description:
        'Monolith for speed and simplicity, Microservices for huge applications and high loads, Serverless for inconsistent loads, and small things. Find out why.',
      img: 'aspecto_michael_haberman.png',
    },
  ];
  return (
    <section className="mb-24">
      <TitleHeader title="Testimonials" />
      <div className="flex flex-wrap flex-col md:flex-row py-10">
        <a href="#" className="md:block flex flex-row flex-wrap mb-5">
          <div className="w-20 md:w-full md:text-center">
            <Image
              className="w-full mx-auto rounded-md"
              alt="hero"
              src="/img/aspecto_michael_haberman.png"
              width="160"
              height="160"
              priority
            />
          </div>
          <div className="text-left md:text-center pl-4 md:pl-0">
            <h3 className="text-green-600 text-xl pt-2">Michael Haberman</h3>
            <div>CTO & Co-founder at Aspecto</div>
            <div>Tel-Aviv-Yafo, Israel</div>
          </div>
        </a>
        <div className="flex-1 w-full md:px-5 md:border-l">
          <q className=" text-xl mb-3 font-normal block">
            I don’t see them as an outsourced solution, but more as an
            integrated part of our company.
          </q>
          <blockquote>
            <p className="mb-3">
              I get the feeling that I can trust them and I’m really confident
              in their ability to deliver and make the right decision.
            </p>

            <p className="mb-3">
              I am very impressed with the fact that I don’t need to predefine
              everything into a lot of details. I can point them in the right
              direction, and they will start to pursue it, and ask me whatever
              they need to in order to achieve the goal.
            </p>
            <p className="mb-3">
              It is a very low touch engagement in a good way. It is not that
              they don’t communicate with us, but more in the way that they
              don’t require a lot of maintenance.
            </p>
          </blockquote>
          <div>
            Technologies
            <br />
            Amazon Web Services, Microservice Architecture, Node.js, React.js
          </div>
          <div className="text-center mt-4 sm:mt-10">
            <a
              href="#"
              className="inline-block text-sm font-bold px-6 py-3 leading-none border rounded-md  bg-blue-800 hover:bg- -blue-900 text-white mt-4 lg:mt-0"
            >
              Full Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
