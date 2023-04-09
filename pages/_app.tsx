import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
