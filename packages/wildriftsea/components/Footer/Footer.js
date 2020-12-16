import Image from 'next/image';

export default function Footer() {
  const socialMedias = [
    {
      name: 'fb',
      img: 'fb.png',
    },
    {
      name: 'ins',
      img: 'ins.png',
    },
    {
      name: 'tw',
      img: 'tw.png',
    },
    {
      name: 'yt',
      img: 'yt.png',
    },
  ];
  return (
    <div className="bg-gray-800 py-10 flex flex-col justify-center items-center">
      <h4 className="font-bold text-white italic text-xl py-4">FIND US AT</h4>
      <ul className="flex flex-wrap w-full max-w-sm   mx-auto  px-10 lg:px-0">
        {socialMedias.map((social) => (
          <li
            key={social.img}
            className="flex justify-center items-center mb-6 w-1/4"
          >
            <div className="flex mx-1.5">
              <Image
                className="mx-auto"
                src={`/social-media/${social.img}`}
                width="55"
                height="55"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
