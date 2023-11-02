import Image from "next/image";
import { Icons } from "./Icons";
import Link from "next/link";

const Footer = () => (
  <footer className="pt-12">
    <div className="container mx-auto px-[4vw] sm:px-10 md:px-12 lg:px-16 xl:px-24">
      <div className="sm:flex sm:items-center sm:justify-center">
        <ul className="flex flex-col justify-center items-center mb-6 text-sm gap-3 sm:flex-row sm:mb-0 sm:gap-6 md:gap-10 lg:gap-16">
          <li className="py-3">
            <Image
              height={200}
              width={200}
              src="/assets/LGBTQaffirming.png"
              alt="Logo Badge showing that Rachael Mathiak Therapy is LGBTQ affirming"
            />
          </li>
          <li className="py-3 sm:pr-3">
            <a
              href="https://mentalhealthmatch.com/therapist-profile/michigan/grand-rapids/rachael-mathiak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Rachael Mathiak's profile on mentalhealthmatch.com"
            >
              <Image
                height={100}
                width={100}
                src="/assets/mhm-badge.webp"
                alt="Logo Badge showing diverse community. Find Rachael Mathiak on mentalhealthmatch.com. Therapy is for everyone."
              />
            </a>
          </li>
          <li className="py-3 sm:p-5">
            <a
              href="https://www.psychologytoday.com/profile/1127944"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Rachael Mathiak's profile on psychologytoday.com"
            >
              <Image
                height={140}
                width={140}
                src="/assets/logo-psychology-today.png"
                alt="Logo Badge showing diverse community. Find Rachael Mathiak on mentalhealthmatch.com. Therapy is for everyone."
              />
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-green sm:mx-auto lg:my-8" />
      <div className="border-b border-b-green pb-8">
        <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-2">
          <li className="sm:ml-10 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="sm:ml-10 hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="sm:ml-10 hover:underline">
            <Link href="/services">Services</Link>
          </li>
          <li className="sm:ml-10 hover:underline">
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="sm:ml-10 hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="sm:ml-10 hover:underline">
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
          <li className="sm:ml-10 hover:underline">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="sm:ml-10 hover:underline">
            <Link href="/disclaimer">Disclaimer</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-6 py-4">
        <div className="block pb-2 space-y-2">
          <p className="text-sm font-medium leading-none">
            Rachael Mathiak Therapy, LLC
          </p>
          <div className="flex gap-2">
            <Icons.phone size={16} aria-hidden="true" />
            <a
              href="tel:6163305822"
              aria-label="link to make a phone call to Rachael Mathiak at 6162821573"
              className="hover:underline"
            >
              <p className="text-sm font-light">(616) 330-5822</p>
            </a>
          </div>
          <div className="flex gap-2">
            <Icons.map size={16} aria-hidden="true" />
            <a
              href="https://goo.gl/maps/tHqEQhXzTzk6homHA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to location on Google Maps"
              className="hover:underline"
            >
              <p className="text-sm font-light">
                Northeast GR Counseling
                <br />
                3280 Beltline Ct,
                <br />
                Suite 100-200,
                <br />
                Grand Rapids, MI 49525
              </p>
            </a>
          </div>
        </div>
        <div className="block pb-2">
          <p className="text-sm font-medium leading-none">
            &copy; 2023{" "}
            <a
              className="hover:underline"
              href="https://www.trevormathiak.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to www.trevormathiak.dev"
            >
              Trevor Mathiak
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
