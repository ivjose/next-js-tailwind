import Image from 'next/image';

export default function Charity() {
  const charitys = [
    {
      name: 'Home Sonnet',
      img: 'logo-1.png',
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
      img: 'logo-6.png',
      width: 327,
      height: 117,
      size: 'w-1/2',
    },
    {
      name: 'Home Borrowell',
      img: 'logo-5.png',
      width: 327,
      height: 117,
      size: 'w-1/2',
    },
  ];

  return (
    <section className="relative">
      <div className="flex flex-wrap mx-auto max-w-6xl ">
        <div className="w-full lg:w-2/6 ">
          <div className="absolute show-charity-char text-left  top-full lg:top-16 left-0 lg:-left-24 ">
            <Image
              alt="hero"
              src="/img/char-girl.png"
              width="822"
              height="1211"
            />
          </div>
        </div>
        <div className="w-full lg:w-4/6 text-right px-10">
          <div className="lg:pl-56 mb-24">
            <h2 className="text-5xl lg:text-7xl font-extrabold py-5 md:py-10 md:mt-10 text-black inline-block relative pl-10 transform -skew-x-12">
              <span className="title-right-line bg-black absolute top-0 left-0 w-full h-1  " />
              CHARITY
            </h2>
            <p className="text-lg ">
              While we celebrate the launch of Wild Rift, Riot Games Southeast
              Asia is donating US$60,000 to five organisations in the region
              that provide better education and living circumstances to
              underprivileged children.
            </p>
            <a href="#" className="text-blue-600">
              Find out more
            </a>
          </div>
          <ul className="flex flex-wrap   px-10 lg:px-0">
            {charitys.map((charity) => (
              <li
                key={charity.name}
                className={`flex justify-center items-center mb-6 ${charity.size}`}
              >
                <Image
                  className="mx-auto"
                  alt={charity.name}
                  src={`/img/${charity.img}`}
                  width={charity.width}
                  height={charity.height}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
