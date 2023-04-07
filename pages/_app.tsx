import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

const workSans = Work_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={workSans.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
