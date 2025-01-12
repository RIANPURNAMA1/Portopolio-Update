
import { FaCode, FaPaintBrush, FaServer } from 'react-icons/fa'; // Importing icons from react-icons
import HeaderSection from './HeaderSection';


const services = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Building responsive and functional websites using modern technologies.',
    icon: <FaCode className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    name: 'UI/UX Design',
    description: 'Creating user-friendly and visually appealing designs.',
    icon: <FaPaintBrush className="w-8 h-8 text-green-500" />,
  },
  {
    id: 3,
    name: 'Backend Development',
    description: 'Developing robust server-side applications and APIs.',
    icon: <FaServer className="w-8 h-8 text-red-500" />,
  },
];

export default function Services() {

  return (
    <div className="container mx-auto px-4 py-20 service">
      <HeaderSection>
        <div>
          <h1 className="text-3xl font-bold" data-aos="fade-up">WHAT I DO ?</h1>
          <div className='flex justify-center'>
            <div className='w-full md:w-1/2'>
              <p className="mt-2 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
                I am a web developer focused on creating innovative and effective digital solutions.
              </p>
            </div>
          </div>
        </div>
      </HeaderSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(service => (
          <div 
            key={service.id} 
            className="bg-blue-950 bg-opacity-30 hover:bg-opacity-50 hover:shadow-lg transition duration-300 hover:scale-125 hover:bg-black shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-up" // Tambahkan efek fade-up
            data-aos-delay={service.id * 100} // Delay berdasarkan ID
          >
            <div className="mb-4 text-center flex justify-center">
              {service.icon}
            </div>
            <h2 className="text-xl text-white font-semibold">{service.name}</h2>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}