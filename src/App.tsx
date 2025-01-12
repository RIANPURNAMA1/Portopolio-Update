
import 'aos/dist/aos.css';
import About from './components/About'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Services from './components/Services'
import AOS from  'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App:React.FC = ()=> {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
   <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Project/>
    <ContactMe/>
    <Footer/>
   </>
  )
}

export default App
