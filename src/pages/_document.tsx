import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* <meta charset="utf-8" /> */}
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='description'
            content='Abdelmuttalib Ahmed is a self-taught Front End Developer. Dedicated to driving innovation with the ability to follow industry and technological trends, and facilitating early adoption of innovations.'
          />
          {/* Todo: add some coding keywords below - e.g: (javascript, yourusername, etc) */}
          <meta name='keywords' content='[username], [name], skill' />
          {/* Roboto Font */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
            rel='stylesheet'
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
