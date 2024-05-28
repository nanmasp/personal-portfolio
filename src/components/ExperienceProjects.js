import React, { useState } from 'react';
import './ExperienceProjects.css';

const ExperienceProjects = () => {
  const [hover, setHover] = useState(false);

  return (
    <section id="experience-projects">
      <h2>Experience & Projects</h2>
      <div 
        className="experience-item"
        onMouseEnter={() => setTimeout(() => setHover(true), 3000)}
        onMouseLeave={() => setHover(false)}
      >
        <h3>Job Title, Company, Year</h3>
        <p>Responsibilities and Accomplishments</p>
        {hover && <div className="popup-summary">More detailed summary of your role and accomplishments.</div>}
      </div>
    </section>
  );
};

export default ExperienceProjects;

