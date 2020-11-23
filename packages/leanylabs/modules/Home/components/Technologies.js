import Image from 'next/image';
import TitleHeader from '../../../components/TitleHeader';

export default function Technologies() {
  const clients = [
    {
      label: 'React',
      imgPath: 'react.svg',
      width: 159,
      height: 24,
    },
    {
      label: 'Node',
      imgPath: 'node.svg',
      width: 105,
      height: 64,
    },
    {
      label: 'TypeScript',
      imgPath: 'typeScript.svg',
      width: 128,
      height: 64,
    },
    {
      label: 'Docker',
      imgPath: 'docker.svg',
      width: 75,
      height: 64,
    },
    {
      label: 'AWS',
      imgPath: 'aws.svg',
      width: 84,
      height: 50,
    },
    {
      label: 'MongoDB',
      imgPath: 'mongodb.svg',
      width: 180,
      height: 51,
    },
    {
      label: 'Best Residence',
      imgPath: 'postgreSql.svg',
      width: 180,
      height: 33,
    },
  ];
  return (
    <section>
      <TitleHeader title="Favorite Technologies" />
      <div className="flex flex-wrap items-center text-center pt-1 pb-24 ">
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
      </div>
    </section>
  );
}
