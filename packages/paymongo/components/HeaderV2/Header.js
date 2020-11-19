import React from 'react';
import PropTypes from 'prop-types';

function Header({ mode = "dark"}) {
  const [toggle, setToggle] = useState(false);
 
  const navColor = {
    light: {
      baseBg: 'bg-white',
      textColor: '',
    },
    dark: {
      baseBg: 'bg-gray-900',
      iconColor: 'text-gray-500 hover:text-white focus:text-white',
      textColor: 'text-white hover:bg-gray-800',
    },
  };

  return (
    <header
      className={`${navColor[mode].baseBg} sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3`}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img className="h-8" src="/img/logo-inverted.svg" alt="Workcation" />
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setToggle((prevState) => !prevState)}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {toggle ? (
                <path
                  fillFule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillFule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          toggle ? 'block' : 'hidden'
        } px-2 pt-2 pb-4 sm:flex sm:p-0`}
      >
        <a
          href="#"
          className="block px-2 py-1 font-semibold rounded text-white hover:bg-gray-800"
        >
          List your property
        </a>
        <a
          href="#"
          className="mt-1 block px-2 py-1 font-semibold rounded text-white hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Trips
        </a>
        <a
          href="#"
          className="mt-1 block px-2 py-1 font-semibold rounded text-white hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Messages
        </a>
      </nav>
    </header>
  );
}

Header.propTypes = {
    mode: PropTypes.string
};

export default Header;
