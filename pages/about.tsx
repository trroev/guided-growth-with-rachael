import Layout from "@/components/Layout";
import rachael from "@/public/assets/rachael.jpeg";
import Image from "next/image";

const About = () => (
  <Layout title="ABOUT">
    <div className="w-full max-w-[1240px] mx-auto py-12">
      <div className="flex flex-col px-4">
        <p className="uppercase text-2xl tracking-widest border-b border-green">
          About
        </p>
        <div className="py-4 text-center">
          <h2>Rachael Mathiak</h2>
          <p className="italic">(she/her/hers)</p>
        </div>
        <div className="m-auto px-6 md:text-justify lg:grid grid-cols-5 gap-8">
          <div className="flex flex-col justify-center items-center p-4 col-span-2 mb-6">
            <Image
              src={rachael}
              height={500}
              width={500}
              alt="Rachael Mathiak headshot"
              className="rounded-xl shadow shadow-green/75"
            />
            <p className="text-xs pt-1">
              Photo by{" "}
              <a
                className="hover:underline"
                href="https://paigemariephotography33.pixieset.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to Paige Marie Photography website"
              >
                Paige Marie Photography
              </a>
            </p>
          </div>
          <div className="col-span-3">
            <p className="pb-6">
              I am a licensed clinical social worker with 13 years
              experience in the mental health field. I graduated from
              Grand Valley State University in 2010 with my Bachelor
              in Social Work (BSW). As a BSW I worked for two years
              gaining experience with adults, children, teens and
              families providing case management and supportive
              counseling services to runaway youth, families with
              children with intellectual disabilities and adults with
              severe and chronic mental illness. I wanted to learn
              more and deepen my knowledge so decided to attend
              graduate school at Western Michigan University. I
              graduated in 2013 with my Master&#39;s Degree in Social
              Work (MSW) and earned my SPADA graduate certificate
              (Speciality Program in Alcohol and Drug Abuse). I have
              had the honor to meet many people from different walks
              of life throughout my career. Some of these experiences
              include: mental health crisis stabilization, serving as
              a home-based and community based therapist for
              individuals and families experiencing significant mental
              health symptoms, foster youth, medical social work, and
              outpatient therapy.
            </p>
            <p className="pb-6">
              My broad experience with a variety of people and in
              different settings have shaped me to be a deeply
              empathetic, non-judgemental, and skilled therapist. With
              a balance of nurturance and compassion, I offer direct
              and honest reflections that you bring into the therapy
              space. I am an LGBTQIA affirming, social justice
              aligned, and climate change aware therapist - all of
              these world issues impact our day to day living and can
              exacerbate anxiety and mood concerns. I&#39;m a safe
              person to discuss these concerns with.
            </p>
            <p className="pb-3">
              I am currently providing tele-health appointments to
              residents in Michigan, California, and Massachusetts (CA
              LCSW #73823, MI LMSW # 6801110065, MA LICSW # 124554).
              I&#39;m so glad you found me and I look forward to the
              opportunity of supporting you through whatever concerns
              have brought you here!
            </p>
            <p className="italic text-sm">
              * Please note due to mental health laws I am only able
              to provide therapy to people living and located in the
              states I&#39;m licensed in.
            </p>
          </div>
        </div>
        <div className="px-6 md: text-justify"></div>
      </div>
    </div>
  </Layout>
);

export default About;
