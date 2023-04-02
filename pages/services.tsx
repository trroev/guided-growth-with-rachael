import Layout from "@/components/Layout";
import Link from "next/link";

const Services = () => (
  <Layout title="SERVICES">
    <div className="w-full max-w-[1240px] mx-auto py-12">
      <div className="flex flex-col px-4">
        <p className="uppercase text-2xl tracking-widest border-b border-green">
          Services
        </p>
        <div className="p-4 md:px-12">
          <div className="border-b border-green mb-6">
            <ul className="list-disc">
              <li className="pb-4">
                My rate is $165 per 50 minute session. If you&#39;re
                interested in family therapy, these appointments are a
                full 60 minutes and are $198 per session
                <p className="italic text-sm pt-2">
                  * Sliding scale slots available based on need and
                  schedule availability
                </p>
              </li>
              <li className="pb-4">
                Individual therapy for ages 12+ (kids, teens, adults)
                <p className="italic text-sm pt-2">
                  * Able to work with younger children on a
                  case-by-case basis, please{" "}
                  <Link
                    className="underline hover:font-semibold"
                    href="/contact"
                  >
                    reach out
                  </Link>{" "}
                  to see if I could be a good fit for your
                  family&#39;s specific needs
                </p>
              </li>
              <li className="pb-4">
                Parent-based therapy (specifically helpful for parents
                of kids with behavior concerns or anxiety when the
                child is 8 or under)
              </li>
              <li className="pb-4">
                Family therapy (teens and parents, or family therapy
                for adults navigating difficult family
                circumstances/conflict)
              </li>
              <li className="pb-4">
                <span className="italic">Coming soon: </span>Couples
                Therapy. I am currently working on my Level 1 & 2
                Gottman Method certifications
              </li>
            </ul>
          </div>
          <div>
            <div className="border-b border-green mb-6">
              <p className="pb-12">
                I offer general support which means I am qualified to
                address a wide range of concerns. Below are what I
                especially enjoy helping people work through:
              </p>
              <div className="md:grid grid-cols-2 gap-6 md:gap-12 lg:gap-24">
                <div className="pb-6">
                  <p className="uppercase font-semibold tracking-widest pb-2">
                    Issues Treated:
                  </p>
                  <ul className="list-disc text-left">
                    <div>
                      <li className="pb-4">
                        Anxiety Disorders (separation anxiety,
                        generalized anxiety disorder, panic disorder,
                        social anxiety disorder, perfectionism, some
                        phobias)
                      </li>
                      <li className="pb-4">
                        Depression/Mood Disorders
                      </li>
                      <li className="pb-4">
                        Life transitions and changes
                      </li>
                      <li className="pb-4">Grief/loss</li>
                      <li className="pb-4">
                        Stress Management/Problem Solving
                      </li>
                      <li className="pb-4">
                        LGBTQIA (especially youth related stressors)
                      </li>
                      <li className="pb-4">Sleep/Insomnia </li>
                      <li className="pb-4">
                        Parenting Issues (addressing problematic
                        behaviors, power struggles in the parent-child
                        relationship)
                      </li>
                      <li className="pb-4">
                        Interpersonal/Relationship Concerns
                      </li>
                      <li className="pb-4">
                        Obsessive-Compulsive Disorder (OCD)
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="ml-auto">
                  <p className="uppercase font-semibold tracking-widest pb-2">
                    Modes of Treatment:
                  </p>
                  <ul className="list-disc">
                    <li className="pb-4">
                      Cognitive Behavioral Therapy (CBT)
                    </li>
                    <li className="pb-4">
                      Motivational Interviewing
                    </li>
                    <li className="pb-4">
                      Brief Solutions Focused Therapy
                    </li>
                    <li className="pb-4">
                      Mindfulness Based Stress Reduction
                    </li>
                    <li className="pb-4">
                      Dialectical Behavioral Therapy (DBT)
                    </li>
                    <li className="pb-4">
                      Exposure Response Prevention (ERP)
                    </li>
                    <li className="pb-4">Affirmative Therapy</li>
                    <li className="pb-4">Person-Centered</li>
                    <li className="pb-4">Interpersonal</li>
                    <li className="pb-4">Strengths-Based</li>
                    <li className="pb-4">Humanistic Approach</li>
                    <li className="pb-4">
                      <span className="italic">Coming Soon: </span>
                      Gottman Method Level 1 & 2 for Couples
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-green mb-6">
            <p className="uppercase font-semibold tracking-widest pb-2">
              Payment
            </p>
            <p className="pb-4">
              Credit cards and HSA/FSA cards are accepted forms of
              payment at this time. Please confirm with your HSA/FSA
              benefit that behavioral health/mental health services
              are an approved use of your funds.
            </p>
          </div>
          <div className="border-b border-green">
            <p className="uppercase font-semibold tracking-widest pb-2">
              Cancellation Policy
            </p>
            <p className="pb-4">
              48 hours advance notice of needing to cancel/reschedule
              your appointment is required, otherwise the full rate is
              charged for the scheduled appointment time. Please note,
              your insurance will not reimburse you for late canceled
              or no show appointments.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Services;
