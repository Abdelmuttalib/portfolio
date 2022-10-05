import { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";

import ToastProvider from "../context/ToastProvider";
import UserProvider from "../context/UserProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Abdelmuttalib Ahmed | Frontend Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <UserProvider>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
