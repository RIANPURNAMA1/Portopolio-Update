import React from 'react';
import HeaderSection from './HeaderSection';
import { Send } from 'lucide-react';

import 'aos/dist/aos.css'; // Impor CSS AOS

const  ContactMe:React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    const WhatsappNumber = '6282118364415'; // Replace with your desired WhatsApp number
    const messageText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const EncodedMessage = encodeURIComponent(messageText);
    const url = `https://wa.me/${WhatsappNumber}?text=${EncodedMessage}`;

    window.open(url, '_blank');
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <div className='contact container mx-auto px-4 py-20' id='contact'>
      <HeaderSection>
        <div>
          <h1 className='text-3xl font-bold' data-aos="fade-up">Get In Touch</h1>
          <p className='w-full sm:w-[300px] text-center text-white font-extralight text-sm text-opacity-60' data-aos="fade-up" data-aos-delay="100">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>
      </HeaderSection>

      {/* Form Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <form onSubmit={handleSubmit} className='border-2 bg-blue-950 bg-opacity-15 border-blue-950 p-6 rounded-lg shadow-md' data-aos="fade-up" data-aos-delay="200">
          <div className='mb-4'>
            <label className='block text-white text-sm font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Your Name'
              className='shadow bg-blue-950 bg-opacity-10 appearance-none border rounded w-full py-2 px-3 text-white text-opacity-60 leading-tight focus:outline-none focus:shadow-outline'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-white text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Your Email'
              className='shadow bg-blue-950 bg-opacity-10 appearance-none border rounded w-full py-2 px-3 text-white text-opacity-60 leading-tight focus:outline-none focus:shadow-outline'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-white text-sm font-bold mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              placeholder='Your Message'
              className='shadow appearance-none border rounded w-full bg-blue-950 bg-opacity-10 py-2 px-3 text-white text-opacity-60 leading-tight focus:outline-none focus:shadow-outline'
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='border-2 border-white flex justify-center items-center gap-2 hover:bg-black hover:bg-opacity-40 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Send Message <Send size={15} />
            </button>
          </div>
        </form>

        {/* Google Maps Section */}
        <div className='w-full rounded-lg shadow-md' data-aos="fade-up" data-aos-delay="300">
          <iframe
          className='rounded-lg'
            title='Google Maps'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7657781053576!2d107.12026197357129!3d-7.267473971404974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68657506562a45%3A0x333e0a62f1f227df!2sTanggeung!5e0!3m2!1sid!2sid!4v1736662313521!5m2!1sid!2sid'
            width='100%'
             height={'100%'}  
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactMe