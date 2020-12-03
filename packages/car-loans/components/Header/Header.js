import React from 'react';

export default function Header() {
  const routes = [
    {
      label: 'Current Rates',
      path: '/current-rates',
    },
    {
      label: 'Credit Score',
      path: '/credit-score',
    },
    {
      label: 'Insurance',
      path: '/insurance',
    },
    {
      label: 'Resources',
      path: '/resources',
      subRoutes: [
        {
          label: 'Car Loan Calculator',
          path: '/Car Loan Calculator',
        },
        {
          label: 'Areas We Finance',
          path: '/Car Loan Calculator',
        },
        {
          label: 'Auto Loans',
          path: '/Car Loan Calculator',
        },
        {
          label: 'About',
          path: '/About',
        },
        {
          label: 'Blog',
          path: '/Blog',
        },
        {
          label: 'FAQ',
          path: '/FAQ',
        },
        {
          label: 'Contact Us',
          path: '/Contact Us',
        },
      ],
    },
  ];

  return (
    <header className="relative bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
          <div className="flex justify-start ">
            <a href="#" className="flex items-center flex-shrink-0 mr-6 hover:opacity-70 text-green-500 ">
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
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            {routes.map((item) => {
              if (item.subRoutes) {
                return (
                  <div className="relative" key={item.label}>
                    <button
                      type="button"
                      className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span>{item.label}</span>

                      <svg
                        className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                );
              }

              return (
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                  key={item.label}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-full shadow-xl text-base font-medium text-white bg-green-500 hover:bg-green-700 "
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
