import Image from "next/image";

const Footer = () => (
  <footer className="m-4">
    <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-center">
        <ul className="flex flex-col justify-center items-center sm:flex-row mb-6 text-sm sm:mb-0">
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
      <div className="flex flex-col sm:flex-row justify-between text-sm">
        <p className="block pb-2">Rachael Mathiak Therapy, LLC</p>
        <p className="block">
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
  </footer>
);

export default Footer;
