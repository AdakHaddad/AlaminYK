import Head from "next/head";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";
import Image from "next/image";
import Sejarah from "@/components/sejarah";
import Footer from "@/components/footer";
export default function Home() {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const element = document.querySelector("#Sejarah");

  //     if (element) {
  //       const elementTop = element.getBoundingClientRect().top;
  //       if (elementTop < window.innerHeight - 100) {
  //         setIsVisible(true);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 text-[#17A052]">
      <Head>
        <title>Al-Amin Yogyakarta</title>
      </Head>
      <main>
        <div className="absolute">
          <Image src="/images/front.png" layout="fill" objectFit="cover" />
        </div>
        <Fade bottom>
          <div className="flex px-20 space-x-2 my-40">
            <h2 className="text-6xl md:text-5xl font-bold mb-4 px-8">
              Selamat datang di Al-Amin Yogyakarta
            </h2>
            <p className="text-lg text-gray-600 max-w-screen-sm pt-5">
              Berpusat di Yogyakarta, Al-amin hadir sebagai wadah bagi generasi
              muda Alawiyyin untuk mempererat silaturrahim dan membangun ukhuwah
              islamiyah. Dengan semangat kebersamaan, kami berkomitmen menjaga
              dan menguatkan hubungan persaudaraan di kalangan pemuda Alawiyyin
              dari berbagai penjuru nusantara, serta memperkuat ikatan ukhuwah
              di seluruh umat Islam.
            </p>
          </div>
        </Fade>
        <Sejarah />
        <Footer />
      </main>
    </div>
  );
}
