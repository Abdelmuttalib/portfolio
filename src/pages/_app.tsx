import { AppProps } from "next/app"
import Head from "next/head"

import "../styles/tailwind.scss"
import { ThemeProvider } from "@components/ThemeContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Abdelmuttalib Ahmed | Frontend Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider>
        <div className="relative px-10 sm:px-20 md:px-32 lg:px-44 xl:px-56 dark:bg-primary-700 transition-all">
          <div className="flex flex-col items-center flex-1 min-h-screen">
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
