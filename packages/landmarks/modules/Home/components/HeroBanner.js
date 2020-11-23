import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="flex flex-wrap flex-col-reverse  sm:flex-row items-center justify-center">
      <div className="w-full sm:w-5/12 xl:w-2/5">
        <h1 className="text-3xl md:text-5xl">
          <span className="block">BUILD ON</span>
          <span className="block font-bold">TECHNOLOGY</span>
        </h1>
        <p className="leading-normal py-6">
          Cea mai performanta solutie integrata de generare leaduri pentru
          real-estate.
        </p>

        <a
          href="#"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-color duration-1000 ease-out md:py-4 md:text-lg md:px-10"
        >
          CERE UN DEMO
        </a>
      </div>

      <div className="w-full text-center sm:w-7/12  xl:w-3/5">
        <Image
          className="w-full object-cover lg:w-full lg:h-full"
          alt="hero"
          src="/img/hero-banner-img.png"
          width="575"
          height="555"
          sizes="40vw"
          priority
        />
      </div>
    </section>
  );
}
