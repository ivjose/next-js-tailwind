import Image from 'next/image';

export default function Clients() {
  const clients = [
    {
      label: 'Remax',
      imgPath: 'logo-remax.png',
      width: 120,
      height: 24
    },
    {
      label: 'Nordis',
      imgPath: 'logo-nordis.png',
      width: 120,
      height: 32
    },
    {
      label: 'The Nest',
      imgPath: 'logo-nest.png',
      width: 110,
      height: 44
    },
    {
      label: 'Scala',
      imgPath: 'logo-scala.png',
      width: 110,
      height: 44
    },
    {
      label: 'Studium Green',
      imgPath: 'logo-studiumgreen.png',
      width: 60,
      height: 36
    },
    {
      label: 'Central View',
      imgPath: 'logo-centralview.png',
      width: 120,
      height: 36
    },
    {
      label: 'Best Residence',
      imgPath: 'logo-bestresidence.png',
      width: 120,
      height: 36
    },
  ];
  return (
    <section className="flex flex-wrap items-center text-center py-16 ">
      {clients.map((client) => (
        <div className="flex-grow" key={client.label}>
   

          <Image
          className="w-full object-cover lg:w-full lg:h-full"
          alt="hero"
          src={`/img/${client.imgPath}`}
          width={client.width}
          height={client.height}
     
          priority
        />
        </div>
      ))}
    </section>
  );
}
