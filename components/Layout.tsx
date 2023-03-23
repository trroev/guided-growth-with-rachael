import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const pageTitle = `${title} | Guided Growth with Rachael`;
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
          content="Website for Rachael Mathiak, LMSW"
        />
        <meta
          name="keywords"
          content="Rachael, Mathiak, LMSW, LCSW, LISCW, therapy, therapist, Michigan, California, Massachusetts, Grand Rapids, cognitive behavioral therapy, cbt, dialectical behavioral therapy, dbt, motivational interviewing, mindfulness, anxiety, depression, kids therapy, teen therapy, family therapy, young adult therapy, adult therapy, OCD, LGBTQIA affirmative therapy, life stress, adjustments, solutions focused therapy, trauma informed care, trauma, exposure response prevention, ERP, body focused repetitive behaviors, BFRB, coping skills, emotion regulation, ADHD, attention deficit hyperactivity disorder, parent coaching, behavior concerns, interpersonal dynamics, self-esteem, insomnia, grief and loss, stress management, body positive, culturally sensitive"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
