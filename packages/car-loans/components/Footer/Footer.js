import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    {
      label: 'APPLY NOW',
      path: '/',
      highlighted: true,
    },
    {
      label: 'Insurance',
      path: '#',
    },
    {
      label: 'Credit Score',
      path: '#',
    },
    {
      label: 'Credit Refresh',
      path: '#',
    },
    {
      label: 'Auto Loans',
      path: '#',
    },
  ];

  const resources = [
    {
      label: 'Car Loan Calculator',
      path: '/',
    },
    {
      label: 'Areas We Finance',
      path: '#',
    },
    {
      label: 'About Us',
      path: '#',
    },
    {
      label: 'Blog',
      path: '#',
    },
    {
      label: 'FAQ',
      path: '#',
    },
    {
      label: 'Contact Us',
      path: '#',
    },
    {
      label: 'Terms of Use',
      path: '#',
    },
    {
      label: 'Privacy Policy',
      path: '#',
    },
  ];
  return (
    <footer className="bg-top bg-no-repeat bg-footer bg-cover pt-32">
      <div className="flex flex-wrap max-w-sm lg:max-w-screen-xl mx-auto">
        <div className="w-full lg:w-1/4 flex flex-wrap flex-col lg:flex-initial text-center lg:text-left mb-6 px-5">
          <a
            href="#"
            className="flex items-center justify-center lg:justify-start flex-shrink-0  hover:opacity-70 text-green-500  mb-4"
          >
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
          </a>
          <a href="#" className="text-lg mb-2">
            info@carloanscanada.com
          </a>
          <a href="#" className="text-green-500 text-2xl ">
            +1 888 536-4210
          </a>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col text-center lg:text-left px-5 mb-6">
          <h4 className="font-bold text-xl leading-tight w-full">
            Quick Links
          </h4>
          <div className="flex flex-col w-full mt-5 ">
            {quickLinks.map((link) => (
              <a
                className={`${
                  link.highlighted && 'text-green-500'
                } my-1 hover:text-green-500`}
                href="http://"
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col text-center lg:text-left px-5 mb-6">
          <h4 className="font-bold text-xl leading-tight w-full">Resources</h4>
          <div className="flex flex-col w-full mt-5 ">
            {resources.map((link) => (
              <a
                className={`${
                  link.highlighted && 'text-green-500'
                } my-1 hover:text-green-500`}
                href="http://"
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/4 flex flex-wrap flex-col lg:flex-initial text-center lg:text-left px-5">
          <h4 className="font-bold text-xl leading-tight w-full">
            Subscribe To Our Newsletter
          </h4>

          <div>
            <div className="mt-5 relative rounded-md ">
              <input
                type="text"
                name="price"
                id="price"
                className="focus:outline-none focus:ring focus:ring-green-300  block w-full py-3 pl-7 pr-12  border border-gray-200 rounded-md"
                placeholder="Enter your email"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div className="p-2 cursor-pointer flex justify-center items-center">
                  <Image
                    className="w-auto h-auto"
                    alt="Submit"
                    src="/icon_submit.png"
                    width="25"
                    height="20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 text-center pt-5 pb-8 text-sm text-gray-400">
        © 2020{' '}
        <span className="text-green-500">Car Loans Canada All rights</span>{' '}
        reserved
      </div>
    </footer>
  );
}
