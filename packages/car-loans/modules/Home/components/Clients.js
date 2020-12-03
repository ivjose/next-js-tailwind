import Image from 'next/image';

export default function Clients() {
  const clients = [
    {
      name: 'Home Sonnet',
      img: 'home-sonnet-rs.png',
      width: 152,
      height: 46,
    },
    {
      name: 'Black Book',
      img: 'BlackBook-logo.png',
      width: 303,
      height: 40,
    },
    {
      name: 'Car Pages',
      img: 'carpages-logo.png',

      width: 220,
      height: 40,
    },
    {
      name: 'Home Borrowell',
      img: 'home-borrowell-rs.png',
      width: 178,
      height: 40,
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto">
      <ul className="flex flex-wrap items-center px-10">
        {clients.map((client) => (
          <li key={client.name} className="flex-grow text-center px-3 py-2 mb-6">
            <Image
              alt={client.name}
              src={`/img/${client.img}`}
              width={client.width}
              height={client.height}
          
            />
          </li>
        ))}
        
      </ul>
    </section>
  );
}
