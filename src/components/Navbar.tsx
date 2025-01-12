import { User, Home, Laptop, Contact, AlignRight, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import NavMobile from "./NavMobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <nav
        className={`px-2 sm:px-4 py-2.5 flex justify-center mt-3 fixed top-0 left-3 right-3 navbar transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul
          className="flex hidden md:flex py-3 px-6 backdrop-blur-lg text-white bg-black bg-opacity-80 rounded-full space-x-4"
          style={{ width: "max-content" }}
        >
          <li>
            <a href="#home" className="hover:text-gray-300 flex gap-2 items-center">
              Home <Home />
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 flex items-center gap-2">
              About <User  />
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-gray-300 flex items-center gap-2">
              Project <Laptop />
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 flex items-center gap-2">
              Contact <Contact />
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && <NavMobile />}
      <div className="flex justify-between items-center p-3 md:hidden z-50 fixed top-0 left-0 right-0 shadow-md bg-transparent bg-opacity-0 backdrop-blur-3xl">
        <h1 className="text-white text-2xl font-bold">Rian<span className="text-red-800">DEV</span></h1>
        <button
          onClick={toggle}
          className="text-white md:hidden border-2 border-white rounded-md p-2"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <AlignRight className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}