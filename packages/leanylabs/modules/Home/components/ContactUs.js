import Image from 'next/image';
import TitleHeader from '../../../components/TitleHeader';
import Input from '../../../components/Input';

export default function ContactUs() {
  const socialMedia = [
    {
      name: 'Mykola Pustovoychenko',
      url: 'https://www.linkedin.com/',
      icon: 'linkedInIcon.svg',
    },
    {
      name: 'allokym',
      url: 'https://www.sykpe.com/',
      icon: 'skypeIcon.svg',
    },
    {
      name: 'mykola@leanylabs.com',
      url: 'mailto:ivjose@gmai.com',
      icon: 'emailIcon.svg',
    },
  ];
  return (
    <section className="mb-24">
      <TitleHeader title="Contact Us" />
      <div className="flex flex-wrap flex-col md:flex-row py-5">
        <div className="w-full md:w-1/3 text-center mb-10">
          <a
            href="#"
            className="md:block flex flex-row flex-wrap justify-center"
          >
            <div className="w-20 md:w-full">
              <Image
                className="w-full mx-auto rounded-md "
                alt="hero"
                src="/img/mykola_pro.jpg"
                width="160"
                height="160"
                priority
              />
            </div>
            <div className="text-left md:text-center pl-4">
              <h3 className="text-green-600 text-xl pt-2">
                Mykola Pustovoychenko
              </h3>
              <div>Co-Founder at LeanyLabs</div>
            </div>
          </a>

          <ul className="text-left mb-5 mt-5 inline-block">
            {socialMedia.map((social) => (
              <li key={social.name}>
                <a href={social.url} className="flex items-center py-3">
                  <Image
                    className="w-full "
                    alt="hero"
                    src={`/img/${social.icon}`}
                    width="30"
                    height="30"
                    priority
                  />
                  <span className="ml-3"> {social.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div>
            <button
              type="submit"
              className="inline-block text-sm font-bold px-6 py-3 leading-none border rounded-md  bg-green-600 hover:bg-green-500 text-white mt-4 lg:mt-0"
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="flex-1 w-full md:px-5 md:border-l">
          <p className="mb-4">
            Tell us about you and your project. Just fill in the form below, and
            we will contact you within 24 hours.
          </p>
          <form action="">
            <Input
              required
              id="message"
              type="textarea"
              rows="10"
              label="How can we help?"
              placeholder="Tell us briefly about your idea, or ask us anything"
            />
            <Input
              required
              id="name"
              label="How can we call you?"
              placeholder="Your Name"
            />
            <Input
              required
              id="name"
              type="email"
              label="How to get back to you?"
              placeholder="Your email"
            />

            <span className="text-sm block mb-10">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply. By submitting, I agree with LeanyLabs
              Privacy Policy.
            </span>
            <button
              type="submit"
              className="inline-block text-sm font-bold px-6 py-3 leading-none border rounded-md  bg-green-600 hover:bg-green-500 text-white mt-4 lg:mt-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
