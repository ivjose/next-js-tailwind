
export default function Resources() {
  const resources = [
    {
      title: 'Auto Financing',
      links: [
        {
          label: 'The Ten Cheapest Cars to Insure',
          path: '/',
        },
        {
          label: '10 Cheapest Cars to Insure-All Time',
          path: '/',
        },
        {
          label: 'Auto Loan Refinancing',
          path: '/',
        },
        {
          label: 'US Imported Vehicle Warranty',
          path: '/',
        },
        {
          label: 'Auto Loan Calculator',
          path: '/',
        },
        {
          label: 'Car Loans in Alberta',
          path: '/',
        },
        {
          label: 'Tips on How to Improve your Credit Score',
          path: '/',
        },
        {
          label: '6 FAQs Regarding Car Financing',
          path: '/',
        },
      ],
    },
    {
      title: 'Picking The Right Car',
      links: [
        {
          label: 'A Comparison of the Different Hybrid Options',
          path: '/',
        },
        {
          label: '6 Tricks for Making Car Buying a Little Easier',
          path: '/',
        },
        {
          label: 'Advice for Avoiding Car Buying Scams',
          path: '/',
        },
        {
          label: 'Advice for Selecting a New Car',
          path: '/',
        },
        {
          label: 'Car Buying Tips to Help You Avoid Scams',
          path: '/',
        },
        {
          label:
            'Tips and Tricks for Getting the Most Out of Your Fuel Efficient Hybrid',
          path: '/',
        },
        {
          label: 'Is the Cheapest Used Car Always Your Best Car Buying Option?',
          path: '/',
        },
        {
          label:
            'Learning What Types of Used or New Cars are Right for Your Needs',
          path: '/',
        },
      ],
    },
    {
      title: 'Car Care & Ownership',
      links: [
        {
          label: 'A Step by Step on Increasing Your Cars Lifespan',
          path: '/',
        },
        {
          label: `Factors That Influence Your Car's Lifespan`,
          path: '/',
        },
        {
          label: '4 Simple Ways to Keep Your Car in Shape',
          path: '/',
        },
        {
          label: 'Advice for Enjoying Your Car Buying Experience',
          path: '/',
        },
        {
          label: '5 Ways to Save Money on Car Expenses',
          path: '/',
        },
        {
          label:
            'Is It Best to Drive an Old Car Into "the Ground" or Buy a New Car?',
          path: '/',
        },
        {
          label:
            'The Pitfalls of Asking Your Friends and Relatives for Car Advice',
          path: '/',
        },
        {
          label: 'What to Look Out for When Buying Car Insurance',
          path: '/',
        },
      ],
    },
    {
      title: 'Selling Your Car',
      links: [
        {
          label: '5 Tips for Selling Your Car',
          path: '/',
        },
        {
          label: `Things to Consider Before Selling Your Car`,
          path: '/',
        },
        {
          label:
            'The Most Common Questions Answered About Buying and Selling Cars',
          path: '/',
        },
        {
          label: 'How Can You Sell Your Car?',
          path: '/',
        },
        {
          label: 'What Should You Think About Before Selling a Car?',
          path: '/',
        },
      ],
    },
  ];
  return (
    <section className=" pb-16  px-5">
  
      <div className="flex flex-wrap max-w-7xl mx-auto py-5">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="w-full sm:w-1/2 lg:w-1/4 md:px-4 mb-8"
          >
            <h3 className="text-lg font-bold mb-3">{resource.title}</h3>
            <ul>
              {resource?.links?.map((link) => (
                <li
                  key={link.label}
                  className="relative text-sm pl-4 py-2 truncate "
                >
                  <a href="#" className="hover:underline ">
                    <div className="absolute top-0 left-0 mt-2.5">
                      <svg
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.75195 1.23926L7.75195 7.23926L1.75195 13.2393"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="w-full md:w-1/2 lg:w-1/4"></div>
      </div>
    </section>
  );
}
