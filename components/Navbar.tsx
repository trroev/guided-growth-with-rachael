import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const NavMenu = ({ isOpen, setIsOpen }: NavMenuProps) => (
  <div
    className={`absolute top-0 left-0 h-screen w-screen transform ${
      isOpen ? "-translate-y-0" : "-translate-y-full"
    } transition-transform duration-300 ease-in-out filter`}
  >
    <div className="flex flex-col justify-center items-center mt-28">
      <Link href="/" onClick={() => setIsOpen(false)}>
        <p className="text-2xl font-bold my-4">Home</p>
      </Link>
      <Link href="/about">
        <p className="text-2xl font-bold my-4">About</p>
      </Link>
      <Link href="/services">
        <p className="text-2xl font-bold my-4">Services</p>
      </Link>
      <Link href="/faq">
        <p className="text-2xl font-bold my-4">FAQ</p>
      </Link>
      <Link href="/contact">
        <p className="text-2xl font-bold my-4">Contact</p>
      </Link>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hamburgerLine: string =
    "h-0.5 w-9 my-1 rounded-full transition ease transform duration-300 bg-[#005073]";

  return (
    <nav>
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
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
                  className="flex flex-col h-12 w-12 justify-center items-center"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div
                    className={`${hamburgerLine} ${
                      isOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                  />
                  <div
                    className={`${hamburgerLine} ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <div
                    className={`${hamburgerLine} ${
                      isOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
