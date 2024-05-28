import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import ExperienceProjects from './components/ExperienceProjects';
import Extracurriculars from './components/Extra';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <EducationSkills />
      <ExperienceProjects />
      <Extracurriculars />
      <Footer />
    </div>
  );
}

export default App;
