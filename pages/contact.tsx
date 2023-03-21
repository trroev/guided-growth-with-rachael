import FormikForm from "@/components/Form/Form";
import Form from "@/components/Form/Form";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout title="CONTACT">
      <div className="w-full p-2">
        <div className="w-full max-w-[1240px] mx-auto py-16">
          <p className="uppercase text-xl tracking-widest">Contact</p>
          <h2 className="py-4">Get In Touch</h2>
          <p className="py-4">
            I will get back to you as soon as possible!
          </p>
          <div className="w-full h-auto lg:p-4">
            <div className="p-4">
              <FormikForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
