import Document, { Html, Head, Main, NextScript } from "next/document";
import { info } from "../src/data";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className={`theme-${info.layout} bg-skin-base bg-linearGradient`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
