import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <meta charset="utf-8" /> */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Abdelmuttalib Ahmed is a self-taught Front End Developer. Dedicated to driving innovation with the ability to follow industry and technological trends, and facilitating early adoption of innovations."
          />
          {/* Todo: add some coding keywords below - e.g: (javascript, yourusername, etc) */}
          <meta name="keywords" content="[username], [name], skill" />

          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
