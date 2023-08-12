import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Nav() {
  return (
    <nav className="text-[#17A052] p-5 pl-10 flex justify-between ">
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
      <div className="flex text-lg items-center space-x-10 px-10 ">
        <a href="#" className="hover:text-[#17a05278] transition-colors">
          Home
        </a>
        <ScrollLink
          to="Sejarah"
          smooth={true}
          duration={500}
          className="hover:text-[#17a05278] transition-colors cursor-pointer"
        >
          Sejarah
        </ScrollLink>
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
