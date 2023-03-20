import { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta
        http-equiv="Content-Type"
        content="text/html;charset=UTF-8"
      />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
);

export default Layout;
