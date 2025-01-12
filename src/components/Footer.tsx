import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // Mengimpor ikon media sosial

const Footer : React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 px-3">
      <div className="container mx-auto text-center flex flex-wrap  justify-between bg-opacity-5">
        <p className="text-lg font-semiBold opacity-50">© 2025 Rian Purnama. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
