import FormikForm from "@/components/Form/Form";
import Layout from "@/components/Layout";
import Image from "next/image";
import poppies from "@/public/assets/poppies.webp";

const Contact = () => {
  return (
    <Layout title="CONTACT">
      <div className="w-full max-w-[1240px] mx-auto py-12">
        <div className="flex flex-col px-4">
          <p className="uppercase text-2xl tracking-widest border-b border-green">
            Contact
          </p>
          <h2 className="py-4 text-center">Get In Touch</h2>
          <p className="py-4 text-center">
            Please fill out the form below, and I will get back to you
            within two business days. I look forward to speaking with
            you!
          </p>
        </div>
        <div className="w-full h-auto lg:p-4">
          <div className="p-4">
            <FormikForm />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-col justify-center items-center h-96 w-full mx-auto relative md:h-[32rem] lg:h-[40rem]">
          <Image
            alt="poppies with ocean in background"
            src={poppies}
            fill
            placeholder="blur"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
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
      </div>
    </Layout>
  );
};

export default Contact;
