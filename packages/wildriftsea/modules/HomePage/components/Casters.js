import Image from 'next/image';

export default function Casters() {
  const casters = ['ARCTIKUNO', 'RIKUCASTS', 'ASURAI', 'GGSPHERE'];

  const countries = ['EN', 'BM', 'TH', 'ID', 'KH', 'VN', 'MM', 'PH'];

  return (
    <section className="relative">
      <div className="max-w-2xl md:max-w-full lg:max-w-7xl  mx-auto  relative z-10 px-5">
        <div className="flex flex-wrap flex-col-reverse md:flex-row mx-auto max-w-6xl pt-0 xl:pt-5 ">
          <div className="w-full md:w-7/12 text-center  ">
            <div className="max-w-lg md:max-w-2xl w-full mx-auto px-10 lg:px-5">
              <Image
                alt="hero"
                src="/teams/team-ph.png"
                width="780"
                height="463"
              />

              <ul className="flex flex-wrap w-full pt-8  mx-auto  px-10 lg:px-0">
                {casters.map((caster) => (
                  <li
                    key={caster}
                    className="flex  py-3 items-start mb-2 w-1/2 lg:w-1/4 relative transform  -skew-x-12 font-semibold"
                  >
                    <span className="title-sub-line bg-black absolute top-0 left-0 w-10/12 h-0.5 text-left " />
                    {caster}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-white text-base md:text-2xl italic">
              JESS NO LIMIT | DYLAND PROS | GOGOGOY | VY GAMING | CINDY GULLA
            </p>
          </div>
          <div className="flex flex-col w-full md:w-5/12 px-10">
            <div className="text-right">
              <h2 className="text-5xl lg:text-7xl font-extrabold py-5 md:py-10 md:mt-10 text-black inline-block relative pl-10  transform -skew-x-12">
                <span className="title-right-line bg-black absolute top-0 left-0 w-full h-1  " />
                CASTERS
              </h2>
            </div>
            <div className="mb-5 text-xl font-semibold italic text-center">
              FILIPINO
            </div>
            <ul className="flex flex-wrap w-full   mx-auto mb-6">
              {countries.map((country) => (
                <li
                  key={country}
                  className="flex justify-center items-center mb-2 w-1/4"
                >
                  <div className="flex justify-center items-center w-12 h-12 border-2 border-black hover:bg-black hover:text-white rounded-full">
                    {country}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
