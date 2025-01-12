import { ArrowDown } from "lucide-react"; // Pastikan Anda menggunakan lucide-react
import React from "react";
import Cv from "../assets/rian.pdf";

const Hero: React.FC =()=> {


  const HandleDownload = () => {
   
    const link = document.createElement("a");
    link.href = Cv;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };

  return (
    <div
      className="container mx-auto px-4 pt-48  pb-32 flex justify-center items-center hero"
      id="home"
    >
      <div className="text-center text-white tracking-widest">
        <p className="font-extralight text-sm">
          LET'S BUILD SOMETHING TOGETHER
        </p>
        <h1  className="font-bold text-4xl md:text-5xl w-full md:w-1/2 mx-auto my-2" data-aos="fade-left" data-aos-duration="1000">
          Transforming ideas into engaging web{" "}
          <span className="text-red-800 animate-pulse">solutions</span>
        </h1>
        <p data-aos="fade-right" data-aos-duration="2000" className="w-full md:w-1/2 text-sm mx-auto font-extralight opacity-60 mt-2">
          In this portfolio, I present several superior projects that reflect my
          abilities and creativity. Each project has unique challenges that I
          successfully overcome with innovative solutions.
        </p>
        <div className="mt-7 flex flex-col md:flex-row justify-center items-center">
          <a data-aos="fade-right" data-aos-duration="3000" href="#about" className="border-2 text-white px-4 py-2 rounded mt-4 mx-2 hover:text-slate-600 flex items-center">
            Explore My Work <ArrowDown size={15} />
          </a>
          <button onClick={HandleDownload}  data-aos="fade-left" data-aos-duration="3000" className="border-2 text-white px-4 py-2 rounded mt-4 hover:text-slate-600">
            Resume👌
          </button>
        </div>
      </div>
    </div>
  );
}


export default Hero;