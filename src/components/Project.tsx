
import HeaderSection from "./HeaderSection";
import { FaReact, FaLaravel, FaCss3Alt, FaBootstrap, FaJs } from 'react-icons/fa'; // Import ikon yang diperlukan
import { ArrowDownRight } from "lucide-react";
import Images1 from "../assets/images/project/ym.jpeg";
import Images2 from "../assets/images/project/toko.jpeg";
import Images3 from "../assets/images/project/food.jpeg";
import Images4 from "../assets/images/project/blog.jpeg";
import Images5 from "../assets/images/project/absensi.jpeg";
import Images6 from "../assets/images/project/chat.jpeg";
import { RiTailwindCssFill, RiTailwindCssLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

// Data proyek
const projects = [
  {
    id: 1,
    title: "Website Sistem Informasi Promo Yomart Paglaran",
    description:
      "Website ini merupakan platform yang dirancang untuk memberikan informasi terkini mengenai promo dan diskon yang tersedia di Yomart Paglaran. Dengan antarmuka yang user-friendly, pengguna dapat dengan mudah menjelajahi berbagai penawaran menarik, melihat detail produk, dan mendapatkan informasi tentang waktu dan lokasi promo. Website ini bertujuan untuk meningkatkan pengalaman belanja pelanggan dengan menyediakan akses cepat dan mudah ke informasi promo, sehingga pelanggan dapat memanfaatkan penawaran terbaik yang tersedia.",
    image: Images1,
    icons: [
      <FaReact className="text-2xl text-blue-500" title="React" />,
      <FaLaravel className="text-2xl text-red-600" title="Laravel" />,
      <FaCss3Alt className="text-2xl text-blue-600" title="CSS" />,
    ],
  },
  {
    id: 2,
    title: "Website Toko Online Komputer Laptop Sederhana",
    description:
      "Website ini adalah platform e-commerce yang menyediakan berbagai produk komputer dan laptop dengan harga terjangkau. Dirancang dengan antarmuka yang sederhana dan intuitif, pengguna dapat dengan mudah menjelajahi katalog produk, membandingkan spesifikasi, dan melakukan pembelian secara online. Website ini juga menawarkan informasi lengkap tentang setiap produk, termasuk ulasan dan panduan pembelian, untuk membantu pelanggan membuat keputusan yang tepat. Dengan sistem pembayaran yang aman dan pengiriman yang cepat, website ini bertujuan untuk memberikan pengalaman belanja yang nyaman dan efisien bagi semua pengguna.",
    image: Images2,
    icons: [
      <FaLaravel className="text-2xl text-red-600" title="Laravel" />,
      <RiTailwindCssFill className="text-2xl text-blue-600" title="CSS" />,
    ],
  },
  {
    id: 3,
    title: "Website Sistem Informasi Makanan Sederhana",
    description:
      "Website ini adalah platform yang dirancang untuk memberikan informasi lengkap tentang berbagai jenis makanan, termasuk resep, nilai gizi, dan tips memasak. Dengan antarmuka yang sederhana dan mudah dinavigasi, pengguna dapat dengan cepat menemukan informasi tentang makanan favorit mereka, menjelajahi kategori makanan, dan mendapatkan inspirasi untuk memasak. Website ini juga menyediakan fitur pencarian yang memudahkan pengguna untuk menemukan resep berdasarkan bahan yang tersedia. Dengan tujuan untuk meningkatkan pengetahuan dan kecintaan terhadap kuliner, website ini menjadi sumber daya yang berguna bagi para penggemar masakan, baik pemula maupun yang berpengalaman.",
    image: Images3,
    icons: [
      <FaReact className="text-2xl text-blue-500" title="React" />,
      <FaLaravel className="text-2xl text-red-600" title="Laravel" />,
      <RiTailwindCssFill className="text-2xl text-blue-600" title="Tailwind" />,
    ],
  },
  {
    id: 4,
    title: "Website Blog Post",
    description:
      "Website ini adalah platform blogging yang menyediakan ruang bagi penulis dan pembaca untuk berbagi dan menemukan konten berkualitas. Dengan antarmuka yang bersih dan responsif, pengguna dapat dengan mudah menjelajahi berbagai kategori artikel, mulai dari gaya hidup, teknologi, kesehatan, hingga perjalanan. Setiap postingan dilengkapi dengan fitur komentar, memungkinkan interaksi antara penulis dan pembaca. Website ini juga menawarkan opsi untuk berbagi artikel di media sosial, sehingga konten dapat menjangkau audiens yang lebih luas. Dengan tujuan untuk menginspirasi dan mendidik, website ini menjadi sumber informasi yang berharga bagi siapa saja yang ingin memperluas wawasan dan pengetahuan mereka.",
    image: Images4,
    icons: [
      <FaLaravel className="text-2xl text-red-600" title="Laravel" />,
      <FaBootstrap className="text-2xl text-violet-600" title="Boostrap" />,
      <FaJs className="text-2xl text-yellow-600" title="js" />,
    ],
  },
  {
    id: 5,
    title: "Aplikasi Absensi Yomart Pagelaran Sederhana (Masih tahap pengembangan)",
    description:
      "Aplikasi Absensi Yomart Pagelaran adalah solusi sederhana yang dirancang untuk memudahkan proses pencatatan kehadiran karyawan di Yomart Pagelaran. Saat ini, aplikasi ini masih dalam tahap pengembangan, dengan fokus pada fitur-fitur dasar seperti pendaftaran karyawan, pencatatan absensi harian, dan laporan kehadiran. Dengan antarmuka yang intuitif, aplikasi ini bertujuan untuk meningkatkan efisiensi manajemen absensi dan meminimalkan kesalahan pencatatan. Di masa depan, kami berencana untuk menambahkan fitur tambahan seperti notifikasi, integrasi dengan sistem penggajian, dan analisis data kehadiran. Aplikasi ini diharapkan dapat memberikan kemudahan dan transparansi dalam pengelolaan absensi karyawan di Yomart Pagelaran.",
    image: Images5,
    icons: [
      <FaReact className="text-2xl text-blue-500" title="React" />,
      <FaLaravel className="text-2xl text-red-600" title="Laravel" />,
      <RiTailwindCssLine className="text-2xl text-blue-600" title="CSS" />,
    ],
  },
  {
    id: 6,
    title: "Aplikasi Chat Grup Sederhana",
    description:
      "Aplikasi Chat Grup Sederhana adalah platform komunikasi yang dirancang untuk memfasilitasi interaksi antar pengguna dalam grup. Dengan antarmuka yang intuitif dan mudah digunakan, aplikasi ini memungkinkan pengguna untuk membuat grup chat, mengirim pesan teks, berbagi gambar, dan melakukan diskusi secara real-time. Fitur notifikasi memastikan bahwa pengguna tidak akan ketinggalan pesan penting, sementara kemampuan untuk menambahkan atau menghapus anggota grup memberikan fleksibilitas dalam pengelolaan komunitas. Aplikasi ini bertujuan untuk meningkatkan kolaborasi dan komunikasi di antara teman, keluarga, atau rekan kerja, menjadikannya alat yang ideal untuk berbagai keperluan.",
    image: Images6,
    icons: [
      <FaLaravel className="text-2xl text-red-600" title="Laravel" />,
      <SiTailwindcss className="text-2xl text-blue-600" title="CSS" />,
    ],
  },
];

export default function Project() {


  return (
    <div className="container mx-auto px-4 py-20" id="project">
      <HeaderSection>
        <div>
          <p className="text-center font-extralight text-sm opacity-40">
            FEATURED IN PROJECT
          </p>
          <h1 className="text-3xl font-bold">A Journey Through My Projects</h1>
          <p className="lg:w-[100%] sm:w-[300px] text-center font-extralight text-sm opacity-60">
            Collection of projects I've worked on, from personal projects to
            collaborations with other developers.
          </p>
        </div>
      </HeaderSection>

      {/* Card Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-blue-950 opacity-65 backdrop-blur-lg rounded-lg shadow-md overflow-hidden border-2 border-blue-950 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-5px]"
            data-aos="fade-up" // Tambahkan efek fade-up
            data-aos-delay={project.id * 100} // Delay berdasarkan ID
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <p className="mt-2 text-white font-extralight text-sm line-clamp-4">
                {project.description}
              </p>
            </div>
            <div className="flex justify-between items-center p-4 space-x-4">
              <div className="flex">
                {project.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="border-2 p-4 rounded-full z-10 m-[-5px] bg-blue-950"
                  >
                    {icon}
                  </div>
                ))}
              </div>
              <div>
                <button onClick={()=>window.location.href='https://github.com/RIANPURNAMA1'} className="flex items-center bg-transparent bg-white gap-2 text-slate-800 border-2 px-4 py-2 rounded-md hover:text-slate-500">
                  Visit <ArrowDownRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}