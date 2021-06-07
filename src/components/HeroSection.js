import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  window.scrollTo(0,0);
  return (
    <div className='hero-container'>
      
      <div className='hero-btns'>
      <Link to='/portfolio' className='nav-links'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            Click here to view our Gallery 
          </Button>
      </Link>
        
      </div>
     
    </div>
  );
}

export default HeroSection;