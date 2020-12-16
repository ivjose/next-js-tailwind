import Image from 'next/image';

export default function Teams() {
  const teams = [
    {
      name: 'Home Sonnet',
      img: 'logo-1.png',
      width: 191,
      height: 160,
      size: 'w-1/3',
    },
    {
      name: 'Black Book',
      img: 'logo-2.png',
      width: 191,
      height: 160,
      size: 'w-1/3',
    },
    {
      name: 'Black Book',
      img: 'logo-3.png',
      width: 191,
      height: 160,
      size: 'w-1/3',
    },
    {
      name: 'Car Pages',
      img: 'logo-4.png',

      width: 191,
      height: 160,
      size: 'w-1/3',
    },
    {
      name: 'Home Borrowell',
      img: 'logo-5.png',
      width: 327,
      height: 117,
      size: 'w-1/2',
    },
    {
      name: 'Home Borrowell',
      img: 'logo-6.png',
      width: 327,
      height: 117,
      size: 'w-1/2',
    },
    {
      name: 'Home Borrowell',
      img: 'logo-7.png',
      width: 327,
      height: 117,
      size: 'w-1/2',
    },
    {
      name: 'Home Borrowell',
      img: 'logo-8.png',
      width: 327,
      height: 117,
      size: 'w-1/2',
    },
  ];

  return (
    <section className="relative show-teams-height">
      <div className="max-w-2xl md:max-w-full lg:max-w-7xl  mx-auto pt-80 md:pt-60 lg:pt-60 2xl:pt-80 relative z-10 px-5">
        <h2 className="text-5xl lg:text-7xl font-extrabold py-5 md:py-10 md:mt-10 text-white inline-block relative pl-4  pr-10 transform -skew-x-12">
          <span className="title-left-line bg-white absolute top-0 left-0 w-full h-1  " />
          TEAMS
        </h2>

        <div className="flex flex-wrap mx-auto max-w-6xl pt-0 xl:pt-5 ">
          <div className="flex flex-col w-full md:w-5/12 ">
            <div className="mx-auto hidden md:inline-block mt-10">
              <Image src="/teams/icon-1.png" width="180" height="180" />
            </div>
            <ul className="flex flex-wrap w-full   mx-auto  px-10 lg:px-0">
              {teams.map((team) => (
                <li
                  key={team.img}
                  className="flex justify-center items-center mb-6 w-1/4"
                >
                  <div className="flex border-2 border-white rounded-full mx-1.5">
                    <Image
                      className="mx-auto"
                      src={`/teams/${team.img}`}
                      width="80"
                      height="80"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-7/12 text-center ">
            <div className="max-w-lg md:max-w-2xl w-full mx-auto px-10 lg:px-5">
              <Image
                alt="hero"
                src="/img/team-1.png"
                width="728"
                height="466"
              />
            </div>
            <p className="text-white text-base md:text-2xl italic">
              JESS NO LIMIT | DYLAND PROS | GOGOGOY | VY GAMING | CINDY GULLA
            </p>
          </div>
        </div>
      </div>
      <Image
        className="object-center object-cover pointer-events-none"
        alt="hero"
        src="/img/red-bg.png"
        layout="fill"
        style={{ objectFit: 'cover' }}
      />
    </section>
  );
}
