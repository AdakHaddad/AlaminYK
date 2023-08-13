import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="text-[#17A052] p-5 pl-10  justify-between md:flex">
      <div>
        <a href="#" className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="AL-AMIN Yogyakarta"
            className="h-8 w-8 mr-2"
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold">AL-AMIN Yogyakarta</span>
        </a>
      </div>

      <div className=" text-lg items-center space-x-10 px-10  ">
        <a href="#" className="hover:text-[#17a05278] transition-colors">
          Home
        </a>
        <a
          href="#"
          className="hover:text-[#17a05278] transition-colors cursor-pointer"
        >
          Sejarah
        </a>
        <a href="#" className="hover:text-[#17a05278] transition-colors">
          Pustaka
        </a>
        <a
          href="https://www.instagram.com/alamin.yogyakarta"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#17a05278] transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}
