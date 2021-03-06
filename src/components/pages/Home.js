import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Helmet } from 'react-helmet'

const TITLE = 'Frazier Sheet Metal'


function Home() {
  window.scrollTo(0,0);
  return (
    <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <HeroSection />
      <Footer />
      
    </>
  );
}

export default Home;