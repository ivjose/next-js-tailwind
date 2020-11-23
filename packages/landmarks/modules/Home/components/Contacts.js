import React from 'react';

export default function Contacts() {
  return (
    <section>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-400 pb-10 title-line">
        CERE UN DEMO
      </h1>
      <div className="w-full sm:w-2/5 mx-auto mt-8 mb-24">
        <p className="pb-5">
          Vrei sa vezi cum functioneaza solutia noastra? Lasa-ne email-ul tau si
          te contactam in cel mai scurt timp pentru o programare.
        </p>

        <form action="">
          <div className="flex w-full flex-col">
            <div className="mb-4  w-full">
              <input
                required
                className=" appearance-none bg-gray-100 rounded w-full py-4 px-3 "
                id="Name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4  w-full">
              <input
                required
                className=" appearance-none bg-gray-100 rounded w-full py-4 px-3 "
                id="email"
                type="text"
                placeholder="E-mail"
              />
            </div>
            <button
              type="submit"
              href="#"
              className="block text-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-color duration-1000 ease-out md:py-4 md:text-lg md:px-10"
            >
              Trimite
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
