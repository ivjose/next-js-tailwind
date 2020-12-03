import Image from 'next/image';

export default function LiveRates() {
  const banks = [
    {
      name: 'ACAutoCapital',
      img: 'ACAutoCapital.png',
    },
    {
      name: 'BMO-logo',
      img: 'BMO-logo.png',
    },
    {
      name: 'Desjardins-logo',
      img: 'Desjardins-logo.png',
    },
    {
      name: 'RBC-logo',
      img: 'RBC-logo.png',
    },
    {
      name: 'Scotiabank-logo',
      img: 'Scotiabank-logo.png',
    },
    {
      name: 'TDAF-logo',
      img: 'TDAF-logo.png',
    },
  ];
  return (
    <section  >
      <div className="max-w-screen-lg mx-auto py-5 text-center">
        <h2 className="mt-2  text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          Current Lowest Rates
        </h2>
        <p className="mt-4 mb-10 md:mb-10 max-w-2xl text-xl text-gray-500 mx-auto">
          Here are our lowest Rates available for new and used vehicles
        </p>
      </div>
      <div className="bg-top bg-no-repeat bg-rates-bg bg-cover pb-44">
        <div className="max-w-screen-md mx-auto flex flex-wrap flex-row pb-10">
          <div className="flex-1 max-w-xs mx-auto sm:w-full m-6 py-8 px-4 border-4 rounded-xl shadow-2xl border-green-500 bg-white text-center">
            <h3 className="text-4xl font-bold py-2">Used Vehicle</h3>
            <h3 className="text-4xl text-green-500  font-bold py-2">3.99%</h3>
            <div className="text-xl font-bold ">OAC</div>
            <div className="text-xl font-semibold text-gray-400 py-3">
              -0.56
            </div>
            <div className="text-base font-bold  text-gray-400 ">
              since last month
            </div>
            <a
              href="#"
              className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-14 py-2 border border-transparent rounded-full shadow-xl text-xl font-medium text-white bg-green-500 hover:bg-green-700 "
            >
              Get Started
            </a>
          </div>
          <div className="flex-1 max-w-xs mx-auto sm:w-full m-6 py-8 px-4 border-4 rounded-xl shadow-2xl border-green-500  bg-white text-center">
            <h3 className="text-4xl font-bold py-2">New Vehicle</h3>
            <h3 className="text-4xl text-green-500  font-bold py-2">0%</h3>
            <div className="text-xl font-bold ">OAC</div>
            <div className="text-xl font-semibold text-gray-400 py-3">
              -0.01
            </div>
            <div className="text-base font-bold  text-gray-400 ">
              since last month
            </div>
            <a
              href="#"
              className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-14 py-2 border border-transparent rounded-full shadow-xl text-xl font-medium text-white bg-green-500 hover:bg-green-700 "
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-lg font-bold mb-10">
            We find the best deal at the best bank so you don't have to
          </p>

          <ul className="flex flex-wrap justify-center">
            {banks.map((bank) => (
              <li key={bank.name}className="m-4 h-26 overflow-hidden rounded-lg shadow-lg flex">
                <Image
                  className="h-full w-full m-0 p-0"
                  alt="hero"
                  src={`/banks/${bank.img}`}
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-14 py-2 border border-transparent rounded-full shadow-xl text-xl font-medium text-white bg-green-500 hover:bg-green-700 "
          >
            See all Rates
          </a>
        </div>
      </div>
    </section>
  );
}
