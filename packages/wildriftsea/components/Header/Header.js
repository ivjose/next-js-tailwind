import Image from 'next/image';

export default function Header() {
  const navLinks = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'News',
      path: '/News',
    },
    {
      label: 'Showmatch',
      path: '/Showmatch',
    },
    {
      label: 'Charity',
      path: '/Charity',
    },
    {
      label: 'Teams',
      path: '/Teams',
    },
    {
      label: 'Casters',
      path: '/Casters',
    },
    {
      label: 'Livestream',
      path: '/Livestream',
    },
  ];
  return (
    <header className="fixed w-full bg-gray-800 bg-opacity-80 z-20">
      <div className="flex justify-between items-center px-10 py-3 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#" className="flex">
            <Image
              className="h-full w-full m-0 p-0"
              alt="hero"
              src="/img/showmatch-logo.png"
              width="55"
              height="44"
            />
          </a>
        </div>

        <nav className=" space-x-20 hidden lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href="#"
              className="text-base font-bold italic text-white border-b-2 border-white hover:text-gray-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" className="p-2">
            <svg width="14" height="14" class="" viewBox="0 0 16 16">
              <path
                d="M7.992 0C3.576 0 0 3.584 0 8s3.576 8 7.992 8C12.416 16 16 12.416 16 8s-3.584-8-8.008-8zm5.544 4.8h-2.36c-.256-1-.624-1.96-1.104-2.848A6.424 6.424 0 0 1 13.536 4.8zM8 1.632A11.27 11.27 0 0 1 9.528 4.8H6.472A11.27 11.27 0 0 1 8 1.632zM1.808 9.6A6.594 6.594 0 0 1 1.6 8c0-.552.08-1.088.208-1.6h2.704A13.212 13.212 0 0 0 4.4 8c0 .544.048 1.072.112 1.6H1.808zm.656 1.6h2.36c.256 1 .624 1.96 1.104 2.848A6.39 6.39 0 0 1 2.464 11.2zm2.36-6.4h-2.36a6.39 6.39 0 0 1 3.464-2.848A12.52 12.52 0 0 0 4.824 4.8zM8 14.368A11.27 11.27 0 0 1 6.472 11.2h3.056A11.27 11.27 0 0 1 8 14.368zM9.872 9.6H6.128A11.77 11.77 0 0 1 6 8c0-.544.056-1.08.128-1.6h3.744C9.944 6.92 10 7.456 10 8s-.056 1.072-.128 1.6zm.2 4.448a12.52 12.52 0 0 0 1.104-2.848h2.36a6.424 6.424 0 0 1-3.464 2.848zM11.488 9.6c.064-.528.112-1.056.112-1.6s-.048-1.072-.112-1.6h2.704c.128.512.208 1.048.208 1.6s-.08 1.088-.208 1.6h-2.704z"
                fill="#E8E8E8"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
