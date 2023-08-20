import { Html, Head, Main, NextScript } from "next/document";
import Nav from "@/components/nav";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content=" Angkatan Muda Islam Nusantara Yogyakarta  "
        />
        <meta
          name="keywords"
          content="Organisasi, Kepemudaaan, Alawiyyin, Yogyakarta, Alamin, Al-amin, Rabithah Alawiyah"
        />
        <meta name="author" content="Alamin " />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        {/* Add other meta tags as needed for SEO optimization */}
        <title>Your Page Title</title>
      </Head>
      <body>
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
