import React, {useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Projects from '../Projects'
import Center from '../Center'
import Aos from "aos";
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    Aos.init({duration : 2000});

}, []);

  return (
    <>
      <HeroSection/>
      <Center/>
      <Cards data-aos="fade-up"/>
      <Projects data-aos="fade-up"/>
      
           
      <Footer />
      
    </>
  );
}

export default Home;
