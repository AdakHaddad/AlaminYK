import Image from "next/image";
export default function Sejarah() {
  return (
    <div className="flex mt-60 space-x-4 px-20 py-10 w-full ">
      <div className="w-1/2 pt-12">
        <Image
          src="/images/front.png"
          alt="Sejarah Alamin Yogyakarta"
          width={500}
          height={300}
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div className="w-1/2">
        <h3 className="text-3xl font-semibold mb-2">
          Sejarah Alamin Yogyakarta
        </h3>
        <p className="text-gray-600">
          AL-AMIN Yogyakarta pertama kali didirikan pada tanggal 24 Mei 1988,
          sebagai upaya untuk membina pemuda Alawiyyin di Yogyakarta. Kegiatan
          kami berlangsung aktif hingga tahun 1993, dan kemudian mengalami masa
          stagnasi. Namun, pada tanggal 7 Februari 1996, atau 17 Ramadhan 1416
          H, semangat untuk meneruskan perjuangan tak pernah padam. Kepengurusan
          baru terbentuk, dan kami kembali melanjutkan peran kami. Dengan fokus
          pada dakwah Salafuna Ash Shalih, AL-AMIN mengadakan berbagai kegiatan
          seperti Majlis Taklim, pengajian bulanan, serta kegiatan sosial dan
          budaya. Kami berkomitmen menjadi wahana yang memperkuat nilai-nilai
          keilmuan, keagamaan, dan ukhuwah islamiyah di kalangan pemuda
          Alawiyyin dan seluruh umat muslim.
        </p>
      </div>
    </div>
  );
}
