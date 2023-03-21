import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const hamburgerLine: string =
    "h-0.5 w-9 my-1 rounded-full transition ease transform duration-300 bg-[#005073]";

  return (
    <nav>
      <div className="w-full z-10">
        <div>
          <div className="w-full pt-9 pb-7 mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                aria-label="link to homepage"
                className="hover:scale-110 ease-in duration-300 cursor-pointer"
              >
                <Image
                  src="/logo.svg"
                  height={48}
                  width={48}
                  alt="Balanced Mind & Heart Logo"
                />
              </Link>
              <div className="flex items-center">
                <button
                  className="flex flex-col h-12 w-12 justify-center items-center z-20"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#eed9c4]/80"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full md:w-[45%] h-screen bg-[#eed9c4] p-10 ease-in duration-500"
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
                  <p className="text-2xl font-bold my-4 hover:underline">
                    Home
                  </p>
                </Link>
                <Link href="/about" onClick={() => setNav(false)}>
                  <p className="text-2xl font-bold my-4 hover:underline">
                    About
                  </p>
                </Link>
                <Link href="/services" onClick={() => setNav(false)}>
                  <p className="text-2xl font-bold my-4 hover:underline">
                    Services
                  </p>
                </Link>
                <Link href="/faq" onClick={() => setNav(false)}>
                  <p className="text-2xl font-bold my-4 hover:underline">
                    FAQ
                  </p>
                </Link>
                <Link href="/contact" onClick={() => setNav(false)}>
                  <p className="text-2xl font-bold my-4 hover:underline">
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
