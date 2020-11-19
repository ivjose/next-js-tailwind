import Image from 'next/image';
import Button from '../../../components/Button';

export default function HeroBanner() {
  return (
    <div className="container mx-auto flex flex-wrap px-5 md:flex-row flex-col items-center">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded w-full"
          alt="hero"
          src="/img/hero-banner-img.png"
          width="520"
          height="550"
        />
      </div>
      <div className="w-full md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font md:text-left md:text-5xl sm:text-4xl text-3xl mb-4 text-center font-medium text-gray-900">
          <span>Get paid online</span>
          <br className="inline-block" />
          <span>without the hassle</span>
        </h1>
        <p className="mb-8 leading-relaxed">
          PayMongo makes it easy for you to run an online business. We help you
          get paid by your customers, any time and anywhere.
        </p>
        <div className="flex justify-center md:mb-0 mb-10">
          <Button textColor="white" bgColor="primary">
            Get started for free
          </Button>
        </div>
      </div>
    </div>
  );
}
