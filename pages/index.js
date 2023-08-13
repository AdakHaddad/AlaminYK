import Head from "next/head";
// import Fade from "react-reveal/Fade";
// import { useEffect, useState } from "react";
import Image from "next/image";
import Sejarah from "@/components/sejarah";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 text-[#17A052]">
      <Head>
        <title>AL-AMIN Yogyakarta</title>
      </Head>
      <main className="mx-4 ">
        {/* <Fade bottom> */}
        <div className="md:flex px-10 space-y-2 py-40 ">
          <h2 className="md:text-5xl font-bold mt-4 max-w-sm">
            👋Selamat datang di AL-AMIN Yogyakarta👋
          </h2>
          <p className="text-lg text-gray-600 max-w-screen my-10">
            Berpusat di Yogyakarta, AL-AMIN hadir sebagai wadah bagi generasi
            muda Alawiyyin untuk mempererat silaturrahim dan membangun ukhuwah
            islamiyah. Dengan semangat kebersamaan, kami berkomitmen menjaga dan
            menguatkan hubungan persaudaraan di kalangan pemuda Alawiyyin dari
            berbagai penjuru nusantara, serta memperkuat ikatan ukhuwah di
            seluruh umat Islam.
          </p>
        </div>
        {/* </Fade> */}
        <Sejarah />
        <Footer />
      </main>
    </div>
  );
}
