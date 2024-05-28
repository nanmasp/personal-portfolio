import React from 'react';
import './EducationSkills.css';

const EducationSkills = () => {
  return (
    <section id="education-skills" className="education-skills">
      <div className="container">
        <h2>Education & Skills</h2>
        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>BS, Computer Science with Business Applications, University Of California, Riverside, June 2024</li>
            <li>Relevant Coursework: BUS104, BUS103, CS100, CS10C, CS120A</li>
          </ul>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>Programming Languages: Java, C++, Python, HTML, CSS, React</li>
            <li>Software Development Methodologies: Agile, Scrum</li>
            <li>Technical Skills: Translating business requirements into technical solutions</li>
            <li>Project Management: Multitasking, Prioritizing tasks</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;

