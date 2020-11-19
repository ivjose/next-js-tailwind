import Image from 'next/image';

export default function Clients() {
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-auto justify-center mx-auto  px-10">
      <div className="flex justify-center items-center">
        <Image
          className="w-full"
          alt="hero"
          src="/img/pdax.png"
          width="200"
          height="37"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="w-full"
          alt="hero"
          src="/img/merchant-dmci.png"
          width="200"
          height="37"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="w-full"
          alt="hero"
          src="/img/kumu.png"
          width="116"
          height="40"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="w-full"
          alt="hero"
          src="/img/goodwork.png"
          width="200"
          height="37"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="w-full"
          alt="hero"
          src="/img/merchant-lugang.png"
          width="127"
          height="60"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="w-full"
          alt="hero"
          src="/img/wildflour.png"
          width="166"
          height="40"
        />
      </div>
    </div>
  );
}
