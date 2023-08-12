import { Html, Head, Main, NextScript } from "next/document";
import Nav from "@/components/nav";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <body className="font-sans">
        <div className="relative overflow-hidden opacity-20">
          <Image src="/images/BG.png" alt="" layout="fill" objectFit="cover" />
        </div>
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
