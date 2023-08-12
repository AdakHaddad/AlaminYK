import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

// Separate component for the Google Maps iframe
const GoogleMapIframe = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4359545060547!2d110.39362!3d-7.743496599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a590e2b75e1ab%3A0xbbf9bb58bc1426c1!2sAl%20Amin%20Yogyakarta!5e0!3m2!1sen!2sid!4v1691804028030!5m2!1sen!2sid"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          class="my-4 mx-auto rounded"
        ></iframe>
      `,
    }}
  />
);

export default function Footer() {
  const emailLink = "mailto:alamin.yogyakarta@gmail.com?subject=Inquiry";

  return (
    <footer className="px-10 mt-40 py-10 bg-[#CF8B35] text-white">
      <div>
        <a
          href="https://goo.gl/maps/b1XKudwBibsYx5yL8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:focus"
        >
          <FaMapMarkerAlt className="mr-2 my-2 inline-block" />
          Jl. Srikandi No.22, Ngabean Kulon, Sinduharjo, Ngaglik, Sleman
          Regency, Special Region of Yogyakarta 55581
        </a>
      </div>
      <GoogleMapIframe /> {/* Render the Google Maps iframe */}
      <div className="flex flex-wrap justify-between">
        <p>
          &copy; {new Date().getFullYear()} AL-AMIN Yogyakarta. All rights
          reserved.
        </p>
        <div className="mb-6">
          <a href={emailLink} className="hover:underline">
            <FaEnvelope className="mx-2 my-2 inline-block" />
          </a>
          <a
            href="https://www.instagram.com/alamin.yogyakarta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <FaInstagram className="mx-2 my-2 inline-block" />
          </a>
          <a
            href="https://www.facebook.com/alaminyogyakarta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <FaFacebook className="mx-2 my-2 inline-block" />
          </a>
        </div>
      </div>
    </footer>
  );
}
