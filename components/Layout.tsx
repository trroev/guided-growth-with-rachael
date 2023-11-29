import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { navConfig } from "@/config/nav";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const pageTitle = `${title} | Therapy in Grand Rapids, California and Massachusetts. Rachael Mathiak Therapy, LLC`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          httpEquiv="Content-Type"
          content="text/html;charset=UTF-8"
        />
        <meta
          name="description"
          content="Rachael Mathiak, LMSW, owner of Rachael Mathiak Therapy, LLC, provides outpatient therapy for kids, teens, adults and families. In person availability in Grand Rapids, Michigan, telehealth availablity for California, Massachusetts and Michigan."
        />
        <meta
          name="keywords"
          content="Rachael, Mathiak, LMSW, LCSW, LISCW, therapy, therapist, Michigan, California, Massachusetts, Grand Rapids, cognitive behavioral therapy, cbt, dialectical behavioral therapy, dbt, motivational interviewing, mindfulness, anxiety, depression, kids therapy, teen therapy, family therapy, young adult therapy, adult therapy, OCD, LGBTQIA affirmative therapy, life stress, adjustments, solutions focused therapy, trauma informed care, trauma, exposure response prevention, ERP, body focused repetitive behaviors, BFRB, coping skills, emotion regulation, ADHD, attention deficit hyperactivity disorder, parent coaching, behavior concerns, interpersonal dynamics, self-esteem, insomnia, grief and loss, stress management, body positive, culturally sensitive"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#005073"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#fff8e7" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#fff8e7" />
      </Head>
      <div className="flex flex-col h-screen">
        <Navbar items={navConfig.navLinks} />
        <main>{children}</main>
        <Footer items={navConfig.navLinks} />
      </div>
    </>
  );
};

export default Layout;
