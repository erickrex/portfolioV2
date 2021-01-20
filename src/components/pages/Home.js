import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
//import CardLeft from '../CardLeft'
import Projects from '../Projects'
import Center from '../Center'
import AOS from "aos";
import 'aos/dist/aos.css';

function Home() {
  AOS.init();
  useEffect(() => {
    AOS.init({duration : 2000});

  }, []);

  return (
    <>
      <HeroSection/>
      <Center/>
      <Cards data-aos='fade-left'/>
      <Projects data-aos="fade-up"/>
      
           
      <Footer />
      
    </>
  );
}

export default Home;
