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
    <footer className="max-w-screen-xl mx-auto px-4 md:px-10">
      <div className="flex flex-col text-left">
        <div className="w-full py-4">
          <div className="flex items-center flex-shrink-0  md:mr-6">
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
        </div>
        <hr />
        <div className="w-full py-4">© 2020 Landmarks. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
