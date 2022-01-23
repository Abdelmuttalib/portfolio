import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Abdelmuttalib Ahmed | Frontend Developer</title>
      </Head>
      <div className="relative px-10 sm:px-20 md:px-32 lg:px-44 xl:px-56 dark:bg-primary-700">
        <div className="min-h-screen flex-1 flex flex-col items-center">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
