import Image from "next/image";

import FormikForm from "@/components/Form/Form";
import Layout from "@/components/Layout";
import poppies from "@/public/assets/poppies.webp";
import { Icons } from "@/components/Icons";

const Contact = () => {
  return (
    <Layout title="CONTACT">
      <div className="w-full max-w-[1240px] mx-auto py-12">
        <div className="flex flex-col px-4 mb-3">
          <p className="uppercase text-2xl tracking-widest border-b border-green">
            Contact
          </p>
        </div>
        <div className="flex flex-col justify-center items-center h-72 w-full mx-auto relative md:h-80 lg:h-96">
          <Image
            alt="Poppies with ocean in background"
            src={poppies}
            fill
            placeholder="blur"
            sizes="100vw"
            style={{
              objectFit: "cover",
              zIndex: "-1",
            }}
          />
          <div className="text-center bg-beige/60 p-6 w-full">
            <h2 className="py-4 text-center">Get In Touch</h2>
          </div>
        </div>
        <div className="relative">
          <p className="text-xs absolute top-0 right-1">
            Photo by{" "}
            <a
              className="hover:underline"
              href="https://unsplash.com/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Tim Mossholder's Unsplash profile"
            >
              Tim Mossholder
            </a>{" "}
            on{" "}
            <a
              className="hover:underline"
              href="https://unsplash.com/photos/aiJ0R0oRtak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the bannger image on unsplash.com"
            >
              Unsplash
            </a>
          </p>
        </div>
        <div className="flex flex-col py-4"></div>
        <p className="p-4 text-center">
          Please fill out the form below, and I will get back to you
          within two business days. I look forward to speaking with
          you!
        </p>
        <div className="w-full h-auto lg:p-4">
          <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-44">
            <FormikForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
