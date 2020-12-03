import Image from 'next/image';

export default function Testimonial() {
  return (
    <section className="pb-16">
      <div className="text-center">
        <h2 className="mt-2  text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl text-green-500">
          What our clients say
        </h2>
        <p className="mt-4 mb-10 md:mb-10 max-w-2xl text-xl text-gray-500 mx-auto">
          Real People, Real Cars, Real Happy
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-wrap ">
        <div className="w-full md:w-1/2 px-5">
          <Image
          className="rounded-xl"
            alt="Img"
            src="/img/testimonial-img.png"
            width="586"
            height="378"
            layout="responsive"
          />
        </div>
        <div className="w-full md:w-1/2 p-5">
          <p className="italic font-light text-lg md:text-xl pb-6">
            Highly recommend Car Loans Canada!!! They are awesome. They made the
            experience of buying a car enjoyable. I'm leaving very satisfied
            with my purchase. Everyone I dealt with was super polite and
            professional with getting me all set up in my vehicle. Only great
            things to say about this experience at Car Loans Canada. Once again,
            HIGHLY recommend these guys!
          </p>
          <p className="font-bold">
            Cassidy <br /> Toronto, ON
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center py-4 md:py-8">
          <span className="rounded-full h-4 w-4 block bg-green-500 mx-1" />
          <span className="rounded-full h-4 w-4 block bg-green-200 mx-1" />
          <span className="rounded-full h-4 w-4 block bg-green-200 mx-1" />
      </div>
    </section>
  );
}
