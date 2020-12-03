import React from 'react';

export default function CtaSection() {
  return (
    <section className="pt-60 pb-72  mx-auto bg-top bg-no-repeat bg-cta bg-cover lg:bg-contain ">
      <div className="text-center">
        <h2 className="mt-2  text-3xl leading-8 font-extrabold tracking-tight  sm:text-5xl  ">
          1 Click Away From Your Dream Car
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Get a car you love, at a payment you can afford
        </p>
        <a
          href="#"
          className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-14 py-2 border border-transparent rounded-full shadow-xl text-xl font-medium text-white bg-green-500 hover:bg-green-700 "
        >
          Apply Now!
        </a>
      </div>
    </section>
  );
}
 