

export default function HeroBanner() {
  return (
    <section className="min-h-screen text-center flex flex-col flex-wrap justify-center items-center banner-height ">
      <div className="m-full md:w-2/3 -mt-16">
        <h4 className="text-lg md:text-xl font-bold mb-8">Custom Web Application Development</h4>
        <h1 className="text-xl sm:text-4xl  lg:text-7xl font-bold ">Supercharge <br/><span className="text-green-500">Your Team</span></h1>

        <div className="mt-20 mb-6 text-sm">Have an Idea?</div>
        <a
          href="#"
          className="inline-block text-sm font-bold px-6 py-3 leading-none border rounded-md  bg-green-600  hover:bg-green-500 text-white mt-4 lg:mt-0"
        >
          Tell us More
        </a>
      </div>
    </section>
  );
}
