import React, { useState } from 'react';
import './ExperienceProjects.css';

const ExperienceProjects = () => {
  const [hover, setHover] = useState(false);

  return (
    <section id="experience-projects" className="experience-projects">
      <div className="container">
        <h2>Experience & Projects</h2>
        <div 
          className="experience-item"
          onMouseEnter={() => setTimeout(() => setHover(true), 3000)}
          onMouseLeave={() => setHover(false)}
        >
          <h3>University Of California, Riverside Information Technology Solutions</h3>
          <p>Cybersecurity Communication Assistant, Nov. 2022 – Present</p>
          <ul>
            <li>Assisted in developing and implementing communication strategies to promote cybersecurity awareness among students, faculty, and staff.</li>
            <li>Collaborated with IT professionals to translate technical concepts into user-friendly language.</li>
            <li>Organized cybersecurity events to foster a culture of cybersecurity across campus.</li>
          </ul>
          {hover && <div className="popup-summary">More detailed summary of your role and accomplishments.</div>}
        </div>
        <div className="experience-item">
          <h3>Dave Min For State Senate</h3>
          <p>Campaign Fellow, May 2020 – Nov. 2020</p>
          <ul>
            <li>Managed social media team of 9 interns for a campaign serving nearly 1,000,000 California State District 37 residents.</li>
            <li>Collaborated with cross-functional teams to develop and execute social media strategies.</li>
            <li>Crafted compelling messaging for a variety of audiences.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Irvine Kumon</h3>
          <p>Tutor, May 2018 – Aug. 2022</p>
          <ul>
            <li>Helped students improve their math and reading skills.</li>
            <li>Worked with students of all ages and skill levels, adapting teaching methods to meet individual needs.</li>
            <li>Collaborated with parents and guardians to set goals and track student progress.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceProjects;

