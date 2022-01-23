import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

console.log("HELLO");

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
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* Todo: add some coding keywords below - e.g: (javascript, yourusername, etc) */}
          <meta name="keywords" content="[username], [name], skill" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
            rel="stylesheet"
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
