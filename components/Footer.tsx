import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="rounded-lg shadow m-4">
    <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-center mb-4 sm:mb-0 hover:scale-110 ease-in duration-300 cursor-pointer"
        >
          <Image
            src="/logo.svg"
            height={48}
            width={48}
            alt="Balanced Mind & Heart Logo"
            className="h-8 mr-3"
          />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
          <li>
            <Link
              href="/about"
              className="mr-4 hover:underline md:mr-6"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="mr-4 hover:underline md:mr-6"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="mr-4 hover:underline md:mr-6"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="mr-4 hover:underline md:mr-6"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-[#005073] sm:mx-auto lg:my-8" />
      <span className="block text-sm sm:text-center">
        &copy; 2023{" "}
        <a
          className="hover:underline"
          href="https://www.trevormathiak.dev"
          target="_blank"
          aria-label="Link to www.trevormathiak.dev"
          rel="noopener noreferrer"
        >
          Trevor Mathiak
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
