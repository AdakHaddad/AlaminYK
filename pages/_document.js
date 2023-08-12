import { Html, Head, Main, NextScript } from "next/document";
import Nav from "@/components/nav";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Nav />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
