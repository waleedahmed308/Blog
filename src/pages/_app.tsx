import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Inter,
  Kumbh_Sans,
} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--Inter',
});

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  variable: '--KumbhSans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${kumbhSans.variable} bg-[#1E1E1E]`}>
      <title>Blog</title>
      <Component {...pageProps} />
    </main>
);
}
