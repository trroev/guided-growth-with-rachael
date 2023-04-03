const imageUrl = "/assets/redwoods.jpg";

const Main = () => {
  return (
    <div className="mb-12">
      <div
        className="flex flex-col justify-center items-center h-72 w-full mx-auto bg-cover bg-no-repeat md:h-80 lg:h-96"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="text-center bg-beige/75 p-6 w-full">
          <h1 className="font-light pb-4">
            Guided Growth with Rachael
          </h1>
          <p className="tracking-wider font-medium">
            Rachael Mathiak | LMSW, LCSW
          </p>
        </div>
      </div>
      <div className="relative pt-24 px-12 text-center md:text-justify md:px-24 lg:px-48">
        <p className="text-xs absolute top-0 right-1">
          Photo by{" "}
          <a
            className="hover:underline"
            href="https://unsplash.com/@billy_huy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Billy Huynh's Unsplash profile"
          >
            Billy Huynh
          </a>{" "}
          on{" "}
          <a
            className="hover:underline"
            href="https://unsplash.com/photos/4M1wucdlANA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the background image on unsplash.com"
          >
            Unsplash
          </a>
        </p>
        <p className="pb-6">
          Change. One of the few absolute truths in life. Therapy
          offers a chance to facilitate growth, a deeper understanding
          of oneself, a richer connection to others, and the discovery
          of more meaning in your life, while experiencing the
          inevitable changes life gives us. Big, small, and
          in-between. So often humans resist change which can lead to
          distress and overwhelm. If we shift our perspective,
          external changes (and changes within us for that matter),
          can be a fountain of opportunity for growth and finding
          deeper meaning in our lives. Let me be your guide as you
          navigate the inevitable challenges life throws our way, and
          help you transform those challenges into personal growth!
        </p>
        <p className="pb-6">
          One of my favorite parts of being a therapist is the honor
          I&#39;ve had to hear people&#39;s stories and walk beside
          them for a chapter of it. I work with people to identify
          what personal growth, changes, and shifts they need to make
          in order to live a more fulfilling, satisfactory, and
          meaningful life - and then guide them towards achieving it.
          I believe everyone already has the strength, resiliency, and
          inner knowledge they need within themselves to reach their
          goals - I&#39;m here to guide you to discovering it.
        </p>
        <p>
          I firmly believe for therapy to be effective for anyone, it
          has to start with trust and a meaningful relationship
          between a therapist and the person seeking treatment. Not
          every therapist is the right fit for you! I encourage and
          welcome people to continue seeking a therapist that they
          feel connected to - even if it may not be me.{" "}
          <a
            href="https://www.apa.org/monitor/2019/11/ce-corner-relationships"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to American Psychological Association research article"
            className="font-medium underline hover:font-semibold"
          >
            Research
          </a>{" "}
          supports that people will best achieve their goals in
          therapy predicated on having a therapist who they feel like
          “gets them.”
        </p>
      </div>
    </div>
  );
};

export default Main;
