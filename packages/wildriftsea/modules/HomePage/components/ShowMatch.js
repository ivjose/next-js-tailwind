import Image from 'next/image';

export default function ShowMatch() {
  return (
    <section className="pt-28  relative">
      <div className=" w-full absolute top-0 left-0">
        <Image
          alt="hero"
          src="/img/line-b.png"
          layout="responsive"
          width="1679"
          height="19"
        />
      </div>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex md:max-w-2xl flex-col relative px-6 mb-10">
          <div className="bg-black absolute top-0 left-0 h-90 line-x w-1" />
          <h2 className="text-5xl lg:text-7xl font-extrabold py-8 italic tracking-tighter">SHOWMATCH</h2>
          <p className="text-lg">
            Introducing the Wild Rift SEA Pentaboom Showdown. With 8 teams
            consisting of 40 celebrities and creators across Southeast Asia
            playing in our fun-filled Pentaboom Showdown for a US$66,500 prize
            pool, sponsored prizes, and the title of Champion - the stakes have
            never been higher!
          </p>
          <a href="#" className="text-blue-600">
            Find out more
          </a>
 
        </div>
      </div>

      <div className="relative  show-match-height mb-20 md:mb-0">
        <Image
          className="object-center object-cover pointer-events-none"
          alt="hero"
          src="/img/blue.jpg"
          layout="fill"
          style={{ objectFit: 'cover' }}
        />
        <div className=" w-full  absolute top-0 left-0">
          <Image
            alt="hero"
            src="/img/up.png"
            layout="responsive"
            width="1281"
            height="374"
          />
        </div>

        <div className="absolute show-match-char text-right bottom-0 md:top-0  right-0 xl:right-40">
          <Image alt="hero" src="/img/char.png" width="581" height="641" />
        </div>

        <div className="w-full absolute bottom-0 right-0">
          <Image
            alt="hero"
            src="/img/down.png"
            layout="responsive"
            width="1281"
            height="425"
          />
        </div>
      </div>
    </section>
  );
}
