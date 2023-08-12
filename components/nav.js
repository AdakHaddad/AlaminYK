import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Nav() {
  return (
    <nav className="text-[#17A052] p-5 flex justify-between">
      <div className="flex items-center">
        <Image
          src="/images/Logo.png"
          alt="Al-Amin Yogyakarta"
          className="h-8 w-8 mr-2"
          width={32}
          height={32}
        />
        <span className="text-xl font-semibold">Al-Amin Yogyakarta</span>
      </div>
      <div className="flex text-lg items-center space-x-10 px-10 ">
        <a href="#" className="hover:font-bold">
          Home
        </a>
        <ScrollLink
          to="Sejarah"
          smooth={true}
          duration={500}
          className="hover:font-bold cursor-pointer"
        >
          Sejarah
        </ScrollLink>
        <a href="#" className="hover:font-bold">
          Pustaka
        </a>
        <a
          href="https://www.instagram.com/alamin.yogyakarta"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FEFBD6] transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}
