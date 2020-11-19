import React from 'react';

function Footer() {
  const footerLink = [
    {
      path: '/',
      lable: 'Home',
    },
    {
      path: '/',
      lable: 'Pricing',
    },
    {
      path: '/',
      lable: 'Developers',
    },
    {
      path: '/',
      lable: 'Terms of Use',
    },
    {
      path: '/',
      lable: 'Privacy Policy',
    },
    {
      path: '/',
      lable: 'Help Center',
    },
  ];
  return (
    <footer className="bg-primary ">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap p-6 text-white">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm md:flex-grow text-center lg:text-left">
            {footerLink.map((link) => (
              <a
                key={link.lable}
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
              >
                {link.lable}
              </a>
            ))} 
          </div>
          <div>
            <p className="text-sm text-center lg:text-right pt-10">
              Unit 3308, High St South Corp Plaza Tower 2<br />
              26th St and 11th Ave, Bonifacio Global City
              <br />
              Taguig 1634 Philippines
            </p>
            <div className="flex  flex-col md:flex-row items-center py-5 justify-center">
              <div className="flex items-center flex-shrink-0 text-white md:mr-6">
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
              <div>© PayMongo 2020</div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
