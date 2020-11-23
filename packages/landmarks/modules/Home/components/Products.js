import Image from 'next/image';

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'Evaluare si optimizare proiect',
      img: 'illustration1.png',
      description:
        'Maximizarea vandabilitatii proiectului prin pozitionarea corecta pe piata, crearea unui brand si concept atractiv care sa creasca valoarea proiectului.',
      list: [
        {
          id: 1,
          description: 'Market research',
        },
        {
          id: 2,
          description: 'Concept si pozitionare proiect',
        },
        {
          id: 3,
          description: 'Construirea sau rafinarea brandului',
        },
      ],
    },
    {
      id: 2,
      title: 'Strategie pentru generare lead-uri',
      img: 'illustration1.png',
      description:
        'Experienta de peste 10 ani in real estate marketing si digital advertising ne permite intelegerea contextului imbobiliar la o scara larga.',
      list: [
        {
          id: 1,
          description:
            'Campanii automatizate Google si Facebook, optimizate special pentru real estate development',
        },
        {
          id: 2,
          description: 'Promovare pe cele mai relevante portaluri imobiliare',
        },
        {
          id: 3,
          description: 'Rapoarte de performanta lunare',
        },
      ],
    },
    {
      id: 3,
      title: 'Cel mai performant site',
      img: 'illustration3.png',
      description:
        'Bazandu-ne pe experienta noastra de peste 10 ani din domeniul web am construit cel mai bun site pentru dezvoltatorii imobiliari. Folosim cele mai noi tehnologii din domeniu si suntem dedicati sa il imbunatatim in mod regulat.',
      list: [
        {
          id: 1,
          description: 'Optimizat pentru motoarele de cautare',
        },
        {
          id: 2,
          description: 'Design curat, adaptat pentru ansamblul tau',
        },
        {
          id: 3,
          description: 'Plan etaj dinamic, cu interfata de administrare',
        },
        {
          id: 4,
          description: 'Imbunatatiri de performanta gratuite',
        },
      ],
    },
  ];
  return (
    <section>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-400 pb-10 title-line">CE SERVICII ITI OFERIM?</h1>
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`flex flex-wrap items-center pb-16 ${
            index % 2 == 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
          }`}
        >
          <div className="w-full text-center sm:w-5/12 px-5 md:px-10">
            <Image
              className="w-full object-cover lg:w-full lg:h-full"
              alt="hero"
              src={`/img/${product.img}`}
              width="420"
              height="421"
              sizes="40vw"
              priority
            />
          </div>
          <div className="w-full sm:w-7/12 px-5 md:px-10 ">
            <h3 className="text-3xl inline font-bold line-text px-1">
              {product.title}
            </h3>
            <p className="py-4">{product.description}</p>
            <ul>
              {product.list.map((item, itemIndex) => (
                <li key={item.id} className="flex flex-row text-base py-1">
                  <span className="text-lg w-auto font-bold text-gray-300 pr-3">
                    0{itemIndex + 1}
                  </span>
                  <span className="flex-auto">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
