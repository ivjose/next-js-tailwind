import Image from 'next/image';
import Button from '../../../components/Button';

export default function GrowPaymongo() {
  const column1 = [
    {
      id: 1,
      title: 'Zero setup or monthly fees',
      content: 'Pay only when transactions go through.',
    },
    {
      id: 2,
      title: 'Secured transactions for you and your customers',
      content:
        'Our advanced fraud detection engines protect you from bogus buyers and fraudulent transactions.',
    },
  ];

  const column2 = [
    {
      id: 1,
      title: 'No website? No problem!',
      content: 'Use PayMongo Links and get paid via chat, PMs and SMS.',
    },
    {
      id: 2,
      title: 'Seamless integration with your website or app',
      content:
        'Use the PayMongo API to power payment experiences that delight your customers.',
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="w-full md:w-1/3 md:mb-0 mb-6 p-4">
          <h1 className="title-font md:text-left md:text-5xl sm:text-4xl text-3xl mb-4 text-center font-medium text-gray-900">
            Grow with PayMong
          </h1>
          <p className="mb-8 leading-relaxed text-center md:text-left ">
            Here are some great reasons why you should choose us.
          </p>
        </div>
        <div className="p-4 sm:w-1/2  md:w-1/3 md:mb-0 mb-6">
          {column1.map((item) => (
            <div key={item.id} className="flex mb-5">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary text-white mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-primary-dark text-lg title-font font-medium mb-2">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 sm:w-1/2  md:w-1/3 md:mb-0 mb-6 ">
          {column2.map((item) => (
            <div key={item.id} className="flex mb-5">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary text-white mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-primary-dark text-lg title-font font-medium mb-2">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center py-6">
        <Button textColor="white" bgColor="primary" size="lg">
          Get started for free
        </Button>
      </div>
    </div>
  );
}
