import React, {useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
//import CardLeft from '../CardLeft'
import Projects from '../Projects'
import Center from '../Center'
import 'aos/dist/aos.css';

function Home() {

  return (
    <>
      <HeroSection/>
      <Center/>
      <Cards />
      <Projects/>
      
           
      <Footer />
      
    </>
  );
}

export default Home;
