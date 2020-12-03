import Image from 'next/image';

export default function HeroLanding() {
  return (
    <section className="flex max-w-screen-xl mx-auto flex-wrap items-center px-5 py-16 md:pt-20 md:pb-28">
      <div className="flex flex-wrap w-full md:w-2/5">
        <h1 className="font-extrabold text-5xl leading-snug">
          Car Loans. Simplified. <br /> Any
          <span className="text-green-500"> Way.</span>
        </h1>
        <a
          href="#"
          className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-14 py-2 border border-transparent rounded-full shadow-xl text-xl font-medium text-white bg-green-500 hover:bg-green-700 "
        >
          Apply Now
        </a>
      </div>
      <div className="w-full md:w-3/5 md:-mt-0 -mt-10 md:pl-20">
        <Image
          className=" block"
          alt="hero"
          src="/img/home-hero-rs.png"
          width="656"
          height="470"
          layout="responsive"
        />
      </div>
    </section>
  );
}
