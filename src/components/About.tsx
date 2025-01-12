import React from "react";
import Images from "../assets/images/imagesRian.jpg";
import ImagesBg from "../assets/images/💻.jpg";

import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaLaravel,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaJs,
} from "react-icons/fa"; // Mengimpor ikon keterampilan dan media sosial
import { SiTailwindcss, SiTypescript } from "react-icons/si"; // Mengimpor ikon untuk Tailwind CSS dan TypeScript
import HeaderSection from "./HeaderSection";

const skills = [
  { id: 1, name: "React", icon: <FaReact className="w-6 h-6 text-blue-500" /> },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNodeJs className="w-6 h-6 text-green-500" />,
  },
  {
    id: 3,
    name: "Laravel",
    icon: <FaLaravel className="w-6 h-6 text-red-700" />,
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />,
  },
  {
    id: 5,
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6 text-blue-600" />,
  },
  { id: 6, name: "CSS", icon: <FaCss3Alt className="w-6 h-6 text-blue-400" /> },
];

const About: React.FC = ()=> {

 

  return (
    <div className="container mx-auto px-4 about" id="about">
      <HeaderSection>
        <div>
          <h1 className="text-4xl font-bold" data-aos="fade-left" data-aos-delay="200">ABOUT ME</h1>
          <p className="w-full sm:w-[300px] text-center font-extralight text-sm opacity-60">
            See more about me here 🤖
          </p>
        </div>
      </HeaderSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white shadow-md border-2 border-blue-950 p-4 rounded-xl">
          <div className="flex flex-col items-center justify-center relative">
            <img
              src={Images}
              className="rounded-full md:w-[250px]" // Adjust size as needed
              alt="Rian Purnama"
              data-aos="zoom-in" // Tambahkan efek zoom-in
            />
            
            {/* Ikon di atas */}
            <div className="absolute top-[30px] left-[50px] transform -translate-x-1/2 bg-black rounded-full p-4">
              <FaLaravel className="text-4xl text-red-800" />
            </div>

            {/* Ikon di bawah */}
            <div className="absolute bottom-[-20px] left-1/3 transform -translate-x-1/2 bg-white rounded-full p-4">
              <FaJs className="text-4xl text-yellow-500 rounded-lg" />
            </div>

            {/* Ikon di samping kanan */}
            <div className="absolute right-[40px] top-[20px] transform -translate-y-1/2 bg-blue-400 rounded-full p-4">
              <FaReact className="text-3xl text-blue-500" />
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold" data-aos="fade-up">Rian Purnama</h2>
            <p className="text-sm font-light opacity-35 animate-pulse">Fullstack Developer</p>
            <p className="w-full mt-4 opacity-60" data-aos="fade-up" data-aos-delay="300">
              I am a Web Developer with 1 year of experience in front-end (HTML,
              CSS, JavaScript, React) and back-end (PHP, Node.js, Python,
              Laravel, Express.js). I manage full-stack projects from design to
              implementation, focusing on web security and responsive solutions.
            </p>
          </div>
        </div>
        <div className="border-2 border-blue-950 p-4 rounded-xl mb-4">
          <h1 className="text-xl font-bold text-white">Skills</h1>
          <div className="">
            <div className="flex flex-wrap justify-center items-center mt-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center card m-2 p-2 bg-blue-950 text-white rounded-lg shadow-md"
                  data-aos="fade-up" // Tambahkan efek fade-up
                  data-aos-delay={skill.id * 100} // Delay berdasarkan ID
                >
                  <div className="">
                    {skill.icon}
                  </div>
                  <span className="ml-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-4">
        <div className="border-2 border-blue-950 p-4 rounded-xl">
          <h1 className="text-xl font-bold text-white">Connect with me</h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 items-center lg:h-32 md:h-0 mt-4">
            <a
              href="https://github.com/RIANPURNAMA1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 my-2 rounded-md mx-2 border-white text-white p-2 hover:bg-blue-800 transition duration-200"
              data-aos="fade-up" // Tambahkan efek fade-up
            >
              <FaGithub className="w-6 h-6 mr-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rian-purnama-3a0169217/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 mx-2 my-2 rounded-md border-white text-white p-2 hover:bg-blue-800 transition duration-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaLinkedin className="w-6 h-6 mr-2" /> LinkedIn
            </a>
            <a
              href="https://instagram.com/riiiiiiiiiiiii7_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 rounded-md mx-2 my-2 border-white text-white p-2 hover:bg-blue-800 transition duration-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaInstagram className="w-6 h-6 mr-2" /> Instagram
            </a>

          </div>
        </div>
        <div className="border-2 border-blue-950 p-4 rounded-xl relative">
          <h2 className="absolute text-xl font-bold text-white top-10 left-10 right-10">
            My Approach: I create functional and visually stunning web
            applications that deliver exceptional user experiences.
          </h2>
          <img
            src={ImagesBg}
            className="w-full h-[200px] hover:scale-95 transition duration-300 rounded-md opacity-25"
            alt=""
            style={{ objectFit: "cover" }}
            data-aos="fade-up" // Tambahkan efek fade-up
          />
        </div>
      </div>
    </div>
  );
}


export default About;