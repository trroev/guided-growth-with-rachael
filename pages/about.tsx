import Layout from "@/components/Layout";

const About = () => (
  <Layout title="ABOUT">
    <div className="w-full max-w-[1240px] mx-auto py-12">
      <div className="flex flex-col px-4">
        <p className="uppercase text-xl tracking-widest border-b border-[#005073]">
          About
        </p>
        <h2 className="py-4 text-center">Who I am</h2>
        <p className="py-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi placeat dignissimos obcaecati. Iste, impedit?
          Eligendi.
        </p>
      </div>
    </div>
  </Layout>
);

export default About;
