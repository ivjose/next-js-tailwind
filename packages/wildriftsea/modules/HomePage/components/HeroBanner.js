import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <Image
        className="object-center object-cover pointer-events-none"
        alt="hero"
        src="/img/bg-home.jpg"
        layout="fill"
        style={{ objectFit: 'cover' }}
      />
      <div className="relative z-10 text-center">
        <Image
          className="mx-auto"
          alt="hero"
          src="/img/showmatch-logo.png"
          width="422"
          height="334"
        />
        <h3 className="text-white py-8 text-4xl font-bold ">
          12 - 13 DECEMBER 2020
        </h3>
        <a
          href="#"
          className="inline-block px-10 py-4 shadow-sm text-base font-medium  bg-white hover:bg-gray-100 transform -skew-x-12"
        >
          <span className="font-bold text-lg transform skew-x-12">
            WATCH LIVESTREAM
          </span>
        </a>
      </div>
    </section>
  );
}
