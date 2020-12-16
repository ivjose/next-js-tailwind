import Image from 'next/image';

export default function LiveStream() {
  return (
    <section className="relative show-livestream-height py-32">
      <div className="max-w-2xl md:max-w-full lg:max-w-7xl  mx-auto pt-80 sm:pt-60 xl:pt-72 relative z-10 px-5">
        <h2 className="text-5xl lg:text-7xl font-extrabold py-5 md:py-10 md:mt-10 text-white inline-block relative pl-4  pr-10 transform -skew-x-12">
          <span className="title-left-line bg-white absolute top-0 left-0 w-full h-1  " />
          LIVESTREAM
        </h2>

        

        <div className="w-full mx-auto  sm:px-10   text-center">
        <a
          href="#"
          className="inline-block px-8 py-2 shadow-sm text-base font-medium  bg-white hover:bg-gray-100 transform -skew-x-12 mb-10"
        >
          <span className="font-bold text-ms transform skew-x-12">
            ENGLISH
          </span>
        </a>
          <div className="relative h-0 shadow-xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className=" w-full h-full absolute top-0 left-0"
              src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
      </div>
      <div className=" w-full absolute bottom-0 left-0 z-10">
        <Image
          alt="hero"
          src="/img/line-btm-w.png"
          layout="responsive"
          width="1679"
          height="19"
        />
      </div>
      <Image
        className="object-top object-cover pointer-events-none"
        alt="hero"
        src="/img/bg-livestream.png"
        layout="fill"
        style={{ objectFit: 'cover' }}
      />
      
    </section>
  );
}
