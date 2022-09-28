import React from 'react';
import photoCollage from '../images/grid.png'

function Hero() {
  return (
    <div className="hero">
        <img src={photoCollage} className="grid-image"  />     
        <h1 className='hero-heading'>Online Experiences</h1>
        <p className='hero-para'> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>   
    </div>
  );
}

export default Hero;