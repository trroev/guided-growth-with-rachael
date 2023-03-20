import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine =
    "h-0.5 w-9 my-1 rounded-full transition ease transform duration-300 bg-[#005073]";

  return (
    <nav>
      <div className="w-full z-10">
        <div>
          <div className="w-full pt-9 pb-7 mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/">
                  <p className="tracking-widest font-semibold lg:text-xl xl:text-3xl">
                    [Logo or Title here]
                  </p>
                </Link>
              </div>
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
