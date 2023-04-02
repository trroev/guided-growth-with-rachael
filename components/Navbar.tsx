import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const hamburgerLine: string =
    "h-0.5 w-9 my-1 rounded-full transition ease transform duration-300 bg-green";

  return (
    <nav className="bg-beige z-50">
      <div className=" w-full">
        <div>
          <div className="w-full pt-9 pb-7 mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24">
            <div className="flex justify-between items-center w-full h-full 2xl:px-16">
              <Link
                href="/"
                aria-label="link to homepage"
                className="hover:scale-110 ease-in duration-300 cursor-pointer"
              >
                <Image
                  src="/plant_logo.svg"
                  height={48}
                  width={48}
                  alt="Guided Growth with Rachael Logo"
                />
              </Link>
              <div>
                <ul className="hidden md:flex">
                  <li className="ml-10 hover:underline">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="ml-10 hover:underline">
                    <Link href="/services">Services</Link>
                  </li>
                  <li className="ml-10 hover:underline">
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li className="ml-10 hover:underline">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="md:hidden flex items-center">
                <div
                  className="flex flex-col h-12 w-12 justify-center items-center z-20 cursor-pointer"
                  onClick={handleNav}
                >
                  <div
                    className={`${hamburgerLine} ${
                      nav ? "rotate-45 translate-y-2.5" : ""
                    }`}
                  />
                  <div
                    className={`${hamburgerLine} ${
                      nav ? "opacity-0" : ""
                    }`}
                  />
                  <div
                    className={`${hamburgerLine} ${
                      nav ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-beige/80" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-screen bg-beige p-10 ease-in duration-500"
              : "fixed top-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div
              className={`absolute top-0 left-0 h-screen w-screen transform ${
                nav ? "-translate-y-0" : "-translate-y-full"
              } transition-transform duration-300 ease-in-out filter`}
            >
              <div className="flex flex-col justify-center items-center mt-28">
                <Link href="/" onClick={() => setNav(false)}>
                  <p className="text-3xl my-4 hover:underline">
                    Home
                  </p>
                </Link>
                <Link href="/about" onClick={() => setNav(false)}>
                  <p className="text-3xl my-4 hover:underline">
                    About
                  </p>
                </Link>
                <Link href="/services" onClick={() => setNav(false)}>
                  <p className="text-3xl my-4 hover:underline">
                    Services
                  </p>
                </Link>
                <Link href="/faq" onClick={() => setNav(false)}>
                  <p className="text-3xl my-4 hover:underline">FAQ</p>
                </Link>
                <Link href="/contact" onClick={() => setNav(false)}>
                  <p className="text-3xl my-4 hover:underline">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
