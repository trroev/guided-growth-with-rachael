import Layout from "@/components/Layout";
import Link from "next/link";

const FAQ = () => (
  <Layout title="FAQ">
    <div className="w-full max-w-[1240px] mx-auto py-12">
      <div className="flex flex-col px-4">
        <p className="uppercase text-2xl tracking-widest border-b border-green mb-4">
          Frequently Asked Questions
        </p>
        <div className="flex flex-col py-4">
          <div className="px-4 pb-6">
            <div className="pb-2">
              <h5>Q: What is your fee?</h5>
            </div>
            <p className="text-sm md:text-justify">
              My rate is $165 per 50 minute session. If you&#39;re
              interested in family therapy, these appointments are a
              full 60 minutes and are $198 per session.
            </p>
          </div>
          <div className="px-4 pb-6">
            <div className="pb-2">
              <h5>Q: How long do most people come to therapy?</h5>
            </div>
            <p className="text-sm md:text-justify">
              This varies from person to person, and mostly depends on
              what you&#39;re hoping therapy will help you with!
              During our first 1-3 appointments we will be exploring
              and agreeing on therapy goals to focus on together.
              Based on your goals, we can discuss an estimated
              timeline of treatment for your own unique needs.
            </p>
          </div>
          <div className="px-4 pb-6">
            <div className="pb-2">
              <h5>Q: Do you Accept Insurance?</h5>
            </div>
            <p className="text-sm pb-3 md:text-justify">
              Not Currently. I am considered an out-of-network
              provider. I can offer you a monthly superbill to submit
              to your insurance to seek reimbursement for
              out-of-pocket costs.
            </p>
            <p className="text-sm pb-1 md:text-justify">
              Here are some helpful questions to ask your insurance
              company prior to starting therapy with me:
            </p>
            <div className="text-sm px-8">
              <ul className="text-justify list-disc">
                <li>Do I have mental health benefits?</li>
                <li>What is my deductible and has it been met?</li>
                <li>
                  How many psychotherapy sessions per calendar year
                  does my plan cover?
                </li>
                <li>
                  How much does my plan cover for an out-of-network
                  provider?
                </li>
                <li>
                  What is the coverage amount per therapy session?
                </li>
                <li>
                  Do I need a referral from a physician to use my
                  mental health coverage?
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 pb-6">
            <div className="pb-2">
              <h5>Q: What is a superbill?</h5>
            </div>
            <p className="text-sm md:text-justify">
              Superbills are an invoice including information about
              services you receive by me for your insurance to be able
              to reimburse you. They include dates, service type
              (therapy code for insurance), length of session, amount
              paid by you, and a diagnosis code so that your insurance
              carrier receives all the information they need to
              reimburse some of the cost to you.
            </p>
          </div>
          <div className="px-4 pb-6">
            <div className="pb-2">
              <h5>Q: Do you offer in-person appointments?</h5>
            </div>
            <p className="text-sm md: text-justify">
              I have some limited availability for in person
              appointments to those who are located in the greater
              Grand Rapids area. Please indicate that this is
              something you&#39;re interested in when reaching out to
              start therapy so we can plan for in person services!
            </p>
          </div>
          <div className="px-4 pb-6">
            <div className="pb-2">
              <h5>
                Q: What is{" "}
                <a
                  href="/pdf/simple-practice-client-portal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Simple Practice Client Portal How-to pdf link"
                  className="font-medium underline hover:font-bold"
                >
                  Simple Practice
                </a>
                ?
              </h5>
            </div>
            <p className="text-sm md:text-justify">
              Simple Practice is how we have our video appointments,
              complete initial paperwork to get started, schedule
              appointments, submit payments for your appointments and
              receive your superbill invoices. I chose Simple Practice
              for its reputation of being HIPAA compliant—meaning it
              is a secure platform that protects your confidentiality,
              data, and privacy as well as making it as easy as
              possible for both myself and clients to schedule and
              have appointments! You can join from the computer using
              the appointment link that is emailed to you, or if
              you&#39;re using a tablet/ipad or phone, you&#39;ll need
              to download the free Simple Practice App!
            </p>
          </div>
          <div className="px-4 pb-6">
            <div className="pb-2">
              <h5>Q: Other questions?</h5>
            </div>
            <p className="text-sm md:text-justify">
              Please complete the{" "}
              <Link
                className="underline hover:font-semibold"
                href="/contact"
              >
                contact
              </Link>{" "}
              form for a follow up email or schedule a 15 minute phone
              call to discuss any other questions you may have about
              getting started with me.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default FAQ;
