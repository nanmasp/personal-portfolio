import React from 'react';
import './Hero.css';
import headshot from './nanma.jpg';

console.log(headshot);

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Nanma Pillai</h1>
          <p>Brief description of what you do</p>
          <div className="photo-container">
            <img src= {headshot} alt="Nanma Pillai" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

