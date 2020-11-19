import Image from 'next/image';
import Button from '../../../components/Button';

export default function SupportBusiness() {
  return (
    <div className="max-w-screen-md mx-auto flex flex-wrap mb-4">
      <div className="w-full md:w-2/5 px-2 text-primary-dark md:text-left text-center">
        <h1 className="title-font  sm:text-4xl text-3xl mb-4  font-medium text-gray-900">
          PayMongo supports businesses of all sizes
        </h1>
        <p className="mb-8 leading-relaxed">
          Whether you are starting up or venturing to larger markets, we have
          got you covered.
        </p>
        <Button textColor="white" bgColor="primary">
          Get started for free
        </Button>
        <a href="http://" className="w-full block my-6">Learn more about our pricing</a>
      </div>
      <div className="w-full md:w-3/5 px-2 text-center">
        <Image
          className="mx-auto w-full"
          alt="hero"
          src="/img/business-size-bg.png"
          width="350"
          height="380"
        />
        <div className="flex items-end -mt-24">
          <div className="w-1/3 px-2 text-center">
            <Image
              className="w-full"
              alt="hero"
              src="/img/freelance-img.png"
              width="60"
              height="63"
            />
            <p>Freelancers and online sellers</p>
          </div>
          <div className="w-1/3 px-2 text-center">
            <Image
              className="w-full"
              alt="hero"
              src="/img/sme-img.png"
              width="65"
              height="96"
            />
            <p> Small to medium enterprises</p>
          </div>
          <div className="w-1/3 px-2 text-center">
            <Image
              className="w-full"
              alt="hero"
              src="/img/corporate-img.png"
              width="96"
              height="110"
            />
            <p>Large corporations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
