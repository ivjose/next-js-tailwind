import Image from 'next/image';

export default function Statistic() {
  const statistic = [
    {
      count: 200,
      label: 'Milioane EURO valoarea proiectelor',
      img: 'money.png',
    },
    {
      count: 1.001,
      label: 'Unitati vandute',
      img: 'cheie.png',
    },
    {
      count: 10,
      label: 'Ani experienta in real-estate marketing',
      img: 'diamond.png',
    },
    {
      count: 10.0001,
      label: 'Lead-uri generate',
      img: 'magnet.png',
    },
  ];
  return (
    <section className="pt-6">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-400 pb-24 sm:pb-32 title-line">
        STATISTICI
      </h1>

      <div className="flex flex-wrap pb-16">
        {statistic.map((item) => (
          <div key={item.count} className=" w-1/2 sm:w-1/4 text-center pb-6 ">
            <Image
              className="w-full object-cover lg:w-full lg:h-full"
              alt="hero"
              src={`/img/${item.img}`}
              width="130"
              height="130"
              priority
            />
            <h3 className="text-4xl font-bold pb-5">+{item.count}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
