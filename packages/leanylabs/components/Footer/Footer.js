import Image from 'next/image';

function Footer() {
  const footerLink = [
    {
      path: '/',
      label: 'MVP Development',
    },
    {
      path: '/',
      label: 'Remote Team',
    },
    {
      path: '/',
      label: 'Blog',
    },
    {
      path: '/',
      label: 'Case Studies',
    },
    {
      path: '/',
      label: 'Join LeanyLabs',
    },
    {
      path: '/',
      label: 'Privacy Policy',
    },
    {
      path: '/',
      label: 'Terms of Use',
    },
  ];
  return (
    <footer className="bg-blue-900 text-gray-300 py-10 pb-5">
      <div className="flex flex-col md:flex-row  ">
        <div className="w-full md:w-1/3  px-5 mb-5">
          <div className="flex items-center flex-shrink-0 mb-3">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              Tailwind CSS
            </span>
          </div>
          <p className="text-xs">
            LeanyLabs is a web application development company from Lviv Ukraine
            that offers project development and team extension services. We’re
            skilled in Javascript, Node.js, React, AWS, and various other
            technologies.
          </p>
        </div>

        <div className="w-full md:w-1/3 px-5 text-center md:text-left  md:order-3 mb-5">
          <h3 className="font-bold text-base md:mb-10">More Information</h3>
          <nav>
            {footerLink.map((item) => (
              <a
                key={item.label}
                href="#"
                className="font-semibold text-xs mx-2 md:mx-0 md:block leading-6"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="w-full md:w-1/3 px-5 text-center md:order-2 mb-5">
          <h3 className="font-bold text-base md:mb-10">
            Accelerate Your Development
          </h3>
          <div className="text-xs ">just say</div>
          <a href="#" className="flex items-center justify-center pb-3">
            <Image
              className="w-full "
              alt="hero"
              src="/img/emailIcon.svg"
              width="30"
              height="30"
              priority
            />
            <span className="ml-3">hi@leanylabs.com</span>
          </a>
        </div>
      </div>

      <div className="text-center text-xs">
        <div>
          <span className="block sm:inline-block sm:mr-4 ">
            Estonia, Tallinn 15551, Sepapaja tn 6
          </span>
          <span className="block sm:inline-block sm:ml-4 ">
            Ukraine, Lviv 79000, Sadova 2a
          </span>
        </div>
        <div >2020 LeanyLabs OÜ. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
