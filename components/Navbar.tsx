import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/types";

interface NavbarProps {
  items?: NavLink[];
}

const Navbar: FC<NavbarProps> = ({ items }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const hamburgerLine =
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
                  src="/assets/logo.svg"
                  height={48}
                  width={48}
                  alt="Guided Growth with Rachael Logo"
                />
              </Link>
              <div>
                <ul className="hidden md:flex">
                  {items
                    ?.filter(
                      (item) =>
                        ![
                          "Terms of Service",
                          "Privacy Policy",
                          "Disclaimer",
                        ].includes(item.title)
                    )
                    .map((item) => (
                      <li
                        className="ml-10 hover:underline"
                        key={item.id}
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
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
                {items
                  ?.filter(
                    (item) =>
                      ![
                        "Terms of Service",
                        "Privacy Policy",
                        "Disclaimer",
                      ].includes(item.title)
                  )
                  .map((item) => (
                    <Link
                      href={item.href}
                      key={item.id}
                      onClick={() => setNav(false)}
                    >
                      <p className="text-3xl my-4 hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
