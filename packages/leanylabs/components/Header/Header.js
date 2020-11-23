import { useState } from 'react';
import PropTypes from 'prop-types';

function Header({ mode = 'dark' }) {
  const [toggle, setToggle] = useState(false);

  const urlLink = [
    {
      id: 1,
      path: '/',
      label: 'MVP Development',
    },
    {
      id: 2,
      path: '/',
      label: 'Remote Team',
    },
    {
      id: 3,
      path: '/',
      label: 'Case Studies',
    },
    {
      id: 4,
      path: '/',
      label: 'Blog',
    },
  ];

  return (
    <header className="container-fluid mx-auto shadow-sm">
      <nav className="flex items-center justify-between flex-wrap px-14 py-2">
        <a href="#" className="flex items-center flex-shrink-0 mr-6 hover:opacity-70">
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
        <div className="block lg:hidden">
          <button
            onClick={() => setToggle((prevState) => !prevState)}
            className="flex items-center px-2 py-1 border rounded text-primary border-primary hover:text-primary-dark hover:border-primary-dark focus:outline-none "
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {toggle ? (
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            toggle ? 'block' : 'hidden'
          } w-full  flex-grow lg:flex lg:items-center lg:w-auto  sm:hidden`}
        >
          <div className="text-sm lg:flex-grow lg:text-right ">
            {urlLink.map((link) => (
              <a
                key={link.id}
                href="#responsive-header"
                className="block mt-4 text-sm lg:inline-block lg:mt-0  mr-10 "
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm font-bold px-6 py-3 leading-none border rounded-md  bg-green-600  hover:bg-green-500 text-white mt-4 lg:mt-0"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  mode: PropTypes.string,
};

export default Header;
