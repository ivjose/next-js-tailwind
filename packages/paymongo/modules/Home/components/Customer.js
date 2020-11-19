import Image from 'next/image';

export default function Customer() {
  return (
    <div className=" flex flex-col sm:flex-row mx-auto">
      <div className="flex-1 text-center px-10">
        <p className="text-sm text-left">
          "By streamlining multiple methods of payment online, PayMongo allowed
          us to branch out from our core dine-in business to our first venture
          into the world of e-commerce with the launch of Wildflour To-Go."
        </p>
        <div className="flex flex-col sm:flex-row items-center pt-5">
          <Image
            className="w-full rounded-full"
            alt="hero"
            src="/img/testimonial-wildflour-jao-gamboa.jpg"
            width="72"
            height="72"
          />
          <div className="p-3 sm:text-left text-center">
            <h3 className="title-font text-lg pb-4">Jao Gamboa</h3>
            <div className="leading-none pb-4">
              Director for Corporate Planning & Finance
            </div>
            <div className="pb-4">Wild Flour Bakery + Cafe</div>
          </div>
        </div>
      </div>
      <div className="flex-1 text-center  px-10">
        <p className="text-sm text-left ">
          "PayMongo has helped me accept credit card payments, which allowed
          some of my customers to pay instantly after ordering. This helped with
          our cashflow a lot, and it helped us fulfill orders faster."
        </p>
        <div className="flex flex-col sm:flex-row items-center pt-5">
          <Image
            className="w-20 sm:w-full rounded-full "
            alt="hero"
            src="/img/testimonial-calli-kyra-co.jpg"
            width="72"
            height="72"
          />
          <div className=" p-3 sm:text-left text-center">
            <h3 className="title-font text-lg pb-4">Kyra Co</h3>
            <div className="leading-none pb-4">Co-Founder</div>
            <div className="pb-4">Calli Collective</div>
          </div>
        </div>
      </div>
    </div>
  );
}
