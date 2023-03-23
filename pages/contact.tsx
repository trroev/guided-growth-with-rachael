import FormikForm from "@/components/Form/Form";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout title="CONTACT">
      <div className="w-full max-w-[1240px] mx-auto py-12">
        <div className="flex flex-col px-4">
          <p className="uppercase text-xl tracking-widest border-b border-[#005073]">
            Contact
          </p>
          <h2 className="py-4 text-center">Get In Touch</h2>
          <p className="py-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Commodi placeat dignissimos obcaecati. Iste, impedit?
            Eligendi.
          </p>
        </div>
        <div className="w-full h-auto lg:p-4">
          <div className="p-4">
            <FormikForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
