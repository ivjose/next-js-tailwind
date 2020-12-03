import Image from 'next/image';

export default function Process() {
  const process = [
    {
      title: 'Financing Your Way',
      description:
        'Our comprehensive application is designed to capture information unique to you to deliver a tailored car buying experience',
      icon: {
        img: 'home-pre-approve-1-rs.png',
        width: 140,
        height: 131,
      },
    },
    {
      title: 'Shop Any Time',
      description:
        'You will be matched with the approval centre within our organization that is best suited to meet your needs',
      icon: {
        img: 'home-pre-approve-2-rs.png',
        width: 200,
        height: 160,
      },
    },
    {
      title: 'Delivery Anywhere',
      description:
        'Our dealer partner will ensure that you receive your desired vehicle at the best price, loan terms and interest rate available',
      icon: {
        img: 'home-pre-approve-3-rs.png',
        width: 200,
        height: 106,
      },
    },
  ];
  return (
    <section className="relative pt-36 pb-16 bg-top lg:bg-left-top xl:bg-top bg-no-repeat bg-process-bg bg-contain md:bg-cover px-5">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2  text-3xl leading-8 font-extrabold tracking-tight text-green-500 sm:text-4xl">
            Get Pre-Approved Before You Shop
          </h2>
          <p className="mt-4 mb-10 md:mb-10 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our online application process takes only a few minutes to complete
            and we only ask for information we need
          </p>
          <div className="relative flex flex-wrap md:items-end justify-center">
            <div className="hidden md:block absolute z-0 top-20 left-52">
              <Image
                className="absolute"
                src="/img/F-line.png"
                width="840"
                height="121"
              />
            </div>
            {process.map((item) => (
              <div
                key={item.title}
                className="flex  flex-wrap w-full md:w-1/3 px-5 text-center  mb-8"
              >
                <div className="flex mx-auto w-52 h-52 justify-center items-center ">
                  <Image
                    className="w-auto h-auto"
                    alt={item.title}
                    src={`/img/${item.icon.img}`}
                    width={item.icon.width}
                    height={item.icon.height}
                  />
                </div>

                <p className="mt-4 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      <div className="w-full mx-auto  lg:w-3/6  mt-10 shadow-xl ">
        <div className="relative h-0 " style={{ paddingBottom: '56.25%' }}>
          <iframe
            className=" w-full h-full absolute top-0 left-0"
            src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            
          />
        </div>
      </div>
    </section>
  );
}
