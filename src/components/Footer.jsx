import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-grey text-gray-700 py-10 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <div className="text-sm sm:text-lg text-darktext mb-2 md:mb-0 font-poppins">
          © {new Date().getFullYear()} ederleo. Todos los derechos reservados.
        </div>
        
      </div>
    </footer>
  );
};
