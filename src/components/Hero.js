import React, { useEffect } from 'react';
import './Hero.css';
import headshot from './nanma.jpg';

const Hero = () => {

  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.background');
      if (parallax) {
        let scrollPosition = window.pageYOffset;
        parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section id="hero" className="hero">
      <div className="background"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Nanma Pillai</h1>
          <p>Computer Science and Business Student</p>
          <div className="photo-container">
            <img src= {headshot} alt="Nanma Pillai" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

