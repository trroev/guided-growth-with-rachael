import Layout from "@/components/Layout";

const About = () => (
  <Layout title="ABOUT">
    <div className="w-full max-w-[1240px] mx-auto py-12">
      <div className="flex flex-col px-4">
        <p className="uppercase text-xl tracking-widest border-b border-[#005073]">
          About
        </p>
        <h2 className="py-4 text-center">Who I am</h2>
        <div className="text-justify">
          <p className="pb-4">
            Rachael is a licensed clinical social worker (CA-LCSW
            #73823, MI-LMSW #6801110065, MA-LICSW #124554) with a
            decade of experience primarily working with adolescents
            and families in a variety of settings including crisis
            prevention and intervention, individual and family
            therapy, and case management. Rachael is especially
            skilled at working with individuals who struggle with
            symptoms related to anxiety, depression, LGBTQIA youth
            related stressors, those who have endured trauma, and
            family conflict. She believes the foundation of a
            meaningful therapeutic experience starts with trust and
            the relationship between therapist and client. From there,
            she uses a strengths based approach to help people
            discover their own inner resilience to reach their goals.
          </p>
          <p className="pb-4">
            Rachael has received training in mindfulness, DBT, CBT,
            solutions focused therapy, trauma informed care, and
            motivational interviewing: all frameworks she regularly
            brings into her practice. She is a big follower of the
            Gottman Institute and regularly reads their blogs and
            books for up to date research about human relationships
            and improving our connection to one another.
          </p>
          <p>
            In her free time Rachael enjoys going for hikes with her
            family (this includes the family dog of course!),
            traveling to new places, catching a yoga class or getting
            lost in a good book.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
