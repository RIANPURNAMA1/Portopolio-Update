
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Services from './components/Services'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
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
