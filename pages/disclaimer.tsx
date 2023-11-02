import Layout from "@/components/Layout";

const Disclaimer = () => {
  return (
    <Layout title="Disclaimer">
      <div className="w-full max-w-[1240px] mx-auto py-12">
        <div className="flex flex-col px-4 mb-3">
          <p className="uppercase text-2xl tracking-widest border-b border-green">
            Disclaimer
          </p>
          <div className="flex flex-col py-4">
            <p className="text-xs pb-4">
              Last updated: Sep 18, 2023 9:24 PM
            </p>
            <div className="pb-6">
              <p className="pb-4">
                Please read this Disclaimer carefully before using the
                www.rachaelmathiak.com Website (the
                &quot;Website&quot;) operated by Rachael Mathiak
                Therapy LLC, a(n) Sole Proprietorship formed in
                Michigan (&quot;us&quot;, &quot;we&quot;,
                &quot;our&quot;) as this Disclaimer contains important
                information regarding limitations of our liability.
                Your access to and use of the Website is conditional
                upon your acceptance of and compliance with this
                Disclaimer. This Disclaimer applies to everyone,
                including, but not limited to: visitors, users, and
                others, who wish to access or use the Website.
              </p>
              <p className="pb-4">
                By accessing or using the Website, you agree to be
                bound by this Disclaimer. If you disagree with any
                part of this Disclaimer, then you do not have our
                permission to access or use the Website.
              </p>
              <p className="uppercase text-xl tracking-widest border-b border-green mb-4">
                Changes
              </p>
              <p className="pb-4">
                We reserve the right to amend this policy at any time
                without any prior notice to you.
              </p>
              <p className="uppercase text-xl tracking-widest border-b border-green mb-4">
                Questions
              </p>
              <p className="pb-4">
                If you have any questions about this Disclaimer,
                please contact us at therapy@rachaelmathiak.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
